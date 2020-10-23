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
          <li><a href="#">市场</a></li>
          <li>推荐</li>
        </ul>
      </div>
    </section>
    <!--End Breadcrumb Title-->

    <!--Sidebar Page Container-->
    
    <CommendUser></CommendUser>
    <CommendResource></CommendResource>
    <CommendBid></CommendBid>
   	<!--Main Footer-->
    <footer class="main-footer">
    
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
			
			<div class="copyright">&copy; Copyright 2018 , <a href="http://www.bootstrapmb.com">Dizital</a></div>
			
		</div>
	</footer>

  </div>
</template>

<script>
export default {
  name: "UploadResource"
}
</script>

<style scoped>

</style>
