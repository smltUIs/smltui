<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>留言评论</h1>
        <p class="lookout">作用：基于jQuery的无刷新留言评论，是一款仿新浪微博发表文字和插入表情图标评论留言的组件</p>
        <h2>使用指南</h2>
        <pre v-highlight-a class="pre">
          <code>{{download}}</code>
        </pre>
        <h2>基础用法</h2>
        <pre v-highlight-a class="pre">
          <code>{{code2}}</code>
        </pre>
        <h2>数据结构</h2>
        <pre v-highlight-a class="pre last" >
          <code>{{code}}</code>
        </pre>
        <h2>API</h2>
        <pre v-highlight-a class="pre">
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
        <h2>Event</h2>
        <pre v-highlight-a class="pre">
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
                    <tr :key="index" v-for="(tr,index) in eventInfo">
                      <td>{{tr.eventname}}</td>
                      <td>{{tr.description}}</td>
                      <td>{{tr.params}}</td>
                    </tr>
                  </tbody>
                </table>
              </code>
            </pre>
      </div>
    </div>
    <message-board-app></message-board-app>
  </div>
</template>

<script>
    import MessageBoardApp from "../../components/MessageBoard/MessageBoardApp";
    export default {
        name: "MessageBoard",
        components: {MessageBoardApp},
        data(){
          return{
            download:
            "import smltui from smltui\n" +
            "Vue.use(smltui)",
            code2:
            "<div>\n" +
              "    <message-board></message-board>\n" +
              "</div>",
            tableInfo:[
              {
                params:"msgBoxList",
                description:"存放获取的数据",
                type:"String",
                default:"-",
                version:"1.0.0"
              },
              {
                params:"append",
                description:"添加功能",
                type:"Function",
                default:"Object",
                version:"1.0.0"
              },
              {
                params:"unshift",
                description:"添加到数组的最前面",
                type:"Function",
                default:"Object",
                version:"1.0.0"
              },
              {
                params:"remove",
                description:"删除当前数据",
                type:"Function",
                default:"Object",
                version:"1.0.0"
              }
            ],
            eventInfo:[
              {
                eventname:"stopPropagation",
                description:"阻止冒泡事件",
                params:"stopPropagation：阻止冒泡事件"
              },
              {
                eventname:"click",
                description:"点击时触发事件",
                params:"click：点击事件"
              }
            ],
            code:
            "mounted(){\n" +
              "          //从缓存中获取数据并渲染\n" +
              "          let msgBoxList = JSON.parse(window.localStorage.getItem('msgBoxList')) || [];\n" +
              "          innerHTMl(msgBoxList)\n" +
              "\n" +
              "          //点击小图片，显示表情\n" +
              "          $(\".bq\").click(function (e) {\n" +
              "            $(\".face\").slideDown(); //慢慢向下展开\n" +
              "            e.stopPropagation(); //阻止冒泡事件\n" +
              "          });\n" +
              "\n" +
              "          //在桌面任意地方点击，关闭表情框\n" +
              "          $(document).click(function () {\n" +
              "            $(\".face\").slideUp(); //慢慢向上收\n" +
              "          });\n" +
              "\n" +
              "          //点击小图标时，添加功能\n" +
              "          $(\".face ul li\").click(function () {\n" +
              "            let simg = $(this).find(\"img\").clone();\n" +
              "            $(\".message\").append(simg); //将表情添加到输入框\n" +
              "          });\n" +
              "\n" +
              "          //点击发表按扭，发表内容\n" +
              "          $(\"span.submit\").click(function () {\n" +
              "            let txt = $(\".message\").html(); //获取输入框内容\n" +
              "            if (!txt) {\n" +
              "              $('.message').focus(); //自动获取焦点\n" +
              "              return;\n" +
              "            }\n" +
              "            let obj = {\n" +
              "              msg: txt\n" +
              "            }\n" +
              "            msgBoxList.unshift(obj) //添加到数组里\n" +
              "            window.localStorage.setItem('msgBoxList', JSON.stringify(msgBoxList)) //将数据保存到缓存\n" +
              "            innerHTMl([obj]) //渲染当前输入框内容\n" +
              "            $('.message').html('') // 清空输入框\n" +
              "\n" +
              "          });\n" +
              "\n" +
              "          //删除当前数据\n" +
              "          $(\"body\").on('click', '.del', function () {\n" +
              "            let index = $(this).parent().parent().index();\n" +
              "            msgBoxList.splice(index, 1)\n" +
              "            window.localStorage.setItem('msgBoxList', JSON.stringify(msgBoxList)) //将数据保存到缓存\n" +
              "            $(this).parent().parent().remove()\n" +
              "          })\n" +
              "function innerHTMl(List) {\n" +
              "  List = List || []\n" +
              "  List.forEach(item => {\n" +
              "  let str =\n" +
              "  `<div class='msgBox' padding=\"10\" boxSize=\"border-box\" borderRadius=\"5\">\n" +
              "     <div class=\"headUrl\">\n" +
              "        <img src='../../../static/images/tx.jpg' width='40' height='40'>\n" +
              "        <div>\n" +
              "           <span class=\"title\">卡哇伊</span>\n" +
              "           <span class=\"time\">2019-01-23</span>\n" +
              "        </div>\n" +
              "        <a class=\"del\">删除</a>\n" +
              "     </div>\n" +
              "     <div class='msgTxt'>\n" +
              "        ${item.msg}\n" +
              "     </div>\n" +
              "  </div>`\n" +
              "    $(\".msgCon\").prepend(str);\n" +
              "   })\n" +
              "  }\n" +
              "}"
          }
        }
    }
</script>

<style scoped>
  .last code{
    height: 450px;
    overflow-y: auto;
  }
  .last code::-webkit-scrollbar {/*滚动条整体样式*/
    width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 5px;
  }
  .last code::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px #ccc;
    background: #ccc;
  }
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
