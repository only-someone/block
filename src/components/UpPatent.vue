<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px" style="margin-top: 40px" >
      <el-form-item label="专利名称">
        <el-input  v-model="form.PatentName" prefix rows=1  ></el-input>
      </el-form-item>
      <el-form-item label="专利标号" >
        <el-input  v-model="form.PatentName" prefix rows=1  ></el-input>
      </el-form-item>
      <el-form-item label="专利摘要"  >
        <el-input type="textarea" v-model="form.PatentAbstract" rows=10 ></el-input>
      </el-form-item>
      <el-form-item label="申请日期" >
        <div class="block"  >
          <el-date-picker
            v-model="form.PatentDate"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="专利类型" >
        <el-input v-model="form.PatentType" rows=1 ></el-input>
      </el-form-item>
      <el-form-item label="公开号" >
        <el-input v-model="form.PatentOpen" rows=1></el-input>
      </el-form-item>
      <el-form-item label="公开日" >
        <div class="block" >
          <el-date-picker
            v-model="form.PatentOpenDate"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="主权项">
        <el-input v-model="form.PatentRight" rows=1 style="width: 600px"></el-input>
      </el-form-item>
      <el-form-item label="法律状态" >
        <el-input v-model="form.PatentState" rows=1 ></el-input>
      </el-form-item>
      <el-form-item label="内容" >
        <el-input v-model="form.PatentContent" rows=1 ></el-input>
      </el-form-item>
      <el-form-item label="展示图片" >
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" style="width: 200px;height: 200px">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="专利领域" >
        <el-select v-model="form.PatentDomain" placeholder="请选择" >
        <el-option
          v-for="domain in domains"
          :key="domain.Id"
          :label="domain.Name"
          :value="domain.Name">
        </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="专利文件" >
        <el-upload ref="upload" :auto-upload="false" :limit="1"  action=""
                   :on-change="handleChange" :on-remove="handleRemove" >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传一个文件，且不超过50M</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="他人下载积分">
           <el-input-number v-model="form.Cost" controls-position="right" ></el-input-number>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit" style="margin-left:450px;width:150px" round>立即创建</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: "UpPatent",
  data() {
    return {
      form: {
        PTitle: '',
        PAbstract: '',
        PKeyword: '',
        PDate: '',
        PFile:'',
        Cost:'',
        Domain:'',
      },
      imageUrl: '',
      domains:[{"Id":"1","Name":"计算机"},{"Id":"2","Name":"医学"}],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
    }
  },
  created() {
    var vm = this;
    // this.axios({
    //   method:'get',
    //   url:"https://www.easy-mock.com/mock/5f912b94e4d147581af7409b/vuedemo/domains",//跨域

    // }).then(function (resp){
    //   vm.data
    //   vm.domains=resp.data.domains
    // })

  },
  methods: {
    handleChange(file, fileList) {
      const isLt5M = file.size / 1024 / 1024 < 50
      if (!isLt5M) {
        this.$message.error('上传文件大小不能超过 50MB')
        this.form.PFile = null
        this.$refs.upload.clearFiles() // 清除前端显示的文件列表
      } else {
        if (file.status === 'ready') {
          this.form.PFile = file.raw
        }
      }
    },
    handleRemove(file, fileList) {
      if (file.uid === this.uploadFile.uid) {
        this.uploadFile = {}
      }
    },
    onSubmit() {
      console.log(this.form)
      //this.axios()

    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 10MB!');
      }
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;

    }
  },


}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
