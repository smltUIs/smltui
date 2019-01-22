<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>横向滚动列表</h1>
        <p>作用：陈列多个商品，多余商品以横向滚动条形式查看</p>
        <h1>代码展示</h1>
        <pre v-highlight-a class="pre">
              <h2>使用指南</h2>
              <code>{{code1}}</code>
            </pre>
        <pre v-highlight-a class="pre">
              <h2>基础用法</h2>
              <code>{{code2}}</code>
            </pre>
        <pre v-highlight-a class="pre">
              <h2 class="codeTitle">数据结构</h2>
              <code>{{code3}}</code>
            </pre>
        <pre v-highlight-a class="pre">
              <h2>API</h2>
              <code>
                <table cellspacing="0" cellpadding="0">
                  <thead>
                    <tr>
                        <th>参数</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                        <th>版本</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr :key="index" v-for="(tr,index) in tableInfo">
                      <td>{{tr.params}}</td>
                      <td>{{tr.description}}</td>
                      <td>{{tr.type}}</td>
                      <td>{{tr.default}}</td>
                      <td>{{tr.version}}</td>
                  </tr>
                  </tbody>
                </table>
              </code>
            </pre>
      </div>
    </div>
    <horizontal-rolling-app></horizontal-rolling-app>
  </div>
</template>

<script>
    import HorizontalRollingApp from "../../components/HorizontalRolling/HorizontalRollingApp";
    export default {
        name: "HorizontalRolling",
      components: {HorizontalRollingApp},
      data() {
        return {
          tableInfo:[
            {
              params:" -",
              description:"商品图片",
              type:"String",
              default:"dress-banner-01.jpg",
              version:"1.0.0"
            }
          ],
          code1:
            "import smltui from 'smltui'\n" +
            "Vue.use(smltui)\n",
          code2:
            ' <horizontal-rolling\n' +
            '      :dressban="dressban"\n' +
            '  >\n' +
            ' </horizontal-rolling>',
          code3:
            'data(){\n' +
            '        return {\n' +
            '          dressban: [\n' +
            '            "../static/image/dress-banner-01.jpg",\n' +
            '            "../static/image/dress-banner-02.jpg",\n' +
            '            "../static/image/dress-banner-03.jpg",\n' +
            '            "../static/image/dress-banner-04.jpg",\n' +
            '            "../static/image/dress-banner-05.jpg",\n' +
            '            "../static/image/dress-banner-06.jpg",\n' +
            '            "../static/image/dress-banner-07.jpg",\n' +
            '            "../static/image/dress-banner-08.jpg",\n' +
            '            "../static/image/dress-banner-09.jpg"\n' +
            '          ]\n' +
            '        }\n' +
            '      }'
        }
      }
    }
</script>

<style scoped>
  table{
    width: 100%;
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    border-collapse: collapse;
    color: #34495e;
  }
  table thead{
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  table tbody{
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  table th{
    padding: 8px 10px;
    text-align: left;
    font-weight: 400;
    background-color: #f1f4f8;
  }
  table tr{
    padding: 8px 10px;
    text-align: left;
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  table td{
    padding: 8px;
    border-bottom: 1px solid #f1f4f8;
  }
</style>
