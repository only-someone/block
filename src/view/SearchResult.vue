<template>
  <div>
    <header class="main-header header-style-two">
      <HomeNav></HomeNav>
      <MyNav></MyNav>
    </header>


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


    <section class="page-title" style="background-image: url(static/images/background/7.jpg);padding: 40px">
      <div class="auto-container">
        <h1>检索到的数据资源</h1>
        <div class="text">Resources</div>
      </div>
    </section>
    <section class="shop-features-section">
      <div class="auto-container">
        <div class="row clearfix">

          <!--Feature Block-->
          <div class="feature-block-three col-lg-2 col-md-2 col-sm-2">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon dripicons-basket"></span>
              </div>
              <h3><a href="#">论文</a></h3>
              <div class="text">Paper.</div>
            </div>
          </div>

          <!--Feature Block-->
          <div class="feature-block-three col-lg-2 col-md-2 col-sm-2">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon dripicons-tags"></span>
              </div>
              <h3><a href="#">专利</a></h3>
              <div class="text">Patent</div>
            </div>
          </div>

          <div class="feature-block-three col-lg-2 col-md-2 col-sm-2">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon dripicons-home"></span>
              </div>
              <h3><a href="#">技术成果</a></h3>
              <div class="text">Achievement</div>
            </div>
          </div>
          <div class="feature-block-three col-lg-2 col-md-2 col-sm-2">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon dripicons-tags"></span>
              </div>
              <h3><a href="#">软件著作</a></h3>
              <div class="text">Software</div>
            </div>
          </div>
          <div class="feature-block-three col-lg-2 col-md-2 col-sm-2">
            <div class="inner-box">
              <div class="icon-box">
                <span class="icon dripicons-basket"></span>
              </div>
              <h3><a href="#">案例</a></h3>
              <div class="text">Case</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <SearchResources></SearchResources>

    <section class="page-title" style="background-image: url(static/images/background/5.jpg);padding:40px">
      <div class="auto-container">
        <h1>检索到的招标信息</h1>
        <div class="text">Search Bids</div>
      </div>
    </section>
    <search-bids></search-bids>


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
