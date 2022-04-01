<!-- 处方信息 -->
<template>
  <view>
    <u-sticky>
      <u-subsection
        :list="list"
        :current="curNow"
        activeColor="#22A6F1"
        @change="sectionChange"
      ></u-subsection>
    </u-sticky>
    <component class="tab" v-bind:is="currentTabComponent"></component>
  </view>
</template>

<script>
import pendingCommit from "./components/pendingCommit";
import handleAdd from "./components/handleAdd";
import eventBus from "@/utils/eventBus";
export default {
  data() {
    return {
      list: ["待提交单据", "手动新增"],
      curNow: 0,
    };
  },

  methods: {
    sectionChange(index) {
      this.curNow = index;
    },
  },
  created() {
    eventBus.$on("switchToWait", () => {
      this.curNow = 0;
    });
  },
  components: {
   pendingCommit,
    handleAdd,
  },
  computed: {
    currentTabComponent: function () {
      switch (this.curNow) {
        case 0:
          return "pendingCommit";

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