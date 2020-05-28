<template>
  <div>
    <mt-header fixed
               :title="title">
      <div slot="left" v-if="isHide">
         <mt-button  @click="goBack" 
                 icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="mgt40">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      isHide:true
    }
  },
  created(){
    this.$bus.on('headerText',text=> {
        this.title = text;
        if(this.title === '首页' || this.title === '登录'){
          this.isHide = false
        }else{
           this.isHide = true
        }
    });
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style>
.mint-header{
  padding-left: 15px;
}
.mint-header-title{
    font-size: 15px;
}
</style>
