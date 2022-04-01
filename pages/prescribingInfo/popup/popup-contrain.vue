<!-- 禁忌症 -->
<template>
  <u-popup :show="showSelectContrain" mode="bottom" @close="save" round="7">
    <u-form
      class="form"
      :model="form"
      ref="form"
      labelPosition="left"
      labelAlign="right"
      labelWidth="200rpx"
    >
      <u-form-item label="肝功能异常 :" prop="liverFuncAbnormal">
        <u-radio-group
          activeColor="#22A6F1"
          v-model="form.liverFuncAbnormal"
          placement="row"
        >
          <u-radio
            label="是"
            :name="1"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio activeColor="#22A6F1" label="否" :name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item label="肾功能异常 :" prop="kidneyFuncAbnormal">
        <u-radio-group v-model="form.kidneyFuncAbnormal" placement="row">
          <u-radio
            label="是"
            :name="1"
            activeColor="#22A6F1"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio activeColor="#22A6F1" label="否" :name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item label="过往病史 :" prop="pastMedHistory">
        <u-radio-group
          activeColor="#22A6F1"
          v-model="form.pastMedHistory"
          placement="row"
        >
          <u-radio
            label="是"
            :name="1"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio label="否" :name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item label="药物过敏史 :" prop="drugAllergyHistory">
        <u-radio-group
          activeColor="#22A6F1"
          v-model="form.drugAllergyHistory"
          placement="row"
        >
          <u-radio
            label="是"
            :name="1"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio label="否" :name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item label="家庭遗传史 :" prop="familyHistory">
        <u-radio-group
          activeColor="#22A6F1"
          v-model="form.familyHistory"
          placement="row"
        >
          <u-radio
            label="是"
            :name="1"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio label="否" :name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
    </u-form>
    <view class="doit">
      <u-button
        type="error"
        sizi="mini"
        :customStyle="{ width: '120rpx', height: '60rpx' }"
        text="保存"
        @click="save"
        color="#22A6F1"
      ></u-button>
    </view>
  </u-popup>
</template>

<script>
export default {
  data() {
    return {
      form: {
        liverFuncAbnormal: 0, //肝
        kidneyFuncAbnormal: 0, //肾
        pastMedHistory: 0, //过往病史
        drugAllergyHistory: 0, //药物过敏史
        familyHistory: 0, // 家族遗传史
      },
    };
  },
  props: ["showSelectContrain", "liverFuncAbnormal","kidneyFuncAbnormal","pastMedHistory","drugAllergyHistory","familyHistory"],

  methods: {
    save() {
      this.$emit("contrainInfo", this.form);
      this.$emit("closeSelectContrain");
    },
  },
  watch: {
    liverFuncAbnormal(newValue, oldValue) {
      this.form.liverFuncAbnormal = newValue;
    },
    kidneyFuncAbnormal(newValue, oldValue) {
      this.form.kidneyFuncAbnormal = newValue;
    },
    pastMedHistory(newValue, oldValue) {
      this.form.pastMedHistory = newValue;
    },
    drugAllergyHistory(newValue, oldValue) {
      this.form.drugAllergyHistory = newValue;
    },
    familyHistory(newValue, oldValue) {
      this.form.familyHistory = newValue;
    },
  },
  created() {
  },
};
</script>
<style lang='less' scoped>
.form {
  // height: 450rpx;
  margin-left: 50rpx;
}
.doit {
  display: flex;
  justify-content: center;
  padding: 15rpx;
}
</style>