<template>
  <div class="healthCheck">
    <div class="top">
      当前位置：1号楼-1层-1101室
    </div>
    <div class="center">
      <div class="centertop">
        <span>
          卫生检查
        </span>
      </div>
      <div class="centerContent">
        <p>地面</p>
        <div class="count">
          <div @click="goChoice(index)"
               :class="isA===index?'active':''"
               v-for="(item,index) in itemList"
               :key="index">
            {{item}}
          </div>
        </div>

      </div>
      <div class="centerContent">
        <p>床铺</p>
        <div class="count">
          <div @click="goChoice2(index)"
               :class="isB===index?'active':''"
               v-for="(item,index) in itemList"
               :key="index">
            {{item}}
          </div>
        </div>

      </div>
      <div class="centerContent">
        <p>桌面</p>
        <div class="count">
          <div @click="goChoice3(index)"
               :class="isC===index?'active':''"
               v-for="(item,index) in itemList"
               :key="index">
            {{item}}
          </div>
        </div>

      </div>
      <div class="centerBottom">
        <p class="text">图片上传</p>
        <div class="count">
          <uploader class="personal-information"
                    :url='uploadUrl'
                    v-model="fileList"
                    @onChange="onChange"
                    @onSuccess="onSuccess"
                    @onDelete="onDelete"
                    limit="1">
          </uploader>
        </div>

      </div>
    </div>
    <div class="bottom">
      <mt-button type="primary">提交</mt-button>
    </div>
  </div>
</template>

<script>
import Uploader from 'vux-uploader-component'
export default {
  data () {
    return {
      itemList: ["80~100分", "60~80分", "60分以下"],
      isA: 0,
      isB: 0,
      isC: 0,
      uploadUrl: '',
      fileList: [],
    }
  },
  components: {
    Uploader
  },
  methods: {
    onChange (fileList) {
      // this.uploadUrl = this.$http.adornUrl(`/teacherMsg/teacher/upload/${this.teacher.id}?token=${this.$cookie.get('token')}&userType=teacher`)
    },
    onSuccess (res) {
      console.log('onSuccess: ', res)
      if (res.code === 0) {
        
      } else {
        
      }
    },
    onDelete () {
      this.fileList = []
    },
    goChoice (index) {
      this.isA = index
    },
    goChoice2 (index) {
      this.isB = index
    },
    goChoice3 (index) {
      this.isC = index
    }
  },
  created () {
    this.$bus.emit('headerText', '卫生查寝');

  }
}
</script>

<style lang="scss" scoped>
.healthCheck {
  padding: 10px 15px 16px;
  .top {
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #333;
    font-size: 16px;
    margin-bottom: 10px;
    background: #fff;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
  .center {
    background: #fff;
    margin-bottom: 15px;
    padding: 0 16px;
    .centertop {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #e9e9e9;
      span {
        border-left: 3px solid #449bff;
        padding-left: 6px;
        font-size: 16px;
      }
    }
    .centerBottom {
      .text {
         margin-top: 15px;
        margin-bottom: 5px;
      }
      .personal-information{
         /deep/ .vux-uploader_hd{
           display: none;
         }
      }
    }
    .centerContent {
      height: 100px;
      border-bottom: 1px solid #e9e9e9;
      p {
        height: 40px;
        line-height: 40px;
      }
      .count {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          width: 30%;
          height: 33px;
          background: rgba(244, 244, 244, 1);
          color: #666666;
          font-size: 12px;
          border-radius: 5px;
          line-height: 32px;
          text-align: center;
          border: 1px solid rgba(244, 244, 244, 1);
        }
        .active {
          background: rgba(68, 155, 255, 0.15);
          border: 1px solid rgba(68, 155, 255, 1);
          color: #449bff;
          border-radius: 5px;
        }
      }
    }
  }
  .bottom {
    button {
      width: 100%;
      height: auto;
      line-height: normal;
      padding: 10px 0;
      background: rgba(68, 155, 255, 1);
      color: #fff;
      font-size: 16px;
      border-radius: 50px;
    }
  }
}
</style>