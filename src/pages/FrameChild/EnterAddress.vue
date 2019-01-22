<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>弹出框输入地址</h1>
        <p class="lookout">作用：方便用户填写收货地址</p>
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

    <enter-address-app></enter-address-app>
  </div>
</template>

<script>
    import EnterAddressApp from "../../components/EnterAddress/EnterAddressApp";
    export default {
        name: "EnterAddress",
      components: {EnterAddressApp},
      data(){
        return{
          download:
            "import smltui from smltui\n" +
            "Vue.use(smltui)",
          code2:
            "  <enter-address\n" +
            "    :showChose=\"showChose\"\n" +
            "    :address=\"address\"\n" +
            "    :id=\"id\"\n" +
            "  >\n" +
            "  </enter-address>",
          tableInfo:[
            {
              params:"showChose",
              description:"显示弹出层",
              type:"Boolean",
              default:"false",
              version:"1.0.0"
            },
            {
              params:"address",
              description:"输入收货地址",
              type:"String",
              default:"-",
              version:"1.0.0"
            },
            {
              params:"id",
              description:"默认地址",
              type:"String",
              default:"输入收货地址",
              version:"1.0.0"
            }
          ],
          eventInfo:[
            {
              eventname:"click",
              description:"点击触发该事件",
              params:"choseAdd：显示弹出框，close：隐藏弹出框"
            }
          ],
          code:
            "data() {\n" +
            "      return {\n" +
            "        showChose: false,\n" +
            "        address:\"输入收货地址\",\n" +
            "        id:\"输入收货地址\"\n" +
            "      }\n" +
            "    },\n" +
            "    methods: {\n" +
            "      choseAdd: function () {\n" +
            "        this.showChose = true;\n" +
            "      },\n" +
            "      closeAdd: function () {\n" +
            "        console.log($(\".addressInput\").val())\n" +
            "        if($(\".addressInput\").val() == \"\" || $(\".addressInput\").val() ==\" \"){\n" +
            "          alert(\"亲,您还没有输入地址哟\")\n" +
            "          // this.showChose = true;\n" +
            "        }else {\n" +
            "          this.showChose = false;\n" +
            "        }\n" +
            "      },\n" +
            "      close:function(){\n" +
            "        if($(\".addressInput\").val() == \"\" || $(\".addressInput\").val() ==\" \"){\n" +
            "          $(\".enterAdd\").html(this.id);\n" +
            "        }\n" +
            "          this.showChose = false;\n" +
            "\n" +
            "      }\n" +
            "    },\n" +
            "    computed:{\n" +
            "      //一个计算方法，用来返回处理过的data\n" +
            "      //计算属性是用来解决data数据的格式化复用\n" +
            "      formatMoney(){\n" +
            "        return  this.address\n" +
            "      }\n" +
            "    }"
        }
      }

    }
</script>

<style scoped>
  .last code{
    max-height: 400px;
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
