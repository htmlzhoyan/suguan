<template>
  <div class="apartmentWindows">
    <div class="header">
      <div class="headerSearch">
        <form @submit.prevent
              action="#">
          <input type="search"
                 @keyup.13="tapToSearch"
                 v-model="searchValue"
                 placeholder="请输入楼宇名称">
        </form>
        <div @click="tapToSearch">搜索</div>
      </div>
      <div class="headerCenter">龙子湖校区</div>
      <ul>
        <li>
          <span>13个</span>
          <span>院系数</span>
        </li>
        <li>
          <span>10个</span>
          <span>楼宇数</span>
        </li>
        <li>
          <span>16523个</span>
          <span>床位数</span>
        </li>
        <li>
          <span>15821人</span>
          <span>已入住</span>
        </li>
      </ul>
    </div>
    <div ref="iswindowTop" class="isTop" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :top-method="loadTop"
                   @top-status-change="handleTopChange"
                   :bottom-method="loadBottom"
                   @bottom-status-change="handleBottomChange"
                   :bottom-all-loaded="allLoaded"
                   ref="loadmore">
        <div class="center">
          <div class="list"
               v-for="(item,index) in itemList"
               @click="goDetail(index)"
               :key="index">
            <p class="listTop">2号楼/明志居</p>
            <div class="centerList">
              <p>
                <span>8个</span>
                <span>院系数</span>
              </p>
              <p>
                <span>1465个</span>
                <span>床位数</span>
              </p>
              <p>
                <span>1356人</span>
                <span>已入住</span>
              </p>
            </div>

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
      searchValue: "",
      itemList: [1, 2, 3, 4, 5, 6, 7],
      allLoaded: false,//数据是否加载完毕
      bottomStatus: '',//底部上拉加载状态
      wrapperHeight: 0,//容器高度
      topStatus: '',//顶部下拉加载状态
      topText: '',
      topPullText: '下拉刷新',
      topDropText: '释放更新',
      topLoadingText: '加载中...',
      bottomText: '',
      bottomPullText: '上拉刷新',
      bottomDropText: '释放更新',
      bottomLoadingText: '加载中...',

    }
  },
  mounted () {
    let windowWidth = document.documentElement.clientWidth;//获取屏幕宽度
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.iswindowTop.offsetTop - 40;
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
    goDetail(id){
     this.$router.push({name: 'apartmentDetail', query: {id: id}})
    },
    tapToSearch (val) {
      alert(1)
    },
    handleBottomChange (status) {
      this.bottomStatus = status;
    },
    loadBottom () {
      this.handleBottomChange("loading");//上拉时 改变状态码
      setTimeout(() => {
        for (let i = 1; i <= 5; i++) {
          this.itemList.push(i);
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
        this.itemList = [1, 2, 3, 4, 5, 6, 7]
        this.handleTopChange("loadingEnd")//数据加载完毕 修改状态码
        this.$refs.loadmore.onTopLoaded();
      }, 1500);

    },




  },
  created () {
    this.$bus.emit('headerText', '公寓视窗');
  }

}
</script>

<style lang="scss" scoped>
.isTop{
  overflow:scroll
}
.header {
  background: #fff;
  padding: 10px 15px 20px 15px;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span:nth-child(1) {
        font-size: 16px;
      }
      span:nth-child(2) {
        color: #666;
        font-size: 12px;
        margin-top: 10px;
      }
    }
  }
}
.headerCenter {
  height: 48px;
  line-height: 48px;
  text-align: center;
}
.headerSearch {
  width: 100%;
  border-radius: 50px;
  position: relative;
   div {
      width: 48px;
      background: linear-gradient(
        270deg,
        rgba(68, 155, 255, 1) 0%,
        rgba(110, 177, 252, 1) 100%
      );
      border-radius: 50px;
      color: #fff;
      font-size: 12px;
      line-height: normal;
      padding: 3px 0;
      position: absolute;
      right: 8px;
      top: 4px;
      text-align: center;
    }
  input {
    border-radius: 50px;
    height: 30px;
    line-height: 30px;
    outline: none;
    border: none;
    background: url(../../assets/images/search.png) 3% no-repeat;
    background-size: 12px;
    padding-left: 32px;
    padding-right: 65px;
    background-color: #f4f4f4;
    width: 100%;
  }
}
.center {
  padding: 10px 15px 10px 15px;

  .list {
    background: #fff;
    margin-bottom: 10px;
    padding: 0 16px 0 16px;
    .listTop {
      height: 30px;
      line-height: 30px;
      padding-left: 4px;
      border-bottom: 1px solid #e9e9e9;
    }
    .centerList {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 70px;
      p {
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span:nth-child(1) {
          font-size: 16px;
        }
        span:nth-child(2) {
          color: #666;
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>