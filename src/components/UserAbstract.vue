<template>
  <div>
	<section class="team-page-section"  v-if="this.$route.path==='/Commend'">
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
    <section class="team-page-section"  v-if="this.$route.path==='/SearchResult'" >
      <div style="text-align: center">
        <div class="app-container" >
          <!--查询表单-->
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
              <el-input v-model="expertQuery.name" placeholder="专家名"/>
            </el-form-item>
            <el-form-item>
              <el-input v-model="expertQuery.intro" placeholder="简介"/>
            </el-form-item>
            <el-form-item>
              <el-input v-model="expertQuery.institution" placeholder="单位"/>
            </el-form-item>
            <el-form-item label="添加时间">
              <el-date-picker
                v-model="expertQuery.begin"
                type="datetime"
                placeholder="选择开始时间"
                value-format="yyyy-MM-dd HH:mm:ss"
                default-time="00:00:00"
              />
            </el-form-item>
            <el-form-item>
              <el-date-picker
                v-model="expertQuery.end"
                type="datetime"
                placeholder="选择截止时间"
                value-format="yyyy-MM-dd HH:mm:ss"
                default-time="00:00:00"
              />
            </el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="get_search_users_frombutton()">查询</el-button>
          </el-form>

        </div>
      </div>
      <div class="auto-container">
        <div class="row clearfix">
          <div class="team-block col-lg-3 col-md-6 col-sm-12" v-for="user in searchUserResult"  :key="user.UId"  >
            <div class="inner-box class">
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
            :total=total
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
      searchUserResult:[],
      commendusers:[],
      currentPage:1, //初始页
      pagesize:8,    //   每页的数据
      list:null,  //查询之后接口返回的集合
      total:0,
      expertQuery:{}
    }
  },
  created() {
    if(this.$route.path==='/Commend')
      this.get_commend_users()
    if(this.$route.path==='/SearchResult')
      this.get_search_users()
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
    get_search_users_frombutton(){
      this.currentPage=1
      this.get_search_users()
    }
    ,
    handleSizeChange: function (size) {
      this.pagesize = size
    },
    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage
      this.get_search_users()
    },
    get_commend_users(){
      var vm=this
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getExpertRS/" +this.$cookies.get("id")+ "/1"
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
      })
    },
    get_search_users(){
      var vm =this
      vm.searchUserResult=[]
      this.page = 1
      this.listLoading = true
      this.axios({
        method:'post',
        url:this.GLOBAL.Service_Base_Url+"/expertservice/expert/pageExpertCondition/"+this.currentPage+"/"+this.pagesize,
        //url:"http://192.168.8.103:8001/expertservice/expert/pageExpertCondition/1/8",
        data: this.expertQuery
      }).then(response =>{  //请求成功
        vm.total=response.data.data.total
        var users=response.data.data.rows
        for(var i in users){
          var UId=users[i].id
          var UName=users[i].name
          var UIntro=users[i].intro
          if(users[i].avatar!=="string"){
            var UCover=users[i].avatar
          }else {var UCover=""}
          var UInstitution=users[i].institution
          vm.searchUserResult.push({"UId":UId,"UName":UName,"UIntro":UIntro,"UCover":UCover,"UInstitution":UInstitution})
        }
      })
        .catch(error =>{    //请求失败
          console.log(error)
        })
    },

},


}
</script>

<style scoped>

</style>
