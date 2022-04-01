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
        prop="date"
        @click="showDatePicker = true"
        borderBottom
      >
        <u--input
          disabled
          disabledColor="#ffffff"
          v-model="form.date"
          border="none"
        ></u--input>
      </u-form-item>
      <u-form-item label="单据流水号 :" prop="orderNo" borderBottom>
        <u--input v-model="form.orderNo" border="none"></u--input>
      </u-form-item>
      <u-form-item label="患者 :" prop="name" borderBottom>
        <u--input v-model="form.name" border="none"></u--input>
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
    <view class="list">
      <u-list @scrolltolower="scrolltolower" lowerThreshold="0" height="700rpx">
        <u-list-item v-for="(item, index) in menuList" :key="index">
          <u-cell
            @click="clickOne(item)"
            :title="`${index + 1}、${item.skuCode}  |  ${item.drugName} | ${
              item.name
            }  | ${item.orderNo}   `"
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
      closeOnClickOverlay
      @confirm="chooseDate"
      @cancel="showDatePicker = false"
    ></u-datetime-picker>
  </u-popup>
</template>

<script>
import { getDrugbyMenu } from "@/api/drug";
import eventBus from "@/utils/eventBus";
export default {
  data() {
    return {
      form: {
        date: "",
        // orderNo: "120220322073470",
        orderNo: "",
        name: "",
      },
      rules: {},
      showDatePicker: false,
      selectDate: Number(Date.now()), // 要有初始值否则报错
      menuList: [],
      wholeList: [], // 完整的列表
      rangeNumber: 20,
      page: {
        currentPage: 1,
        pageSize: 10,
      },
      status: "loading",
    };
  },
  props: ["showMenuSearch"],
  methods: {
    /** 查询单据列表 */
    async getDrugbyMenu() {
      uni.showLoading({
        title: "搜索中...",
      });
      try {
        let res = await getDrugbyMenu(this.form);
        uni.hideLoading();
        if (res.code === 0 && res.msg === "success") {
          this.wholeList = res.list;
          this.menuList = this.wholeList.slice(0, this.rangeNumber);
        }
      } catch (error) {
        uni.hideLoading();
      }
    },
    clickOne(val) {
      this.$emit("clickorder", val);
      this.$emit("closeMenuSearch");
    },
    scrolltolower() {
      var tempArr = this.wholeList.slice(
        this.rangeNumber,
        this.rangeNumber + 10
      );
      // this.menuList = [...this.menuList, ...tempArr];
      this.menuList.push(...tempArr);
      this.rangeNumber += 10;
    },
    getTodayDate() {
      let date = new Date(Date.now());
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      this.form.date = year + "-" + month + "-" + day;
    },
    chooseDate(val) {
      this.getTodayDate(val.value);
      this.showDatePicker = false;
    },
    close() {
      this.$emit("closeMenuSearch");
      uni.hideLoading();
    },
  },
  created() {
    eventBus.$on("getOrderlist", () => {
      this.getTodayDate(); //获取今天日期
      // this.getDrugbyMenu();
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
  height: 570rpx;
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
