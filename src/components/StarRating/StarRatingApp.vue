<template>
  <div class="FrameApp">
    <div class="FrameAppHeader">
      <h2>www.smltui.com</h2>
      <div class="webAppContent">
        <iframe src="../../../static/StarRating.html"></iframe>
        <iframe src="../../../static/likerating.html"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "StarRatingApp"
    }
</script>

<style scoped>
  .FrameAppHeader .webAppContent iframe{
  width: 100%;
  height:150px;
  overflow: hidden;
    border: none;
}
</style>
