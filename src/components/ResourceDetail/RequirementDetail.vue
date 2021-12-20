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
                    <el-col :span="4"><div class="grid-content bg-purple-dark">需求标题</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">{{Requirement.title}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">需求编号</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Requirement.requirementNumber}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">需求联系人</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Requirement.purchasePerson}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">联系电话</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Requirement.purchasePhone}}</div></el-col>
                    <el-col :span="4" ><div class="grid-content bg-purple-dark">需求机构</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Requirement.purchaseInstitution}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">机构地址</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Requirement.purchaseOrgAddress}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">联系方式</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Requirement.orgPhone}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">预算</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Requirement.budget}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">网页链接</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">{{Requirement.url}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">涉及领域</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Requirement.domain}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">关键字</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Requirement.keywords}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">公告时间</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Requirement.announceTime}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">开始时间</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Requirement.openTime}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">结束时间</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Requirement.endTime}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"  ><div class="grid-content bg-purple-dark">内容描述</div></el-col>
                    <el-col :span="20"  ><div class="grid-content bg-purple-light">{{Requirement.contentDescription}}</div></el-col>
                  </el-row>

                </div>
              </div>
            </div>

          </div>


          <!--Sidebar Column-->
          <div class="sidebar-column col-lg-4 col-md-12 col-sm-12">
            <a><el-image :src="Requirement.cover ||'/static/images/resource/featured-4.jpg'"     width="100%" style="width: 370px;height:300px" alt=""  lazy @click="showdialog=true"/></a>

            <div class="inner-column">
              <!--Purchased Widget-->
              <div class="purchased-widget" style="margin-top: 40px">
                <div class="inner-box" style="text-align: center">
                  <div class="price" >需要 {{ Requirement.price }} 积分</div>
                  <button class="purchased-btn theme-btn" v-if="!this.isOwner" @click="buy()">购买</button>
                  <a :href=download_url><button class="purchased-btn theme-btn"  v-if="this.isOwner">已有权限，点击下载</button></a>
                  <button class="purchased-btn theme-btn" style="margin-top: 50px" @click="getUserDetail()">查看上传者更多资源</button>

                </div>
              </div>
            </div>
            <el-row style="text-align: center;" v-if="isOwner">
              <el-button type="primary" >上传者可点击图片修改头像</el-button>
            </el-row>
            <el-row style="text-align: center;" v-else-if="this.$cookies.get('type')!=='Normal'">
              <el-button type="info" @click="dialogTableVisible = true" >点击上传解决方案进行投标</el-button>
            </el-row>
            <el-dialog title="上传解决方案" :visible.sync="dialogTableVisible">
              <up-solution></up-solution>
            </el-dialog>
          </div>
        </div>

        <!--   上传项目需求可以查看别人发送的解决方案\修改cover-->
        <div v-if="isOwner">
          <div class="group-title">
            <h2>投标信息</h2>
          </div>
          <el-table
            :data="table_solution"
            style="width: 100%"
            height="500">
            <el-table-column
              prop="gmtCreate"
              label="上传日期"
              width="150">
            </el-table-column>
            <el-table-column
              prop="title"
              label="方案标题"
              width="300">
            </el-table-column>
            <el-table-column
              prop="orgName"
              label="投标机构"
              width="200">
            </el-table-column>
            <el-table-column
              prop="keywords"
              label="关键词"
              width="120">
            </el-table-column>
            <el-table-column
              prop="purchasePerson"
              label="联系人"
              width="100">
            </el-table-column>
            <el-table-column
              prop="purchasePhone"
              label="联系电话"
              width="100">
            </el-table-column>
            <el-table-column
              prop="budget"
              label="预算"
              width="100">
            </el-table-column>
            <el-table-column
              prop="price"
              label="购买需要积分"
              width="80">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope" >
                <div>
                  <el-button type="primary" @click="getResourceDetail('Solution',scope.row.id,scope.rowIndex)"  size="small">点击查看</el-button>
                </div>
                <div>
                  <el-button type="info" v-if="!scope.row.isAccepted" size="small" @click="changeAcc(scope.row.id,scope.row.isAccepted,scope.$index)">点击采用</el-button>
                  <el-button type="success" v-if="scope.row.isAccepted" size="small" @click="changeAcc(scope.row.id,scope.row.isAccepted,scope.$index)" >取消采用</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>


<!--          更换头像的dialog-->
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


        <!--   其他人可以查看自己上传的解决方案-->
        <div class="comments-area"  v-if="!isOwner">
          <div class="group-title">
            <h2>自己针对本需求上传的解决方案</h2>
          </div>
          <div  v-for="resource in UploadResources.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="resource.RId">
            <div class="comment-box " @click="getResourceDetail(resource.Type,resource.RId)">
              <div class="comment" style="min-height:120px;margin-top: 30px">
                <div class="author-thumb">
                  <img :src=" resource.RCover ||'/static/images/resource/featured-3.jpg'" alt=""  style="height: 100px;width: 100px">
                  <div style="text-align: center">
                    <span class="badge badge-success" >{{ resource.Type }}</span>
                  </div>
                </div>
                <div class="comment-inner" >
                  <div class="post-info">{{ resource.RTime }}</div>
                  <div class="comment-info">{{ resource.RName }} </div>
                  <div class="text">{{ resource.RAbstract }}</div>
                  <a class="reply-comment" href="#">{{ resource.RAbstract }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "RequirementDetail",
  data() {
    return {
      account:{},
      resource_type: this.$route.params.Type,
      resource_id:this.$route.params.Id,
      haveBuy:false,
      download_url:"",
      buy_resourcelist:[],
      upload_resourcelist:[],
      isOwner:this.owner===this.$cookies.get('type')+'_'+this.$cookies.get('id'),
      owner:"",
      showdialog:false,
      imageUrl:"",
      Requirement:{},
      dialogTableVisible: false,
      dialogFormVisible: false,
      UploadResources:[],
      blockchain_id:this.$cookies.get('type')+"_"+this.$cookies.get('id'),//用户id
      user_type: this.$cookies.get('type'),
      user_id:this.$cookies.get('id'),
      currentPage:1, //初始页
      pagesize:2,    //   每页的数据
      table_solution:[],
    }

  },
  created() {
    this.getDetail(this.resource_type,this.resource_id)
    this.getUpload(this.blockchain_id)
    this.get_table(this.resource_type,this.resource_id)
    this.get_owner("Requirement_"+this.resource_id)

  },

  methods:{
    changeAcc(id,status,index){//是否采用

      var vm=this
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/solutionservice/solution/modifyIsAccepted/"+id+"/"+!status,
      }).then(resp=>{
        vm.table_solution[index]['isAccepted']=!status
        alert("操作成功")
        //location.reload()
      })
    },//采用或未采用
    get_table(type,id){
      var vm=this
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/solutionservice/solution/getSolutionListByRequirementNumber/"+id,
      }).then(resp=>{
        vm.table_solution=resp.data.data.items
      })
    },//获取上传解决方案表
    getResourceDetail(Type,Id){
      this.$router.push({
        name:'ResourceDetail',
        params:{
          Type:Type,
          Id:Id
        }
      })
      location.reload()
    },//用于跳转资源页面
    handleSizeChange: function (size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage;
    },
   getUpload(blockchain_id){//拿到所有的上传资源，虚招自己上传的对应solution
      var vm= this
      this.axios({
        method:"post",
        url:this.GLOBAL.Blockchain_Base_Url+"/api/v1/queryAccount",
        data:{"Id":blockchain_id}
      }).then(res=>{
        console.log(res.data.data)
        var upload_resourcelist=res.data.data[0].Upload  //Hash也传出来了，购买失去了意义
        if(upload_resourcelist!==null){
          for (var i = 0; i < upload_resourcelist.length; i++) {
            var [type,id] = upload_resourcelist[i].split("_")
            //值判断Solution
            if(type==="Solution") {//只要solution
              vm.axios({
                method: 'get',
                url: this.GLOBAL.Service_Base_Url + '/' + type.toLowerCase() + 'service/' + type.toLowerCase() + '/get' + type + '/' + id
              }).then(res => {

                  type = Object.keys(res.data.data)[0]
                  var resource = res.data.data[type]

                  type = type.charAt(0).toUpperCase() + type.slice(1);
                  if(resource.requirementNumber===vm.resource_id) {//对应require
                    var RId = resource.id
                    var RName = resource.title
                    var RAbstract = resource.summary || resource.orgName
                    var RTime = resource.pubDate || resource.gmtCreate
                    var RCover = resource.cover
                    var RPrice = resource.price
                    var RAuthorName = resource.author || resource.purchaseInstitution || resource.purchasePerson
                    vm.UploadResources.push({
                      "Type": type,
                      "RId": RId,
                      "RName": RName,
                      "RAbstract": RAbstract,
                      "RTime": RTime,
                      "RAuthorName": RAuthorName,
                      "RCover": RCover,
                      "RPrice": RPrice
                    })
                  }
                }
              )
            }
          }
        }
      })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);

      this.Requirement.cover=res.data.url
    },
    beforeAvatarUpload(file) {

      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 10MB!');
      }
      return  isLt2M;
    },
    getDetail(Type,Id){//获取当前页面资源的详细信息
      var vm= this
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/requirementservice/requirement/get"+Type+"/"+Id,
      }).then(res=>{
        vm.Requirement=res.data.data[Object.keys(res.data.data)[0]]
        if(vm.Requirement.cover.substring(0,4)==="blob"){
          vm.Requirement.cover =vm.Requirement.cover.substring(5,vm.Requirement.cover.length-1)
        }
        else
        if(vm.Requirement.file===null||vm.Requirement.file===""){
          alert("该资源暂无源文件")
        }
        else if(vm.Requirement.file.indexOf("http")!==-1)
          vm.download_url=this.Requirement.file
        else{
          vm.download_url=this.GLOBAL.Download_Base_Url+vm.Requirement.file
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
    },//跳转上传者页面
    changecover(){
      var vm =this
      vm.Requirement.cover=this.imageUrl
      this.axios({
        method:'post',
        url:this.GLOBAL.Service_Base_Url+'/requirementservice/requirement/updateRequirement',
        data:vm.Requirement
      }).then(resp=>{
        alert("修改头像成功")
        this.showdialog=false}
      )
    },
    get_owner (resourceid) {//resourceid已经加上类型
      var vm = this
      this.axios({
        method: 'post',
        url: this.GLOBAL.Blockchain_Base_Url + '/api/v1/queryResource',
        data: {"Id": resourceid}
      }).then(resp => {
        vm.owner = resp.data.data[0].Owner//传出来的是一个数组
        vm.isOwner=(vm.owner===vm.blockchain_id)
      })
    },
    isBuyer(resourceid){//是否购买，可能有bug
      var vm = this
      this.axios({
        method: 'post',
        url: this.GLOBAL.Blockchain_Base_Url+'/api/v1/queryAccount',
        data: {"Id":this.blockchain_id}
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
        if(vm.upload_resourcelist.indexOf(resourceid)!==-1 || vm.buy_resourcelist.indexOf(resourceid)!==-1){//
          vm.haveBuy=true
        }
      }).catch(error=>{
        console.log(error)
      })
    },
    buy(){
      var vm =this
      var Dealdata={
          "Sell_id":this.owner,  //1 代表开发者用户用于启动
          "Buy_id":this.blockchain_id,
          "Resource_id":"Requirement_"+this.Requirement.id,
          "Cost":this.Requirement.price.toString(),
          "Time":new Date().toLocaleString('chinese', { hour12: false })
      }

      this.axios({
        method:'post',
        url:this.GLOBAL.Blockchain_Base_Url+'/api/v1/createDeal',
        data:Dealdata
      }).then(res=> {
          alert("购买成功")
        }
      ).catch(error=>{
        alert("购买失败")
      })
      //location.reload()
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

