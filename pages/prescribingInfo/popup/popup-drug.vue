<!-- 药品搜索 -->
<template>
  <u-popup :show="showQueryDrug" @close="close" mode="bottom" round="5">
    <view class="query">
      <u-search
        placeholder="请输入药品名或者货号"
        @search="queryDrug"
        @custom="queryDrug"
        v-model="keyword"
      ></u-search>
    </view>
    <view class="list">
      <u-list @scrolltolower="scrolltolower" height="800rpx">
        <u-list-item v-for="item in drugList" :key="item.id">
          <u-cell
            @click="clickOne"
            :title="`${item.skuCode} / ${item.name} / ${item.spec} / ${item.manufacturer}`"
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
import { getDrugList } from "@/api/drug";
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
      let isQueryByskuCode = /^[A-Za-z0-9]+$/.test(value);
      if (value !== "") {
        let res = await getDrugList({
          name: isQueryByskuCode ? "" : value,
          skuCode: isQueryByskuCode ? value : "",
          page: this.page.currentPage,
          limit: this.page.pageSize,
        });
        if (res.code === 0 && res.msg === "success") {
          this.drugList.push(...res.page.list);
        }
      } else {
        this.$refs.uToast.show({
          type: "default",
          duration: 1200,
          message: "请输入药品名或货号",
        });
      }
    },
    scrolltolower() {
      this.page.currentPage++;
      this.queryDrug(this.keyword);
    },
    close() {
      this.$emit("closeQueryDrug");
    },
  },
  created() {},
  watch: {
    keyword(newValue, oldValue) {
      if (newValue === "") {
        this.drugList = [];
        this.page.currentPage = 1;
      }
    },
  },
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
  height: 750rpx;
  overflow: auto;
  u-list {
    margin: 0 auto;
  }
}
</style>