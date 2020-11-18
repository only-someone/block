<template>
  <div>
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
          <li>搜索结果</li>
        </ul>
      </div>
    </section>
    <section class="page-title" style="background-image: url(static/images/background/5.jpg);padding:40px">
      <div class="auto-container">
        <h1>检索到的用户</h1>
        <div class="text">Search User</div>
      </div>
    </section>
    <commend-user></commend-user>
    <!--Page Title-->
    <section class="page-title" style="background-image: url(static/images/background/7.jpg);padding: 40px">
      <div class="auto-container">
        <h1>检索到的数据资源</h1>
        <div class="text">Resources</div>
      </div>
    </section>
    <!--End Page Title-->
    <!--Shop Features Section-->
    <section class="shop-features-section">
      <div class="auto-container">
        <div class="row clearfix">

          <!--Feature Block-->
          <div class="feature-block-three col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon dripicons-basket"></span>
              </div>
              <h3><a href="#">Free Shipping</a></h3>
              <div class="text">Duis aute irure dolor in reprehend erit in voluptate velit esse cillu.</div>
            </div>
          </div>

          <!--Feature Block-->
          <div class="feature-block-three col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon dripicons-tags"></span>
              </div>
              <h3><a href="#">Sale 15% Off</a></h3>
              <div class="text">Duis aute irure dolor in reprehend erit in voluptate velit esse cillu.</div>
            </div>
          </div>

          <!--Feature Block-->
          <div class="feature-block-three col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon dripicons-home"></span>
              </div>
              <h3><a href="#">New Arriaval</a></h3>
              <div class="text">Duis aute irure dolor in reprehend erit in voluptate velit esse cillu.</div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!--End Shop Features Section-->
    <SearchResources></SearchResources>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "SearchResult"
}
</script>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  width: 100px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
