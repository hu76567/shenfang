<!-- 禁忌症 -->
<template>
  <u-popup
    :show="showSelectContrain"
    mode="bottom"
    @open="open"
    @close="close"
    round="7"
  >
    <u-form
      class="form"
      :model="form"
      ref="form"
      labelPosition="left"
      labelAlign="right"
      labelWidth="200rpx"
    >
      <u-form-item label="肝功能异常 :" prop="liverFunction">
        <u-radio-group
          activeColor="#4682B4"
          v-model="form.liverFunction"
          placement="row"
        >
          <u-radio
            label="是"
            name="1"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio activeColor="#4682B4" label="否" name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item label="肾功能异常 :" prop="renalFunction">
        <u-radio-group v-model="form.renalFunction" placement="row">
          <u-radio
            label="是"
            name="1"
            activeColor="#4682B4"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio activeColor="#4682B4" label="否" name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item label="过往病史 :" prop="pastMedicalHistory">
        <u-radio-group
          activeColor="#4682B4"
          v-model="form.pastMedicalHistory"
          placement="row"
        >
          <u-radio
            label="是"
            name="1"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio label="否" name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item label="药物过敏史 :" prop="drugAllergyHistory">
        <u-radio-group
          activeColor="#4682B4"
          v-model="form.drugAllergyHistory"
          placement="row"
        >
          <u-radio
            label="是"
            name="1"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio label="否" name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item label="家庭遗传史 :" prop="familyInheritance">
        <u-radio-group
          activeColor="#4682B4"
          v-model="form.familyInheritance"
          placement="row"
        >
          <u-radio
            label="是"
            name="1"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio label="否" name="0"></u-radio>
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
        color="#4682B4"
      ></u-button>
    </view>
  </u-popup>
</template>

<script>
export default {
  data() {
    return {
      form: {
        liverFunction: "0",
        renalFunction: "0",
        pastMedicalHistory: "0",
        drugAllergyHistory: "0",
        familyInheritance: "0",
      },
    };
  },
  props: ["showSelectContrain"],

  methods: {
    close() {
      this.$emit("closeSelectContrain");
    },
    save() {
      this.$emit("contrainInfo", this.form);
      this.$emit("closeSelectContrain");
    },
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