<template>
  <div class="FrameApp">
  <div class="FrameAppHeader">
    <h2>www.smltui.com</h2>
    <div class="webAppContent">
      <iframe class="iframeApp" src="../../../static/lifethesorting.html"></iframe>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "LifeTheSortingApp"
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
