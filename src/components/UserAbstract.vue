<template>
  <div>
	<section class="team-page-section">
		<div class="auto-container">
			<div class="row clearfix">

        <!--Team Block-->
        <div class="team-block col-lg-3 col-md-6 col-sm-12" v-for="user in commendusers.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="user.Id">
          <div class="inner-box class" >
            <div class="lower-content" >
              <div class="image">
                <img :src="user.UCover || 'static/images/resource/team-2.jpg'" alt="" ondragover=""/>
              </div>
              <h3><a href="#">{{user.UName}}</a></h3>
              <div class="designation">{{user.UIntro}}</div>
              <div class="text">{{user.UInstitution}}</div>
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
          :total="commendusers.length"
          :hide-on-single-page=true>
        </el-pagination>
      </div>
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
    this.get_commend_resources()
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
        get_commend_resources(){
          var vm=this
          this.axios({
            method:"get",
            url:"http://192.168.8.103:8005/rs/recommendation/getExpertRS/" +this.$cookies.get("id")+ "/1"
          }).then(resp=>{
            var users=resp.data.data.items
            for(var i in users){
              var UId=users[i].id
              var UName=users[i].name
              var UIntro=users[i].intro
              if(users[i].avatar!=="string"){
                var UCover=users[i].avatar
              }else {var UCover=""}
              var UInstitution=users[i].institution
              vm.commendusers.push({"UId":UId,"UName":UName,"UIntro":UIntro,"UCover":UCover,"UInstitution":UInstitution})
            }
            console.log(vm.commendusers)
          })
        },
  },


}
</script>

<style scoped>

</style>
