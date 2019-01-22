<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>横向轮播图</h1>
        <p class="lookout">作用：更加直观明了地显示数据，如商品信息等，并且在各大网站都会使用到焦点轮播图，因为它占用地方少，交互性好。</p>
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
      </div>
    </div>
    <swiper-row-app></swiper-row-app>
  </div>
</template>

<script>
    import SwiperRowApp from "../../components/SwiperRow/SwiperRowApp";
    export default {
        name: "SwiperRow",
        components: {SwiperRowApp},
        data(){
          return{
            download:
            "import smltui from smltui\n" +
            "Vue.use(smltui)",
            code2:
            " <swiper-row></swiper-row>\n" ,
            tableInfo:[
              {
                params:"swiperRow",
                description:"存放轮播图的容器",
                type:"Dom元素",
                default:"-",
                version:"1.0.0"
              },
              {
                params:"autoplay",
                description:"是否自动播放",
                type:"Boolean",
                default:"false",
                version:"1.0.0"
              },
              {
                params:"loop",
                description:"是否循环播放",
                type:"Boolean",
                default:"true",
                version:"1.0.0"
              },
              {
                params:"clickable",
                description:"点击分页器指示点控制swiper切换",
                type:"Boolean",
                default:"true",
                version:"1.0.0"
              }
            ],
            code:
            "import SwiperCss from \"../../../node_modules/swiper/dist/css/swiper.css\";\n" +
              "    import Swiper from \"swiper\";\n" +
              "    export default {\n" +
              "        name: \"SwiperRowApp\",\n" +
              "        components:{SwiperCss},\n" +
              "        mounted(){\n" +
              "          var swiper = new Swiper('.swiperRow', {\n" +
              "            pagination: {\n" +
              "              el: '.swiper-pagination'\n" +
              "            },\n" +
              "            autoplay:true,\n" +
              "            loop:true,\n" +
              "            clickable:true\n" +
              "          });\n" +
              "        }\n" +
              "    }"
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
