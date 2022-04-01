<!-- 首页 -->
<template>
  <view class="main">
    <view class="head">
      <view class="head_left">
        <image src="../../static/avatar.jpg"></image>
      </view>
      <view class="head_right">
        <p>姓名 : {{ $store.state.user.username }}</p>
        <p>药店名称 : 暂无</p>
      </view>
    </view>

    <view class="pharmacistlist">
      <u-list @scrolltolower="scrolltolower">
        <u-list-item v-for="(item, index) in pharmacistlist" :key="index">
          <u-cell :title="item.username">
            <u-avatar
              slot="icon"
              shape="square"
              size="35"
              :src="item.avatar"
              customStyle="margin: -3px 5px -3px 0"
            ></u-avatar>
            <u-button
              slot="value"
              style="width: 50rpx; margin-right: 10rpx"
              type="primary"
              size="small"
              text="处方"
              color="#22A6F1"
              @click="goPrescribingInfo"
            ></u-button>
            <u-button
              slot="value"
              style="width: 50rpx"
              type="primary"
              size="small"
              text="视频"
              @click="goVideoCall(item.userId)"
              color="#22A6F1"
            ></u-button>
          </u-cell>
        </u-list-item>
      </u-list>
    </view>

    <view class="statistical">
      <view class="item" @click="goCommited">
        <p>{{ commitCount }}</p>
        <p>提交数量</p>
      </view>
      <view class="item" @click="goProcessed">
        <p>{{ dealedCount }}</p>
        <p>已处理</p>
      </view>
      <view class="item" @click="pendingProcess"
        ><p>{{ pendingDealedCount }}</p>
        <p>待处理</p></view
      >
    </view>

    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
import { getPharmacistList } from "@/api/list";
import { getUserInfo } from "@/api/login";
import { queryPrescriptionCount } from "@/api/work.js";
export default {
  data() {
    return {
      pharmacistlist: [],
      commitCount: "",
      dealedCount: "",
      pendingDealedCount: "",
    };
  },

  methods: {
    /** 药师列表 */
    async getPharmacistList() {
      try {
        uni.showLoading({
          title: "加载中",
        });
        let res = await getPharmacistList();
        uni.hideLoading();
        if (res.code === 0 && res.msg === "success")
          this.pharmacistlist = res.list;
      } catch (error) {
        uni.hideLoading();
      }
    },
    /** 查单据统计 */
    async queryPrescriptionCount() {
      let res = await queryPrescriptionCount({
        userId: this.$store.state.user.userId,
      });
      if (res.code === 0 && res.msg === "success") {
        this.commitCount = res.commitCount;
        this.dealedCount = res.dealedCount;
        this.pendingDealedCount = res.pendingDealedCount;
      } else {
        this.$refs.uToast.show({
          type: "default",
          icon: false,
          message: res.msg,
          iconUrl: "https://cdn.uviewui.com/uview/demo/toast/error.png",
          complete() {},
        });
      }
    },
    async getUserInfo() {
      let res = await getUserInfo();
      if (res.code === 0 && res.msg === "success") {
        this.userInfo = res.user;
        this.$store.commit("saveUser", res.user);
      } else {
        this.$refs.uToast.show({
          type: "default",
          icon: false,
          message: res.msg,
          complete() {
            uni.navigateTo({
              url: "/pages/login/index",
            });
          },
        });
      }
    },
    // 滚动到底部触发
    scrolltolower() {},
    // 去已处理
    goProcessed() {
      uni.navigateTo({ url: "/pages/other/processed" });
    },
    // 去待处理
    pendingProcess() {
      uni.navigateTo({ url: "/pages/other/pendingProcess" });
    },
    // 已提交
    goCommited() {
      uni.navigateTo({ url: "/pages/other/commited" });
    },
    //
    goPrescribingInfo() {
      let token = uni.getStorageSync("token");
      if (token) {
        uni.navigateTo({ url: "/pages/prescribingInfo/index" });
      } else {
        this.$refs.uToast.show({
          type: "default",
          icon: false,
          message: "未登录 !",
          complete() {
            uni.navigateTo({
              url: "/pages/login/index",
            });
          },
        });
      }
    },

    goVideoCall(id) {
      let token = uni.getStorageSync("token");
      if (token) {
        uni.navigateTo({ url: "/pages/videoCall/index?pharmacistId=" + id });
      } else {
        this.$refs.uToast.show({
          type: "default",
          icon: false,
          message: "未登录 !",
          complete() {
            uni.navigateTo({
              url: "/pages/login/index",
            });
          },
        });
      }
    },
  },

  onShow() {
    if (this.$store.state.token) {
      this.getUserInfo();
      this.getPharmacistList();
      this.queryPrescriptionCount();
    } else {
      this.$refs.uToast.show({
        type: "default",
        icon: false,
        message: "未登录 !",
        complete() {
          uni.navigateTo({
            url: "/pages/login/index",
          });
        },
      });
    }
  },
  onReady() {
    if (!this.$store.state.token) {
      this.$refs.uToast.show({
        type: "default",
        icon: false,
        message: "未登录 !",
        complete() {
          uni.navigateTo({
            url: "/pages/login/index",
          });
        },
      });
    }
  },
};
</script>

<style lang='less' scoped>
.main {
  position: relative;
  padding: 270rpx 0 100rpx 0;
  .head {
    display: flex;
    width: 100%;
    height: 270rpx;
    position: fixed;
    top: 0rpx;
    z-index: 999;
    background-color: #22a6f1;
    .head_left {
      flex: 3;
      text-align: center;
      position: relative;
      image {
        width: 160rpx;
        height: 160rpx;
        border-radius: 20rpx;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
    .head_right {
      flex: 5;
      p {
        margin-top: 55rpx;
      }
    }
  }

  .pharmacistlist {
    // padding-top: 270rpx;
  }

  .statistical {
    width: 100%;
    height: 100rpx;
    position: fixed;
    bottom: var(--window-bottom);
    // bottom: 0;
    background-color: #22a6f1;
    border-radius: 15rpx 15rpx 0 0;
    display: flex;
    z-index: 999;
    justify-content: space-around;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 150rpx;
      p {
        text-align: center;
      }
    }
  }
}
</style>