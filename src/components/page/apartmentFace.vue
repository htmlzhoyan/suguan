<template>
  <div>
    <div class="change">
      <div class="top">
        <div @click="goUp">
          <img src="~images/1.png"
               alt="">
          <span>{{popup1||'选择'}}</span>
        </div>
        <div>
          <img src="~images/change.png"
               alt="">
        </div>
        <div>
          <img src="~images/2.png"
               alt="">
          <span>{{popup1||'选择'}}</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <mt-button type="primary">确定</mt-button>
    </div>
    <mt-popup class="mtpup" v-model="popupVisible"
              position="bottom">
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
export default {
  data () {
    return {
      popupVisible:true,
      popup1:'',
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
           values: ['301室' ,'302室', '303室', '304室', '305室', '306室'],
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
  methods:{
    goUp(){
      this.popupVisible = true
    },
     onValuesChange(picker, values) {
       console.log(picker, values)
       this.popup1 = values.join('')
      // if (values[0] > values[1]) {
      //   picker.setSlotValue(1, values[0]);
      // }
    }
  },
  created () {
    this.$bus.emit('headerText', '对调');
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
    height: auto;
    line-height: normal;
    padding: 8px 0;
    background: #449bff;
    opacity: 1;
    border-radius: 50px;
    width: 100%;
    font-size: 16px;
  }
}
.mtpup{
  width: 100%;
}
</style>