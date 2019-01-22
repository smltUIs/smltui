<template>
  <!--侧边栏-->
  <div class="box">
    <aside class="g-aside">
      <ul class="aside-memu1">
        <li class="aside-menu-list1"><a href="javascript:;">
          <p>开发指南</p>
          <sapn class="translate"></sapn>
          </a>
          <ul class="hide-menu1 hide1">
            <li class="active"><router-link to="/Frame">介绍</router-link></li>
            <li><router-link to="/Frame/QuickStart">快速上手</router-link></li>
            <li><router-link to="/Frame/StyleGuide">风格指南</router-link></li>
            <li><router-link to="/Frame/demoPage">示例</router-link></li>
          </ul>
        </li>
      </ul>
      <ul class="aside-memu">
        <li class="aside-menu-list" :key="index" v-for="(list,index) in menuList">
          <a href="javascript:;">
            <p>{{list.menuName}}</p>
            <span class="translate"></span>
          </a>
          <!--下拉菜单1-->
          <ul class="hide-menu hide1">
            <li  v-bind:class="{active:index == isActive}" @click="checkItem(lis,index)" :key="index" v-for="(lis,index) in list.hideMenu">
              <a href="#">{{lis.hideTitle}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
    import  $ from 'jquery';
    export default {
        name: "FrameAside",
        data(){
          return{
            "menuList":[
              {
                "menuName":"业务组件",
                "hideMenu":[
                  {
                    "hideTitle":"头部滑动效果",
                    "route":"/Frame/WebIndexHeader"
                  },
                  {
                    "hideTitle":"侧边栏",
                    "route":"/Frame/AsideMenu"
                  },
                  {
                    "hideTitle":"收货地址",
                    "route":"/Frame/MyAddress"
                  },
                  {
                    "hideTitle":"pop弹出框",
                    "route":"/Frame/PopBubble"
                  },
                  {
                    "hideTitle":"弹出框输入地址",
                    "route":"/Frame/EnterAddress"
                  },
                  {
                    "hideTitle":"留言评论",
                    "route":"/Frame/MessageBoard"
                  },
                  {
                    "hideTitle":"回到顶部",
                    "route":"/Frame/GoBackToTop"
                  },
                  {
                    "hideTitle":"Tab选择卡切换",
                    "route":"/Frame/SwitchTab"
                  },
                  {
                    "hideTitle":"升序和降序",
                    "route":"/Frame/LifeTheSorting"
                  },
                  {
                    "hideTitle":"横向滚动菜单栏",
                    "route":"/Frame/HorizontalRolling"
                  },
                  {
                    "hideTitle":"菜单列表",
                    "route":"/Frame/MenuList"
                  },
                  {
                    "hideTitle":"购物车组件",
                    "route":"/Frame/SmlShopCart"
                  },
                  {
                    "hideTitle":"倒计时",
                    "route":"/Frame/CountDown"
                  },
                  {
                    "hideTitle":"rate星星评分",
                    "route":"/Frame/StarRating"
                  }
                ]
              },
              {
                "menuName":"轮播图组件",
                "hideMenu":[
                  {
                    "hideTitle":"横向滑动",
                    "route":"/Frame/SwiperRow"
                  },
                  {
                    "hideTitle":"3D波浪动画",
                    "route":"/Frame/ThreeDSwiper"
                  },
                  {
                    "hideTitle":"3D旋转轮播图",
                    "route":"/Frame/VerticalSwiper"
                  }
                  ]
              },
              {
                "menuName":"基础组件",
                "hideMenu":[
                  {
                    "hideTitle":"Button 按钮",
                    "route":"/Frame/Button"
                  },
                  {
                    "hideTitle":"ResizeTab 可收缩表格",
                    "route":"/Frame/ResizeTab"
                  },
                  {
                    "hideTitle":"EditableTab 可编辑表格",
                    "route":"/Frame/EditableTab"
                  },
                  {
                    "hideTitle":"Tab 选项卡",
                    "route":"/Frame/Tabs"
                  },
                  {
                    "hideTitle":"Table 动态表格",
                    "route":"/Frame/Table"
                  },
                  {
                    "hideTitle":"Test 拖动验证",
                    "route":"/Frame/Test"
                  }
                ]
              },
              {
                "menuName":"表单组件",
                "hideMenu":[
                  {
                    "hideTitle":"Checkbox 复选框",
                    "route":"/Frame/Checkbox"
                  },
                  {
                    "hideTitle":"Radio 单选框",
                    "route":"/Frame/Radio"
                  },
                  {
                    "hideTitle":"Time 时间表",
                    "route":"/Frame/Time"
                  },
                  {
                    "hideTitle":"Picker 选择器",
                    "route":"/Frame/Icon"
                  },
                  {
                    "hideTitle":"Search 下拉框搜索",
                    "route":"/Frame/Search"
                  },
                  {
                    "hideTitle":"Switch 开关",
                    "route":"/Frame/Switch "
                  },
                  {
                    "hideTitle":"SwitchCell 开关单元格",
                    "route":"/Frame/SwitchCell"
                  },
                  {
                    "hideTitle":"Stepper 步进器",
                    "route":"/Frame/Stepper"
                  }
                ]
              },
              {
                "menuName":"反馈组件",
                "hideMenu":[
                  {
                    "hideTitle":"ActionSheet 上拉菜单",
                    "route":"/Frame/ActionSheet"
                  },
                  {
                    "hideTitle":"Dialog 弹出框",
                    "route":"/Frame/Dialog"
                  },
                  {
                    "hideTitle":"Loading 加载",
                    "route":"/Frame/Loading"
                  },
                  {
                    "hideTitle":"Notify 消息通知",
                    "route":"/Frame/Icon"
                  },
                  {
                    "hideTitle":"PullRefresh 下拉刷新",
                    "route":"/Frame/PullRefresh"
                  }
                ]
              }
            ],
            isActive:0
          }
        },
        methods:{
          checkItem(value,index){
            this.isActive = index;
            this.$router.push({
              path:value.route
            })
          },
          go(){
            this.$route.push({path:'//Frame/Introduce'})
          }
        },
        mounted(){
        //侧边栏下拉
        $(".aside-menu-list").each(function (i) {
          var n = true;
          $(this).children("a").click(function () {
            console.log(i);
            $(this).next(".hide-menu").slideToggle(500);

            // console.log($(this).next(".hide-menu").children());
            if (n) {
              $(this).children(".translate").css({
                "transform": "rotate(90deg)"

              });
              n = !n;
            } else {
              $(this).children(".translate").css({
                "transform": "rotate(0deg)"
              });
              n = !n;
            }

          })
        })
      }
    }
</script>

<style scoped>
  @import "../../assets/css/Frame.css";
  .box{
    width: 100%;
  }
  .hide-menu li.active{
    background-color: rgba(252,145,83,.2);
    color: #fc9153;
    border-right: 3px solid #fc9153;
    z-index: 1000;
  }

</style>
