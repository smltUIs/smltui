<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>列表升序和降序</h1>
        <p>作用：点击按钮通过对应的属性让列表按照升序或降序排列</p>
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
              <!--<h2 class="codeTitle">基础用法</h2>-->
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
        <pre v-highlight-a class="pre">
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
    <lift-the-sorting-app></lift-the-sorting-app>
  </div>
</template>

<script>
  import QuickStartCss from "../../assets/css/QuickStart.css"
  // import LifeTheSortingCss from "../../assets/css/LifeTheSorting.css"
  import LiftTheSortingApp from "../../components/LifeTheSorting/LifeTheSortingApp";
  export default {
    name: "LifeTheSorting",
    components: {LiftTheSortingApp,QuickStartCss},
    data() {
      return {
        tableInfo:[
          {
            params:"letter",
            description:"排序字段 price or sales",
            type:"String",
            default:"-",
            version:"1.0.0"
          },
          {
            params:"original",
            description:"排序方式 up or down",
            type:"Bollean",
            default:"false",
            version:"1.0.0"
          },
          {
            params:"products",
            description:"商品详情",
            type:"Array",
            default:"Object",
            version:"1.0.0"
          },
          {
            params:"ListProImg",
            description:"商品图片",
            type:"String",
            default:"list-6-1.jpg",
            version:"1.0.0"
          },
          {
            params:"ListProPrice",
            description:"商品现价",
            type:"Number",
            default:"916",
            version:"1.0.0"
          },
          {
            params:"ListProRob",
            description:"表示商品是否为抢购中",
            type:"string",
            default:"-",
            version:"1.0.0"
          },
          {
            params:"ListProSmall",
            description:"商品原价",
            type:"Number",
            default:"4580",
            version:"1.0.0"
          },
          {
            params:"ListDiscount",
            description:"折扣",
            type:"Number",
            default:"2",
            version:"1.0.0"
          },
          {
            params:"ListBrand",
            description:"品牌",
            type:"Number",
            default:"音儿",
            version:"1.0.0"
          },
          {
            params:"ListProName",
            description:"商品名称",
            type:"String",
            default:"YINER音儿精致绣花大衣",
            version:"1.0.0"
          },
        ],
        eventInfo:[
          {
          eventname:"click-iconfont1",
          description:"点击向上箭头触发",
          params:"ListProPrice:商品价格"
        },
          {
            eventname:"click-iconfont2",
            description:"点击向下箭头触发",
            params:"ListProPrice:商品价格"
          }
        ],
        code1:
          "import smltui from 'smltui'\n" +
          "Vue.use(smltui)\n",
        code2:
          ' <life-the-sorting\n' +
          '      :products="products"\n' +
          '      :original="original"\n' +
          '      :letter="letter"\n' +
          '  >\n' +
          '  </life-the-sorting>',
        code3:
          ' export default {\n' +
          '      data(){\n' +
          '          return{\n' +
          '            "letter": "",\n' +
          '            "original":false ,\n' +
          '            "products":[\n' +
          '              {\n' +
          '              "ListProImg":"../../../static/image/list-6-1.jpg",\n' +
          '              "ListProPrice":"916",\n' +
          '              "ListProRob":"",\n' +
          '              "ListProSmall":"4580",\n' +
          '              "ListDiscount":"2",\n' +
          '              "ListBrand":"音儿",\n' +
          '              "ListProName":"YINER音儿精致绣花纯羊毛双面呢大衣"\n' +
          '            }\n' +
          '             ]\n' +
          '          }\n' +
          '      },\n' +
          '      methods: {\n' +
          '        orderFn(letter, original) {\n' +
          '          console.log( this.priceList)\n' +
          '          this.letter = letter;\n' +
          '          this.original = original;\n' +
          '        }\n' +
          '      },\n' +
          '        computed: {\n' +
          '          lists: function () {\n' +
          '            var _this = this;\n' +
          '            if (this.letter != \'\') {\n' +
          '              this.products.sort(function (a, b) {\n' +
          '                if (_this.original) {\n' +
          '                  return b[_this.letter] - a[_this.letter];\n' +
          '                } else {\n' +
          '                  return a[_this.letter] - b[_this.letter];\n' +
          '                }\n' +
          '              });\n' +
          '            }\n' +
          '            return this.products;\n' +
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

