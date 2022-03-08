<template>

</template>

<script>
import '../../static/css/base_color.css'
export default {
  name: "Global.Vue",
  // Service_Base_Url:"http://192.168.8.103:8222",
  //Service_Base_Url:"http://192.168.8.127:8222",
  //Service_Base_Url:"http://124.205.220.106:8222",
  Service_Base_Url: "http://localhost:8222",
  KG_url: "http://localhost:8018",
  Blockchain_Base_Url: "http://localhost:8000",
  Download_Base_Url: "http://localhost:12345",
  Blockchain_Info_url: "http://localhost:8080",
  Avator_upload_url: "http://localhost:8222/oss/avataross",//Service_Base_Url

  // Vis Network options for knowledgeGraph
  options: {
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
      arrows: "to",
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
          // border: "green",
          border: "lightgreen",
        },
        font: {
          size: 20
        },
      },//专家
      unit: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/unit.png",
        size: 50,
        color: {
          background: "lightblue",
          border: "lightblue",
          // border: "blue",
        },
        font: {
          size: 20
        },
      },//机构
      achi: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/achi.png",
        color: {
          background: "#c74ee8",
          border: "#c74ee8",
          // border: "#950bc9",
        },
        font: {
          size: 10
        },
      },//技术成果
      solu: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/solu.png",
        color: {
          background: "#86bd08",
          border: "#86bd08",
          // border: "#78a50c",
        },
        font: {
          size: 10
        },
      },//解决方案
      requ: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/requ.png",
        color: {
          background: "#cd4a4a",
          border: "#cd4a4a",
          // border: "darkred",
        },
        font: {
          size: 10
        },
      },//项目需求
      pape: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/pape.png",
        color: {
          background: "lightgrey",
          border: "lightgrey",
          // border: "grey",
        },
        font: {
          size: 10
        },
      },//论文
      pate: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/pate.png",
        color: {
          background: "yellow",
          border: "yellow",
          // border: "#bda21a",
        },
        font: {
          size: 10
        },
      },//专利
      case: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/case.png",
        color: {
          background: "#f17d2f",
          border: "#f17d2f",
          border: "#f17d2f",
          // border: "darkorange",
        },
        font: {
          size: 10
        },
      },//案例
      soft: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/soft.png",
        color: {
          background: "#db9ca2",
          border: "#db9ca2",
          // border: "#ce7f87"
        },
        font: {
          size: 10
        },
      },//软件著作
    },
    physics: {
      enabled: true,
      barnesHut: {
        avoidOverlap: 0,
        gravitationalConstant: -25000,
        // springLength: 200
      },
    }
  },

  nodesType: {
    expe: { label: '专家', value: 'expert'},
    unit: { label: '单位', value: 'institution'},
    requ: { label: '项目需求', value: 'requirement'},
    solu: { label: '解决方案', value: 'solution'},
    case: { label: '案例', value: 'case'},
    achi: { label: '技术成果', value: 'achievement'},
    pape: { label: '论文', value: 'paper'},
    pate: { label: '专利', value: 'patent'}
  }

}
</script>

<style scoped>
</style>
