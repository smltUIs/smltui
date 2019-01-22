<template>
    <div class="IndexHeader">
      <!--<my-address></my-address>-->
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
    </div>
</template>

<script>
    export default {
        name: "IndexHeader"
    }
</script>

<style scoped>

</style>
