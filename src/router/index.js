import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Frame from '../pages/Frame'
import Introduce from '../pages/FrameChild/Introduce'
import QuickStart from '../pages/FrameChild/QuickStart'
import StyleGuide from '../pages/FrameChild/StyleGuide'
import WebIndexHeader from '../pages/FrameChild/WebIndexHeader'
import Search from '../pages/FrameChild/Search'
import Test from '../pages/FrameChild/Test'
import Table from '../pages/FrameChild/Table'
import mobileshow from '../pages/mobileshow'
import exhibitions from '../pages/exhibitions'


import SmlShopCart from '../pages/FrameChild/SmlShopCart'
import MenuList from '../pages/FrameChild/MenuList'
import HorizontalRolling from '../pages/FrameChild/HorizontalRolling'
import PopBubble from '../pages/FrameChild/PopBubble'
import ResizeTab from '../pages/FrameChild/ResizeTab'
import EditableTab from '../pages/FrameChild/EditableTab'
import SwitchTab from '../pages/FrameChild/SwitchTab'
import AsideMenu from '../pages/FrameChild/AsideMenu'

import DemoPage from '../pages/FrameChild/DemoPage'
import MessageBoard from '../pages/FrameChild/MessageBoard'
import SwiperRow from '../pages/FrameChild/SwiperRow'
import ThreeDSwiper from '../pages/FrameChild/ThreeDSwiper'
import VerticalSwiper from '../pages/FrameChild/VerticalSwiper'

import GoBackToTop from '../pages/FrameChild/gobacktotop'
import LifeTheSorting from '../pages/FrameChild/LifeTheSorting'
import CountDown from '../pages/FrameChild/CountDown'
import MyAddress from '../pages/FrameChild/MyAddress'
import EnterAddress from '../pages/FrameChild/EnterAddress'
import StarRating from '../pages/FrameChild/StarRating'



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/mobileshow',
      name: 'mobileshow',
      component: mobileshow
    },{
      path: '/exhibitions',
      name: 'exhibitions',
      component: exhibitions
    },
    {
      path: '/Frame',
      name: 'Frame',
      component: Frame,
      children:[
        {
          path:"",   //添加空的子路由，浏览器默认渲染该页面
          name:"Introduce",
          component:Introduce
        },
        {
          path:"QuickStart",
          name:"QuickStart",
          component:QuickStart
        },
        {
          path:"StyleGuide",
          name:"StyleGuide",
          component:StyleGuide
        },
        {
          path:"WebIndexHeader",
          name:"WebIndexHeader",
          component:WebIndexHeader
        },
        {
          path:"Search",
          name:"Search",
          component:Search
        },
        {
          path:"Test",
          name:"Test",
          component:Test
        },
        {
          path:"Table",
          name:"Table",
          component:Table
        },


        {
          path:"SmlShopCart",
          name:"SmlShopCart",
          component:SmlShopCart
        },
        {
          path:"MenuList",
          name:"MenuList",
          component:MenuList
        },
        {
          path:"HorizontalRolling",
          name:"HorizontalRolling",
          component:HorizontalRolling
        },
        {
          path:"PopBubble",
          name:"PopBubble",
          component:PopBubble
        },
        {
          path:"ResizeTab",
          name:"ResizeTab",
          component:ResizeTab
        },
        {
          path:"EditableTab",
          name:"EditableTab",
          component:EditableTab
        },
        {
          path:"SwitchTab",
          name:"SwitchTab",
          component:SwitchTab
        },
        {
          path:"AsideMenu",
          name:"AsideMenu",
          component:AsideMenu
        },

        {
          path:"MessageBoard",
          name:"MessageBoard",
          component:MessageBoard
        },
        {
          path:"SwiperRow",
          name:"SwiperRow",
          component:SwiperRow
        },
        {
          path:"ThreeDSwiper",
          name:"ThreeDSwiper",
          component:ThreeDSwiper
        },
        {
          path:"DemoPage",
          name:"DemoPage",
          component:DemoPage
        },
        {
          path:"VerticalSwiper",
          name:"VerticalSwiper",
          component:VerticalSwiper
        },


        {
          path:"gobacktotop",
          name:"gobacktotop",
          component:GoBackToTop
        },
        {
          path:"LifeTheSorting",
          name:"LifeTheSorting",
          component:LifeTheSorting
        },
        {
          path:"CountDown",
          name:"CountDown",
          component:CountDown
        },
        {
          path:"MyAddress",
          name:"MyAddress",
          component:MyAddress
        },
        {
          path:"EnterAddress",
          name:"EnterAddress",
          component:EnterAddress
        },
        {
          path:"StarRating",
          name:"StarRating",
          component:StarRating
        }

      ]
    }
  ],
  mode: 'history'
})
