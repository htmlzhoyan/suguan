<template>
  <div class="chooseRoom">
    <div class="isTop" @click="goNext">
      <div class="isT">
           <img src="~images/fangzi.png"
           alt="">
      </div>
   
      <div class="isBottom">
        <span>公寓1号楼</span>
        <p>
          <img src="~images/chuagn1.png"
               alt="">
          <span>2520</span>
          <img class="img" src="~images/chuagn2.png"
               alt="">
          <span>51</span>
        </p>
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
  methods:{
    goNext(){
       this.$router.push({ name: 'chooseRoomLayer' })
    }
  },
  created () {
    this.$bus.emit('headerText', '选房');
  }
}
</script>

<style lang="scss" scoped>
.chooseRoom {
  padding: 10px 15px;
  .isTop {
    box-shadow:0px 2px 3px rgba(0,0,0,0.05);
    border-radius: 5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .isBottom {
    height: 50px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    span {
      font-size: 18px;
      font-weight: 400;
     color: rgba(51, 51, 51, 1);
      opacity: 1;
    }
    p{
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 16px;
      }
      span{
        margin-left: 10px;
      }
      .img{
        margin-left: 20px;
      }
    }
  }
}
</style>