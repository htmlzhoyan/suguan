<template>
  <div class="healthCheck">
    <div class="top">
      当前位置：1号楼-1层-1101室
    </div>
    <div class="center">
      <div class="centertop">
        <span>
          违章检查
        </span>
      </div>
      <div class="centerContent">
        <mt-checklist align="right"
                      title=""
                      v-model="valueCheck"
                      :options="options">
        </mt-checklist>

      </div>

      <div class="isBoxCenter">
        <p>备注</p>
        <mt-field label=""
                  placeholder="输入备注..."
                  type="textarea"
                  rows="4"
                  v-model="introduction"></mt-field>
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
      valueCheck: [],
      introduction: '',
      options: [
        {
          label: '电器',
          value: '1',
        },
        {
          label: '行为',
          value: '2',
        }
      ],

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
    this.$bus.emit('headerText', '违规查寝');

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
    margin-bottom: 30px;
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
      .personal-information {
        /deep/ .vux-uploader_hd {
          display: none;
        }
      }
    }
    .isBoxCenter {
      p {
        font-size: 14px;
        margin-bottom: 10px;
      }
      a {
        border: 1px solid rgba(221, 221, 221, 1);
        border-radius: 5px;
        /deep/ .mint-field-core {
          font-size: 12px;
        }
      }
    }
    .centerContent {
      margin-bottom: 15px;
      /deep/ .mint-checklist-label{
        padding-left: 0;
      }
      /deep/ .mint-checkbox-label{
        font-size: 14px;
      }
      /deep/ .mint-checklist-title {
        display: none;
      }
      /deep/ .mint-cell {
        border-bottom: 1px solid #e9e9e9;
      }
      /deep/ .mint-checkbox-core:after {
        width: 6px;
        height: 10px;
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