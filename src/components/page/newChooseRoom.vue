<template>
  <div class="newChooseRoom">
    <div class="top">
      <div class="isTop">
        <p>1.二维码分享</p>
        <p>
          <img src="~images/erweima.png"
               alt="">
          <span>长按保存二维码</span>
        </p>
      </div>
      <div class="isCenter">
        <p>2.链接分享</p>
        <p>
          <span>https://www.zcool.com.cn/work/ZN...</span>
          <mt-button type="primary">复制链接</mt-button>
        </p>

      </div>

      <div class="isBottom">
        <p><span>3.教师分配</span><span>需在PC端操作</span></p>
        
      </div>

       <div class="isBottom">
         <mt-button type="primary" @click="goNext">已选房</mt-button>
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
       this.$router.push({ name: 'chooseRoom' })
    }
  },
  created () {
    this.$bus.emit('headerText', '新生选房');
  }
}
</script>

<style lang="scss" scoped>
.newChooseRoom {
  padding: 10px 15px;
  .top {
    background: #fff;
    padding: 20px;
    .isTop {
      p:nth-child(1) {
        color: #333;
      }
      p:nth-child(2) {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          width: 160px;
          height: 160px;
        }
        span {
          color: #999999;
          font-size: 12px;
          margin-top: 5px;
        }
      }
    }
    .isCenter {
      p:nth-child(1) {
        color: #333;
        margin-top: 20px;
      }
      p:nth-child(2) {
        margin-top: 13px;
        padding-left: 10px;
        height: 24px;
        span {
          width: 75%;
          background: rgba(244, 244, 244, 1);
          color: #999999;
          border-radius: 3px;
          padding: 5px 5px;
          float: left;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        button {
          float: right;
          height: auto;
          line-height: normal;
          font-size: 12px;
          padding: 5px 0;
          width: 20%;
        }
      }
    }
    .isBottom{
      button{
          height: auto;
          line-height: normal;
          font-size: 12px;
          padding: 5px 0;
          width: 20%;
          margin-top: 20px;
      }
         p {
        color: #333;
        margin-top: 20px;
        span:nth-child(2){
          color: #999999;
          font-size: 12px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>