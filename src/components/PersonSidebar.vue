<template>
    <aside class="sidebar">

    <!-- 个人信息 -->
<!--      <div class="inner-box" style="margin-bottom:50px">-->
<!--        <div class="image" >-->

<!--          <a href="#"> <img src="static/images/resource/team-1.jpg" height="30px" width="100px"   style="float:left" alt="" /></a>-->
<!--        </div>-->
<!--        <div class="lower-content"  style="margin-left:150px" >-->
<!--          <h3><a href="#">姓名</a></h3>-->
<!--          <div class="designation">单位</div>-->
<!--          <div class="text">简介</div>-->
<!--        </div>-->
<!--      </div>-->

      <el-row>
        <el-col :span="14">
          <div class="main_style_8" >
            <div id="hipster">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3" >
                <div class="circle"  align="center">
                  <div class="main-c" style="float: right;margin-left: 500px">
                    <div class="quarter quarter1"></div>
                    <div class="quarter quarter2"></div>
                    <div class="quarter quarter3"></div>
                    <div class="quarter quarter4"></div>
                    <div class="cutout" style="background-image:  url(static/images/men2.jpg)"></div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="10">
          <div style="margin-top: 30px">
            <h5 style="color: #000000">姓名</h5>
            <h5 style="color: #000000">单位</h5>
          </div>
        </el-col>
      </el-row>



      <div class="back" >
        <div class="row bgg">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4" align="center">
            <div class="count-outer count-box">
              <h5><countTo :startVal=0 :endVal=3 :duration='3000'></countTo></h5>
            </div>
            <p>上传资源</p>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4" align="center">
            <h5><countTo :startVal=0 :endVal=254 :duration='3000'></countTo></h5>
            <p>购买资源</p>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4" align="center">
            <h5><countTo :startVal=0 :endVal=61 :duration='3000'></countTo></h5>
            <p>参与招投标</p>
          </div>
        </div>
      </div>


    <!-- Category Widget -->
    <div class="sidebar-widget category-widget"  style="margin-top: 50px">
    <div class="sidebar-title">
        <h3>上传的资源</h3>
    </div>
    <div class="widget-content">
        <ul>
        <li><a href="#">Busines</a></li>
        <li><a href="#">Marketing</a></li>
        <li><a href="#">Creative</a></li>
        <li><a href="#">Trending</a></li>
        <li><a href="#">Creative</a></li>
        <li><a href="#">Trending</a></li>
        </ul>
    </div>
    </div>

     <!-- Popular Posts -->
    <div class="sidebar-widget popular-posts">
    <div class="sidebar-title">
        <h3>购买的资源</h3>
    </div>
    <div class="widget-content">

        <article class="post">
        <figure class="post-thumb"><a href="bid_detail.html"><img src="static/images/resource/post-thumb-1.jpg" alt=""></a></figure>
        <div class="post-info">18.09.2018</div>
        <div class="text"><a href="bid_detail.html">Design solutions for any media.</a></div>
        </article>

        <article class="post">
        <figure class="post-thumb"><a href="bid_detail.html"><img src="static/images/resource/post-thumb-2.jpg" alt=""></a></figure>
        <div class="post-info">18.09.2018</div>
        <div class="text"><a href="bid_detail.html">Design solutions for any media.</a></div>
        </article>

        <article class="post">
        <figure class="post-thumb"><a href="bid_detail.html"><img src="static/images/resource/post-thumb-3.jpg" alt=""></a></figure>
        <div class="post-info">18.09.2018</div>
        <div class="text"><a href="bid_detail.html">Design solutions for any media.</a></div>
        </article>

    </div>
    </div>

    <!-- Instagram Widget -->
    <div class="sidebar-widget instagram-widget">
    <div class="sidebar-title">
        <h3>参与招标项目</h3>
    </div>
    <div class="widget-content">
        <div class="images-outer clearfix">
        <!--Image Box-->
        <figure class="image-box"><a href="static/images/gallery/1.jpg" class="instagram-image" data-caption="" data-fancybox="images" title="Image Title Here" data-fancybox-group="footer-gallery"><span class="overlay-box flaticon-plus"></span></a>
            <img src="static/images/gallery/instagram-1.jpg" alt=""></figure>
        <!--Image Box-->
        <figure class="image-box"><a href="static/images/gallery/2.jpg" class="instagram-image" data-caption="" data-fancybox="images" title="Image Title Here" data-fancybox-group="footer-gallery"><span class="overlay-box flaticon-plus"></span></a>
            <img src="static/images/gallery/instagram-2.jpg" alt=""></figure>
        <!--Image Box-->
        <figure class="image-box"><a href="static/images/gallery/3.jpg" class="instagram-image" data-caption="" data-fancybox="images" title="Image Title Here" data-fancybox-group="footer-gallery"><span class="overlay-box flaticon-plus"></span></a>
            <img src="static/images/gallery/instagram-3.jpg" alt=""></figure>
        <!--Image Box-->
        <figure class="image-box"><a href="static/images/gallery/4.jpg" class="instagram-image" data-caption="" data-fancybox="images" title="Image Title Here" data-fancybox-group="footer-gallery"><span class="overlay-box flaticon-plus"></span></a>
            <img src="static/images/gallery/instagram-4.jpg" alt=""></figure>
        <!--Image Box-->
        <figure class="image-box"><a href="static/images/gallery/1.jpg" class="instagram-image" data-caption="" data-fancybox="images" title="Image Title Here" data-fancybox-group="footer-gallery"><span class="overlay-box flaticon-plus"></span></a>
            <img src="static/images/gallery/instagram-5.jpg" alt=""></figure>
        <!--Image Box-->
        <figure class="image-box"><a href="static/images/gallery/2.jpg" class="instagram-image" data-caption="" data-fancybox="images" title="Image Title Here" data-fancybox-group="footer-gallery"><span class="overlay-box flaticon-plus"></span></a>
            <img src="static/images/gallery/instagram-6.jpg" alt=""></figure>
        </div>
    </div>
    </div>

    </aside>
</template>

<script>

import countTo from 'vue-count-to'
export default {
  name: "PersonSidebar",
  components: {
    countTo
  },
  data() {
    return {

    }
  },
  created() {
    var vm = this;
    // this.axios({
    //   method:'get',
    //   url:"https://www.easy-mock.com/mock/5f912b94e4d147581af7409b/vuedemo/domains",//跨域

    // }).then(function (resp){
    //   vm.data
    //   vm.domains=resp.data.domains
    // })

  },
  methods: {
  },


}
</script>

<style scoped>

</style>
