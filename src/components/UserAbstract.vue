<template>
  <div>
	<section class="team-page-section">
		<div class="auto-container">
			<div class="row clearfix">
				
                <!--Team Block-->
                <div class="team-block col-lg-3 col-md-6 col-sm-12" v-for="user in commendusers.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="user.Id">
                    <div class="inner-box">
                        <div class="image">
                            <a href="#"><img src="static/images/resource/team-1.jpg" alt="" /></a>
                        </div>
                        <div class="lower-content">
                            <h3><a href="#">{{user.Id}}</a></h3>
                            <div class="designation">{{user.Affiliation}}</div>
                            <div class="text">{{user.Instroduction}}</div>
                        </div>
                    </div>
                </div>
				
			</div>
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
	</section>
	<!--End Team Page Section-->
	
	
			
	
    </div>
  
</template>

<script>
export default {
  name: "UpPaper",
  data() {
    return {
        commendusers:[],
        currentPage:1, //初始页
        pagesize:8,    //   每页的数据
    }
  },
  created() {
      var vm=this
      this.axios({
      method:'get',
      url:"https://www.easy-mock.com/mock/5f912b94e4d147581af7409b/vuedemo/commend_user",//跨域
    }).then(function (resp){
      console.log(resp.data.commendusers)
      vm.commendusers=resp.data.commendusers
      console.log( vm.commendusers)
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
