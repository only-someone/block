<template>
  <div>
    <section class="shop-single-section sidebar-page-container">
      <div class="auto-container">
        <div class="row clearfix">

          <!--Content Column-->
          <div class="content-column col-lg-8 col-md-12 col-sm-12" >
            <div class="inner-column">
              <div class="shop-single">
                <div class="inner-box"  >
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">论文名称</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">{{Paper.title}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">论文作者</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.author}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">论文机构</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.mechanism}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">论文关键词</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.keywords}}</div></el-col>
                    <el-col :span="4" ><div class="grid-content bg-purple-dark">分类号</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.classification}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">公开日</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.pubDate}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">引用数</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.cited}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">下载数</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.download}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">网页链接</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">{{Paper.url}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">

                    <el-col :span="4"><div class="grid-content bg-purple-dark">论文简介</div></el-col>
                    <el-col :span="20" style="height: 100px" ><div class="grid-content bg-purple-light">{{Paper.summary}}</div></el-col>
                  </el-row>
                  <el-row style="text-align: center;" v-if="this.up_loader===this.$cookies.get('id')">
                    <el-button type="primary"style="width: 30%" >上传者可点击图片修改头像</el-button>
                  </el-row>

                </div>
              </div>
            </div>

          </div>


          <!--Sidebar Column-->
          <div class="sidebar-column col-lg-4 col-md-12 col-sm-12">
            <a><el-image :src="Paper.cover ||'/static/images/resource/featured-4.jpg'"     width="100%" style="width: 370px;height:300px" alt=""  lazy @click="showdialog=true"/></a>

            <div class="inner-column">
              <!--Purchased Widget-->
              <div class="purchased-widget" style="margin-top: 40px">
                <div class="inner-box" style="text-align: center">
                  <div class="price" >需要 {{ Paper.price }} 积分</div>
                  <button class="purchased-btn theme-btn" v-if="!this.haveBuy" @click="buy()">购买</button>
                  <a :href=download_url><button class="purchased-btn theme-btn"  v-if="this.haveBuy">已有权限，点击下载</button></a>
                  <button class="purchased-btn theme-btn" style="margin-top: 50px" @click="getUserDetail('Expert',up_loader)">查看上传者更多资源</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="up_loader===this.$cookies.get('id')">
          <el-dialog title="更换头像" :visible.sync="showdialog"   width="20%" center >
            <el-form >
              <el-form-item  style="text-align: center">
                <el-upload
                  class="avatar-uploader"
                  :show-file-list="false"
                  action="http://192.168.8.103:8222/oss/avataross"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
            </el-form>
            <div  slot="footer"  class="dialog-footer" center>
              <el-button @click="showdialog = false">取 消</el-button>
              <el-button type="primary" @click="changecover()">确 定</el-button>
            </div>
          </el-dialog>


        </div>

      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "PaperDetail",
  data() {
    return {
      account:{},
      resource_type: this.$route.params.Type,
      resource_id:this.$route.params.Id,
      Paper:{},
      haveBuy:false,
      download_url:"",
      owner:"",
      buy_resourcelist:[],
      upload_resourcelist:[],
      up_number:1,
      up_loader:"",
      showdialog:false,
      imageUrl:"",
    }
  },
  created() {
    this.getDetail(this.resource_type,this.resource_id)
  },

  methods:{
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res)
      this.Paper.cover=res.data.url
    },
    beforeAvatarUpload(file) {

      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 10MB!');
      }
      return  isLt2M;
    },
    getDetail(Type,Id){
      var vm= this
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/paperservice/paper/get"+Type+"/"+Id,
      }).then(res=>{
        vm.Paper=res.data.data[Object.keys(res.data.data)[0]]
        this.isBuyer("Paper_"+vm.Paper.id)
        this.get_uploader("Paper_"+vm.Paper.id)
        if(vm.Paper.file===null||vm.Paper.file===""){
          alert("该资源暂无源文件")
        }
        else if(vm.Paper.file.indexOf("http")!==-1)
          vm.download_url=this.Paper.file
        else{
          vm.download_url=this.GLOBAL.Download_Base_Url+"/ipfs/"+vm.Paper.file
        }
      })
    },
    getUserDetail(Type,Id){
      this.$router.push({
        name:'UserDetail',
        params:{
          Type:Type,
          Id:Id
        }
      })
    },
    changecover(){
      var vm =this
      vm.Paper.cover=this.imageUrl
      this.axios({
        method:'post',
        url:this.GLOBAL.Service_Base_Url+'/paperservice/paper/updatePaper',
        data:vm.Paper
      }).then(resp=>{
        alert("修改头像成功")
        this.showdialog=false}
      )
    },
    get_uploader(resourceid){
      var vm = this
      this.axios({
        method: 'post',
        url: this.GLOBAL.Blockchain_Base_Url+'/api/v1/queryResource',
        data: {"Id": resourceid}
      }).then(resp => {
        vm.up_loader = resp.data.data[0].Uploader
      })
    },
    isBuyer(resourceid){
      var vm = this
      this.axios({
        method: 'post',
        url: this.GLOBAL.Blockchain_Base_Url+'/api/v1/queryAccount',
        data: {"Id": this.$cookies.get("id")}
      }).then(resp => {
        vm.account = resp.data.data[0]
        if(vm.account.Buy!==null){
          for (var i = 0; i < vm.account.Buy.length; i++) {
            vm.buy_resourcelist.push(vm.account.Buy[i].id)
          }
        }
        if(vm.account.Upload!==null){
          for (var i = 0; i < vm.account.Upload.length; i++) {
            vm.upload_resourcelist.push(vm.account.Upload[i].id)
          }
        }
        if(vm.upload_resourcelist.indexOf(resourceid)!==-1 || vm.buy_resourcelist.indexOf(resourceid)!==-1){
          vm.haveBuy=true
        }
      }).catch(error=>{
        console.log(error)
      })
    },
    buy(){
      var vm =this
      var Dealdata={
          "Sell_id":this.up_loader||"1",  //1 代表开发者用户用于启动
          "Buy_id":this.$cookies.get("id"),
          "Resource_id":"Paper_"+this.Paper.id,
          "Cost":this.Paper.price.toString(),
          "Time":new Date().toLocaleString('chinese', { hour12: false })
      }
      console.log(Dealdata)
      this.axios({
        method:'post',
        url:this.GLOBAL.Blockchain_Base_Url+'/api/v1/createDeal',
        data:Dealdata
      }).then(res=> {
        console.log(res)
          alert("购买成功")
        }
      ).catch(error=>{
        alert("购买失败")
      })
      location.reload()
    }
  }

}
</script>


<style scoped>
.bg-purple-dark {
  text-align: center;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>

