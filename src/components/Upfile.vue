<template>
  <div>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 90%">
        <el-tab-pane label="论文" name="Paper">
            <span> <UpPaper></UpPaper> </span>
        </el-tab-pane>
        <el-tab-pane label="软件著作" name="Software">
          <span> <UpPaper></UpPaper> </span>
        </el-tab-pane>
        <el-tab-pane label="专利" name="Patent">
          <span> <UpPatent></UpPatent> </span>
        </el-tab-pane>
        <el-tab-pane label="技术成果" name="Tech">
          <span> <UpPaper></UpPaper> </span>
        </el-tab-pane>
        <el-tab-pane label="解决方案" name="Relution">
          <span> <UpPaper></UpPaper> </span>
        </el-tab-pane>
        <el-tab-pane label="项目需求" name="Demand">
          <span> <UpPaper></UpPaper> </span>
        </el-tab-pane>
        <el-tab-pane label="案例" name="Case">
          <span> <UpPaper></UpPaper> </span>
        </el-tab-pane>

      </el-tabs>
    </div>


  </div>
</template>

<script>
export default {
  name: "Upfile",
  data() {
    return {
      activeName: 'Paper',

    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }

}
</script>

<style scoped>

</style>
