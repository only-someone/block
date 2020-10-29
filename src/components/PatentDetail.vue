<template>
  <div>
    <section class="shop-single-section sidebar-page-container">
      <div class="auto-container">
        <div class="row clearfix">

          <!--Content Column-->
          <div class="content-column col-lg-8 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="shop-single">
                <div class="inner-box">
                  <el-row>
                    <el-col :span="5"><div class="grid-content bg-purple-dark">专利名称</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple-light">{{PatentData.PatentName}}</div></el-col>

                  </el-row>
                  <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple-dark">专利编号</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-light">{{PatentData.PatentNumber}}</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple-dark">专利类型</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">{{PatentData.PatentType}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">专利申请日期</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple-light">{{PatentData.PatentDate}}</div></el-col>
                  </el-row>
                  <el-row >
                    <el-col :span="3" ><div class="grid-content bg-purple-dark">公开号</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-light">{{PatentData.PatentOpen}}</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple-dark">法律状态</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">{{PatentData.PatentState}}</div></el-col>
                    <el-col :span="4"><div class="grid-content bg-purple-dark">公开日</div></el-col>
                    <el-col :span="3"><div class="grid-content bg-purple-light">{{PatentData.PatentOpenDate}}</div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple-dark">专利简介</div></el-col>
                    <el-col :span="21" style="height: 100px" ><div class="grid-content bg-purple-dark">{{PatentData.PatentAbstract}}</div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple-dark">专利内容</div></el-col>
                    <el-col :span="21"  ><div class="grid-content bg-purple-dark">{{PatentData.PatentContent}}</div></el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="3"><div class="grid-content bg-purple-dark">主权项</div></el-col>
                    <el-col :span="21" style="height: 100px" ><div class="grid-content bg-purple-dark">{{PatentData.PatentRight}}</div></el-col>
                  </el-row>
                </div>
              </div>

              <!--Popular Category-->
              <!--            <div class="popular-category">-->
              <!--              <h2>Popular Categories</h2>-->
              <!--              <div class="row clearfix">-->

              <!--                &lt;!&ndash;Category Block&ndash;&gt;-->
              <!--                <div class="category-block">-->
              <!--                  <div class="inner-box">-->
              <!--                    <div class="image">-->
              <!--                      <img src="/static/images/resource/category-1.jpg" alt="" />-->
              <!--                      <div class="overlay-box">-->
              <!--                        <div class="overlay-inner">-->
              <!--                          <div class="content">-->
              <!--                            <h3><a href="blog-single.html">artwork</a></h3>-->
              <!--                          </div>-->
              <!--                        </div>-->
              <!--                      </div>-->
              <!--                    </div>-->
              <!--                  </div>-->
              <!--                </div>-->



            </div>
          </div>

          <!--Sidebar Column-->
          <div class="sidebar-column col-lg-4 col-md-12 col-sm-12">
            <img src="static/images/resource/shop-single.jpg" width="100%" height="500px" alt="" />
            <div class="inner-column">

              <!--Purchased Widget-->
              <div class="purchased-widget" style="margin-top: 40px">
                <div class="inner-box" style="text-align: center">
                  <div class="price" >积分7.00</div>
                  <button class="purchased-btn theme-btn"  >购买/下载</button>
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
  name: "PatentDetail",
  data() {
    return {
      PatentData: {
        PatentName: "基于知识图谱和区块链的数据资源交易平台",
        PatentNumber: 'ZD1231354',
        PatentType: '智慧城市',
        PatentAbstract:"基于知识图谱和区块链的数据资源交易平台基于知识图谱和区块链的数据资源交易平台基于知识图谱和区块链的数据资源交易平台基于知识图谱和区块链的数据资源交易平台基于知识图谱和区块链的数据资源交易平台基于知识图谱和区块链的数据资源交易平台基于知识图谱和区块链的数据资源交易平台基于知识图谱和区块链的数据资源交易平台",
        PatentDate:"2016-05-02",
        PatentOpen:"HZYH1111111",
        PatentOpenDate:"2018-05-02",
        PatentState:"公开",
        PatentRight:"无",
        PatentContent:"安康肌肤接收了开发建设两份简历大赛",
        PatentGraph:"Hash值",
        PatentFile:"Hash值",
      },
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
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
