<template>
  <div class="page-wrapper">

    <!-- Preloader -->
    <!--<div class="preloader"></div>-->

    <!-- Main Header / Header Style Two-->
    <header class="main-header header-style-two">
      <HomeNav></HomeNav>
      <MyNav></MyNav>
    </header>
    <!--End Main Header -->

    <!--Breadcrumb Title-->
    <section class="breadcrumb-section">
      <div class="auto-container">
        <ul>
          <li><a href="#">个人</a></li>
          <li>上传资源</li>
        </ul>
      </div>
    </section>
    <!--End Breadcrumb Title-->

    <!--Sidebar Page Container-->
    <div class="sidebar-page-container">
      <div class="auto-container">
        <div class="row clearfix">

          <!--Content Side-->
          <MyUpfile></MyUpfile>

          <!--Sidebar Side-->
          <div class="sidebar-side col-lg-4 col-md-12 col-sm-12">
            <aside class="sidebar">

              <!-- Popular Posts -->
              <div class="sidebar-widget popular-posts">
                <div class="sidebar-title">
                  <h3>latest posts</h3>
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

              <!-- Category Widget -->
              <div class="sidebar-widget category-widget">
                <div class="sidebar-title">
                  <h3>Category</h3>
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

              <!-- Instagram Widget -->
              <div class="sidebar-widget instagram-widget">
                <div class="sidebar-title">
                  <h3>Category</h3>
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
          </div>

        </div>
      </div>
    </div>

    <!--Main Footer-->


  </div>
</template>

<script>
export default {
  name: "UploadResource"
}
</script>

<style scoped>

</style>
