<template>
  <div class="wrapper">
    <div class="section-authentication">
      <div class="container-fluid">
        <div class="card mb-0">
          <div class="card-body p-0">
            <div class="row no-gutters">
              <div class="col-12 col-lg-6 col-xl-5 d-flex align-items-stretch">

                <div class="card mb-0 shadow-none bg-transparent w-100 login-card rounded-0">
                  <div class="card-body p-md-5">
                    <img src="static/images/logo-2.png" width="180" alt="" />
                    <el-form ref="form" :model="form.Institution" label-width="50px"  style="margin-top: 20px">
                      <el-form-item label="名称">
                        <el-input type="text" v-model="form.Institution.InstitutionName" ></el-input>
                      </el-form-item>
                      <el-form-item label="简介">
                        <el-input type="textarea" v-model="form.Institution.InstitutionIntroduction" rows=5 ></el-input>
                      </el-form-item>
                      <el-form-item label="地址">
                        <el-input type="text" v-model="form.Institution.Address" ></el-input>
                      </el-form-item>
                      <el-form-item label="邮箱" >
                        <el-input type="text" v-model="form.Institution.Affiliation" ></el-input>
                      </el-form-item>
                      <el-form-item label="电话" >
                        <el-input type="text" v-model="form.Institution.Telephone" ></el-input>
                      </el-form-item>
                      <el-form-item label="传真">
                        <el-input type="text" v-model="form.Institution.Fax" ></el-input>
                      </el-form-item>
                      <el-form-item label="领域" >
                        <el-select v-model="form.Institution.Domain" placeholder="请选择" >
                          <el-option
                            v-for="domain in domains"
                            :key="domain.Id"
                            :label="domain.Name"
                            :value="domain.Name">
                          </el-option>
                        </el-select>
                      </el-form-item>

                      <el-form-item label="头像">
                        <el-upload
                          class="avatar-uploader "
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleAvatarSuccess"
                          :before-upload="beforeAvatarUpload">
                          <img v-if="imageUrl" :src="imageUrl" class="avatar">
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                      </el-form-item>
                    </el-form>
                    <button type="button" class="btn btn-primary btn-block mt-4  col-lg-6  col-md-6" style="width:100px;float: right "><i class='bx bxs-lock mr-1'></i>注册</button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 col-xl-7 d-flex align-items-stretch">
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
  name: "RegisterInstitution",
  data(){
    return {
      form: {
        Institution: {
          InstitutionName: '',
          InstitutionIntroduction: '',
          Address: "",
          EMail: "",
          Telephone: '',
          Fax: '',
          Domain: '',
        }
      },
      imageUrl:'',
      domains:[{"Id":"1","Name":"计算机"},{"Id":"2","Name":"医学"}],
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

<style scoped>

</style>
