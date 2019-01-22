<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>3D轮播图</h1>
        <p class="lookout">作用：使用面向对象，实现图波浪切换的效果，用户体验较为良好</p>
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
    <three-d-swiper-app></three-d-swiper-app>
  </div>
</template>

<script>
    import ThreeDSwiperApp from "../../components/ThreeDSwiper/ThreeDSwiperApp";
    export default {
        name: "ThreeDSwiper",
        components: {ThreeDSwiperApp},
        data(){
          return{
            download:
            "import smltui from smltui\n" +
            "Vue.use(smltui)",
            code2:
            "var silder = new Slider(SolidBox,270,350,[\n" +
              "            \"../../../static/image/list-w-1.jpg\",\n" +
              "            \"../../../static/image/list-w-2.jpg\",\n" +
              "            \"../../../static/image/list-w-3.jpg\",\n" +
              "            \"../../../static/image/list-w-4.jpg\"],\n" +
              "            true,2000)",
            tableInfo:[
            {
              params:"boxDomObj",
              description:"存放轮播图的容器",
              type:"Dom元素",
              default:"-",
              version:"1.0.0"
            },
            {
              params:"width",
              description:"容器的宽度",
              type:"Number",
              default:"-",
              version:"1.0.0"
            },
            {
              params:"height",
              description:"容器的高度",
              type:"Number",
              default:"-",
              version:"1.0.0"
            },
            {
              params:"imgs",
              description:"图片数组",
              type:"Array",
              default:"Object",
              version:"1.0.0"
            },
            {
              params:"isBoxShadow",
              description:"是否有盒阴影",
              type:"Boolean",
              default:"true",
              version:"1.0.0"
            },
            {
              params:"timeSpace",
              description:"时间间隔",
              type:"Number",
              default:"1000",
              version:"1.0.0"
            }
          ],
            code:
            "mounted(){\n" +
              "          function Slider(boxDomObj,width,height,imgs,isBoxShadow,timeSpace){\n" +
              "            if(arguments.length>0){\n" +
              "              this.boxDomObj = boxDomObj;\n" +
              "              this.width = width;\n" +
              "              this.height = height;\n" +
              "              this.imgs = imgs;\n" +
              "              this.isBoxShadow = isBoxShadow;\n" +
              "              this.timeSpace = timeSpace;\n" +
              "              this.myTimer = null;\n" +
              "              this.createUI();\n" +
              "            }\n" +
              "          };\n" +
              "          var css = document.getElementsByTagName(\"style\")[0];\n" +
              "          Slider.prototype.createUI = function(){\n" +
              "            this.boxDomObj.style.width = this.width+\"px\";\n" +
              "            this.boxDomObj.style.height = this.height+\"px\";\n" +
              "            this.boxDomObj.style.margin = \"70px auto 0\";\n" +
              "            if(this.isBoxShadow){\n" +
              "              this.boxDomObj.style.boxShadow = \"1px 7px 25px #f60\";\n" +
              "            }else{\n" +
              "              this.boxDomObj.style.boxShadow = \"0\";\n" +
              "            };\n" +
              "            //创建ul用来放置图片\n" +
              "            var oUl = document.createElement(\"ul\");\n" +
              "            oUl.style.height = \"100%\";\n" +
              "            this.boxDomObj.appendChild(oUl);\n" +
              "            var num = 100;\n" +
              "            var uHTML = \"\",\n" +
              "              pHTML = \"\",\n" +
              "              tHTML = \"\",\n" +
              "              yuanLiHTML = \"\",\n" +
              "              yuanDivHTML = \"\",\n" +
              "              Div1HTML = \"\",\n" +
              "              Div2HTML = \"\",\n" +
              "              Div3HTML = \"\",\n" +
              "              Div4HTML = \"\",\n" +
              "              oLisHTML = \"\",\n" +
              "              xuanOlLIi = \"\";\n" +
              "            var allWidth = this.width / num;\n" +
              "            for(var i=0;i<num;i++){\n" +
              "              //循环创建li和每一小份div(循环完每一张图片有100份小div)，四个div对应四张图片\n" +
              "              uHTML += '<li><div></div><div></div><div></div><div></div></li>';\n" +
              "              //设置li的子元素div的样式，根据i的值，产生不同的背景图位置，最终达到100小份拼成一整张图片\n" +
              "              pHTML += '.SolidBox ul li:nth-child(' + (i + 1) + ') div{background-position-x:' + (-i * allWidth) + 'px;}';\n" +
              "              //设置li的样式，根据i的值，每一份产生不同的动画时间，以达到波浪的效果\n" +
              "              tHTML += '.SolidBox ul li:nth-child(' + (i + 1) + '){transition: 0.8s ' + (0.3 * i / num) + 's}';\n" +
              "            }\n" +
              "            yuanLiHTML = \".SolidBox ul li{position:relative;float:left;box-sizing:border-box;transform-style:preserve-3d;transform:translateZ(-175px);}\";\n" +
              "            yuanDivHTML = \".SolidBox ul li div{position:absolute;width:100%;height:100%;}\";\n" +
              "            Div1HTML = \".SolidBox ul li div:nth-child(1){top:-350px;background:url(\" + this.imgs[1] + \");transform-origin:bottom;transform:translateZ(175px) rotateX(90deg);}\";\n" +
              "            Div2HTML = \".SolidBox ul li div:nth-child(2){top:350px;background:url(\" + this.imgs[0] + \");transform-origin:top;transform:translateZ(175px) rotateX(-90deg);}\";\n" +
              "            Div3HTML = \".SolidBox ul li div:nth-child(3){background:url(\" + this.imgs[2] + \");transform:translateZ(175px);}\";\n" +
              "            Div4HTML = \".SolidBox ul li div:nth-child(4){background:url(\" + this.imgs[3] + \");transform:translateZ(-175px) rotateX(180deg);}\";\n" +
              "            //把创建的li和div添加到oUl中\n" +
              "            oUl.innerHTML = uHTML;\n" +
              "            var ols = document.createElement(\"ol\");\n" +
              "            ols.style.cssText = \"position:absolute;left:50%;width:300px;height:50px;margin-top:20px;transform:translateX(-50%);display:flex;justify-content:space-around;color:transparent;\";\n" +
              "            for(var i=0;i<4;i++){\n" +
              "              var oLis = document.createElement(\"li\");\n" +
              "              oLis.innerHTML = i+1;\n" +
              "              ols.appendChild(oLis);\n" +
              "            }\n" +
              "            oLisHTML = \".SolidBox ol li{width:50px;height:50px;background:black;box-shadow:0 2px 5px white;border-radius:50%;color:white;text-align:center;font-size:20px;line-height:50px;cursor:pointer;list-style:none}\";\n" +
              "            xuanOlLIi = \".SolidBox ol li.on{background:red;}\";\n" +
              "            this.boxDomObj.appendChild(ols);\n" +
              "            //把动态写好的样式追加到style样式中\n" +
              "            css.innerHTML += xuanOlLIi + oLisHTML + yuanLiHTML + yuanDivHTML + Div1HTML + Div2HTML + Div3HTML + Div4HTML + pHTML + tHTML + \".SolidBox ul li, .SolidBox ul li div{width:\" + allWidth + \"px;height:100%}\";\n" +
              "            this.bindEvent();\n" +
              "            this.play();\n" +
              "          }\n" +
              "          Slider.prototype.bindEvent = function(){\n" +
              "            var DouDou = document.querySelectorAll(\"ol li\");\n" +
              "            for (var i = 0; i < DouDou.length; i++) {\n" +
              "              DouDou[i].index = i;\n" +
              "              DouDou[i].onclick = function(){\n" +
              "                n = this.index;\n" +
              "                for(var i=0;i<DouDou.length;i++){\n" +
              "                  DouDou[i].className = \"\";\n" +
              "                }\n" +
              "                this.className = \"on\";\n" +
              "                css.innerHTML += \".SolidBox ul li{transform: translateZ(-175px) rotateX(\" + (n * 90) + \"deg);}\"\n" +
              "              }\n" +
              "            };\n" +
              "            this.boxDomObj.onmouseenter = function(){\n" +
              "              clearInterval(this.myTimer);\n" +
              "            };\n" +
              "            this.boxDomObj.onmouseleave = function(){\n" +
              "              // this.play();\n" +
              "            };\n" +
              "          }\n" +
              "\n" +
              "          Slider.prototype.play = function () {\n" +
              "            clearInterval(this.myTimer);\n" +
              "            var n = 0;\n" +
              "            this.myTimer = setInterval(function () {\n" +
              "              n++;\n" +
              "              n = n % 4;\n" +
              "              var DouDou = document.querySelectorAll(\"ol li\");\n" +
              "              for (var i = 0; i < DouDou.length; i++) {\n" +
              "                DouDou[i].className = \"\";\n" +
              "              }\n" +
              "              DouDou[n].className = \"on\";\n" +
              "              css.innerHTML += \".SolidBox ul li{transform: translateZ(-250px) rotateX(\" + (n * 90) + \"deg);}\";\n" +
              "            }, this.timeSpace);\n" +
              "          }\n" +
              "          var SolidBox = document.getElementsByClassName(\"SolidBox\")[0];\n" +
              "          var silder = new Slider(SolidBox,270,350,[\n" +
              "            \"../../../static/image/list-w-1.jpg\",\n" +
              "            \"../../../static/image/list-w-2.jpg\",\n" +
              "            \"../../../static/image/list-w-3.jpg\",\n" +
              "            \"../../../static/image/list-w-4.jpg\"],\n" +
              "            true,2000)\n" +
              "        }"
          }
        },
        mounted(){

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
