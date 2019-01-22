<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>菜单列表</h1>
        <p>作用：陈列各个子分类，由此进入分过类的商品列表</p>
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
    <menu-list-app></menu-list-app>
  </div>
</template>

<script>
    import MenuListApp from "../../components/MenuList/MenuListApp";
    export default {
        name: "MenuList",
      components: {MenuListApp},
      data() {
        return {
          tableInfo:[
            {
              params:"dressnavImg",
              description:"分类图片",
              type:"String",
              default:"dress-nav-01.jpg",
              version:"1.0.0"
            },
            {
              params:"dressnavName",
              description:"分类名称",
              type:"String",
              default:"大衣",
              version:"1.0.0"
            }
          ],
          code1:
            "import smltui from 'smltui'\n" +
            "Vue.use(smltui)\n",
          code2:
            ' <menu-list\n' +
            '      :dressnav="dressnav"\n' +
            '  >\n' +
            ' </menu-list>',
          code3:
            'export default {\n' +
            '        name: "MenuList",\n' +
            '        component:{MenuListCss},\n' +
            '        data(){\n' +
            '        return {\n' +
            '          dressnav: [\n' +
            '            {\n' +
            '              dressnavImg: \'../static/image/dress-nav-01.jpg\',\n' +
            '              dressnavName: \'大衣\'\n' +
            '            },\n' +
            '            {\n' +
            '              dressnavImg: \'../static/image/dress-nav-02.jpg\',\n' +
            '              dressnavName: \'连衣裙\'\n' +
            '            },\n' +
            '            {\n' +
            '              dressnavImg: \'../static/image/dress-nav-03.jpg\',\n' +
            '              dressnavName: \'外套\'\n' +
            '            },\n' +
            '            {\n' +
            '              dressnavImg: \'../static/image/dress-nav-04.jpg\',\n' +
            '              dressnavName: \'针织衫\'\n' +
            '            },\n' +
            '            {\n' +
            '              dressnavImg: \'../static/image/dress-nav-05.jpg\',\n' +
            '              dressnavName: \'羽绒服\'\n' +
            '            },\n' +
            '            {\n' +
            '              dressnavImg: \'../static/image/dress-nav-06.jpg\',\n' +
            '              dressnavName: \'毛衣\'\n' +
            '            },\n' +
            '            {\n' +
            '              dressnavImg: \'../static/image/dress-nav-07.jpg\',\n' +
            '              dressnavName: \'卫衣\'\n' +
            '            },\n' +
            '            {\n' +
            '              dressnavImg: \'../../../static/image/dress-nav-08.jpg\',\n' +
            '              dressnavName: \'皮草皮革\'\n' +
            '            },\n' +
            '            {\n' +
            '              dressnavImg: \'../static/image/dress-nav-09.jpg\',\n' +
            '              dressnavName: \'棉衣\'\n' +
            '            },\n' +
            '            {\n' +
            '              dressnavImg: \'../static/image/dress-nav-10.jpg\',\n' +
            '              dressnavName: \'长裤\'\n' +
            '            },\n' +
            '            {\n' +
            '              dressnavImg: \'../static/image/dress-nav-11.jpg\',\n' +
            '              dressnavName: \'套装\'\n' +
            '            },\n' +
            '            {\n' +
            '              dressnavImg: \'../static/image/dress-nav-12.jpg\',\n' +
            '              dressnavName: \'半身裙\'\n' +
            '            }\n' +
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





