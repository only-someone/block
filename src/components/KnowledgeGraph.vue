<template xmlns="http://www.w3.org/1999/html">
  <div>
    <section class="page-title" style="background-image: url(/static/images/background/6.jpg);padding: 35px">
      <div class="auto-container">
        <div style="font-size:40px; color: white">知识图谱</div>
        <div class="text">KnowledgeGraph</div>
      </div>
    </section>
    <div class="card mt-1 mb-1" style="font-size: 20px">
      <knowledge-graph-legend-row></knowledge-graph-legend-row>
      <div class="card" style="width: 100%;height:800px;" id="mynetwork"></div>
    </div>
  </div>
</template>

<script>
import { DataSet, Network } from "vis-network/standalone";
import "../../static/css/base_color.css";
import KnowledgeGraphLegendRow from "./KnowledgeGraphDetail/KnowledgeGraphLegendRow";
export default {
  name: 'VisNetWork',
  components: {KnowledgeGraphLegendRow},
  props:[
    'kg_id'
  ],
  mounted() {
    this.getGraph()//用于刷新，写完可删
  },
  watch: {
    kg_id() {
      // console.log(val)
      this.getGraph()
    }
  },
  methods: {
    getGraph(){
      let type = this.$route.params.Type.toLowerCase()
      if (this.kg_id.split('_')[0] === 'institution') this.kg_id = 'unit_' + this.kg_id.split('_')[1]
      // console.log(this.kg_id+ "/" + type)
      this.axios({
        method:'get',
        url:this.GLOBAL.KG_url+"/kg/" + type +"/extract/" + this.kg_id
      }).then(resp=>{
        // console.log(resp)
        var nodes = new DataSet(resp.data.nodes)
        var edges = new DataSet(resp.data.edges)
        var container = document.getElementById("mynetwork");
        // console.log(this.nodes)
        // 突出显示当前节点
        var node = nodes.get(this.kg_id)
        node.shadow = {x: 0, y: 0, size: 30, color: "darkorange"}
        node.font = {bold: true, size: 20, color: "orange"}
        nodes.update(node)
        //图例
        var data = {
          nodes: nodes,
          edges: edges,
        };
        var options = this.GLOBAL.options
        const network = new Network(container, data, options);
        network.on("dragEnd", function(params){
          if (params.nodes && params.nodes.length > 0) {
            // 拖拽时禁止物理布局，优化可视化体验
            nodes.forEach(function (node) {
              network.updateClusteredNode(node.id, {physics: false})
            })
          }
        })
      })
    }
  }
}
</script>
<style scoped>

</style>
