<template>
  <div class="wrapper">
    <div class="section-authentication" >
      <div class="container-fluid">
        <div class="card mb-0">
          <div class="card-body p-0">
            <div class="row no-gutters">
              <div class="col-12 col-lg-5 col-xl-4 d-flex align-items-stretch">

                <div class="card mb-0 shadow-none bg-transparent w-100 login-card rounded-0">
                  <div class="card-body p-md-5">
                    <img src="../../../static/images/logo-2.png" width="180" alt="" />
                    <h4 class="mt-5"><strong>填写注册信息</strong></h4>
                    <div class="form-group mt-4">
                      <label>用户名</label>
                      <input type="text" class="form-control" v-model="normal_user.username" placeholder="用于登录的用户名" />
                    </div>
<!--                    <div class="form-row">-->
<!--                      <div class="form-group col-md-12">-->
<!--                        <label>姓名</label>-->
<!--                        <input type="text" class="form-control" placeholder="真实姓名" />-->
<!--                      </div>-->
<!--                    </div>-->
                    <div class="form-group">
                      <label>密码</label>
                      <div class="input-group" id="show_hide_password">
                        <input class="form-control border-right-0" type="password" v-model="normal_user.password" placeholder="用于登录的密码">
                        <div class="input-group-append">	<a href="javaScript:;" class="input-group-text bg-transparent border-left-0"><i class='bx bx-hide'></i></a>
                        </div>
                      </div>
                    </div>
<!--                    <div class="form-group" >-->
<!--                      <label >头像</label>-->
<!--                      <el-upload size="large"-->
<!--                                 class="avatar-uploader"-->
<!--                                 :show-file-list="false"-->
<!--                                 action="http://192.168.8.103:8222/oss/avataross"-->
<!--                                 :on-success="handleAvatarSuccess"-->
<!--                                 :before-upload="beforeAvatarUpload">-->
<!--                        <img v-if="imageUrl" :src="imageUrl" class="avatar">-->
<!--                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
<!--                      </el-upload>-->
<!--                    </div>-->
                    <label style="color: orangered;text-align: center">温馨提示：普通用户只能浏览基本信息</label>
                    <div style="margin-top: 100px">
                      <button type="button" class="btn btn-primary btn-block mt-4" @click="register_normal()" ><i class='bx bxs-lock mr-1'></i>注册</button>
                      <div class="text-center mt-4">
                        <p class="mb-0">已有账号? <router-link to="/Login" style="color:#0f86ff ">登录</router-link>
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-7 col-xl-8 d-flex align-items-stretch">
                <div class="card mb-0 shadow-none bg-transparent w-100 rounded-0">
                  <div class="card-body p-md-5">
                    <h5 class="card-title">Where does it come from?</h5>
                    <p class="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
                  </div>
                  <img src="../../../static/assets/images/login-images/auth-img-register2.png" class="card-img-top" alt="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterBasic",
  data(){
    return {
      imageUrl:"",
      normal_user:{
        username:"",
        password:"",
        type:"1",//好像只能是1
        userid:"",//成为专家后通过该字段找专家
      }
    }
  },
  methods:{
    register_normal(){  //重复命名不能在区块链注册
      var vm =this
      this.axios({
        method:"post",
        url:vm.GLOBAL.Service_Base_Url+"/ucenter/member/register",
        data:vm.normal_user
      }).then(res=>{
        if(res.data.success!==false) {
          console.log(res.data)
          vm.axios({
            method: 'post',
            url: this.GLOBAL.Blockchain_Base_Url + '/api/v1/createUser',
            data: {
              "Id": res.data.data.member.id,
              "Score": "50"
            }
          }).then(
            alert("注册成功,区块链初始积分为50分")
          ).catch(error => {
            console.log(error)
            alert("区块链注册失败")
          })
          vm.$router.push("/Login")
        }
        else{
          alert(res.data.message)
        }
      })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res)
      this.form.Expert.avatar=res.data.url
      console.log( this.form.Expert.avatar)
    },
    beforeAvatarUpload(file) {

      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 10MB!');
      }
      return  isLt2M;
    }
  }
}
</script>

<style scoped>

</style>
