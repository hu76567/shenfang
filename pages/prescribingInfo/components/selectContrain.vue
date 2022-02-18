<!--  选择禁忌症  -->
<template>
  <view>
    <u-popup
      :show="showSelectContrain"
      @close="close"
      @open="open"
      mode="center"
      round="5"
      :closeOnClickOverlay="false"
    >
      <view class="dialog">
        <u--form
          :model="form"
          ref="form"
          class="form_box"
          labelPosition="left"
          labelAlign="center"
          labelWidth="250rpx"
        >
          <u-form-item label="肝功能是否异常 :" prop="contraindications">
            <u-radio-group v-model="form.contraindications" placement="row">
              <u-radio
                label="是"
                name="1"
                @change="selectContrain"
                activeColor="#4682B4"
                :customStyle="{ marginRight: '20rpx' }"
              ></u-radio>
              <u-radio activeColor="#4682B4" label="否" name="0"></u-radio>
            </u-radio-group>
          </u-form-item>
          <u-form-item label="肾功能是否异常 :" prop="contraindications">
            <u-radio-group v-model="form.contraindications" placement="row">
              <u-radio
                label="是"
                name="1"
                @change="selectContrain"
                activeColor="#4682B4"
                :customStyle="{ marginRight: '20rpx' }"
              ></u-radio>
              <u-radio activeColor="#4682B4" label="否" name="0"></u-radio>
            </u-radio-group>
          </u-form-item>
          <u-form-item label="过往病史 :" prop="contraindications">
            <u-radio-group v-model="form.contraindications" placement="row">
              <u-radio
                label="是"
                name="1"
                @change="selectContrain"
                activeColor="#4682B4"
                :customStyle="{ marginRight: '20rpx' }"
              ></u-radio>
              <u-radio activeColor="#4682B4" label="否" name="0"></u-radio>
            </u-radio-group>
          </u-form-item>
          <u-form-item label="药物过敏史 :" prop="contraindications">
            <u-radio-group v-model="form.contraindications" placement="row">
              <u-radio
                label="是"
                name="1"
                @change="selectContrain"
                activeColor="#4682B4"
                :customStyle="{ marginRight: '20rpx' }"
              ></u-radio>
              <u-radio activeColor="#4682B4" label="否" name="0"></u-radio>
            </u-radio-group>
          </u-form-item>
          <u-form-item label="家庭遗传史 :" prop="contraindications">
            <u-radio-group v-model="form.contraindications" placement="row">
              <u-radio
                label="是"
                name="1"
                @change="selectContrain"
                activeColor="#4682B4"
                :customStyle="{ marginRight: '20rpx' }"
              ></u-radio>
              <u-radio activeColor="#4682B4" label="否" name="0"></u-radio>
            </u-radio-group>
          </u-form-item>
        </u--form>
      </view>
      <view class="doit">
        <u-button
          type="primary"
          sizi="mini"
          :customStyle="{ width: '120rpx', height: '60rpx' }"
          text="确定"
          color="#4682B4"
        ></u-button>
        <u-button
          type="error"
          sizi="mini"
          :customStyle="{ width: '120rpx', height: '60rpx' }"
          text="取消"
          @click="$emit('closeSelectContrain')"
          color="#4682B4"
        ></u-button>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      form: {
        contraindications: "0",
      },
    };
  },
  props: ["showSelectContrain"],

  methods: {
    close() {
      this.$emit("closeSelectContrain");
    },
    open() {
      console.log("open");
    },
    selectContrain() {},
  },
};
</script>
<style lang='less' scoped>
.dialog {
  width: 470rpx;

  .form_box {
    margin: 0 auto;
  }
}
.doit {
  display: flex;
  justify-content: space-around;
  padding: 15rpx;
}
</style>