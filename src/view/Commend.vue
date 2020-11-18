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
    <section class="page-title" style="background-image: url(static/images/background/4.jpg); padding:40px" >
      <div class="auto-container">
        <h1>推荐用户</h1>
        <div class="text">系统为您精心推荐的用户</div>
      </div>
    </section>
    <CommendUser></CommendUser>
    <section class="page-title" style="background-image: url(static/images/background/4.jpg); padding:40px" >
      <div class="auto-container">
        <h1>推荐资源</h1>
        <div class="text">系统为您精心推荐的资源</div>
      </div>
    </section>
    <CommendResource></CommendResource>

    <section class="page-title" style="background-image: url(static/images/background/4.jpg); padding:40px"  v-if="this.$cookies.get('type')!=='Normal'">
      <div class="auto-container" >
        <h1>推荐招标信息</h1>
        <div class="text">提供更好的招标信息</div>
      </div>
    </section>
    <CommendBid v-if="this.$cookies.get('type')!=='Normal'"></CommendBid>
   	<!--Main Footer-->
    <Footer></Footer>

  </div>
</template>

<script>
export default {
  name: "UploadResource"
}
</script>

<style scoped>

</style>
