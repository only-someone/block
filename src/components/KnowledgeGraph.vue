<template>
  <div style="width: 100%;font-size: 10px;" >
    <el-row  type="flex" justify="center">
      <el-col :span="2"><el-image src="../static/KnowledgeIcon/expe.png"></el-image></el-col>
      <el-col :span="2">专家</el-col>
      <el-col :span="2"><el-image src="../static/KnowledgeIcon/unit.png"></el-image></el-col>
      <el-col :span="2">机构</el-col>
      <el-col :span="2"><el-image src="../static/KnowledgeIcon/pape.png"></el-image></el-col>
      <el-col :span="2">论文</el-col>
      <el-col :span="2"><el-image src="../static/KnowledgeIcon/pate.png"></el-image></el-col>
      <el-col :span="2">专利</el-col>
    </el-row>
    <el-row  type="flex" justify="center">
      <el-col :span="2"><el-image src="../static/KnowledgeIcon/achi.png"></el-image></el-col>
      <el-col :span="2">成果</el-col>
      <el-col :span="2"><el-image src="../static/KnowledgeIcon/case.png"></el-image></el-col>
      <el-col :span="2">案例</el-col>
      <el-col :span="2"><el-image src="../static/KnowledgeIcon/soft.png"></el-image></el-col>
      <el-col :span="2">软著</el-col>
      <el-col :span="2"><el-image src="../static/KnowledgeIcon/requ.png"></el-image></el-col>
      <el-col :span="2">需求</el-col>
      <el-col :span="2"><el-image src="../static/KnowledgeIcon/solu.png"></el-image></el-col>
      <el-col :span="2">方案</el-col>
    </el-row>

    <div style="width: 100%;height:400px;" id="mynetwork"></div>
  </div>
</template>

<script>
import { DataSet, Network } from "vis-network/standalone";
export default {
  name: 'VisNetWork',
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
      this.axios({
        method:'get',
        //url:this.GLOBAL.Service_Base_Url+"/kg/findSubKGByInstitutionId/"+this.kg_id,
        url:"http://localhost:8018/kg/expert/extract/expe_100"
        //url:"KGUrl/kg/expert/extract/expe_100"
      }).then(resp=>{
        console.log(resp)
        this.nodes=resp.data.data.nodes

        this.edges=resp.data.data.edges
        var container = document.getElementById("mynetwork");
        //图例
        var data = {
          nodes: this.nodes,
          edges: this.edges,

        };
        var options = this.GLOBAL.options
        const network = new Network(container, data, options);
      })
    }
  }
}
</script>
<style scoped>

</style>
