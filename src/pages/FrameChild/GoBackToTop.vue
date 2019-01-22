<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>回到顶部</h1>
        <p>作用：页面滚动较长时点击UP按钮快速回到顶部</p>
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
    <go-back-to-top-app></go-back-to-top-app>
  </div>
</template>

<script>
    import GoBackToTopApp from "../../components/GoBackToTop/GoBackToTopApp";
    export default {
        name: "GoBackToTop",
      components: {GoBackToTopApp},
      data() {
        return {
          tableInfo:[
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
              eventname:"click-up",
              description:"点击UP按钮触发",
              params:"-"
            }
          ],
          code1:
            "import smltui from 'smltui'\n" +
            "Vue.use(smltui)\n",
          code2:
            "  <go-back-to-top\n" +
            "    :isTop=\"isTop\"\n" +
            "    :letter=\"letter\"\n" +
            "    :original=\"original\"\n" +
            "    :products=\"products\"\n" +
            "  >\n" +
            "  </go-back-to-top>",
          code3:
           'data(){\n' +
            '      return{\n' +
            '        "products":[{\n' +
            '          "ListProImg":"PIC1",\n' +
            '          "ListProPrice":"916",\n' +
            '          "ListProRob":"",\n' +
            '          "ListProSmall":"4580",\n' +
            '          "ListDiscount":"2",\n' +
            '          "ListBrand":"音儿",\n' +
            '          "ListProName":"YINER音儿精致绣花纯羊毛双面呢大衣"\n' +
            '        },\n' +
            '          {\n' +
            '            "ListProImg":"PIC2",\n' +
            '            "ListProPrice":"597",\n' +
            '            "ListProRob":"",\n' +
            '            "ListProSmall":"3980",\n' +
            '            "ListDiscount":"1.5",\n' +
            '            "ListBrand":"音儿",\n' +
            '            "ListProName":"斯文淑女长款羊毛大衣"\n' +
            '          },\n' +
            '          {\n' +
            '            "ListProImg":"PIC3",\n' +
            '            "ListProPrice":"820",\n' +
            '            "ListProRob":"",\n' +
            '            "ListProSmall":"3280",\n' +
            '            "ListDiscount":"2.5",\n' +
            '            "ListBrand":"音儿",\n' +
            '            "ListProName":"YINER音儿时尚西装领纯羊毛双面呢大衣"\n' +
            '          },\n' +
            '          {\n' +
            '            "ListProImg":"PIC4",\n' +
            '            "ListProPrice":"2950",\n' +
            '            "ListProRob":"",\n' +
            '            "ListProSmall":"11800",\n' +
            '            "ListDiscount":"2.5",\n' +
            '            "ListBrand":"SEIFINI",\n' +
            '            "ListProName":"狐狸毛领羽绒内胆阿尔巴卡大衣"\n' +
            '          },\n' +
            '          {\n' +
            '            "ListProImg":"PIC5",\n' +
            '            "ListProPrice":"528",\n' +
            '            "ListProRob":"快抢价",\n' +
            '            "ListProSmall":"2399",\n' +
            '            "ListDiscount":"0",\n' +
            '            "ListBrand":"飘蕾",\n' +
            '            "ListProName":"Peoleo飘蕾2018冬装新款专柜同款大毛领外套羊毛"\n' +
            '          },\n' +
            '          {\n' +
            '            "ListProImg":"PIC6",\n' +
            '            "ListProPrice":"418",\n' +
            '            "ListProRob":"快抢价",\n' +
            '            "ListProSmall":"2980",\n' +
            '            "ListDiscount":"0",\n' +
            '            "ListBrand":"舒朗",\n' +
            '            "ListProName":"时尚舒适双排扣翻领羊毛大衣"\n' +
            '          },\n' +
            '          {\n' +
            '            "ListProImg":"PIC7",\n' +
            '            "ListProPrice":"1512",\n' +
            '            "ListProRob":"",\n' +
            '            "ListProSmall":"5680",\n' +
            '            "ListDiscount":"2.7",\n' +
            '            "ListBrand":"音儿",\n' +
            '            "ListProName":"中长款水波纹纯羊毛双面呢大衣"\n' +
            '          },\n' +
            '          {\n' +
            '            "ListProImg":"PIC8",\n' +
            '            "ListProPrice":"559",\n' +
            '            "ListProRob":"",\n' +
            '            "ListProSmall":"2199",\n' +
            '            "ListDiscount":"2.5",\n' +
            '            "ListBrand":"丽丽",\n' +
            '            "ListProName":"【收腰系带 双面呢】收腰系带中长款袖口拼接大衣"\n' +
            '          },\n' +
            '          {\n' +
            '            "ListProImg":"PIC9",\n' +
            '            "ListProPrice":"679",\n' +
            '            "ListProRob":"快抢价",\n' +
            '            "ListProSmall":"2890",\n' +
            '            "ListDiscount":"0",\n' +
            '            "ListBrand":"薇姿曼",\n' +
            '            "ListProName":"2018冬季新款风衣款双面呢小方领时尚肩扣系腰带"\n' +
            '          },\n' +
            '          {\n' +
            '            "ListProImg":"PIC10",\n' +
            '            "ListProPrice":"359",\n' +
            '            "ListProRob":"",\n' +
            '            "ListProSmall":"1028",\n' +
            '            "ListDiscount":"3.5",\n' +
            '            "ListBrand":"沫晗依美",\n' +
            '            "ListProName":"【2018冬装新款】女款复合皮毛一体韩版时尚通"\n' +
            '          },\n' +
            '          {\n' +
            '            "ListProImg":"PIC6",\n' +
            '            "ListProPrice":"418",\n' +
            '            "ListProRob":"快抢价",\n' +
            '            "ListProSmall":"2980",\n' +
            '            "ListDiscount":"0",\n' +
            '            "ListBrand":"舒朗",\n' +
            '            "ListProName":"时尚舒适双排扣翻领羊毛大衣"\n' +
            '          },\n' +
            '          {\n' +
            '            "ListProImg":"PIC7",\n' +
            '            "ListProPrice":"1512",\n' +
            '            "ListProRob":"",\n' +
            '            "ListProSmall":"5680",\n' +
            '            "ListDiscount":"2.7",\n' +
            '            "ListBrand":"音儿",\n' +
            '            "ListProName":"中长款水波纹纯羊毛双面呢大衣"\n' +
            '          },\n' +
            '          {\n' +
            '            "ListProImg":"PIC8",\n' +
            '            "ListProPrice":"559",\n' +
            '            "ListProRob":"",\n' +
            '            "ListProSmall":"2199",\n' +
            '            "ListDiscount":"2.5",\n' +
            '            "ListBrand":"丽丽",\n' +
            '            "ListProName":"【收腰系带 双面呢】收腰系带中长款袖口拼接大衣"\n' +
            '          },\n' +
            '          {\n' +
            '            "ListProImg":"PIC9",\n' +
            '            "ListProPrice":"679",\n' +
            '            "ListProRob":"快抢价",\n' +
            '            "ListProSmall":"2890",\n' +
            '            "ListDiscount":"0",\n' +
            '            "ListBrand":"薇姿曼",\n' +
            '            "ListProName":"2018冬季新款风衣款双面呢小方领时尚肩扣系腰带"\n' +
            '          },\n' +
            '          {\n' +
            '            "ListProImg":"PIC10",\n' +
            '            "ListProPrice":"359",\n' +
            '            "ListProRob":"",\n' +
            '            "ListProSmall":"1028",\n' +
            '            "ListDiscount":"3.5",\n' +
            '            "ListBrand":"沫晗依美",\n' +
            '            "ListProName":"【2018冬装新款】女款复合皮毛一体韩版时尚通"\n' +
            '          }\n' +
            '        ]\n' +
            '      }\n' +
            '    },\n' +
            '    methods:{\n' +
            '      needScroll () {\n' +
            '        let clientHeight = document.documentElement.clientHeight\n' +
            '        let obtn = this.$refs.btn\n' +
            '        console.log(clientHeight)\n' +
            '        window.onscroll = function () {\n' +
            '          let osTop = document.documentElement.scrollTop || document.body.scrollTop\n' +
            '\n' +
            '          console.log(osTop+"...")\n' +
            '          if (osTop >=clientHeight) {\n' +
            '\n' +
            '            console.log(123)\n' +
            '            obtn.style.opacity = \'0.8\'\n' +
            '          } else {\n' +
            '            obtn.style.opacity = \'0\'\n' +
            '            console.log(123)\n' +
            '          }\n' +
            '          if (!this.isTop) {\n' +
            '            clearInterval(timer)\n' +
            '          }\n' +
            '          this.isTop = false\n' +
            '        }\n' +
            '      },\n' +
            '      goTop () {\n' +
            '        timer = setInterval(function () {\n' +
            '          let osTop = document.documentElement.scrollTop || document.body.scrollTop\n' +
            '          let ispeed = Math.floor(-osTop / 5)\n' +
            '          document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed\n' +
            '          this.isTop = true\n' +
            '          if (osTop === 0) {\n' +
            '            clearInterval(timer)\n' +
            '          }\n' +
            '        }, 30)\n' +
            '      }\n' +
            '    },\n' +
            '    mounted(){\n' +
            '      this.needScroll()\n' +
            '    }'
        }
      }
    }
</script>

<style >

</style>
