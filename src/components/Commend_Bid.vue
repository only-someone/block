<template>
  <div>
    <div class="page-wrapper">
	<ResourceAbstract></ResourceAbstract>
     <!-- <div class="card mb-0 shadow-none bg-transparent w-100 rounded-0">-->
        <!--                     <img src="static/images/3327590.jpg" style="margin-left: 10%" width="80%" alt="" />-->


        <!--                    <h4 style="text-align: center;margin-top: -20px;margin-bottom: 20px"><strong>没有相应单位用户？</strong></h4>-->
        <!--                    <el-form ref="form" :model="form.Institution" label-width="100px" style="margin-right: 30px;margin-left: 2%"  >-->
        <!--                      <el-form-item label="名称">-->
        <!--                        <el-input type="text" v-model="form.Institution.InstitutionName" style="width: 60%"></el-input>-->
        <!--                      </el-form-item>-->
        <!--                      <el-form-item label="简介">-->
        <!--                        <el-input type="textarea" v-model="form.Institution.InstitutionIntroduction" rows=3 ></el-input>-->
        <!--                      </el-form-item>-->

        <!--                      <el-row>-->
        <!--                        <el-col :span="12">-->
        <!--                          <el-form-item label="地址" >-->
        <!--                            <el-input type="text" v-model="form.Institution.Address" ></el-input>-->
        <!--                          </el-form-item>-->
        <!--                        </el-col>-->
        <!--                        <el-col :span="12">-->
        <!--                          <el-form-item label="邮箱" >-->
        <!--                            <el-input type="text" v-model="form.Institution.Affiliation"  ></el-input>-->
        <!--                          </el-form-item>-->
        <!--                        </el-col>-->
        <!--                      </el-row>-->
        <!--                      <el-row>-->
        <!--                        <el-col :span="12">-->
        <!--                          <el-form-item label="电话"  >-->
        <!--                            <el-input type="text" v-model="form.Institution.Telephone" ></el-input>-->
        <!--                          </el-form-item>-->
        <!--                        </el-col>-->
        <!--                        <el-col :span="12">-->
        <!--                          <el-form-item label="传真">-->
        <!--                            <el-input type="text" v-model="form.Institution.Fax"  ></el-input>-->
        <!--                          </el-form-item>-->
        <!--                        </el-col>-->
        <!--                      </el-row>-->
        <!--                      <el-row>-->
        <!--                        <div class="block">-->
        <!--                          <el-cascader-->
        <!--                            v-model="form.Institution.domain"-->
        <!--                            :options="options"-->
        <!--                            :props="{ expandTrigger: 'hover' ,value:'title',label:'title'}"-->
        <!--                            @change="handleChange"></el-cascader>-->
        <!--                        </div>-->
        <!--                      </el-row>-->
        <!--&lt;!&ndash;                        <el-col :span="12">&ndash;&gt;-->
        <!--&lt;!&ndash;                          <el-form-item label="单位头像">&ndash;&gt;-->
        <!--&lt;!&ndash;                            <el-upload&ndash;&gt;-->
        <!--&lt;!&ndash;                              class="avatar-uploader"&ndash;&gt;-->
        <!--&lt;!&ndash;                              :show-file-list="false"&ndash;&gt;-->
        <!--&lt;!&ndash;                              action="http://192.168.8.103:8002/oss/avataross"&ndash;&gt;-->
        <!--&lt;!&ndash;                              name="files"&ndash;&gt;-->
        <!--&lt;!&ndash;                              :on-success="handleAvatarSuccess"&ndash;&gt;-->
        <!--&lt;!&ndash;                              :before-upload="beforeAvatarUpload">&ndash;&gt;-->
        <!--&lt;!&ndash;                              <img v-if="imageUrl_institution" :src="imageUrl_institution" class="avatar">&ndash;&gt;-->
        <!--&lt;!&ndash;                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>&ndash;&gt;-->
        <!--&lt;!&ndash;                            </el-upload>&ndash;&gt;-->
        <!--&lt;!&ndash;                          </el-form-item>&ndash;&gt;-->

        <!--&lt;!&ndash;                        </el-col>&ndash;&gt;-->


        <!--                       <button type="button" class="btn btn-primary btn-block " style="width: 50%;margin-left: 8%" ><i class='bx bxs-lock mr-1'></i>注册</button>-->
        <!--                    </el-form>-->

        <!--                  </div>-->
</div>
  </div>
</template>

<script>
export default {
  name: "Commend_Resource",
  data() {
    return {
    }
  },
  created() {


  },
  methods: {

  },


}
</script>

<style scoped>

</style>
