<template>
  <div class="knowing"
       @click="goHide">
    <div class="top">
      <ul class="list"
          :style="{ width: wrapperHeight + 'px' }">
        <li class="item"
            v-for="(item,index) in itemList2"
            :key="index">
          <span @click="goChoice(index)"
                :class="isA===index?'active':''">{{item.name}}</span></li>

      </ul>
    </div>
    <div class="center">
      <div class="centerTop">
        <span>全部寝室</span>
        <span>有未归</span>
        <div class="input"
             @click.stop="openValue">
          <input v-model="couponSelected"
                 type="text"
                 readonly
                 placeholder="">
          <img src="~images/jiantou.png"
               :class="{ 'class-a': show}"
               alt="">
          <div class="popper"
               v-if="show">
          </div>
          <div class="list"
               v-show="show">

            <div @click.stop="getvalue(item.name)"
                 :class="item.name === couponSelected ?'selected':''"
                 v-for="item in couponList"
                 :key="item.id">{{ item.name }}</div>

          </div>
        </div>

      </div>
      <div class="centerBottom" ref="centerBottom" :style="{ height: wrapper + 'px' }">
         <mt-loadmore :top-method="loadTop"
                   @top-status-change="handleTopChange"
                   :bottom-method="loadBottom"
                   @bottom-status-change="handleBottomChange"
                   :bottom-all-loaded="allLoaded"
                   ref="loadmore">
        <div class="centerList"
             v-for="(item,index) in itemList"
             @click.stop="clickDetail(item)"
             :key="index">

          <div class="isLeft">{{item.name}}</div>
          <div class="isRight">
            <p>1号床位</p>
            <p>2号床位</p>
            <p>3号床位</p>
            <p>4号床位</p>
            <p>5号床位</p>
            <p class="active">6号床位</p>
          </div>

        </div>

         <div slot="top"
             class="mint-loadmore-top"
             style="text-align:center">
          <span v-show="topStatus !== 'loading'"
                :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <mt-spinner v-show="topStatus == 'loading'"
                      color="#26a2ff"></mt-spinner>
          <span class="mint-loadmore-text">{{ topText }}</span>
        </div>
        <!-- <div v-if="allLoaded"
             style="text-align:center;"
             class="data-none">没有更多数据了</div> -->
        <div slot="bottom"
             class="mint-loadmore-bottom">
          <span v-show="bottomStatus  !== 'loading'"
                :class="{ 'is-rotate': bottomStatus  === 'drop' }">↑</span>
          <span v-show="bottomStatus  === 'loading'">
            <mt-spinner v-show="bottomStatus == 'loading'"
                        color="#26a2ff"></mt-spinner>
            <span class="mint-loadmore-text">{{ bottomText }}</span>
          </span>
        </div>
        
      </mt-loadmore>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
       allLoaded: false,//数据是否加载完毕
      bottomStatus: '',//底部上拉加载状态
       topStatus: '',//顶部下拉加载状态
      topText: '',
      topPullText: '下拉刷新',
      topDropText: '释放更新',
      topLoadingText: '加载中...',
      bottomText: '',
      bottomPullText: '上拉刷新',
      bottomDropText: '释放更新',
      bottomLoadingText: '加载中...',
      wrapper: 0,
      isA: 0,
      show: false,
      wrapperHeight:0,
      couponSelected: '',
      couponList: [
        {
          id: '1',
          name: '1层'
        },
        {
          id: '2',
          name: '2层'
        },
        {
          id: '3',
          name: '3层'
        },
        {
          id: '4',
          name: '4层'
        },
        {
          id: '5',
          name: '5层'
        },
        {
          id: '6',
          name: '6层'
        },
        {
          id: '7',
          name: '7层'
        }
      ],
      itemList2: [
        { name: "1002室", id: 1 },
        { name: "1003室", id: 2 },
        { name: "1004室", id: 3 },
        { name: "1005室", id: 4 },
        { name: "1006室", id: 5 },
        { name: "1007室", id: 6 },
        { name: "1008室", id: 7 },
        { name: "1009室", id: 8 },
      ],
      itemList: [
        { name: "1002室", id: 1 },
        { name: "1003室", id: 2 },
        { name: "1004室", id: 3 },
        { name: "1005室", id: 4 },
        { name: "1006室", id: 5 },
        { name: "1007室", id: 6 },
        { name: "1008室", id: 7 },
        { name: "1009室", id: 8 },
      ]
    }
  },
  watch: {
    topStatus (val) {
      switch (val) {
        case 'pull':
          this.topText = this.topPullText;
          break;
        case 'drop':
          this.topText = this.topDropText;
          break;
        case 'loading':
          this.topText = this.topLoadingText;
          break;
      }
    },
    bottomStatus (val) {
      switch (val) {
        case 'pull':
          this.bottomText = this.bottomPullText;
          break;
        case 'drop':
          this.bottomText = this.bottomDropText;
          break;
        case 'loading':
          this.bottomText = this.bottomLoadingText;
          break;
      }
    }
  },
  methods: {
    clickDetail(item){
      if(this.$route.query.type==1){
         this.$router.push({
              name:'nightKnowing',
              query:{
                id:item.id
              }
          })
      }else if(this.$route.query.type==2){
         this.$router.push({
              name:'healthCheck',
              query:{
                id:item.id
              }
          })
      }if(this.$route.query.type==3){
         this.$router.push({
              name:'violationKnowing',
              query:{
                id:item.id
              }
          })
      }
      
    },
     handleBottomChange (status) {
      this.bottomStatus = status;
    },
    loadBottom () {
      this.handleBottomChange("loading");//上拉时 改变状态码
      setTimeout(() => {
        for (let i = 1; i <= 5; i++) {
          this.itemList.push(
             { name: "1009室", id: 8+i },
          );
        }
        this.handleBottomChange("loadingEnd");//数据加载完毕 修改状态码
        this.$refs.loadmore.onBottomLoaded();
      }, 2500);
    },
    handleTopChange (status) {
      this.topStatus = status;
    },
    loadTop () {
      this.handleTopChange("loading");//下拉时 改变状态码
      setTimeout(() => {
        this.itemList =  [
        { name: "1002室", id: 1 },
        { name: "1003室", id: 2 },
        { name: "1004室", id: 3 },
        { name: "1005室", id: 4 },
        { name: "1006室", id: 5 },
        { name: "1007室", id: 6 },
        { name: "1008室", id: 7 },
        { name: "1009室", id: 8 },
      ]
        this.handleTopChange("loadingEnd")//数据加载完毕 修改状态码
        this.$refs.loadmore.onTopLoaded();
      }, 1500);

    },
    goChoice (index) {
      this.isA = index
    },
    openValue () {
      this.show = !this.show;
    },
    getvalue (name) {
      this.couponSelected = name;
      this.show = false;
    },
    goHide () {
      this.show = false
    },
  },
  created () {
    this.$bus.emit('headerText', '查寝');
  },
  mounted () {
    this.wrapperHeight = this.itemList.length * 100
    this.couponSelected = this.couponList[0].name;
     let windowWidth = document.documentElement.clientWidth;//获取屏幕宽度
    this.wrapper = document.documentElement.clientHeight - this.$refs.centerBottom.offsetTop - 60;
  }
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  overflow-x: scroll;
  .list {
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    .item {
      width: 100px;
      height: 100%;
      span {
        display: inline-block;
        height: 100%;
        padding-left: 5px;
        padding-right: 5px;
        border-bottom: 3px solid #fff;
      }
      .active {
        color: #449bff;
        border-bottom: 3px solid #449bff;
      }
    }
  }
}
.center {
  .centerTop {
    padding: 0px 20px;
    height: 30px;
    line-height: 30px;
    .input {
      width: 40px;
      position: relative;
      color: #999;
      float: right;
      input {
        border: none;
        outline: none;
        width: 50px;
        background: #f4f4f4;
      }
      img {
        position: absolute;
        right: -4px;
        top: 8px;
        transition: 0.2s;
      }
      .class-a {
        transform: rotate(180deg);
      }
      .popper {
        width: 0;
        height: 0;
        position: absolute;
        bottom: -1px;
        right: 20px;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #fff;
        z-index: 100;
      }

      .list {
        position: absolute;
        right: -5px;
        top: 24px;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        margin: 5px 0;
        max-height: 170px;
        overflow: scroll;
        div {
          font-size: 13px;
          padding: 0 20px;
          position: relative;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #606266;
          height: 34px;
          line-height: 34px;
          box-sizing: border-box;
          cursor: pointer;
        }
        .selected {
          color: #449bff;
          font-weight: 700;
        }
      }
    }

    span:nth-child(1) {
      color: #999;
      font-size: 13px;
      font-weight: 400;
      margin-right: 15px;
    }
    span:nth-child(2) {
      color: #449bff;
      font-size: 13px;
      font-weight: 400;
    }
  }
  .centerBottom {
    padding: 0 15px 0px 15px;
     overflow:scroll
  }
  .centerList {
    box-sizing: border-box;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 11px 0;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .isLeft {
      width: 75px;
      height: 100%;
      border-right: 1px solid #e9e9e9;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active{
      color: #F34545;
    }
    .isRight {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-content: center;;
      p {
        height: 30px;
        width: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>