<template>
  <div class="page-wrapper">
    <!--Shop Page Section-->
    <section class="shop-page-section">
      <div class="auto-container">


        <div class="row clearfix">

          <!--Shop Item-->
          <div class="shop-item col-lg-3 col-md-6 col-sm-12" v-for="resource in BuyResources.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="resource.RId" >
            <div class="inner-box" style="text-align: center">
              <div class="image">
                <a @click="getDetail(resource.Type,resource.RId)"><el-image :src="resource.RCover||'static/images/resource/featured-4.jpg'" alt="" style="display: block;width: auto;height: 200px" /></a>
              </div>
              <div class="lower-content">
                <h3><a @click="getDetail(resource.Type,resource.RId)">{{ resource.RName }}</a></h3>
                <div class="price">{{ resource.RPrice }}积分</div>
                <a @click="getDetail(resource.Type,resource.RId)" class="theme-btn btn-style-two" style="color: #ffffff" v-if="isPersonDetail">查看详情</a>
                <a href="resource_detail.html" class="theme-btn btn-style-two" v-else>购买下载</a>
              </div>
            </div>
          </div>


        </div>
        <div style="margin-left: 40%">
          <el-pagination
            :background=true
            style="margin:auto;margin-top:0px"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize"
            layout=" prev, pager, next"
            :total="BuyResources.length"
            :hide-on-single-page=true>
          </el-pagination>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "SearchResources",
  data() {
    return {
      currentPage:1, //初始页
      pagesize:8,    //   每页的数据
      commendresources:[],
      BuyResources:[],
      isPersonDetail:this.$route.path==='/PersonDetail',
      set:{},
    }
  },
  created() {
    if( this.isPersonDetail) {
      this.get_account()

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
        url: 'http://192.168.8.197:8000/api/v1/queryAccount',
        data: {"Id": this.$cookies.get("id")}
      }).then(resp => {
        vm.account = resp.data.data[0]
        if(vm.account.Buy!==null){
          for (var i = 0; i < vm.account.Buy.length; i++) {
            var [type,id] =vm.account.Buy[i].id.split("_")
            vm.axios({
              method:'get',
              url:'http://192.168.8.103:8222/paperservice/paper/get'+type+'/'+id
            }).then(res=> {
                //console.log(res)
                var resource=res.data.data[Object.keys(res.data.data)[0]]
                var RId=resource.id
                var RPrice=resource.price
                var RName=resource.title
                var RAbstract=resource.summary
                var RTime=resource.pubDate
                var RCover=resource.cover
                var RAuthorName=resource.author
                var resource_1={"Type":type,"RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice}
                vm.BuyResources.push(resource_1)
              }
            )
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
    }

  },

}
</script>

<style scoped>

</style>
