<template>
  <div class="FrameApp">
    <div class="FrameAppHeader">
      <h2>www.smltui.com</h2>
      <div class="webAppContent">
        <iframe class="iframeApp" src="../../../static/gobacktop.html"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoBackToTopApp"

    }
</script>

<style scoped>
/*.webAppContent{*/
  /*position: relative;*/
/*}*/
  iframe{
    width: 100%;
    height: 100%;
  }

</style>
