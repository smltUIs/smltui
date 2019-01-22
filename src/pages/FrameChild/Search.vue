<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>Select下拉搜索框</h1>
        <p>作用：可以实现搜索列表项，并可以选中某一项</p>
        <p class="lookout">Select下拉框,是一个分类菜单的多选组件，一款功能比较全面的自定义下拉菜单，
          除了可以对<br>选项进行分类，还带有搜索功能。</p>
        <p class="methods">使用方法：</p>
        <h2>JS代码</h2>
        <pre v-highlight-a class="pre">
          <code>{{search}}</code>
        </pre>
      </div>
    </div>
    <search-app></search-app>
  </div>
</template>

<script>

    import SearchApp from "../../components/Search/SearchApp";
    export default {
        name: "Search",
        components: {SearchApp},
        data(){
          return{
            search:
            "  import \"../../assets/js/jquery.min\"\n" +
              "  import \"../../assets/js/fSelect\"\n" +
              "  import \"../../assets/css/fSelect.css\"\n" +
              "\n" +
              "  export default {\n" +
              "    name: \"SearchApp\",\n" +
              "    mounted(){\n" +
              "      $(function() {\n" +
              "        $('.demo').fSelect();\n" +
              "      });\n" +
              "    }\n" +
              "  }"
          }
        }
    }
</script>

<style scoped>

</style>
