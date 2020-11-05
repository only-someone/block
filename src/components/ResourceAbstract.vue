<template>
  <div>
	<section class="blog-page-section" >
		<div class="auto-container" >
			<div class="masonry-items row clearfix">

				<!--News Block Two-->

				<div class="news-block-two masonry-item col-lg-4 col-md-6 col-sm-12" v-for="resource in up_resource_List.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="resource.Rid" >
					<div class="inner-box" v-if="isPersonDetail">
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
        <div class="news-block-two masonry-item col-lg-4 col-md-6 col-sm-12" v-for="resource in up_resource_List.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="resource.Rid" >
          <div class="inner-box" v-if="!isPersonDetail">
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
      <div style="margin-left: 40%">
        <el-pagination
            :background=true

            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize"
            layout=" prev, pager, next"
            :total="up_resource_List.length"
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
        currentPage:1, //初始页
        pagesize:6,    //   每页的数据
        commendresources:[],
        up_resource_List:[],
        isPersonDetail:this.$route.path==='/PersonDetail'
    }
  },
  created() {
    if( this.isPersonDetail)
      this.get_up_files()

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
        get_up_files(){
          var vm=this
          this.axios({
            method:'post',
            url:'http://192.168.8.197:8000/api/v1/queryUpload',
            data:{"Id":this.$cookies.get("id")}
          }).then(resp=>{
            vm.up_resource_List=resp.data.data
            console.log(vm.up_resource_List)
          })

        }
  },


}
</script>

<style scoped>

</style>
