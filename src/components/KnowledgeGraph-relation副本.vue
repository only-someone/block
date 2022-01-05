<template>
  <div style="font-size: 20px;align-content: center" >
    <el-row  type="flex" justify="center">
      <el-col :span="2"><el-image src="../static/KnowledgeIcon/expe.png"></el-image></el-col>
      <el-col :span="2">专家</el-col>
      <el-col :span="2"><el-image src="../static/KnowledgeIcon/unit.png"></el-image></el-col>
      <el-col :span="2" fi>机构</el-col>
      <el-col :span="2"><el-image src="../static/KnowledgeIcon/pape.png"></el-image></el-col>
      <el-col :span="2">论文</el-col>
      <el-col :span="2"><el-image src="../static/KnowledgeIcon/pate.png"></el-image></el-col>
      <el-col :span="2">专利</el-col>
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



    <br/>
<!--    <div style="margin-top:50px;width: calc(100% - 10px);height:calc(100vh - 140px);">-->
    <div style="margin-top:50px;width: 100%;height:100%;">
      <SeeksRelationGraph ref="seeksRelationGraph" :options="graphOptions" />
    </div>

  </div>

</template>

<script>
import SeeksRelationGraph from 'relation-graph'

export default {
  name: 'SeeksRelationGraphDemo',
  components: { SeeksRelationGraph },
  data() {
    return {
      g_loading: true,
      demoname: '---',
      graphOptions: {
        defaultNodeBorderWidth: 0,
        defaultNodeColor: 'rgba(238, 178, 94, 1)',
       // allowSwitchLineShape: true,
        //allowSwitchJunctionPoint: true,
        defaultLineShape: 1,
        'layouts': [
          {
            'label': '自动布局',
            'layoutName': 'force',
            'layoutClassName': 'seeks-layout-force'
          }
        ],
        defaultJunctionPoint: 'border'
        // 这里可以参考"Graph 图谱"中的参数进行设置
      }
    }
  },
  beforeCreate() {

  },
  created() {
  },
  mounted() {
    this.demoname = this.$route.params.demoname
    this.setGraphData()
    window.setInterval(() => {
      setTimeout(this.del_onclick, 0)
    }, 200)
  },
  methods: {
    del_onclick(){
      let abc=document.getElementsByClassName("rel-node-checked")[0];
      abc.classList.remove("rel-node-checked")
      console.log(abc)
    },
    setGraphData() {
      this.axios({
        method:'get',
        //url:this.GLOBAL.Service_Base_Url+"/kg/findSubKGByInstitutionId/"+this.kg_id,
        url:"http://localhost:8018/kg/expert/extract/expe_1000"
        //url:"KGUrl/kg/expert/extract/expe_100"
      }).then(resp=> {
        console.log(resp.data.nodes.length)
        var ini__graph_json_data = resp.data;
        const num_json_node = resp.data.nodes.length;
        for (let i = 0; i < num_json_node; i++) {
          ini__graph_json_data.nodes[i].innerHTML = ini__graph_json_data.nodes[i]["frontHTML"]
                      + "../static/KnowledgeIcon/" + ini__graph_json_data.nodes[i].id.substr(0,4) + ".png"
                      + ini__graph_json_data.nodes[i]["backHTML"]

          delete ini__graph_json_data.nodes[i].frontHTML
          delete ini__graph_json_data.nodes[i].backHTML
        }

        console.log("哈哈")
        console.log(ini__graph_json_data)
        this.$refs.seeksRelationGraph.setJsonData(ini__graph_json_data, (seeksRGGraph) => {
          // 这些写上当图谱初始化完成后需要执行的代码
        })
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.c-my-node{
  background-position: center center;
  background-size: 100%;

  height:80px;
  width:80px;
  border-radius: 40px;
}
.c-node-name{
  width:160px;margin-left:-40px;text-align:center;margin-top:85px;
}
</style>
