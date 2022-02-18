<!--  -->
<template>
  <view>
    <u-subsection
      :list="list"
      :current="curNow"
      activeColor="#4682B4"
      @change="sectionChange"
    ></u-subsection>
    <component class="tab" v-bind:is="currentTabComponent"></component>
  </view>
</template>

<script>
import pendingSubmit from "./components/pendingSubmit";
import handleAdd from "./components/handleAdd";
export default {
  data() {
    return {
      list: ["待提交单据", "手动新增"],
      curNow: 1,
    };
  },

  methods: {
    sectionChange(index) {
      this.curNow = index;
    },
  },
  components: {
    pendingSubmit,
    handleAdd,
  },
  computed: {
    currentTabComponent: function () {
      switch (this.curNow) {
        case 0:
          return "pendingSubmit";
          break;

        case 1:
          return "handleAdd";
          break;

        default:
          break;
      }
    },
  },
};
</script>
<style lang='less' scoped>
.tab {
  // border: 1px solid #ccc;
  // padding: 10px;
}
</style>