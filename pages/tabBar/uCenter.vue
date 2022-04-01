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
        style="width: 150rpx"
        type="info"
        :plain="true"
        text="登录"
        @click="gologin"
      ></u-button>
    </view>

    <u-cell-group>
      <u-cell
        icon="edit-pen-fill"
        @click="startSign"
        title="药师签名"
        :isLink="true"
      ></u-cell>
      <!-- <u-cell icon="setting-fill" title="设置" :isLink="true"></u-cell> -->
      <u-cell
        v-if="islogin"
        icon="person-delete-fill"
        title="退出"
        @click="show = true"
        :isLink="true"
      ></u-cell>
    </u-cell-group>

    <!-- <view class="login_out" v-if="islogin"
      ><u-button
        style="width: 300rpx"
        type="error"
        @click="show = true"
        text="退出登录"
      ></u-button
    ></view> -->

    <u-modal
      :show="show"
      @cancel="cancel"
      @confirm="logout"
      :title="title"
      :asyncClose="true"
      :content="content"
      :showCancelButton="true"
      width="500rpx"
    ></u-modal>

    <Signature ref="sig"></Signature>

    <!-- <image ref="ccc" :src="PngBaseUrl"></image> -->

    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
import { isAuth } from "@/utils/token";
import { getUserInfo } from "@/api/login";
import { uploadSign } from "@/api/upload.js";
import Signature from "@/components/sin-signature/sin-signature.vue";
export default {
  data() {
    return {
      islogin: false,
      userInfo: {},
      content: "退出登录?",
      title: "",
      show: false,
      signature: "",
      PngBaseUrl: "",
    };
  },

  onShow() {
    this.islogin = isAuth();
    this.islogin && this.getUserInfo();
  },

  methods: {
    async startSign() {
      if (!this.islogin) {
        this.$refs.uToast.show({
          type: "default",
          duration: 1000,
          message: "未登录!",
          complete() {
            uni.navigateTo({
              url: "/pages/login/index",
            });
          },
        });
        return;
      }
      this.signature = await this.$refs.sig.getSyncSignature(); // 接收签名数据
      this.signature && this.getPngBase(this.signature);
    },
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
      }, 1500);
    },
    cancel() {
      this.show = false;
    },
    // 签名
    async getPngBase(url) {
      //  #ifdef APP-PLUS
      uni.showLoading({
        title: "加载中...",
      });
      let res = await uploadSign({
        userId: this.$store.state.user.userId,
        base64: url,
      });
      uni.hideLoading();
      if (res.code === 0 && res.msg === "success") {
        this.$refs.uToast.show({
          type: "success",
          duration: 1000,
          message: "上传成功",
        });
      }
      // #endif

      // #ifdef H5
      const img = new Image();
      img.src = url;
      img.onload = async () => {
        const canvas = document.createElement("canvas");
        canvas.width = 600;  //设置好 宽高  不然图片不完整
        canvas.height = 300;
        const context = canvas.getContext("2d");
        context.drawImage(img, 0, 0);
        this.PngBaseUrl = canvas.toDataURL("image/png"); // 拿到base64
        uni.showLoading({
          title: "加载中...",
        });
        let res = await uploadSign({
          userId: this.$store.state.user.userId,
          base64: this.PngBaseUrl,
        });
        uni.hideLoading();
        if (res.code === 0 && res.msg === "success") {
          this.$refs.uToast.show({
            type: "success",
            duration: 1000,
            message: "上传成功",
          });
        }
      };
      // #endif
    },
  },

  components: {
    Signature,
  },
};
</script>
<style lang='less' scoped>
.main {
  height: calc(100vh - 100rpx);
  background-color: #fff;
  .head {
    height: 500rpx;
    background-color: #22a6f1;
    box-sizing: border-box;
    padding: 180rpx 0 96rpx 0;
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
    padding-top: 350rpx;
  }
}
</style>