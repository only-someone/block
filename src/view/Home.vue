<template>
  <div class="page-wrapper">

    <!-- Preloader -->
<!--    <div class="preloader"></div>-->

    <!-- Main Header-->
    <header class="main-header">
      <HomeNav></HomeNav>
      <MyNav></MyNav>
    </header>
    <!--End Main Header -->

    <!--Banner Section-->
    <section class="banner-section" style="background-image: url(static/images/background/8.jpg)">
      <div class="auto-container">
        <h2>基于区块链和知识图谱的 <br> 数据交易平台</h2>
        <!--Search Form-->
        <div class="search-form">
          <form method="post" action="">
            <div class="form-group ">
              <select class="custom-select-box" style="padding-right: 0px;margin-left: 20px">
                <option>所有</option>
                <option>专家</option>
                <option>单位</option>
                <option>论文</option>
                <option>专利</option>
                <option>技术成果</option>
                <option>软件著作</option>
                <option>项目需求</option>
                <option>解决方案</option>
                <option>案例</option>
              </select>
              <input type="text" name="firstname" value="" placeholder="在这里搜索" required>
              <router-link to="SearchResult"><button type="submit" class="theme-btn dripicons-search"></button></router-link>
            </div>

          </form>
        </div>
        <!--End Search Form-->
        <div class="title" >寻找感兴趣的 <span>用户,数据资源,和项目</span> </div>

        <div><h3 align="center" style="margin-top: 30px"><router-link to="Commend" style="color: #ffffff">进入推荐页面</router-link></h3></div>

        <!--图片要截一下-->
      </div>
    </section>
    <!--End Banner Section-->

    <!--Featured Section-->
    <section class="featured-section">
      <div class="auto-container">
        <!--Sec Title-->
        <div class="sec-title centered">
          <h2>Interested Resources</h2>
          <!--不细分专家和城市，类型中标注-->
        </div>
        <div class="row clearfix">
          <!--Featured Block-->
          <div class="featured-block col-lg-3 col-md-6 col-sm-12" v-for="(resource,index ) in this.commendResources" :key=index  @click="getDetail(resource.Type,resource.RId)" >
            <div class="inner-box wow fadeInLeft" :animation-delay='resource'
                 style="visibility: visible; animation-duration:1500ms; animation-name: fadeInLeft; user-select: auto; ">
              <div class="image">
                <img :src="'static/images/resource/featured-1.jpg'" alt="" />
              </div>
              <div class="lower-content">
                <h3><a @click="getDetail(resource.Type,resource.RId)">{{ resource.RName }}</a></h3>
                <div class="text">{{ resource.RAbstract }}</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="author">
                      <div class="author-image"><img src="static/images/resource/author-1.jpg" alt=""/></div>
                      by {{ resource.RAuthorName }}
                    </div>
                  </div>
                  <div class="pull-right">
                    <div class="price">{{ resource.RPrice||0 }}积分</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!--End Featured Section-->

    <!--Testimonial Section-->


    <!--Category Section-->
  <section class="testimonial-section">
		<div class="auto-container">
			<!--Sec Title-->
			<div class="sec-title centered">
				<h2>Interested Users</h2>
			</div>
      <el-carousel  type="card" style="width: 120%;height: 120%;margin-left: -10%" >
        <el-carousel-item v-for="user in commendUsers" :key="user.UId" style="margin:0;text-align:center;"   >
          <div class="testimonial-block" style="margin-top: 50px;text-align:center;" >
            <div class="inner-box" style="width: 60%;margin-left: 20%;">
              <div class="image" style="user-select: auto;">
                <a   @click="getUserDetail(user.UType,user.UId)"  style="user-select: auto;"><img :src="user.UCover||'static/images/resource/author-5.jpg'" alt="" style="user-select: auto;width:100px;height:100px;"></a>
              </div>
              <h3 style="user-select: auto;">{{ user.UName}}</h3>
              <div class="text" style="user-select: auto;">单位:{{user.UInstitution}}</div>
              <div class="text" style="user-select: auto;">简介:{{user.UIntro}}</div>
              <div class="designation" style="user-select: auto;">电话：{{ user.UPhone }}</div>
              <div class="designation" style="user-select: auto;">邮箱：{{user.UEmail}}</div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>

			<!-- <div class="  owl-theme ">
				<div class="testimonial-block" v-for=" index in Array(9)" :key=index>
			    <div class="inner-box">
						<div class="image">
							<img src="images/resource/author-3.jpg" alt="" />
						</div>
						<div class="text">“Needless to say we are extremely satisfied with Digital. I will recommend to my colleagues. I strongly recommend Digotal to anyone.”</div>
						<h3>Jessica Reyes</h3>
						<div class="designation">Designer@Google</div>
					</div>
				</div>
			</div> -->
		</div>
	</section>

  <section class="category-section" >
  <div class="auto-container">
    <!--Sec Title-->
    <div class="sec-title centered">
      <h2>城市</h2>
    </div>
    <div class="row clearfix">

      <!--Category Block-->
      <div class="category-block" v-for=" index in Array(10)" :key=index>
        <div class="inner-box">
          <div class="image">
            <img src="static/images/resource/category-5.jpg" alt="" />
            <div class="overlay-box">
              <div class="overlay-inner">
                <div >
                  <h3><a href="city_info.html">城市名</a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    <section class="news-section">
      <div class="auto-container">
        <div class="sec-title centered">
          <h2>项目需求招标</h2>
        </div>
        <div class="row clearfix">

          <!--News Block-->
          <div class="news-block col-lg-4 col-md-6 col-sm-12" v-for=" index in Array(3)" :key=index>
            <div class="inner-box">
              <div class="post-date">招标开始至结束日期</div>
              <h3><a href="bid_detail.html">招标标题</a></h3>
              <div class="text">招标简介</div>
              <div class="author">
                <div class="author-image"><img src="static/images/resource/author-2.jpg" alt="" /></div>
                by 用户
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End Category Section-->

    <!--News Section-->

    <!--End News Section-->

    <!--Counter Section-->
    <section class="counter-section">
      <!--Title Box-->
      <div class="title-box" style="background-image: url(static/images/background/8.jpg)">
        <div class="auto-container">
          <h2><a  href="http://192.168.8.197:8080/#/" style="color: #FFFFFF" >Blockchain</a><br></h2>
        </div>
      </div>
      <!--Lower Section-->
      <div class="lower-section">
        <div class="auto-container">

          <!--Fact Counter-->
          <div class="fact-counter">
            <div class="row clearfix">

              <!--Column-->
              <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                <div class="inner">
                  <div >
                    <div class="count-outer count-box">
                      <countTo ref='example1' class='example1' :startVal=0 :endVal=3 :duration='5000' :autoplay=false></countTo>
                    </div>
                    <h4 class="counter-title">节点数</h4>
                  </div>
                </div>
              </div>

              <!--Column-->
              <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                <div class="inner">
                  <div >
                    <div class="count-outer count-box">
                      <countTo ref='example2' class='example2' :startVal=0 :endVal=300 :duration='3000' pause=true :autoplay=false> </countTo>
                    </div>
                    <h4 class="counter-title">区块高度</h4>
                  </div>
                </div>
              </div>

              <!--Column-->
              <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                <div class="inner">
                  <div >
                    <div class="count-outer count-box">
                      <countTo ref='example3' class='example3' :startVal=0 :endVal=12 :duration='5000'  suffix="G" :autoplay=false></countTo>
                    </div>
                    <h4 class="counter-title">区块大小</h4>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
    <!--End Counter Section-->

    <section class="counter-section">
      <!--Title Box-->
      <div class="sec-title centered">
        <h2>Knowledge Graph</h2>
      </div>


    </section>

    <Footer></Footer>

  </div>
</template>

<script>

import countTo from 'vue-count-to'
export default {
  name: "Home",
  components: {
    countTo
  },
  data(){
    return {
      list_users: new Array(8),
      avatar:"",
      block_mermory:20,
      block_height:20,
      block_node:20,
      start:false,
      fadetime:["0ms","300ms","600ms","900ms","0ms","300ms","600ms","900ms"],
      commendResources:[],
      commendUsers:[],
      commendBids:[]
    }
  },
  watch:{},
  created() {
    this.get_commend_resources()
    this.get_commend_users()
    this.get_account()
  },
  methods: {
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 获取窗口滚动条高度
      if ((scrollTop >= document.body.clientHeight - 1600) && (this.start === false)) {
        this.start = true
        this.$refs.example3.start()
        this.$refs.example2.start()
        this.$refs.example1.start()
      }
    },
    get_account(){
      var vm = this
      this.axios({
        method: 'post',
        url: 'http://192.168.8.197:8000/api/v1/queryAccount',
        data: {"Id": this.$cookies.get("id")}
      }).then(resp => {
        var account = resp.data.data[0]
        this.$cookies.set("score",account.Score)
      }).catch(error=>{
        console.log(error)
      })
      this.axios({
        method:'get',
        url:'http://192.168.8.103:8222/expertservice/expert/getExpert/'+ this.$cookies.get("id"),
      }).then(res=>{
        this.$cookies.set("avatar",res.data.data.expert.avatar);
      })
    },
    get_commend_resources(){
      var vm=this
      this.axios({
        method:"get",
        url:"http://192.168.8.103:8222/rs/recommendation/getExpertRS/" +this.$cookies.get("id")+ "/2"
      }).then(resp=>{
        var resource=resp.data.data.items
        for(var i=0;i<8;i++){
          var RId=resource[i].id
          var RName=resource[i].title
          var RAbstract=resource[i].keywords
          var RTime=resource[i].pubDate
          if(resource[i].cover!=="string"){
            var RCover=resource[i].avatar
          }else {var RCover=""}
          var RAuthorName=resource[i].author
          var RPrice=resource[i].price
          vm.commendResources.push({"Type":"Paper","RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice})
        }
      })
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
          var UPhone=users[i].phone
          var UEmail=users[i].email
          vm.commendUsers.push({"UType":"Expert","UId":UId,"UName":UName,"UIntro":UIntro,"UCover":UCover,"UInstitution":UInstitution,"UPhone":UPhone,"UEmail":UEmail})
        }
      })
    },
    getDetail(Type,Id){
      this.$router.push({
        name:'ResourceDetail',
        params:{
          Type:Type,
          Id:Id
        }
      })
    },
    getUserDetail(Type,Id){
      this.$router.push({
        name:'UserDetail',
        params:{
          Type:Type,
          Id:Id
        }
      })
    },

  },
  mounted () {
       window.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<style scoped>

</style>
