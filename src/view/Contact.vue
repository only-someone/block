<template>
<div>
  <header class="main-header header-style-two">
    <HomeNav></HomeNav>
    <MyNav></MyNav>
  </header>
  <div class="page-wrapper">

    <!-- Main Header / Header Style Two-->

    <!--End Main Header -->

    <!--Page Title-->
    <section class="page-title" style="background-image: url(static/images/background/3.jpg);padding: 40px">
      <div class="auto-container">
        <h1>About us</h1>
        <div class="text">Highlight your writing with beautiful, expressive featured images.</div>
      </div>
    </section>
    <!--End Page Title-->

    <!--We Are Section-->
    <section class="we-are-section">
      <div class="auto-container">
        <div class="row clearfix">

          <!--Content Column-->
          <div class="content-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <h2>Who We Are</h2>
              <div class="bold-text">Lorem Ipsum proin gravida <span>nibh vel velit</span> aucsollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. </div>
              <div class="text">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue.  Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. </div>
              <div class="signature"><img src="static/images/resource/signature.jpg" alt="" /></div>
            </div>
          </div>

          <!--Image Column-->
          <div class="image-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="image">
                <img src="static/images/resource/about.jpg" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!--End We Are Section-->


  </div>
  <div class="page-wrapper">
    <!--Page Title-->
    <section class="page-title" style="background-image: url(static/images/background/4.jpg);padding: 40px">
      <div class="auto-container">
        <h1>Our Team</h1>
        <div class="text">Highlight your writing with beautiful, expressive featured images.</div>
      </div>
    </section>
    <!--End Page Title-->

    <!--Team Page Section-->
    <section class="team-page-section">
      <div class="auto-container">
        <div class="row clearfix">

          <!--Team Block-->
          <div class="team-block col-lg-3 col-md-6 col-sm-12" v-for="index in 4">
            <div class="inner-box">
              <div class="image">
                <a href="#"><img src="static/images/resource/team-3.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="#">Dark Smith</a></h3>
                <div class="designation">designer</div>
                <div class="text">Lorem Ipsum proin gravda nibh vel velit auctor aliquenean sollicitud</div>
                <ul class="social-icon-one">
                  <li class="facebook"><a href="#"><span class="fa fa-facebook"></span></a></li>
                  <li class="pinterest"><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
                  <li class="twitter"><a href="#"><span class="fa fa-twitter"></span></a></li>
                </ul>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
    <!--End Team Page Section-->

    <Footer></Footer>


  </div>
</div>

</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>
