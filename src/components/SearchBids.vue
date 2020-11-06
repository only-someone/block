<template>
  <div>
    <!--End Page Title-->
    <section class="price-page-section">
      <div class="auto-container">
        <div class="row clearfix">

          <!--Price Block-->
          <div class="price-block col-lg-4 col-md-6 col-sm-12" v-for="(value, index) in [1,2,3,4,5,6,7,8,9].slice((currentPage-1)*pagesize,currentPage*pagesize)">
            <div class="inner-box">
              <div class="price">$59.00</div>
              <h2>Classic package</h2>
              <ul class="price-list">
                <li>Unlimited Access</li>
                <li>Unlimited Bandwidth</li>
                <li>Unlimited Storage</li>
                <li>Unlimited Contributors</li>
              </ul>
              <a href="#" class="theme-btn btn-style-two">查看详情</a>

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
              :total="commendusers.length"
              :hide-on-single-page=true>
            </el-pagination>
          </div>

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
      commendusers:[1,2,3,4,5,6,7,8,9],
      currentPage:1, //初始页
      pagesize:6,    //   每页的数据
      commendresources:[1]
    }
  },
  created() {
    var vm=this
    this.axios({
      method:'get',
      url:"https://www.easy-mock.com/mock/5f912b94e4d147581af7409b/vuedemo/commendresources",//跨域
    }).then(function (resp){
      console.log(resp.data.commendresources)
      vm.commendresources=resp.data.commendresources
      console.log( vm.commendresources)
    })


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
  },


}
</script>

<style scoped>

</style>
