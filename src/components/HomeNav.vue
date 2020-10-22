<template>
  <div class="header-upper">
    <div class="auto-container">
      <div class="clearfix">

        <div class="pull-left logo-box">
          <div class="logo"><a href="index.html"><img src="static/images/logo.png" alt="" title=""></a></div>
        </div>

        <div class="nav-outer pull-right clearfix">

          <!-- Main Menu -->
          <nav class="main-menu navbar-expand-md">
            <div class="navbar-header">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>

            <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
              <ul class="navigation clearfix">
                <li><a href="index.html">主页</a></li>

                <li class="dropdown"><a href="#">系统信息</a>
                  <ul>
                    <li><a href="team.html">知识图谱</a></li>
                    <li><a href="all_resources.html">区块链</a></li>

                  </ul>
                </li>
                <li class="dropdown"><a href="#">个人信息</a>
                  <ul>
                    <li><a href="person_detail.html">个人信息详情</a></li>
                    <li><a href="have_buy_resources.html">已购买资源</a></li>
                    <li><a href="upload_resources.html">上传资源</a></li>
                    <li><a href="enterprise_bid.html">企业用户招标详情</a></li>

                  </ul>
                </li>
                <li class="dropdown"><a href="#">所有资源</a>
                  <ul>
                    <li><a href="recommend.html">推荐页面（或者搜索结果，专家，单位，资源，招标）</a></li>
                    <li><a href="all_resources.html">所有资源</a></li>
                    <li><a href="all_users.html">所有用户</a></li>
                    <li><a href="all_bids.html">所有项目需求，案例详情</a></li>

                  </ul>
                </li>
                <li><a href="team.html">联系我们</a></li>
              </ul>
            </div>

          </nav>

          <!-- Main Menu End-->

          <!--Button Box-->
          <div class="outer-box clearfix">
            <!--Option Box-->
            <div class="option-box">
              <!--Search Box-->
              <div class="search-box-outer">
                <div class="dropdown">
                  <button class="search-box-btn dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="dripicons-search"></span></button>
                  <ul class="dropdown-menu pull-right search-panel" aria-labelledby="dropdownMenu3">
                    <li class="panel-outer">
                      <div class="form-container">
                        <form method="post" action="blog.html">
                          <div class="form-group">
                            <input type="search" name="field-name" value="" placeholder="在这搜索" required>
                            <button type="submit" class="search-btn"><span class="fa fa-search"></span></button>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="recommend.html" class="cart-btn dripicons-shopping-bag"><span class="total-number"></span></a>
            </div>

            <div class="button-box">
              <a href="login.html" class="theme-btn btn-style-one">Sign in/up</a>
            </div>

          </div>
          <!--Button Box-->

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNav"
}
</script>

<style scoped>

</style>
