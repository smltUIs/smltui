<template>
  <div class="box">
    <index-header></index-header>
    <index-center></index-center>
    <index-mobile></index-mobile>
    <index-footer></index-footer>
  </div>
</template>

<script>
  import indexStyle from "../assets/css/Index.css";
  import iconfont from "../assets/css/iconfont.css";
  import IndexHeader from "../components/index/IndexHeader";
  import IndexCenter from "../components/index/IndexCenter";
  import IndexFooter from "../components/index/IndexFooter";
  import IndexMobile from "../components/index/IndexMobile";
    export default {
        name: "Index",
      components: {IndexMobile, IndexFooter, IndexCenter, IndexHeader,indexStyle,iconfont}
    }
</script>

<style scoped>

</style>
