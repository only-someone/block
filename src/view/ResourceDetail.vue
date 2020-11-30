<template>
  <div>
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
      <PaperDetail  v-if="type==='Paper'"></PaperDetail>
      <PatentDetail  v-if="type==='Patent'"></PatentDetail>
      <AchievementDetail  v-if="type==='Achievement'" ></AchievementDetail>
    </div>
    <div> <Footer ></Footer></div>
  </div>
</template>

<script>
export default {
  name: "ResourceDetail",
  data(){
    return{
      type:this.$route.path.split("/")[2]
    }
  },
  created() {
    console.log(this.type)
  }
}
</script>

<style scoped>

</style>
