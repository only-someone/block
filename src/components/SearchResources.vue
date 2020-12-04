<template>
  <div class="page-wrapper">
    <!--Shop Page Section-->
    <section class="shop-page-section">
      <div class="auto-container">
        <div class="row clearfix">
          <!--Shop Item-->
          <div class="shop-item col-lg-3 col-md-6 col-sm-12" v-for="resource in BuyResources.slice((currentPage-1)*pagesize,currentPage*pagesize)"  :key="resource.RId" >
            <div class="inner-box" style="text-align: center">
              <div class="image">
                <a @click="getDetail(resource.Type,resource.RId)"><el-image :src="resource.RCover||'static/images/resource/featured-4.jpg'" alt="" style="display: block;width: auto;height: 200px" /></a>
              </div>
              <div class="lower-content">
                <h3><a @click="getDetail(resource.Type,resource.RId)">{{ resource.RName }}</a></h3>
                <div class="price">{{ resource.RPrice }}积分</div>
                <a @click="getDetail(resource.Type,resource.RId)" class="theme-btn btn-style-two" style="color: #ffffff" v-if="isPersonDetail">查看详情</a>
                <a href="resource_detail.html" class="theme-btn btn-style-two" v-else>购买下载</a>
              </div>
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
            :total="BuyResources.length"
            :hide-on-single-page=true>
          </el-pagination>
        </div>
      </div>
    </section>
    <section class="shop-page-section" v-if="this.$route.path==='/SearchResult'" >
      <el-form :inline="true" class="demo-form-inline" style="text-align: center;margin-top: -6%" v-if="type==='Paper'">
        <el-form-item style="width: 110px">
          <el-select v-model="type" placeholder="请先选择资源类型" >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.author" placeholder="作者"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.title" placeholder="标题"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.summary" placeholder="简介"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.keyword" placeholder="关键词"/>
        </el-form-item>

        <el-form-item  label="大于" >
          <el-input v-model="expertQuery.price_left" placeholder="积分数" style="width: 80px"/>
        </el-form-item >
        <el-form-item label="小于" >
          <el-input v-model="expertQuery.price_right" placeholder="积分数" style="width: 80px"/>
        </el-form-item>
        <el-form-item label="时间区间">
          <el-date-picker
            v-model="expertQuery.begin"
            type="datetime"
            placeholder="选择开始时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="expertQuery.end"
            type="datetime"
            placeholder="选择截止时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />
        </el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="get_search_resources_frombutton()">查询</el-button>
      </el-form>

      <el-form :inline="true"  style="text-align: center;margin-top: -6%" v-if="type==='Patent'">
        <el-row>
          <el-form-item style="width: 110px">
            <el-select v-model="type" placeholder="请先选择资源类型" >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input v-model="expertQuery.applicant" placeholder="申请人"/>
          </el-form-item>
          <el-form-item>
            <el-input v-model="expertQuery.title" placeholder="标题"/>
          </el-form-item>
          <el-form-item>
            <el-input v-model="expertQuery.summary" placeholder="简介"/>
          </el-form-item>

          <el-form-item  label="大于" >
            <el-input v-model="expertQuery.price_left" placeholder="积分整数" style="width: 80px"/>
          </el-form-item >
          <el-form-item label="小于" >
            <el-input v-model="expertQuery.price_right" placeholder="积分整数" style="width: 80px"/>
          </el-form-item>
        </el-row>
          <el-form-item label="应用时间区间">
            <el-date-picker
              v-model="expertQuery.application_begin"
              type="datetime"
              placeholder="选择应用开始时间"
              value-format="yyyy-MM-dd HH:mm:ss"
              default-time="00:00:00"
            />
            <el-date-picker
              v-model="expertQuery.application_end"
              type="datetime"
              placeholder="选择应用结束时间"
              value-format="yyyy-MM-dd HH:mm:ss"
              default-time="00:00:00"
            />
          </el-form-item>

        <el-form-item label="开放时间区间">
          <el-date-picker
            v-model="expertQuery.open_begin"
            type="datetime"
            placeholder="选择开放开始时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />

        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="expertQuery.open_end"
            type="datetime"
            placeholder="选择开放截止时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />
        </el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="get_search_resources_frombutton()">查询</el-button>
      </el-form>

      <el-form :inline="true"  style="text-align: center;margin-top: -6%" v-if="type==='Solution'">

        <el-row>
          <el-form-item style="width: 110px">
            <el-select v-model="type" placeholder="请先选择资源类型" >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input v-model="expertQuery.applicant" placeholder="申请人"/>
          </el-form-item>
          <el-form-item>
            <el-input v-model="expertQuery.title" placeholder="标题"/>
          </el-form-item>
          <el-form-item>
            <el-input v-model="expertQuery.summary" placeholder="简介"/>
          </el-form-item>

          <el-form-item  label="大于" >
            <el-input v-model="expertQuery.price_left" placeholder="积分整数" style="width: 80px"/>
          </el-form-item >
          <el-form-item label="小于" >
            <el-input v-model="expertQuery.price_right" placeholder="积分整数" style="width: 80px"/>
          </el-form-item>
        </el-row>
        <el-form-item label="应用时间区间">
          <el-date-picker
            v-model="expertQuery.application_begin"
            type="datetime"
            placeholder="选择应用开始时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />
          <el-date-picker
            v-model="expertQuery.application_end"
            type="datetime"
            placeholder="选择应用结束时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />
        </el-form-item>

        <el-form-item label="开放时间区间">
          <el-date-picker
            v-model="expertQuery.open_begin"
            type="datetime"
            placeholder="选择开放开始时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />

        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="expertQuery.open_end"
            type="datetime"
            placeholder="选择开放截止时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />
        </el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="get_search_resources_frombutton()">查询</el-button>
      </el-form>

      <el-form :inline="true" class="demo-form-inline" style="text-align: center;margin-top: -6%" v-if="type==='Achievement'">
        <el-form-item style="width: 110px">
          <el-select v-model="type" placeholder="请先选择资源类型" >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.author" placeholder="作者"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.title" placeholder="标题"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.summary" placeholder="简介"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.keyword" placeholder="关键词"/>
        </el-form-item>

        <el-form-item  label="大于" >
          <el-input v-model="expertQuery.price_left" placeholder="积分数" style="width: 80px"/>
        </el-form-item >
        <el-form-item label="小于" >
          <el-input v-model="expertQuery.price_right" placeholder="积分数" style="width: 80px"/>
        </el-form-item>
        <el-form-item label="时间区间">
          <el-date-picker
            v-model="expertQuery.begin"
            type="datetime"
            placeholder="选择开始时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="expertQuery.end"
            type="datetime"
            placeholder="选择截止时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />
        </el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="get_search_resources_frombutton()">查询</el-button>
      </el-form>

      <el-form :inline="true" class="demo-form-inline" style="text-align: center;margin-top: -6%" v-if="type==='Software'">
        <el-form-item style="width: 110px">
          <el-select v-model="type" placeholder="请先选择资源类型" >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.author" placeholder="作者"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.title" placeholder="标题"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.summary" placeholder="简介"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.keyword" placeholder="关键词"/>
        </el-form-item>

        <el-form-item  label="大于" >
          <el-input v-model="expertQuery.price_left" placeholder="积分数" style="width: 80px"/>
        </el-form-item >
        <el-form-item label="小于" >
          <el-input v-model="expertQuery.price_right" placeholder="积分数" style="width: 80px"/>
        </el-form-item>
        <el-form-item label="时间区间">
          <el-date-picker
            v-model="expertQuery.begin"
            type="datetime"
            placeholder="选择开始时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="expertQuery.end"
            type="datetime"
            placeholder="选择截止时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />
        </el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="get_search_resources_frombutton()">查询</el-button>
      </el-form>

      <el-form :inline="true" class="demo-form-inline" style="text-align: center;margin-top: -6%" v-if="type==='Case'">
        <el-form-item style="width: 110px">
          <el-select v-model="type" placeholder="请先选择资源类型" >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.title" placeholder="标题"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.introduction" placeholder="简介"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.indicator" placeholder="技术细节"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.application" placeholder="应用场景"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="expertQuery.staffInstitution" placeholder="实施机构"/>
        </el-form-item>
        <el-form-item  label="大于" >
          <el-input v-model="expertQuery.price_left" placeholder="积分数" style="width: 80px"/>
        </el-form-item >
        <el-form-item label="小于" >
          <el-input v-model="expertQuery.price_right" placeholder="积分数" style="width: 80px"/>
        </el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="get_search_resources_frombutton()">查询</el-button>
      </el-form>

      <div class="auto-container">
        <div class="row clearfix">
          <!--Shop Item-->
          <div class="news-block-two masonry-item col-lg-4 col-md-6 col-sm-12" v-for="resource in searchresources"  :key="resource.Rid" >
            <div class="inner-box" >
              <div class="image" >
                <a><img :src="resource.RCover ||'/static/images/resource/featured-4.jpg'"   @click="getDetail(resource.Type,resource.RId)" style="width: 300px;height: 200px"/></a>
              </div>
              <div class="post-date">{{resource.RTime}}</div>
              <h3><a @click="getDetail(resource.Type,resource.RId)">{{resource.RName}}</a></h3>
              <div class="text" style="max-height: 300px;overflow: hidden;text-overflow: ellipsis;">{{resource.RAbstract}}</div>
              <div class="author">
                <div class="author-image"><img src="static/images/resource/author-2.jpg" alt="" /></div>
                {{resource.RAuthorName}}
              </div>
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
    </section>
  </div>
</template>

<script>
export default {
  name: "SearchResources",
  data() {
    return {
      currentPage:1, //初始页
      pagesize:6,    //   每页的数据
      commendresources:[],
      searchresources:[],
      BuyResources:[],
      isPersonDetail:this.$route.path==='/PersonDetail',
      set:{},
      total:0,
      type:"Paper",
      expertQuery:{},
      options: [{
        label: '论文',
        value:'Paper'
      }, {
        label: '专利',
        value:'Patent'
      }, {
        label: '技术成果',
        value: 'Achievement'
      }, {
        label: '软件著作',
        value: 'Software'
      }, {
        label: '案例',
        value:'Case'
      }],
    }
  },
  created() {
    if(this.$route.path==="/SearchResult"){
      this.get_search_resources()
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
      //console.log(this.type)
      vm.searchresources=[]
      this.listLoading = true
      console.log(this.type)
      switch (this.type){
        case "Paper":
          requesturl = this.GLOBAL.Service_Base_Url + "/paperservice/paper/pagePaperCondition/" + this.currentPage + "/" + this.pagesize;
          break;
        case "Patent":
          requesturl = this.GLOBAL.Service_Base_Url + "/patentservice/patent/pagePatentCondition/" + this.currentPage + "/" + this.pagesize;
          break;
        case "Solution":
          requesturl = this.GLOBAL.Service_Base_Url + "/solutionservice/solution/pageSolutionCondition/" + this.currentPage + "/" + this.pagesize;
          break;
        case "Achievement":
          requesturl = this.GLOBAL.Service_Base_Url + "/achievementservice/achievement/pageAchievementCondition/" + this.currentPage + "/" + this.pagesize;
          break;
        case "Software":
          requesturl = this.GLOBAL.Service_Base_Url + "/paperservice/paper/pagePaperCondition/" + this.currentPage + "/" + this.pagesize;
          break;
        case "Requirement":
          requesturl = this.GLOBAL.Service_Base_Url + "/requirementservice/requirement/pageRequirementCondition/" + this.currentPage + "/" + this.pagesize;
          break;
        case "Case":
          requesturl = this.GLOBAL.Service_Base_Url + "/caseservice/case/pageCaseCondition/" + this.currentPage + "/" + this.pagesize;
          break;
      }
      this.axios({
        method:'post',
        url: requesturl,
        data: this.expertQuery
      }).then(response =>{  //请求成功
        var i={}
        vm.total=response.data.data.total
        var resources = response.data.data.rows
        for( i in resources){
          var RId=resources[i].id
          var RName=resources[i].title
          var RAbstract=resources[i].summary||resources[i].introduction
          var RTime=resources[i].pubDate||resources[i].gmtCreate
          var RCover=resources[i].cover
          var RAuthorName=resources[i].author
          vm.searchresources.push({"Type":this.type,"RId":RId,"RName":RName,"RAbstract":RAbstract,"RTime":RTime,"RAuthorName":RAuthorName,"RCover":RCover})
        }
      })
        .catch(error =>{    //请求失败
          console.log(error)
        })
    },

  },

}
</script>

<style scoped>

</style>
