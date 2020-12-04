<template>
  <div class="page-wrapper">

    <!-- Preloader -->
    <!--<div class="preloader"></div>-->

    <!-- Main Header / Header Style Two-->
    <header class="main-header header-style-two">
      <HomeNav></HomeNav>
      <MyNav></MyNav>
    </header>
    <!--End Main Header -->

    <!--Breadcrumb Title-->
    <section class="breadcrumb-section">
      <div class="auto-container">
        <ul>
          <li><a href="#">个人</a></li>
          <li>个人信息管理</li>
        </ul>
      </div>
    </section>
    <section>
      <div class="page-content-wrapper">
        <div class="auto-container">

          <div class="user-profile-page" style="margin-top: 50px">
            <div class="card" v-if="this.$cookies.get('type')!=='Normal'">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-lg-7 border-right">
                    <div class="d-md-flex align-items-center">
                      <div class="mb-md-0 mb-3" >
                        <a><img :src="Expert.avatar" class="rounded-circle shadow" style="height: 200px;width: 200px" alt="" @click="showdialog=true" /></a>
                        <el-dialog title="更换头像" :visible.sync="showdialog"   width="20%" center >
                          <el-form >
                            <el-form-item  style="text-align: center">
                              <el-upload
                                class="avatar-uploader"
                                :show-file-list="false"
                                action="http://192.168.8.103:8222/oss/avataross"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                              </el-upload>
                            </el-form-item>
                          </el-form>
                          <div  slot="footer"  class="dialog-footer" center>
                            <el-button @click="showdialog = false">取 消</el-button>
                            <el-button type="primary" @click="changeavator()">确 定</el-button>
                          </div>
                        </el-dialog>
                      </div>
                      <div class="ml-md-4 flex-grow-1">
                        <div class="d-flex align-items-center mb-1">
                          <h4 class="mb-0">{{ Expert.name }}</h4>
                          <p class="mb-0 ml-auto" style="margin-right: 100px">积分:<span class="badge badge-success" style="margin-left: 20px;font-size: 20px">{{this.$cookies.get("score")}}</span></p>
                        </div>
                        <p class="mb-0 text-muted">{{Expert.institution}}</p>
                        <p class="text-primary"><i class='bx bx-buildings'></i>{{Expert.intro}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-lg-5">
                    <table class="table table-sm table-borderless mt-md-0 mt-3">
                      <tbody>
                      <tr>
                        <th>研究领域:</th>
                        <td>{{ Expert.domain }}<span class="badge badge-success" style="margin-left: 20px">热门</span>
                        </td>
                      </tr>
                      <tr>
                        <th>邮箱:</th>
                        <td>{{ Expert.email }}</td>
                      </tr>
                      <tr>
                        <th>电话:</th>
                        <td>{{ Expert.phone }}</td>
                      </tr>
                      <tr>
                        <th>传真</th>
                        <td>{{ Expert.fax }}</td>
                      </tr>
                      <tr>
                        <th></th>
                        <td v-if="this.$cookies.get('type')==='Expert'&& this.Expert.status===true"><a href="javaScript:;" class="btn btn-outline-secondary ml-auto radius-10">已是专家</a></td>
                        <td v-if="this.$cookies.get('type')==='Expert'&& this.Expert.status===false"><a href="javaScript:;" class="btn btn-outline-secondary ml-auto radius-10">等待审核</a></td>
                        <td v-if="this.$cookies.get('type')==='NormalUser'"><a href="javaScript:;" class="btn btn-outline-secondary ml-auto radius-10">申请成为专家</a></td>

                      </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
              </div>
            </div>
            <p class="mb-0 ml-auto" v-if="this.$cookies.get('type')==='Normal'">积分:<span class="badge badge-success" style="margin: 20px;font-size: 20px">{{this.$cookies.get("score")}}</span></p>
            <el-tabs v-model="activeName" type="card" >

              <el-tab-pane label="购买的资源" name="first"> <el-card class="box-card" style="margin-top: -100px"> <search-resources></search-resources> </el-card></el-tab-pane>
              <el-tab-pane label="上传的资源" name="second"><el-card class="box-card" style="margin-top: -100px"> <resource-abstract></resource-abstract></el-card></el-tab-pane>
              <el-tab-pane label="参与的招投标" name="third" v-if="this.$cookies.get('type')!=='Normal'"><el-card class="box-card" style="margin-top: -100px" > <search-bids></search-bids></el-card></el-tab-pane>
              <el-tab-pane label="修改个人信息" name="fourth" v-if="this.$cookies.get('type')!=='Normal'"><el-card class="box-card" >
                <div class="form-body">
                  <div class="row">
                    <div class="col-12 col-lg-5 border-right">
                      <div class="form-row">
                        <div class="form-group col-md-12">
                          <label>姓名</label>
                          <input type="text"  v-model="Expert.name" class="form-control">
                        </div>

                      </div>
                      <div class="form-group">
                        <label>新密码</label>
                        <input type="password" value="********" class="form-control">
                      </div>
                      <div class="form-group">
                        <label>确认密码</label>
                        <input type="password"  class="form-control">
                      </div>
                      <div class="form-group">
                        <label>邮箱</label>
                        <input type="text" v-model="Expert.email" class="form-control">
                      </div>
                      <div class="form-group">
                        <label>电话</label>
                        <input type="text" v-model="Expert.phone" class="form-control">
                      </div>
                      <div class="form-group">
                        <label>传真</label>
                        <input type="text" v-model="Expert.fax" class="form-control">
                      </div>

                    </div>
                    <div class="col-12 col-lg-7">
                      <div class="form-row">
                        <div class="form-group col-md-12">
                          <label>就职单位</label>
                          <input type="text" v-model="Expert.institution" class="form-control">
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="form-group col-md-12" >
                          <label>研究领域</label>
                          <div class="block" v-if="inputVisible">
                            <el-cascader
                              v-model="Expert.domain"
                              :options="options"
                              :props="{ expandTrigger: 'hover' ,value:'title',label:'title'}">
                            </el-cascader>
                          </div>
                          <br v-if="inputVisible===false">
                          <el-button @click="inputVisible = true"  v-if="inputVisible===false">
                            {{ Expert.domain }}</el-button>
                        </div>

                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-12">
                          <label>职位</label>
                          <input type="text"  v-model="Expert.career" class="form-control">
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-group col-md-12">
                          <label>个人简介</label>
                          <el-input type="textarea" v-model="Expert.intro"   rows=10 ></el-input>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>

              </el-card>
                <button type="button" class="btn btn-primary btn-block mt-3" style="height: 50px" @click="update_expert_info()"><i class='bx bxs-lock mr-1'></i>确认修改</button></el-tab-pane>

            </el-tabs>

          </div>
        </div>
      </div>
    </section>



    <Footer></Footer>

  </div>
</template>

<script>
export default {
  name: "PersonDetail",
  data() {
    return {
      activeName: 'first',//默认进入个人信息修改
      inputVisible: false,
      imageUrl:"",
      options:[],
      showdialog:false,
      Expert:{
        name:"",
        intro:"",
        career:"",
        email:"",
        phone:"",
        fax:"",
        institution: "",
        avatar: "",
        sort:""
      }
    };
  },
  created() {
    this.get_domain()
    var id=this.$cookies.get("id")
    this.axios({
      method:'get',
      url:this.GLOBAL.Service_Base_Url+'/expertservice/expert/getExpert/'+id,
    }).then(res=>{
      this.Expert = res.data.data.expert;
    })
  },
  methods: {
    changeavator(){
      var vm =this
      vm.Expert.id=this.$cookies.get("id")
      this.axios({
        method:'post',
        url:this.GLOBAL.Service_Base_Url+'/expertservice/expert/updateExpert',
        data:vm.Expert
      }).then(resp=>{
        alert("修改头像成功")
        this.$cookies.set("avatar",vm.Expert.avatar)
        this.showdialog=false}
      )

    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.Expert.avatar=res.data.url
    },
    beforeAvatarUpload(file) {

      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 10MB!');
      }
      return  isLt2M;
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    update_expert_info(){
      var vm =this
      vm.Expert.id=this.$cookies.get("id")
      vm.Expert.domain=vm.Expert.domain.toString()
      this.axios({
        method:'post',
        url:this.GLOBAL.Service_Base_Url+'/expertservice/expert/updateExpert',
        data:vm.Expert
      }).then(res=>{
        alert("修改成功")
        location.reload()
      })
    },
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
  }
}
</script>

<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  width: 100px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
