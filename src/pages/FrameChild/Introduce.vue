<template>
    <div class="introduce">
      <div class="introduce-left">
        <div class="introduce-component-logo">
          <img src="../../../static/image/title-logo.png" alt="">
          <h1>SmltUI</h1>
          <p>基于vue且简单、轻量、易于上手的移动端组件库</p>
        </div>
        <div class="introduce-special">
          <h1>特性</h1>
          <ul>
            <li>质量可靠</li>
            <p>便于应用、修改以及下载组件。</p>
            <li>体验较佳</li>
            <p>迅速响应，动画比较流畅。</p>
            <li>标准规范</li>
            <p>遵循统一的设计交互标准，基本还原设计效果。</p>
            <li>实例清晰</li>
            <p>逻辑清楚，代码完善。</p>
            <li>扩展性较强</li>
            <p>轻量灵活，扩展性强，可以方便地基于现有组件实现二次开发。</p>
          </ul>
          <h1 class="fastStart">快速上手</h1>
          <div class="description">
            如果你没有安装过smltUI，请参考 <router-link to="/Frame/QuickStart">快速上手</router-link>
          </div>
          <h1>浏览器支持</h1>
          <p class="supprot">标准浏览器都支持</p>
        </div>
      </div>
      <introduce-app></introduce-app>
    </div>
</template>

<script>
    import IntroduceApp from "../../components/Introduce/IntroduceApp";
    export default {
        name: "Introduce",
      components: {IntroduceApp}
    }
</script>

<style scoped>

</style>
