<template xmlns="http://www.w3.org/1999/html">
  <div>
    <el-card style="height:700px; margin: 20px">
      <knowledge-graph-legend-col></knowledge-graph-legend-col>
      <el-col :span="18" id="mynetwork" style="height: 660px" v-loading="loading"></el-col>
    </el-card>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card style="margin-left: 20px">
          <div id="statisticsNode" style="height: 400px"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card style="margin-right: 20px">
          <p class="font">关系统计(共{{this.edges.length}}个关系)</p>
          <div id="statisticsEdge" style="height: 352px"></div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import {Network} from "vis-network/standalone";
import "../../static/css/base_color.css";
import * as echarts from 'echarts';
import KnowledgeGraphLegendCol from "./KnowledgeGraphDetail/KnowledgeGraphLegendCol";

export default {
  name: 'HomeKnowledgeGraph',
  components: {KnowledgeGraphLegendCol},
  data() {
    return {
      network: null,
      nodes: "",
      edges: "",
      list: ['专家', '机构', '论文', '专利', '成果', '案例', '软著', '需求', '方案'],
      loading: true
    }
  },
  mounted() {
    this.getGraph()//用于刷新，写完可删
    this.loading = true
  },
  methods: {
    getGraph() {
      this.axios({
        method: 'get',
        url: this.GLOBAL.KG_url + "/kg/institution/extract/unit_9895"
      }).then(resp => {
        // console.log(resp)
        this.nodes = resp.data.nodes
        this.edges = resp.data.edges
        this.getStatisticsNode()
        this.getStatisticsEdge()
        var container = document.getElementById("mynetwork");
        // console.log(this.nodes)
        //图例
        var data = {
          nodes: this.nodes,
          edges: this.edges,
        };
        var options = this.GLOBAL.options
        const network = new Network(container, data, options);
      })
    },
    getStatisticsNode() {
      var chartDom = document.getElementById('statisticsNode')
      var myChart = echarts.init(chartDom)
      var option = {
        title: {
          text: '节点统计(共' + this.nodes.length + '个节点)',
          // left: 'center'
        },
        tooltip: {
          trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        // legend: {
        //   left: 'center',
        //   top: 'bottom',
        //   data: this.list
        // },
        series: [{
          name: 'Node',
          type: 'pie',
          radius: [20, 140],
          roseType: 'area',
          itemStyle: {
            borderRadius: 5
          },
          data: this.getStatisticsNodeData()
        }]
      }
      option && myChart.setOption(option)
    },
    getStatisticsEdge() {
      var container = document.getElementById("statisticsEdge");
      var options = JSON.parse(JSON.stringify(this.GLOBAL.options))
      options.physics.enabled = false
      options.groups.unit.size = 25
      for (let group in options.groups) {
        options.groups[group].font.size = 15
      }
      options.edges.smooth = {type: 'continuous'}
      const network = new Network(container, this.getStatisticsEdgeData(), options);
    },
    getStatisticsNodeData() {
      var data = []
      for (let i in this.list) {
        data.push({value: 0, name: this.list[i]})
      }
      for (let i in this.nodes) {
        data[this.groupToType(this.nodes[i].group)].value++
      }
      // 不显示数量为0的节点
      for (let i in data) {
        if (data[i].value === 0) {
          data[i].value = null
        }
      }
      // console.log(data)
      return data
    },
    getStatisticsEdgeData() {
      var nodes = [], temp = []
      for (let i in this.nodes) {
        let group = this.nodes[i].group
        let name = this.list[this.groupToType(group)]
        if (!temp.includes(name)) {
          temp.push(name);
          nodes.push({group: group, id: group, label: name})
        }
      }
      // console.log(nodes)
      var edges = [], times = []
      for (let i in this.edges) {
        let from = this.edges[i].from.split('_')[0], to = this.edges[i].to.split('_')[0]
        let find = 0;
        for (let j in edges) {
          if (from === edges[j].from && to === edges[j].to) {
            times[j]++;
            find = 1;
            break;
          }
        }
        if (!find) {
          edges.push({from: from, to: to, label: this.edges[i].label})
          times.push(1)
        }
      }
      for (let i in edges) {
        edges[i].label += '(' + times[i] + ')'
      }
      // console.log(edges)
      return {nodes: nodes, edges: edges}
    },
    groupToType(group) {
      switch(group) {
        case "expe": return 0
        case "unit": return 1
        case "pape": return 2
        case "pate": return 3
        case "achi": return 4
        case "case": return 5
        case "soft": return 6
        case "requ": return 7
        case "solu": return 8
        default: console.log("Parse node.group error!"); return -1
      }
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
.font {
  color: #616161;
  font-style: normal;
  font-weight: bolder;
  font-family: sans-serif;
  font-size: 18px;
}
</style>
