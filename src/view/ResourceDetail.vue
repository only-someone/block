<template>
  <div>
    <div>
      <header class="main-header header-style-two">
        <HomeNav></HomeNav>
        <MyNav></MyNav>
      </header>
      <section
        class="page-title"
        style="background-image: url(/static/images/background/7.jpg);padding: 60px"
      >
        <div class="auto-container">
          <h1>资源详情</h1>
          <div class="text">Resources</div>
        </div>
      </section>
      <PaperDetail v-if="type === 'Paper'"></PaperDetail>
      <PatentDetail v-if="type === 'Patent'"></PatentDetail>
      <AchievementDetail v-if="type === 'Achievement'"></AchievementDetail>
      <SolutionDetail v-if="type === 'Solution'"></SolutionDetail>
      <RequirementDetail v-if="type === 'Requirement'"></RequirementDetail>
      <CaseDetail v-if="type === 'Case'"></CaseDetail>
    </div>
    <div style="text-align: center;margin-bottom: 60px">
      <el-row
        style="text-align: center;"
        v-if="this.$cookies.get('type') !== 'Normal'"
      >
        <el-button type="primary" @click="dialogTableVisible = true"
          >点击查看该资源交易记录，以供溯源</el-button
        >
      </el-row>
    </div>
    <el-dialog title="交易记录" :visible.sync="dialogTableVisible">
      <DealRecord></DealRecord>
    </el-dialog>
    <div><Footer></Footer></div>
  </div>
</template>

<script>
export default {
  name: "ResourceDetail",
  data() {
    return {
      type: this.$route.path.split("/")[2],
      dialogTableVisible: false
    };
  },
  created() {
    console.log(this.type);
  }
};
</script>

<style scoped></style>
