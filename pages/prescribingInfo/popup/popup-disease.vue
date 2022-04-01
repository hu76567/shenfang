<!-- 疾病选择 -->
<template>
  <u-popup :show="showDiseasesList" @close="close" mode="bottom" round="5">
    <view class="list">
      <u-list @scrolltolower="scrolltolower" height="800rpx">
        <u-cell-group>
          <u-list-item v-for="(item, index) in diseaseList" :key="index">
            <u-cell
              @click="clickOne"
              :name="item.id"
              :title="`${index + 1}、${item.fjbname}`"
            >
            </u-cell>
          </u-list-item>
        </u-cell-group>
      </u-list>
    </view>
  </u-popup>
</template>

<script>
import { getDiseaseList } from "@/api/list";
import eventBus from "@/utils/eventBus";
export default {
  data() {
    return {
      diseaseList: [],
      page: {
        currentPage: 1,
        pageSize: 10,
      },
    };
  },
  props: ["showDiseasesList","diseaseName"],
  methods: {
    async getDiseaseList(key) {
      let res = await getDiseaseList({
        name: key,
        page: this.page.currentPage,
        limit: this.page.pageSize,
      });
      if (res.code === 0 && res.msg === "success") {
        this.diseaseList = [...this.diseaseList, ...res.page.list];
      }
    },
    clickOne(val) {
      let item = this.diseaseList.find((h) => {
        return h.id === val.name;
      });
      this.$emit("clickone", item);
      this.$emit("closeDiseasesList");
    },
    // 到底部
    scrolltolower() {
      this.page.currentPage += 1;
      this.getDiseaseList(this.diseaseName);
    },
    // 关闭
    close() {
      this.$emit("closeDiseasesList");
    },
  },
  created() {
    eventBus.$on("getDis", (key) => {
      if (this.diseaseList.length === 0) this.getDiseaseList(key);
    });
  },
};
</script>
<style lang="less" scoped>
.list {
  height: 800rpx;
  overflow: auto;
  u-list {
    margin: 0 auto;
  }
}
</style>
