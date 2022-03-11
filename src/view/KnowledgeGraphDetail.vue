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
                    <el-row justify="center" type="flex" class="mt-3 font-weight-bold" style="font-size:22px">
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
      nodesDic: {}, // 以kgId为key的节点
      nodes: [],
      edges: [],
      nodeInfo: [],
      nodeType: 'expe',
      nodeGroup: '',
      timer: '', // 在双击事件时取消单击事件
    }
  },
  mounted() {
    this.showGraph = false
    this.showInfo = false
  },
  watch: {
    nodes() {
      this.getGraph()
    },
    edges() {
      this.getGraph()
    }
  },
  methods: {
    goSearch(url) {
      // console.log(url)
      this.showInfo = false
      this.nodes = []
      this.edges = []
      this.axios({
        method: 'get',
        url: this.GLOBAL.KG_url + '/kg/' + url
      }).then(resp => {
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
        let nodes = {}
        for (let i in data) {
          if (i >= 10) break // 最多显示10个搜索结果
          let kgId = data[i].kgId
          let node = {group: kgId.split('_')[0], id: kgId, label: data[i].name, info: data[i]}
          this.nodesDic[kgId] = node
          this.nodes.push(node)
        }
        return nodes
      }
    },
    getGraph() {
      var container = document.getElementById("myNetwork");
      // console.log(nodes)
      //图例
      var data = {
        nodes: this.nodes,
        edges: this.edges,
      };
      var options = this.GLOBAL.options
      const network = new Network(container, data, options)
      var that = this
      // 单击节点显示详细信息
      network.on('click', function (params) {
        clearTimeout(that.timer)
        that.timer = window.setTimeout(function () {
          that.nodeInfo = that.nodesDic[params.nodes[0]].info
          // console.log(that.nodeInfo)
          that.showNodeInfo()
        }, 200)
      })
      // 取消选中，信息消失
      network.on('deselectNode', function () {
        that.showInfo = false
        that.nodeInfo = []
      })
      // 双击时折叠和展开
      network.on("doubleClick", function (params) {
        clearTimeout(that.timer) // 使单击事件不执行
        // console.log("doubleClickEvent:" + params)
        if (params.nodes.length !== 0) { //确定为节点双击事件
          that.showNextNodes(params.nodes[0])
        }
      });
    },
    showNodeInfo() {
      this.nodeType = this.nodeInfo['kgId'].split('_')[0]
      this.nodeGroup = this.GLOBAL.options.groups[this.nodeType]
      // console.log(that.nodeGroup)
      this.showInfo = true
      setTimeout(() => document.getElementById('info').scrollIntoView(true), 100)
    },
    // 显示/删除下级所有节点
    showNextNodes(nodeId) {
      this.getDirectlySubNodes(nodeId).then(data => {
        let subNodes = data.nodes
        // 判断是否有下级节点
        if (subNodes.length === 1) {
          this.$message({message: '已不存在下级节点', type: 'warning'})
        } else {
          let beforeLen = this.edges.length
          // 插入不存在的节点和边
          for (let i in subNodes) {
            if (this.nodesDic[subNodes[i].id] === undefined) {
              this.addNodeById(subNodes[i].id)
              this.addEdge(data.edges, nodeId, subNodes[i].id)
            }
          }
          if (beforeLen === this.edges.length) {
            this.$message({message: '已不存在下级节点', type: 'warning'})
          }
        }
        // console.log(this.nodes)
        // console.log(this.edges)
      })
    },
    // 获取某节点直属下级节点
    async getDirectlySubNodes(nodeId) {
      let kgId = this.nodesDic[nodeId].info.kgId
      let data = []
      await this.axios({
        method: 'get',
        url: this.GLOBAL.KG_url + '/kg/' + this.getTypeByKgId(kgId) + '/extractNext/' + kgId
      }).then(resp => {
        // console.log(resp.data)
        data = resp.data
      })
      return data
    },
    // 通过id获取节点并插入图谱
    addNodeById(kgId) {
      this.axios({
        method: 'get',
        url: this.GLOBAL.KG_url + '/kg/' + this.getTypeByKgId(kgId) + '/id/' + kgId
      }).then(resp => {
        this.dataProcess(resp.data)
      })
    },
    getTypeByKgId(kgId) {
      return this.GLOBAL.nodesType[kgId.split('_')[0]].value
    },
    // 从edges中找到id1和id2对应的edge并加入图谱
    addEdge(edges, id1, id2) {
      for (let i in edges) {
        let edge = edges[i]
        if ((edge.from === id1 && edge.to === id2) || (edge.from === id2 && edge.to === id1)) {
          if (!this.edges.includes(edge)) { // 边是否存在
            this.edges.push(edge)
          }
          break
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
