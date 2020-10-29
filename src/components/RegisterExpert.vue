<template>
  <div class="wrapper">
    <div class="section-authentication">
      <div class="container-fluid">
        <div class="card mb-0">
          <div class="card-body p-0">
            <div class="row no-gutters">
              <div class="col-12 col-lg-5 col-xl-5 d-flex align-items-stretch">

                <div class="card mb-0 shadow-none bg-transparent w-100 login-card rounded-0">
                  <div class="card-body p-md-5">
                    <img src="static/images/logo-2.png" width="180px"  alt="" />
                  </div>
                  <h4 style="text-align:center;margin-top: -20px" ><strong>补充个人信息</strong></h4>
                  <div class="card-body">
                    <el-form ref="form" :model="form.Expert" label-width="50px" >
                      <el-form-item label="简介">
                        <el-input type="textarea" v-model="form.Expert.Introduction" rows=3></el-input>
                      </el-form-item>
                      <el-form-item label="住址">
                        <el-input type="text" v-model="form.Expert.Home" ></el-input>
                      </el-form-item>
                      <el-form-item label="职位" >
                        <el-input type="text" v-model="form.Expert.Affiliation" ></el-input>
                      </el-form-item>
                      <el-form-item label="电话">
                        <el-input type="text" v-model="form.Expert.Telephone" ></el-input>
                      </el-form-item>
                      <el-form-item label="领域" >
                        <el-select v-model="form.Expert.Domain" placeholder="请选择" >
                          <el-option
                            v-for="domain in domains"
                            :key="domain.Id"
                            :label="domain.Name"
                            :value="domain.Name">
                          </el-option>
                        </el-select>
                      </el-form-item>

                    </el-form>
                  </div>
                  <h4 style="text-align: center;float: right"><strong>已有相应单位用户？</strong></h4>
                  <el-row style="margin-left: 20px;margin-right: 20px" :gutter="30">
                    <el-col :span="15">
                      <el-input  type="text"  placeholder="填写对应单位名" style="margin-left: 10px"></el-input>
                    </el-col>

                   <el-col :span="9">
                     <button type="button" class="btn btn-primary btn-block " ><i class='bx bxs-lock mr-1'></i>关联</button>
                   </el-col>
                  </el-row>
                  <img src="static/assets/images/login-images/auth-img-register2.png" class="card-img-top" alt="" />

                </div>
              </div>
              <div class="col-12 col-lg-7 col-xl-7 d-flex align-items-stretch">
                <div class="card mb-0 shadow-none bg-transparent w-100 rounded-0">
                     <img src="static/images/3327590.jpg" style="margin-left: 10%" width="80%" alt="" />


                    <h4 style="text-align: center;margin-top: -20px;margin-bottom: 20px"><strong>没有相应单位用户？</strong></h4>
                    <el-form ref="form" :model="form.Institution" label-width="50px" style="margin-right: 30px"  >
                      <el-form-item label="名称">
                        <el-input type="text" v-model="form.Institution.InstitutionName" style="width: 60%"></el-input>
                      </el-form-item>
                      <el-form-item label="简介">
                        <el-input type="textarea" v-model="form.Institution.InstitutionIntroduction" rows=3 ></el-input>
                      </el-form-item>

                      <el-row>
                        <el-col :span="12">
                          <el-form-item label="地址" >
                            <el-input type="text" v-model="form.Institution.Address" ></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="邮箱" >
                            <el-input type="text" v-model="form.Institution.Affiliation"  ></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="12">
                          <el-form-item label="电话"  >
                            <el-input type="text" v-model="form.Institution.Telephone" ></el-input>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="传真">
                            <el-input type="text" v-model="form.Institution.Fax"  ></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>
                      <el-row>
                        <el-col :span="12">
                          <el-form-item label="领域"  >
                            <el-select v-model="form.Institution.Domain" placeholder="请选择"  style="width:83%">
                              <el-option
                                v-for="domain in domains"
                                :key="domain.Id"
                                :label="domain.Name"
                                :value="domain.Name">
                              </el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="头像">
                            <el-upload
                              class="avatar-uploader"
                              :show-file-list="false"
                              action="https://jsonplaceholder.typicode.com/posts/"
                              :on-success="handleAvatarSuccess"
                              :before-upload="beforeAvatarUpload">
                              <img v-if="imageUrl" :src="imageUrl" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                          </el-form-item>

                        </el-col>
                      </el-row>
                      <button type="button" class="btn btn-primary btn-block " style="width:25%;margin-left: 50px" ><i class='bx bxs-lock mr-1'></i>注册</button>



                    </el-form>

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
  name: "RegisterExpert",
  data() {
    return {
      form: {
        Expert:{
          Introduction: '',
          Home:'',
          Affiliation: '',
          Telephone: '',
          Domain:" "
        },
        Institution:{
          InstitutionName:'',
          InstitutionIntroduction:'',
          Address:"",
          EMail:"",
          Telephone:'',
          Fax:'',
          Domain:'',

        }

      },
      imageUrl:"",
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
