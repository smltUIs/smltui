<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>购物车</h1>
        <p>作用：对用户想要购买的物品进行存储，连通第三方支付</p>
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
    <shop-cart-app></shop-cart-app>
  </div>
</template>

<script>
    import ShopCartApp from "../../components/SmlShopCart/ShopCartApp";
    export default {
        name: "SmlShopCart",
        components: {ShopCartApp},
        data() {
        return {
          tableInfo:[
            {
              params:"shopcartproductImg",
              description:"商品图片",
              type:"String",
              default:"shopcart-product-01.jpg",
              version:"1.0.0"
            },
            {
              params:"shopcartproductDescribe",
              description:"商品描述",
              type:"String",
              default:"唯品自营 | 大翻领双排扣保暖中长款羊毛呢大衣",
              version:"1.0.0"
            },
            {
              params:"shopcartproductBrand",
              description:"品牌",
              type:"String",
              default:"艾诺丝雅诗ARIOSEYEARS-最后疯抢专场",
              version:"1.0.0"
            },
            {
              params:"shopcartproductSize",
              description:"尺码",
              type:"String",
              default:"M",
              version:"1.0.0"
            },
            {
              params:"shopcartproductDecrease",
              description:"折扣",
              type:"String",
              default:"唯品价343元,最后疯抢立省144.0元",
              version:"1.0.0"
            },
            {
              params:"shopcartproductCurrPrice",
              description:"现价",
              type:"Number",
              default:"1789",
              version:"1.0.0"
            },
            {
              params:"shopcartproductOriPrice",
              description:"原价",
              type:"Number",
              default:"1999",
              version:"1.0.0"
            },
            {
              params:"number",
              description:"默认数量",
              type:"Number",
              default:"1",
              version:"1.0.0"
            }
          ],
          code1:
            "import smltui from 'smltui'\n" +
            "Vue.use(smltui)\n",
          code2:
            ' <sml-shop-cart\n' +
            '      :shopcartproduct="shopcartproduct"\n' +
            '  >\n' +
            ' </>',
          code3:
            'export default {\n' +
            '        name: "SmlShopCart",\n' +
            '        component:{SmlShopCartFont},\n' +
            '        mounted(){\n' +
            '          $(".shopcart-product-box").each(function () {\n' +
            '            $(this).children(".shopcart-product-num-box").children(".shopcart-product-nums").children(".icon-close-icon").click(function(){\n' +
            '              $(this).parent(".shopcart-product-nums").parent(".shopcart-product-num-box").parent(".shopcart-product-box").remove();\n' +
            '            })\n' +
            '          })\n' +
            '        },\n' +
            '      data(){\n' +
            '        return {\n' +
            '          shopcartproduct:[\n' +
            '            {\n' +
            '              "shopcartproductImg":"../static/image/shopcart-product-01.jpg",\n' +
            '              "shopcartproductDescribe":"唯品自营 | 大翻领双排扣保暖中长款羊毛呢大衣",\n' +
            '              "shopcartproductBrand":"艾诺丝雅诗ARIOSEYEARS-最后疯抢专场",\n' +
            '              "shopcartproductSize":"M",\n' +
            '              "shopcartproductDecrease":"唯品价343元,最后疯抢立省144.0元",\n' +
            '              "shopcartproductCurrPrice":"1789",\n' +
            '              "shopcartproductOriPrice":"1999",\n' +
            '              "number":"1"\n' +
            '            },\n' +
            '            {\n' +
            '              "shopcartproductImg":"../static/image/shopcart-product-02.jpg",\n' +
            '              "shopcartproductDescribe":"唯品自营 | 大翻领双排扣保暖中长款羊毛呢大衣",\n' +
            '              "shopcartproductBrand":"艾诺丝雅诗ARIOSEYEARS-最后疯抢专场",\n' +
            '              "shopcartproductSize":"M",\n' +
            '              "shopcartproductDecrease":"唯品价343元,最后疯抢立省144.0元",\n' +
            '              "shopcartproductCurrPrice":"666",\n' +
            '              "shopcartproductOriPrice":"1000",\n' +
            '              "number":"1"\n' +
            '            }\n' +
            '          ]\n' +
            '        }\n' +
            '      },\n' +
            '      methods: {\n' +
            '        add(pid){\n' +
            '          this.shopcartproduct[pid].number++;\n' +
            '        },\n' +
            '        subtract(pid){\n' +
            '          if( this.shopcartproduct[pid].number <=1){\n' +
            '            this.shopcartproduct[pid].number =1\n' +
            '          } else{\n' +
            '            this.shopcartproduct[pid].number--;\n' +
            '          }\n' +
            '        },\n' +
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
