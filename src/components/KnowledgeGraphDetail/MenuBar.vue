<template>
  <div>
    <el-row v-show="showBackButton" class="mb-2">
      <el-tooltip content="返回上一级" placement="left">
        <el-button type="primary" icon="iconfont icon-back" @click="back()" size="small" circle></el-button>
      </el-tooltip>
    </el-row>
    <el-row class="mb-2">
      <el-tooltip content="显示连线文字" placement="left">
        <el-button type="primary" icon="iconfont icon-guanxitu" @click="showLinkedLabel()" size="small" circle></el-button>
      </el-tooltip>
    </el-row>
    <el-row class="mb-2">
      <el-tooltip content="固定所有节点" placement="left">
        <el-button type="primary" icon="iconfont icon-guding" @click="fix()" size="small" circle></el-button>
      </el-tooltip>
    </el-row>
    <el-row class="mb-2">
      <el-tooltip content="隐藏节点" placement="left">
        <el-button type="primary" icon="iconfont icon-yincang" @click="hide()" size="small" circle></el-button>
      </el-tooltip>
    </el-row>
    <el-row class="mb-2">
      <el-tooltip content="全屏" placement="left">
        <el-button type="primary" icon="iconfont icon-quanping" @click="fullScreen()" size="small" circle></el-button>
      </el-tooltip>
    </el-row>
    <el-row class="mb-2">
      <el-tooltip content="放大" placement="left">
        <el-button type="primary" icon="iconfont icon-fangda" @click="zoomUp()" size="small" circle></el-button>
      </el-tooltip>
    </el-row>
    <el-row class="mb-2">
      <el-tooltip content="缩小" placement="left">
        <el-button type="primary" icon="iconfont icon-suoxiao" @click="zoomDown()" size="small" circle></el-button>
      </el-tooltip>
    </el-row>
  </div>
</template>

<script>
import screenfull from "screenfull"
import {DataSet} from "vis-network/standalone";
export default {
  name: "MenuBar",
  props: {
    showBackButton: Boolean,
    nodes: DataSet,
    edges: DataSet,
    back: Function,
    updateEdge: Function,
    updateAllNodesProperty: Function,
    getNetwork: Function,
    graph: ''
  },
  data() {
    return {
      fixed: false,
      edgeLabels: {}, // 储存隐藏起来的连线label
    }
  },
  methods: {
    showLinkedLabel() { // 显示/隐藏连线文字
      if (this.edges.length !== 0) {
        if (Object.keys(this.edgeLabels).length !== 0) { // 显示连线文字
          for (let id in this.edgeLabels) {
            let edge = this.edges.get(id)
            if (edge !== null) {
              edge.label = this.edgeLabels[id]
              this.updateEdge(id, edge)
            }
          }
          this.edgeLabels = {}
        } else { // 隐藏连线文字
          let ids = this.edges.getIds()
          for (let i in ids) {
            let id = ids[i]
            let edge = this.edges.get(id)
            this.edgeLabels[id] = edge.label
            edge.label = ''
            this.updateEdge(id, edge)
          }
        }
      }
    },
    fix() {
      this.fixed = !this.fixed
      this.updateAllNodesProperty({fixed: this.fixed})
    },
    hide() { // 隐藏选中节点或边
      let data = this.getNetwork().getSelection()
      if (data.nodes.length + data.edges.length !== 0) {
        this.nodes.remove(data.nodes)
        this.edges.remove(data.edges)
      } else {
        this.warn('请选中要隐藏的节点/边')
      }
    },
    fullScreen() { // 全屏模式切换
      if (screenfull.isEnabled) {
        screenfull.toggle(this.graph)
      }
    },
    zoomUp() { // 放大
      var network = this.getNetwork()
      network.moveTo({scale: network.getScale() + 0.2})
    },
    zoomDown() { // 缩小
      var network = this.getNetwork()
      if (network.getScale() < 0.1) { // 最小缩小为0.05
        this.warn('已缩小到最小')
      } else if (network.getScale() < 0.2) {
        network.moveTo({scale: 0.05})
      } else {
        network.moveTo({scale: network.getScale() - 0.2})
      }
    },
    warn(msg) {
      this.$message({message: msg, type: 'warning'})
    }
  }
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_3300529_ehpn3hsij98.css";
</style>
