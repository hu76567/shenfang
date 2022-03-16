<!--  -->
<template>
  <view class="main">
    <view class="head">
      <view class="head_left">
        <image src="../../static/avatar.jpg"></image>
      </view>
      <view class="head_right">
        <p>姓名:{{$store.state.user.username}}</p>
        <p>药店名称:博爱一部</p>
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
              color="#0AB99C"
              @click="goPrescribingInfo"
            ></u-button>
            <u-button
              slot="value"
              style="width: 50rpx"
              type="primary"
              size="small"
              text="视频"
              color="#0AB99C"
            ></u-button>
          </u-cell>
        </u-list-item>
      </u-list>
    </view>

    <view class="statistical">
      <view class="item">
        <p>100</p>
        <p>提交数量</p>
      </view>
      <view class="item" @click="goProcessed">
        <p>60</p>
        <p>已处理</p>
      </view>
      <view class="item"
        ><p>40</p>
        <p>未处理</p></view
      >
    </view>
  </view>
</template>

<script>
import { getPharmacistList } from "../../api/list";
export default {
  data() {
    return {
      indexList: [],
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
      pharmacistlist: [],
    };
  },

  methods: {
    async getPharmacistList() {
      let res = await getPharmacistList();
      if (res.code === 0 && res.msg === "success") {
        this.pharmacistlist = res.list;
      }
    },
    // 滚动到底部触发
    scrolltolower() {
      // this.loadmore();
    },
    loadmore() {
      // this.indexList = [...this.indexList, ...this.urls];
      for (let i = 0; i < 50; i++) {
        this.indexList.push({
          url: this.urls[uni.$u.random(0, this.urls.length - 1)],
        });
      }
    },
    goProcessed() {
      uni.navigateTo({ url: "/pages/processed/index" });
    },
    //
    goPrescribingInfo() {
      uni.navigateTo({ url: "/pages/prescribingInfo/index" });
    },
  },
  onLoad() {
    this.getPharmacistList();
  },
};
</script>

<style lang='less' scoped>
.main {
  position: relative;
  padding-bottom: 120rpx;
  .head {
    display: flex;
    width: 100%;
    height: 270rpx;
    position: fixed;
    top: 0rpx;
    z-index: 999;
    background-color: steelblue;
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
    padding-top: 270rpx;
  }

  .statistical {
    width: 100%;
    height: 100rpx;
    position: fixed;
    bottom: 100rpx;
    background-color: steelblue;
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