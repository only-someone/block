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
      size: 30,
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
        }
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
        }
      },//技术成果
      solu: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/solu.png",
        color: {
          background: "#86bd08",
          border: "#86bd08",
          // border: "#78a50c",
        }
      },//解决方案
      requ: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/requ.png",
        color: {
          background: "#cd4a4a",
          border: "#cd4a4a",
          // border: "darkred",
        }
      },//项目需求
      pape: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/pape.png",
        color: {
          background: "lightgrey",
          border: "lightgrey",
          // border: "grey",
        }
      },//论文
      pate: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/pate.png",
        color: {
          background: "yellow",
          border: "yellow",
          // border: "#bda21a",
        }
      },//专利
      case: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/case.png",
        color: {
          background: "#f17d2f",
          border: "#f17d2f",
          // border: "darkorange",
        }
      },//案例
      soft: {
        shape: "circularImage",
        image: "../static/KnowledgeIcon/soft.png",
        color: {
          background: "#db9ca2",
          border: "#db9ca2",
          // border: "#ce7f87"
        }
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
    expe: { id: 1, label: '专家', value: 'expert', properties: {
      name: {label: '专家名称', value: 'expert_name'}, institutionName: {label: '单位名称', value: 'unit_name'}
    }},
    unit: { id: 2, label: '单位', value: 'institution', properties: {
      name: {label: '单位名称', value: 'unit_name'}
    }},
    requ: { id: 3, label: '项目需求', value: 'requirement', properties: {
      name: {label: '需求名称', value: 'requirement_name'}, institutionName: {label: '单位名称', value: 'unit_name'}
    }},
    solu: { id: 4, label: '解决方案', value: 'solution', properties: {
      name: {label: '方案名称', value: 'solution_name'}, institutionName: {label: '单位名称', value: 'unit_name'}
    }},
    case: { id: 5, label: '案例', value: 'case', properties: {
      name: {label: '案例名称', value: 'title'}, institutionName: {label: '单位名称', value: 'unit_name'}
    }},
    achi: { id: 6, label: '技术成果', value: 'achievement', properties: {
      name: {label: '成果名称', value: 'title'}, keywords: {label: '关键词', value: 'Keywords'},
      authors: {label :'发行人', value: 'authors'}, mechanicals: {label :'发行单位', value: 'mechanicals'},
      year: {label :'发行年份', value: 'year'}
    }},
    pape: { id: 7, label: '论文', value: 'paper', properties: {
      name: {label: '论文名称', value: 'title'}, authors: {label :'作者', value: 'authors'},
      keywords: {label: '关键词', value: 'keywords'}, mechanicals: {label :'发表单位', value: 'mechanicals'},
      time: {label :'发表时间', value: 'time'}, citedCount: {label: '引用次数', value: 'cited_count'},
      downloadCount: {label :'下载次数', value: 'download_count'}
    }},
    pate: { id: 8, label: '专利', value: 'patent', properties: {
      name: {label: '专利名称', value: 'title'}, inventor: {label :'发明人', value: 'inventor'},
      publicDate: {label :'公开日期', value: 'public_date'}, publicNumber: {label :'公开号', value: 'public_number'}
    }}
  },

  relationType: [
    {from: 1, to: 2, type: '就职'},
    {from: 1, to: 4, type: '提出'},
    {from: 1, to: 5, type: '提出'},
    {from: 1, to: 6, type: '提出'},
    {from: 1, to: 7, type: '提出'},
    {from: 1, to: 8, type: '提出'},
    {from: 2, to: 3, type: '提出'},
    {from: 2, to: 4, type: '提出'},
    {from: 2, to: 5, type: '提出'},
    {from: 3, to: 4, type: '使用'},
    {from: 5, to: 6, type: '使用'},
    {from: 6, to: 7, type: '使用'},
    {from: 6, to: 8, type: '使用'},
  ]

}
</script>

<style scoped>
</style>
