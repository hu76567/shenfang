<!--  -->
<template>
  <div>
    <uni-table border stripe emptyText="暂无更多数据">
      <!-- 表头行 -->
      <uni-tr>
        <uni-th align="center" width="30">处方编号</uni-th>
        <uni-th align="center" width="30">患者</uni-th>
        <uni-th align="center" width="90">日期</uni-th>
        <uni-th align="center" width="90">详情</uni-th>
        <uni-th align="center" width="90">状态</uni-th>
      </uni-tr>
      <!-- 表格数据行 -->
      <uni-tr>
        <uni-td>1111111</uni-td>
        <uni-td>Jeson</uni-td>
        <uni-td>2022-2-17</uni-td>
      </uni-tr>
      <uni-tr>
        <uni-td>2222222</uni-td>
        <uni-td>Han</uni-td>
        <uni-td>2022-2-17</uni-td>
      </uni-tr>
      <uni-tr>
        <uni-td>33333333</uni-td>
        <uni-td>LiLei</uni-td>
        <uni-td>2022-2-17</uni-td>
      </uni-tr>
      <uni-tr>
        <uni-td>4444444</uni-td>
        <uni-td>Danner</uni-td>
        <uni-td>2022-2-17</uni-td>
      </uni-tr>
    </uni-table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>
<style lang='less' scoped>
</style>