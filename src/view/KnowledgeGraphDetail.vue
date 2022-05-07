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
            <el-card class="card search">
              <div class="card-body">
                <el-tabs v-model="activeName" type="card" style="background-color: rgba(255,255,255,0.5)">
                  <el-tab-pane label="基础查询" name="first">
                    <basic-search @search="goSearch" :style="searchStyle"></basic-search>
                  </el-tab-pane>
                  <el-tab-pane label="高级查询" name="second">
                    <advanced-search @search="goSearch" :style="searchStyle"></advanced-search>
                  </el-tab-pane>
                  <el-tab-pane label="智能补全" name="third">
                    <completion-search @search="completion" :style="searchStyle"></completion-search>
                  </el-tab-pane>
                </el-tabs>
              </div>
              <div class="card ml-3 mr-3" v-show="showGraph" id="graph" ref="graph">
                <el-tooltip content="提示：单击节点显示详细信息，双击节点展开下层节点" placement="left" class="tip">
                  <i class="el-icon-info"></i>
                </el-tooltip>
                <div class="menu-bar">
                  <menu-bar :show-back-button="showBackButton"></menu-bar>
                </div>
                <div class="card-body" id="myNetwork" style="height: 400px" v-loading="loading">
                </div>
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
                <el-dialog title='添加节点' :visible.sync='addDialogFormVisible'>
                  <el-form ref="addForm" :model = 'addForm'>
                    <el-form-item label="资源类型" label-position="left" required>
                      <el-select v-model="addForm.group" placeholder="请选择资源类型">
                        <el-option v-for="(item, key, i) in this.GLOBAL.nodesType"
                                   :label="item.label"
                                   :value="key"
                                   :key="i"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item v-for="(item, i) in this.GLOBAL.nodesType[addForm.group].properties"
                                  :label="item.label"
                                  label-width="80px"
                                  :key="i"
                                  label-position="left" required>
                      <el-input v-model="addForm[item.value]" ></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button id="addDialogQuitButton">取 消</el-button>
                    <el-button type="primary" id="addDialogEnterButton">确 定</el-button>
                  </div>
                </el-dialog>
                <el-dialog title='编辑节点' :visible.sync='editDialogFormVisible'>
                  <el-form ref="editForm" :model = 'editForm'>
                    <el-form-item label="资源类型" label-position="left" required>
                      <el-select v-model="editForm.group" placeholder="请选择资源类型" :disabled="true"></el-select>
                    </el-form-item>
                    <el-form-item v-for="(item, i) in this.GLOBAL.nodesType[editForm.group].properties"
                                  :label="item.label"
                                  label-width="80px"
                                  :key="i"
                                  label-position="left" required>
                      <el-input v-model="editForm.info[item.value]" ></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button id="editDialogQuitButton">取 消</el-button>
                    <el-button type="primary" id="editDialogEnterButton">确 定</el-button>
                  </div>
                </el-dialog>
              </div>
              <div id='completionTable' v-show="showCompletion" class="completion">
                <el-table :data="completionData" max-height="300" border class="completion-table">
                  <el-table-column prop="institutions" label="单位" width="180"></el-table-column>
                  <el-table-column prop="scores" label="scores" width="100"></el-table-column>
                </el-table>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BasicSearch from "../components/KnowledgeGraphDetail/BasicSearch";
import {DataSet, Network} from "vis-network/standalone";
import AdvancedSearch from "../components/KnowledgeGraphDetail/AdvancedSearch";
import MenuBar from "../components/KnowledgeGraphDetail/MenuBar"
import CompletionSearch from "../components/KnowledgeGraphDetail/CompletionSearch";

var network

export default {
  name: "KnowledgeGraphDetail",
  components: {MenuBar, AdvancedSearch, BasicSearch, CompletionSearch},
  data() {
    return {
      activeName: 'first',
      showGraph: false, // 是否显示图谱
      showInfo: false, // 是否显示节点信息
      showCompletion: false, // 是否显示智能补全的内容
      completionData: [],
      options: {}, // 图谱的选项
      nodes: '',
      edges: '',
      nodeInfo: [],
      nodeType: 'expe',
      nodeGroup: '',
      timer: '', // 在双击事件时取消单击事件
      // 节点添加对话框
      addDialogFormVisible: false,
      addForm: {group: 'expe'},
      // 节点编辑对话框
      editDialogFormVisible: false,
      editForm: {group: 'expe', info: {}},
      showBackButton: false,
      beforeNodes: '', // 扩展前的节点
      beforeEdges: '', // 扩展前的边
      loading: true,
      searchStyle: {
        margin: '150px',
        textAlign: 'center'
      },
    }
  },
  mounted() {
    this.showGraph = false
    this.showInfo = false
    this.showCompletion = false
    this.loading = true
    this.getOptions()
  },
  watch: {
    activeName() {
      this.showGraph = false
      this.showCompletion = false
    },
    showGraph() {
      if (this.showGraph) {
        delete this.searchStyle.margin
      } else {
        this.searchStyle.margin = '150px'
      }
    },
    showCompletion() {
      if (this.showCompletion) {
        delete this.searchStyle.margin
      } else {
        this.searchStyle.margin = '150px'
      }
    }
  },
  methods: {
    // 为图谱设置编辑选项
    getOptions() {
      for (let key in this.GLOBAL.options) {
        this.options[key] = this.GLOBAL.options[key]
      }
      let that = this
      this.options.locale = 'cn'
      this.options.manipulation = {
        enabled: true,
        addNode: function (data, callback) {
          // console.log(data)
          that.addNode(data, callback)
        },
        editNode: function (data, callback) {
          // console.log(data)
          that.editNode(data, callback)
        },
        deleteNode: function (data, callback) {
          // console.log(data)
          that.deleteNode(data, callback)
        },
        addEdge: function (data, callback) {
          // console.log(data)
          that.addEdge(data, callback)
        },
        editEdge: false,
        deleteEdge: function (data, callback) {
          // console.log(data)
          that.deleteEdge(data, callback)
        }
      }
      // console.log(this.options)
    },
    addNode(data, callback) {
      this.addDialogFormVisible = true
      this.addForm = {group: 'expe'}
      document.getElementById('addDialogEnterButton').onclick = this.clickAddNodeButton
        .bind(this, 'addForm', data, callback)
      document.getElementById('addDialogQuitButton').onclick = this.clickAddNodeQuitButton
        .bind(this, callback)
    },
    editNode(data, callback) {
      this.editForm = {group: data.group, info: {}}
      let properties = this.GLOBAL.nodesType[data.group].properties
      for (let key in data.info) {
        if (key === 'kgId') continue
        // 响应式属性，双向绑定
        this.$set(this.editForm.info, properties[key].value, data.info[key])
      }
      // console.log(this.editForm)
      this.editDialogFormVisible = true
      document.getElementById('editDialogEnterButton').onclick = this.clickEditNodeButton
        .bind(this, 'editForm', data, callback)
      document.getElementById('editDialogQuitButton').onclick = this.clickEditNodeQuitButton
        .bind(this, callback)
    },
    deleteNode(data, callback) {
      let kgId = data.nodes[0]
      // 在数据库中删除节点
      this.axios({
        method: 'get',
        url: this.GLOBAL.KG_url + '/kg/' + this.getTypeByKgId(kgId) + '/delete/' + kgId,
      }).then(resp => {
        // console.log(resp)
        if (resp.status !== 200 || resp.data.code === 444) {
          this.error('删除节点失败,请先删除当前节点所连关系')
          callback()
        } else {
          this.nodes.remove(kgId)
          this.showInfo = false
          callback(data)
        }
      })
    },
    addEdge(data, callback) {
      data.label = this.getRelationLabel(data.from, data.to)
      if (data.label === null) {
        this.error('当前两类节点间不存在可添加的关系')
      } else {
        this.axios({
          method: 'post',
          url: this.GLOBAL.KG_url + '/kg/relation/insert',
          data: data
        }).then(resp => {
          if (resp.status !== 200 || resp.data.code === 444) {
            this.error('添加关系失败')
            callback()
          } else {
            data.id = resp.data
            this.edges.add(data)
            callback(data)
          }
        })
      }
    },
    deleteEdge(data, callback) {
      let edge = this.edges.get(data.edges[0])
      // 在数据库中删除关系
      this.axios({
        method: 'post',
        url: this.GLOBAL.KG_url + '/kg/relation/deleteByHRT',
        data: edge
      }).then(resp => {
        if (resp.status !== 200 || resp.data.code === 444) {
          this.error('删除关系失败')
          callback()
        } else {
          this.edges.remove(data.edges[0])
          callback(data)
        }
      })
    },
    clickAddNodeButton(form, data, callback) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.addDialogFormVisible = false
          data.group = this.addForm.group
          let keys = Object.keys(this.addForm)
          // console.log(keys)
          data.label = this.addForm[keys[1]]
          let info = {}
          for (let i = 1; i < keys.length; i++) {
            let key = keys[i]
            info[key] = this.addForm[key]
          }
          this.insertNodeToDB(data, info, callback)
        } else {
          return false
        }
      })
    },
    clickEditNodeButton(form, data, callback) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.editDialogFormVisible = false
          this.editForm.info['kg_id'] = data.id
          this.updateNodeToDB(data, this.editForm.info, callback)
        } else {
          return false
        }
      })
    },
    clickEditNodeQuitButton(callback) {
      this.editDialogFormVisible = false
      callback()
    },
    clickAddNodeQuitButton(callback) {
      this.addDialogFormVisible = false
      callback()
    },
    // 在数据库中插入节点
    insertNodeToDB(data, info, callback) {
      this.axios({
        method: 'post',
        url: this.GLOBAL.KG_url + '/kg/' + this.getTypeByKgId(data.group) + '/insert',
        data: info
      }).then(resp => {
        if (resp.status !== 200 || resp.data.code === 444) {
          this.error('插入节点失败')
          callback()
        } else {
          data.id = resp.data.kgId
          // 添加节点info信息
          data.info = resp.data
          // console.log(data)
          this.addNodeToNodes(data)
          callback(data)
        }
      })
    },
    // 在数据库中更新节点
    updateNodeToDB(data, info, callback) {
      this.axios({
        method: 'post',
        url: this.GLOBAL.KG_url + '/kg/' + this.getTypeByKgId(data.group) + '/update',
        data: info
      }).then(resp => {
        // console.log(resp)
        if (resp.status !== 200 || resp.data.code === 444) {
          this.error('更新节点失败')
          callback()
        } else {
          data.info = resp.data
          data.label = resp.data.name
          // console.log(data)
          this.updateNodeToNodes(data)
          callback(data)
        }
      })
    },
    goSearch(url) {
      // console.log(url)
      this.clearNetwork()
      this.axios({
        method: 'get',
        url: this.GLOBAL.KG_url + '/kg/' + url
      }).then(resp => {
        // console.log(resp)
        if (resp.status !== 200) {
          this.showGraph = false
          this.error('请输入正确的关键词')
        } else {
          this.dataProcess(resp.data)
          if (this.nodes.length === 0) {
            this.warn('查询结果为空')
            this.showGraph = false
          } else {
            this.getGraph()
            this.showGraph = true
            // 使搜索结果显示在页面中间
            setTimeout(() => document.getElementById('graph').scrollIntoView(true), 100)
          }
        }
      })
    },
    clearNetwork() {
      this.showInfo = false
      this.showBackButton = false
      this.nodes = new DataSet()
      this.edges = new DataSet()
      this.beforeNodes = new DataSet()
      this.beforeEdges = new DataSet()
    },
    dataProcess(data) {
      // 搜索结果为空
      // console.log(data)
      if (data.length !== 0) {
        // data可能为实体list或实体对象
        if (!(data instanceof Array)) {
          data = [data]
        }
        // console.log(data)
        for (let i in data) {
          if (i >= 10) break // 最多显示10个搜索结果
          let kgId = data[i].kgId
          let node = {group: kgId.split('_')[0], id: kgId, label: data[i].name, info: data[i]}
          this.addNodeToNodes(node)
        }
      }
    },
    addNodeToNodes(node) {
      if (this.nodes.get(node.id) === null) {
        this.nodes.add(node)
      }
    },
    updateNodeToNodes(data) {
      // 找到对应节点并更新
      this.nodes.update(data)
      // 更新节点详细信息
      this.nodeInfo = data.info
    },
    getRelationLabel(from, to) {
      from = this.GLOBAL.nodesType[from.split('_')[0]].id
      to = this.GLOBAL.nodesType[to.split('_')[0]].id
      for (let i in this.GLOBAL.relationType) {
        let relation = this.GLOBAL.relationType[i]
        if (from === relation.from && to === relation.to) {
          return relation.type
        }
      }
      return null
    },
    getGraph() {
      var container = document.getElementById("myNetwork");
      // console.log(nodes)
      //图例
      var data = {
        nodes: this.nodes,
        edges: this.edges,
      };
      network = new Network(container, data, this.options)
      var that = this
      // 单击节点显示详细信息
      network.on('click', function (params) {
        clearTimeout(that.timer)
        if (params.nodes.length !== 0) { // 确认为节点单击事件
          that.timer = window.setTimeout(function () {
            that.nodeInfo = that.nodes.get(params.nodes[0]).info
            // console.log(that.nodeInfo)
            that.showNodeInfo()
          }, 200)
        }
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
      })
      network.on("dragEnd", function(params){
        if (params.nodes && params.nodes.length > 0) {
          // 拖拽时禁止物理布局，优化可视化体验
          that.updateAllNodesProperty({physics: false});
        }
      })
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
        if (subNodes === undefined || subNodes.length === 1) {
          this.warn('已不存在下级节点')
        } else {
          if (!this.showBackButton) {
            let that = this
            this.nodes.forEach(function(item) {
              that.beforeNodes.add(item)
            })
            this.nodes.clear()
            this.edges.forEach(function (item) {
              that.beforeEdges.add(item)
            })
            this.edges.clear()
            this.showBackButton = true
          }
          let beforeLen = this.edges.length
          // 插入不存在的节点和边
          for (let i in subNodes) {
            if (this.nodes.get(subNodes[i].id) === null) {
              this.addNodeById(subNodes[i].id)
              this.findAndAddEdge(data.edges, nodeId, subNodes[i].id)
            }
          }
          if (beforeLen === this.edges.length) {
            this.warn('已不存在下级节点')
          }
        }
        // console.log(this.nodes)
        // console.log(this.edges)
        // console.log(this.beforeNodes.getIds())
      })
    },
    // 获取某节点直属下级节点
    async getDirectlySubNodes(kgId) {
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
    findAndAddEdge(edges, id1, id2) {
      for (let i in edges) {
        let edge = edges[i]
        if ((edge.from === id1 && edge.to === id2) || (edge.from === id2 && edge.to === id1)) {
          if (this.edges.get(edge.id) === null) { // 边是否存在
            this.edges.add(edge)
          }
          break
        }
      }
    },
    back() {
      let that = this
      this.nodes.clear()
      this.beforeNodes.forEach(function (item) {
        that.nodes.add(item)
      })
      this.beforeNodes.clear()
      this.edges.clear()
      this.beforeEdges.forEach(function (item) {
        that.edges.add(item)
      })
      this.beforeEdges.clear()
      this.showBackButton = false
      this.showInfo = false
    },
    // update不能触发图谱自动更新，故先remove再添加
    updateNode(id, node) {
      this.nodes.remove(id)
      this.node.add(node)
    },
    updateEdge(id, edge) {
      this.edges.remove(id)
      this.edges.add(edge)
    },
    updateAllNodesProperty(property) {
      let ids = this.nodes.getIds()
      for (let i in ids) {
        network.clustering.updateClusteredNode(ids[i], property);
      }
    },
    getNetwork() {
      return network;
    },
    completion(data) {
      // console.log(data)
      this.completionData = []
      for (let i in data['institutions']) {
        this.completionData.push({'institutions': data['institutions'][i], 'scores': data['scores'][i]})
      }
      // console.log(this.completionData)
      if (this.completionData.length > 0) {
        this.showCompletion = true
        // 使搜索结果显示在页面中间
        setTimeout(() => document.getElementById('completionTable').scrollIntoView(true), 100)
      } else {
        this.showCompletion = false
      }
    },
    warn(msg) {
      this.$message({message: msg, type: 'warning'})
    },
    error(msg) {
      this.$message.error(msg)
    }
  }
}
</script>

<style scoped>
.search {
  background-image: url(/static/images/graph.png);
  background-size: 100%;
}

.tip {
  position: absolute;
  color: grey;
  /*font-family: "微软雅黑 Light";*/
  top: 12px;
  right: 10px;
  z-index: 99;
}

.menu-bar {
  position: absolute;
  right: 20px;
  top: 50px;
  height: 100%;
  z-index: 990
}

.completion {
  background-color: rgba(255,255,255,0.5);
  margin-top: -20px;
  height: 320px
}

.completion-table {
  width: 300px;
  margin: auto;
}
</style>
