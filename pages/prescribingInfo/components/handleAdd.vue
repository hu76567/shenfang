<!-- 手动新增 处方信息 -->
<template>
  <view class="main">
    <u--form
      labelPosition="left"
      labelAlign="right"
      labelWidth="150rpx"
      :model="form"
      :rules="rules"
      ref="form"
    >
      <u-form-item label="姓名 :" prop="name" borderBottom>
        <u--input v-model="form.name" border="none"></u--input>
      </u-form-item>
      <u-form-item
        label="性别 :"
        prop="sex"
        borderBottom
        @click="showSex = true"
      >
        <u--input
          v-model="form.sex"
          disabled
          disabledColor="#ffffff"
          placeholder="请选择性别"
          border="none"
        ></u--input>
        <u-icon slot="right" name="arrow-right"></u-icon>
      </u-form-item>
      <u-form-item label="年龄 :" prop="age" borderBottom>
        <u--input v-model="form.age" border="none"></u--input>
      </u-form-item>
      <u-form-item label="禁忌症 :" prop="contraindications" borderBottom>
        <u-radio-group
          activeColor="#4682B4"
          v-model="form.contraindications"
          placement="row"
          @change="selectContrain"
        >
          <u-radio
            label="有"
            name="1"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio label="无" name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item label="疾病 :" prop="disease">
        <u-search
          placeholder="请输入疾病名称"
          shape="square"
          bgColor="FFF"
          v-model="form.disease"
          :show-action="true"
          actionText="搜索"
          searchIcon=""
          @custom="searchDisease"
        ></u-search>
      </u-form-item>
      <view class="selected">
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
      <u-form-item label="既往用药 :" prop="pastMedication" borderBottom>
        <view style="display: flex">
          <u-button
            type="primary"
            :customStyle="{ width: '80rpx', marginRight: '50rpx' }"
            color="#4682B4"
            size="small"
            @click="showQueryDrug = true"
            text="药品搜索"
          ></u-button>
          <u-button
            type="primary"
            style="width: 80rpx"
            color="#4682B4"
            @click="showMenuSearch = true"
            size="small"
            text="选单搜索"
          ></u-button
        ></view>
      </u-form-item>
    </u--form>

    <view class="listbox">
      <view class="list">
        <uni-table border stripe emptyText="暂无更多数据">
          <!-- 表头行 -->
          <uni-tr>
            <uni-th align="center">药品</uni-th>
            <uni-th align="center">规格</uni-th>
            <uni-th align="center">单位</uni-th>
            <uni-th align="center">用法用量</uni-th>
            <uni-th align="center">操作</uni-th>
          </uni-tr>
          <!-- 表格数据行 -->
          <uni-tr v-for="item in drugList" :key="item.id">
            <uni-td>{{ item.name }}</uni-td>
            <uni-td>{{ item.spec }}</uni-td>
            <uni-td>{{ item.unit }}</uni-td>
            <uni-td
              >{{ item.instructions }}/{{ item.frequency }}/{{
                item.dosage
              }}</uni-td
            >
            <uni-td
              ><u-button
                type="primary"
                :customStyle="{ width: '80rpx', marginRight: '50rpx' }"
                color="#4682B4"
                size="mini"
                @click="editDrug"
                text="编辑"
              ></u-button
            ></uni-td>
          </uni-tr>
        </uni-table>
      </view>
    </view>

    <u--form
      labelPosition="left"
      labelAlign="right"
      labelWidth="150rpx"
      :model="form"
      :rules="rules"
      ref="form"
    >
      <u-form-item
        label="电子处方 :"
        prop="electronicPrescription"
        borderBottom
      >
        <u-upload
          :fileList="fileList"
          @afterRead="afterRead"
          name="1"
        ></u-upload>
      </u-form-item>
    </u--form>

    <view style="padding: 20rpx 0">
      <u-button
        type="primary"
        color="#4682B4"
        size="small"
        @click="submitForm"
        text="保存"
      ></u-button>
    </view>

    <u-action-sheet
      :show="showSex"
      :actions="actions"
      @close="showSex = false"
      @select="sexSelect"
    >
    </u-action-sheet>

    <!-- 禁忌症 -->
    <PopupContrain
      :showSelectContrain="showSelectContrain"
      @closeSelectContrain="closeContrain"
      @contrainInfo="getContrainInfo"
    />

    <!-- 疾病查询 -->
    <PopupDisease
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
    />

    <!-- 编辑用法用量 -->
    <PopupDose
      :showDoseMaintain="showDoseMaintain"
      @closeDoseMaintain="showDoseMaintain = false"
    />

    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
import PopupContrain from "../popup/popup-contrain";
import PopupDisease from "../popup/popup-disease";
import PopupDrug from "../popup/popup-drug";
import PopupMenu from "../popup/popup-menu";
import PopupDose from "../popup/popup-dosemaintain";
import eventBus from "../../../utils/eventBus";
export default {
  data() {
    return {
      showSex: false, // 性别
      form: {
        name: "",
        sex: "",
        age: "",
        contraindications: "0",
        contrainInfo: {},
        disease: "",
        pastMedication: "",
        electronicPrescription: "",
      },
      actions: [
        {
          name: "男",
        },
        {
          name: "女",
        },
      ],
      rules: {
        name: {
          type: "string",
          required: true,
          message: "姓名不能为空",
          trigger: ["blur", "change"],
        },
        sex: {
          type: "string",
          max: 1,
          required: true,
          message: "请选择男或女",
          trigger: ["blur", "change"],
        },
        age: {
          type: "string",
          required: true,
          message: "年龄不能为空",
          trigger: ["blur", "change"],
        },
      },
      fileList: [],
      showSelectContrain: false, // 禁忌症
      showDiseasesList: false, // 疾病查询
      showQueryDrug: false, // 查询药品
      showMenuSearch: false, //选单搜索
      showDoseMaintain: false, // 用法用量

      urls: [
        "https://cdn.uviewui.com/uview/album/1.jpg",
        "https://cdn.uviewui.com/uview/album/2.jpg",
        "https://cdn.uviewui.com/uview/album/3.jpg",
        "https://cdn.uviewui.com/uview/album/4.jpg",
        "https://cdn.uviewui.com/uview/album/5.jpg",
        "https://cdn.uviewui.com/uview/album/6.jpg",
        "https://cdn.uviewui.com/uview/album/7.jpg",
        "https://cdn.uviewui.com/uview/album/8.jpg",
        "https://cdn.uviewui.com/uview/album/9.jpg",
        "https://cdn.uviewui.com/uview/album/10.jpg",
      ],
      selectedDiseaseList: [],
      drugList: [],
    };
  },

  methods: {
    //  选择性别
    sexSelect(e) {
      this.form.sex = e.name;
      //   this.$refs.form.validateField("form.sex");
    },

    /**
     * 禁忌症
     */
    selectContrain(name) {
      if (name === "1") {
        this.showSelectContrain = true;
      } else {
        this.form.contrainInfo = {};
      }
    },
    closeContrain() {
      this.showSelectContrain = false;

      this.form.contraindications =
        Object.values(this.form.contrainInfo).indexOf("1") != -1 ? "1" : "0";
    },
    getContrainInfo(info) {
      this.form.contrainInfo = info;
    },

    /**
     * 疾病
     */
    async searchDisease(value) {
      if (value !== "") {
        eventBus.$emit("getDis", value);
        this.showDiseasesList = true;
      } else {
        this.$refs.uToast.show({
          type: "default",
          duration: 1200,
          message: "疾病不能为空",
        });
      }
    },
    pushOne(item) {
      this.selectedDiseaseList.push(item);
      this.selectedDiseaseList = [...new Set(this.selectedDiseaseList)];
    },
    delOne(index) {
      this.selectedDiseaseList.splice(index, 1);
    },

    /**
     * 药品
     */
    clickDrug(item) {
      this.drugList.push(item);
      this.drugList = [...new Set(this.drugList)];
      console.log(this.drugList);
    },

    // 编辑药品用法用量
    editDrug() {
      eventBus.$emit("editDrug");
      this.showDoseMaintain = true;
    },

    scrolltolower() {
      // this.loadmore();
    },
    // 电子处方
    afterRead(event) {
      let fd = new FormData();
      fd.append("electronicPrescription", event.file);
    },

    submitForm() {
      this.$refs.form
        .validate()
        .then((res) => {
          uni.$u.toast("校验通过");
        })
        .catch((errors) => {
          uni.$u.toast("校验失败");
        });
    },
  },

  created() {},

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
  padding: 0 20rpx;
  height: 100vh;

  .selected {
    padding: 0 0 30rpx 150rpx;
    border-bottom: 1px solid #e1e2e3;
  }
  .listbox {
    border-bottom: 1px solid #e1e2e3;
  }

  .list {
    width: 750rpx;
    margin-top: 10rpx;
    height: 400rpx;
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