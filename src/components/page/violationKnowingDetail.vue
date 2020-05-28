<template>
  <div class="healthCheckDetail">
    <div class="center">
      <div class="centertop">
        <span>
          违章检查
        </span>
        <span>
          1号楼-1层-1101室
        </span>
      </div>
      <div class="centercenter">
       <p class="first">
         <span>电器</span>
          <span class="active">有</span>
       </p>
        <p class="first">
         <span>行为</span>
          <span>无</span>
       </p>
         <p class="last">
          <span>备注：</span>
          <span>违规使用大功率电器</span>
       </p>
      </div>
      <div class="centerbottom">
        <p>
          <img src="~images/default.png">
        </p>
        <p class="imgCenter">
          <img src="~images/default.png">
        </p>
        <p>
          <img src="~images/default.png">
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
  created () {
    this.$bus.emit('headerText', '详情');
  },
}
</script>

<style lang="scss" scoped>
.healthCheckDetail {
  padding: 10px 15px;
}
.center {
  background: #fff;
  padding: 0px 16px;
  .centertop {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e9e9e9;
    span:nth-child(1) {
      border-left: 3px solid #449bff;
      padding-left: 6px;
      font-size: 16px;
    }
    span:nth-child(2) {
      color: #666;
      float: right;
      font-size: 13px;
    }
  }
  .centercenter {
    .first{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid #E9E9E9;
      padding: 0 14px;
      span:nth-child(1){
        color: #666;
      }
       span:nth-child(2){
        color: #666;
      }
      .active{
        color: #F34545!important;
      }
    }
    .last{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 50px;
      border-bottom: 1px solid #E9E9E9;
      padding: 0 14px;
      span:nth-child(1){
        color: #666;
      }
       span:nth-child(2){
        color: #333;
      }
    
    }
  }
  .centerbottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 13px 0;
    p {
      width: 33.3%;
      height: 90px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .imgCenter{
      margin-left: 18px;
      margin-right: 18px;
    }
  }
}
</style>