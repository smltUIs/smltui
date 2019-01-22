<template>
    <div class="IndexCenter">
        <div class="IndexCenter-01">
            <div class="IndexCenter-01-lgo">
                <span>Smlt-UI</span>
            </div>
        </div>
      <div class="IndexCenter-02">
          <div class="IndexCenter-02-intro">
              <span>基于vue2.0简单快速爱不释手的ui框架</span>
          </div>
      </div>
      <div class="IndexCenter-03">
        <div class="IndexCenter-03-box">
              <div class="IndexCenter-03-start">
                <router-link to="/Frame"><span class="IndexCenter-03-start-span">开始使用</span></router-link>
              </div>
              <div class="IndexCenter-03-git">
                <span class="iconfont icon-github"></span>
                <a href="https://github.com/smltUIs" target="_blank"><span class="IndexCenter-03-git-span2">GitHub</span></a>
              </div>
              <div class="IndexCenter-03-exam">
                <span class="iconfont icon-instance"></span>
                <router-link to="/"><span class="IndexCenter-03-exam-span">官方实例</span></router-link>
              </div>
              <div class="IndexCenter-03-modul">
                <span class="iconfont icon-zujian"></span>
                <router-link to="/Frame"><span class="IndexCenter-03-modul-span">组件库</span></router-link>
              </div>
        </div>
      </div>

      <div class="content">
        <div class="photo-cube__wrapper">
          <input type="radio" id="1" name="cube" checked="true" class="photo-cube__control"/>
          <input type="radio" id="2" name="cube" class="photo-cube__control"/>
          <input type="radio" id="3" name="cube" class="photo-cube__control"/>
          <input type="radio" id="4" name="cube" class="photo-cube__control"/>
          <input type="radio" id="5" name="cube" class="photo-cube__control"/>
          <input type="radio" id="6" name="cube" class="photo-cube__control"/>
          <div class="photo-cube">
            <div class="photo-cube__panel"></div>
            <div class="photo-cube__panel"></div>
            <div class="photo-cube__panel"></div>
            <div class="photo-cube__panel"></div>
            <div class="photo-cube__panel"></div>
            <div class="photo-cube__panel"></div>
          </div>
          <div class="photo-cube__actions--left">
            <label for="6" class="photo-cube__action"></label>
            <label for="1" class="photo-cube__action"></label>
            <label for="2" class="photo-cube__action"></label>
            <label for="3" class="photo-cube__action"></label>
            <label for="4" class="photo-cube__action"></label>
            <label for="5" class="photo-cube__action"></label>
          </div>
          <div class="photo-cube__actions--right">
            <label for="2" class="photo-cube__action"></label>
            <label for="3" class="photo-cube__action"></label>
            <label for="4" class="photo-cube__action"></label>
            <label for="5" class="photo-cube__action"></label>
            <label for="6" class="photo-cube__action"></label>
            <label for="1" class="photo-cube__action"></label>
          </div>
          <div class="photo-cube__indicators">
            <label for="1" class="photo-cube__indicator"></label>
            <label for="2" class="photo-cube__indicator"></label>
            <label for="3" class="photo-cube__indicator"></label>
            <label for="4" class="photo-cube__indicator"></label>
            <label for="5" class="photo-cube__indicator"></label>
            <label for="6" class="photo-cube__indicator"></label>
          </div>
        </div>
      </div>

      <div class="parHd clearfix">
          <div class="tempWrap" style="overflow:hidden; position:relative;">
            <ul>
                <li class="act"><span></span>2019.01.20  2.0.0版本</li>
                <li><span></span>2019.01.15  1.0.0版本</li>
                <li><span></span>2019.01.05  安排分工</li>
                <li><span></span>2018.12.28  流程构建</li>
                <li><span></span>2018.12.25  组建团队</li>
            </ul>
          </div>
      </div>
      <div class="IndexCenter-05 chervon"></div>
    </div>
</template>

<script>
    import "../../assets/js/jquery.min";
    // import "../../assets/js/zan";
    export default {
        name: "IndexCenter"
    }
</script>

<style scoped>
  @import "../../assets/css/boxfox.css";
</style>
