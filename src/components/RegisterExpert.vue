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
                    <h4 class="mt-5"><strong>填写注册信息</strong></h4>
                  </div>
                  <div class="card-body" style="margin-left: 20px;margin-right: 20px;margin-top: -60px ">
                    <el-form ref="form"  label-width="50px" >
                      <el-row :gutter="50" >
                        <el-col :span="12">
                          <label style="margin: 15px">用户名</label>
                          <el-input type="text" v-model="form.registerVo.username" placeholder="用于登录的用户名"  ></el-input>
                        </el-col>
                        <el-col :span="12">
                          <label style="margin: 15px">密码</label>
                          <el-input  type="password"  v-model="form.registerVo.password" placeholder="用于登录的密码"></el-input>
                        </el-col>
                      </el-row>
                      <el-row :gutter="50">
                        <el-col :span="24">
                          <label style="margin: 15px">姓名</label>
                          <el-input type="text" v-model="form.expert.name" placeholder="真实姓名"></el-input>
                        </el-col>
                      </el-row>
                      <el-row :gutter="50" >
                        <el-col :span="24" style="display: inline">
                          <label style="margin: 15px">头像</label>
                          <el-upload style="width: 500px"
                                     class="avatar-uploader"
                                     :show-file-list="false"
                                     action="http://192.168.8.103:8222/oss/avataross"
                                     :on-success="handleAvatarSuccess"
                                     :before-upload="beforeAvatarUpload">
                            <img v-if="form.expert.avatar" :src="form.expert.avatar" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                          </el-upload>
                        </el-col>
                      </el-row>
                      <el-row >
                        <el-col :span="24">
                          <label style="margin: 15px">就职单位</label>
                          <el-input  v-model="form.expert.institution" type="text"  placeholder="若有单位账户填写单位账户名称，若无正常填写" ></el-input>
                        </el-col>
                      </el-row>
                      <el-row :gutter="50">
                        <el-col :span="24">
                          <label style="margin: 15px">简介</label>
                          <el-input type="textarea" v-model="form.expert.intro" rows=5></el-input>
                        </el-col>
                        <el-col :span="24">
                          <label style="margin: 15px">邮箱</label>
                          <el-input type="text" v-model="form.expert.email" ></el-input>
                        </el-col>
                      </el-row>
                      <el-row :gutter="50">
                        <el-col :span="12">
                          <label style="margin: 15px">职位</label>
                          <el-input type="text" v-model="form.expert.career" ></el-input>
                        </el-col>
                        <el-col :span="12">
                          <label style="margin: 15px">领域</label>
                          <div class="block">
                            <el-cascader
                              v-model="form.expert.domain"
                              :options="options"
                              :props="{ expandTrigger: 'hover' ,value:'title',label:'title'}"
                              @change="handleChange"></el-cascader>
                          </div>
                        </el-col>
                      </el-row>
                      <el-row :gutter="50">
                        <el-col :span="12">
                          <label style="margin: 15px">电话</label>
                          <el-input type="text" v-model="form.expert.phone" ></el-input>
                        </el-col>
                        <el-col :span="12">
                          <label style="margin: 15px">传真</label>
                          <el-input type="text" v-model="form.expert.fax" ></el-input>
                        </el-col>
                      </el-row>
<!--                      name="files"-->
                    </el-form>
                  </div>
<!--                  <h4 style="text-align: center;float: right; margin-top: -30px"><strong>已有相应单位用户？</strong></h4>-->
                  <el-col  style="margin-left: 15%;width: 70%;margin-top: 20px">
                    <button type="button" class="btn btn-primary btn-block " style="margin-bottom: 50px" @click="register" ><i class='bx bxs-lock mr-1'></i>注册</button>
                  </el-col>
                </div>
              </div>
              <div class="col-12 col-lg-7 col-xl-7 d-flex align-items-stretch">
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
  name: "RegisterExpert",
  data() {
    return {
      form: {
        expert:{
          avatar:"",
          career:"",
          email:"",
          fax:"",
          institution:"",//外键
          intro:"",
          name:"",
          phone:"",
          status:false,
          domain:"",
        },
        registerVo: {
          password: "",
          username: ""
        }

      },
      options:[],
      imageUrl_institution:'',

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
      vm.form.expert.domain=vm.form.expert.domain.toString()||""
      console.log(vm.form)
      this.axios({
        method: 'post',
        url:this.GLOBAL.Service_Base_Url+'/ucenter/member/registerExpert',        //url:'http://192.168.8.103:8150//ucenter/member/rigisterExpert',
        data: vm.form
      }).then(res=>{
        console.log(res.data)
        if(res.data.success===true) {
          vm.axios({
            method: 'post',
            url: this.GLOBAL.Blockchain_Base_Url + '/api/v1/createUser',
            data: {
              "Id":"Expert_"+res.data.data.expert.id,
              "Score":"50"
            }
          }).then(res=> {
            alert("注册成功,区块链初始积分为50分")
            vm.$router.push("/Login")
            }
          ).catch(error => {
            console.log(error)
            alert("区块链注册失败,请重新注册")
            location.reload()
            //删掉之前的专家
          })
        }
        else{
          alert(res.data.message)
        }
      })
    },
    register_have_institution(){
      var vm =this;
      vm.form.expert.domain=vm.form.expert.domain.toString()
      this.axios({
        // method: 'post',
        // url:this.GLOBAL.Service_Base_Url+'/expertservice/expert/addExpert',
        // data: vm.form.Expert,
        method: 'post',
        url:this.GLOBAL.Service_Base_Url+'/ucenter/member/registerExpert',
        data: vm.form
      }).then(res=>{
        console.log(res)
        vm.axios({
          method:'post',
          url:this.GLOBAL.Blockchain_Base_Url+'/api/v1/createUser',
          data:{
            "Id":"Expert_"+res.data.data.expert.id,
            "Score":"50"
          }
        }).then(
          alert("注册成功")
        ).catch(error=>{
          console.log(error)
          alert("区块链注册失败")
        })
        this.$router.push({path:'/Login'})
      }).catch(function (error){
        console.log(error)
      })
    },
    handleAvatarSuccess(res, file) {
      this.form.expert.url = URL.createObjectURL(file.raw);
      console.log(res)
      this.form.expert.avatar=res.data.url
      console.log( this.form.expert.avatar)
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
