<template>
  <div class="page-wrapper">

    <section class="shop-page-section"  >
      <!--搜索页面-->
      <div v-if="this.$route.path==='/SearchResult'" >
        <el-form :inline="true" class="demo-form-inline"  style="text-align: center;margin-top: -2%">
          <el-row>
            <el-form-item>
              <el-input v-model="expertQuery.title" placeholder='标题'/>
            </el-form-item>
            <el-form-item>
              <el-input v-model="expertQuery.purchaseInstitution" placeholder="需求机构"/>
            </el-form-item>
            <el-form-item>
              <el-input v-model="expertQuery.contentDescription" placeholder="内容描述"/>
            </el-form-item>
            <el-form-item  label="大于" >
              <el-input v-model="expertQuery.price_left" placeholder="积分数" style="width: 80px"/>
            </el-form-item >
            <el-form-item label="小于" >
              <el-input v-model="expertQuery.price_right" placeholder="积分数" style="width: 80px"/>
            </el-form-item>
          </el-row>


          <el-form-item label="发布时间区间">
            <el-date-picker
              v-model="expertQuery.announceTime_begin"
              type="datetime"
              placeholder="选择发布开始时间"
              value-format="yyyy-MM-dd HH:mm:ss"
              default-time="00:00:00"
            />
            <el-date-picker
              v-model="expertQuery.announceTime_end"
              type="datetime"
              placeholder="选择发布结束时间"
              value-format="yyyy-MM-dd HH:mm:ss"
              default-time="00:00:00"
            />
          </el-form-item>

          <el-form-item label="招标正式开始时间区间">
            <el-date-picker
              v-model="expertQuery.openTime_begin"
              type="datetime"
              placeholder="选择招标开始时间"
              value-format="yyyy-MM-dd HH:mm:ss"
              default-time="00:00:00"
            />
          </el-form-item>
          <el-form-item>
            <el-date-picker
              v-model="expertQuery.openTime_end"
              type="datetime"
              placeholder="选择招标截止时间"
              value-format="yyyy-MM-dd HH:mm:ss"
              default-time="00:00:00"
            />
          </el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="get_search_resources_frombutton()">查询</el-button>
        </el-form>
        <div class="auto-container"  v-if="this.$route.path==='/SearchResult'">
          <div class="row clearfix">
            <div class="price-block masonry-item col-lg-4 col-md-6 col-sm-12"  v-for="resource in searchresources"  :key="resource.id">
            <div class="inner-box">
              <el-row>
                <div class="price">￥{{ resource.budget ||0 }}</div>
              </el-row>
              <el-row>
                <div class="price">{{ resource.price }}积分</div>
              </el-row>

              <h2>{{ resource.title }}</h2>
              <ul class="price-list">
                <li>公告时间: {{ resource.announceTime }}</li>
                <li>开始时间: {{ resource.openTime }}</li>
                <li>结束时间: {{ resource.endTime }}</li>
                <li>联系人: {{ resource.purchasePerson  }}</li>
                <li>联系电话： {{ resource.purchasePhone  }}</li>
                <li>需求机构： {{ resource.purchaseInstitution  }}</li>
              </ul>
              <a :href="'#/ResourceDetail/Requirement/'+resource.id" class="theme-btn btn-style-two" >查看详情</a>
            </div>
          </div>
          </div>
          <div style="margin-left: 40%">
            <el-pagination
              :background=true
              style="margin:auto;margin-top:0px"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[5, 10, 20, 40]"
              :page-size="pagesize"
              layout=" prev, pager, next"
              :total=this.total
              :hide-on-single-page=true>
            </el-pagination>
          </div>
        </div>
      </div>
<!--      个人详情页面参与招投标-->
      <div class="auto-container"   v-if="this.$route.path==='/PersonDetail'">
        <div class="row clearfix">
          <div class="price-block masonry-item col-lg-4 col-md-6 col-sm-12"  v-for="resource in Join_bids"  :key="resource.id">
            <div class="inner-box">
              <el-row>
                <div class="price">￥{{ resource.budget ||0 }}</div>
              </el-row>
              <el-row>
                <div class="price">{{ resource.price }}积分</div>
              </el-row>

              <h2>{{ resource.title }}</h2>
              <ul class="price-list">
                <li>公告时间: {{ resource.announceTime }}</li>
                <li>开始时间: {{ resource.openTime }}</li>
                <li>结束时间: {{ resource.endTime }}</li>
                <li>联系人: {{ resource.purchasePerson  }}</li>
                <li>联系电话： {{ resource.purchasePhone  }}</li>
                <li>需求机构： {{ resource.purchaseInstitution  }}</li>
              </ul>
              <a :href="'#/ResourceDetail/Requirement/'+resource.id" class="theme-btn btn-style-two" >查看详情</a>
            </div>
          </div>
        </div>
        <div style="margin-left: 40%">
          <el-pagination
            :background=true
            style="margin:auto;margin-top:0px"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="pagesize"
            layout=" prev, pager, next"
            :total=Join_bids.length
            :hide-on-single-page=true>
          </el-pagination>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UpSolution from "./UpSolution";

export default {
  name: "SearchResources",
  data() {
    return {
      currentPage:1, //初始页
      pagesize:6,    //   每页的数据
      commendresources:[],
      searchresources:[],
      BuyResources:[],
      UploadResources:[],
      Upsolutions:[],
      Join_bids:[],
      isPersonDetail:this.$route.path==='/PersonDetail',
      set:{},
      total:0,
      type:"Paper",
      expertQuery:{},
      options: [{
        label: '解决方案',
        value:'Solution'
      }, {
        label: '项目需求',
        value:'Requirement'
      }],
    }
  },
  created() {
    if(this.$route.path==="/SearchResult"){
      this.get_search_resources()
      this.get_account()
    }

    if(this.$route.path==="/PersonDetail"){
      this.get_account()
    }

  },
  methods: {

    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pagesize = size;
    },
    getDetail(Type,Id){
      this.$router.push({
        name:'ResourceDetail',
        params:{
          Type:Type,
          Id:Id
        }
      })
    },
    get_search_resources_frombutton(){
      this.currentPage=1
      this.get_search_resources()
    },
    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage
      this.get_search_resources()
    },
    get_search_resources(){
      var vm =this
      var requesturl=""
      vm.searchresources=[]
      this.listLoading = true
      requesturl = this.GLOBAL.Service_Base_Url + "/requirementservice/requirement/pageRequirementCondition/" + this.currentPage + "/" + this.pagesize;
      this.axios({
        method:'post',
        url: requesturl,
        data: this.expertQuery
      }).then(response =>{  //请求成功
        var i={}
        vm.total=response.data.data.total
        this.searchresources = response.data.data.rows
      })
        .catch(error =>{    //请求失败
          console.log(error)
        })
    },
    get_account:async function(){
      var vm = this
      this.axios({
        method: 'post',
        url: this.GLOBAL.Blockchain_Base_Url+'/api/v1/queryAccount',
        data: {"Id": this.$cookies.get("id")}
      }).then(resp => {
        vm.account = resp.data.data[0]
        this.$cookies.set("score",vm.account.Score)
        if(vm.account.Upload!==null){
          for (var i = 0; i < vm.account.Upload.length; i++) {
            var [type,id] =vm.account.Upload[i].id.split("_")
            if(type==="Solution") {
              vm.axios({
                method: 'get',
                url: this.GLOBAL.Service_Base_Url + "/" + type.toLowerCase() + 'service/' + type.toLowerCase() + '/get' + type + '/' + id
              }).then(res => {
                  type = Object.keys(res.data.data)[0]
                  var resource = res.data.data[type]
                  type = type.charAt(0).toUpperCase() + type.slice(1);
                  var RId = resource.id
                  vm.axios({
                    method: 'get',
                    url: this.GLOBAL.Service_Base_Url + "/solutionservice/solution/getSolution/" + RId
                  }).then(res => {
                    if(!vm.Upsolutions.includes(res.data.data["solution"].requirementNumber)){
                      vm.Upsolutions.push(res.data.data["solution"].requirementNumber)
                      var reqirement_id = res.data.data["solution"].requirementNumber
                      vm.axios({
                        method: 'get',
                        url: this.GLOBAL.Service_Base_Url + "/requirementservice/requirement/getRequirement/" + reqirement_id
                      }).then(resp => {
                        console.log(resp.data)
                        vm.Join_bids.push(resp.data.data["requirement"])
                      })
                    }
                  })
                }
              )
            }
          }
          console.log(vm.Join_bids)
        }
      }).catch(error=>{
        console.log(error)
      })
    },
  },

}
</script>

<style scoped>

</style>
