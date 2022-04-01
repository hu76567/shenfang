<!-- 视频 -->
<template>
  <view class="main">
    <web-view :src="linkUrl"></web-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      linkUrl: "",
      pharmacistId: "",
      loginId: "",
    };
  },

  methods: {},
  onLoad(params) {
    this.pharmacistId = params.pharmacistId;
    this.loginId = this.$store.state.user.userId;

    //  #ifdef APP-PLUS
    plus.runtime.openURL(
      `https://39.101.208.50:8443/prescription/?userId=${this.loginId}&toUserId=${this.pharmacistId}`
    );
    // #endif

    // #ifdef H5
    location.href = `https://39.101.208.50:8443/prescription/?userId=${this.loginId}&toUserId=${this.pharmacistId}`;
    // #endif
  },
};
</script>
<style lang='less' scoped>
.main {
  width: 750rpx;
  height: 100vh;
}
</style>