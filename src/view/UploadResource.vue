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
    <div class="sidebar-page-container" style="margin-top: -50px">
      <div class="auto-container">
        <div class="row clearfix">

          <!--Content Side-->
          <el-col :span="16">
            <MyUpfile></MyUpfile>
          </el-col>

          <!--Sidebar Side-->
          <el-col :span="8">
              <PersonSidebar></PersonSidebar>
          </el-col>

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
