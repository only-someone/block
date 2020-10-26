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
    <search-bids></search-bids>
    <SearchResources></SearchResources>
    <commend-user></commend-user>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "SearchResult"
}
</script>

<style scoped>

</style>
