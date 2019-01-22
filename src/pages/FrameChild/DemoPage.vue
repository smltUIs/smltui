<template>
  <div class="introduce">
    <div class="introduce-left">
      <div class="introduce-special quick-start">
        <h1>示例页面</h1>



      </div>
    </div>

    <demo-page-app></demo-page-app>
  </div>
</template>

<script>
    import DemoPageApp from "../../components/DemoPage/DemoPageApp";
    export default {
        name: "DemoPage",
        components: {DemoPageApp}
    }
</script>

<style scoped>
</style>
