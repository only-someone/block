<template>



  <!--该页面没用-->





  <div class="wrapper">
    <div class="section-authentication">
      <div class="container-fluid">
        <div class="card mb-0">
          <div class="card-body p-0">
            <div class="row no-gutters">
              <div class="col-12 col-lg-6 col-xl-5 d-flex align-items-stretch">
                <div class="card mb-0 shadow-none bg-transparent w-100 rounded-0">
                  <div class="card-body p-md-5">
                    <img src="../../../static/images/logo-2.png" width="180" alt="" />
                  </div>
                  <div class="card-body" style="margin-left: 20px;margin-top:-20px">
                    <h5 class="card-title">Where does it come from?</h5>
                    <p class="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
                  </div>
                  <img src="../../../static/assets/images/login-images/auth-img-register2.png" class="card-img-top" alt="" />
                </div>

              </div>
              <div class="col-12 col-lg-6 col-xl-7 d-flex align-items-stretch">
                <div class="card mb-0 shadow-none bg-transparent w-100 login-card rounded-0">
                  <div class="card-body p-md-5">
                  <el-form ref="form" :model="form.City" label-width="100px"  style="margin-left: -50px" >
                    <el-form-item label="名称">
                      <el-input type="text" v-model="form.City.CityName" ></el-input>
                    </el-form-item>
                    <el-form-item label="行政级别">
                      <el-input type="text" v-model="form.City.CityLevel" ></el-input>
                    </el-form-item>
                    <el-form-item label="招标网站">
                      <el-input type="text" v-model="form.City.NetworkLink" ></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" >
                      <el-input type="text" v-model="form.City.EMail" ></el-input>
                    </el-form-item>
                    <el-form-item label="电话" >
                      <el-input type="text" v-model="form.City.Telephone" ></el-input>
                    </el-form-item>
                    <el-form-item label="传真">
                      <el-input type="text" v-model="form.City.Fax" ></el-input>
                    </el-form-item>
                    <el-form-item label="头像">
                      <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                    </el-form-item>

                      <button type="button" class="btn btn-primary btn-block mt-4" style="width:100px;float: right "><i class='bx bxs-lock mr-1'></i>注册</button>

                   </el-form>

                  </div>
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
  name: "RegisterCity",
  data() {
    return {
      form: {
        City:{
          CityName:'',
          CityLevel:'',
          NetworkLink:"",
          EMail:"",
          Telephone:'',
          Fax:'',
        }
      },
      imageUrl: '',
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },

    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
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

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
