<template>
  <div>
    <section class="shop-single-section sidebar-page-container" >
      <div class="auto-container">
        <div class="row clearfix">

          <!--Content Column-->
          <div class="content-column col-lg-8 col-md-12 col-sm-12" >
            <div class="inner-column">
              <div class="shop-single">
                <div class="inner-box"   >
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">专利名称</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">{{Patent.title}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">上传时间</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Patent.gmtCreate}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">申请人</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Patent.applicant}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">联合申请人</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Patent.coApplicants}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">发明人</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Patent.inventor}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">公开日期</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Patent.openDate}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">总页数</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Patent.pages}}</div></el-col>
                    <el-col :span="4" ><div class="grid-content bg-purple-dark">代理机构</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Patent.agency}}</div></el-col>
                  </el-row>

                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">应用日期</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Patent.applicationDate}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">应用号</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Patent.applicationId}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">provinceId</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Patent.provinceId}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">enterCountryDate</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Patent.enterCountryDate}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">主分类号</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Patent.mainClassification}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">专利分类号</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Patent.patentClassification}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">网页链接</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">{{Patent.url}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">专利简介</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">{{Patent.summary}}</div></el-col>
                  </el-row>

                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"  ><div class="grid-content bg-purple-dark">主要技术</div></el-col>
                    <el-col :span="20"  ><div class="grid-content bg-purple-light">{{Patent.mainClain}}</div></el-col>
                  </el-row>
                  <el-row style="text-align: center;" v-if="isOwner">
                    <el-button type="primary"style="width: 30%" >拥有者可点击图片修改头像</el-button>
                  </el-row>
                </div>
              </div>
            </div>

          </div>


          <!--Sidebar Column-->
          <div class="sidebar-column col-lg-4 col-md-12 col-sm-12">
            <a><el-image :src="Patent.cover ||'/static/images/resource/featured-4.jpg'"     width="100%" style="width: 370px;height:300px" alt=""  lazy @click="showdialog=true"/></a>

            <div class="inner-column">
              <!--Purchased Widget-->
              <div class="purchased-widget" style="margin-top: 40px">
                <div class="inner-box" style="text-align: center">
                  <div class="price" >需要 {{ Patent.price }} 积分</div>
                  <button class="purchased-btn theme-btn" v-if="!this.isOwner" @click="buy()">购买</button>
                  <a :href=download_url><button class="purchased-btn theme-btn"  v-if="this.isOwner">已有权限，点击下载</button></a>
                  <button class="purchased-btn theme-btn" style="margin-top: 50px" @click="getUserDetail()">查看拥有者更多资源</button>
                </div>
              </div>
            </div>

            <KnowledgeGraph width="100%" style="width: 370px;height:400px" :kg_id="Patent.kgId"></KnowledgeGraph>
          </div>
        </div>

        <div v-if="isOwner">
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
import KnowledgeGraph from "../KnowledgeGraph";
export default {
  name: "PatentDetail",
  data() {
    return {
      account:{},
      resource_type: this.$route.params.Type,
      resource_id:this.$route.params.Id,
      download_url:"",
      buy_resourcelist:[],
      upload_resourcelist:[],
      up_number:1,
      isOwner:this.owner===this.$cookies.get('type')+'_'+this.$cookies.get('id'),
      owner:"",
      showdialog:false,
      imageUrl:"",
      Patent:{},
      blockchain_id:this.$cookies.get('type')+"_"+this.$cookies.get('id'),//只需修改此处
    }
  },
  created() {
    this.getDetail(this.resource_type,this.resource_id)
  },
  component: {
    KnowledgeGraph
  },
  methods:{
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res)
      this.Patent.cover=res.data.url
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
        url:this.GLOBAL.Service_Base_Url+"/patentservice/patent/get"+Type+"/"+Id,
      }).then(res=>{
        console.log(res)
        vm.Patent=res.data.data[Object.keys(res.data.data)[0]]
        this.get_owner("Patent_"+vm.Patent.id)
        if(vm.Patent.file===null||vm.Patent.file===""){
          alert("该资源暂无源文件")
        }
        else if(vm.Patent.file.indexOf("http")!==-1)
          vm.download_url=this.Patent.file
        else{
          vm.download_url=this.GLOBAL.Download_Base_Url+vm.Patent.file
        }
      })
    },
    getUserDetail(){
      var Type=this.owner.split("_")[0]
      var Id=this.owner.split("_")[1]
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
      vm.Patent.cover=this.imageUrl
      this.axios({
        method:'post',
        url:this.GLOBAL.Service_Base_Url+'/patentservice/patent/updatePatent',
        data:vm.Patent
      }).then(resp=>{
        alert("修改头像成功")
        this.showdialog=false}
      )
    },
    get_owner(resourceid){
      var vm = this
      this.axios({
        method: 'post',
        url: this.GLOBAL.Blockchain_Base_Url+'/api/v1/queryResource',
        data: {"Id": resourceid}
      }).then(resp => {
        vm.owner = resp.data.data[0].Owner
        vm.isOwner(vm.owner===vm.blockchain_id)
      })
      /*.catch(err=>{//区块链无法查到数据说明没有上传，需要上传,可能会出现bug  出现突然admin上传已有资源的bug
        vm.axios({
          method:"post",
          url:vm.GLOBAL.Blockchain_Base_Url+'/api/v1/uploadResource',
          data:{
            "Cost": "0",
            "GetScore": "20",
            "Hash": "null",
            "Id": resourceid ,
            "Time": "2020-1-1 12:56:40",
            "Uploader": "Admin_1"
          }
        }).then()
      })*/
    },

    buy(){
      var vm =this
      var Dealdata={
        "Sell_id":this.owner,  //1 代表开发者用户用于启动
        "Buy_id":this.blockchain_id,
        "Resource_id":"Patent_"+this.Patent.id,
        "Cost":this.Patent.price.toString(),
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

