<template>
    <aside class="sidebar">
      <div class="sidebar-widget category-widget"  style="margin-top: 50px">
        <div class="sidebar-title">
          <h3>概况</h3>
        </div>
      </div>
      <div class="back" >
        <div class="row bgg">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4" align="center">
            <div class="count-outer count-box">
              <h5><countTo :startVal=0 :endVal=this.up_number :duration='3000'></countTo></h5>
            </div>
            <p>上传资源</p>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4" align="center">
            <h5><countTo :startVal=0 :endVal=this.buy_number :duration='3000'></countTo></h5>
            <p>购买资源</p>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4" align="center" v-if="this.$cookies.get('type')!=='Normal'">
            <h5><countTo :startVal=0 :endVal=this.bid_number :duration='3000'></countTo></h5>
            <p>参与招投标</p>
          </div>
        </div>
      </div>


    <!-- Category Widget -->
    <div style="margin-top: 50px"></div>

     <!-- Popular Posts -->
    <div class="sidebar-widget popular-posts">
    <div class="sidebar-title">
        <h3>推荐的资源</h3>
    </div>
    <div class="widget-content" >
        <article class="post" v-for="index in commendresources.slice(0,5)"   style="margin-top: 20px"  :key="index.RId">
        <figure class="post-thumb" >
          <a @click="getDetail(index.Type,index.RId)">
            <img :src="'static/images/resource/featured-4.jpg' "alt="" style="display: block; height: 100px;width:auto">
          </a>
        </figure>
          <a @click="getDetail(index.Type,index.RId)"><div class="text"> {{index.RName}}.</div></a>
        <div class="post-info">{{index.RTime}}</div>
        <div class="text">by {{index.RAuthorName}}.</div>
        </article>
    </div>
    </div>

      <div class="sidebar-widget category-widget"  >
        <div class="sidebar-title">
          <h3>推荐的用户</h3>
        </div>
        <div class="widget-content">
          <ul>
            <li v-for="index in commendusers.slice(0,5)"  :key="index.UId"><a @click="getUserDetail('Expert', index.UId)">{{ index.UName }}</a></li>
          </ul>
        </div>
      </div>

    <!-- Instagram Widget -->
    <div class="sidebar-widget instagram-widget" v-if="this.$cookies.get('type')!=='Normal'">
    <div class="sidebar-title">
        <h3 >推荐的招标信息</h3>
    </div>
    <div class="widget-content">
        <div class="images-outer clearfix">
        <!--Image Box-->
        <figure class="image-box"><a href="static/images/gallery/1.jpg" class="instagram-image" data-caption="" data-fancybox="images" title="Image Title Here" data-fancybox-group="footer-gallery"><span class="overlay-box flaticon-plus"></span></a>
            <img src="static/images/gallery/instagram-1.jpg" alt=""></figure>
        <!--Image Box-->
        <figure class="image-box"><a href="static/images/gallery/2.jpg" class="instagram-image" data-caption="" data-fancybox="images" title="Image Title Here" data-fancybox-group="footer-gallery"><span class="overlay-box flaticon-plus"></span></a>
            <img src="static/images/gallery/instagram-2.jpg" alt=""></figure>
        <!--Image Box-->
        <figure class="image-box"><a href="static/images/gallery/3.jpg" class="instagram-image" data-caption="" data-fancybox="images" title="Image Title Here" data-fancybox-group="footer-gallery"><span class="overlay-box flaticon-plus"></span></a>
            <img src="static/images/gallery/instagram-3.jpg" alt=""></figure>
        <!--Image Box-->
        <figure class="image-box"><a href="static/images/gallery/4.jpg" class="instagram-image" data-caption="" data-fancybox="images" title="Image Title Here" data-fancybox-group="footer-gallery"><span class="overlay-box flaticon-plus"></span></a>
            <img src="static/images/gallery/instagram-4.jpg" alt=""></figure>
        <!--Image Box-->
        <figure class="image-box"><a href="static/images/gallery/1.jpg" class="instagram-image" data-caption="" data-fancybox="images" title="Image Title Here" data-fancybox-group="footer-gallery"><span class="overlay-box flaticon-plus"></span></a>
            <img src="static/images/gallery/instagram-5.jpg" alt=""></figure>
        <!--Image Box-->
        <figure class="image-box"><a href="static/images/gallery/2.jpg" class="instagram-image" data-caption="" data-fancybox="images" title="Image Title Here" data-fancybox-group="footer-gallery"><span class="overlay-box flaticon-plus"></span></a>
            <img src="static/images/gallery/instagram-6.jpg" alt=""></figure>
        </div>
    </div>
    </div>

    </aside>
</template>

<script>

import countTo from 'vue-count-to'
export default {
  name: "PersonSidebar",
  components: {
    countTo
  },
  data() {
    return {
      account:{},
      upload_resourcelist:[],
      buy_resourcelist:[],
      bid_list:[],
      up_number:0,
      buy_number:0,
      bid_number:0,
      commendusers:[],
      commendresources:[],
    }
  },
  created() {
    this.get_commend_users()
    this.get_commend_resources()
    this.get_account()
  },
  methods: {
    get_commend_resources(){
      var vm=this
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/7"
      }).then(resp=>{
        var resource=resp.data.data.items
        for(var i in resource){
          var RId=resource[i].id
          var RName=resource[i].title
          var RTime=resource[i].pubDate
          if(resource[i].cover!=="string")
            var RCover=resource[i].cover
          var RAuthorName=resource[i].author
          vm.commendresources.push({"Type":"Paper","RId":RId,"RName":RName,"RCover":RCover,"RTime":RTime,"RAuthorName":RAuthorName})
        }
      })
    },

    getUserDetail(Type,Id){
      this.$router.push({
        name:'UserDetail',
        params:{
          Type:Type,
          Id:Id
        }
      })
    },
    get_account() {
      var vm = this
      this.axios({
        method: 'post',
        url: this.GLOBAL.Blockchain_Base_Url+'/api/v1/queryAccount',
        data: {"Id": this.$cookies.get("id")}
      }).then(resp => {
        vm.account = resp.data.data[0]
        this.$cookies.set("score", this.account.Score)

        if(vm.account.Buy!==null){
          for (var i = 0; i < vm.account.Buy.length; i++) {
            this.buy_resourcelist.push(vm.account.Buy[i].id)
          }
        }
        this.buy_number=this.buy_resourcelist.length
        if(vm.account.Upload!==null){
          for (var i = 0; i < vm.account.Upload.length; i++) {
            if(vm.account.Upload[i].id.split("_")[0]!=="Solution")
              this.upload_resourcelist.push(vm.account.Upload[i].id)
          }
        }
        this.up_number=this.upload_resourcelist.length

        if(vm.account.Upload!==null){
          for (var i = 0; i < vm.account.Upload.length; i++) {
            if(vm.account.Upload[i].id.split("_")[0]==="Solution")
              this.bid_list.push(vm.account.Upload[i].id)
          }
        }
        this.bid_number=this.bid_list.length
      }).catch(error=>{
        console.log(error)
      })
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
    get_commend_users(){
      var vm=this
      this.axios({
        method:"get",
        url:this.GLOBAL.Service_Base_Url+"/rs/recommendation/getRS/1"
      }).then(resp=>{
        var users=resp.data.data.items
        for(var i in users){
          var UId=users[i].id
          var UName=users[i].name
          vm.commendusers.push({"UId":UId,"UName":UName})
        }
      })
    },
  },


}



</script>

<style scoped>

</style>
