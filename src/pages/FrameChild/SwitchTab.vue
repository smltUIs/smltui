<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>Tab选项卡切换</h1>
        <p>作用：点击按钮可进行不同内容的展示</p>
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
    <switch-tab-app></switch-tab-app>
  </div>
</template>

<script>
    import SwitchTabApp from "../../components/SwitchTab/SwitchTabApp";
    export default {
        name: "SwitchTab",
      components: {SwitchTabApp},
      data() {
        return {
          tableInfo:[
            {
              params:"typeName",
              description:"标题",
              type:"String",
              default:"FIRST",
              version:"1.0.0"
            },
            {
              params:"newList",
              description:"内容属性集",
              type:"Array",
              default:" -",
              version:"1.0.0"
            },
            {
              params:"title",
              description:"内容标题",
              type:"String",
              default:"FOR",
              version:"1.0.0"
            },
            {
              params:"titimg",
              description:"内容图片",
              type:"String",
              default:"t1.jpg",
              version:"1.0.0"
            }
          ],
          code1:
            "import smltui from 'smltui'\n" +
            "Vue.use(smltui)\n",
          code2:
            ' <switch-tab\n' +
            '      :newInfo="newInfo"\n' +
            '  >\n' +
            ' </switch-tab>',
          code3:
            'export default {\n' +
            '        name: "SwitchTab",\n' +
            '      component:{SwitchTabCss},\n' +
            '      data(){\n' +
            '          return{\n' +
            '            index:0,\n' +
            '            newInfo:[\n' +
            '              {\n' +
            '                typeName:"FIRST",\n' +
            '                newList:[\n' +
            '                  {\n' +
            '                    title:"TRY",\n' +
            '                    titimg:"./image/t1.jpg"\n' +
            '                  }\n' +
            '                ]\n' +
            '              },\n' +
            '              {\n' +
            '                typeName:"SECOND",\n' +
            '                newList:[\n' +
            '                  {\n' +
            '                    title:"FOR",\n' +
            '                    titimg:"./image/t2.jpg"\n' +
            '                  }\n' +
            '                ]\n' +
            '              },\n' +
            '              {\n' +
            '                typeName:"THIRD",\n' +
            '                newList:[\n' +
            '                  {\n' +
            '                    title:"PROP",\n' +
            '                    titimg:"./image/t3.jpg"\n' +
            '                  }\n' +
            '                ]\n' +
            '              }\n' +
            '            ]\n' +
            '          }\n' +
            '\n' +
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
