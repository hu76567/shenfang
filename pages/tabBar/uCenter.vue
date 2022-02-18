<!-- 我的 -->
<template>
  <view class="main">
    <view class="head">
      <image v-if="islogin" src="../../static/avatar.jpg"></image>
      <view v-if="islogin" class="login_text">
        <text>张三</text>
      </view>
      <u-button
        v-else
        style="width: 120rpx"
        size="small"
        type="success"
        text="登录"
        @click="gologin"
      ></u-button>
    </view>

    <u-cell-group>
      <u-cell
        icon="question-circle-fill"
        title="问题与反馈"
        :isLink="true"
      ></u-cell>
      <u-cell icon="setting-fill" title="设置" :isLink="true"></u-cell>
      <u-cell icon="info-circle-fill" title="关于" :isLink="true"></u-cell>
    </u-cell-group>

    <view class="login_out" v-if="islogin"
      ><u-button
        style="width: 370rpx"
        type="error"
        @click="logout"
        text="退出登录"
      ></u-button
    ></view>
  </view>
</template>

<script>
import { isAuth } from "@/utils/token";
export default {
  data() {
    return {
      islogin: false,
    };
  },

  onShow() {
    this.islogin = isAuth();
  },

  methods: {
    gologin() {
      uni.navigateTo({ url: "/pages/login/index" });
    },
    logout() {
      this.$store.commit("delToken");
      this.islogin = isAuth();
    },
  },
};
</script>
<style lang='less' scoped>
.main {
  height: 100vh;
  background-color: #fff;
  .head {
    height: 500rpx;
    background-color: lightskyblue;
    box-sizing: border-box;
    padding: 216rpx 0 96rpx 0;
    text-align: center;
    font-size: 0;

    image {
      width: 160rpx;
      height: 160rpx;
      border-radius: 80rpx;
    }

    .login_text {
      font-size: 40rpx;
      line-height: 56rpx;
      color: #ffffff;
      margin-top: 35rpx;
      font-weight: 500;
    }
  }
  .login_out {
    padding-top: 30rpx;
  }
}
</style>