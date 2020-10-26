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
    <section class="banner-section" style="background-image: url(static/images/background/1.jpg)">
      <div class="auto-container">
        <h2>基于区块链和知识图谱的 <br> 数据交易平台</h2>
        <!--Search Form-->
        <div class="search-form">
          <form method="post" action="blog.html">

            <div class="form-group clearfix">
              <select class="custom-select-box" >
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
        <div class="title" >寻找感兴趣的 <span><a href="all_users.html">用户</a>,<a href="all_resources.html">数据资源</a>,和<a href="all_bids.html">项目</a></span> </div>

        <div><h3 align="center"><a href="recommend.html">进入推荐页面</a></h3></div>
        <!--图片要截一下-->
      </div>
    </section>
    <!--End Banner Section-->

    <!--Featured Section-->
    <section class="featured-section">
      <div class="auto-container">
        <!--Sec Title-->
        <div class="sec-title centered">
          <h2>Interested Resources（八个资源）</h2>
          <!--不细分专家和城市，类型中标注-->
        </div>
        <div class="row clearfix">

          <!--Featured Block-->
          <div class="featured-block col-lg-3 col-md-6 col-sm-12" v-for=" index in Array(8)" :key=index>
            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="resource_detail.html"><img src="static/images/resource/featured-1.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="resource_detail.html">资源标题</a></h3>
                <div class="text">资源简介</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="author">
                      <div class="author-image"><img src="static/images/resource/author-1.jpg" alt=""/></div>
                      by 作者
                    </div>
                  </div>
                  <div class="pull-right">
                    <div class="price">积分</div>
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
    <section class="testimonial-section">

	</section>
    <!--End Testimonial Section-->

    <!--Category Section-->
  <section class="testimonial-section">
		<div class="auto-container">
			<!--Sec Title-->
			<div class="sec-title centered">
				<h2>Interesd Users（9个人或者单位）</h2>
			</div>

      <el-carousel height="400px" type="card">
        <el-carousel-item v-for="item in 9" :key="item" style="margin:0;text-align:center;">
          <!-- <h3 class="small">{{ item }}</h3> -->

						<div class="image" style="user-select: auto;" >
							<a href="#" style="user-select: auto;"><img src="static/images/resource/author-3.jpg" alt="" style="user-select: auto;width:100px;height:100px;"></a>
						</div>
						<div class="text" style="user-select: auto;">专家简介</div>
						    <h3 style="user-select: auto;">{{item}}</h3>
						<div class="designation" style="user-select: auto;">联系方式</div>


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
      <div class="title-box" style="background-image: url(static/images/background/1.jpg)">
        <div class="auto-container">
          <h2><a  href="blockchain.html" style="color: #FFFFFF" >Blockchain</a><br></h2>
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
    <!--End Counter Section

    Main Footer-->
    <footer class="main-footer alternate">
      <div class="sec-title centered">
        <h2><a href="index-2.html">Knowledge Graph</a></h2>
      </div>
      <div class="auto-container">

        <!--Widgets Section-->
        <div class="widgets-section">
          <div class="row clearfix">

            <!--big column-->
            <div class="big-column col-lg-5 col-md-12 col-sm-12">
              <div class="row clearfix">

                <!--Footer Column / Logo Widget-->
                <div class="footer-column col-lg-7 col-md-7 col-sm-12">
                  <div class="footer-widget logo-widget">
                    <div class="logo">
                      <a href="index.html"><img src="static/images/footer-logo.png" alt="" /></a>
                    </div>
                    <div class="text">Lorem Ipsum proin gravida nibh vel velit aucsollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</div>
                    <ul class="social-icon-one">
                      <li class="facebook"><a href="#"><span class="fa fa-facebook"></span></a></li>
                      <li class="pinterest"><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
                      <li class="twitter"><a href="#"><span class="fa fa-twitter"></span></a></li>
                    </ul>
                  </div>
                </div>

                <!--Footer Column / Links Widget-->
                <div class="footer-column col-lg-5 col-md-5 col-sm-12">
                  <div class="footer-widget links-widget">
                    <h2>Company</h2>
                    <ul class="list">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Our Team</a></li>
                      <li><a href="#">Testimonials</a></li>
                      <li><a href="#">Brand</a></li>
                      <li><a href="#">Ecosystem</a></li>
                      <li><a href="#">Sitemap</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <!--big column-->
            <div class="big-column col-lg-7 col-md-12 col-sm-12">
              <div class="row clearfix">

                <!--Footer Column / Links Widget-->
                <div class="footer-column col-lg-4 col-md-6 col-sm-12">
                  <div class="footer-widget links-widget">
                    <h2>Categories</h2>
                    <ul class="list">
                      <li><a href="#">Graphics (25)</a></li>
                      <li><a href="#">Backgrounds (12)</a></li>
                      <li><a href="#">Fonts (8)</a></li>
                      <li><a href="#">Music (3)</a></li>
                      <li><a href="#">Photography (3)</a></li>
                      <li><a href="#">Themes (3)</a></li>
                    </ul>
                  </div>
                </div>

                <!--Footer Column / Links Widget-->
                <div class="footer-column col-lg-4 col-md-6 col-sm-12">
                  <div class="footer-widget links-widget">
                    <h2>Useful Links</h2>
                    <ul class="list">
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Terms & Conditions</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Refund Policy</a></li>
                      <li><a href="#">Affiliate</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>

                <!--Footer Column / Map Widget-->
                <div class="footer-column col-lg-4 col-md-6 col-sm-12">
                  <div class="footer-widget map-widget">
                    <h2>Where we are</h2>
                    <div class="image">
                      <img src="static/images/resource/map.png" alt="" />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div class="copyright">&copy; Copyright 2020 , <a href="http://www.bootstrapmb.com">智慧城市小组</a></div>

      </div>
    </footer>

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
      block_mermory:20,
      block_height:20,
      block_node:20,
      start:false,
    }
  },
  watch:{},
  created() {
  },
  mounted () {

       window.addEventListener('scroll', this.handleScroll)

  },
  methods: {
    handleScroll(){
      var scrollTop =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 获取窗口滚动条高度

      if((scrollTop>=document.body.clientHeight-1600) && (this.start===false)){
        this.start=true
        this.$refs.example3.start()
        this.$refs.example2.start()
        this.$refs.example1.start()
      }

   },
    submit(){

    }


  },

}
</script>

<style scoped>

</style>
