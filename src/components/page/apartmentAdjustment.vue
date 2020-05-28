<template>
  <div>
    <div class="change">
      <div class="top">
        <div @click="goLeft">
          <img src="~images/1.png"
               alt="">
          <span>{{popup1||'选择'}}</span>
        </div>
        <div>
          <img src="~images/change.png"
               alt="">
        </div>
        <div @click="goRight">
          <img src="~images/2.png"
               alt="">
          <span>{{popup2||'选择'}}</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <mt-button type="primary">确定</mt-button>
    </div>
    <mt-popup class="mtpup"
              v-model="popupVisible"
              position="bottom">
      <mt-picker :slots="slots"
                 @change="onValuesChange">
                  <!-- <div>
                    <span>2222</span>
                  </div> -->
                 </mt-picker>
    </mt-popup>
    <mt-popup class="mtpup"
              v-model="popupVisible2"
              position="bottom">
      <mt-picker :slots="slots"
                 @change="onValuesChange2"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      popupVisible: true,
      popupVisible2: false,
      popup1: '',
      popup2: '',
      slots: [
        {
          flex: 1,
          values: ['1号楼', '2号楼', '3号楼', '4号楼', '5号楼', '6号楼'],
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['1层', '2层', '3层', '4层', '5层', '6层'],
          className: 'slot3',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['301室', '302室', '303室', '304室', '305室', '306室'],
          className: 'slot3',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['1号床', '2号床', '3号床', '4号床', '5层床', '6号床'],
          className: 'slot3',
          textAlign: 'center'
        }
      ]
    }
  },
  methods: {
    goLeft () {
      this.popupVisible = true
    },
    goRight () {
      this.popupVisible2 = true
    },
    onValuesChange (picker, values) {
      console.log(picker, values)
      this.popup1 = values.join('')
    },
    onValuesChange2 (picker, values) {
      console.log(picker, values)
      this.popup2 = values.join('')
    }
  },
  created () {
    this.$bus.emit('headerText', '调宿');
  }
}
</script>

<style lang="scss" scoped>
.change {
  padding: 10px 15px 10px 15px;
  .top {
    height: 120px;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      img {
        height: 40px;
        width: 40px;
      }
      span {
        color: #999999;
        margin-top: 15px;
      }
    }
  }
}
.bottom {
  position: fixed;
  bottom: 120px;
  padding-left: 38px;
  padding-right: 38px;
  width: 100%;
  button {
    display: block;
    height: auto;
    line-height: normal;
    background: #449bff;
    opacity: 1;
    border-radius: 50px;
    width: 100%;
    font-size: 16px;
    padding: 8px 0;
  }
}
.mtpup {
  width: 100%;
}
</style>