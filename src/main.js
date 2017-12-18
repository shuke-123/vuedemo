import Vue from 'vue'
import App from './App.vue'
import VRouter from 'vue-router'
import apple from './Component/apple.vue'
import banana from './Component/banana.vue'
import Vuex from 'vuex'

Vue.use(VRouter);
Vue.use(Vuex);

let store= new Vuex.Store({
    author: 'shuke'
})
let router=new VRouter({
    mode: 'history',
    routes:[
        {
            path:'Component/apple'
            ,component:apple
        },
        {
            path:'Component/banana',
            component:banana
        }
    ]
});

new Vue({
    store,
   router,
    el: '#app',
  render: h => h(App)
})

