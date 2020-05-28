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
      wrapperHeight:0,

      itemList2: [
        { name: "1层", id: 1 },
        { name: "2层", id: 2 },
        { name: "3层", id: 3 },
        { name: "4层", id: 4 },
        { name: "5层", id: 5 },
        { name: "6层", id: 6 },
        { name: "7层", id: 7 },
        { name: "8层", id: 8 },
      ],
      itemList : [
        { name: "1001室", id: 1 },
        { name: "1002室", id: 2 },
        { name: "1003室", id: 3 },
        { name: "1004室", id: 4 },
        { name: "1005室", id: 5 },
        { name: "1006室", id: 6 },
        { name: "1007室", id: 7 },
        { name: "1007室", id: 8 },
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
         this.$router.push({
              name:'chooseRoomDetail',
              query:{
                id:item.id
              }
          })
    },
     handleBottomChange (status) {
      this.bottomStatus = status;
    },
    loadBottom () {
      this.handleBottomChange("loading");//上拉时 改变状态码
      setTimeout(() => {
        for (let i = 1; i <= 5; i++) {
          this.itemList.push(
             { name: "1001室", id: 8+i },
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
        { name: "1001室", id: 1 },
        { name: "1002室", id: 2 },
        { name: "1003室", id: 3 },
        { name: "1004室", id: 4 },
        { name: "1005室", id: 5 },
        { name: "1006室", id: 6 },
        { name: "1007室", id: 7 },
        { name: "1007室", id: 8 },
      ]
        this.handleTopChange("loadingEnd")//数据加载完毕 修改状态码
        this.$refs.loadmore.onTopLoaded();
      }, 1500);

    },
    goChoice (index) {
      this.isA = index
    },
    goHide () {
      this.show = false
    },
  },
  created () {
    this.$bus.emit('headerText', '选房');
  },
  mounted () {
    this.wrapperHeight = this.itemList.length * 100
  
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
        color: #449BFF;
        border-bottom: 3px solid #449bff;
      }
    }
  }
}
.center {

  .centerBottom {
    padding: 10px 15px 0px 15px;
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
      color: #449BFF;
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