<!-- 药品搜索 -->
<template>
  <u-popup :show="showQueryDrug" @close="close" mode="bottom" round="5">
    <view class="query">
      <u-search
        placeholder="请输入要查询的药品"
        @custom="queryDrug"
        v-model="keyword"
      ></u-search>
    </view>
    <view class="list">
      <u-list @scrolltolower="scrolltolower" height="800rpx">
        <u-list-item v-for="(item, index) in drugList" :key="item.id">
          <u-cell
            @click="clickOne"
            :title="`${index + 1}、${item.name}`"
            :name="item.id"
          >
          </u-cell>
        </u-list-item>
      </u-list>
    </view>
    <u-toast ref="uToast"></u-toast>
  </u-popup>
</template>

<script>
import { getDrugList } from "../../../api/drug";
export default {
  data() {
    return {
      drugList: [],
      urls: [
        "https://cdn.uviewui.com/uview/album/1.jpg",
        "https://cdn.uviewui.com/uview/album/2.jpg",
        "https://cdn.uviewui.com/uview/album/3.jpg",
        "https://cdn.uviewui.com/uview/album/4.jpg",
        "https://cdn.uviewui.com/uview/album/5.jpg",
        "https://cdn.uviewui.com/uview/album/6.jpg",
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/8.jpg",
        "https://cdn.uviewui.com/uview/album/9.jpg",
        "https://cdn.uviewui.com/uview/album/10.jpg",
      ],
      keyword: "",
      page: {
        currentPage: 1,
        pageSize: 10,
      },
    };
  },
  props: ["showQueryDrug"],

  methods: {
    clickOne(val) {
      let item = this.drugList.find((h) => {
        return h.id === val.name;
      });
      this.$emit("clickone", item);
      this.$emit("closeQueryDrug");
    },
    // 搜索
    async queryDrug(value) {
      if (value !== "") {
        let res = await getDrugList({
          name: value,
          skuCode: "",
          page: this.page.currentPage,
          limit: this.page.pageSize,
        });
        if (res.code === 0 && res.msg === "success") {
          this.drugList = [...this.drugList, ...res.page.list];
        }
      } else {
        this.$refs.uToast.show({
          type: "default",
          duration: 1200,
          message: "请输入药品名",
        });
      }
    },
    scrolltolower() {
      this.page.currentPage += 1;
      this.queryDrug();
    },
    close() {
      this.$emit("closeQueryDrug");
    },
  },
  created() {},
};
</script>
<style lang='less' scoped>
.query {
  width: 750rpx;
  height: 80rpx;
  padding-top: 10rpx;
}
.list {
  width: 750rpx;
  height: 800rpx;
  overflow: auto;
  u-list {
    margin: 0 auto;
  }
}
</style>