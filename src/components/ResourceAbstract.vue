<template>
  <div>
    <section class="blog-page-section" >
      <div class="auto-container" >
        <div class="masonry-items row clearfix">

          <!--News Block Two-->

          <div class="news-block-two masonry-item col-lg-4 col-md-6 col-sm-12" v-for="resource in UploadResources.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="resource.RId" >
            <div class="inner-box" v-if="isPersonDetail">
              <div class="image" >
                <a><el-image :src="resource.RCover ||'/static/images/resource/featured-4.jpg'"   @click="getDetail(resource.Type,resource.RId)" style="width: 300px;height: 200px" /></a>
              </div>
              <div class="post-date">{{resource.RTime}}</div>
              <h3><a @click="getDetail(resource.Type,resource.RId)">{{resource.RName}}</a></h3>
              <div class="text">{{resource.RAbstract}}</div>
              <div class="author">
                <div class="author-image"><img src="static/images/resource/author-2.jpg" alt="" /></div>
                by {{resource.RAuthorName}}<span class="badge badge-success" style="margin-left: 20px">{{resource.Type}}</span>

              </div>
            </div>
          </div>


          <div class="news-block-two masonry-item col-lg-4 col-md-6 col-sm-12" v-for="resource in commendresources.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="resource.Rid" >
            <div class="inner-box" >
              <div class="image" >
                <a><img :src="resource.RCover ||'/static/images/resource/featured-4.jpg'"   @click="getDetail(resource.Type,resource.RId)" style="width: 300px;height: 200px"/></a>
              </div>
              <div class="post-date">{{resource.RTime}}</div>
              <h3><a @click="getDetail(resource.Type,resource.RId)">{{resource.RName}}</a></h3>
              <div class="text">{{resource.RAbstract}}</div>
              <div class="author">
                <div class="author-image"><img src="static/images/resource/author-2.jpg" alt="" /></div>
                by {{resource.RAuthorName}}<span class="badge badge-success" style="margin-left: 20px">{{resource.Type}}</span>
              </div>
            </div>
          </div>


        </div>
        <div style="margin-left: 40%">
          <el-pagination
            :background=true

            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize"
            layout=" prev, pager, next"
            :total="commendresources.length"
            :hide-on-single-page=true>
          </el-pagination>
        </div>
        <div style="margin-left: 40%">
          <el-pagination
            :background=true

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
      </div>
    </section>
  </div>

</template>

<script>
export default {
  name: "UserAbstract",
  data() {
    return {
      account:{},
      currentPage:1, //初始页
      pagesize:6,    //   每页的数据
      UploadResources:[],
      commendresources:[],
      isPersonDetail:this.$route.path==='/PersonDetail',
      isCommend:this.$route.path==='/Commend'
    }
  },
  created() {
    if( this.isPersonDetail)
      this.get_account()
    if(this.isCommend){
      this.get_commend_resources()
    }
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size;

    },
    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage;

    },
    get_account(){
      var vm = this
      this.axios({
        method: 'post',
        url: this.GLOBAL.Blockchain_Base_Url+'/api/v1/queryAccount',
        data:{ "Id":this.$cookies.get("type")+"_"+this.$cookies.get("id") }
      }).then(resp => {
        vm.account = resp.data.data[0]
        this.$cookies.set("score",vm.account.Score)
        if(vm.account.Upload!==null){
          for (var i = 0; i < vm.account.Upload.length; i++) {
            var [type,id] =vm.account.Upload[i].split("_")
            if(type!=="Solution"&&type!=="Requirement") {
              vm.axios({
                method: 'get',
                url: this.GLOBAL.Service_Base_Url + "/" + type.toLowerCase() + 'service/' + type.toLowerCase() + '/get' + type + '/' + id
              }).then(res => {
                  type = Object.keys(res.data.data)[0]
                  var resource = res.data.data[type]
                  type = type.charAt(0).toUpperCase() + type.slice(1);
                  var RId = resource.id
                  var RName = resource.title
                  var RAbstract = resource.summary
                  var RTime = resource.gmtCreate
                  var RCover = resource.cover
                  var RAuthorName = resource.author
                  if (vm.UploadResources.includes({
                    "Type": type.keys,
                    "RId": RId,
                    "RName": RName,
                    "RAbstract": RAbstract,
                    "RTime": RTime,
                    "RAuthorName": RAuthorName,
                    "RCover": RCover
                  })) {
                  } else {
                    vm.UploadResources.push({
                      "Type": type,
                      "RId": RId,
                      "RName": RName,
                      "RAbstract": RAbstract,
                      "RTime": RTime,
                      "RAuthorName": RAuthorName,
                      "RCover": RCover
                    })
                  }
                }
              )
            }
          }

        }

      }).catch(error=>{
        console.log(error)
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
    get_commend_resources(){
      var vm=this
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getExpertRS/" +this.$cookies.get("id")+ "/2"
      }).then(resp=>{
        var resource=resp.data.data.items
        for(var i in resource){
          var RId=resource[i].id
          var RName=resource[i].title
          var RAbstract=resource[i].summary
          var RTime=resource[i].pubDate
          if(resource[i].cover!=="string")
            var RCover=resource[i].cover
          var RAuthorName=resource[i].author
          vm.commendresources.push({"Type":"Paper","RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover})
        }
      })
    },


  },


}
</script>

<style scoped>

</style>
