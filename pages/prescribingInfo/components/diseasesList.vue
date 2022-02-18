<!--  疾病列表  -->
<template>
  <view
    ><u-list @scrolltolower="scrolltolower" height="100%">
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
  props: [],

  methods: {
    // 滚动到底部触发
    scrolltolower() {
      // this.loadmore();
    },
    loadmore() {
      this.indexList = [...this.indexList, ...this.urls];
    },
  },
  onLoad() {
    this.loadmore();
  },
};
</script>
<style lang='less' scoped>
</style>