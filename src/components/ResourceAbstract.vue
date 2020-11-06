<template>
  <div>
	<section class="blog-page-section" >
		<div class="auto-container" >
			<div class="masonry-items row clearfix">

				<!--News Block Two-->

				<div class="news-block-two masonry-item col-lg-4 col-md-6 col-sm-12" v-for="resource in UploadResources.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="resource.Rid" >
					<div class="inner-box" v-if="isPersonDetail">
						<div class="image" >
							<a href="bid_detail.html"  ><img :src="resource.RCover" onerror="this.src='static/images/resource/featured-4.jpg'" style="width: 300px;height: 200px"/></a>
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
        <div class="news-block-two masonry-item col-lg-4 col-md-6 col-sm-12" v-for="resource in commendresources.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="resource.Rid" >
          <div class="inner-box" v-if="!isPersonDetail">
            <div class="image">
              <a href="bid_detail.html"><img :src=resource.RCover alt="" /></a>
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
        currentPage:1, //初始页
        pagesize:6,    //   每页的数据
        UploadResources:[],
        commendresources:[],
        isPersonDetail:this.$route.path==='/PersonDetail'
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
          eventBus.$on('upload_list', function(val) {
            for (var i in val){
              console.log(val[i])
              vm.axios({
                method:'get',
                url:'http://192.168.8.103:8003/paperservice/paper/getPaper/'+val[i].id
              }).then(res=> {
                console.log(res)
                  var RName=res.data.data.paper.title
                  var RAbstract=res.data.data.paper.summary
                  var RTime=res.data.data.paper.pubDate
                  var RCover=res.data.data.paper.cover
                  console.log(RCover)
                  var RAuthorName=res.data.data.paper.author
                  vm.UploadResources.push({"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover})
                }
              )
            }

          })



        },


  },


}
</script>

<style scoped>

</style>
