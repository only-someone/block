<template>
  <div class="page-wrapper">
    <!--Shop Page Section-->
    <section class="shop-page-section">
      <div class="auto-container">


        <div class="row clearfix">

          <!--Shop Item-->
          <div class="shop-item col-lg-3 col-md-6 col-sm-12" v-for="(value, index) in BuyResources.slice((currentPage-1)*pagesize,currentPage*pagesize)" v-if="isPersonDetail">
            <div class="inner-box">
              <div class="image">
                <a href="resource_detail.html"><img src="static/images/resource/products/1.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="resource_detail.html">Product name</a></h3>
                <div class="price">$25.99</div>
                <a href="resource_detail.html" class="theme-btn btn-style-two">查看详情</a>
                <a href="resource_detail.html" class="theme-btn btn-style-two">购买下载</a>
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

    }
  },
  created() {
    if( this.isPersonDetail)
      this.get_account()
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size;
      console.log(this.pagesize)  //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage;
      console.log(this.currentPage)  //点击第几页
    },
    get_account(){
      var vm=this
      eventBus.$on('buy_list', function(val) {
        for (var i in val){
          console.log(val[i])
          vm.axios({
            method:'get',
            url:'http://192.168.8.103:8003/paperservice/paper/getPaper/'+val[i].id
          }).then(res=> {
              var RName=res.data.data.title
              var RAbstract=res.data.data.summary
              var RTime=res.data.data.pubDate
              vm.BuyResources.push({"RName":RName,"RAbstract":RAbstract,"RTime":RTime})
            }
          )
        }

        console.log(vm.resultresources)
      })



    },


  },

}
</script>

<style scoped>

</style>
