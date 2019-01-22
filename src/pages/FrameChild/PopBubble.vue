<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>pop弹出框</h1>
        <p>作用：对用户想要购买的物品进行尺码选择后，弹出相应尺码信息</p>
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
    <pop-bubble-app></pop-bubble-app>
  </div>
</template>

<script>
    import PopBubbleApp from "../../components/PopBubble/PopBubbleApp";
    export default {
        name: "PopBubble",
      component:{PopBubbleApp},
      data() {
        return {
          tableInfo:[
            {
              params:"showchose",
              description:"",
              type:"Boolean",
              default:"false",
              version:"1.0.0"
            },
            {
              params:"num",
              description:"",
              type:"Number",
              default:"-1",
              version:"1.0.0"
            },
            {
              params:"isShow",
              description:"",
              type:"Boolean",
              default:"false",
              version:"1.0.0"
            },
            {
              params:"allSize",
              description:"总尺码",
              type:"Array",
              default:"Object",
              version:"1.0.0"
            },
            {
              params:"size",
              description:"尺码",
              type:"String",
              default:"M(160)",
              version:"1.0.0"
            },
            {
              params:"shoulder",
              description:"肩宽",
              type:"String",
              default:"40",
              version:"1.0.0"
            },
            {
              params:"chest",
              description:"胸围",
              type:"String",
              default:"101",
              version:"1.0.0"
            },
            {
              params:"clothLength",
              description:"衣长",
              type:"String",
              default:"96",
              version:"1.0.0"
            },
            {
              params:"outsideSleeve",
              description:"袖长",
              type:"String",
              default:"60",
              version:"1.0.0"
            },
          ],
          code1:
            "import smltui from 'smltui'\n" +
            "Vue.use(smltui)\n",
          code2:
            ' <pop-bubble\n' +
            '      :showchose="showchose"\n' +
            '      :num="num"\n'+
            '      :isShow="isShow"\n'+
            '      :allSize="allSize"\n'+
            '  >\n' +
            ' </pop-bubble>',
          code3:
            'export default {\n' +
            '        name: "PopBubble",\n' +
            '        data() {\n' +
            '          return {\n' +
            '            showchose: false,\n' +
            '            num: -1,\n' +
            '            isShow: false,\n' +
            '            allSize: [\n' +
            '              {\n' +
            '                size: "M(160)",\n' +
            '                shoulder: "40",\n' +
            '                chest: "101",\n' +
            '                clothLength: "96",\n' +
            '                outsideSleeve: "60"\n' +
            '              },\n' +
            '              {\n' +
            '                size: "L(165)",\n' +
            '                shoulder: "41",\n' +
            '                chest: "105",\n' +
            '                clothLength: "97",\n' +
            '                outsideSleeve: "61"\n' +
            '              },\n' +
            '              {\n' +
            '                size: "XL(170)",\n' +
            '                shoulder: "42",\n' +
            '                chest: "109",\n' +
            '                clothLength: "98",\n' +
            '                outsideSleeve: "62"\n' +
            '              },\n' +
            '              {\n' +
            '                size: "2XL(175)",\n' +
            '                shoulder: "43",\n' +
            '                chest: "113",\n' +
            '                clothLength: "98",\n' +
            '                outsideSleeve: "63"\n' +
            '              }\n' +
            '            ]\n' +
            '          }\n' +
            '        },\n' +
            '        mounted(){\n' +
            '          $(".popClose").click(function(){\n' +
            '            $(".popTable").css({\n' +
            '              "display":"none",\n' +
            '            })\n' +
            '            $(this).css({"display":"none"})\n' +
            '          });\n' +
            '        },\n' +
            '        methods: {\n' +
            '          changeSize: function (index) {\n' +
            '            this.num = index\n' +
            '            console.log(this.num)\n' +
            '            let popTable = document.getElementsByClassName("popTable")\n' +
            '            if(index==3){\n' +
            '            }\n' +
            '            let popClose = document.getElementsByClassName("popClose")\n' +
            '            popClose[0].style.display = "block"\n' +
            '            let domobj = document.getElementById("detail-size-body-size");\n' +
            '            let lis = domobj.children;\n' +
            '            if(lis){\n' +
            '              for(let i=0; i<lis.length; i++){\n' +
            '                lis[i].index = i;\n' +
            '                lis[i].onclick = li_click\n' +
            '              }\n' +
            '              function li_click(){\n' +
            '                for(let j=0; j<lis.length; j++){\n' +
            '                  lis[j].style.backgroundColor = "#fff"\n' +
            '                  lis[j].style.borderColor="#d7d7d7"\n' +
            '                  lis[j].style.color="#19100c"\n' +
            '                }\n' +
            '                this.style.borderColor = "#dd3d97"\n' +
            '                this.style.color="#dd3d97"\n' +
            '              }\n' +
            '            }\n' +
            '          }\n' +
            '        }\n' +
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
