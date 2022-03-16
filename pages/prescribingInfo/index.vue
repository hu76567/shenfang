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
import waitSubmit from "./components/waitSubmit";
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
    waitSubmit,
    handleAdd,
  },
  computed: {
    currentTabComponent: function () {
      switch (this.curNow) {
        case 0:
          return "waitSubmit";

        case 1:
          return "handleAdd";

        default:
          break;
      }
    },
  },
};
</script>
<style lang='less' scoped>
</style>