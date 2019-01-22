// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import smltui from 'smltui'
import highlight from './assets/highlight/highlight'
import esriLoader from 'esri-loader'
import $ from "jquery"

Vue.use(smltui);
Vue.use(highlight);
Vue.use(esriLoader);
esriLoader.loadCss("https://js.arcgis.com/4.10/esri/css/main.css")
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render(h){
    return h(App)
  }
});
