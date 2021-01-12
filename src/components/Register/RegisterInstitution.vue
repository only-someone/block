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
                    <img src="../../../static/images/logo-2.png" width="180" alt="" />
                    <h4 class="mt-5"><strong>填写注册信息</strong></h4>

                    <el-form ref="form"  label-width="70px"    style="margin-top: 25px">
                      <el-form-item label="用户名">
                        <el-input type="text" v-model="form.registerVo.username" placeholder="用于登录的用户名"  ></el-input>
                      </el-form-item>
                      <el-form-item label="密码">
                        <el-input type="password" v-model="form.registerVo.password" placeholder="用于登录的密码" ></el-input>
                      </el-form-item>

                      <el-form-item label="机构名" >
                        <el-input type="text" v-model="form.institution.name" ></el-input>
                      </el-form-item>
                      <el-form-item label="创建时间" >
                        <el-input type="text" v-model="form.institution.createtime" ></el-input>
                      </el-form-item>
                      <el-form-item label="简介">
                        <el-input type="textarea" v-model="form.institution.businessscope" rows=5 ></el-input>
                      </el-form-item>
                      <el-form-item label="详细地址">
                        <el-input type="text" v-model="form.institution.orgaddress"  ></el-input>
                      </el-form-item>
                      <el-form-item label="联系电话">
                        <el-input type="text" v-model="form.institution.phone"  ></el-input>
                      </el-form-item>
                      <el-row :gutter="50"  >
                        <el-col :span="12">
                          <el-form-item label="省" >
                          <el-input type="text" v-model="form.institution.province" ></el-input>
                        </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="城市" >
                            <el-input type="text" v-model="form.institution.city" ></el-input>
                          </el-form-item>
                        </el-col>
                      </el-row>

                      <el-form-item label="领域" >
                          <div class="block">
                            <el-cascader
                              v-model="form.institution.domain"
                              :options="options"
                              :props="{ expandTrigger: 'hover' ,value:'title',label:'title'}"
                              @change="handleChange"></el-cascader>
                          </div>
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
                    <button type="button" class="btn btn-primary btn-block mt-4  col-lg-6  col-md-6" style="width:100%;float: right " @click="register"><i class='bx bxs-lock mr-1'></i>注册</button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-6 col-xl-7 d-flex align-items-stretch">
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
  name: "RegisterInstitution",
  data(){
    return {
      form: {
        institution: {
          avatar: "",
          businessscope: "",
          city: "",
          domain: "",
          //industry: "string",
          name: "",
          createtime:"",
          orgaddress: "",
          phone: "",
          province: "",
          registerstatus: false,
        },
        registerVo: {
          password: "",
          username: ""
        },

      },
      imageUrl: '',
      options: [],
    }
  },
  created() {
    this.get_domain()
  },
  methods: {
    get_domain(){
      var vm=this
      this.axios({
        method:'get',
        url:this.GLOBAL.Service_Base_Url+"/domainservice/domain/findAllDomainByTree",
      }).then(res=>{
        vm.options=res.data.data.items
        console.log(vm.options)
      })
    },
    handleChange(value) {
      console.log(value);
    },
    register(){
      var vm =this;
      vm.form.institution.domain=vm.form.institution.domain.toString()||""
      console.log(vm.form)
      this.axios({
        method: 'post',
        url:this.GLOBAL.Service_Base_Url+'/ucenter/member/registerInstitution',        //url:'http://192.168.8.103:8150//ucenter/member/rigisterExpert',
        data: vm.form
      }).then(res=>{
        console.log(res.data)
        if(res.data.success===true) {
          vm.axios({
            method: 'post',
            url: this.GLOBAL.Blockchain_Base_Url + '/api/v1/createUser',
            data: {
              "Id":"Institution_"+res.data.data.institution.id,
              "Score":"50"
            }
          }).then(resp=> {
              alert("注册成功,区块链初始积分为50分")
              vm.$router.push("/login")
            }
          ).catch(error => {
            console.log(error)
            alert("区块链注册失败,请重新注册")
            location.reload()
            //注册失败 需要删掉之前的机构
            vm.axios({
              method: 'delete',
              url: this.GLOBAL.Service_Base_Url + '/institutionservice/institution/remove/'+res.data.data.institution.id,
            }).then("区块链注册失败，删除用户")

          })
        }
        else{
          alert(res.data.message)
        }
      })
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.form.institution.avatar=res.data.url
      console.log( this.form.institution.avatar)
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
