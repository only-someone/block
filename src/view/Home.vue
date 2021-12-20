<template>
  <div class="page-wrapper">

    <!-- 头-->
    <header class="main-header">
      <HomeNav></HomeNav>
      <MyNav></MyNav>
    </header>


    <!--大字报-->
    <section class="banner-section" style="background-image: url(static/images/background/8.jpg)">
      <div class="auto-container">
        <h2>基于区块链和知识图谱的 <br> 数据交易平台</h2>
        <!--Search Form-->
        <div class="search-form" v-if="this.$cookies.get('id')">
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
              <input type="text" name="firstname" value="" placeholder="点击右侧或上侧搜索按钮进入搜索页面"  >
              <router-link to="/SearchResult"><button type="submit" class="theme-btn dripicons-search"></button></router-link>
            </div>

          </form>
        </div>
        <!--End Search Form-->
        <div class="title" >寻找感兴趣的 <span>用户,数据资源,和项目</span> </div>

        <div><h3 align="center" style="margin-top: 30px"><router-link to="Commend" style="color: #ffffff">进入推荐页面</router-link></h3></div>

        <!--图片要截一下-->
      </div>
    </section>


    <!--推荐资源n-->
    <section class="featured-section">
      <div class="auto-container">
        <!--Sec Title-->
        <div class="sec-title centered">
          <h2>可能感兴趣的资源</h2>
          <!--不细分专家和城市，类型中标注-->
        </div>
        <div class="row clearfix">
          <!--Featured Block-->
          <div class="featured-block col-lg-3 col-md-6 col-sm-12" v-for="(resource,index ) in this.commendPaper" :key=index  @click="getDetail(resource.Type,resource.RId)" >
            <div class="inner-box wow fadeInLeft" :animation-delay='resource'
                 style="visibility: visible; animation-duration:1500ms; animation-name: fadeInLeft; user-select: auto; ">
              <div class="image">
                <img :src="'static/images/resource/featured-1.jpg'" alt="" />
              </div>
              <div class="lower-content">
                <h3><a @click="getDetail(resource.Type,resource.RId)">{{ resource.RName }}</a></h3>
                <div class="text" style="max-height: 200px;overflow: hidden;text-overflow: ellipsis;">{{ resource.RAbstract }}</div>
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
          <div class="featured-block col-lg-3 col-md-6 col-sm-12" v-for="(resource,index ) in this.commendPatent" :key=index  @click="getDetail(resource.Type,resource.RId)" >
            <div class="inner-box wow fadeInLeft" :animation-delay='resource'
                 style="visibility: visible; animation-duration:1500ms; animation-name: fadeInLeft; user-select: auto; ">
              <div class="image">
                <img :src="'/static/images/resource/featured-2.jpg'" alt="" />
              </div>
              <div class="lower-content">
                <h3><a @click="getDetail(resource.Type,resource.RId)">{{ resource.RName }}</a></h3>
                <div class="text" style="max-height: 200px;overflow: hidden;text-overflow: ellipsis;">{{ resource.RAbstract }}</div>
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
          <div class="featured-block col-lg-3 col-md-6 col-sm-12" v-for="(resource,index ) in this.commendAchievement" :key=index  @click="getDetail(resource.Type,resource.RId)" >
            <div class="inner-box wow fadeInLeft" :animation-delay='resource'
                 style="visibility: visible; animation-duration:1500ms; animation-name: fadeInLeft; user-select: auto; ">
              <div class="image">
                <img :src="'static/images/resource/featured-3.jpg'" alt="" />
              </div>
              <div class="lower-content">
                <h3><a @click="getDetail(resource.Type,resource.RId)">{{ resource.RName }}</a></h3>
                <div class="text" style="max-height: 200px;overflow: hidden;text-overflow: ellipsis;">{{ resource.RAbstract }}</div>
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
          <div class="featured-block col-lg-3 col-md-6 col-sm-12" v-for="(resource,index ) in this.commendCase" :key=index  @click="getDetail(resource.Type,resource.RId)" >
            <div class="inner-box wow fadeInLeft" :animation-delay='resource'
                 style="visibility: visible; animation-duration:1500ms; animation-name: fadeInLeft; user-select: auto; ">
              <div class="image">
                <img :src="'static/images/resource/featured-4.jpg'" alt="" />
              </div>
              <div class="lower-content">
                <h3><a @click="getDetail(resource.Type,resource.RId)">{{ resource.RName }}</a></h3>
                <div class="text" style="max-height: 200px;overflow: hidden;text-overflow: ellipsis;">{{ resource.RAbstract }}</div>
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
          <div class="featured-block col-lg-3 col-md-6 col-sm-12" v-for="(resource,index ) in this.commendSoftware" :key=index  @click="getDetail(resource.Type,resource.RId)" >
            <div class="inner-box wow fadeInLeft" :animation-delay='resource'
                 style="visibility: visible; animation-duration:1500ms; animation-name: fadeInLeft; user-select: auto; ">
              <div class="image">
                <img :src="'static/images/resource/featured-5.jpg'" alt="" />
              </div>
              <div class="lower-content">
                <h3><a @click="getDetail(resource.Type,resource.RId)">{{ resource.RName }}</a></h3>
                <div class="text" style="max-height: 200px;overflow: hidden;text-overflow: ellipsis;">{{ resource.RAbstract }}</div>
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

    <!--推荐用户-->
    <section class="testimonial-section">
      <div class="auto-container">
        <!--Sec Title-->
        <div class="sec-title centered">
          <h2>可能感兴趣的用户</h2>
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

    <!--<section class="category-section" >
    <div class="auto-container">
      &lt;!&ndash;Sec Title&ndash;&gt;
      <div class="sec-title centered">
        <h2>城市</h2>
      </div>
      <div class="row clearfix">
        &lt;!&ndash;Category Block&ndash;&gt;
        <div class="category-block">
          <div class="inner-box">
            <div class="image">
              <img src="static/images/resource/category-1.jpg" alt="" />
              <div class="overlay-box">
                <div class="overlay-inner">
                  <div >
                    <h3><a href="city_info.html">北京</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="category-block">
          <div class="inner-box">
            <div class="image">
              <img src="static/images/resource/category-2.jpg" alt="" />
              <div class="overlay-box">
                <div class="overlay-inner">
                  <div >
                    <h3><a href="city_info.html">上海</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="category-block">
          <div class="inner-box">
            <div class="image">
              <img src="static/images/resource/category-3.jpg" alt="" />
              <div class="overlay-box">
                <div class="overlay-inner">
                  <div >
                    <h3><a href="city_info.html">广州</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="category-block">
          <div class="inner-box">
            <div class="image">
              <img src="static/images/resource/category-4.jpg" alt="" />
              <div class="overlay-box">
                <div class="overlay-inner">
                  <div >
                    <h3><a href="city_info.html">深圳</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="category-block">
          <div class="inner-box">
            <div class="image">
              <img src="static/images/resource/category-5.jpg" alt="" />
              <div class="overlay-box">
                <div class="overlay-inner">
                  <div >
                    <h3><a href="city_info.html">杭州</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="category-block">
          <div class="inner-box">
            <div class="image">
              <img src="static/images/resource/category-10.jpg" alt="" />
              <div class="overlay-box">
                <div class="overlay-inner">
                  <div >
                    <h3><a href="city_info.html">苏州</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="category-block">
          <div class="inner-box">
            <div class="image">
              <img src="static/images/resource/category-6.jpg" alt="" />
              <div class="overlay-box">
                <div class="overlay-inner">
                  <div >
                    <h3><a href="city_info.html">武汉</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="category-block">
          <div class="inner-box">
            <div class="image">
              <img src="static/images/resource/category-7.jpg" alt="" />
              <div class="overlay-box">
                <div class="overlay-inner">
                  <div >
                    <h3><a href="city_info.html">成都</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="category-block">
          <div class="inner-box">
            <div class="image">
              <img src="static/images/resource/category-8.jpg" alt="" />
              <div class="overlay-box">
                <div class="overlay-inner">
                  <div >
                    <h3><a href="city_info.html">重庆</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="category-block">
          <div class="inner-box">
            <div class="image">
              <img src="static/images/resource/category-9.jpg" alt="" />
              <div class="overlay-box">
                <div class="overlay-inner">
                  <div >
                    <h3><a href="city_info.html">天津</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>-->


    <section class="news-section">
      <div class="auto-container">
        <div class="sec-title centered">
          <h2>项目需求招标</h2>
        </div>
        <div class="row clearfix">

          <!--News Block-->
          <div class="news-block col-lg-4 col-md-6 col-sm-12" v-for="(resource,index ) in this.commendBids" :key=index  @click="getDetail(resource.Type,resource.RId)" >
            <div class="inner-box">
              <img :src="resource.RCover||'static/images/resource/news-1.jpg'" alt="" />
              <div class="post-date">{{ resource.announceTime||"暂无" }} 至  {{resource.openTime||"暂无"}}</div>
              <h3><a  @click="getDetail(resource.Type,resource.RId)" >{{ resource.RName }}</a></h3>
              <div class="text">{{ resource.RAbstract}}</div>
              <div class="author">
                <div class="author-image"><img src="static/images/resource/author-2.jpg" alt="" /></div>
                by {{ resource.RAuthorName }}
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
          <h2><a  :href=this.GLOBAL.Blockchain_Info_url style="color: #FFFFFF" >区块链</a><br></h2>
        </div>
      </div>
      <!--Lower Section-->
      <div class="lower-section">
        <div class="auto-container">

          <!--Fact Counter-->
          <div class="fact-counter">
            <div class="row clearfix">

              <!--Column-->

              <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
                <div class="inner">
                  <div >
                    <div class="count-outer count-box">
                      <countTo ref='example1' class='example1' :startVal=0 :endVal=this.block_node :duration='3000'  suffix="":autoplay=false></countTo>
                    </div>
                    <h4 class="counter-title">节点数</h4>
                  </div>
                </div>
              </div>


              <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
                <div class="inner">
                  <div >
                    <div class="count-outer count-box">
                      <countTo ref='example2' class='example2' :startVal=0 :endVal=this.block_height :duration='3000' pause=true :autoplay=false> </countTo>
                    </div>
                    <h4 class="counter-title">区块高度</h4>
                  </div>
                </div>
              </div>

              <!--Column-->
              <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
                <div class="inner">
                  <div >
                    <div class="count-outer count-box">
                      <countTo ref='example3' class='example3' :startVal=0 :endVal=this.deal_count :duration='5000'   :autoplay=false></countTo>
                    </div>
                    <h4 class="counter-title">交易数</h4>
                  </div>
                </div>
              </div>

              <div class="column counter-column col-lg-3 col-md-6 col-sm-12">
                <div class="inner">
                  <div >
                    <div class="count-outer count-box">
                      <countTo ref='example4' class='example4' :startVal=0 :endVal=this.chaincode_count :duration='3000' pause=true :autoplay=false> </countTo>
                    </div>
                    <h4 class="counter-title">链码个数</h4>
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
        <h2>知识图谱</h2>
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
      block_height:5,
      block_node:1,
      chaincode_count:1,
      deal_count:5,
      isstart:false,
      fadetime:["0ms","300ms","600ms","900ms","0ms","300ms","600ms","900ms"],
      commendPaper:[],
      commendAchievement:[],
      commendPatent:[],
      commendCase:[],
      commendSoftware:[],
      commendUsers:[],
      commendExpert:[],
      commendInstitution:[],
      commendBids:[],
    }
  },
  watch:{},
  created() {
    this.get_commend_papers()
    this.get_commend_patents()
    this.get_commend_achievements()
    this.get_commend_cases()
    this.get_commend_softwares()
    this.get_commend_users()
    this.get_commend_bids()
    //this.get_account()
  },
  methods: {
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 获取窗口滚动条高度
      if ((scrollTop >= document.body.clientHeight - 1600) && (this.isstart === false)) {
        this.isstart = true
        this.$refs.example1.start()
        this.$refs.example2.start()
        this.$refs.example3.start()
        this.$refs.example4.start()
      }
    },
    // get_account(){//好像不需要
    //   var vm = this
    //   this.axios({
    //     method: 'post',
    //     url: this.GLOBAL.Blockchain_Base_Url+'/api/v1/queryAccount',
    //     data: {"Id":this.$cookies.get("type")+"_"+ this.$cookies.get("id")}
    //   }).then(resp => {
    //     var account = resp.data.data[0]
    //     this.$cookies.set("score",account.Score)
    //   }).catch(error=>{
    //     console.log(error)
    //   })
    //   if(this.$cookies.get("type")==="Expert") {
    //     this.axios({
    //       method: 'get',
    //       url: this.GLOBAL.Service_Base_Url + '/expertservice/expert/getExpert/' + this.$cookies.get("id").split("_").slice(-1),
    //     }).then(res => {
    //       this.$cookies.set("avatar", res.data.data.expert.avatar);
    //     })
    //   }
    //   else{
    //     this.axios({
    //       method: 'get',
    //       url: this.GLOBAL.Service_Base_Url + '/institutionservice/institution/getInstitution/' + this.$cookies.get("id").split("_").slice(-1),
    //     }).then(res => {
    //       this.$cookies.set("avatar", res.data.data.expert.avatar);
    //     })
    //   }
    // },
    get_commend_papers(){
      var vm=this
      this.axios({
        method:"get",
        //推荐专家
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/7"
      }).then(resp=>{
        var resource=resp.data.data.items
        for(var i=0;i<2;i++){
          var RId=resource[i].id
          var RName=resource[i].title
          var RAbstract=resource[i].summary
          var RTime=resource[i].pubDate
          if(resource[i].cover!=="string"){
            var RCover=resource[i].cover
          }else {var RCover=""}
          var RAuthorName=resource[i].author
          var RPrice=resource[i].price
          vm.commendPaper.push({"Type":"Paper","RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice})
        }
      })
    },
    get_commend_users(){
      var vm=this
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/1"
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
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/2"
      }).then(resp=>{
        var users=resp.data.data.items
        for(var i in users){
          var UId=users[i].id
          var UName=users[i].name
          var UIntro=users[i].orgaddress
          if(users[i].avatar!=="string"){
            var UCover=users[i].avatar||"static/images/resource/news-13.jpg"
          }else {var UCover="static/images/resource/news-3.jpg"}
          var UInstitution=users[i].domain
          var UPhone=users[i].phone
          var UEmail=users[i].businessscope
          vm.commendUsers.push({"UType":"Institution","UId":UId,"UName":UName,"UIntro":UIntro,"UCover":UCover,"UInstitution":UInstitution,"UPhone":UPhone,"UEmail":UEmail})
        }
      })
    },
    get_commend_patents(){
      var vm=this
      this.axios({
        method:"get",
        //推荐专家
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/8"
      }).then(resp=>{
        var resource=resp.data.data.items
        for(var i=0;i<vm.commendPaper.length<=2;i++){
          var RId=resource[i].id
          var RName=resource[i].title
          var RAbstract=resource[i].summary
          var RTime=resource[i].gmtCreate
          if(resource[i].cover!=="string"){
            var RCover=resource[i].cover
          }else {var RCover=""}
          var RAuthorName=resource[i].inventor
          var RPrice=resource[i].price
          vm.commendPaper.push({"Type":"Patent","RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice})
        }
      })
    },
    get_commend_achievements(){
      var vm=this
      this.axios({
        method:"get",
        //推荐专家
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/6"
      }).then(resp=>{
        var resource=resp.data.data.items
        for(var i=0;i<2;i++){
          var RId=resource[i].id
          var RName=resource[i].title
          var RAbstract=resource[i].summary
          var RTime=resource[i].gmtCreate
          if(resource[i].cover!=="string"){
            var RCover=resource[i].cover
          }else {var RCover=""}
          var RAuthorName=resource[i].author
          var RPrice=resource[i].price
          vm.commendPaper.push({"Type":"Achievement","RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice})
        }
      })
    },
    get_commend_cases(){
      var vm=this
      this.axios({
        method:"get",
        //推荐专家
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/5"
      }).then(resp=>{
        var resource=resp.data.data.items
        for(var i=0;i<2;i++){
          var RId=resource[i].id
          var RName=resource[i].title
          var RAbstract=resource[i].introduction
          var RTime=resource[i].gmtCreate
          if(resource[i].cover!=="string"){
            var RCover=resource[i].cover
          }else {var RCover=""}
          var RAuthorName=resource[i].staffInstitution
          var RPrice=resource[i].price
          vm.commendPaper.push({"Type":"Case","RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice})
        }
      })
    },
    get_commend_softwares(){},
    get_commend_bids(){
      var vm=this
      this.axios({
        method:"get",
        //推荐专家
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/3"
      }).then(resp=>{
        var resource=resp.data.data.items
        for(var i=0;i<9;i++){
          var RId=resource[i].id
          var RName=resource[i].title
          var RAbstract=resource[i].contentDescription
          var RTime=resource[i].gmtCreate
          if(resource[i].cover!=="string"){
            var RCover=resource[i].cover
          }else {var RCover=""}
          var RAuthorName=resource[i].purchasePerson
          var RPrice=resource[i].price
          var announceTime=resource[i].announceTime
          var opentime=resource[i].openTime
          vm.commendBids.push({"Type":"Requirement","RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover,"RPrice":RPrice,"announceTime":announceTime,"opentime":opentime})
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
    },//资源详细
    getUserDetail(Type,Id){
      this.$router.push({
        name:'UserDetail',
        params:{
          Type:Type,
          Id:Id
        }
      })
    },

    get_blockchain_info(){
      var vm=this
      this.$cookies.set("account_id_token","5feceb66ffc8")
      this.axios({
        method:"get",
        //推荐专家
        url:this.GLOBAL.Blockchain_Info_url+"/api/status/482a650efc8b59b5be2e8518bb6774965ac8d299a523063addd86dcf43985b26"
        //可能后面需要变换
      }).then(resp=>{
        //{"chaincodeCount":"1","txCount":"5","latestBlock":"5","peerCount":"1"}
        this.block_node=resp.peerCount
        this.chaincode_count=resp.chaincodeCount
        this.block_height=resp.latestBlock
        this.deal_count=resp.txCount
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
