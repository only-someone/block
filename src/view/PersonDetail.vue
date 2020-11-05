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
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-12 col-lg-7 border-right">
                    <div class="d-md-flex align-items-center">
                      <div class="mb-md-0 mb-3">
                        <img :src=Expert.avatar class="rounded-circle shadow" width="200" height="200" alt="" />
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
                        <td>计算机<span class="badge badge-success" style="margin-left: 20px">热门</span>
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
                        <td v-if="this.$cookies.get('type')==='expert'"><a href="javaScript:;" class="btn btn-outline-secondary ml-auto radius-10">已是专家</a></td>
                        <td v-if="this.$cookies.get('type')==='visiter'"><a href="javaScript:;" class="btn btn-outline-secondary ml-auto radius-10">成为专家</a></td>

                      </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
                <!--end row-->
              </div>
            </div>
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="购买的资源" name="first"> <el-card class="box-card" style="margin-top: -100px"> <search-resources></search-resources> </el-card></el-tab-pane>
              <el-tab-pane label="上传的资源" name="second"><el-card class="box-card" style="margin-top: -100px"> <resource-abstract></resource-abstract></el-card></el-tab-pane>
              <el-tab-pane label="参与的招投标" name="third"><el-card class="box-card" style="margin-top: -100px"> <search-bids></search-bids> </el-card></el-tab-pane>
              <el-tab-pane label="修改个人信息" name="fourth"><el-card class="box-card">
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
                        <label>住址</label>
                        <input type="text" v-model="Expert.institution" class="form-control">
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
                        <div class="form-group col-md-12">
                          <label>研究领域</label>
                          <br>
                          <el-tag
                            :key="tag"
                            v-for="tag in dynamicTags"
                            closable
                            :disable-transitions="false"
                            @close="handleClose(tag)">
                            {{tag}}
                          </el-tag>
                          <el-input
                            class="input-new-tag"
                            v-if="inputVisible"
                            v-model="inputValue"
                            ref="saveTagInput"
                            size="small"
                            @keyup.enter.native="handleInputConfirm"
                            @blur="handleInputConfirm">
                          </el-input>
                          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>


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
      activeName: 'fourth',//默认进入个人信息修改
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
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
    var id=this.$cookies.get("id")
    this.axios({
      method:'get',
      url:'http://192.168.8.103:8001/expertservice/expert/getExpert/'+id,
    }).then(res=>{
      this.Expert = res.data.data.expert;
    })
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    update_expert_info(){
      var vm =this

      vm.Expert.id=this.$cookies.get("id")

      this.axios({
        method:'post',
        url:'http://192.168.8.103:8001/expertservice/expert/updateExpert',
        data:vm.Expert
      }).then(alert("修改成功"))
    }

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
