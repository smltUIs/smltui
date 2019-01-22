<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>检测验证</h1>
        <p>作用：可以实现验证功能，并得到相应的验证状态</p>
        <p class="lookout">基于jQuery按住滑块拖动到最右边,这是一款简单实用的滑块验证代码，经常用在网站注册登录验证。</p>
        <p class="methods">使用方法:</p>
      </div>
    </div>
    <test-app></test-app>
  </div>
</template>

<script>
    import TestApp from "../../components/Test/TestApp";
    export default {
        name: "Test",
        components: {TestApp}
    }
</script>

<style scoped>

</style>
