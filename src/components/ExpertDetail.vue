<template>
  <div>
    <section class="shop-single-section sidebar-page-container">
      <div class="auto-container">
        <div class="row clearfix">

          <!--Content Column-->
          <div class="content-column col-lg-8 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="shop-single">
                <div class="inner-box"  >
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">专家姓名</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{user.name}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">所属机构</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{user.institution}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">职位</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{user.career}}</div></el-col>
                  </el-row>

                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">传真</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{user.fax}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">邮箱</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{user.email}}</div></el-col>
                    <el-col :span="4" ><div class="grid-content bg-purple-dark">电话</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{user.phone}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">专家简介</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">{{user.intro}}</div></el-col>
                  </el-row>

                </div>
              </div>
            </div>
          </div>

          <!--Sidebar Column-->
          <div class="sidebar-column col-lg-4 col-md-12 col-sm-12">
            <el-image :src="user.avatar ||'static/images/resource/team-2.jpg'"     width="100%" style="width: 350px;height:400px" alt=""  lazy/>
            <div class="purchased-widget" style="margin-top: 40px">
              <div  style="text-align: center">
                <el-button type="success" v-if="user.state" >已通过审核</el-button>
                <el-button type="danger" v-if="!user.state" >暂未通过审核</el-button>
              </div>
            </div>

          </div>

        </div>
        <div class="comments-area">
          <div class="group-title">
            <h2>该用户上传的资源</h2>
          </div>
          <div  v-for="resource in UploadResources.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="resource.RId">
            <div class="comment-box " @click="getResourceDetail(resource.Type,resource.RId)">
              <div class="comment" style="margin-top: 30px">
                <div class="author-thumb"><img :src=" resource.RCover ||'/static/images/resource/featured-3.jpg'" alt="" style="height: 130px;width: 130px"></div>
                <div class="comment-inner" style="margin-left: 30px">
                  <div class="post-info">{{ resource.RTime }}</div>
                  <div class="comment-info">{{ resource.RName }} </div>
                  <div class="text">{{ resource.RAbstract }}</div>
                  <a class="reply-comment" href="#">{{ resource.RAbstract }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-pagination
          :background=true
          style="text-align: center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 40]"
          :page-size="pagesize"
          layout=" prev, pager, next"
          :total="UploadResources.length"
          :hide-on-single-page=true>
        </el-pagination>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "ExpertDetail",
  data() {
    return {
      account:{},
      user:{},//从区块链获得
      user_type: this.$route.params.Type,
      user_id:this.$route.params.Id,
      upload_resourcelist:[],
      currentPage:1, //初始页
      pagesize:2,    //   每页的数据
      UploadResources:[],
    }
  },
  created() {
    this.getDetail(this.user_type,this.user_id)
    this.getUpload(this.user_type,this.user_id)

  },

  methods:{
    handleSizeChange: function (size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage;
    },
    getDetail(Type,Id){
      var vm= this
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/expertservice/expert/get"+Type+"/"+Id,
      }).then(res=>{
        vm.user=res.data.data[Object.keys(res.data.data)[0]]
      })
    },
    getResourceDetail(Type,Id){
      this.$router.push({
        name:'ResourceDetail',
        params:{
          Type:Type,
          Id:Id
        }
      })
    },
    getUpload(Type,Id){
      var vm= this
      this.axios({
        method:"post",
        url:this.GLOBAL.Blockchain_Base_Url+"/api/v1/queryUpload",
        data:{"Id":vm.user_id}
      }).then(res=>{
        var upload_resourcelist=res.data.data  //Hash也传出来了，购买失去了意义
        if(upload_resourcelist!==null){
          for (var i = 0; i < upload_resourcelist.length; i++) {
            var [type,id] = upload_resourcelist[i].id.split("_")
            vm.axios({
              method:'get',
              url:this.GLOBAL.Service_Base_Url+'/paperservice/paper/get'+type+'/'+id
            }).then(res=> {
                var resource=res.data.data[Object.keys(res.data.data)[0]]
                var RId=resource.id
                var RName=resource.title
                var RAbstract=resource.summary
                var RTime=resource.pubDate
                var RCover=resource.cover
                var RPrice=resource.price
                var RAuthorName=resource.author
                vm.UploadResources.push({"Type":type,"RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice})
              }
            )
          }

        }
      })
    },


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

