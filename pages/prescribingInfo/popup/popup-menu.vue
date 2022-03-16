<!-- 选单搜索 -->
<template>
  <u-popup :show="showMenuSearch" @close="close" mode="bottom" round="7">
    <u--form
      labelPosition="left"
      labelAlign="right"
      labelWidth="200rpx"
      :model="form"
      :rules="rules"
      ref="form"
    >
      <u-form-item
        label="单据日期 :"
        prop="documentDate"
        @click="showDatePicker = true"
        borderBottom
      >
        <u--input
          disabled
          disabledColor="#ffffff"
          v-model="form.documentDate"
          border="none"
        ></u--input>
      </u-form-item>
      <u-form-item
        label="单据流水号 :"
        prop="documentSerialNumber"
        borderBottom
      >
        <u--input v-model="form.documentSerialNumber" border="none"></u--input>
      </u-form-item>
      <u-form-item label="患者 :" prop="patient" borderBottom>
        <u--input v-model="form.patient" border="none"></u--input>
      </u-form-item>
    </u--form>
    <view
      ><u-button
        type="primary"
        text="搜索"
        style="width: 170rpx; margin: 8rpx auto"
        size="small"
        @click="getDrugbyMenu"
      ></u-button
    ></view>
    <view class="listHead"
      ><text>用户</text> <text>药品</text> <text>货号</text> <text>规格</text>
    </view>
    <view class="list">
      <u-list @scrolltolower="scrolltolower" height="610rpx">
        <u-list-item v-for="(item, index) in menuList" :key="index">
          <!-- <view class="listcontent" @click="clickOne"
            ><text>张三</text> <text>氟哌酸</text> <text>211560 </text>
            <text>16粒/板*2</text>
          </view> -->
          <u-cell
            @click="clickOne"
            :title="`${index + 1}、${item.name}`"
            :name="item.id"
          >
          </u-cell>
        </u-list-item>
      </u-list>
    </view>
    <u-datetime-picker
      :show="showDatePicker"
      v-model="selectDate"
      mode="date"
      @confirm="chooseDate"
      @cancel="showDatePicker = false"
    ></u-datetime-picker>
  </u-popup>
</template>

<script>
import { getDrugbyMenu } from "../../../api/drug";
export default {
  data() {
    return {
      form: {
        documentDate: "",
        documentSerialNumber: "250",
        patient: "张三",
      },
      rules: {},
      showDatePicker: false,
      selectDate: Number(Date.now()), // 要有初始值否则报错
      menuList: [],
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
      page: {
        currentPage: 1,
        pageSize: 10,
      },
    };
  },
  props: ["showMenuSearch"],
  methods: {
    async getDrugbyMenu() {
      let res = await getDrugbyMenu({ ...thisform });
      if (res.code === 0 && res.msg === "success") {
        this.menuList = [...this.menuList, ...res.page.list];
      }
    },
    clickOne(val) {
      let item = this.menuList.find((h) => {
        return h.id === val.name;
      });
      this.$emit("clickone", item);
      this.$emit("closeQueryDrug");
    },
    scrolltolower() {
      this.page.currentPage += 1;
      this.getDrugbyMenu();
    },
    getTodayDate(value) {
      let date = new Date(value);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      this.form.documentDate = year + "-" + month + "-" + day;
    },
    chooseDate(val) {
      this.getTodayDate(val.value);
      this.showDatePicker = false;
    },
    close() {
      this.$emit("closeMenuSearch");
    },
  },
  created() {
    // this.loadmore();
    this.getTodayDate(Date.now());
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
