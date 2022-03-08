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
              <div class="card ml-3 mr-3" v-show="showGraph" id="graph">
<!--                <knowledge-graph-legend-row></knowledge-graph-legend-row>-->
<!--                <knowledge-graph-legend-col></knowledge-graph-legend-col>-->
                <div class="card-body" id="myNetwork" style="height: 400px"></div>
                <el-row class="card-footer" v-show="showInfo" id="info">
                  <el-col :span="6">
                    <el-row justify="center" type="flex">
                        <img :src="this.nodeGroup.image"
                             :class="'img_'+this.nodeType"
                             style="height: 100px; width: 100px"/>
                    </el-row>
                    <el-row justify="center" type="flex" class="mt-3 font-weight-bold">
                      {{this.GLOBAL.nodesType[this.nodeType].label}}
                    </el-row>
                  </el-col>
                  <el-col :span="18" class="border-left">
                    <table class="table table-sm table-borderless mt-md-0 mt-3 ml-2">
                      <tbody  v-for="(value, key, i) in nodeInfo" >
                      <tr>
                        <th>{{key}}</th>
                        <td>{{value}}
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </el-col>
                </el-row>
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
      showGraph: false, // 是否显示图谱
      showInfo: false, // 是否显示节点信息
      // nodes: [],
      // edges: []
      nodeInfo: [],
      nodeType: 'expe',
      nodeGroup: ''
    }
  },
  mounted() {
    this.showGraph = false
    this.showInfo = false
  },
  methods: {
    goSearch(url) {
      // console.log(url)
      this.showInfo = false
      this.axios({
        method:'get',
        url:this.GLOBAL.KG_url + '/kg/' + url
      }).then(resp=> {
        // console.log(resp)
        if (resp.status !== 200) {
          this.showGraph = false
          this.$message.error('请输入正确的关键词')
        } else {
          let nodes = this.dataProcess(resp.data)
          if (nodes === null) {
            this.$message({
              message: '查询结果为空',
              type: 'warning'
            });
            this.showGraph = false
          } else {
            this.getGraph(nodes, [])
            this.showGraph = true
            // 使搜索结果显示在页面中间
            setTimeout(() => document.getElementById('graph').scrollIntoView(true), 100)
          }
        }
      })
    },
    dataProcess(data) {
      // 搜索结果为空
      // console.log(data)
      if (data.length === 0) {
        return null
      } else {
        // data可能为实体list或实体对象
        if (!(data instanceof Array)) {
          data = [data]
        }
        // console.log(data)
        let nodes = []
        for (let i in data) {
          if (i >= 10) break // 最多显示10个搜索结果
          let node = data[i]
          nodes.push({group: node.kgId.split('_')[0], id: i, label: node.name, info: node})
        }
        return nodes
      }
    },
    getGraph(nodes, edges) {
      var container = document.getElementById("myNetwork");
      // console.log(nodes)
      //图例
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = this.GLOBAL.options
      const network = new Network(container, data, options)
      var that = this
      // 选中节点显示详细信息
      network.on('click', function(params) {
        that.nodeInfo = nodes[params.nodes[0]].info
        // console.log(that.nodeInfo)
        that.nodeType = that.nodeInfo['kgId'].split('_')[0]
        that.nodeGroup = options.groups[that.nodeType]
        // console.log(that.nodeGroup)
        that.showInfo = true
        setTimeout(() => document.getElementById('info').scrollIntoView(true), 100)
      })
      // 取消选中，信息消失
      network.on('deselectNode', function () {
        that.showInfo = false
        that.nodeInfo = []
      })
    },
  }
}
</script>

<style scoped>

</style>
