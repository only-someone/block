<template>
  <div style="background-image: url('static/images/bg8.jpg');background-repeat:no-repeat ;background-size:100% 100%">
    <div  style="margin-left: 12%;padding-top: 6%;width: 75%;height:100%;padding-top: 4%;padding-bottom: 15%">

      <el-tabs :tab-position="tabPosition" >
<!--        <el-tab-pane>-->
<!--          <span slot="label" style="color: #fff3cd;font-size: 18px"><i class="el-icon-user" ></i>注册普通用户</span>-->
<!--          <register-basic></register-basic>-->
<!--        </el-tab-pane>-->
        <el-tab-pane >
          <span slot="label" style="color: #fff3cd;font-size: 18px"><i class="el-icon-user" ></i>注册专家用户</span>
          <RegisterExpert></RegisterExpert>
        </el-tab-pane>
        <el-tab-pane >
          <span slot="label" style="color: #fff3cd;font-size: 18px"><i class="el-icon-school"></i>注册单位用户</span>
          <register-institution></register-institution>
        </el-tab-pane>
<!--        <el-tab-pane >-->
<!--          <span slot="label" style="color: #fff3cd"><i class="el-icon-office-building"></i>注册城市用户</span>-->
<!--          <RegisterCity></RegisterCity>-->
<!--        </el-tab-pane>-->
      </el-tabs>



    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data(){
    return {
      tabPosition: 'left'
    };
  },
  method:{
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped>

</style>
