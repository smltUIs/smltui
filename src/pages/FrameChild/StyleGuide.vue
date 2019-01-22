<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>风格指南</h1>
        <p>该组件是由五人小团队开发而来，组件部分指南内容节选自
          <a target="_blank" href="https://cn.vuejs.org/v2/style-guide/">Vue 官方风格指南</a>
        </p>
        <h2>组件数据</h2>
        <p>组件中的data必须是一个函数&nbsp;<span><a href="https://cn.vuejs.org/v2/api/#data" target="_blank">☞&lt;详情&gt;</a>&nbsp;&nbsp;</span></p>
        <div>错误用法如下：</div>
        <pre v-highlight-a class="pre">
          <code>{{dataFalse}}</code>
        </pre>
        <div>正确用法如下：</div>
        <pre v-highlight-a class="pre">
          <code>{{dataTrue}}</code>
        </pre>
        <h2>Vue组件命名规则</h2>
        <p>规则如下: <br>
          camelCase（驼峰命名法、帕斯卡）、kebab-case (短横线分隔命名)、或 PascalCase (单词首字 <br>母大写命名)。
          <span><a href="https://cn.vuejs.org/v2/guide/components-registration.html" target="_blank">☞&lt;详情&gt;</a>&nbsp;&nbsp;</span>
        </p>
        <div>错误用法如下：</div>
        <pre v-highlight-a class="pre">
          <code>{{renameFalse}}</code>
        </pre>
        <div>正确用法如下：</div>
        <pre v-highlight-a class="pre">
          <code>{{renameTrue}}</code>
        </pre>
        <h2>单文件组件驼峰命名</h2>
        <p>单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X) 和模板中引用组件 <br>的方式尽可能的一致。然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，
          这也是横线连接命名同样完全可取的原因。
          <span><a href="https://cn.vuejs.org/v2/guide/single-file-components.html" target="_blank">☞&lt;详情&gt;</a>&nbsp;&nbsp;</span></p>
        <div>错误用法如下：</div>
        <pre v-highlight-a class="pre">
          <code>{{renameFalse2}}</code>
        </pre>
        <div>正确用法如下：</div>
        <pre v-highlight-a class="pre">
          <code>{{renameTrue2}}</code>
        </pre>
        <h2>紧密耦合度的组件名</h2>
        <strong>和父组件紧密耦合的子组件应该以父组件名作为前缀命名。</strong>
        <p>如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。
          因为编辑器通常 <br>会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。</p>
        <div>错误用法如下：</div>
        <pre v-highlight-a class="pre">
          <code>{{groupFalse}}</code>
        </pre>
        <div>正确用法如下：</div>
        <pre v-highlight-a class="pre">
          <code>{{groupTrue}}</code>
        </pre>
        <div class="left-right-arrow">
          <router-link to="/Frame/QuickStart">
            <div class="arrow-left">
              <div class="prev-arrow"></div>
              <h4>快速上手</h4>
            </div>
          </router-link>
          <router-link to="/Frame/DemoPage">
            <div class="arrow-right">
              <h4>示例页面</h4>
              <div class="next-arrow"></div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <style-guide-app></style-guide-app>
  </div>
</template>

<script>
    import QuickStart from  "../../assets/css/QuickStart.css"
    import StyleGuideApp from "../../components/StyleGuide/StyleGuideApp";
    export default {
        name: "StyleGuide",
        components: {StyleGuideApp,QuickStart},
        data(){
            return{
              dataFalse:
              "//False example\n" +
                "export default {\n" +
                " data:{\n" +
                "   foo: 'bar' \n" +
                " }\n" +
                "}",
              dataTrue:
              "//True example\n" +
                "export default {\n" +
                  "  data(){\n" +
                  "    return {\n" +
                    "      foo: 'bar' \n" +
                    "    }\n" +
                  "  }\n" +
                "}",
              renameFalse:
              "//False example\n" +
                "Vue.component('GoodsList',{\n" +
                "  //...\n" +
                "})\n" +
                "\n" +
                "Vue.component('ShopCart',{\n" +
                "  //...\n" +
                "})",
              renameTrue:
              "//True example\n" +
                "components/\n" +
                "|- GoodsList.vue\n" +
                "|- ShopCart.vue",
              renameFalse2:
              "//False example\n" +
                "components/\n" +
                "|- goodslist.vue\n" +
                "|- shopcart.vue",
              renameTrue2:
              "//True example\n" +
                "components/\n" +
                "|- GoodsList.vue\n" +
                "|- ShopCart.vue",
              groupFalse:
              "//False example\n" +
                "components/\n" +
                "|- GoodsList.vue\n" +
                "|- GoodsProfile.vue\n" +
                "|- GoodsInfo.vue",
              groupTrue:
              "//True example\n" +
                "components/\n" +
                "|- GoodsList.vue\n" +
                "|- GoodsListProfile.vue\n" +
                "|- GoodsListInfo.vue"
            }
        }
    }
</script>

<style scoped>

</style>
