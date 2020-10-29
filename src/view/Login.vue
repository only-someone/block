<template>
<div style="background-image: url('static/images/bg8.jpg');background-repeat:no-repeat ;background-size:100% 100%">
  <div  style="padding-top: 5%;padding-bottom: 15%">

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
                    <p>Log in to your account using email & password</p>
                    <div class="form-group mt-4">
                      <label>Email Address</label>
                      <input type="text" class="form-control" placeholder="Enter your email address"/>
                    </div>
                    <div class="form-group">
                      <label>Enter Password</label>
                      <input type="password" class="form-control" placeholder="Enter your password"/>
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
                    <button  class="btn btn-primary btn-block mt-3"><router-link to="Home" style="color: #fff3cd"><i class='bx bxs-lock mr-1'></i>Login</router-link></button>
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
  mounted() {
    document.querySelector('.img__btn').addEventListener('click', function() {
      document.querySelector('.content').classList.toggle('s--signup')
    })
  }
}
</script>

<style scoped>

</style>
