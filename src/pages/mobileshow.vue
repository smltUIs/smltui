<template>
  <div class="bigBox">
    <div class="hideBox"></div>
    <div class="bodyContent" :key="i" v-for="(color,i) in backGround" v-show="i==num" :class="color">
      <div class="IndexHeader showheader">
        <!--<my-address></my-address>-->
        <div class="IndexHeader-left">
          <a href="#"><img class="index-logo" src="../../static/image/logo.png"></a>
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
        <div class="contentBottom">
            <div class="topTitle">
              <ul class="titleNav">
                <li class="navLis" :key="n" v-for="(items,n) in nav"><a href="">{{items}}</a></li>
              </ul>
            </div>
            <div class="mobileShow">
              <ul class="show_1">
                <li class="showLis" :key="index" v-for="(lis,index) in mobileInfo" @mouseover="down(index)" @mouseout="down(index)":class="{active:index==id}">
                  <img class="listimgmod" :src="lis.imgUrl" alt="">
                  <a href=""><span>{{lis.mobileName}}</span></a>
                  <p>{{lis.mobileTitle}}</p>
                  <div class="hideSection"></div>
                </li>
              </ul>
              <!--<div class="swiper-container">-->
                <!--<div class="swiper-wrapper">-->
                  <!--<div class="swiper-slide" :key="index" v-for="(lis,index) in mobileInfo" @mouseover="down(index)" @mouseout="down(index)":class="{active:index==id}">1</div>-->
                  <!--<div class="swiper-slide">2</div>-->
                <!--</div>-->
              <!--</div>-->
        </div>
    </div>
  </div>
  </div>
</template>
<script>
    // import $ from "jquery"
    import Swiper from "../../node_modules/swiper/dist/js/swiper"
    import SwiperCss from "../../node_modules/swiper/dist/css/swiper.css"
    import IndexHeader from "../components/index/IndexHeader";
    export default {
        name: "ShowProject",
        components:{IndexHeader, SwiperCss},
        data(){
          return {
            mobileInfo:[
              {
                imgUrl:"../../static/image/padd01.jpg",
                mobileName:"Github展示",
                mobileTitle:"Vue 项目"
              },
              {
                imgUrl:"../../static/image/padd02.jpg",
                mobileName:"Github展示",
                mobileTitle:"Vue 项目"
              },
              {
                imgUrl:"../../static/image/ymx01.jpg",
                mobileName:"Github展示",
                mobileTitle:"Vue 项目"
              },
              {
                imgUrl:"../../static/image/jgo.jpg",
                mobileName:"Github展示",
                mobileTitle:"Vue 项目"
              },
              {
                imgUrl:"../../static/image/azsz01.jpg",
                mobileName:"Github展示",
                mobileTitle:"Vue 项目"
              },
              {
                imgUrl:"../../static/image/azsz02.jpg",
                mobileName:"Github展示",
                mobileTitle:"Vue 项目"
              },
              {
                imgUrl:"../../static/image/xpz01.png",
                mobileName:"Github展示",
                mobileTitle:"Vue 项目"
              },
              {
                imgUrl:"../../static/image/xpz02.png",
                mobileName:"Github展示",
                mobileTitle:"Vue 项目"
              }

            ],
            nav:["移动端","PC端"],
            backGround:["bg1","bg2","bg3","bg4","bg5","bg6","bg7","bg8"],
            num:"",
            id:""
          }
        },
        methods:{
       down(i){
         this.num=i;
       },
       show(){
         // this.id=n;
       }
     },
        updated : function(){
        var mySwiper = new Swiper('.swiper-container',{
          direction: 'horizontal', // 垂直切换选项
          autoplay:true, // 循环模式选项
          speed:300,
          effect : 'coverflow',
          slidesPerView: 3,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows : true
          },
        })
      }
    }
</script>
<style scoped>
.showheader{
  background: none;
}
.bodyContent{
  width:100%;
  height:auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  background: #C9D6FF;
  background: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF);
  background: linear-gradient(to right, #E2E2E2, #C9D6FF);
}
.hideBox{
  width:100%;
  height:100%;
  position:fixed;
  left:0;
  top:0;
  background-color:#000;
  opacity:.4;
  z-index:100;
  display:none;
}
.lunbo{
  width:500px;
  height:700px;
  background-color:red;
  position:fixed;
  top:50%;
  left:50%;
  z-index:200;
  display:none;
  margin-left:-250px;
  margin-top:-350px;
  overflow:auto;
}
.lunbo img{
  display:block;
  width:500px;
}
.bodyContent h3{
  width: 100%;
  font-size: 28px;
  color: #fff;
  line-height: 100px;
  margin-left: 100px;
}
.contentBottom{
    width:100%;
  }
.titleNav{
  display:flex;
  justify-content: center;
  margin-top: 28px;
  margin-bottom: 20px;
}
.titleNav li{
    width:150px;
    height:60px;
    text-align:center;
    border-radius:5px;
  background: #ADA996;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-size:18px;
    color:#282525;
    line-height:60px;
}
.navLis a{
  color:#ceaaaa;
}
.bg1{
  background: #3D7EAA;
  background: -webkit-linear-gradient(to right, #FFE47A, #3D7EAA);
  background: linear-gradient(to right, #FFE47A, #3D7EAA);
}
.bg2{
  background: #F3904F;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #3B4371, #F3904F);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #3B4371, #F3904F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.bg3{
  background: #334d50;
  background: -webkit-linear-gradient(to right, #cbcaa5, #334d50);
  background: linear-gradient(to right, #cbcaa5, #334d50);
}
.bg4{
  background: #403B4A;
  background: -webkit-linear-gradient(to right, #E7E9BB, #403B4A);
  background: linear-gradient(to right, #E7E9BB, #403B4A);
}
.bg5{
  background: #DAE2F8;
  background: -webkit-linear-gradient(to right, #D6A4A4, #DAE2F8);
  background: linear-gradient(to right, #D6A4A4, #DAE2F8);
}
.bg6{
  background: #DAD299;
  background: -webkit-linear-gradient(to right, #B0DAB9, #DAD299);
  background: linear-gradient(to right, #B0DAB9, #DAD299);
}
.titleNav li:nth-of-type(1){
  margin-right:6px;
}
.titleNav li:nth-of-type(2){
  margin-left:6px;
}
.topTitle{
  width:100%;
  height:40px;
  margin:0 auto;
}
.mobileShow{
  margin-top:10px;
}
.show_1{
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;
}
.show_1 li{
  margin-top:40px;
  margin-bottom: 40px;
  width: 22%;
  height:550px;
  border:2px solid gray;
  border-radius:20px;
  position:relative;
  overflow:auto;
  overflow-y:hidden;
  /*background:url("/static/img/phone.jpg") no-repeat center center;*/
}
::-webkit-scrollbar {
  display: none;
}
.showLis img{
    width:100%;
    height:600px;
    border-radius:20px;
    position:absolute;
    left:0px;
    top:0px;
  }
.showLis span{
    width:100%;
    display:block;
    height:50px;
    line-height:50px;
    text-align:center;
    position:absolute;
    font-size:24px;
    color:#101010;
    top:280px;
    left:0px;
    display:none;
    background-color:pink;}
.showLis p{
  width:100%;
  height:50px;
  text-align:center;
  line-height:50px;
  display:none;
  background-color:orange;
  font-size:16px;
  color:#fff;
  position:absolute;
  bottom:0px;
}
.hideSection{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:700px;
  background-color:gray;
  opacity:.4;
  display:none;
}

.showLis:hover .hideSection{
  /*display:block;*/

}
.showLis:hover span{
  display:block;
  color:#fd9426;
  -webkit-animation: smallToBig 300ms ease;
  -moz-animation: smallToBig 300ms ease;
  -ms-animation: smallToBig 300ms ease;
}
  .showLis:hover p{
    display:block;
    -webkit-animation: smallToBig 300ms ease;
    -moz-animation: smallToBig 300ms ease;
    -ms-animation: smallToBig 300ms ease;
    -webkit-animation: moveFromBottom 500ms ease;
    -moz-animation: moveFromBottom 500ms ease;
    -ms-animation: moveFromBottom 500ms ease;
  }
@-webkit-keyframes smallToBig{
  from {
    -webkit-transform: scale(0.1);
  }
  to {
    -webkit-transform: scale(1);
  }
}
@-moz-keyframes smallToBig{
  from {
    -moz-transform: scale(0.1);
  }
  to {
    -moz-transform: scale(1);
  }
}
@-ms-keyframes smallToBig{
  from {
    -ms-transform: scale(0.1);
  }
  to {
    -ms-transform: scale(1);
  }
}

@-webkit-keyframes moveFromBottom {
  from {
    -webkit-transform: translateY(100%);
  }
  to {
    -webkit-transform: translateY(0%);
  }
}
@-moz-keyframes moveFromBottom {
  from {
    -moz-transform: translateY(100%);
  }
  to {
    -moz-transform: translateY(0%);
  }
}
@-ms-keyframes moveFromBottom {
  from {
    -ms-transform: translateY(100%);
  }
  to {
    -ms-transform: translateY(0%);
  }
}



</style>
