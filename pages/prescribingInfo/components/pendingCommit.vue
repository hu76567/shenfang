<!-- 待提交单据 -->

<template>
  <view>
    <view class="list">
      <!-- <u-list @scrolltolower="scrolltolower">
        <u-list-item v-for="(item, index) in pendingList" :key="index">
          <view class="listcontent">
            <text>{{ item.createTime }}</text> <text>{{ item.name }}</text>
            <text>{{
              item.status === 0 ? "待提交" : item.status === 1 ? "已提交" : ""
            }}</text>
            <text class="detail">详情</text> <text class="detail">上传</text>
          </view>
        </u-list-item>
      </u-list> -->

      <uni-table border stripe emptyText="暂无更多数据">
        <!-- 表头行 -->
        <uni-tr>
          <uni-th align="center" width="100">日期</uni-th>
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
                @click="goEditPrescription(item)"
                text="编辑"
              ></u-button>
              <u-button
                type="primary"
                :customStyle="{ width: '18rpx' }"
                color="#22A6F1"
                size="mini"
                @click="commitPrescription(item)"
                text="提交"
              ></u-button>
            </view>
          </uni-td>
        </uni-tr>
      </uni-table>
    </view>
    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
import { queryPendingPrescription, commitPrescription } from "@/api/work.js";
export default {
  data() {
    return {
      pendingList: [],
    };
  },

  methods: {
    async queryPendingPrescription() {
      uni.showLoading({
        title: "加载中",
      });

      try {
        let res = await queryPendingPrescription({
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
    goEditPrescription(item) {
      uni.navigateTo({
        url: "/pages/editPrescription/index?id=" + item.id,
      });
    },
    async commitPrescription(item) {
      let res = await commitPrescription(item.id);
      if (res.code === 0 && res.msg === "success") {
        this.$refs.uToast.show({
          type: "success",
          duration: 1000,
          message: "提交成功",
        });
      }
      this.queryPendingPrescription();
    },
    scrolltolower() {
      // this.loadmore();
    },
  },

  created() {
    this.queryPendingPrescription();
  },
};
</script>
<style lang='less' scoped>
.listHead {
  width: 750rpx;
  display: flex;
  justify-content: space-around;
  z-index: 99;
  background-color: #e1e2e3;
}

.list {
  width: 750rpx;
  // margin-top: rpx;
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