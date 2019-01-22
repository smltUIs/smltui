<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>倒计时</h1>
        <p>作用：获取当前时间计算时间戳</p>
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
      </div>
    </div>
    <count-down-app></count-down-app>
  </div>
</template>

<script>
    import CountDownApp from "../../components/CountDown/CountDownApp";
    export default {
        name: "CountDown",
      components: {CountDownApp},
      data(){
          return{
            code1:
              "import smltui from 'smltui'\n" +
              "Vue.use(smltui)\n",
            code2:
              ' <count-down></count-down>',
            code3:'mounted() {\n' +
              '      var endTime = new Date(\'2019-02-04 00:00:00\');\n' +
              '      this._inter = setInterval(function dong() {\n' +
              '        var startTime = new Date();\n' +
              '        //获取时间戳\n' +
              '        var c = endTime.getTime() - startTime.getTime();//毫秒\n' +
              '        c = c / 1000;\n' +
              '        var sec = parseInt(c % 60);\n' +
              '        var min = parseInt(c / 60) % 60;\n' +
              '        var hour = parseInt(c / 3600) % 24;\n' +
              '        var day = parseInt((c / 3600 / 24));\n' +
              '        document.querySelector(".days").innerHTML = day;\n' +
              '        document.querySelector(".hours").innerHTML = hour;\n' +
              '        document.querySelector(".minutes").innerHTML = min;\n' +
              '        document.querySelector(".seconds").innerHTML = sec;\n' +
              '      }, 1000);'
          }
      }
    }
</script>

<style scoped>

</style>
