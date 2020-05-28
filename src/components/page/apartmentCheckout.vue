<template>
  <div>
    <div class="header">
      <div class="headerSearch">
        <form @submit.prevent
              action="#">
          <input type="search"
                 @keyup.13="tapToSearch"
                 v-model="searchValue"
                 placeholder="请输入院系/年级/姓名/学号">
        </form>
        <div @click="tapToSearch">搜索</div>
      </div>

    </div>
    <div class="center"
         v-if="!hideShow">
      <div class="centerTop"
           v-for="(child,index) in itemList"
           :key="index">
        <div>
          <span>{{child.parent}}</span>
          <img @click="goDown(index)"
               :class="{'class-a': child.isA}"
               src="~images/jiantou.png"
               alt="">
        </div>

        <div v-if="!child.isA">
          <p v-for="(item,index) in child.item"
             :key="index">
            <span>{{item.name}}</span>
            <span>退宿</span>
          </p>
        </div>
      </div>

    </div>
    <div class="bottom"
         v-if="hideShow">
      <div v-for="(item,index) in studentList"
           :key="index"
           class="bottomList">

        <div class="bottomFirst">

          <img src="~images/imgDefault.png"
               alt="">

          <div>
            <span>赵岩</span>
            <span>学号：201956235</span>
          </div>
        </div>
        <div class="bottomSecond"
             @click="goCheck">
          <mt-button type="primary">退宿</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hideShow: false,
      searchValue: "",
      studentList: [
        { name: '赵岩一' },
        { name: '赵岩二' },
        { name: '赵岩' }
      ],
      itemList: [
        {          parent: '计算机系',
          isA: true,
          item: [
            { name: '2016级', id: 1 }, { name: '2017级', id: 2 }, { name: '2018级', id: 3 }, { name: '2019级', id: 4 }]
        },
        {          parent: '外语系', isA: true, item: [
            { name: '2016级', id: 1 }, { name: '2017级', id: 2 }, { name: '2018级', id: 3 }, { name: '2019级', id: 4 }]        },
      ]
    }
  },
  methods: {
    goCheck () {
      this.$messagebox.confirm('确定要退宿吗?').then(action => {
        if (action == 'confirm') {
          console.log('确定')
        } else {
          console.log('取消')
        }
      });
    },
    tapToSearch (val) {
      this.hideShow = true
    },
    goDown (index) {
      let isB = this.itemList[index].isA
      this.$set(this.itemList[index], 'isA', !isB)
    }
  }
}
</script>

<style lang="scss" scoped>
.class-a {
  transform: rotate(-90deg);
}
.header {
  padding: 10px 15px 10px 15px;
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
      background-color: #fff;
      width: 100%;
      font-size: 12px;
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
    div:nth-child(1) {
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #333;
      }
      img {
        width: 14px;
        height: 14px;
        margin-right: 10px;
        transition: transform 0.2s;
      }
    }
    div:nth-child(2) {
      p {
        border-top: 1px solid #e9e9e9;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span:nth-child(1) {
          color: #666;
        }
        span:nth-child(2) {
          width: 60px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          background: rgba(243, 69, 69, 0.1);
          color: #f34545;
          border-radius: 50px;
        }
      }
    }
  }
}
.bottom {
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

    .bottomFirst {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-left: 15px;
        span:nth-child(1) {
          color: #333;
          font-size: 16px;
        }
        span:nth-child(2) {
          color: #666;
          font-size: 14px;
          margin-top: 15px;
        }
      }
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }
    .bottomSecond button {
      width: 90px;
      height: auto;
      line-height: normal;
      padding: 7px 0;
      background: rgba(243, 69, 69, 0.1);
      border-radius: 50px;
      color: #f34545;
      font-size: 14px;
    }
  }
}
</style>