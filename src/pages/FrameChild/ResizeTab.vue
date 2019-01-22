<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>可收缩表格</h1>
        <p>作用：点击按钮可进行表格的展开和收缩</p>
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
    <resize-tab-app></resize-tab-app>
  </div>
</template>

<script>
    import ResizeTabApp from "../../components/ResizeTab/ResizeTabApp";
    export default {
        name: "ResizeTab",
      components: {ResizeTabApp},
      data() {
        return {
          tableInfo:[
            {
              params:"BasicTableListTitles",
              description:"标题属性集",
              type:"Array",
              default:" -",
              version:"1.0.0"
            },
            {
              params:"tableTitle",
              description:"表格标题",
              type:"String",
              default:"女装",
              version:"1.0.0"
            },
            {
              params:"tableBgColor",
              description:"表头颜色",
              type:"String",
              default:"#9d4a9c",
              version:"1.0.0"
            },
            {
              params:"BasicTableListBorder",
              description:"边框颜色属性集",
              type:"Object",
              default:" -",
              version:"1.0.0"
            },
            {
              params:"border",
              description:"边框颜色",
              type:"String",
              default:"1px solid #9d4a9c",
              version:"1.0.0"
            },
            {
              params:"BasicTableListCon",
              description:"内容属性集",
              type:"Array",
              default:" -",
              version:"1.0.0"
            },
            {
              params:"ord",
              description:"行号",
              type:"String",
              default:"",
              version:"1.0.0"
            },
            {
              params:"FirstName",
              description:"品牌名",
              type:"String",
              default:"薇姿曼",
              version:"1.0.0"
            },
            {
              params:"LastName",
              description:"商品名",
              type:"String",
              default:"新款风衣",
              version:"1.0.0"
            },
            {
              params:"Username",
              description:"价格",
              type:"Number",
              default:"679",
              version:"1.0.0"
            }
          ],
          code1:
            "import smltui from 'smltui'\n" +
            "Vue.use(smltui)\n",
          code2:
            ' <resize-tab\n' +
            '      :BasicTableListTitles="BasicTableListTitles"\n' +
            '      :BasicTableListCon="BasicTableListCon"\n'+
            '  >\n' +
            ' </resize-tab>',
          code3:
            'export default {\n' +
            '      name: "ResizeTab",\n' +
            '      mounted(){\n' +
            '        $(".BasicTableList").each(function () {\n' +
            '          $(this).children(".BasicTableListTitle").children(".BasicTableListIconfont").children(".slide").click(function () {\n' +
            '            $(this).parent(".BasicTableListIconfont").parent(".BasicTableListTitle").next(".tableBox").slideToggle(500);\n' +
            '          });\n' +
            '          $(this).children(".BasicTableListTitle").children(".BasicTableListIconfont").children(".del").click(function () {\n' +
            '            $(this).parent(".BasicTableListIconfont").parent(".BasicTableListTitle").parent(".BasicTableList").remove();\n' +
            '          })\n' +
            '        })\n' +
            '      },\n' +
            '      methods:{\n' +
            '      },\n' +
            '      data(){\n' +
            '        return{\n' +
            '          BasicTableListTitles:[\n' +
            '            {"tableTitle":"女装","tableBgColor":"#9d4a9c","BasicTableListBorder":{"border":"1px solid #9d4a9c"}},\n' +
            '            {"tableTitle":"男装","tableBgColor":"#de577b","BasicTableListBorder":{"border":"1px solid #de577b"}},\n' +
            '            {"tableTitle":"饰品","tableBgColor":"#74b749","BasicTableListBorder":{"border":"1px solid #74b749"}},\n' +
            '            {"tableTitle":"鞋靴","tableBgColor":"#ffb400","BasicTableListBorder":{"border":"1px solid #ffb400"}}\n' +
            '          ],\n' +
            '          BasicTableListCon:[\n' +
            '            {"ord":"","FirstName":"品牌","LastName":"商品名","Username":"价格"},\n' +
            '            {"ord":"1","FirstName":"薇姿曼","LastName":"新款风衣","Username":"679"},\n' +
            '            {"ord":"2","FirstName":"沫晗依美","LastName":"皮毛一体韩版","Username":"1028"},\n' +
            '            {"ord":"3","FirstName":"苏醒的乐园","LastName":"冬季短款","Username":"1029"},\n' +
            '          ]\n' +
            '        }\n' +
            '      }\n' +
            '    }'
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
