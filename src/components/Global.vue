<template>

</template>

<script>
import '../../static/css/base_color.css'
export default {
  name: "Global.Vue",
  // Service_Base_Url:"http://192.168.8.103:8222",
  //Service_Base_Url:"http://192.168.8.127:8222",
  //Service_Base_Url:"http://124.205.220.106:8222",
  Service_Base_Url:"http://localhost:8222",
  KG_url:"http://localhost:8018",
  Blockchain_Base_Url:"http://localhost:8000",
  Download_Base_Url:"http://localhost:12345",
  Blockchain_Info_url:"http://localhost:8080",
  Avator_upload_url:"http://localhost:8222/oss/avataross",//Service_Base_Url

  // Vis Network options for knowledgeGraph
  options : {
    nodes: {
      font: {
        size: 15,
        // background: "rgba(181,220,241,0.77)"
      },
      shadow: true,
      borderWidth: 2,
      borderWidthSelected: 3
    },
    edges: {
      width: 1,
      font: {
        size: 15
      },
      arrows:"to",
      color: "#329ae3",
      // shadow: true,
    },
    // layout: [
    //   {
    //     label: '自动布局',
    //     layoutName: 'force',
    //     layoutClassName: 'seeks-layout-force'
    //   }
    // ],
    groups: {
      expe: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/expe.png",
        color: {
          background: "lightgreen",
          border: "green",
        },
        font: {
          size:20
        },
      },//专家
      unit: {
        shape: "circularImage",
        image:"../static/KnowledgeIcon/unit.png",
        size: 50,
        color: {
          background: "lightblue",
          border: "blue",
        },
        font: {
          size:20
        },
      },//机构
      achi: {
        shape: "circularImage",
        image:"../static/KnowledgeIcon/achi.png",
        color: {
          background: "#c74ee8",
          border: "#950bc9",
        },
        font: {
          size:10
        },
      },//技术成果
      solu: {
        shape: "circularImage",
        image:"../static/KnowledgeIcon/solu.png",
        color: {
          background: "#86bd08",
          border: "#78a50c",
        },
        font: {
          size:10
        },
      },//解决方案
      requ: {
        shape: "circularImage",
        image:"../static/KnowledgeIcon/requ.png",
        color: {
          background: "#cd4a4a",
          border: "darkred",
        },
        font: {
          size:10
        },
      },//项目需求
      pape: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/pape.png",
        color: {
          background: "lightgrey",
          border: "grey",
        },
        font: {
          size:10
        },
      },//论文
      pate: {
        shape: "circularImage",
        image:"../static/KnowledgeIcon/pate.png",
        color: {
          background: "yellow",
          border: "#bda21a",
        },
        font: {
          size:10
        },
      },//专利
      case: {
        shape: "circularImage",
        image:"../static/KnowledgeIcon/case.png",
        color: {
          background: "#f17d2f",
          border: "darkorange",
        },
        font: {
          size:10
        },
      },//案例
      soft: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/soft.png",
        color: {
          background: "#db9ca2",
          border: "#ce7f87"
        },
        font: {
          size:10
        },
      },//软件著作
    },
    physics: {
      enabled: true,
      barnesHut: {
        avoidOverlap: 1,
        gravitationalConstant: -25000,
        // springLength: 200
      },
    }
  },

}
</script>

<style scoped>
</style>
