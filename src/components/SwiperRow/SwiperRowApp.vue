<template>
  <div class="FrameApp">
    <div class="FrameAppHeader">
      <h2>www.smltui.com</h2>
      <div class="webAppContent">
        <div class="swiperBox">
          <!-- Swiper -->
          <div class="swiper-container swiperRow">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../../../static/image/list-m-6.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../../static/image/list-m-7.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../../static/image/list-m-8.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../../static/image/list-m-9.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../../static/image/list-m-10.jpg" alt=""></div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import SwiperCss from "../../../node_modules/swiper/dist/css/swiper.css";
    import Swiper from "swiper";
    export default {
        name: "SwiperRowApp",
        components:{SwiperCss},
        mounted(){
          var swiper = new Swiper('.swiperRow', {
            pagination: {
              el: '.swiper-pagination'
            },
            autoplay:true,
            loop:true,
            clickable:true
          });
        }
    }
</script>

<style scoped>

</style>
