<template>
  <el-card>
    <el-form ref="form" :inline="true" :model="form" :rules="rules" @keyup.enter.native="onSubmit('form')">
      <el-form-item prop="type">
        <el-select v-model="form.type" placeholder="请选择要查询的资源类型" @change="handleTypeChange">
           <el-option v-for="item in options"
                      :label="item.label"
                      :value="item.value"
                      :key="item.value">
           </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="filterType">
        <el-select v-model="form.filterType" v-if="form.type" placeholder="请选择筛选指标" style="width: 150px">
          <el-option
            v-for="item in selectOptions"
            :label="item.label"
            :value="item.value"
            :key="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="min" style="width: 13%">
        <el-input v-model="form.min" type="number" placeholder="最小值"></el-input>
      </el-form-item> -
      <el-form-item prop="max" style="width: 13%; margin-left: 7px">
        <el-input v-model="form.max" type="number" placeholder="最大值"></el-input>
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
  name: "AdvancedSearch",
  data() {
    return {
      form: {
        type: '',
        filterType: '',
        max: '',
        min: 0
      },
      rules: {
        type: {required: true, message: '请选择要查询的资源类型'},
        filterType: {required: true, message: '请选择筛选指标'},
        max: [{required: true, message: '请输入最大值'}, {validator: this.validateMax}],
        min: [{required: true, message: '请输入最小值'}, {validator: this.validateMin}]
      },
      posSelectOptions: [],
      selectOptions: [],
      options: []
    }
  },
  created() {
    for (let i in this.GLOBAL.nodesType) {
      let node = this.GLOBAL.nodesType[i]
      this.posSelectOptions.push({label: node.label + '数量', value: node.value})
      if (i === 'solu' || i === 'case') continue
      this.options.push({label: node.label, value: node.value})
    }
    // console.log(this.options)
  },
  methods: {
    // 根据资源类别对应不同的查询方式
    handleTypeChange() {
      // console.log(this.form.type)
      switch (this.form.type) {
        case "expert": {
          this.selectOptions = this.posSelectOptions.slice(5, 8)
          break
        }
        case "institution": {
          this.selectOptions = this.posSelectOptions.slice(2, 5)
          this.selectOptions.push(this.posSelectOptions[0])
          break
        }
        case "requirement": {
          this.selectOptions = this.posSelectOptions.slice(3, 4)
          break
        }
        default: { // 论文、专利、技术成果
          this.selectOptions = this.posSelectOptions.slice(0, 1)
        }
      }
      // console.log(this.selectOptions)
      this.form.filterType = ''
    },
    validateMax(rule, value, callback) {
      if (this.form.min > value) {
        callback(new Error('最大值不能小于最小值'))
      } else {
        callback()
      }
    },
    validateMin(rule, value, callback) {
      // if (this.form.max < value) {
      //   return callback(new Error('最小值不能大于最大值'))
      // }
      if (value < 0) {
        callback(new Error('最小值不能小于0'))
      } else {
        callback()
      }
    },
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          // console.log(this.form)
          let url = this.form.type + '/filter/' + this.form.filterType + '/' + this.form.min + '/' + this.form.max
          this.$emit('search', url)
        } else {
          console.log('error submit!!');
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
