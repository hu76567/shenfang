<!-- 处方详情 -->
<template>
  <view class="main">
    <u--form
      ref="form"
      labelPosition="left"
      labelAlign="right"
      :labelWidth="form.contraindication === 1 ? '200rpx' : '150rpx'"
      :model="form"
      :rules="rules"
    >
      <u-form-item label="姓名 :" prop="name" borderBottom>
        <u--input
          v-model="form.name"
          disabledColor="#ffffff"
          disabled
          border="none"
        ></u--input>
      </u-form-item>
      <u-form-item label="性别 :" prop="gend" borderBottom>
        <u--input
          v-model="form.gend"
          disabled
          disabledColor="#ffffff"
          placeholder="请选择性别"
          border="none"
        ></u--input>
      </u-form-item>
      <u-form-item label="年龄 :" prop="age" borderBottom>
        <u--input
          v-model="form.age"
          disabledColor="#ffffff"
          disabled
          border="none"
        ></u--input>
      </u-form-item>
      <u-form-item label="禁忌症 :" prop="contraindication" borderBottom>
        <u-radio-group
          activeColor="#22A6F1"
          :disabled="true"
          v-model="form.contraindication"
          placement="row"
        >
          <u-radio
            label="有"
            :name="1"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio label="无" :name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
      <!-- #region -->

      <u-form-item
        v-if="form.contraindication === 1"
        label="肝功能异常 :"
        prop="liverFuncAbnormal"
      >
        <u-radio-group
          activeColor="#22A6F1"
          :disabled="true"
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
      <u-form-item
        v-if="form.contraindication === 1"
        label="肾功能异常 :"
        prop="kidneyFuncAbnormal"
      >
        <u-radio-group
          v-model="form.kidneyFuncAbnormal"
          :disabled="true"
          placement="row"
        >
          <u-radio
            label="是"
            :name="1"
            activeColor="#22A6F1"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio activeColor="#22A6F1" label="否" :name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item
        v-if="form.contraindication === 1"
        label="过往病史 :"
        prop="pastMedHistory"
      >
        <u-radio-group
          activeColor="#22A6F1"
          :disabled="true"
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
      <u-form-item
        v-if="form.contraindication === 1"
        label="药物过敏史 :"
        prop="drugAllergyHistory"
      >
        <u-radio-group
          activeColor="#22A6F1"
          :disabled="true"
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
      <u-form-item
        v-if="form.contraindication === 1"
        label="家庭遗传史 :"
        prop="familyHistory"
      >
        <u-radio-group
          activeColor="#22A6F1"
          v-model="form.familyHistory"
          :disabled="true"
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
      <!-- # endregion -->

      <u-form-item label="疾病 :" prop="disease" borderBottom>
        <view class="diselist">
          <u-tag
            class="tag-item"
            v-for="item in selectedDiseaseList"
            :key="item.id"
            :text="item.fjbname"
            plain
            size="mini"
            type="warning"
          ></u-tag>
        </view>
      </u-form-item>

      <u-form-item label="既往用药 :"> </u-form-item>
    </u--form>

    <view class="listbox">
      <view class="list">
        <uni-table border stripe emptyText="暂无更多数据">
          <!-- 表头行 -->
          <uni-tr>
            <uni-th align="center" width="80">药品</uni-th>
            <uni-th align="center" width="80">注册证号</uni-th>
            <uni-th align="center" width="60">规格</uni-th>
            <uni-th align="center" width="72">用法用量</uni-th>
            <uni-th align="center" width="50">单位</uni-th>
          </uni-tr>
          <!-- 表格数据行 -->
          <uni-tr v-for="item in pastMedication" :key="item.id">
            <uni-td align="center">{{ item.name }}</uni-td>
            <uni-td align="center">
              {{ item.registrationNo }}
            </uni-td>
            <uni-td align="center">{{ item.spec }}</uni-td>
            <uni-td align="center"
              >{{ item.instructions }}/{{ item.frequency }}/{{
                item.dosage
              }}</uni-td
            >
            <uni-td align="center">{{ item.unit }}</uni-td>
          </uni-tr>
        </uni-table>
      </view>
    </view>

    <u--form
      labelPosition="left"
      labelAlign="right"
      labelWidth="150rpx"
      :model="form1"
      :rules="rules1"
      ref="form1"
    >
      <u-form-item label="电子处方 :" borderBottom>
        <u-upload
          :fileList="fileList"
          :previewFullImage="true"
          :deletable="false"
          name="1"
          :maxCount="1"
        ></u-upload>
      </u-form-item>
    </u--form>

    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
import { queryPrescriptionDetail } from "@/api/work";
export default {
  data() {
    return {
      form: {
        id: "",
        name: "",
        gend: "",
        age: "",
        contraindication: 0, //禁忌症
        diseaseId: [], // 疾病ids
        prescriptionPaper: "", // 电子处方
        drugIds: [], //药品ids
      },
      selectedDiseaseList: [], // 已选疾病列表
      pastMedication: [], //已选药品列表
      fileList: [], // 电子处方临时存储
      rules: {},
      form1: {},
      rules1: {},
    };
  },

  methods: {
    async queryPrescriptionDetail(id) {
      uni.showLoading({
        title: "加载中",
      });
      try {
        let res = await queryPrescriptionDetail(id);
        if (res.code === 0 && res.msg === "success") {
          this.form = res.prescription;
          this.form.gend =
            this.form.gend === 1 ? "男" : this.form.gend === 0 ? "女" : "保密";

          this.selectedDiseaseList =
            res.prescription.diseaseClassificationEntityList;

          res.prescription.drugEntityList.indexOf(null) < 0 &&
            (this.pastMedication = res.prescription.drugEntityList); // 既往用药 内容不为null 才去赋值

          this.form.prescriptionPaper = res.prescription.prescriptionPaper;
          this.fileList.push({
            status: "success",
            message: "",
            url: this.form.prescriptionPaper,
          });
        }
        uni.hideLoading();
      } catch (error) {
        uni.hideLoading();
      }
    },
  },
  onLoad(params) {
    this.queryPrescriptionDetail(params.id);
  },
};
</script>

<style lang='less' scoped>
.main {
  padding: 0 25rpx;
  height: 100vh;

  .selected {
    padding: 0 0 30rpx 150rpx;
    border-bottom: 1px solid #e1e2e3;
  }

  .listbox {
    padding-bottom: 20rpx;
    border-bottom: 1px solid #e1e2e3;
  }

  .list {
    width: 750rpx;
    margin-top: 10rpx;
    // height: 400rpx;
    overflow: auto;
    .listcontent {
      height: 90rpx;
      line-height: 90rpx;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #ccc;
      .detail {
        margin: auto 0;
        text-align: center;
        height: 50rpx;
        line-height: 50rpx;
        width: 80rpx;
        background-color: lightsteelblue;
        border-radius: 10rpx;
      }
    }

    .listcontent:last-child {
      border-bottom: 1px solid transparent;
    }

    u-list {
      margin: 0 auto;
    }
  }

  .diselist {
    display: flex;
    flex-direction: column;
    .tag-item {
      margin-bottom: 10rpx;
    }
  }
}
</style>