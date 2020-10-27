<template>
  <div class="wrapper">
    <div class="section-authentication">
      <div class="container-fluid">
        <div class="card mb-0">
          <div class="card-body p-0">
            <div class="row no-gutters">
              <div class="col-12 col-lg-5 col-xl-4 d-flex align-items-stretch">

                <div class="card mb-0 shadow-none bg-transparent w-100 login-card rounded-0">
                  <div class="card-body p-md-5">
                    <img src="static/images/logo-2.png" width="180" alt="" />
                    <h4 class="mt-5"><strong>填写基本信息</strong></h4>
                    <div class="form-group mt-4">
                      <label>邮箱/用户名</label>
                      <input type="text" class="form-control" placeholder="example@user.com" />
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>First Name</label>
                        <input type="text" class="form-control" placeholder="Jhon" />
                      </div>
                      <div class="form-group col-md-6">
                        <label>Last Name</label>
                        <input type="text" class="form-control" placeholder="Deo" />
                      </div>
                    </div>
                    <div class="form-group">
                      <label>密码</label>
                      <div class="input-group" id="show_hide_password">
                        <input class="form-control border-right-0" type="password" value="12345678">
                        <div class="input-group-append">	<a href="javaScript:;" class="input-group-text bg-transparent border-left-0"><i class='bx bx-hide'></i></a>
                        </div>
                      </div>
                    </div>

                    <button type="button" class="btn btn-primary btn-block mt-4"><i class='bx bxs-lock mr-1'></i>选择用户类型</button>
                    <div class="text-center mt-4">
                      <p class="mb-0">已有账号? <router-link to="Login">登录</router-link>
                      </p>
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
                  <img src="static/assets/images/login-images/auth-img-register2.png" class="card-img-top" alt="" />
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
name: "RegisterBasic"
}
</script>

<style scoped>

</style>
