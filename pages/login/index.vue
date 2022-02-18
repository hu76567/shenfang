<!-- 登录 -->
<template>
  <view class="main">
    <view class="head">
      <image src="../../static/avatar.jpg"></image>
    </view>

    <view class="login_form">
      <u-form labelPosition="left" :model="model" :rules="rules" ref="form">
        <u-form-item
          label="账号"
          prop="userInfo.account"
          borderBottom
          ref="item1"
        >
          <u-input v-model="model.userInfo.account" border="none"></u-input>
        </u-form-item>
        <u-form-item
          label="密码"
          prop="userInfo.password"
          borderBottom
          ref="item1"
        >
          <u-input
            v-model="model.userInfo.password"
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
  </view>
</template>

<script>
export default {
  data() {
    return {
      model: {
        userInfo: {
          account: "9527",
          password: "",
        },
      },
      rules: {
        "userInfo.account": {
          type: "string",
          max: 15,
          required: true,
          message: "请输入账号",
          trigger: ["blur", "change"],
        },
        "userInfo.password": {
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
      this.$refs.uToast.show({
        type: "loading",
        message: "登录中...",
        iconUrl: "https://cdn.uviewui.com/uview/demo/toast/loading.png",
        complete: () => {
          this.$store.commit("setToken", "token");
          uni.switchTab({
            url: "/pages/tabBar/uCenter",
          });
          // uni.navigateBack({
          //   delta: 1,
          // });
        },
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