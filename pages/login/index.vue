<!-- 登录 -->
<template>
  <view class="main">
    <view class="head">
      <image src="../../static/avatar.jpg"></image>
    </view>

    <view class="login_form">
      <u-form labelPosition="left" :model="userInfo" :rules="rules" ref="form">
        <u-form-item label="账号" prop="account" borderBottom ref="item1">
          <u-input v-model="userInfo.username" border="none"></u-input>
        </u-form-item>
        <u-form-item label="密码" prop="password" borderBottom ref="item1">
          <u-input
            v-model="userInfo.password"
            type="password"
            border="none"
          ></u-input>
        </u-form-item>
      </u-form>
    </view>

    <view class="login_in"
      ><u-button
        style="width: 370rpx"
        type="primary"
        text="登录"
        @click="login"
      ></u-button
    ></view>

    <u-toast ref="uToast"></u-toast>
    <u-notify ref="uNotify"></u-notify>
  </view>
</template>

<script>
import { login } from "../../api/login.js";
export default {
  data() {
    return {
      userInfo: {
        username: "admin",
        password: "admin",
      },
      rules: {
        username: {
          type: "string",
          max: 15,
          required: true,
          message: "请输入账号",
          trigger: ["blur", "change"],
        },
        password: {
          type: "string",
          max: 15,
          required: true,
          message: "请输入密码",
          trigger: ["blur", "change"],
        },
      },
    };
  },

  methods: {
    // 登录
    login() {
      this.$refs.form
        .validate()
        .then(async () => {
          let res = await login(this.userInfo);
          if (res.code === 0 && res.msg === "success") {
            this.$refs.uToast.show({
              type: "loading",
              message: "登录中...",
              iconUrl: "https://cdn.uviewui.com/uview/demo/toast/loading.png",
              complete: () => {
                this.$store.commit("setToken", res.token);
                uni.switchTab({
                  url: "/pages/tabBar/uCenter",
                });
                // uni.navigateBack({
                //   delta: 1,
                // });
              },
            });
          } else {
            this.$refs.uNotify.show({
              top: 0,
              type: "error",
              color: "#000",
              // bgColor: "#e8e8e8",
              message: res.msg,
              duration: 2000,
              fontSize: 16,
              safeAreaInsetTop: true,
            });
          }
        })
        .catch((err) => {
          // uni.$u.toast("校验失败");
        });
    },
  },
};
</script>
<style lang='less' scoped>
.main {
  height: 100vh;
  background-color: #fff;
  .head {
    height: 450rpx;
    // background-color: lightskyblue;
    box-sizing: border-box;
    padding: 216rpx 0 96rpx 0;
    text-align: center;
    font-size: 0;

    image {
      width: 160rpx;
      height: 160rpx;
    }
  }

  .login_form {
    padding: 0 90rpx;
  }

  .login_in {
    padding-top: 45rpx;
  }
}
</style>