<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>侧边栏菜单</h1>
        <p>作用：对各个子选项进行分类显示</p>
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
    <aside-menu-app></aside-menu-app>
  </div>
</template>

<script>
    import AsideMenuApp from "../../components/AsideMenu/AsideMenuApp";
    export default {
        name: "AsideMenu",
      components: {AsideMenuApp},
      data() {
        return {
          tableInfo:[
            {
              params:"show",
              description:"是否显示",
              type:"Boolean",
              default:"false",
              version:"1.0.0"
            },
            {
              params:"menuList",
              description:"菜单列表",
              type:"Array",
              default:" -",
              version:"1.0.0"
            },
            {
              params:"i",
              description:"小图标",
              type:"String",
              default:" -",
              version:"1.0.0"
            },
            {
              params:"menuName",
              description:"一级菜单名",
              type:"String",
              default:"一级菜单",
              version:"1.0.0"
            },
            {
              params:"menuListNum",
              description:"此一级菜单下二级菜单数量",
              type:"Number",
              default:"0",
              version:"1.0.0"
            },
            {
              params:"hideMenu",
              description:"二级菜单集",
              type:"Array",
              default:" -",
              version:"1.0.0"
            },
            {
              params:"hideTitle",
              description:"二级菜单名",
              type:"String",
              default:"二级菜单",
              version:"1.0.0"
            },
            {
              params:"route",
              description:"二级菜单的链接地址",
              type:"String",
              default:" -",
              version:"1.0.0"
            },
          ],
          code1:
            "import smltui from 'smltui'\n" +
            "Vue.use(smltui)\n",
          code2:
            ' <aside-menu\n' +
            '      :show="show"\n' +
            '      :menuList="menuList"\n' +
            '  >\n' +
            ' <aside-menu/>',
          code3:
            'export default {\n' +
            '        name: "AsideMenu",\n' +
            '      component:{AsideMenu},\n' +
            '      data(){\n' +
            '        return{\n' +
            '          show:false,\n' +
            '          "menuList":[\n' +
            '            {\n' +
            '              "i":"iconfont icon-book",\n' +
            '              "menuName":"一级菜单",\n' +
            '              "menuListNum":"2",\n' +
            '              "hideMenu":[\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":"/EditableTable"\n' +
            '                },\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":"/ShopBrand"\n' +
            '                }\n' +
            '              ]\n' +
            '            },\n' +
            '            {\n' +
            '              "i":"iconfont icon-cogs",\n' +
            '              "menuName":"一级菜单",\n' +
            '              "menuListNum":"4",\n' +
            '              "hideMenu":[\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":"/SaleManagement"\n' +
            '                },\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":"/SaleActivityList"\n' +
            '                },\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":"/SuperGift"\n' +
            '                },\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":""\n' +
            '                }\n' +
            '              ]\n' +
            '            },\n' +
            '            {\n' +
            '              "i":"iconfont icon-tasks",\n' +
            '              "menuName":"一级菜单",\n' +
            '              "menuListNum":"4",\n' +
            '              "hideMenu":[\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":"/OrderList"\n' +
            '                },\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":"/OrderInquiry"\n' +
            '                },\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":""\n' +
            '                },\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":""\n' +
            '                }\n' +
            '              ]\n' +
            '            },\n' +
            '            {\n' +
            '              "i":"iconfont icon-th",\n' +
            '              "menuName":"一级菜单",\n' +
            '              "menuListNum":"3",\n' +
            '              "hideMenu":[\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":"/viplist"\n' +
            '                },\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":"/addvip"\n' +
            '                },\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":"/Gallery"\n' +
            '                }\n' +
            '              ]\n' +
            '            },\n' +
            '            {\n' +
            '              "i":"iconfont icon-fire",\n' +
            '              "menuName":"一级菜单",\n' +
            '              "menuListNum":"3",\n' +
            '              "hideMenu":[\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":""\n' +
            '                },\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":""\n' +
            '                },\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":"/"\n' +
            '                }\n' +
            '              ]\n' +
            '            },\n' +
            '            {\n' +
            '              "i":"iconfont icon-trophy",\n' +
            '              "menuName":"一级菜单",\n' +
            '              "menuListNum":"3",\n' +
            '              "hideMenu":[\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":""\n' +
            '                },\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":""\n' +
            '                },\n' +
            '                {\n' +
            '                  "hideTitle":"二级菜单",\n' +
            '                  "route":"/BasicTable"\n' +
            '                }\n' +
            '              ]\n' +
            '            }\n' +
            '          ]\n' +
            '      }\n'
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
