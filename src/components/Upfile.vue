<template>
  <div>
    <div>
      <el-radio-group v-model="radio1" size="large" inline="true" style="margin-left:100px">
        <el-radio-button label="论文"></el-radio-button>
        <el-radio-button label="专利"></el-radio-button>
        <el-radio-button label="技术成果"></el-radio-button>
        <el-radio-button label="软件著作"></el-radio-button>
        <el-radio-button label="项目需求"></el-radio-button>
        <el-radio-button label="解决方案"></el-radio-button>
        <el-radio-button label="案例"></el-radio-button>
      </el-radio-group>
    </div>
    <UpPaper></UpPaper>

  </div>
</template>

<script>
export default {
  name: "Upfile",
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      radio1: '论文',

    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }

}
</script>

<style scoped>

</style>
