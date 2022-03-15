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
                    <el-button @click="addDialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" id="addDialogEnterButton">确 定</el-button>
                  </div>
                </el-dialog>
                <el-dialog title='编辑节点' :visible.sync='editDialogFormVisible'>
                  <el-form ref="editForm" :model = 'editForm'>
                    <el-form-item label="资源类型" label-position="left" required>
                      <el-select v-model="editForm.group" placeholder="请选择资源类型" :disabled="true">
<!--                        <el-option v-for="(item, key, i) in this.GLOBAL.nodesType"-->
<!--                                   :label="item.label"-->
<!--                                   :value="key"-->
<!--                                   :key="i"></el-option>-->
                      </el-select>
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
                    <el-button @click="editDialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" id="editDialogEnterButton">确 定</el-button>
                  </div>
                </el-dialog>
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
      options: {}, // 图谱的选项
      nodesDic: {}, // 以kgId为key的节点
      nodes: [],
      edges: [],
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
    }
  },
  mounted() {
    this.showGraph = false
    this.showInfo = false
    this.getOptions()
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
    // 为图谱设置编辑选项
    getOptions() {
      for (let key in this.GLOBAL.options) {
        this.options[key] = this.GLOBAL.options[key]
      }
      let that = this
      this.options.locale = 'cn'
      this.options.physics.barnesHut.gravitationalConstant = -2000
      this.options['manipulation'] = {
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
        }
      }
      // console.log(this.options)
    },
    addNode(data, callback) {
      this.addDialogFormVisible = true
      this.addForm = {group: 'expe'}
      document.getElementById('addDialogEnterButton').onclick = this.clickAddNodeButton
        .bind(this, 'addForm', data, callback)
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
    },
    deleteNode(data, callback) {
      let kgId = data.nodes[0]
      delete this.nodesDic.kgId
      let idx = this.findNodeIdxById(kgId)
      this.nodes = this.nodes.splice(0, idx).concat(this.nodes.splice(idx+1))
      this.deleteNodeFromDB(kgId)
      this.showInfo = false
      callback(data)
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
    // 在数据库中插入节点
    insertNodeToDB(data, info, callback) {
      this.axios({
        method: 'post',
        url: this.GLOBAL.KG_url + '/kg/' + this.getTypeByKgId(data.group) + '/insert',
        data: info
      }).then(resp => {
        if (resp.status !== 200) {
          this.$message.error('插入节点失败')
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
        if (resp.status !== 200) {
          this.$message.error('更新节点失败')
        } else {
          data.info = resp.data
          data.label = resp.data.name
          // console.log(data)
          this.updateNodeToNodes(data)
          callback(data)
        }
      })
    },
    // 在数据库中删除节点
    deleteNodeFromDB(kgId) {
      this.axios({
        method: 'get',
        url: this.GLOBAL.KG_url + '/kg/' + this.getTypeByKgId(kgId) + '/delete/' + kgId,
      }).then(resp => {
        if (resp.status !== 200) {
          this.$message.error('删除节点失败')
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
    clearNetwork() {
      this.showInfo = false
      this.nodes = []
      this.nodesDic = []
      this.edges = []
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
          this.addNodeToNodes(node)
        }
        return nodes
      }
    },
    addNodeToNodes(node) {
      if (this.nodesDic[node.id] === undefined) {
        this.nodesDic[node.id] = node
        this.nodes.push(node)
      }
    },
    updateNodeToNodes(data) {
      this.nodesDic[data.id] = data
      // 找到对应节点并更新
      this.nodes[this.findNodeIdxById(data.id)] = data
      // 更新节点详细信息
      this.nodeInfo = data.info
    },
    findNodeIdxById(id) {
      for (let i in this.nodes) {
        if (this.nodes[i].id === id) {
          return i
        }
      }
      return -1
    },
    getGraph() {
      var container = document.getElementById("myNetwork");
      // console.log(nodes)
      //图例
      var data = {
        nodes: this.nodes,
        edges: this.edges,
      };
      const network = new Network(container, data, this.options)
      var that = this
      // 单击节点显示详细信息
      network.on('click', function (params) {
        clearTimeout(that.timer)
        if (params.nodes.length !== 0) { // 确认为节点单击事件
          that.timer = window.setTimeout(function () {
            that.nodeInfo = that.nodesDic[params.nodes[0]].info
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
        if (subNodes === undefined || subNodes.length === 1) {
          this.$message({message: '已不存在下级节点', type: 'warning'})
        } else {
          let beforeLen = this.edges.length
          // 插入不存在的节点和边
          for (let i in subNodes) {
            if (this.nodesDic[subNodes[i].id] === undefined) {
              this.addNodeById(subNodes[i].id)
              this.findAndAddEdge(data.edges, nodeId, subNodes[i].id)
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
    findAndAddEdge(edges, id1, id2) {
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
