<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>3D旋转轮播图</h1>
        <p class="lookout">作用：基于jQuery，实现图片在3D空间轮播切换，也可点击上下按钮切换，效果灵活，便于使用</p>
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
    <vertical-swiper-app></vertical-swiper-app>
  </div>
</template>

<script>
    import VerticalSwiperApp from "../../components/VerticalSwiper/VerticalSwiperApp";
    export default {
        name: "VerticalSwiper",
        components: {VerticalSwiperApp},
        data(){
          return{
            download:
            "import smltui from smltui\n" +
            "Vue.use(smltui)",
            code2:
              "  <vertical-swiper></vertical-swiper>\n" ,
            tableInfo:[
              {
                params:"transform",
                description:"CSS3动画属性",
                type:"String",
                default:"-",
                version:"1.0.0"
              },
              {
                params:"querySelector",
                description:"选择器",
                type:"Array",
                default:"Object",
                version:"1.0.0"
              },
              {
                params:"target",
                description:"事件源",
                type:"Object",
                default:"-",
                version:"1.0.0"
              }
            ],
            eventInfo:[
              {
                eventname:"addEventListener",
                description:"添加事件监听器",
                params:"click：事件，true：是否自动播放"
              }
            ],
            code:
            "mounted(){\n" +
              "          window.addEventListener('load', function () {\n" +
              "            var carousels = document.querySelectorAll('.carousel');\n" +
              "\n" +
              "            for (var i = 0; i < carousels.length; i++) {\n" +
              "              carousel(carousels[i]);\n" +
              "            }\n" +
              "          });\n" +
              "\n" +
              "          function carousel(root) {\n" +
              "            var figure = root.querySelector('figure'),\n" +
              "              nav = root.querySelector('nav'),\n" +
              "              images = figure.children,\n" +
              "              n = images.length,\n" +
              "              gap = root.dataset.gap || 0,\n" +
              "              bfc = 'bfc' in root.dataset,\n" +
              "              theta = 2 * Math.PI / n,\n" +
              "              currImage = 0;\n" +
              "\n" +
              "            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));\n" +
              "            window.addEventListener('resize', function () {\n" +
              "              setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));\n" +
              "            });\n" +
              "\n" +
              "            setupNavigation();\n" +
              "\n" +
              "            function setupCarousel(n, s) {\n" +
              "              var apothem = s / (2 * Math.tan(Math.PI / n));\n" +
              "\n" +
              "              figure.style.transformOrigin = '50% 50% ' + -apothem + 'px';\n" +
              "\n" +
              "              for (var i = 0; i < n; i++) {\n" +
              "                images[i].style.padding = gap + 'px';\n" +
              "              }for (i = 1; i < n; i++) {\n" +
              "                images[i].style.transformOrigin = '50% 50% ' + -apothem + 'px';\n" +
              "                images[i].style.transform = 'rotateY(' + i * theta + 'rad)';\n" +
              "              }\n" +
              "              if (bfc) for (i = 0; i < n; i++) {\n" +
              "                images[i].style.backfaceVisibility = 'hidden';\n" +
              "              }rotateCarousel(currImage);\n" +
              "            }\n" +
              "\n" +
              "            function setupNavigation() {\n" +
              "              nav.addEventListener('click', onClick, true);\n" +
              "\n" +
              "              function onClick(e) {\n" +
              "                e.stopPropagation();\n" +
              "\n" +
              "                var t = e.target;\n" +
              "                if (t.tagName.toUpperCase() != 'BUTTON') return;\n" +
              "\n" +
              "                if (t.classList.contains('next')) {\n" +
              "                  currImage++;\n" +
              "                } else {\n" +
              "                  currImage--;\n" +
              "                }\n" +
              "\n" +
              "                rotateCarousel(currImage);\n" +
              "              }\n" +
              "            }\n" +
              "\n" +
              "            function rotateCarousel(imageIndex) {\n" +
              "              figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)';\n" +
              "            }\n" +
              "          }\n" +
              "        }"
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
