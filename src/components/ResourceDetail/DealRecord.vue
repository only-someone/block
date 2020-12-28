<template>
  <div>
    <section class="shop-single-section sidebar-page-container">
      <el-timeline :reverse="false">
        <el-timeline-item
          v-for="(record, index) in DealRecord"
          :key="index"
          :timestamp="record.value.Time"
        >
          <div>交易ID:{{ record.txId }}</div>
          <div>购买者：{{ record.ownername }}</div>
          <div>花费：{{ record.value.Cost }}积分</div>
        </el-timeline-item>
      </el-timeline>
    </section>
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
    getUserDetail() {
      //用于跳转
      var Type = this.uploader.split("_")[0];
      var Id = this.uploader.split("_")[1];
      this.$router.push({
        name: "FD",
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
            url =
              this.GLOBAL.Service_Base_Url +
              (type === "Expert"
                ? "/expertservice/expert"
                : "/institutionservice/institution") +
              "/get" +
              type +
              "/" +
              id;
            pArr.push(
              new Promise(resolve => {
                this.axios({
                  method: "get",
                  url: url //可能是机构,
                })
                  .then(res => {
                    let user =
                      res.data.data["expert"] || res.data.data["institution"];
                    i.ownername = user.name;
                  })
                  .finally(() => {
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
