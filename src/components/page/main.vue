<template>
  <div>
    <div class="isCenter">
      <div class="top">龙子湖校区</div>
      <div class="center">
        <div class="list pgr10">
          <router-link tag="div" :to="{name: 'apartmentWindows'}">
            <img src="~images/gongyu.png">
            <span>公寓视窗</span>
          </router-link>

        </div>
        <div class="list pgl10">
          <router-link tag="div" :to="{name: 'knowing',query:{type:'1'}}">
            <img src="~images/sleep.png">
            <span>夜宿查寝</span>
          </router-link>
        </div>

        <div class="list pgr10">
         <router-link tag="div" :to="{name: 'knowing',query:{type:'2'}}">
            <img src="~images/weisheng.png">
            <span>卫生查寝</span>
          </router-link>
        </div>
        <div class="list pgl10">
          <router-link tag="div" :to="{name: 'knowing',query:{type:'3'}}">
            <img src="~images/weigui.png">
            <span>违规查寝</span>
           </router-link>
        </div>
        <div class="list pgr10">
           <router-link tag="div" :to="{name: 'apartmentAdjustment'}">
            <img src="~images/tiaoxiu.png">
            <span>学生调宿</span>
          </router-link>
        </div>
        <div class="list pgl10">
          <router-link tag="div" :to="{name: 'apartmentCheckout'}">
            <img src="~images/tuisu.png">
            <span>学生退宿</span>
          </router-link>
        </div>
        <div class="list pgr10">
          <router-link tag="div" :to="{name: 'newChooseRoom'}">
            <img src="~images/3.png">
            <span>新生选房</span>
          </router-link>
        </div>
        <div class="list pgl10">
         <router-link tag="div" :to="{name: 'historyKnowing'}">
            <img src="~images/jilu.png">
            <span>查寝记录</span>
         </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created(){
     this.$bus.emit('headerText', '首页');
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
.isCenter {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
}
.top {
  height: 33px;
  font-size: 14px;
  color: #333;
  line-height: 33px;
  font-weight: 400;
}
.center {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
  .list {
    width: 50%;
    margin-bottom: 20px;
    div {
      display: inline-flex;
      width: 100%;
      background: #fff;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      height: 120px;
      background: rgba(255, 255, 255, 1);
      border-radius: 5px;
      img {
        width: 60px;
        height: 60px;
      }
      span {
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}
</style>


