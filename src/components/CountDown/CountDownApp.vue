<template>
  <div class="FrameApp">
    <div class="FrameAppHeader">
      <h2>www.smltui.com</h2>
      <div class="webAppContent">
        <iframe class="iframeApp" src="../../../static/countdown.html"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CountDownApp"
    }
</script>

<style scoped>
  iframe{
    width: 100%;
    height: 100%;
  }
</style>
