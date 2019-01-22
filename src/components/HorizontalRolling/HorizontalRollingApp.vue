<template>
  <div class="FrameApp">
    <div class="FrameAppHeader">
      <h2>www.smltui.com</h2>
      <div class="webAppContent">
        <iframe src="../../../static/horizontalrolling.html" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HorizontalRollingApp"
    }
</script>

<style scoped>
  iframe{
    width: 100%;
    height: 100%;
    margin-top:40px;
  }
</style>
