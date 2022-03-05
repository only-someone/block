<template>
  <el-card class="box-card">
    <el-form ref="form" :inline="true" :model="form" :rules="rules" @keyup.enter.native="onSubmit('form')">
      <el-form-item prop="type">
        <el-select v-model="form.type" placeholder="请选择要查询的资源类型" @change="handleTypeChange">
          <el-option label="专家" value="expert"></el-option>
          <el-option label="单位" value="institution"></el-option>
          <el-option label="项目需求" value="requirement"></el-option>
          <el-option label="解决方案" value="solution"></el-option>
          <el-option label="案例" value="case"></el-option>
          <el-option label="技术成果" value="achievement"></el-option>
          <el-option label="论文" value="paper"></el-option>
          <el-option label="专利" value="patent"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="searchType">
        <el-select v-model="form.searchType" v-if="form.type" placeholder="请选择查询方式" style="width: 150px">
          <el-option
            v-for="item in selectOptions"
            :label="item.label"
            :value="item.value"
            :key="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="searchWord">
        <el-input v-model="form.searchWord" placeholder="请输入关键词"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')" size="medium" icon="el-icon-search">查询</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: "BasicSearch",
  data() {
    return {
      form: {
        type: '',
        searchType: '',
        searchWord: '',
      },
      rules: {
        type: {required: true, message: '请选择要查询的资源类型'},
        searchType: {required: true, message: '请选择查询方式'},
        searchWord: {required: true, message: '请输入关键词'}
      },
      selectOptions: [],
      options: [
        {value: 'name', label: '名称'},
        {value: 'id', label: 'id'},
        {value: 'fuzzyName', label: '模糊名称'},
        {value: 'expertId', label: '专家id'},
        {value: 'expertName', label: '专家名称'},
        {value: 'institutionId', label: '单位id'},
        {value: 'institutionName', label: '单位名称'},
        {value: 'requirementId', label: '项目需求id'},
        {value: 'requirementName', label: '项目需求名称'},
        {value: 'solutionId', label: '解决方案id'},
        {value: 'solutionName', label: '解决方案名称'}],
    }
  },
  methods: {
    // 根据资源类别对应不同的查询方式
    handleTypeChange() {
      // console.log(this.form.type)
      switch (this.form.type) {
        case "expert": {
          this.selectOptions = this.options.slice(0, 3).concat(this.options.slice(5, 7))
          break
        }
        case "case": {
          this.selectOptions = this.options
          break
        }
        case "solution": {
          this.selectOptions = this.options.slice(0, 9)
          break
        }
        case "requirement": {
          this.selectOptions = this.options.slice(0, 3).concat(this.options.slice(5, 7))
            .concat(this.options.slice(9, 11))
          break
        }
        default: {
          this.selectOptions = this.options.slice(0, 5)
        }
      }
      // console.log(this.selectOptions)
      this.form.searchType = ''
    },
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          // console.log(this.form)
          let url = this.form.type + '/' + this.form.searchType + '/' + this.form.searchWord
          this.$emit('search', url)
        } else {
          // console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(form) {
      this.$refs[form].resetFields();
    }

  }
}
</script>

<style scoped>

</style>
