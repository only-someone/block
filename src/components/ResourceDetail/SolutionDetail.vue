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
                    <el-col :span="4"><div class="grid-content bg-purple-dark">成果名称</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">{{Solution.title}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">对应需求</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light" >
                      <a @click="getResourceDetail('Requirement',Solution.requirementNumber)">Requirement_{{Solution.requirementNumber}}</a>
                    </div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">提供机构</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Solution.orgName}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">机构地址</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Solution.orgAddress}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">购买人</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Solution.purchasePerson}}</div></el-col>
                    <el-col :span="4" ><div class="grid-content bg-purple-dark">联系电话</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Solution.purchasePhone}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">预算</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Solution.budget}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">关键词</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Solution.keywords}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">领域</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Solution.domain}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">网页链接</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">{{Solution.url}}</div></el-col>

                  </el-row>

                  <el-row style="text-align: center;" >
                    <el-button  v-if="Solution.isAccepted" type="primary" style="width: 30%" >已被采用</el-button>
                    <el-button  v-if="!Solution.isAccepted" type="info" style="width: 30%" >暂未被采用</el-button>
                  </el-row>
                  <el-row style="text-align: center;" v-if="this.owner===this.$cookies.get('id')">
                    <el-button type="primary"style="width: 30%" >拥有者可点击图片修改封面</el-button>
                  </el-row>
                </div>
              </div>
            </div>

          </div>


          <!--Sidebar Column-->
          <div class="sidebar-column col-lg-4 col-md-12 col-sm-12">
            <a><el-image :src="Solution.cover ||'/static/images/resource/featured-4.jpg'"     width="100%" style="width: 370px;height:300px" alt=""  lazy @click="showdialog=true"/></a>

            <div class="inner-column">
              <!--Purchased Widget-->
              <div class="purchased-widget" style="margin-top: 40px">
                <div class="inner-box" style="text-align: center">
                  <div class="price" >需要 {{ Solution.price }} 积分</div>
                  <button class="purchased-btn theme-btn" v-if="!this.isOwner" @click="buy()">购买</button>
                  <a :href=download_url><button class="purchased-btn theme-btn"  v-if="this.isOwner">已有权限，点击下载</button></a>
                  <button class="purchased-btn theme-btn" style="margin-top: 50px" @click="getUserDetail()">查看拥有者更多资源</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="owner===this.$cookies.get('id')">
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
  name: "SolutionDetail",
  data() {
    return {
      account:{},
      resource_type: this.$route.params.Type,
      resource_id:this.$route.params.Id,

      download_url:"",
      owner:"",
      isOwner:this.owner===this.$cookies.get('type')+'_'+this.$cookies.get('id'),
      buy_resourcelist:[],
      upload_resourcelist:[],
      up_number:1,
      showdialog:false,
      imageUrl:"",
      Solution:{},
      blockchain_id:this.$cookies.get('type')+"_"+this.$cookies.get('id'),

    }
  },
  created() {
    this.getDetail(this.resource_type,this.resource_id)
  },

  methods:{
    getResourceDetail(Type,Id){
      this.$router.push({
        name:'ResourceDetail',
        params:{
          Type:Type,
          Id:Id
        }
      })
      location.reload()
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res)
      this.Solution.cover=res.data.url
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
        url:this.GLOBAL.Service_Base_Url+"/solutionservice/solution/get"+Type+"/"+Id,
      }).then(res=>{
        console.log(res)
        vm.Solution=res.data.data[Object.keys(res.data.data)[0]]
        this.get_owner("Solution_"+vm.Solution.id)
        if(vm.Solution.file===null||vm.Solution.file===""){
          alert("该资源暂无源文件")
        }
        else if(vm.Solution.file.indexOf("http")!==-1)
          vm.download_url=this.Solution.file
        else{
          vm.download_url=this.GLOBAL.Download_Base_Url+vm.Solution.file
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
      vm.Solution.cover=this.imageUrl
      this.axios({
        method:'post',
        url:this.GLOBAL.Service_Base_Url+'/solutionservice/solution/updateSolution',
        data:vm.Solution
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
        vm.isOwner=(vm.owner===vm.blockchain_id)
      })
    },
    buy(){
      var vm =this
      var Dealdata={
          "Sell_id":this.owner,  //1 代表开发者用户用于启动
          "Buy_id":this.blockchain_id,
          "Resource_id":"Solution_"+this.Solution.id,
          "Cost":this.Solution.price.toString(),
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

