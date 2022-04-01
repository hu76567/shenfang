<!-- 修改用法用量 -->
<template>
  <u-popup :show="showDoseMaintain" @close="close" mode="bottom" round="5">
    <u--form
      labelPosition="left"
      labelAlign="right"
      labelWidth="200rpx"
      :model="form"
      :rules="rules"
      ref="form"
    >
      <u-form-item
        label="服用用法 :"
        @click="showUsage = true"
        prop="instructions"
        borderBottom
      >
        <u--input
          disabled
          disabledColor="#ffffff"
          v-model="form.instructions"
          border="none"
        ></u--input>
      </u-form-item>
      <u-form-item
        label="服用频次 :"
        @click="showFrequency = true"
        prop="frequency"
        borderBottom
      >
        <u--input
          disabled
          disabledColor="#ffffff"
          v-model="form.frequency"
          border="none"
        ></u--input>
      </u-form-item>
      <u-form-item
        label="服用剂量 :"
        prop="dosage"
        @click="showDose = true"
        borderBottom
      >
        <u--input
          v-model="form.dosage"
          disabled
          disabledColor="#ffffff"
          border="none"
        ></u--input>
      </u-form-item>
    </u--form>

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

    <!-- 用法 -->
    <u-action-sheet
      :show="showUsage"
      :actions="usageActions"
      title=""
      @close="showUsage = false"
      @select="selectUsage"
    >
    </u-action-sheet>

    <!-- 服用频次 -->
    <u-action-sheet
      :show="showFrequency"
      :actions="frequencyActions"
      title=""
      @close="showFrequency = false"
      @select="selectFrequency"
    >
    </u-action-sheet>

    <!-- 服用计量 -->
    <u-action-sheet
      :show="showDose"
      :actions="doseActions"
      title=""
      @close="showDose = false"
      @select="selectDose"
    >
    </u-action-sheet>
  </u-popup>
</template>

<script>
import { getUsageList, getFrequencyList, getDoseList } from "@/api/list";
import eventBus from "@/utils/eventBus";
export default {
  data() {
    return {
      form: {
        instructions: "",
        frequency: "",
        dosage: "",
      },
      showUsage: false,
      showFrequency: false,
      showDose: false,
      usageActions: [],
      frequencyActions: [],
      doseActions: [],
      rules: {},
    };
  },
  props: ["showDoseMaintain"],
  methods: {
    async getUsageList() {
      let res = await getUsageList();
      if (res.code === 0 && res.msg === "success") {
        this.usageActions = res.page.list;
        this.usageActions.map((item) => {
          return (item.name = item.instructions);
        });
      }
    },
    async getFrequencyList() {
      let res = await getFrequencyList();
      if (res.code === 0 && res.msg === "success") {
        this.frequencyActions = res.page.list;
        this.frequencyActions.map((item) => {
          return (item.name = item.frequency);
        });
      }
    },
    /** 查询剂量 */
    async getDoseList() {
      let res = await getDoseList();
      if (res.code === 0 && res.msg === "success") {
        this.doseActions = res.page.list;
        this.doseActions.map((item) => {
          return (item.name = item.dosage);
        });
      }
    },
    selectUsage(val) {
      this.form.instructions = val.name;
    },
    selectFrequency(val) {
      this.form.frequency = val.name;
    },
    selectDose(val) {
      this.form.dosage = val.name;
    },
    close() {
      this.$emit("closeDoseMaintain");
    },
    save() {
      this.$emit("closeDoseMaintain", this.form, this.editId,this.editIndex);
      this.editId=""
      this.editIndex = "";
    },
  },
  created() {
    eventBus.$on("editDrug", (item, index) => {
      this.editIndex = index;
      this.editId = item.id;
      let { instructions, frequency, dosage } = item;
      this.form.instructions = instructions;
      this.form.frequency = frequency;
      this.form.dosage = dosage;
      this.getUsageList();
      this.getFrequencyList();
      this.getDoseList();
    });
  },
};
</script>

<style lang="less" scoped>
.listHead {
  display: flex;
  justify-content: space-around;
}

.list {
  width: 750rpx;
  height: 650rpx;
  overflow: auto;
  .listcontent {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #ccc;
  }
  u-list {
    margin: 0 auto;
  }
}

.doit {
  display: flex;
  justify-content: center;
  padding: 15rpx;
}
</style>
