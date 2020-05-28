<template>
  <div>
    <div class="top">
      <img src="~images/default.png" />
      <div class="top_left">
        <div>
          <span class="s_span">齐力</span>
          <span>2019315623</span>
        </div>
        <div>
          <span class="s_span">2019级</span>
          <span>汉</span>
        </div>

      </div>

    </div>
    <div class="center">
      <div class="centerTop">
        <p>
          <span>学生类型</span>
          <span>本科生</span>
        </p>
        <p>
          <span>入学时间</span>
          <span>2019-09-01</span>
        </p>
      </div>
      <div class="centerTop">
        <p>
          <span>手机号</span>
          <span>18654236521</span>
        </p>
        <p>
          <span>身份证</span>
          <span>412325199805124523</span>
        </p>
        <p>
          <span>院系班级</span>
          <span>计算机系-计算机网络技术2班</span>
        </p>
        <p>
          <span>宿舍地址</span>
          <span>龙子湖校区2号楼101</span>
        </p>

      </div>

    </div>
    <div class="bottom">
      <mt-button type="primary" @click="apartment(1)">调宿</mt-button>
      <mt-button type="primary" @click="apartment(2)">对调</mt-button>
      <mt-button type="primary" @click="apartment(3)">退宿</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    apartment (index) {
      if (index === 1) {
        this.$router.push({ name: 'apartmentAdjustment' })
      } else if (index === 2) {
        this.$router.push({ name: 'apartmentFace' })
      } else {
        this.$router.push({ name: 'apartmentCheckout' })
      }

    }
  },
  created () {
    this.$bus.emit('headerText', '学生详情');
  },
}
</script>

<style lang="scss" scoped>
.top {
  background: #fff;
  padding: 9px 0px 11px 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 60px;
    height: 80px;
  }
  .top_left {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 10px;
    div:nth-child(1) {
      font-size: 16px;
      font-weight: 400;
      color: #333;
    }
    div:nth-child(2) {
      font-size: 14px;
      font-weight: 400;
      color: #666;
      margin-top: 20px;
    }
    .s_span {
      margin-right: 5px;
    }
  }
}
.center {
  padding: 10px 15px 10px 15px;
  .centerTop {
    background: #fff;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 10px;
    p {
      border-bottom: 1px solid #e9e9e9;
      height: 40px;
      line-height: 40px;
      span:nth-child(1) {
        color: #666;
        float: left;
      }
      span:nth-child(2) {
        float: right;
      }
    }
    p:last-child {
      border-bottom: 0;
    }
  }
}
.bottom {
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 30%;
    height: auto;
    padding: 8px 0;
    line-height: normal;
    background: rgba(68, 155, 255, 1);
    opacity: 1;
    border-radius: 50px;
    color: #fff;
    font-size: 14px;
  }
}
</style>