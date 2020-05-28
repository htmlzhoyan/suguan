<template>
  <div class="healthCheckDetail">
    <div class="center">
      <div class="centertop">
        <span>
          夜宿检查
        </span>
        <span>
          1号楼-1层-1101室
        </span>
      </div>
      <div class="centercenter">
        <div class="first">
          <p>
            <span>3号床</span>
            <span>李琦四</span>
            <span>20201456324</span>
          </p>
          <p>
            <span>特殊理由</span>
            <span>学校运动会做志愿者未能及时赶回</span>
          </p>
        </div>

        <div class="second">
          <p>
            <span>5号床</span>
            <span>李琦四</span>
            <span>20201456324</span>
            <span>请假</span>
          </p>
       
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
    .first {
      border-bottom: 1px solid #e9e9e9;
      color: #333;
      font-size: 14px;
      padding-bottom: 13px;
      padding-left: 10px;
      padding-right: 10px;
      p:nth-child(1) {
        margin-top: 13px;
        span:nth-child(2) {
          margin-left: 20px;
          margin-right: 20px;
        }
      }
      p:nth-child(2) {
        line-height: 1.5;
        margin-top: 13px;
        font-size: 13px;
        span:nth-child(1) {
          color: #f34545;
          margin-right: 10px;
        }
        span:nth-child(2) {
          color: #666666;
        }
      }
    }
    .second{
       color: #333;
      font-size: 14px;
      padding-bottom: 13px;
      padding-left: 10px;
      padding-right: 10px;
      p{
        margin-top: 13px;
        span:nth-child(2) {
          margin-left: 20px;
          margin-right: 20px;
        }
         span:nth-child(4) {
          float: right;
          color: #449BFF;
        }
      }
    }
  }
}
</style>