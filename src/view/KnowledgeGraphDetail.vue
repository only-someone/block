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
          <li><a href="#">系统信息</a></li>
          <li>知识图谱</li>
        </ul>
      </div>
    </section>
    <section>
      <div class="page-content-wrapper">
        <div class="auto-container">
          <div style="margin-top: 50px">
            <div class="card">
              <div class="card-body">
                <el-tabs v-model="activeName" type="card">
                  <el-tab-pane label="基础查询" name="first">
                    <basic-search @search="goSearch"></basic-search>
                  </el-tab-pane>
                  <el-tab-pane label="高级查询" name="second">
                    <advanced-search @search="goSearch"></advanced-search>
                  </el-tab-pane>
                </el-tabs>
              </div>
              <div class="card-body" v-show="showGraph">
<!--                <knowledge-graph-legend-row></knowledge-graph-legend-row>-->
                <knowledge-graph-legend-col></knowledge-graph-legend-col>
                <el-col :span="19" id="myNetwork" style="height: 660px"></el-col>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BasicSearch from "../components/KnowledgeGraphDetail/BasicSearch";
import KnowledgeGraphLegendRow from "../components/KnowledgeGraphDetail/KnowledgeGraphLegendRow";
import KnowledgeGraphLegendCol from "../components/KnowledgeGraphDetail/KnowledgeGraphLegendCol";
import {Network} from "vis-network/standalone";
import AdvancedSearch from "../components/KnowledgeGraphDetail/AdvancedSearch";
export default {
  name: "KnowledgeGraphDetail",
  components: {AdvancedSearch, KnowledgeGraphLegendCol, KnowledgeGraphLegendRow, BasicSearch},
  data() {
    return {
      activeName: 'first',
      showGraph: false,
      // nodes: [],
      // edges: []
    }
  },
  mounted() {
    this.showGraph = false
  },
  methods: {
    goSearch(url) {
      console.log(url)
      this.axios({
        method:'get',
        url:this.GLOBAL.KG_url + '/kg/' + url
      }).then(resp=> {
        // console.log(resp)
        if (resp.status !== 200) {
          this.showGraph = false
          this.$message.error('请输入正确的关键词')
        } else {
            this.dataProcess(resp.data)
          }
      })
    },
    dataProcess(data) {
      // 搜索结果为空
      // console.log(data)
      if (data.length === 0) {
        this.$message({
          message: '查询结果为空',
          type: 'warning'
        });
        this.showGraph = false
      } else {
        // data可能为实体list或实体对象
        if (!(data instanceof Array)) {
          data = [data]
        }
        // console.log(data)
        let nodes = []
        for (let i in data) {
          if (i >= 10) break // 最多显示10个搜索结果
          nodes.push({group: data[i].kgId.split('_')[0], id: data[i].kgId, label: data[i].name})
        }
        this.getGraph(nodes, [])
        this.showGraph = true
      }
    },
    getGraph(nodes, edges) {
      var container = document.getElementById("myNetwork");
      console.log(nodes)
      //图例
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = this.GLOBAL.options
      const network = new Network(container, data, options);
    }
  }
}
</script>

<style scoped>

</style>
