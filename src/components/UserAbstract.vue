<template>
  <div>
	<section class="team-page-section">
		<div class="auto-container">
			<div class="row clearfix">

        <!--Team Block-->
        <div class="team-block col-lg-3 col-md-6 col-sm-12" v-for="user in commendusers.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="user.UId"  >
          <div class="inner-box class" >
            <div class="lower-content" >
              <div class="image" @click="getUserDetail('Expert',user.UId)">
                <img :src="user.UCover || 'static/images/resource/team-2.jpg'"   alt="" style="display:block;width:auto;height:280px" />
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
    this.get_commend_users()
  },
  methods: {
    getUserDetail(Type,Id){
      this.$router.push({
        name:'UserDetail',
        params:{
          Type:Type,
          Id:Id
        }
      })
    },
    handleSizeChange: function (size) {
            this.pagesize = size
    },
    handleCurrentChange: function(currentPage){
            this.currentPage = currentPage
    },
    get_commend_users(){
      var vm=this
      this.axios({
        method:"get",
        url:"http://192.168.8.103:8222/rs/recommendation/getExpertRS/" +this.$cookies.get("id")+ "/1"
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
