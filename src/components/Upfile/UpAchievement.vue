<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px" style="margin-top: 40px" >
      <el-form-item label="成果标题"  required>
        <el-input  v-model="Achievement.title" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="作者" required >
        <el-input  v-model="Achievement.author" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="所属单位"  >
        <el-input  v-model="Achievement.mechanism" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="关键字" required>
        <el-tag
          style="margin-right: 10px"
          :key="tag"
          v-for="tag in keyword_pre"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}

        </el-tag>
        <el-input style="width: 100px"
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          placeholder="按Enter输入"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag col-md-2" size="small" @click="showInput" >+ New</el-button>
      </el-form-item>
      <el-form-item label="研究领域" required>
        <el-cascader
          v-model="Achievement.domain"
          :options="options"
          :props="{ expandTrigger: 'hover' ,value:'title',label:'title'}"
         ></el-cascader>
      </el-form-item>
      <el-form-item label="论文摘要" required>
        <el-input type="textarea" v-model="Achievement.summary" rows=10 ></el-input>
      </el-form-item>
      <el-form-item label="项目年度编号"  >
        <el-input  v-model="Achievement.number" style="width: 400PX"></el-input>
      </el-form-item>
      <el-form-item label="年份"  >
        <el-input-number v-model="Achievement.year"  :step="1" step-strictly controls-position="right" ></el-input-number>
      </el-form-item>

      <el-form-item label="成果文件" required>
        <el-upload ref="upload" :auto-upload="false" :limit="1"  action="" :on-change="handleChange"
                                :on-remove="handleRemove" >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传一个文件，且不超过50M</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="网络链接"  >
        <el-input  v-model="Achievement.url" style="width: 400PX"></el-input>
      </el-form-item>

      <el-form-item label="购买积分" required>
           <el-input-number v-model="Achievement.price"  :step="1" step-strictly controls-position="right" ></el-input-number>
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
          <el-button type="primary" @click="up_achievement" style="margin-left:450px;width:150px;margin-top: 50px" round>上传成果</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: "UpAchievement",
  data() {
    return {
      form:{},
      Achievement: {
        title:'',
        author:'',
        //cited:'',
        //classification:"",
        mechanism:'',
        summary:'',
        keywords:"",
        number:"",
        year:0,
        url:'',//本地存储
        file:'',//网络链接
        price:'',//修改成本地积分
        cover:"",//封面
        domain:'',
      },
      keyword_pre:[],
      inputVisible: false,
      inputValue: '',
      imageUrl: '',
      options:[],
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
        this.Achievement.file = null
        this.$refs.upload.clearFiles() // 清除前端显示的文件列表
      } else {
        if (file.status === 'ready') {
          this.Achievement.file= file.raw
        }
      }
    },
    getCurrentTime() {
      //获取当前时间并打印
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy+'_'+mm+'_'+dd+'_'+hh+':'+mf+':'+ss;
      console.log(_this.gettime)
    },
    handleRemove(file, fileList) {
      if (file.uid === this.uploadFile.uid) {
        this.uploadFile = {}
        this.Achievement.file=""
      }
    },
    up_achievement_blockchain(id,time){
      var vm=this
      var data={
          "Id":id,
          "Hash":vm.Achievement.file||"null",
          "Uploader":vm.$cookies.get("type")+"_"+vm.$cookies.get("id"),
          "Cost":vm.Achievement.price.toString(),
          "Time":time,
          "GetScore":"20"
      }
      console.log(data)
      this.axios({
        method:'post',
        url:vm.GLOBAL.Blockchain_Base_Url+"/api/v1/uploadResource",
        data:data,
      }).then(function (resp){
        console.log(resp)
        alert("上传成功")
        location.reload(true)
      }).catch()
     },
    up_achievement(){
        var vm=this;
        let formData = new FormData();
        formData.set("files", this.Achievement.file);
        vm.getCurrentTime()
        this.axios
          .put('/DownloadUrl/objects/'+vm.gettime+'_'+vm.Achievement.file.name, formData, {
            headers: {
              "Content-type": "multipart/form-data"
            }
          }).then( function(resp){
          console.log(resp.status)
          if(resp.status.toString()!=="200"){
            alert("文件上传错误")
            return
          }
          vm.Achievement.file='/objects/'+ vm.gettime+'_'+vm.Achievement.file.name
          var keywords_tostring=""
          for (var i=0;i<vm.keyword_pre.length;i++)
            { keywords_tostring+=vm.keyword_pre[i].toString()+";"}
          vm.Achievement.keywords=keywords_tostring
          vm.Achievement.domain=vm.Achievement.domain.toString()
          vm.axios
            .post(vm.GLOBAL.Service_Base_Url+'/achievementservice/achievement/addAchievement', vm.Achievement, {
              headers: {
                "Content-type": "application/json"
              }
            }).then(function(resp){
              vm.up_achievement_blockchain("Achievement_"+resp.data.data.achievement.id,resp.data.data.achievement.gmtCreate)
          }).catch();
        }).catch();

    },

    handleClose(tag) {
      this.keyword_pre.splice(this.keyword_pre.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.keyword_pre.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.Achievement.cover=res.data.url
      console.log(this.Achievement.cover)
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
