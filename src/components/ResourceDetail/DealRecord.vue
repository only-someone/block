<template>
  <div>
<!--    <h2 style="text-align: center">交易记录</h2>-->
<!--    <section class="shop-single-section sidebar-page-container">-->
<!--      <el-timeline :reverse="false">-->
<!--        <el-timeline-item-->
<!--          v-for="(record, index) in DealRecord"-->
<!--          :key="index"-->
<!--          :timestamp="record.value.Time">-->
<!--          <h4 @click="getUserDetail(record.Type,record.Id)"><span  style="color: #1e7e34">{{ record.ownername }} </span>   花费{{record.value.Cost}}积分</h4>-->
<!--          <span class="span"> {{  record.value.Time}}</span>-->
<!--          <p class="f14"> <span  style="color: #1e7e34">交易ID:</span >{{record.txId }}</p>-->
<!--        </el-timeline-item>-->
<!--      </el-timeline>-->
<!--    </section>-->
    <h2 style="text-align: center;font-size: 20px;margin-bottom: 20px">交易记录</h2>
    <div class="about2" >
      <div class="wrapper clearfix-time">
        <ul class="clearfix-time">
          <li v-for="record in DealRecord">
            <h4 @click="getUserDetail(record.Type,record.Id)"><span  style="color: #1e7e34">{{ record.ownername }} </span>   花费{{record.value.Cost}}积分</h4>
            <span class="span"> {{  record.value.Time}}</span>
            <p class="f14"> <span  style="color: #1e7e34">交易ID:</span >{{record.txId }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AchievementDetail",
  data() {
    return {
      resource_type: this.$route.params.Type,
      resource_id: this.$route.params.Id,
      resource: this.$route.params.Type + "_" + this.$route.params.Id,
      DealRecord: []
    };
  },
  mounted() {
    this.getDealRecord(this.resource_type, this.resource_id);
  },
  methods: {
    getUserDetail(Type,Id) {
      this.$router.push({
        name: "UserDetail",
        params: {
          Type: Type,
          Id: Id
        }
      });
    },
    getDealRecord() {
      let queryId = this.resource_type + "_" + this.resource_type;
      this.axios({
        method: "post",
        url: this.GLOBAL.Blockchain_Base_Url + "/api/v1/queryDealResource",
        data: { Id: this.resource }
      }).then(resp => {
        //获得对应id的用户并获取名字
        this.DealRecord = resp.data.data;
        let pArr = [];
        this.DealRecord.forEach(i => {
          let type, id, url;
          if (i.value.Owner !== "Admin_1") {
            //只有admin_1
            type = i.value.Owner.split("_")[0];
            id = i.value.Owner.split("_")[1];
            url = this.GLOBAL.Service_Base_Url +(type === "Expert"? "/expertservice/expert": "/institutionservice/institution") +"/get" +type + "/" + id;
            pArr.push(
              new Promise(resolve => {
                this.axios({
                  method: "get",
                  url: url //可能是机构,
                }).then(res => {
                    let user = res.data.data["expert"] || res.data.data["institution"];
                    i.ownername = user.name;
                    i.Type=type
                    i.Id=id
                  }).finally(() => {
                    resolve();
                  });
              })
            );
          } else {
            i.ownername = "管理员";
          }
        });
        Promise.all(pArr).then(() => {
          this.$forceUpdate();
        });
        this.DealRecord=this.DealRecord.reverse()
      });
    }
  }
};
</script>

<style scoped>
.bg-purple-dark {
  text-align: center;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
