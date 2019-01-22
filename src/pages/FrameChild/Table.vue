<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>动态表格</h1>
        <p>作用：动态显示表格数据，且有搜索功能和分页显示</p>
        <p class="lookout">基于jQuery的动态表格数据，有分页检索、实现排序，分页显示数量、按各项的关键词搜索等功能</p>
        <p class="methods">使用方法:</p>
      </div>
    </div>
    <table-app></table-app>
  </div>
</template>

<script>
    import TableApp from "../../components/Table/TableApp";
    export default {
        name: "Table",
      components: {TableApp}
    }
</script>

<style scoped>

</style>
