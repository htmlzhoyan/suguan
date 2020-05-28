<template>
  <div class="historyKnowing">
    <div class="top">
      <ul class="list">
        <li class="item"
            v-for="(item,index) in itemTop"
            :key="index">
          <span @click="goChoice(index)"
                :class="isA===index?'active':''">{{item.name}}</span></li>

      </ul>
    </div>

    <div class="centerBottom"
         v-if="isA===0"
         ref="centerBottom"
         :style="{ height: wrapper + 'px' }">
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
          <div class="left">
            <span>2020-04-20 21:00</span>
            <span>1号楼-1层-1101室</span>
          </div>
          <div class="right">
            <span v-if="item.type==1"
                  class="isB">1人未归</span>
            <span v-else>无异常</span>
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

    <div class="centerBottom"
         v-if="isA===1"
         ref="centerBottom"
         :style="{ height: wrapper + 'px' }">
      <mt-loadmore :top-method="loadTop"
                   @top-status-change="handleTopChange"
                   :bottom-method="loadBottom"
                   @bottom-status-change="handleBottomChange"
                   :bottom-all-loaded="allLoaded"
                   ref="loadmore">
        <div class="centerList"
             v-for="(item,index) in itemList1"
             @click.stop="clickDetail(item)"
             :key="index">
          <div class="left">
            <span>2020-04-20 21:00</span>
            <span>1号楼-1层-1101室</span>
          </div>
          <div class="right">
            <span v-if="item.type==1"
                  class="isB">地面不及格</span>
            <span v-else-if="item.type==2"
                  class="isB">床铺、地面不及格</span>
            <span v-else>合格</span>
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

    <div class="centerBottom"
         v-if="isA===2"
         ref="centerBottom"
         :style="{ height: wrapper + 'px' }">
      <mt-loadmore :top-method="loadTop"
                   @top-status-change="handleTopChange"
                   :bottom-method="loadBottom"
                   @bottom-status-change="handleBottomChange"
                   :bottom-all-loaded="allLoaded"
                   ref="loadmore">
        <div class="centerList"
             v-for="(item,index) in itemList2"
             @click.stop="clickDetail(item)"
             :key="index">
          <div class="left">
            <span>2020-04-20 21:00</span>
            <span>1号楼-1层-1101室</span>
          </div>
          <div class="right">
            <span v-if="item.type==1"
                  class="isB">电器</span>
                   <span v-else-if="item.type==1"
                  class="isB">行为</span>
            <span v-else>无</span>
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



      itemTop: [
        { name: "夜宿", id: 1 },
        { name: "卫生", id: 2 },
        { name: "违规", id: 3 },
      ],
      itemList: [
        { name: "1002室", id: 1, type: 1 },
        { name: "1003室", id: 2, type: 1 },
        { name: "1004室", id: 3, type: 1 },
        { name: "1005室", id: 4, type: 1 },
        { name: "1006室", id: 5 },
        { name: "1007室", id: 6 },
        { name: "1008室", id: 7 },
        { name: "1009室", id: 8, type: 1 },
      ],
      itemList1: [
        { name: "1002室", id: 1, type: 1 },
        { name: "1003室", id: 2, type: 2 },
        { name: "1004室", id: 3, type: 1 },
        { name: "1005室", id: 4, type: 2 },
        { name: "1006室", id: 5 },
        { name: "1007室", id: 6 },
        { name: "1008室", id: 7 },
        { name: "1009室", id: 8, type: 1 },
      ],
      itemList2: [
        { name: "1002室", id: 1, type: 1 },
        { name: "1003室", id: 2, type: 2 },
        { name: "1004室", id: 3, type: 1 },
        { name: "1005室", id: 4, type: 2 },
        { name: "1006室", id: 5 },
        { name: "1007室", id: 6 },
        { name: "1008室", id: 7 },
        { name: "1009室", id: 8, type: 1 },
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
    clickDetail (item) {
      if (this.isA === 0) {
        this.$router.push({
          name: 'nightKnowingDetail',
          query: {
            id: item.id
          }
        })
      } else if (this.isA === 1) {
        this.$router.push({
          name: 'healthCheckDetail',
          query: {
            id: item.id
          }
        })
      } if (this.isA === 2) {
        this.$router.push({
          name: 'violationKnowingDetail',
          query: {
            id: item.id
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
            { name: "1009室", id: 8 + i },
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
        this.itemList = [
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

  },
  created () {
    this.$bus.emit('headerText', '查寝');
  },
  mounted () {

    console.log(this.$refs.centerBottom.offsetTop)
    let windowWidth = document.documentElement.clientWidth;//获取屏幕宽度
    this.wrapper = document.documentElement.clientHeight - this.$refs.centerBottom.offsetTop - 60;
  }
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
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
      width: 33.3%;
      height: 100%;
      span {
        display: inline-block;
        height: 100%;
        padding-left: 5px;
        padding-right: 5px;
        border-bottom: 3px solid #fff;
      }
      .active {
        border-bottom: 3px solid #449bff;
      }
    }
  }
}

.centerBottom {
  padding: 15px 15px 0px 15px;
  overflow: scroll;
}
.centerList {
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 18px 15px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .left {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    font-weight: 400;
    align-items: flex-start;
    span:nth-child(1) {
      color: #333;
      font-size: 16px;
    }
    span:nth-child(2) {
      margin-top: 12px;
      color: #666;
      font-size: 14px;
    }
  }
  .right {
    .isB {
      color: #f34545;
    }
  }
}
</style>