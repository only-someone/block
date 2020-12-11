<template>
  <div>
    <header class="main-header header-style-two">
      <HomeNav></HomeNav>
      <MyNav></MyNav>
    </header>
    <section class="page-title" style="background-image: url(/static/images/background/7.jpg);padding: 60px">
      <div class="auto-container">
        <h1>用户详情</h1>
        <div class="text">Users</div>
      </div>
    </section>
    <ExpertDetail v-if="this.$route.params.Type==='Expert'"></ExpertDetail>
    <InstitutionDetail v-if="this.$route.params.Type==='Institution'"></InstitutionDetail>

  </div>
</template>

<script>
import ExpertDetail from "../components/UserDetail/ExpertDetail";
export default {
  name: "UserDetail",
  components: {ExpertDetail},
}
</script>

<style scoped>

</style>
