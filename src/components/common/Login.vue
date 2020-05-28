<template>
  <div class="login"  @click="goHide">
    <div class="loginTop">宿管登录</div>
    <div>
      <div class="headerSearch">
        <input class="inputClass user"
               type="text"
               v-model="user"
               placeholder="账号">
        <input class="inputClass password"
               type="password"
               v-model="password"
               placeholder="密码">
        <div class="centerTop">
          <div class="input"
               @click.stop="openValue">
            <input v-model="couponSelected"
                   class="inputClass school"
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

      </div>
    </div>
    <div class="normal">
      <mt-button type="primary" @click.stop="submit">登录</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: "",
      password:"",
      couponSelected: '',
      isA: 0,
      show: false,
      couponList: [
        {
          id: '1',
          name: '河南工业大学附属校区'
        },
        {
          id: '2',
          name: '河南大学新校区'
        },
        {
          id: '3',
          name: '河南工业大学校区'
        },
        {
          id: '4',
          name: '郑州工业大学校区'
        },
        {
          id: '5',
          name: '湖南工业大学校区'
        },
        {
          id: '6',
          name: '湖北工业大学校区'
        },
        {
          id: '7',
          name: '河北工业大学校区'
        }
      ],
    }
  },
  methods: {
    submit(){
        this.$router.push({name: 'main'})
    },
    goHide(){
      this.show = false
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
    this.$bus.emit('headerText', '登录');
  },
  mounted () {

    this.couponSelected = this.couponList[0].name;

  }
}
</script>

<style lang="scss" scoped>
.login {
  background: #fff;
  padding: 100px 38px 0;
  position: relative;
  position: fixed;
  width: 100%;
  height: 100%;
  .loginTop {
    font-size: 20px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 30px;
    text-align: center;
    font-family: Source Han Sans CN;
  }
  .normal {
    position: fixed;
    bottom: 100px;
    width: 80%;
    button {
      width: 100%;
      height: auto;
      line-height: normal;
      padding: 8px 0;
      background: #449bff;
      border-radius: 50px;
      color: #fff;
      font-size: 16px;
    }
  }
}
.headerSearch {
  width: 100%;
  border-radius: 5px;
  position: relative;
  .user {
    background: url(../../assets/images/yonghu.png) 3% no-repeat;
    background-color: rgba(68, 155, 255, 0.05);
  }
  .password {
    background: url(../../assets/images/mima.png) 3% no-repeat;
    background-color: rgba(68, 155, 255, 0.05);
  }
  .school {
    background: url(../../assets/images/xiaoqu.png) 3% no-repeat;
    background-color: rgba(68, 155, 255, 0.05);
  }
  .centerTop {
    height: 32px;
    line-height: 32px;
    .input {
      width: 100%;
      position: relative;
      color: #999;

      img {
        position: absolute;
        right: 20px;
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
        bottom: 4px;
        left: 35px;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #fff;
        z-index: 100;
      }

      .list {
        position: absolute;
        right: 0px;
        top: 35px;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        margin: 5px 0;
        width: 100%;
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
  }

  .inputClass {
    border-radius: 5px;
    height: 32px;
    line-height: 32px;
    outline: none;
    border: none;
    background-size: 14px;
    padding-left: 32px;
    padding-right: 35px;
    width: 100%;
    margin-bottom: 14px;
    font-size: 12px;
  }
}
</style>
<style>
.inputClass::-webkit-input-placeholder {
  color: #999999;
  font-size: 12px;
}
</style>