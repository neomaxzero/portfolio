import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import configRouter from './route-config'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

// configure router
configRouter.configRouter(router)

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

router.start(App, 'body')

// just for debugging
window.router = router
