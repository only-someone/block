<template>
  <div class="page-wrapper">

    <!-- Preloader -->
    <!--<div class="preloader"></div>-->

    <!-- Main Header / Header Style Two-->
    <header class="main-header header-style-two">
      <HomeNav></HomeNav>
      <MyNav></MyNav>
    </header>
    <!--End Main Header -->

    <!--Breadcrumb Title-->
    <section class="breadcrumb-section">
      <div class="auto-container">
        <ul>
          <li><a href="#">市场</a></li>
          <li>推荐</li>
        </ul>
      </div>
    </section>
    <!--End Breadcrumb Title-->

    <!--Sidebar Page Container-->
    <section class="page-title" style="background-image: url(static/images/background/4.jpg); padding:40px" >
      <div class="auto-container">
        <h1>推荐用户</h1>
        <div class="text">系统为您精心推荐的用户</div>
      </div>
    </section>
    <div class="auto-container" style="margin-bottom: 5%;margin-top: 5%">
      <div class="row clearfix">
        <div class="team-block col-lg-3 col-md-6 col-sm-12" v-for="user in recommendusers.slice((currentPage_user-1)*pagesize_user,currentPage_user*pagesize_user)"  :key="user.UId"  >
          <div class="inner-box class">
            <div class="lower-content" >
              <div class="image" @click="getUserDetail(user.UType,user.UId)">
                <img :src="user.UCover || 'static/images/resource/team-2.jpg'"   alt="" style="display:block;width:auto;height:280px" />
              </div>
              <h3><a href="#">{{user.UName}}</a></h3>
              <div class="designation">{{user.UIntro}}</div>
              <div class="text">{{user.UInstitution}}</div>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-left: 40%">
        <el-pagination
          :background=true
          style="margin:auto;margin-top:0px"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange_user"
          :current-page="currentPage_user"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesize_user"
          layout=" prev, pager, next"
          :total=recommendusers.length
          :hide-on-single-page=true>
        </el-pagination>
      </div>
    </div>
    <section class="page-title" style="background-image: url(static/images/background/4.jpg); padding:40px" >
      <div class="auto-container">
        <h1>推荐资源</h1>
        <div class="text">系统为您精心推荐的资源</div>
      </div>
    </section>
    <div class="auto-container" style="margin-top: 5%;margin-bottom: 5%">
      <div class="row clearfix">
        <!--Shop Item-->
        <div class="news-block-two masonry-item col-lg-3 col-md-6 col-sm-12" v-for="resource in recommendresources.slice((currentPage_resource-1)*pagesize_resource,currentPage_resource*pagesize_resource)"  :key="resource.Rid" >
          <div class="inner-box" >
            <div class="image" >
              <a><img :src="resource.RCover ||'/static/images/resource/featured-'+currentPage_resource+'.jpg'"   @click="getDetail(resource.Type,resource.RId)" style="width: 300px;height: 200px"/></a>
            </div>
            <div class="post-date">{{resource.RTime}}</div>
            <h3><a @click="getDetail(resource.Type,resource.RId)">{{resource.RName}}</a></h3>
            <div class="text" style="max-height: 300px;overflow: hidden;text-overflow: ellipsis;">{{resource.RAbstract}}</div>
            <div class="author">
              <div class="author-image"><img src="static/images/resource/author-2.jpg" alt="" /></div>
              {{resource.RAuthorName}}
            </div>
          </div>
        </div>
      </div>
      <div style="margin-left: 40%">
        <el-pagination
          :background=true
          style="margin:auto;margin-top:0px"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange_resource"
          :current-page="currentPage_resource"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesize_resource"
          layout=" prev, pager, next"
          :total=recommendresources.length
          :hide-on-single-page=true>
        </el-pagination>
      </div>
    </div>

    <section class="page-title" style="background-image: url(static/images/background/4.jpg); padding:40px"  v-if="this.$cookies.get('type')!=='Normal'">
      <div class="auto-container" >
        <h1>推荐招标信息</h1>
        <div class="text">提供更好的招标信息</div>
      </div>
    </section>
    <div class="auto-container"  style="margin-top: 5%;margin-bottom: 5%" v-if="this.$cookies.get('type')!=='Normal'" >
      <div class="row clearfix">
        <div class="price-block masonry-item col-lg-4 col-md-6 col-sm-12"  v-for="resource in recommendbids.slice((currentPage_bids-1)*pagesize_bids,currentPage_bids*pagesize_bids)"  :key="resource.id">
          <div class="inner-box">
            <el-row>
              <div class="price">￥{{ resource.budget ||0 }}</div>
            </el-row>
            <el-row>
              <div class="price">{{ resource.price }}积分</div>
            </el-row>

            <h2>{{ resource.title }}</h2>
            <ul class="price-list">
              <li>公告时间: {{ resource.announceTime }}</li>
              <li>开始时间: {{ resource.openTime }}</li>
              <li>结束时间: {{ resource.endTime }}</li>
              <li>联系人: {{ resource.purchasePerson  }}</li>
              <li>联系电话： {{ resource.purchasePhone  }}</li>
              <li>需求机构： {{ resource.purchaseInstitution  }}</li>
            </ul>
            <a :href="'#/ResourceDetail/Requirement/'+resource.id" class="theme-btn btn-style-two" >查看详情</a>
          </div>
        </div>
      </div>
      <div style="margin-left: 40%">
        <el-pagination
          :background=true
          style="margin:auto;margin-top:0px"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange_bids"
          :current-page="currentPage_bids"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesize_bids"
          layout=" prev, pager, next"
          :total=recommendbids.length
          :hide-on-single-page=true>
        </el-pagination>
      </div>
    </div>

    <Footer></Footer>

  </div>
</template>

<script>
export default {
  name: "UploadResource",
  data(){
    return{
      recommendresources:[],
      recommendusers:[],
      recommendbids:[],
      currentPage_resource:1, //初始页
      pagesize_resource:8,    //   每页的数据
      currentPage_user:1, //初始页
      pagesize_user:8,    //   每页的数据
      currentPage_bids:1, //初始页
      pagesize_bids:3,    //   每页的数据
    }
  },
  created() {
    this.get_commend_papers()
    this.get_commend_patents()
    this.get_commend_achievements()
    this.get_commend_cases()
    this.get_commend_softwares()
    this.get_commend_users()
    this.get_commend_bids()
  },
  methods:{
    get_commend_papers(){
      var vm=this
      this.axios({
        method:"get",
        //推荐专家
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/7"
      }).then(resp=>{
        var resource=resp.data.data.items
        for(var i=0;i<8;i++){
          var RId=resource[i].id
          var RName=resource[i].title
          var RAbstract=resource[i].summary
          var RTime=resource[i].pubDate
          if(resource[i].cover!=="string"){
            var RCover=resource[i].cover
          }else {var RCover=""}
          var RAuthorName=resource[i].author
          var RPrice=resource[i].price
          vm.recommendresources.push({"Type":"Paper","RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice})
        }
      })
    },
    get_commend_users(){
      var vm=this
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/1"
      }).then(resp=>{
        var users=resp.data.data.items
        for(var i in users){
          var UId=users[i].id
          var UName=users[i].name
          var UIntro=users[i].intro
          if(users[i].avatar!=="string"){
            var UCover=users[i].avatar
          }else {var UCover=""}
          var UInstitution=users[i].institution
          var UPhone=users[i].phone
          var UEmail=users[i].email
          vm.recommendusers.push({"UType":"Expert","UId":UId,"UName":UName,"UIntro":UIntro,"UCover":UCover,"UInstitution":UInstitution,"UPhone":UPhone,"UEmail":UEmail})
        }
      })
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/2"
      }).then(resp=>{
        var users=resp.data.data.items
        for(var i in users){
          var UId=users[i].id
          var UName=users[i].name
          var UIntro=users[i].orgaddress
          if(users[i].avatar!=="string"){
            var UCover=users[i].avatar||"static/images/resource/news-13.jpg"
          }else {var UCover="static/images/resource/news-3.jpg"}
          var UInstitution=users[i].domain
          var UPhone=users[i].phone
          var UEmail=users[i].businessscope
          vm.recommendusers.push({"UType":"Institution","UId":UId,"UName":UName,"UIntro":UIntro,"UCover":UCover,"UInstitution":UInstitution,"UPhone":UPhone,"UEmail":UEmail})
        }
      })
    },
    get_commend_patents(){
      var vm=this
      this.axios({
        method:"get",
        //推荐专家
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/8"
      }).then(resp=>{
        var resource=resp.data.data.items
        for(var i=0;i<8;i++){
          var RId=resource[i].id
          var RName=resource[i].title
          var RAbstract=resource[i].summary
          var RTime=resource[i].gmtCreate
          if(resource[i].cover!=="string"){
            var RCover=resource[i].cover
          }else {var RCover=""}
          var RAuthorName=resource[i].inventor
          var RPrice=resource[i].price
          vm.recommendresources.push({"Type":"Patent","RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice})
        }
      })
    },
    get_commend_achievements(){
      var vm=this
      this.axios({
        method:"get",
        //推荐专家
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/6"
      }).then(resp=>{
        var resource=resp.data.data.items
        for(var i=0;i<8;i++){
          var RId=resource[i].id
          var RName=resource[i].title
          var RAbstract=resource[i].summary
          var RTime=resource[i].gmtCreate
          if(resource[i].cover!=="string"){
            var RCover=resource[i].cover
          }else {var RCover=""}
          var RAuthorName=resource[i].author
          var RPrice=resource[i].price
          vm.recommendresources.push({"Type":"Achievement","RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice})
        }
      })
    },
    get_commend_cases(){
      var vm=this
      this.axios({
        method:"get",
        //推荐专家
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/5"
      }).then(resp=>{
        var resource=resp.data.data.items
        for(var i=0;i<8;i++){
          var RId=resource[i].id
          var RName=resource[i].title
          var RAbstract=resource[i].introduction
          var RTime=resource[i].gmtCreate
          if(resource[i].cover!=="string"){
            var RCover=resource[i].cover
          }else {var RCover=""}
          var RAuthorName=resource[i].staffInstitution
          var RPrice=resource[i].price
          vm.recommendresources.push({"Type":"Case","RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice})
        }
      })
    },
    get_commend_softwares(){},
    get_commend_bids(){
      var vm=this
      this.axios({
        method:"get",
        //推荐专家
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/3"
      }).then(resp=>{
        var resource=resp.data.data.items
        for(var i=0;i<9;i++){
          vm.recommendbids.push(resource[i])
        }
      })
    },
    getDetail(Type,Id){
      this.$router.push({
        name:'ResourceDetail',
        params:{
          Type:Type,
          Id:Id
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
    handleCurrentChange_resource: function(currentPage){
      this.currentPage_resource = currentPage
      this.get_search_resources()
    },
    handleCurrentChange_user: function(currentPage){
      this.currentPage_user = currentPage
      this.get_search_resources()
    },
    handleCurrentChange_bids: function(currentPage){
      this.currentPage_bids = currentPage
      this.get_search_resources()
    },
    handleSizeChange: function (size,type) {
        this.currentPage_resource = size
    },
  }
}
</script>

<style scoped>

</style>
