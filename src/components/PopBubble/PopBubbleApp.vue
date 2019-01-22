<template>
  <div class="FrameApp">
    <div class="FrameAppHeader">
      <!--<img src="../../../static/image/frameHeaderImg.png" alt="">-->
      <h2>www.smltui.com</h2>
      <div class="webAppContent">
        <!--<iframe src="../../../static/gobacktop.html" frameborder="0"></iframe>-->
        <iframe src="../../../static/popbubble.html" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PopBubbleApp"
    }
</script>

<style scoped>
  iframe{
    width: 100%;
    height: 100%;
  }
</style>
