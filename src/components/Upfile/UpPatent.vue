<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px" style="margin-top: 40px" >
      <el-form-item label="专利名称"  required>
        <el-input  v-model="Patent.title" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="申请人" required >
        <el-input  v-model="Patent.applicant" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="联合申请人"  >
        <el-input  v-model="Patent.coApplicants" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="发明人"  >
        <el-input  v-model="Patent.inventor" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="总页数"  >
        <el-input-number v-model="Patent.pages"  :step="1" step-strictly controls-position="right"  required></el-input-number>
      </el-form-item>
      <el-form-item label="代理机构"  >
        <el-input  v-model="Patent.agency" style="width: 400PX"></el-input>
      </el-form-item>

      <el-form-item label="公开日期" required>
        <div class="block"  >
          <el-date-picker
            v-model="Patent.openDate"
            align="right"
            type="date"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="应用日期" >
        <div class="block"  >
          <el-date-picker
            v-model="Patent.applicationDate"
            align="right"
            type="date"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="应用号"  >
        <el-input  v-model="Patent.applicationId" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="enterCountryDate" >
        <div class="block"  >
          <el-date-picker
            v-model="Patent.enterCountryDate"
            align="right"
            type="date"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="proviceId"  >
        <el-input  v-model="Patent.provinceId" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="主分类号"  >
        <el-input  v-model="Patent.mainClassification" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="专利分类号"  >
        <el-input  v-model="Patent.patentClassification" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="网页链接"  >
        <el-input  v-model="Patent.url" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="专利简介" required>
        <el-input type="textarea" v-model="Patent.summary" rows=10 ></el-input>
      </el-form-item>
      <el-form-item label="主要技术" required>
        <el-input type="textarea" v-model="Patent.mainClain" rows=10 ></el-input>
      </el-form-item>
      <el-form-item label="成果文件" >
        <el-upload ref="upload" :auto-upload="false" :limit="1"  action="" :on-change="handleChange"
                   :on-remove="handleRemove" >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传一个文件，且不超过50M</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="购买积分" required>
        <el-input-number v-model="Patent.price"  :step="1" step-strictly controls-position="right" ></el-input-number>
      </el-form-item>
      <el-form-item label="展示图片"  >
        <el-upload
          class="avatar-uploader"
          action="http://192.168.8.103:8222/oss/avataross"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" style="width: 200px;height: 200px">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="up_Patent" style="margin-left:450px;width:150px;margin-top: 50px" round>上传专利</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: "UpPatent",
  data() {
    return {
      form:{},
      Patent: {
        title:"",
        applicationDate: "",
        openDate: "",
        applicationId: "",
        openId: "",
        applicant: "",
        coApplicants: "",
        inventor: "",
        viewCount: "",
        enterCountryDate: "",
        agency: "",
        originalApplicationId: "",
        provinceId: "",
        summary: "" ,
        mainClain: "" ,
        pages:0,
        mainClassification: "",
        patentClassification: "",
        price:0,
        version: 1,
        code: "",
        cover:"",
        url: "",
        file: "",
      },
      keyword_pre:[],
      inputVisible: false,
      inputValue: '',
      imageUrl: '',
      options:[],
    }
  },
  created() {

  },
  methods: {

    handleChange(file, fileList) {
      const isLt5M = file.size / 1024 / 1024 < 50
      if (!isLt5M) {
        this.$message.error('上传文件大小不能超过 50MB')
        this.Patent.file = null
        this.$refs.upload.clearFiles() // 清除前端显示的文件列表
      } else {
        if (file.status === 'ready') {
          this.Patent.file= file.raw
        }
      }
    },
    handleRemove(file, fileList) {
      if (file.uid === this.uploadFile.uid) {
        this.uploadFile = {}
        this.Patent.file=""
      }
    },
    up_Patent_blockchain(id,time){
      var vm=this
      var data={
        "Id":id,
        "Hash":vm.Patent.file||"null",
        "Uploader":vm.$cookies.get("type")+"_"+vm.$cookies.get("id"),
        "Cost":vm.Patent.price.toString(),
        "Time":time,
        "State":"false",
        "GetScore":"20"
      }
      console.log(data)
      this.axios({
        method:'post',
        url:vm.GLOBAL.Blockchain_Base_Url+"/api/v1/uploadResource",
        data:data,
      }).then(function (resp){
        console.log(resp)
      }).catch()
    },
    up_Patent(){ // 上传区块链失败，但是数据库上传成功   hash不能为空
      var vm=this;
      let formData = new FormData();
      formData.set("files", this.Patent.file);
      this.axios
        .post(vm.GLOBAL.Blockchain_Base_Url+'/api/v1/uploadfile', formData, {
          headers: {
            "Content-type": "multipart/form-data"
          }
        }).then(function(resp){
        if(resp.data.data!==null)
          vm.Patent.file=resp.data.data.toString()
        console.log(vm.Patent)
        vm.axios
          .post(vm.GLOBAL.Service_Base_Url+'/patentservice/patent/addPatent', vm.Patent, {
            headers: {
              "Content-type": "application/json"
            }
          }).then(function(resp){
          console.log(resp.data)
          vm.up_Patent_blockchain("Patent_"+resp.data.data.patent.id,resp.data.data.patent.gmtCreate)
          alert("上传成功")
          //刷新当前页面
          location.reload(true)
        }).catch();
      }).catch();

    },


    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.Patent.cover=res.data.url
      console.log(res.data.url)
    },
    beforeAvatarUpload(file) {

      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 10MB!');
      }
      return  isLt2M;
    }
  }
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
