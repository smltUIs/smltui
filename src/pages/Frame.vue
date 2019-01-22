<template>
    <div class="frame">
        <frame-header></frame-header>
        <div class="frameCenter">
          <frame-aside></frame-aside>
          <div id="mainView">
            <router-view ></router-view>
          </div>
        </div>
    </div>
</template>

<script>
    import iconfont from "../assets/css/iconfont.css";
    import Frame from "../assets/css/Frame.css";
    import FrameHeader from "../components/Frame/FrameHeader";
    import FrameAside from "../components/Frame/FrameAside";
    import FrameApp from "../components/Frame/FrameApp";
    export default {
        name: "Frame",
      components: {FrameApp, FrameAside, FrameHeader,iconfont}
    }
</script>

<style scoped>

</style>
