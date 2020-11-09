<template>
  <div class="sticky-header">
    <div class="auto-container clearfix">
      <!--Logo-->
      <div class="logo pull-left">
        <a href="index.html" class="img-responsive"><img src="static/images/logo-small.png" alt="" title=""></a>
      </div>

      <div class="right-col pull-right">
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
              <li><router-link to="/Home">主页</router-link></li>

              <li class="dropdown"><a>系统信息</a>
                <ul>
                  <li><a href="team.html">知识图谱</a></li>
                  <li><a href="http://192.168.8.197:8080">区块链</a></li>

                </ul>
              </li>
              <li class="dropdown" v-if="this.$cookies.get('id')"><a >个人</a>
                <ul>
                  <li><router-link to="/PersonDetail">个人信息管理</router-link></li>

                </ul>
              </li>
              <li class="dropdown" ><a href="#">资源</a>
                <ul>
                  <li><router-link to="/Commend">为您推荐</router-link></li>
                  <li><router-link to="/UploadResource" v-if="this.$cookies.get('id')">上传资源</router-link></li>

                </ul>
              </li>
              <li><router-link to="/Contact">联系我们</router-link></li>
            </ul>
          </div>
        </nav>
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
