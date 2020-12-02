<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px" style="margin-top: 40px" >
      <el-form-item label="案例标题"  required>
        <el-input  v-model="Case.title" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="相关人员" required >
        <el-input  v-model="Case.relationStaff" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="实施机构"  >
        <el-input  v-model="Case.staffInstitution" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="联系电话"  >
        <el-input  v-model="Case.staffPhone" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="简介"  >
        <el-input   type="textarea" v-model="Case.introduction" rows=10 ></el-input>
      </el-form-item>
      <el-form-item label="技术细节"  >
        <el-input type="textarea"  v-model="Case.indicator" rows=10></el-input>
      </el-form-item>
      <el-form-item label="应用场景"  >
        <el-input type="textarea"  v-model="Case.application" rows=10></el-input>
      </el-form-item>
      <el-form-item label="涉及领域" required>
        <el-cascader
          v-model="Case.domain"
          :options="options"
          :props="{ expandTrigger: 'hover' ,value:'title',label:'title'}"
        ></el-cascader>
      </el-form-item>

      <el-form-item label="案例文件" required>
        <el-upload ref="upload" :auto-upload="false" :limit="1"  action="" :on-change="handleChange"
                   :on-remove="handleRemove" >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传一个文件，且不超过50M</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="网络链接"  >
        <el-input  v-model="Case.url" style="width: 400PX"></el-input>
      </el-form-item>

      <el-form-item label="购买积分" required>
        <el-input-number v-model="Case.price"  :step="1" step-strictly controls-position="right" ></el-input-number>
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
        <el-button type="primary" @click="up_Case" style="margin-left:450px;width:150px;margin-top: 50px" round>上传成果</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: "UpCase",
  data() {
    return {
      form:{},
      Case: {
        title:'',
        relationStaff:'',
        staffInstitution:'',
        staffPhone:'',
        origin:"",
        introduction:"",
        indicator:"",
        url:'',//本地存储
        file:'',//网络链接
        price:'',//修改成本地积分
        cover:"",//封面
        domain:'',
        application:"",
      },
      options:[],
      keyword_pre:[],
      inputVisible: false,
      inputValue: '',
      imageUrl: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    }
  },
  created() {
    this.get_domain()
  },
  methods: {
    get_domain(){
      var vm=this
      this.axios({
        method:'get',
        url:this.GLOBAL.Service_Base_Url+"/domainservice/domain/findAllDomainByTree",
      }).then(res=>{
        vm.options=res.data.data.items
        console.log(vm.options)
      })
    },
    handleChange(file, fileList) {
      const isLt5M = file.size / 1024 / 1024 < 50
      if (!isLt5M) {
        this.$message.error('上传文件大小不能超过 50MB')
        this.Case.file = null
        this.$refs.upload.clearFiles() // 清除前端显示的文件列表
      } else {
        if (file.status === 'ready') {
          this.Case.file= file.raw
        }
      }
    },
    handleRemove(file, fileList) {
      if (file.uid === this.uploadFile.uid) {
        this.uploadFile = {}
      }
    },
    up_Case_blockchain(id,time){
      var vm=this
      var data={
        "Id":id,
        "Hash":vm.Case.file||"null",
        "Uploader":vm.$cookies.get("id"),
        "Cost":vm.Case.price.toString(),
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
    up_Case(){ // 上传区块链失败，但是数据库上传成功   hash不能为空
      var vm=this;
      let formData = new FormData();
      formData.set("files", this.Case.file);
      this.axios
        .post(vm.GLOBAL.Blockchain_Base_Url+'/api/v1/uploadfile', formData, {
          headers: {
            "Content-type": "multipart/form-data"
          }
        }).then(function(resp){
        if(resp.data.data!==null)
          vm.Case.file=resp.data.data.toString()
        var keywords_tostring=""
        for (var i=0;i<vm.keyword_pre.length;i++)
        { keywords_tostring+=vm.keyword_pre[i].toString()+";"}
        vm.Case.keywords=keywords_tostring
        vm.Case.domain=vm.Case.domain.toString()
        console.log(vm.Case)
        vm.axios
          .post(vm.GLOBAL.Service_Base_Url+'/caseservice/case/addCase', vm.Case, {
            headers: {
              "Content-type": "application/json"
            }
          }).then(function(resp){
            console.log(resp.data.data)
          vm.up_Case_blockchain("Case_"+resp.data.data.case.id,resp.data.data.case.gmtCreate)
          alert("上传成功")
          //刷新当前页面
          location.reload(true)
        }).catch();
      }).catch();

    },

    // handleClose(tag) {
    //   this.keyword_pre.splice(this.keyword_pre.indexOf(tag), 1);
    // },
    //
    // showInput() {
    //   this.inputVisible = true;
    //   this.$nextTick(_ => {
    //     this.$refs.saveTagInput.$refs.input.focus();
    //   });
    // },
    //
    // handleInputConfirm() {Case
    //   let inputValue = this.inputValue;
    //   if (inputValue) {
    //     this.keyword_pre.push(inputValue);
    //   }
    //   this.inputVisible = false;
    //   this.inputValue = '';
    // },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.Case.cover=res.data.url
      console.log( res.data.url)
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
