<template>

</template>

<script>
export default {
  name: "Global.Vue",
  // Service_Base_Url:"http://192.168.8.103:8222",
  //Service_Base_Url:"http://192.168.8.127:8222",
  //Service_Base_Url:"http://124.205.220.106:8222",
  Service_Base_Url:"http://localhost:8222",
  KG_url:"http://localhost:8018",
  Blockchain_Base_Url:"http://192.168.100.18:8000",
  Download_Base_Url:"http://192.168.8.33:12345",
  Blockchain_Info_url:"http://192.168.100.18:8080",
  Avator_upload_url:"http://192.168.8.127:8222/oss/avataross",//Service_Base_Url
  options : {
    nodes: {
      physics:false,
      font: {
        size:20
      },
    },
    edges: {
      width: 1,
      font: {
        size: 10
      },
      arrows:"to"
    },
    groups: {
      expe: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/expe.png",
        color: {
          background: "blue",
        },
        font: {
          size:20
        },
      },//专家
      unit: {
        shape: "circularImage",
        image:"../static/KnowledgeIcon/unit.png",
        borderWidth:2,
        size:50,
        color: {
          background: "red",
        },
        font: {
          size:20
        },
      },//机构
      achi: {
        shape: "circularImage",
        image:"../static/KnowledgeIcon/achi.png",
        color: {
          background: "blue",
        },
        font: {
          size:10
        },
      },//技术成果
      solu: {
        shape: "circularImage",
        image:"../static/KnowledgeIcon/solu.png",
        color: {
          background: "blue",
        },
        font: {
          size:10
        },
      },//解决方案
      requ: {
        shape: "circularImage",
        image:"../static/KnowledgeIcon/requ.png",
        color: {
          background: "orange",
        },
        font: {
          size:10
        },
      },//项目需求
      pape: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/pape.png",
        color: {
          background: "gray",
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
        },
        font: {
          size:10
        },
      },//专利
      case: {
        shape: "circularImage",
        image:"../static/KnowledgeIcon/case.png",
        color: {
          background: "#c2e7b0",
        },
        font: {
          size:10
        },
      },//案例
      soft: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/soft.png",
        color: {
          background: "#f1b0b7",
        },
        font: {
          size:10
        },
      },//软件著作
    },
  },

}
</script>

<style scoped>
</style>
