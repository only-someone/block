<template>
  <div class="page-wrapper">
    <!--Shop Page Section-->
    <section class="shop-page-section">
      <div class="auto-container">


        <div class="row clearfix">

          <!--Shop Item-->
          <div class="shop-item col-lg-3 col-md-6 col-sm-12" v-for="(value, index) in Buy_Resources.slice((currentPage-1)*pagesize,currentPage*pagesize)" v-if="isPersonDetail">
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
            :total="Buy_Resources.length"
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
      isPersonDetail:this.$route.path==='/PersonDetail',
      Buy_Resources:[]
    }
  },
  created() {
    if(this.isPersonDetail)
      this.get_buy_resources()


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
    get_buy_resources(){
      var vm=this
      this.axios({
        method:'post',
        url:'http://192.168.8.197:8000/api/v1/queryBuyResources',
        data:{"Id":this.$cookies.get("id")}
      }).then(resp=>{
        vm.Buy_Resources=resp.data.data
      })
    }
  },

}
</script>

<style scoped>

</style>
