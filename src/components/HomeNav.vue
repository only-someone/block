<template>
  <div class="header-upper">
    <div class="auto-container">
      <div class="clearfix">

        <div class="pull-left logo-box">
          <div class="logo"><router-link to="Home"><img src="static/images/logo.png" alt="" title=""></router-link></div>
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
                <li><router-link to="Home">主页</router-link></li>

                <li class="dropdown"><a>系统信息</a>
                  <ul>
                    <li><a href="team.html">知识图谱</a></li>
                    <li><a href="all_resources.html">区块链</a></li>

                  </ul>
                </li>
                <li class="dropdown"><a >个人</a>
                  <ul>
                    <li><router-link to="PersonDetail">个人信息管理</router-link></li>

                  </ul>
                </li>
                <li class="dropdown"><a href="#">资源</a>
                  <ul>
                    <li><router-link to="Commend">为您推荐</router-link></li>
                    <li><router-link to="UploadResource">上传资源</router-link></li>

                  </ul>
                </li>
                <li><router-link to="Contact">联系我们</router-link></li>
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
              <a  class="cart-btn dripicons-shopping-bag"><router-link to="Commend"><span class="total-number"></span></router-link></a>
            </div>

            <div class="button-box">
              <a  class="theme-btn btn-style-one"><router-link to="Login" style="color: #FFFFFF">Sign in/up</router-link></a>
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
