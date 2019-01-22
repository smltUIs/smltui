<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>可编辑表格</h1>
        <p>作用：可对表格的数据进行增删更改</p>
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
              <h2>Event</h2>
              <code>
                <table cellspacing="0" cellpadding="0">
                  <thead>
                    <tr>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>参数</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr :key="index" v-for="(tr,index) in tableeventInfo">
                      <td>{{tr.eventname}}</td>
                      <td>{{tr.eventdescription}}</td>
                      <td>{{tr.eventparams}}</td>
                    </tr>
                  </tbody>
                </table>
              </code>
            </pre>
      </div>
    </div>
    <editable-tab-app></editable-tab-app>
  </div>
</template>

<script>
    import EditableTabApp from "../../components/EditableTab/EditableTabApp";
    export default {
        name: "EditableTab",
      components: {EditableTabApp},
      data() {
        return {
          tableInfo:[
            {
              params:"addDetail",
              description:"新增一行",
              type:"Object",
              default:" -",
              version:"1.0.0"
            },
            {
              params:"editlist",
              description:"编辑",
              type:"Boolean",
              default:"false",
              version:"1.0.0"
            },
            {
              params:"editDetail",
              description:"编辑详情",
              type:"Object",
              default:" -",
              version:"1.0.0"
            },
            {
              params:"products",
              description:"产品详情",
              type:"Array",
              default:" -",
              version:"1.0.0"
            }
          ],
          tableeventInfo:[
            {
              eventname:"adddetail",
              eventdescription:"点击新增按钮时触发",
              eventparams:"content : 表格内容"
            },
            {
              eventname:"edit",
              eventdescription:"点击编辑按钮时触发",
              eventparams:"value : 表格某行内容"
            },
            {
              eventname:"deletelist",
              eventdescription:"点击删除按钮时触发",
              eventparams:"value : 表格某行内容"
            },
            {
              eventname:"update",
              eventdescription:"点击更新按钮时触发",
              eventparams:"value : 表格某行内容"
            }
          ],
          code1:
            "import smltui from 'smltui'\n" +
            "Vue.use(smltui)\n",
          code2:
            ' <editable-tab\n' +
            '      :tableInfo="tableInfo"\n' +
            '      :tableeventInfo="tableeventInfo"\n' +
            '  >\n' +
            ' </editable-tab>',
          code3:
            'export default {\n' +
            '        name: "EditableTab",\n' +
            '      data(){\n' +
            '          return{\n' +
            '            addDetail: {},\n' +
            '            editlist: false,\n' +
            '            editDetail: {},\n' +
            '            products: [{\n' +
            '              title: \'在移动设备开发\',\n' +
            '              user: \'张一\',\n' +
            '              dates: \'2019-01-23\',\n' +
            '              id: "45211546"\n' +
            '            }, {\n' +
            '              title: \'图形及特效特性\',\n' +
            '              user: \'张二\',\n' +
            '              dates: \'2018-01-11\',\n' +
            '              id: "61341341"\n' +
            '            }, {\n' +
            '              title: \'设备兼容特性\',\n' +
            '              user: \'张三\',\n' +
            '              dates: \'2018-02-09\',\n' +
            '              id: "62451431"\n' +
            '            }, {\n' +
            '              title: \'W3C将致力于开发用于实时通信\',\n' +
            '              user: \'张四\',\n' +
            '              dates: \'2018-01-09\',\n' +
            '              id: "62345213"\n' +
            '            }, {\n' +
            '              title: \'全新的表单输入对象\',\n' +
            '              user: \'张五\',\n' +
            '              dates: \'2018-09-09\',\n' +
            '              id: "23322445"\n' +
            '            }],\n' +
            '            editid:\'\'\n' +
            '          }\n' +
            '      },\n' +
            '      mounted() {\n' +
            '\n' +
            '      },\n' +
            '      methods: {\n' +
            '        adddetail() {\n' +
            '          this.products.push({\n' +
            '            title: this.addDetail.title,\n' +
            '            user: this.addDetail.user,\n' +
            '            dates: this.addDetail.dates,\n' +
            '            id:Math.floor(Math.random()*1000000+1)\n' +
            '          })\n' +
            '          this.addDetail.title = ""\n' +
            '          this.addDetail.user = ""\n' +
            '          this.addDetail.dates = ""\n' +
            '\n' +
            '        },\n' +
            '        deletelist(id, i) {\n' +
            '          this.products.splice(i, 1);\n' +
            '        },\n' +
            '        edit(item) {\n' +
            '          console.log(item)\n' +
            '          this.editDetail = {\n' +
            '            title: item.title,\n' +
            '            user: item.user,\n' +
            '            dates: item.dates,\n' +
            '            id: item.id\n' +
            '          }\n' +
            '          this.editlist = true\n' +
            '          this.editid = item.id\n' +
            '\n' +
            '        },\n' +
            '        update() {\n' +
            '          let _this= this\n' +
            '          for(let i = 0; i < _this.products.length; i++) {\n' +
            '            if(_this.products[i].id ==this.editid) {\n' +
            '              _this.products[i] = {\n' +
            '                title: _this.editDetail.title,\n' +
            '                user: _this.editDetail.user,\n' +
            '                dates: _this.editDetail.dates,\n' +
            '                id: this.editid\n' +
            '              }\n' +
            '              this.editlist = false\n' +
            '            }\n' +
            '          }\n' +
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
