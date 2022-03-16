<!--  -->
<template>
  <view>
    <view class="listHead"
      ><text>处方编号</text> <text>患者</text> <text>日期</text>
      <text>详情</text> <text>状态</text>
    </view>
    <view class="list">
      <u-list @scrolltolower="scrolltolower">
        <u-list-item v-for="(item, index) in indexList" :key="index">
          <view class="listcontent">
            <text>{{ index }}</text> <text>张三</text> <text>2022-2-28</text>
            <text class="detail">详情</text> <text>已处理</text>
          </view>
        </u-list-item>
      </u-list>
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
      ],
    };
  },

  methods: {
    scrolltolower() {
      // this.loadmore();
    },
    loadmore() {
      for (let i = 0; i < 30; i++) {
        this.indexList.push({
          url: this.urls[uni.$u.random(0, this.urls.length - 1)],
        });
      }
    },
  },

  onLoad() {
    this.loadmore();
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