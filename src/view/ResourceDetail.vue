<template>
  <div>
    <header class="main-header header-style-two">
      <HomeNav></HomeNav>
      <MyNav></MyNav>
    </header>
    <section class="page-title" style="background-image: url(/static/images/background/7.jpg);padding: 60px">
      <div class="auto-container">
        <h1>资源详情</h1>
        <div class="text">Resources</div>
      </div>
    </section>
    <PatentDetail  v-if="false"></PatentDetail>

    <PaperDetail ></PaperDetail>


  </div>
</template>

<script>
export default {
  name: "ResourceDetail",
}
</script>

<style scoped>

</style>
