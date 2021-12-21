<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px" style="margin-top: 40px" >
      <el-form-item label="方案标题"  required>
        <el-input  v-model="Solution.title" style="width: 90%"></el-input>
      </el-form-item>
      <el-form-item label="对应需求ID" required >
        <input v-model="Solution.requirementNumber" style="width: 90%" readonly></input>
      </el-form-item>
      <el-form-item label="机构名"  >
        <el-input  v-model="Solution.orgName" style="width: 90%"></el-input>
      </el-form-item>
      <el-form-item label="机构地址"  >
        <el-input  v-model="Solution.orgAddress" style="width: 90%"></el-input>
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
      <el-form-item label="联系人" required>
        <el-input type="text" v-model="Solution.purchasePerson"  style="width: 60%"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" required>
        <el-input type="text" v-model="Solution.purchasePhone"  style="width: 60%"></el-input>
      </el-form-item>
      <el-form-item label="预算" required>
        <el-input type="text" v-model="Solution.budget" style="width: 60%"></el-input>
      </el-form-item>
      <el-form-item label="介绍" required>
        <el-input type="textarea" v-model="summary" rows=10 placeholder="若使用多个本系统的资源，可以将网页链接写入该项便于查看" style="width: 90%"></el-input>
      </el-form-item>
      <el-form-item label="涉及领域" required>
        <el-cascader
          v-model="Solution.domain"
          :options="options"
          :props="{ expandTrigger: 'hover' ,value:'title',label:'title'}"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="方案文件" required>
        <el-upload ref="upload" :auto-upload="false" :limit="1"  action="" :on-change="handleChange"
                   :on-remove="handleRemove" >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传一个文件，且不超过50M</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="网络链接"  >
        <el-input  v-model="Solution.url" placeholder="本网站或者其他网站的链接" style="width: 60%"></el-input>
      </el-form-item>

      <el-form-item label="购买积分" required>
        <el-input-number v-model="Solution.price"  :step="1" step-strictly controls-position="right"  placeholder="需求方查看文件需要花费的积分"></el-input-number>
      </el-form-item>
      <el-form-item label="展示图片"  required>
        <el-upload
          class="avatar-uploader"
          :action=this.GLOBAL.Avator_upload_url
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" style="width: 200px;height: 200px">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="up_Solution" style="margin-left:70%;width:25%;margin-top: 50px" round>上传解决方案</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: "UpSolution",
  data() {
    return {
      form:{},
      Solution: {
        title: "",
        requirementNumber: this.$route.path.split("/").slice(-1).toString(),
        orgName: "",
        orgAddress: "",
        purchasePerson: "",
        purchasePhone: "",
        budget: "",
        keywords: "",
        domain: "",
        url: "",
        price: 0,
        cover: "",
        status:"" ,
        file: "",

      },
      summary: "",
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
    handleChange(file, fileList) {
      const isLt5M = file.size / 1024 / 1024 < 50
      if (!isLt5M) {
        this.$message.error('上传文件大小不能超过 50MB')
        this.Solution.file = null
        this.$refs.upload.clearFiles() // 清除前端显示的文件列表
      } else {
        if (file.status === 'ready') {
          this.Solution.file= file.raw
        }
      }
    },
    handleRemove(file, fileList) {
      if (file.uid === this.uploadFile.uid) {
        this.uploadFile = {}
        this.Solution.file=""
      }
    },
    up_Solution_blockchain(id,time){
      var vm=this
      var data={
        "Id":id,
        "Hash":vm.Solution.file||"null",
        "Uploader":vm.$cookies.get("type")+"_"+vm.$cookies.get("id"),
        "Cost":vm.Solution.price.toString(),
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
      })
    },
    up_Solution(){//上传区块链失败，但是数据库上传成功   hash不能为空
      var vm=this;
      let formData = new FormData();
      formData.set("files", this.Solution.file);
      vm.getCurrentTime()
      this.axios
        .put('/DownloadUrl/objects/'+vm.gettime+'_'+vm.Solution.file.name, formData, {
          headers: {
            "Content-type": "multipart/form-data"
          }
        }).then( function(resp){
        console.log(resp.status)
        if(resp.status.toString()!=="200"){
          alert("文件上传错误")
          return
        }
        vm.Solution.file='/objects/'+ vm.gettime+'_'+vm.Solution.file.name
        var keywords_tostring=""
        for (var i=0;i<vm.keyword_pre.length;i++)
        { keywords_tostring+=vm.keyword_pre[i].toString()+";"}
        vm.Solution.keywords=keywords_tostring
        vm.Solution.domain=vm.Solution.domain.toString()
        console.log(vm.Solution)
        vm.axios
          .post(vm.GLOBAL.Service_Base_Url+'/solutionservice/solution/addSolution', vm.Solution, {
            headers: {
              "Content-type": "application/json"
            }
          }).then(function(resp){
          console.log(resp.data)
          vm.up_Solution_blockchain("Solution_"+resp.data.data.solution.id,resp.data.data.solution.gmtCreate)
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
      this.Solution.cover=res.data.url
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
