<template>
  <div>
	<section class="blog-page-section">
		<div class="auto-container">
			<div class="masonry-items row clearfix">
				
				<!--News Block Two-->
				<div class="news-block-two masonry-item col-lg-4 col-md-6 col-sm-12" v-for="resource in commendresources.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="resource.Rid">
					<div class="inner-box" >
						<div class="image">
							<a href="bid_detail.html"><img src="static/images/resource/news-1.jpg" alt="" /></a>
						</div>
						<div class="post-date">{{resource.RTime}}</div>
						<h3><a href="bid_detail.html">{{resource.RName}}</a></h3>
						<div class="text">{{resource.RAbstract}}</div>
						<div class="author">
							<div class="author-image"><img src="static/images/resource/author-2.jpg" alt="" /></div>
							by {{resource.RAuthorName}}
						</div>
					</div>
				</div>
				
				
			</div>
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
	</section>
    </div>
  
</template>

<script>
export default {
  name: "UserAbstract",
  data() {
    return {
        commendusers:[],
        currentPage:1, //初始页
        pagesize:6,    //   每页的数据
        commendresources:[]
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
