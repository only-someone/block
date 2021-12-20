<template>
  <div>
    <div>
      <el-tabs v-model="activeName"  style="width: 90%">
        <el-tab-pane label="论文" name="Paper" >
            <span> <UpPaper></UpPaper> </span>
        </el-tab-pane>
<!--       没有软著 <el-tab-pane label="软件著作" name="Software" v-if="this.$cookies.get('type')!=='Normal'">-->
<!--          <span> <UpPaper></UpPaper> </span>-->
<!--        </el-tab-pane>-->
        <el-tab-pane label="专利" name="Patent" v-if="this.$cookies.get('type')!=='Normal'">
          <span> <UpPatent></UpPatent> </span>
        </el-tab-pane>
        <el-tab-pane label="技术成果" name="Tech" v-if="this.$cookies.get('type')!=='Normal'">
          <span> <UpAchievement></UpAchievement> </span>
        </el-tab-pane>
        <el-tab-pane label="项目需求" name="Demand" v-if="this.$cookies.get('type')==='Institution'">
          <span> <UpRequirement></UpRequirement> </span>
        </el-tab-pane>
        <el-tab-pane label="案例" name="Case" v-if="this.$cookies.get('type')!=='Normal'">
          <span> <UpCase></UpCase> </span>
        </el-tab-pane>
        <el-tab-pane label="解决方案通过需求详情界面上传" name="Relution" v-if="this.$cookies.get('type')!=='Normal'">
          <!--          <span> <UpSolution></UpSolution> </span>-->
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
  }

}
</script>

<style scoped>

</style>
