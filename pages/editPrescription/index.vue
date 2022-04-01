<!-- 编辑处方 -->
<template>
  <view class="main">
    <u--form
      ref="form"
      labelPosition="left"
      labelAlign="right"
      labelWidth="150rpx"
      :model="form"
      :rules="rules"
    >
      <u-form-item label="姓名 :" prop="name" borderBottom>
        <u--input
          v-model="form.name"
          border="none"
          placeholder="请输入姓名"
        ></u--input>
      </u-form-item>
      <u-form-item
        label="性别 :"
        prop="gend"
        borderBottom
        @click="showSex = true"
      >
        <u--input
          v-model="form.gend"
          disabled
          disabledColor="#ffffff"
          placeholder="请选择性别"
          border="none"
        ></u--input>
        <u-icon slot="right" name="arrow-right"></u-icon>
      </u-form-item>
      <u-form-item label="年龄 :" prop="age" borderBottom>
        <u--input
          v-model="form.age"
          border="none"
          placeholder="请输入年龄"
        ></u--input>
      </u-form-item>
      <u-form-item label="禁忌症 :" prop="contraindication" borderBottom>
        <u-radio-group
          activeColor="#22A6F1"
          v-model="form.contraindication"
          placement="row"
          @change="selectContrain"
        >
          <u-radio
            label="有"
            :name="1"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio label="无" :name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item
        label="疾病 :"
        prop="disease"
        :borderBottom="!selectedDiseaseList.length > 0"
      >
        <u-search
          placeholder="请输入疾病名称"
          shape="square"
          bgColor="FFF"
          v-model="diseaseName"
          :show-action="true"
          actionText="查询"
          searchIcon=""
          @search="searchDisease"
          @custom="searchDisease"
        ></u-search>
      </u-form-item>
      <view class="selected" v-if="selectedDiseaseList.length > 0">
        <u-tag
          v-for="(item, index) in selectedDiseaseList"
          :key="item.id"
          :text="item.fjbname"
          closable
          plain
          @close="delOne(index)"
          size="mini"
          type="warning"
        ></u-tag>
      </view>
      <u-form-item label="既往用药 :" prop="pastMedication">
        <view style="display: flex">
          <u-button
            type="primary"
            :customStyle="{ width: '80rpx', marginRight: '50rpx' }"
            color="#22A6F1"
            size="small"
            @click="showQueryDrug = true"
            text="药品搜索"
          ></u-button>
          <u-button
            type="primary"
            style="width: 80rpx"
            color="#22A6F1"
            @click="queryMenuList"
            size="small"
            text="选单搜索"
          ></u-button
        ></view>
      </u-form-item>
    </u--form>

    <!-- <view class="listbox"> -->
    <!-- <view class="list" style="width:750rpx"> -->
    <uni-table border stripe emptyText="暂无更多数据">
      <!-- 表头行 -->
      <uni-tr>
        <uni-th align="center" width="72">药品</uni-th>
        <uni-th align="center" width="60">规格</uni-th>
        <uni-th align="center" width="50">单位</uni-th>
        <uni-th align="center" width="80">用法用量</uni-th>
        <uni-th align="center" width="80">操作</uni-th>
      </uni-tr>
      <!-- 表格数据行 -->
      <uni-tr v-for="(item, index) in pastMedication" :key="item.id">
        <uni-td align="center">{{ item.name }}</uni-td>
        <uni-td align="center">{{ item.spec }}</uni-td>
        <uni-td align="center">{{ item.unit }}</uni-td>
        <uni-td align="center"
          >{{ item.instructions }}/{{ item.frequency }}/{{
            item.dosage
          }}</uni-td
        >
        <uni-td align="center">
          <u-button
            type="primary"
            :customStyle="{ width: '70rpx' }"
            color="#22A6F1"
            size="mini"
            @click="editDrug(item, index)"
            text="编辑"
          ></u-button>
          <u-button
            type="error"
            :customStyle="{ width: '70rpx', marginTop: '5rpx' }"
            size="mini"
            @click="delDrug(index)"
            text="删除"
          ></u-button>
        </uni-td>
      </uni-tr>
    </uni-table>
    <!-- </view> -->
    <!-- </view> -->

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
          @afterRead="afterRead"
          @delete="deletePic"
          name="1"
          :maxCount="1"
        ></u-upload>
      </u-form-item>
    </u--form>

    <!-- 保存 -->
    <view style="padding: 20rpx 0">
      <u-button
        type="primary"
        color="#22A6F1"
        @click="submitForm"
        text="保存"
      ></u-button>
    </view>

    <!-- 性别 -->
    <u-action-sheet
      :show="showSex"
      :actions="actions"
      @close="showSex = false"
      @select="sexSelect"
    >
    </u-action-sheet>

    <!-- #region -->
    <!-- 禁忌症 -->
    <PopupContrain
      :showSelectContrain="showSelectContrain"
      @closeSelectContrain="closeContrain"
      :liverFuncAbnormal="form.liverFuncAbnormal"
      :kidneyFuncAbnormal="form.kidneyFuncAbnormal"
      :pastMedHistory="form.pastMedHistory"
      :drugAllergyHistory="form.drugAllergyHistory"
      :familyHistory="form.familyHistory"
      @contrainInfo="getContrainInfo"
    />

    <!-- 疾病查询 -->
    <PopupDisease
      :diseaseName="diseaseName"
      :showDiseasesList="showDiseasesList"
      @closeDiseasesList="showDiseasesList = false"
      @clickone="pushOne"
    />

    <!-- 药品查询 -->
    <PopupDrug
      :showQueryDrug="showQueryDrug"
      @closeQueryDrug="showQueryDrug = false"
      @clickone="clickDrug"
    />

    <!-- 选单搜索 -->
    <PopupMenu
      :showMenuSearch="showMenuSearch"
      @closeMenuSearch="showMenuSearch = false"
      @clickorder="clickOrder"
    />

    <!-- 编辑用法用量 -->
    <PopupDose
      :showDoseMaintain="showDoseMaintain"
      @closeDoseMaintain="closeDoseMaintain"
    />

    <!-- # endregion -->

    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
import PopupContrain from "../prescribingInfo/popup/popup-contrain";
import PopupDisease from "../prescribingInfo/popup/popup-disease";
import PopupDrug from "../prescribingInfo/popup/popup-drug";
import PopupMenu from "../prescribingInfo/popup/popup-menu";
import PopupDose from "../prescribingInfo/popup/popup-dosemaintain";
import eventBus from "@/utils/eventBus";
import {
  uploadImg,
  updatePrescription,
  queryPrescriptionDetail,
} from "@/api/work";
import { editDrug } from "@/api/drug";
export default {
  data() {
    return {
      showSex: false, // 性别
      form: {
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
      rules: {
        name: {
          type: "string",
          required: true,
          message: "姓名不能为空",
          trigger: ["blur"],
        },
        gend: {
          type: "string",
          required: true,
          message: "请选择男或女",
          trigger: ["change"],
        },
        age: {
          type: "number",
          required: true,
          message: "年龄不能为空",
          trigger: ["blur"],
        },
      },
      form1: {},

      rules1: {},

      actions: [
        {
          name: "男",
        },
        {
          name: "女",
        },
        {
          name: "保密",
        },
      ],

      diseaseName: "",

      showSelectContrain: false, // 禁忌症
      showDiseasesList: false, // 疾病查询
      showQueryDrug: false, // 查询药品
      showMenuSearch: false, //选单搜索
      showDoseMaintain: false, // 用法用量
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
            res.prescription.gend === 1
              ? "男"
              : res.prescription.gend === 0
              ? "女"
              : "保密";

          //疾病回填
          this.selectedDiseaseList =
            res.prescription.diseaseClassificationEntityList;
          this.form.diseaseId = this.selectedDiseaseList.map((item) => {
            return item.id;
          });

          //  药品回填
          res.prescription.drugEntityList.indexOf(null) < 0 &&
            (this.pastMedication = res.prescription.drugEntityList); // 既往用药 内容不为null 才去赋值

          this.form.drugIds = this.pastMedication.map((item) => {
            return item.id;
          });

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
    /**性别 */
    sexSelect(e) {
      this.form.gend = e.name;
    },

    /** 禁忌症 */
    selectContrain(name) {
      name === 1 && (this.showSelectContrain = true);
    },
    closeContrain() {
      this.showSelectContrain = false;
    },
    getContrainInfo(info) {
      this.form.contraindication = Object.values(info).indexOf(1) > -1 ? 1 : 0;
      this.form = Object.assign(this.form, info);
    },

    /** 疾病 */
    async searchDisease(value) {
      if (value !== "") {
        eventBus.$emit("getDis", value);
        this.showDiseasesList = true;
      } else {
        this.$refs.uToast.show({
          type: "default",
          duration: 1200,
          message: "请输入疾病名称",
        });
      }
    },

    pushOne(item) {
      this.form.diseaseId.push(item.id);
      this.form.diseaseId = [...new Set(this.form.diseaseId)];
      this.selectedDiseaseList.push(item);
      this.selectedDiseaseList = [...new Set(this.selectedDiseaseList)];
    },

    delOne(index) {
      this.form.diseaseId.splice(index, 1);
      this.selectedDiseaseList.splice(index, 1);
    },

    /**  药品回填  */
    clickDrug(item) {
      this.form.drugIds.push(item.id);
      this.form.drugIds = [...new Set(this.form.drugIds)];
      this.pastMedication.push(item);
      this.pastMedication = [...new Set(this.pastMedication)];
    },
    delDrug(index) {
      this.form.drugIds.splice(index, 1);
      this.pastMedication.splice(index, 1);
    },

    /** 选单搜索 */
    queryMenuList() {
      this.showMenuSearch = true;
      eventBus.$emit("getOrderlist");
    },
    /** 选单回填 */
    clickOrder(item) {
      this.form.name = item.name;
      this.form.drugIds.push(item.drugId);
      this.form.drugIds = [...new Set(this.form.drugIds)];
      item.name = item.drugName;
      this.pastMedication.push(item);
      this.pastMedication = [...new Set(this.pastMedication)];
    },

    // 编辑药品用法用量
    editDrug(item, index) {
      eventBus.$emit("editDrug", item, index);
      this.showDoseMaintain = true;
    },

    // 关闭编辑用法用量
    async closeDoseMaintain(item, id, index) {
      if (item) {
        let res = await editDrug({
          id,
          ...item,
        });
        if (res.code === 0 && res.msg === "success") {
          let { instructions, frequency, dosage } = item;
          this.pastMedication[index].instructions = instructions;
          this.pastMedication[index].frequency = frequency;
          this.pastMedication[index].dosage = dosage;
        } else {
          this.$refs.uToast.show({
            type: "default",
            duration: 1000,
            message: res.msg,
          });
        }
      }
      this.showDoseMaintain = false;
    },

    // 电子处方
    async afterRead(event) {
      this.$refs.uToast.show({
        type: "loading",
        message: "上传中...",
        iconUrl: "https://cdn.uviewui.com/uview/demo/toast/loading.png",
      });
      try {
        let res = await uploadImg(event.file.url);
        let reallyRes = JSON.parse(res[1].data);
        if (reallyRes.code === 0 && reallyRes.msg === "success") {
          this.$refs.uToast.show({
            type: "success",
            duration: 1000,
            message: "上传成功",
          });
          this.fileList.push({
            status: "success",
            message: "",
            url: reallyRes.url,
          });
          this.form.prescriptionPaper = reallyRes.url;
        } else {
          this.$refs.uToast.show({
            type: "default",
            duration: 1000,
            message: reallyRes.msg,
          });
        }
      } catch (error) {
        this.$refs.uToast.show({
          type: "default",
          duration: 1000,
          message: "上传失败",
        });
      }
    },

    deletePic(event) {
      this.form.prescriptionPaper = "";
      this.fileList.splice(event.index, 1);
    },

    // 保存
    submitForm() {
      this.$refs.form
        .validate()
        .then(async (res) => {
          this.form.gend = this.truelySex;
          this.form.diseaseId = this.diseaseIdStr;
          try {
            let result = await updatePrescription(this.form);
            if (result.code === 0 && result.msg === "success") {
              this.$refs.uToast.show({
                type: "success",
                duration: 1000,
                message: "保存成功",
                complete() {
                  uni.redirectTo({
                    url: "/pages/prescribingInfo/index",
                  });
                },
              });
            }
          } catch (error) {
            this.$refs.uToast.show({
              type: "default",
              duration: 1000,
              message: "保存失败",
            });
          }
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
  onLoad(params) {
    this.queryPrescriptionDetail(params.id);
  },

  computed: {
    diseaseIdStr() {
      return this.form.diseaseId.join(",");
    },
    truelySex() {
      switch (this.form.gend) {
        case "女":
          return 0;
        case "男":
          return 1;
        case "保密":
          return 2;
      }
    },
  },

  components: {
    PopupContrain,
    PopupDisease,
    PopupDrug,
    PopupMenu,
    PopupDose,
  },
};
</script>
<style lang='less' scoped>
.main {
  padding: 0 25rpx;
  // height: 100vh;

  .selected {
    padding: 0 0 30rpx 150rpx;
    border-bottom: 1px solid #e1e2e3;
  }
  .listbox {
    border-bottom: 1px solid #e1e2e3;
  }

  .list {
    // width: 750rpx;
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
}
</style>