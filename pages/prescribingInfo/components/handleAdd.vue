<!--  -->
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
        <u-radio-group v-model="form.contraindications" placement="row">
          <u-radio
            label="有"
            name="1"
            activeColor="#4682B4"
            @change="selectContrain"
            :customStyle="{ marginRight: '70rpx' }"
          ></u-radio>
          <u-radio activeColor="#4682B4" label="无" name="0"></u-radio>
        </u-radio-group>
      </u-form-item>
      <u-form-item label="疾病 :" prop="disease" borderBottom>
        <u-search
          placeholder="请输入疾病名称"
          shape="square"
          bgColor="FFF"
          v-model="form.disease"
          :show-action="true"
          actionText="搜索"
          searchIcon=""
          :animation="true"
          @custom="searchDisease"
        ></u-search>
      </u-form-item>
      <u-form-item label="既往用药 :" prop="pastMedication" borderBottom>
        <view style="display: flex">
          <u-button
            type="primary"
            :customStyle="{ width: '80rpx', marginRight: '50rpx' }"
            color="#4682B4"
            size="mini"
            text="药品搜索"
          ></u-button>
          <u-button
            type="primary"
            style="width: 80rpx"
            color="#4682B4"
            size="mini"
            text="选单搜索"
          ></u-button
        ></view>
      </u-form-item>
      <u-form-item label="电子处方 :" prop="age" borderBottom>
        <u-upload
          :fileList="fileList"
          @afterRead="afterRead"
          name="1"
        ></u-upload>
      </u-form-item>
    </u--form>

    <u-button
      type="primary"
      text="确定"
      color="#4682B4"
      @click="submitForm"
    ></u-button>
    <u-gap height="10" bgColor="#fff"></u-gap>
    <u-button type="error" text="重置"></u-button>

    <u-action-sheet
      :show="showSex"
      :actions="actions"
      title="请选择性别"
      @close="showSex = false"
      @select="sexSelect"
    >
    </u-action-sheet>

    <selectContrain
      :showSelectContrain="showSelectContrain"
      @closeSelectContrain="showSelectContrain = false"
    />
  </view>
</template>

<script>
import selectContrain from "./selectContrain";

export default {
  data() {
    return {
      showSex: false, // 性别
      form: {
        name: "",
        sex: "",
        age: "",
        contraindications: "0",
        disease: "",
        pastMedication: "",
      },
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
      rules: {
        name: {
          type: "string",
          required: true,
          message: "请填写姓名",
          trigger: ["blur", "change"],
        },
        sex: {
          type: "string",
          max: 1,
          required: true,
          message: "请选择男或女",
          trigger: ["blur", "change"],
        },
        name: {
          type: "string",
          required: true,
          message: "请填写年龄",
          trigger: ["blur", "change"],
        },
      },
      fileList: [],
      showSelectContrain: false, // 禁忌症
    };
  },

  methods: {
    //  性别选择
    sexSelect(e) {
      this.form.sex = e.name;
      //   this.$refs.form.validateField("form.sex");
    },
    // 选择禁忌症
    selectContrain(name) {
      if (name == 1) this.showSelectContrain = true;
    },
    // 查询疾病
    searchDisease(){
      
    },
    async afterRead(event) {
      // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
      let lists = [].concat(event.file);
      let fileListLen = this[`fileList${event.name}`].length;
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: "uploading",
          message: "上传中",
        });
      });
      for (let i = 0; i < lists.length; i++) {
        const result = await this.uploadFilePromise(lists[i].url);
        let item = this[`fileList${event.name}`][fileListLen];
        this[`fileList${event.name}`].splice(
          fileListLen,
          1,
          Object.assign(item, {
            status: "success",
            message: "",
            url: result,
          })
        );
        fileListLen++;
      }
    },
    uploadFilePromise(url) {
      return new Promise((resolve, reject) => {
        let a = uni.uploadFile({
          url: "http://192.168.2.21:7001/upload", // 仅为示例，非真实的接口地址
          filePath: url,
          name: "file",
          formData: {
            user: "test",
          },
          success: (res) => {
            setTimeout(() => {
              resolve(res.data.data);
            }, 1000);
          },
        });
      });
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

  components: {
    selectContrain,
  },
};
</script>
<style lang='less' scoped>
.main {
  padding: 0 20rpx;
}
</style>