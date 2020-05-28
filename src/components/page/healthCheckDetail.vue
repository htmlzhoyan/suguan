<template>
  <div class="healthCheckDetail">
    <div class="center">
      <div class="centertop">
        <span>
          卫生检查
        </span>
        <span>
          1号楼-1层-1101室
        </span>
      </div>
      <div class="centercenter">
        <p>
          <span>地面</span>
          <span>80~100分</span>
        </p>
        <p class="imgCenter">
          <span>床铺</span>
          <span>80~100分</span>
        </p>
        <p>
          <span>桌面</span>
          <span>80~100分</span>
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
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e9e9e9;
    align-items: center;
    p {
      width: 33.3%;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span:nth-child(1) {
        color: #666;
        font-size: 14px;
      }
      span:nth-child(2) {
        margin-top: 10px;
        color: #449bff;
        font-size: 15px;
      }
    }
    .imgCenter{
      margin-left: 18px;
      margin-right: 18px;
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