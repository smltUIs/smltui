<template>
    <div class="ExhibitionsHeader">
      <!--导航信息-->
      <div class="IndexHeader-left">
        <a href="#"><img class="index-logo" src="../../../static/image/logo.png"></a>
      </div>
      <div class="IndexHeader-right">
        <ul>
          <router-link to="/"><li><a href="">首页</a></li></router-link>
          <router-link to="/Frame"><li><a href="">组件</a></li></router-link>
          <router-link to="/mobileshow"><li><a href="">移动端展示</a></li></router-link>
          <router-link to="/exhibitions"><li><a href="">大数据展示</a></li></router-link>
        </ul>
      </div>
      <!--header视频背景-->
      <div id="video-back">
          <video poster=" " autoplay muted loop class="vidbacking">
            <source class="video-back" src="../../../static/video/movie_pc.mp4" type="video/mp4">
          </video>
      </div>
    </div>
</template>

<script>
    import "../../assets/js/jquery-1.9.2.min";
    import "../../assets/js/jquery.vidbacking";
    import "../../assets/js/jquery.vidbacking.min1"
    export default {
        name: "ExhibitionsHeader",
    };

    /* DIV元素内的HTML5视频背景 */
    $(function(){
      $('.ExhibitionsHeader').vidbacking({
        'masked': true
      });
    });
</script>

<style scoped>
  @import "../../assets/css/jquery.vidbacking.css";
</style>
