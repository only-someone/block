<template>
  <div class="sticky-header">
    <div class="auto-container clearfix">
      <!--Logo-->
      <div class="logo pull-left">
        <a href="index.html" class="img-responsive"><img src="static/images/logo-small.png" alt="" title=""></a>
      </div>
      <div class="right-col pull-right">
        <!-- Main Menu -->
        <nav class="main-menu navbar-expand-md">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent1">
            <ul class="navigation clearfix">
              <li class="current dropdown"><router-link to="Home">主页</router-link></li>

              <li class="dropdown"><a href="#">系统信息</a>
                <ul>
                  <li><a href="team.html">区块链</a></li>
                  <li><a href="all_resources.html">知识图谱</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#">个人</a>
                <ul>
                  <li><router-link to="PersonDetail">详情管理</router-link></li>
                  <li><router-link to="UploadResource">上传资源</router-link></li>

                </ul>
              </li>
              <li class="dropdown"><a href="#">所有资源</a>
                <ul>
                  <li><a href="recommend.html">推荐页面（或者搜索结果，专家，单位，资源，招标）</a></li>
                  <li><a href="resource_detail.html">资源详情</a></li>
                  <li><a href="bid_detail.html">项目需求，案例详情</a></li>
                </ul>
              </li>
              <li><a href="contact.html">联系我们</a></li>
            </ul>
          </div>
        </nav><!-- Main Menu End-->
      </div>
      <!--Right Col-->


    </div>
  </div>

</template>

<script>
export default {
  name: "MyNav"
}
</script>

<style scoped>

</style>
