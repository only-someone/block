<template xmlns="http://www.w3.org/1999/html">
  <div>
    <section class="page-title" style="background-image: url(/static/images/background/6.jpg);padding: 35px">
      <div class="auto-container">
        <div style="font-size:40px; color: white">知识图谱</div>
        <div class="text">KnowledgeGraph</div>
      </div>
    </section>
    <div style="width: 100%;font-size: 20px;font-family: 华光中楷_CNKI,serif; margin-top: 30px">
      <el-row  type="flex" justify="center" align="middle" gutter="30">
        <el-col :span="2"><el-image src="../static/KnowledgeIcon/expe.png" class="img_expe"></el-image></el-col>
        <el-col :span="2"><el-row>Expert</el-row><el-row>专家</el-row></el-col>
        <el-col :span="2"><el-image src="../static/KnowledgeIcon/unit.png" class="img_unit"></el-image></el-col>
        <el-col :span="2"><el-row>Institution</el-row><el-row>机构</el-row></el-col>
        <el-col :span="2"><el-image src="../static/KnowledgeIcon/pape.png" class="img_pape"></el-image></el-col>
        <el-col :span="2"><el-row>Paper</el-row><el-row>论文</el-row></el-col>
        <el-col :span="2"><el-image src="../static/KnowledgeIcon/pate.png" class="img_pate"></el-image></el-col>
        <el-col :span="2"><el-row>Patent</el-row><el-row>专利</el-row></el-col>
      </el-row>
      <el-row  type="flex" justify="center" align="middle" gutter="30">
        <el-col :span="2"><el-image src="../static/KnowledgeIcon/achi.png" class="img_achi"></el-image></el-col>
        <el-col :span="3"><el-row>Achievement</el-row><el-row>成果</el-row></el-col>
        <el-col :span="2"><el-image src="../static/KnowledgeIcon/case.png" class="img_case"></el-image></el-col>
        <el-col :span="2"><el-row>Case</el-row><el-row>案例</el-row></el-col>
        <el-col :span="2"><el-image src="../static/KnowledgeIcon/soft.png" class="img_soft"></el-image></el-col>
        <el-col :span="2"><el-row>Software</el-row><el-row>软著</el-row></el-col>
        <el-col :span="2"><el-image src="../static/KnowledgeIcon/requ.png" class="img_requ"></el-image></el-col>
        <el-col :span="3"><el-row>Requirement</el-row><el-row>需求</el-row></el-col>
        <el-col :span="2"><el-image src="../static/KnowledgeIcon/solu.png" class="img_solu"></el-image></el-col>
        <el-col :span="2"><el-row>Solution</el-row><el-row>方案</el-row></el-col>
      </el-row>
      <div style="width: 100%;height:800px;margin-top: 50px" id="mynetwork"></div>
    </div>
  </div>
</template>

<script>
import { DataSet, Network } from "vis-network/standalone";
import "../../static/css/base_color.css";
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
      let type = this.$route.params.Type.toLowerCase()
      console.log(this.kg_id+ "/" + type)
      this.axios({
        method:'get',
        url:this.GLOBAL.KG_url+"/kg/" + type +"/extract/" + this.kg_id
      }).then(resp=>{
        console.log(resp)
        this.nodes=resp.data.nodes
        this.edges=resp.data.edges
        var container = document.getElementById("mynetwork");

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
  .img_expe {
    border-radius: 50%;
    background-color: var(--expe-color);
  }
  .img_unit {
    border-radius: 50%;
    background-color: var(--unit-color);
  }
  .img_pape {
    border-radius: 50%;
    background-color: var(--pape-color);
  }
  .img_pate {
    border-radius: 50%;
    background-color: var(--pate-color);
  }
  .img_achi {
    border-radius: 50%;
    background-color: var(--achi-color);
  }
  .img_case {
    border-radius: 50%;
    background-color: var(--case-color);
  }
  .img_soft {
    border-radius: 50%;
    background-color: var(--soft-color);
  }
  .img_requ {
    border-radius: 50%;
    background-color: var(--requ-color);
  }
  .img_solu {
    border-radius: 50%;
    background-color: var(--solu-color);
  }
</style>
