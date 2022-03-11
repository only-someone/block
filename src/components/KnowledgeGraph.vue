<template xmlns="http://www.w3.org/1999/html">
  <div>
    <section class="page-title" style="background-image: url(/static/images/background/6.jpg);padding: 35px">
      <div class="auto-container">
        <div style="font-size:40px; color: white">知识图谱</div>
        <div class="text">KnowledgeGraph</div>
      </div>
    </section>
    <div style="font-size: 20px; margin-top: 30px">
      <knowledge-graph-legend-row></knowledge-graph-legend-row>
      <div style="width: 100%;height:800px;margin-top: 50px" id="mynetwork"></div>
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
  data () {
    return {
      network: null,
      nodes:"",
      edges:"",
    }
  },
  props:[
    'kg_id'
  ],
  mounted() {
    this.getGraph()//用于刷新，写完可删
  },
  watch: {
    kg_id(val, oldVal) {
      console.log(val)
      this.getGraph()
    }
  },
  methods: {
    getGraph(){
      let type = this.$route.params.Type.toLowerCase()
      if (this.kg_id.split('_')[0] === 'institution') this.kg_id = 'unit_' + this.kg_id.split('_')[1]
      console.log(this.kg_id+ "/" + type)
      this.axios({
        method:'get',
        url:this.GLOBAL.KG_url+"/kg/" + type +"/extract/" + this.kg_id
      }).then(resp=>{
        // console.log(resp)
        this.nodes=resp.data.nodes
        this.edges=resp.data.edges
        var container = document.getElementById("mynetwork");
        // console.log(this.nodes)
        // 突出显示当前节点
        for (let i = 0; i < this.nodes.length; i++) {
          if (this.nodes[i].id === this.kg_id) {
            this.nodes[i].shadow = {x: 0, y: 0, size: 30, color: "darkorange"}
            this.nodes[i].font = {bold: true, size: 20, color: "orange"}
            break
          }
        }
        //图例
        var data = {
          nodes: this.nodes,
          edges: this.edges,
        };
        var options = this.GLOBAL.options
        const network = new Network(container, data, options);
        console.log("测试控制台");
      })
    }
  }
}
</script>
<style scoped>

</style>
