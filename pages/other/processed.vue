<!-- 已处理 -->
<template>
  <view>
    <uni-table border stripe emptyText="暂无更多数据">
      <!-- 表头行 -->
      <uni-tr>
        <uni-th align="center" width="80">日期</uni-th>
        <uni-th align="center" width="60">患者</uni-th>
        <uni-th align="center" width="60">状态</uni-th>
        <uni-th align="center" width="36">操作</uni-th>
      </uni-tr>
      <!-- 表格数据行 -->
      <uni-tr v-for="item in pendingList" :key="item.id">
        <uni-td align="center">{{ item.createTime }}</uni-td>
        <uni-td align="center">{{ item.name }}</uni-td>
        <uni-td align="center">{{
          item.status === 0 ? "待提交" : item.status === 1 ? "已提交" : ""
        }}</uni-td>
        <uni-td>
          <view style="display: flex">
            <u-button
              :customStyle="{ width: '18rpx' }"
              :plain="true"
              type="info"
              size="mini"
              @click="goPrescriptionDetail(item)"
              text="详情"
            ></u-button>
          </view>
        </uni-td>
      </uni-tr>
    </uni-table>
  </view>
</template>

<script>
import { queryDealedPrescription } from "@/api/work.js";
export default {
  data() {
    return {
      pendingList: [],
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
    };
  },

  methods: {
    async queryDealedPrescription() {
      uni.showLoading({
        title: "加载中",
      });

      try {
        let res = await queryDealedPrescription({
          userId: this.$store.state.user.userId,
        });
        if (res.code === 0 && res.msg === "success") {
          this.pendingList = res.page.list;
          uni.hideLoading();
        }
      } catch (error) {
        uni.hideLoading();
      }
    },
    goPrescriptionDetail(item) {
      uni.navigateTo({
        url: "/pages/prescriptionDetail/index?id=" + item.id,
      });
    },
    scrolltolower() {
      // this.loadmore();
    },
  },

  onLoad() {
    this.queryDealedPrescription();
  },
};
</script>
<style lang='less' scoped>
.listHead {
  width: 750rpx;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #e1e2e3;
}

.list {
  width: 750rpx;
  margin-top: 60rpx;
  // overflow: auto;
  .listcontent {
    height: 90rpx;
    line-height: 90rpx;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
    .detail {
      margin: auto 0;
      text-align: center;
      height: 50rpx;
      line-height: 50rpx;
      width: 80rpx;
      background-color: lightsteelblue;
      border-radius: 10rpx;
    }
  }
  u-list {
    margin: 0 auto;
  }
}
</style>