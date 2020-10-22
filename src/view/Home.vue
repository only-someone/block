<template>
  <div class="page-wrapper">

    <!-- Preloader -->
<!--    <div class="preloader"></div>-->

    <!-- Main Header-->
    <header class="main-header">

      <!--Header-Upper-->
      <HomeNav></HomeNav>
      <!--End Header Upper-->

      <!--Sticky Header-->
      <MyNav></MyNav>
      <!--End Sticky Header-->

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
              <button type="submit" class="theme-btn dripicons-search"></button>
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
          <div class="featured-block col-lg-3 col-md-6 col-sm-12">
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
          <!--用for循环-->
          <!--Featured Block-->
          <div class="featured-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="bid_detail.html"><img src="static/images/resource/featured-2.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="bid_detail.html">Graphics Generator</a></h3>
                <div class="text">Lorem Ipsum proin gravida nibh vel velit auctor sollicitud</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="author">
                      <div class="author-image"><img src="static/images/resource/author-2.jpg" alt=""/></div>
                      by Ronald Austin
                    </div>
                  </div>
                  <div class="pull-right">
                    <div class="price">$28.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Featured Block-->
          <div class="featured-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="bid_detail.html"><img src="static/images/resource/featured-3.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="bid_detail.html">Wordpress theme</a></h3>
                <div class="text">Lorem Ipsum proin gravida nibh vel velit auctor sollicitud</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="author">
                      <div class="author-image"><img src="static/images/resource/author-1.jpg" alt=""/></div>
                      by Alice Hunt
                    </div>
                  </div>
                  <div class="pull-right">
                    <div class="price">$24.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Featured Block-->
          <div class="featured-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="bid_detail.html"><img src="static/images/resource/featured-4.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="bid_detail.html">handdrawn  icons</a></h3>
                <div class="text">Lorem Ipsum proin gravida nibh vel velit auctor sollicitud</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="author">
                      <div class="author-image"><img src="static/images/resource/author-1.jpg" alt=""/></div>
                      by Alice Hunt
                    </div>
                  </div>
                  <div class="pull-right">
                    <div class="price">$15.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Featured Block-->
          <div class="featured-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="bid_detail.html"><img src="static/images/resource/featured-5.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="bid_detail.html">Graphics Generator</a></h3>
                <div class="text">Lorem Ipsum proin gravida nibh vel velit auctor sollicitud</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="author">
                      <div class="author-image"><img src="static/images/resource/author-2.jpg" alt=""/></div>
                      by Ronald Austin
                    </div>
                  </div>
                  <div class="pull-right">
                    <div class="price">$29.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Featured Block-->
          <div class="featured-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="bid_detail.html"><img src="static/images/resource/featured-6.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="bid_detail.html">Graphics Generator</a></h3>
                <div class="text">Lorem Ipsum proin gravida nibh vel velit auctor sollicitud</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="author">
                      <div class="author-image"><img src="static/images/resource/author-2.jpg" alt=""/></div>
                      by Ronald Austin
                    </div>
                  </div>
                  <div class="pull-right">
                    <div class="price">$19.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Featured Block-->
          <div class="featured-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="bid_detail.html"><img src="static/images/resource/featured-7.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="bid_detail.html">Wordpress theme</a></h3>
                <div class="text">Lorem Ipsum proin gravida nibh vel velit auctor sollicitud</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="author">
                      <div class="author-image"><img src="static/images/resource/author-1.jpg" alt=""/></div>
                      by Alice Hunt
                    </div>
                  </div>
                  <div class="pull-right">
                    <div class="price">$24.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Featured Block-->
          <div class="featured-block col-lg-3 col-md-6 col-sm-12">
            <div class="inner-box wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
              <div class="image">
                <a href="bid_detail.html"><img src="static/images/resource/featured-8.jpg" alt="" /></a>
              </div>
              <div class="lower-content">
                <h3><a href="bid_detail.html">Wordpress theme</a></h3>
                <div class="text">Lorem Ipsum proin gravida nibh vel velit auctor sollicitud</div>
                <div class="clearfix">
                  <div class="pull-left">
                    <div class="author">
                      <div class="author-image"><img src="static/images/resource/author-1.jpg" alt=""/></div>
                      by Alice Hunt
                    </div>
                  </div>
                  <div class="pull-right">
                    <div class="price">$39.00</div>
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
      <div class="auto-container">
        <!--Sec Title-->
        <div class="sec-title centered">
          <h2>Interesd Users（9个人或者单位）</h2>
        </div>
        <div class="three-item-carousel owl-carousel owl-theme">

          <!--Testimonial Block-->
          <div class="testimonial-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/author-3.jpg" alt="" />
              </div>
              <div class="text">“Needless to say we are extremely satisfied with Digital. I will recommend to my colleagues. I strongly recommend Digotal to anyone.”</div>
              <h3>Jessica Reyes</h3>
              <div class="designation">Designer@Google</div>
            </div>
          </div>

          <!--Testimonial Block-->
          <div class="testimonial-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/author-4.jpg" alt="" />
              </div>
              <div class="text">“I have gotten at least 50 times from Digital the value from Digital. We’ve seen amazing results already. Thank you so much for your help! ”</div>
              <h3>Madison Barnes</h3>
              <div class="designation">Designer@Google</div>
            </div>
          </div>

          <!--Testimonial Block-->
          <div class="testimonial-block">
            <div class="inner-box">
              <div class="image">
                <a href="person_detail.html"><img src="static/images/resource/author-5.jpg" alt="" /></a>
              </div>
              <div class="text">专家简介</div>
              <h3>专家名</h3>
              <div class="designation">联系方式</div>
            </div>
          </div>

          <!--Testimonial Block-->
          <div class="testimonial-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/author-3.jpg" alt="" />
              </div>
              <div class="text">“Needless to say we are extremely satisfied with Digital. I will recommend to my colleagues. I strongly recommend Digotal to anyone.”</div>
              <h3>Jessica Reyes</h3>
              <div class="designation">Designer@Google</div>
            </div>
          </div>

          <!--Testimonial Block-->
          <div class="testimonial-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/author-4.jpg" alt="" />
              </div>
              <div class="text">“I have gotten at least 50 times from Digital the value from Digital. We’ve seen amazing results already. Thank you so much for your help! ”</div>
              <h3>Madison Barnes</h3>
              <div class="designation">Designer@Google</div>
            </div>
          </div>

          <!--Testimonial Block-->
          <div class="testimonial-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/author-5.jpg" alt="" />
              </div>
              <div class="text">“Needless to say we are extremely satisfied with Digital. I will recommend to my colleagues. I strongly recommend Digotal to anyone.”</div>
              <h3>Russell Curtis</h3>
              <div class="designation">Designer@Google</div>
            </div>
          </div>

          <!--Testimonial Block-->
          <div class="testimonial-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/author-3.jpg" alt="" />
              </div>
              <div class="text">“Needless to say we are extremely satisfied with Digital. I will recommend to my colleagues. I strongly recommend Digotal to anyone.”</div>
              <h3>Jessica Reyes</h3>
              <div class="designation">Designer@Google</div>
            </div>
          </div>

          <!--Testimonial Block-->
          <div class="testimonial-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/author-4.jpg" alt="" />
              </div>
              <div class="text">“I have gotten at least 50 times from Digital the value from Digital. We’ve seen amazing results already. Thank you so much for your help! ”</div>
              <h3>Madison Barnes</h3>
              <div class="designation">Designer@Google</div>
            </div>
          </div>

          <!--Testimonial Block-->
          <div class="testimonial-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/author-5.jpg" alt="" />
              </div>
              <div class="text">“Needless to say we are extremely satisfied with Digital. I will recommend to my colleagues. I strongly recommend Digotal to anyone.”</div>
              <h3>Russell Curtis</h3>
              <div class="designation">Designer@Google</div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!--End Testimonial Section-->

    <!--Category Section-->
    <section class="category-section">
      <div class="auto-container">
        <!--Sec Title-->
        <div class="sec-title centered">
          <h2>城市</h2>
        </div>
        <div class="row clearfix">

          <!--Category Block-->
          <div class="category-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/category-1.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h3><a href="city_info.html">城市名</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Category Block-->
          <div class="category-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/category-2.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h3><a href="bid_detail.html">coding</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Category Block-->
          <div class="category-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/category-3.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h3><a href="bid_detail.html">courses</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Category Block-->
          <div class="category-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/category-4.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h3><a href="bid_detail.html">photography</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Category Block-->
          <div class="category-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/category-5.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h3><a href="bid_detail.html">mokeups</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Category Block-->
          <div class="category-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/category-6.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h3><a href="bid_detail.html">backgrounds</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Category Block-->
          <div class="category-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/category-7.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h3><a href="bid_detail.html">graphics</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Category Block-->
          <div class="category-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/category-8.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h3><a href="bid_detail.html">crafts</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Category Block-->
          <div class="category-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/category-9.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h3><a href="bid_detail.html">design</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Category Block-->
          <div class="category-block">
            <div class="inner-box">
              <div class="image">
                <img src="static/images/resource/category-10.jpg" alt="" />
                <div class="overlay-box">
                  <div class="overlay-inner">
                    <div class="content">
                      <h3><a href="bid_detail.html">fonts</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!--End Category Section-->

    <!--News Section-->
    <section class="news-section">
      <div class="auto-container">
        <div class="sec-title centered">
          <h2>项目需求招标</h2>
        </div>
        <div class="row clearfix">

          <!--News Block-->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
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

          <!--News Block-->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="post-date">18.09.2018</div>
              <h3><a href="bid_detail.html">Good design is obvious. Great design is transparent.</a></h3>
              <div class="text">Lorem Ipsum proin gravida nibh vel velit aucsollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.  Morbi accumsan ipsum velit.</div>
              <div class="author">
                <div class="author-image"><img src="static/images/resource/author-2.jpg" alt="" /></div>
                by Ronald Austin
              </div>
            </div>
          </div>

          <!--News Block-->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="post-date">18.09.2018</div>
              <h3><a href="bid_detail.html">This is how I feel when I am not making the internet.</a></h3>
              <div class="text">Lorem Ipsum proin gravida nibh vel velit aucsollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.  Morbi accumsan ipsum velit.</div>
              <div class="author">
                <div class="author-image"><img src="static/images/resource/author-2.jpg" alt="" /></div>
                by Ronald Austin
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
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
                  <div class="content">
                    <div class="count-outer count-box">
                      <span class="count-text" data-speed="4000" data-stop="3">3</span>
                    </div>
                    <h4 class="counter-title">节点数</h4>
                  </div>
                </div>
              </div>

              <!--Column-->
              <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                <div class="inner">
                  <div class="content">
                    <div class="count-outer count-box">
                      <span class="count-text" data-speed="2500" data-stop="26666">26666</span>
                    </div>
                    <h4 class="counter-title">区块高度</h4>
                  </div>
                </div>
              </div>

              <!--Column-->
              <div class="column counter-column col-lg-4 col-md-6 col-sm-12">
                <div class="inner">
                  <div class="content">
                    <div class="count-outer count-box">
                      <span class="count-text" data-speed="4000" data-stop="12">12G</span>
                      <span>G</span>
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

export default {
  name: "Home",

}
</script>

<style scoped>

</style>
