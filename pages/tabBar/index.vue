<!--  -->
<template>
  <view class="main">
    <view class="head">
      <view class="head_left">
        <image src="../../static/avatar.jpg"></image>
      </view>
      <view class="head_right">
        <p>姓名:张三</p>
        <p>药店名称:博爱一部</p>
      </view>
    </view>

    <!-- <u-gap height="7" bgColor="#CCC"></u-gap> -->

    <view class="pharmacistlist">
      <u-list @scrolltolower="scrolltolower" height="100%">
        <u-list-item v-for="(item, index) in indexList" :key="index">
          <u-cell :title="`药师-${index + 1}`">
            <u-avatar
              slot="icon"
              shape="square"
              size="35"
              :src="item.url"
              customStyle="margin: -3px 5px -3px 0"
            ></u-avatar>
            <u-button
              slot="value"
              style="width: 50rpx; margin-right: 10rpx"
              type="primary"
              size="mini"
              text="处方"
              color="#0AB99C"
              @click="goPrescribingInfo"
            ></u-button>
            <u-button
              slot="value"
              style="width: 50rpx"
              type="primary"
              size="mini"
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
    // 滚动到底部触发
    scrolltolower() {
      // this.loadmore();
    },
    loadmore() {
      this.indexList = [...this.indexList, ...this.urls];
    },
    goProcessed(){
      uni.navigateTo({ url: "/pages/processed/index" });
    },
    // 
    goPrescribingInfo(){
      uni.navigateTo({ url: "/pages/prescribingInfo/index" });
    }
  },
  onLoad() {
    this.loadmore();
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
    z-index: 99;
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
    margin-top: 270rpx;
  }

  .statistical {
    width: 100%;
    height: 120rpx;
    position: fixed;
    bottom: 0;
    background-color: steelblue;
    display: flex;
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