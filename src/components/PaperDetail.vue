<template>
  <div>
    <section class="shop-single-section sidebar-page-container">
      <div class="auto-container">
        <div class="row clearfix">

          <!--Content Column-->
          <div class="content-column col-lg-8 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="shop-single">
                <div class="inner-box"  >
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">论文名称</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light">{{Paper.title}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">论文作者</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.author}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">论文机构</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.mechanism}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">论文关键词</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.keywords}}</div></el-col>
                    <el-col :span="4" ><div class="grid-content bg-purple-dark">分类号</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.classification}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">公开日</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.pubDate}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">引用数</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.cited}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">下载数</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple-light">{{Paper.download}}</div></el-col>
                  </el-row>
                  <el-row style="margin-bottom: 3%">
                    <el-col :span="4"><div class="grid-content bg-purple-dark">网页链接</div></el-col>
                    <el-col :span="20"><div class="grid-content bg-purple-light">{{Paper.url}}</div></el-col>

                  </el-row>
                  <el-row style="margin-bottom: 3%">

                    <el-col :span="4"><div class="grid-content bg-purple-dark">论文简介</div></el-col>
                    <el-col :span="20" style="height: 100px" ><div class="grid-content bg-purple-light">{{Paper.summary}}</div></el-col>
                  </el-row>

                </div>
              </div>
            </div>
          </div>

          <!--Sidebar Column-->
          <div class="sidebar-column col-lg-4 col-md-12 col-sm-12">
            <el-image :src="Paper.cover ||'/static/images/resource/featured-4.jpg'"     width="100%" style="width: 370px;height:280px" alt=""  lazy/>
            <div class="inner-column">

              <!--Purchased Widget-->
              <div class="purchased-widget" style="margin-top: 40px">
                <div class="inner-box" style="text-align: center">
                  <div class="price" >需要 {{ Paper.price }} 积分</div>
                  <button class="purchased-btn theme-btn" v-if="!this.haveBuy" @click="buy()">购买</button>
                  <a :href=download_url><button class="purchased-btn theme-btn"  v-if="this.haveBuy">下载</button></a>
                </div>
              </div>


            </div>
          </div>
          <div class="comments-area">
            <div class="group-title">
              <h2>发布作者及其他作品</h2>
            </div>

            <!--Comment Box-->
            <div class="comment-box" style="width: 1000px">
              <div class="comment">
                <div class="author-thumb"><img src="/static/images/resource/author-7.jpg" alt="" ></div>
                <div class="comment-inner">
                  <div class="post-info">by Anna Tomson on December 3, 2013 at 1:29 am</div>
                  <div class="comment-info">This is a beautifully crafted theme! </div>
                  <div class="text">Lorem Ipsum proin gravida nibh vel velit auctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet </div>
                  <a class="reply-comment" href="#">reply</a>
                </div>
              </div>
            </div>

            <!--Comment Box-->
            <div class="comment-box reply-comment" style="width: 1000px">
              <div class="comment">
                <div class="author-thumb"><img src="/static/images/resource/author-8.jpg" alt=""></div>
                <div class="comment-inner">
                  <div class="post-info">by Anna Tomson on December 3, 2013 at 1:29 am</div>
                  <div class="comment-info">This is a beautifully crafted theme! </div>
                  <div class="text">Lorem Ipsum proin gravida nibh vel velit auctor aliquenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum</div>
                  <a class="reply-comment" href="#">Reply</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "PaperDetail",
  data() {
    return {
      account:{},
      resource_type: this.$route.params.Type,
      resource_id:this.$route.params.Id,
      Paper:{},
      haveBuy:false,
      download_url:"",
      owner:"",
      buy_resourcelist:[],
      upload_resourcelist:[],
      up_number:1,

    }
  },
  created() {
    this.getDetail(this.resource_type,this.resource_id)
  },

  methods:{
    getDetail(Type,Id){
      var vm= this
      this.axios({
        method:"get",
        url:"http://192.168.8.103:8003/paperservice/paper/get"+Type+"/"+Id,
      }).then(res=>{
        vm.Paper=res.data.data[Object.keys(res.data.data)[0]]
        if(this.Paper.file.indexOf("http:/smartcity-youngpq.oss-cn-hangzhou.aliyuncs.com")!==-1)
          this.download_url=this.Paper.file
        else{
          this.download_url="http://192.168.8.197:8081/ipfs/"+this.Paper.file
        }
        this.isBuyer("Paper_"+this.Paper.id)
        // vm.axios({
        //   method:"post",
        //   url:"http://192.168.8.197:8000/api/v1/queryResource",
        //   data:{"Id":"Paper_"+this.Paper.id}
        // }).then(res=>{
        //   console.log(res)
        //   this.Paper.Uploader=res.data.data.Uploader
        // })很多资源没有上传至区块链，所以得先默认一个
      })
    },
    isBuyer(resourceid){
      var vm = this
      this.axios({
        method: 'post',
        url: 'http://192.168.8.197:8000/api/v1/queryAccount',
        data: {"Id": this.$cookies.get("id")}
      }).then(resp => {
        vm.account = resp.data.data[0]
        if(vm.account.Buy!==null){
          for (var i = 0; i < vm.account.Buy.length; i++) {
            this.buy_resourcelist.push(vm.account.Buy[i].id)
          }
        }
        if(vm.account.Upload!==null){
          for (var i = 0; i < vm.account.Upload.length; i++) {
            this.upload_resourcelist.push(vm.account.Upload[i].id)
          }
        }
        if(this.upload_resourcelist.indexOf(resourceid)!==-1 || this.buy_resourcelist.indexOf(resourceid)!==-1){
          this.haveBuy=true
        }
      }).catch(error=>{
        console.log(error)
      })
    },
    buy(){
      var vm =this
      var Dealdata={
        "Sell_id":this.Paper.Uploader||"1",
          "Buy_id":this.$cookies.get("id"),
          "Resource_id":"Paper_"+this.Paper.id,
          "Cost":this.Paper.price,
          "Time":new Date().toLocaleString('chinese', { hour12: false })
      }
      console.log(Dealdata)
      this.axios({
        method:'post',
        url:'http://192.168.8.197:8000/api/v1/createDeal',
        data:Dealdata
      }).then(res=> {
          alert("购买成功")
          vm.$router.push({path:"/ResourceDetail/Paper/"+this.Paper.Id})
        }
      ).catch(
        alert("购买失败")
      )
    }
  }

}
</script>


<style scoped>
.bg-purple-dark {
  text-align: center;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>

