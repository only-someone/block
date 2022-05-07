<template>
  <div>
    <el-form ref="form" :inline="true" :model="form" @keyup.enter.native="onSubmit('form')" :rules="rules">
      <el-form-item prop="expertId" required>
        <span slot="label">
          <span class="label-font">实体编号</span>
        </span>
        <el-input v-model="form.expertId" placeholder="请输入实体编号"></el-input>
      </el-form-item>
      <el-form-item prop="relType" required>
        <span slot="label">
          <span class="label-font">关系类型</span>
        </span>
        <el-select v-model="form.relType" placeholder="请选择关系类型">
          <el-option v-for="item in relationType"
                     :label="item"
                     :value="item"
                     :key="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')" size="medium" icon="el-icon-search">候选实体列表</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CompletionSearch",
  data() {
    return {
      form: {
        expertId: '',
        relType: ''
      },
      relationType: ['就职', '提出'],
      rules: {
        expertId: {required: true, message: '请输入实体编号'},
        relType: {required: true, message: '请选择关系类型'},
      },
    }
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          // console.log(this.form)
          if (!this.form.expertId.startsWith('expe_')) {
            this.$message({message: '请输入正确的实体编号', type: 'warning'})
            return
          }
          this.axios({
            method: 'post',
            url: this.GLOBAL.KG_url + '/kg/expert/completion',
            data: {'kg_id': this.form.expertId, 'rel_type': this.form.relType}
          }).then(resp => {
            // console.log(resp)
            if (resp.status !== 200) {
              this.showGraph = false
              this.$message.error('获取列表失败')
            } else {
              if (resp.data === '' || resp.data['institutions'].length === 0) {
                this.$message({message: '候选列表为空', type: 'warning'})
              }
              this.$emit('search', resp.data)
            }
          })
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
.label-font {
  font-family: '微软雅黑 Light',serif;
  font-weight: bold
}
</style>
