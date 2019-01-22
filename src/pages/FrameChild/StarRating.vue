<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>星星评分</h1>
        <p class="lookout">作用：用户可以对购买的商品及商家做出等级评价，直观表达出用户的满意度</p>
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

    <star-rating-app></star-rating-app>
  </div>
</template>

<script>
    import StarRatingApp from "../../components/StarRating/StarRatingApp";
    export default {
        name: "StarRating",
      components: {StarRatingApp},
      data(){
        return{
          download:
            "import smltui from smltui\n" +
            "Vue.use(smltui)",
          code2:
            "<star-rating\n" +
            "    :stars=\"stars\"\n" +
            "    :starNum=\"starNum\"\n" +
            "  >\n" +
            "</star-rating>",
          tableInfo:[
            {
              params:"data",
              description:"相关数据",
              type:"Object",
              default:"Object",
              version:"1.0.0"
            },
            {
              params:"stars",
              description:"储存星星的数据",
              type:"Array",
              default:"Object",
              version:"1.0.0"
            },
            {
              params:"src",
              description:"图片路径",
              type:"String",
              default:"-",
              version:"1.0.0"
            },
            {
              params:"active",
              description:"星星是否被点击",
              type:"Boolean",
              default:"false",
              version:"1.0.0"
            },
            {
              params:"total",
              description:"星星总数",
              type:"Number",
              default:"5",
              version:"1.0.0"
            }
          ],
          eventInfo:[
            {
              eventname:"click",
              description:"点击触发该事件",
              params:"rating(index)：改变当前星星的状态"
            }
          ],
          code:
            "//星星的图片路径\n" +
            "  var starOffImg = \"staroff.png\";\n" +
            "  var starOnImg = \"staron.png\";\n" +
            "\n" +
            "  var app = new Vue({\n" +
            "    el: \".row\",\n" +
            "    data: {\n" +
            "      stars: [{\n" +
            "        src: starOffImg,\n" +
            "        active: false\n" +
            "      }, {\n" +
            "        src: starOffImg,\n" +
            "        active: false\n" +
            "      }, {\n" +
            "        src: starOffImg,\n" +
            "        active: false\n" +
            "      },\n" +
            "        {\n" +
            "          src: starOffImg,\n" +
            "          active: false\n" +
            "        }, {\n" +
            "          src: starOffImg,\n" +
            "          active: false\n" +
            "        }\n" +
            "      ],\n" +
            "      starNum: 0,\n" +
            "    },\n" +
            "    methods: {\n" +
            "      //评分\n" +
            "      rating: function(index) {\n" +
            "        var total = this.stars.length; //星星总数\n" +
            "        var idx = index + 1; //这代表选的第idx颗星-也代表应该显示的星星数量\n" +
            "\n" +
            "        //进入if说明页面为初始状态\n" +
            "        if(this.starNum == 0) {\n" +
            "          this.starNum = idx;\n" +
            "          for(var i = 0; i < idx; i++) {\n" +
            "            this.stars[i].src = starOnImg;\n" +
            "            this.stars[i].active = true;\n" +
            "          }\n" +
            "        } else {\n" +
            "          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。\n" +
            "          if(idx == this.starNum) {\n" +
            "            for(var i = index; i < total; i++) {\n" +
            "              this.stars[i].src = starOffImg;\n" +
            "              this.stars[i].active = false;\n" +
            "            }\n" +
            "          }\n" +
            "          //如果小于当前最高星级，则直接保留当前星级\n" +
            "          if(idx < this.starNum) {\n" +
            "            for(var i = idx; i < this.starNum; i++) {\n" +
            "              this.stars[i].src = starOffImg;\n" +
            "              this.stars[i].active = false;\n" +
            "            }\n" +
            "          }\n" +
            "          //如果大于当前星级，则直接选到该星级\n" +
            "          if(idx > this.starNum) {\n" +
            "            for(var i = 0; i < idx; i++) {\n" +
            "              this.stars[i].src = starOnImg;\n" +
            "              this.stars[i].active = true;\n" +
            "            }\n" +
            "          }\n" +
            "\n" +
            "          var count = 0; //计数器-统计当前有几颗星\n" +
            "          for(var i = 0; i < total; i++) {\n" +
            "            if(this.stars[i].active) {\n" +
            "              count++;\n" +
            "            }\n" +
            "          }\n" +
            "          this.starNum = count;\n" +
            "        }\n" +
            "      }\n" +
            "    }\n" +
            "  })"
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
