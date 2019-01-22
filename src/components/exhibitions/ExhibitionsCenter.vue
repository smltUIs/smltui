<template>
    <div class="ExhibitionsCenter">
      <h1 class="bigData">大数据实例</h1>
        <div class="ExhibitionsCenter-auto">
            <div class="ExhibitionsCenter-auto-01">
                <img class="auto-01-img" src="../../../static/image/11.jpg"/>
                <div class="gitbox">
                    <h4 class="gitbox-h1">大数据展示①</h4>
                    <span class="iconfont icon-github gitbox01"></span>
                </div>
            </div>
          <a href="https://smltuis.github.io/smartbigdata/"><div class="ExhibitionsCenter-auto-02">
                <img class="auto-01-img" src="../../../static/image/dashuju02.jpg"/>
                <div class="gitbox">
                    <h4 class="gitbox-h1">大数据展示②</h4>
                    <span class="iconfont icon-github gitbox01"></span>
                </div>
            </div></a>
        </div>

      <div class="ExhibitionsCenter-auto">
        <div class="ExhibitionsCenter-auto-01">
          <img class="auto-01-img" src="../../../static/image/dashuju03.jpg"/>
          <div class="gitbox">
            <h4 class="gitbox-h1">大数据展示③</h4>
            <span class="iconfont icon-github gitbox01"></span>
          </div>
        </div>
        <div class="ExhibitionsCenter-auto-02">
          <img class="auto-01-img" src="../../../static/image/dashuju04.jpg"/>
          <div class="gitbox">
            <h4 class="gitbox-h1">大数据展示④</h4>
            <span class="iconfont icon-github gitbox01"></span>
          </div>
        </div>
      </div>

      <div class="ExhibitionsCenter-auto">
        <a href="https://smltuis.github.io/bigdatatab/"><div class="ExhibitionsCenter-auto-01">
          <img class="auto-01-img" src="../../../static/image/dashuju05.jpg"/>
          <div class="gitbox">
            <h4 class="gitbox-h1">大数据展示⑤</h4>
            <span class="iconfont icon-github gitbox01"></span>
          </div>
        </div></a>
        <a href="https://smltuis.github.io/bigdata/"><div class="ExhibitionsCenter-auto-02">
          <img class="auto-01-img" src="../../../static/image/dashuju06.jpg"/>
          <div class="gitbox">
            <h4 class="gitbox-h1">大数据展示⑥</h4>
            <span class="iconfont icon-github gitbox01"></span>
          </div>
        </div></a>
      </div>
    </div>
</template>

<script>
    export default {
      name: "ExhibitionsCenter",
      data() {
        return {
          auto: [
            {autoImg1:"../../static/image/11.jpg", gitboxH1: "大数据展示①", autoImg2: "../../static/image/dashuju02.jpg", gitboxH2: "大数据展示②"},
            {autoImg1:"../../static/image/dashuju03.jpg", gitboxH1: "大数据展示③", autoImg2: "../../static/image/dashuju04.jpg", gitboxH2: "大数据展示④"},
            {autoImg1:"../../static/image/dashuju05.jpg", gitboxH1: "大数据展示⑤", autoImg2: "../../static/image/dashuju06.jpg", gitboxH2: "大数据展示⑥"}
          ]
        }
      }
    }

</script>

<style scoped>

</style>
