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
                    <el-col :span="4"><div class="grid-content bg-purple-dark">机构名称</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">{{institution.name}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">创建时间</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{institution.createtime}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">地址</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{institution.orgaddress}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">

                    <el-col :span="4"><div class="grid-content bg-purple-dark">研究领域</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{institution.domain}}</div></el-col>

                  </el-row>

                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">省</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{institution.province}}</div></el-col>
                    <el-col :span="4" ><div class="grid-content bg-purple-dark">城市</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{institution.city}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">机构简介</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">{{institution.businessscope}}</div></el-col>
                  </el-row>

                </div>
              </div>
            </div>
          </div>

          <!--Sidebar Column-->
          <div class="sidebar-column col-lg-4 col-md-12 col-sm-12">
            <el-image :src="institution.avatar ||'static/images/resource/news-5.jpg'"     width="100%" style="width: 350px;height:400px" alt=""  lazy/>
            <div class="purchased-widget" style="margin-top: 40px">
              <div  style="text-align: center">
<!--                <el-button type="success" v-if="user.state" >已通过审核</el-button>-->
<!--                <el-button type="danger" v-if="!user.state" >暂未通过审核</el-button>-->
              </div>
            </div>

          </div>

        </div>
        <div class="comments-area">
          <div class="group-title">
            <h2>该用户上传的其他资源</h2>
          </div>
          <div  v-for="resource in releated_resources.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="resource.RId">
            <div class="comment-box " @click="getResourceDetail(resource.Type,resource.RId)">
              <div class="comment" style="min-height:120px;margin-top: 30px">
                <div class="author-thumb">
                  <img :src=" resource.RCover ||'/static/images/resource/featured-3.jpg'" alt=""  style="height: 100px;width: 100px;margin-left: 20px">
                <div style="text-align: center">
                  <span class="badge badge-success" >{{ resource.Type }}</span>
                  <div>
                    <span class="badge badge-success" style="background-color: #80bdff" >{{ resource.method }}</span>
                  </div>
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
    <section class="shop-single-section sidebar-page-container" >
      <div class="auto-container" >
        <KnowledgeGraph width="100%" :kg_id="institution.kgId" ></KnowledgeGraph>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "InstitutionDetail",
  data() {
    return {
      account:{},
      institution:{},//从区块链获得
      institution_type: this.$route.params.Type,
      institution_id:this.$route.params.Id,
      upload_resourcelist:[],
      currentPage:1, //初始页
      pagesize:2,    //   每页的数据
      UploadResources:[],
      releated_resources:[],
    }
  },
  created() {
    this.getDetail(this.institution_type,this.institution_id)
    this.getUpload(this.institution_type,this.institution_id)
    this.getBuy(this.institution_type,this.institution_id)
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
        url:this.GLOBAL.Service_Base_Url+"/institutionservice/institution/get"+Type+"/"+Id,
      }).then(res=>{
        vm.institution=res.data.data[Object.keys(res.data.data)[0]]
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
        url:this.GLOBAL.Blockchain_Base_Url+"/api/v1/queryAccount",
        data:{"Id":Type+"_"+Id}
      }).then(res=>{
        var upload_resourcelist=res.data.data[0].Upload
        if(upload_resourcelist!==null){
          for (var i = 0; i < upload_resourcelist.length; i++) {
            console.log(upload_resourcelist[i])
            let method
            vm.axios({//查看是否拥有改资源
              method:"post",
              url:this.GLOBAL.Blockchain_Base_Url+"/api/v1/queryResource",
              data:{"Id":upload_resourcelist[i]}
            }).then(resp=>{
              if(resp.data.data[0].Owner===Type+"_"+Id){
                method="当前拥有"//拥有  购买  上传
              }
              else method="曾经上传"
            })
            var [type,id] = upload_resourcelist[i].split("_")
            vm.axios({
              method:'get',
              url:this.GLOBAL.Service_Base_Url+'/'+type.toLowerCase()+'service/'+type.toLowerCase()+'/get'+type+'/'+id
            }).then(res=> {
              type=Object.keys(res.data.data)[0]
              var resource=res.data.data[type]
              type = type.charAt(0).toUpperCase() + type.slice(1);
              var RId=resource.id
              var RName=resource.title
              var RAbstract=resource.summary||resource.orgName
              var RTime=resource.pubDate||resource.gmtCreate
              var RCover=resource.cover
              var RPrice=resource.price
              var RAuthorName=resource.author||resource.purchaseInstitution||resource.purchasePerson
              let newresource={"Type":type,"RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice,"method":method}
              if (!vm.releated_resources.includes(newresource))
                vm.releated_resources.push(newresource)}
            )
          }

        }
      })
    },
    getBuy(Type,Id){
      var vm= this
      this.axios({
        method:"post",
        url:this.GLOBAL.Blockchain_Base_Url+"/api/v1/queryAccount",
        data:{"Id":Type+"_"+Id}
      }).then(res=>{
        var buy_resourcelist=res.data.data[0].Buy
        if(buy_resourcelist!==null){
          for (var i = 0; i < buy_resourcelist.length; i++) {
            let method
            vm.axios({//查看是否拥有改资源
              method:"post",
              url:this.GLOBAL.Blockchain_Base_Url+"/api/v1/queryResource",
              data:{"Id":buy_resourcelist[i]}
            }).then(resp=>{
              if(resp.data.data[0].Owner===Type+"_"+Id){
                method="当前拥有"//拥有  购买  上传
              }
              else method="曾经购买"
            })
            var [type,id] = buy_resourcelist[i].split("_")
            vm.axios({
              method:'get',
              url:this.GLOBAL.Service_Base_Url+'/'+type.toLowerCase()+'service/'+type.toLowerCase()+'/get'+type+'/'+id
            }).then(res=> {
                type=Object.keys(res.data.data)[0]
                var resource=res.data.data[type]
                type = type.charAt(0).toUpperCase() + type.slice(1);
                var RId=resource.id
                var RName=resource.title
                var RAbstract=resource.summary||resource.orgName
                var RTime=resource.pubDate||resource.gmtCreate
                var RCover=resource.cover
                var RPrice=resource.price
                var RAuthorName=resource.author||resource.purchaseInstitution||resource.purchasePerson
                let newresource={"Type":type,"RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice,"method":method}
                if (vm.releated_resources.includes(newresource))
                  vm.releated_resources.push(newresource)
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

