<template>
  <div class="Frame-header">
    <div class="Frame-header-left">
      <a href="#"><img src="../../../static/image/logo3.png"></a>
      <span>V1.0.1</span>
    </div>
    <div class="Frame-header-right">
      <ul>
        <li :class="{active:index == isActive}" @click="changeColor(list,index)" :key="index" v-for="(list,index) in headList">
          <span>{{list.title}}</span>
        </li>
        <li>
          <span class="iconfont icon-github frameHeaderIcon"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FrameHeader",
        data(){
          return{
            headList:[
              {
                "title":"首页",
                "router":"/Frame"
              },
              {
                "title":"组件",
                "router":"/Frame"
              },
              {
                "title":"移动端展示",
                "router":"/Frame"
              },
              {
                "title":"大数据展示",
                "router":"/"
              }
            ],
            isActive:0
          }
        },
        methods:{
          changeColor(value,index){
            this.isActive = index;
            this.$router.push({
              path:value.router
            })
          }
        }
    }
</script>

<style scoped>

</style>
