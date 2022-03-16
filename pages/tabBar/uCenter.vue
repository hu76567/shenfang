<!-- 我的 -->
<template>
  <view class="main">
    <view class="head">
      <image v-if="islogin" src="../../static/avatar.jpg"></image>
      <view v-if="islogin" class="login_text">
        <text>{{ userInfo.username }}</text>
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
      <u-cell icon="info-circle-fill" title="个人资料" :isLink="true"></u-cell>
      <u-cell icon="setting-fill" title="设置" :isLink="true"></u-cell>
    </u-cell-group>

    <view class="login_out" v-if="islogin"
      ><u-button
        style="width: 330rpx"
        type="error"
        @click="show = true"
        text="退出登录"
      ></u-button
    ></view>

    <u-modal
      :show="show"
      @confirm="logout"
      :title="title"
      :asyncClose="true"
      :content="content"
      :showCancelButton="true"
      width="500rpx"
    ></u-modal>
  </view>
</template>

<script>
import { isAuth } from "@/utils/token";
import { getUserInfo } from "../../api/login";
export default {
  data() {
    return {
      islogin: false,
      userInfo: {},
      content: "退出登录?",
      title: "",
      show: false,
    };
  },

  onShow() {
    this.islogin = isAuth();
  },
  onLoad() {
    this.getUserInfo();
  },

  methods: {
    gologin() {
      uni.navigateTo({ url: "/pages/login/index" });
    },
    async getUserInfo() {
      let res = await getUserInfo();
      if (res.code === 0 && res.msg === "success") {
        this.userInfo = res.user;
        this.$store.commit("saveUser", res.user);
      }
    },
    logout() {
      setTimeout(() => {
        this.$store.commit("delToken");
        this.$store.commit("delUser");
        this.islogin = isAuth();
        this.show = false;
      }, 3000);
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