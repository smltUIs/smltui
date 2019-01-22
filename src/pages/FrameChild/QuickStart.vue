<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>快速上手</h1>
        <p class="startDesc">查看文档，按以下步骤开始使用并 <a href="#install">安装</a></p>
        <h2>脚手架</h2>
        <p>如果你正在使用Vue CLI vue-cli@3，推荐使用 Vue 官方提供的脚手架 <a href="https://cli.vuejs.org/zh/">Vue Cli 3</a></p>
        <pre v-highlight-a class="pre">
          <code>{{vueCli}}</code>
        </pre>
        <p class="created">当创建完成后，可以通过命令打开图形化界面</p>
        <pre v-highlight-a class="pre">
          <code>{{vueUI}}</code>
        </pre>
        <h2 id="install">安装</h2>
        <h3>NPM</h3>
        <pre v-highlight-a class="pre">
          <code>{{npm}}</code>
        </pre>
        <h2>引入组件</h2>
        <p>方法一：导入所有组件</p>
        <pre v-highlight-a class="pre">
          <code>{{components}}</code>
        </pre>
        <h2>Rem适配</h2>
        <p>smltui 中的样式默认使用<code>px</code>作为单位，如果需要使用<code>rem</code>单位，推荐使用以下两个工具</p>
        <ul>
          <li><a href="https://github.com/cuth/postcss-pxtorem">postcss-pxtorem</a> 是一款 postcss 插件，用于将单位转化为 rem</li>
          <li><a href="https://github.com/amfe/lib-flexible">lib-flexible</a> 用于设置 rem 基准值</li>
        </ul>
        <p>关于 postcss 的配置，方法如下所示，并且可以在此配置的基础上根据项目需求进行修改</p>
        <pre v-highlight-a class="pre">
          <code>{{plugins}}</code>
        </pre>
        <p class="lookout">注意：在配置 postcss-loader 时，应避免 ignore node_modules 目录，这会导致 smltui 的样式无法被编译</p>
      </div>
    </div>
    <quick-start-app></quick-start-app>
  </div>
</template>

<script>
    import QuickStart from  "../../assets/css/QuickStart.css"
    import QuickStartApp from "../../components/QuickStart/QuickStartApp";
    export default {
        name: "QuickStart",
        components: {QuickStartApp},
        data(){
          return{
            vueCli:
            "# 安装 Vue Cli\n\n" +
              "npm install -g @vue/cli\n" +
              "\n\n" +
              "# 创建一个项目\n\n" +
              "vue create myVip",
            vueUI:
            "# 打开图形化界面\n\n" +
              "vue ui",
            npm:
            "npm install smltui",
            components:
            "import Vue from 'vue';\n" +
            "import smltui from 'smltui';\n" +
            "import 'smltui/lib/index.css';\n" +
            "\n" +
            "Vue.use(smltui);",
            plugins:"" +
              "module.exports = {\n" +
              "  plugins: {\n" +
              "    'autoprefixer': {\n" +
              "      browsers: ['Android >= 4.0', 'iOS >= 7']\n" +
              "    },\n" +
              "    'postcss-pxtorem': {\n" +
              "      rootValue: 37.5,\n" +
              "      propList: ['*']\n" +
              "    }\n" +
              "  }\n" +
              "}"
          }
        }
    }
</script>

<style scoped>

</style>
