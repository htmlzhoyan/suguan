<template>
  <div>
    <div class="top">
      <img src="~images/fangzi.png"
           alt="">
      <div>
        <span>
          当前位置：1号楼-1层-1101室
        </span>

      </div>
    </div>
    <div class="bottom"
         ref="isnightBottom"
         :style="{ height: wrapperHeight + 'px' }">
      <div v-for="(item,index) in studentList"
           :key="index"
           class="bottomList">
        <div class="bottomRight"
             v-if="item.flag===0">
          <div class="triangle">

          </div>
          <span>{{index+1}}</span>
        </div>
        <div class="bottomFirst">

          <img src="~images/imgDefault.png"
               alt="">

          <div v-if="item.flag===0">
            <span>张笛</span>
            <span>2014级软件技术普招</span>
            <span>篮球</span>
          </div>
          <div v-if="item.flag===1">
            <span>{{index+1}}号床位</span>
            <span>未入住</span>

          </div>
        </div>
        <div v-if="item.flag===0"
             class="bottomSecond"
             @click="goCheck">
          <mt-button class="normal"
                     type="primary"
                     v-if="item.type===0">正常</mt-button>
          <mt-button class="noback"
                     type="primary"
                     v-if="item.type===1">未归</mt-button>
        </div>
      </div>
    </div>

    <div class="boxMessage"
         @click.stop="goBack"
         v-if="isMessage">
      <div class="boxContent"
           @click.stop="goCheck">
        <p class="isBoxTop">修改状态</p>
        <div class="isBoxButton">
          <div @click.stop="goChoice(index)"
               v-for="(item,index) in boxList"
               :key="index"
               class="normal"
               :class="classA === index ? 'choice' : 'noChoice' ">{{item}}</div>
        </div>

        <div class="isBoxCenter">
          <p>特殊理由输入</p>
          <mt-field label=""
                    placeholder="请输入..."
                    type="textarea"
                    rows="4"
                    v-model="introduction"></mt-field>
        </div>
        <div class="isBoxBottom">
          <mt-button @click.stop="goBack">取消</mt-button>
          <mt-button @click.stop="goTrue">确定</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      introduction: '',
      wrapperHeight: 0,//容器高度
      isMessage: false,
      studentList: [
        { name: '赵岩一', type: 0, flag: 0 },
        { name: '赵岩二', type: 1, flag: 1 },
        { name: '赵岩', type: 0, flag: 0 },
        { name: '赵岩', type: 1, flag: 0 },
        { name: '赵岩', type: 0, flag: 0 },
        { name: '赵岩', type: 1, flag: 0 },
      ],
      classA: 0,
      boxList: [
        "请假", "学习", "工作"
      ]
    }
  },
  mounted () {
    let windowWidth = document.documentElement.clientWidth;//获取屏幕宽度
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.isnightBottom.offsetTop - 40;
  },
   created () {
    this.$bus.emit('headerText', '夜宿查寝');
  },
  methods: {
    goTrue () {
      this.isMessage = false
    },
    goBack () {
      this.isMessage = false
    },
    goChoice (index) {
      this.classA = index
    },
    goCheck () {
      this.isMessage = true
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  height: 150px;
  width: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  div {
    position: absolute;
    bottom: -20px;
    width: 100%;
    text-align: center;
    height: 40px;
    color: #333;
    font-size: 16px;
    line-height: 40px;
    padding: 0 15px 0px 15px;
    font-weight: 400;
    span {
      background: #fff;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: 5px;
    }
  }
}
.bottom {
  margin-top: 40px;
  padding: 0 15px 20px 15px;
  overflow: auto;
  .bottomList {
    height: 100px;
    background: rgba(255, 255, 255, 1);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 10px;
    position: relative;
    .bottomRight {
      position: absolute;
      right: 0;
      top: 0;
      .triangle {
        width: 0;
        height: 0;
        border-top-right-radius: 5px;
        border-top: 18px solid rgba(68, 155, 255, 0.2);
        border-right: 18px solid rgba(68, 155, 255, 0.2);
        border-bottom: 18px solid #fff;
        border-left: 18px solid #fff;
      }
      span {
        position: absolute;
        right: 7px;
        top: 2px;
        font-size: 14px;
        color: rgba(68, 155, 255, 1);
      }
    }
    .bottomFirst {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-left: 15px;
        height: 100%;
        span:nth-child(1) {
          color: #333;
          font-size: 16px;
        }
        span:nth-child(2) {
          color: #666;
          font-size: 14px;
          margin-top: 5px;
          margin-bottom: 5px;
        }
        span:nth-child(3) {
          width: 50px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          background: rgba(68, 155, 255, 0.2);
          border-radius: 50px;
          color: #449bff;
          font-size: 12px;
        }
      }
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
    .bottomSecond .normal {
      width: 80px;
      height: auto;
      line-height: normal;
      padding: 6px 0;
      background: #93e4c3;
      border-radius: 50px;
      color: #fff;
      font-size: 14px;
    }
    .bottomSecond .noback {
      width: 80px;
      height: auto;
      line-height: normal;
      padding: 6px 0;
      background: #fb3232;
      border-radius: 50px;
      color: #fff;
      font-size: 14px;
    }
  }
}
.boxMessage {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  .boxContent {
    z-index: 2001;
    position: fixed;
    top: 30%;
    left: 50%;
    margin-left: -40%;
    background-color: #fff;
    width: 80%;
    border-radius: 3px;
    overflow: hidden;
    backface-visibility: hidden;
    padding: 20px;
    .isBoxButton {
      height: 65px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      div {
        width: 30%;
        font-size: 12px;
        border-radius: 50px;
        text-align: center;
        line-height: normal;
        padding: 5px 0;
      }
      .choice {
        background: #449bff;
        color: #fff;
      }
      .noChoice {
        background: #f4f4f4;
        color: #999999;
      }
    }
    .isBoxCenter {
      p {
        font-size: 12px;
        margin-bottom: 8px;
      }
      a {
        border: 1px solid rgba(221, 221, 221, 1);
        border-radius: 5px;
        /deep/ .mint-field-core {
          font-size: 12px;
        }
      }
    }
    .isBoxBottom {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button:nth-child(1) {
        font-size: 14px;
        width: 45%;
        line-height: normal;
        height: auto;
        padding: 6px 0;
        background: rgba(233, 233, 233, 1);
        border-radius: 50px;
        color: #666666;
      }
      button:nth-child(2) {
        font-size: 14px;
        width: 45%;
        line-height: normal;
        height: auto;
        padding: 6px 0;
        background: rgba(68, 155, 255, 1);
        border-radius: 50px;
        color: #fff;
      }
    }
    .isBoxTop {
      font-size: 14px;
    }
  }
}
</style>