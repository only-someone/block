<template>
<div style="background-image: url('static/images/bg8.jpg');background-repeat:no-repeat ;background-size:100% 100%">
  <div  style="padding-top: 6%;padding-bottom: 15%">

    <div class="section-authentication"  style="margin-left:18%;width: 70%;height:100%;text-align: center">
      <div class="container-fluid">
        <div class="card mb-0">
          <div class="card-body p-0">
            <div class="row no-gutters">
              <div class="col-12 col-lg-5 col-xl-4 d-flex align-items-stretch">
                <div class="card mb-0 shadow-none bg-transparent w-100 login-card rounded-0">
                  <div class="card-body p-md-5">
                    <img src="static/images/logo-2.png" width="180" alt=""/>
                    <h4 class="mt-5"><strong>Welcome Back</strong></h4>
                    <p>Log in to your account using username & password</p>
                    <div class="form-group mt-4">
                      <label>Enter Username</label>
                      <input type="text" class="form-control" placeholder="Enter your Username" v-model="username"/>
                    </div>
                    <div class="form-group">
                      <label>Enter Password</label>
                      <input type="password" class="form-control" placeholder="Enter your password" v-model="password"/>
                    </div>
<!--                    <div class="form-row">-->
<!--                      <div class="form-group col">-->
<!--                        <div class="custom-control custom-switch">-->
<!--                          -->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div class="form-group col text-right">-->
<!--                        <a href="authentication-forgot-password.html"><i class='bx bxs-key mr-2'></i>Forget Password?</a>-->
<!--                      </div>-->
<!--                    </div>-->
                    <button  class="btn btn-primary btn-block mt-3" style="color: #fff3cd" @click="Login()"><i class='bx bxs-lock mr-1'></i>Login</button>
                    <div class="text-center mt-4">
                      <p class="mb-0">还没有账号? <router-link to="Register">立即注册</router-link></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-7 col-xl-8 d-flex align-items-stretch">
                <div class="card mb-0 shadow-none bg-transparent w-100 rounded-0">
                  <div class="card-body p-md-5">
                    <div class="text-center"><img src="static/assets/images/login-images/auth-img-7.png" class="img-fluid" alt=""/></div>
                    <h5 class="card-title">Why do we use it?</h5>
                    <p class="card-text">这里有你想要的资源</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer bg-transparent px-md-5">
            <div class="d-flex align-items-center justify-content-between flex-wrap">

              <p class="mb-0">关于我们
              </p>

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
  name: "Login",
  data(){
    return {
      username:"",
      password:""
    }
  },
  methods:{
    Login(){
      this.axios({
        method:"post",
        url:this.GLOBAL.Service_Base_Url+"/ucenter/member/login",
        data:{
          username:this.username,
          password:this.password
        },
      }).then(res=>{
        console.log(res.data.data)
        if(res.data.data.hasOwnProperty("token")) {
          console.log(res.data)
          this.$cookies.set("token", res.data.data.token)
          this.get_userinfo(res.data.data.token)
        }
        else alert("登陆失败")
      }).catch(error=>{
        alert("登陆失败"+error)
      })
      // console.log(this.password)
      // console.log(this.username)
      // this.$cookies.set("id","1328219403044622337")   //return this
      // this.$cookies.set("type","Expert")
      // this.$router.push({path:'/HOME'})
    },
    get_userinfo(token){
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/ucenter/member/getLoginInfo",
        headers:{token:token}
      }).then(res=>{
        var user=res.data.data.loginInfo
        this.$cookies.set("id",user.userId)   //return this
        if(user.type===1)
          this.$cookies.set("type","Normal")
        else if(user.type===2)
          this.$cookies.set("type","Expert")
        else if(user.type===3)
          this.$cookies.set("type","Institution")
        this.$router.push({path:'/HOME'})
      })
    }
  }
}
</script>

<style scoped>

</style>
