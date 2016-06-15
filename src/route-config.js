module.exports = {
  configRouter: function (router) {
    // normal routes
    router.map({
      // basic example
      '/about': {
        // the component can also be a plain string component id,
        // but a component with that id must be available in the
        // App component's scope.
        component: require('./pages/About.vue')
      },
      '/contact': {
        // the component can also be a plain string component id,
        // but a component with that id must be available in the
        // App component's scope.
        component: require('./pages/Contact.vue')
      },

      '/': {
        // the component can also be a plain string component id,
        // but a component with that id must be available in the
        // App component's scope.
        component: require('./pages/Home.vue')
      },
      // not found handler
      '*': {
        component: require('./pages/not-found.vue')
      }
    })

    // redirect
    router.redirect({
      '/info': '/about'
    })

    // global before
    // 3 options:
    // 1. return a boolean
    // 2. return a Promise that resolves to a boolean
    // 3. call transition.next() or transition.abort()
    router.beforeEach((transition) => {
      if (transition.to.path === '/forbidden') {
        router.app.authenticating = true
        setTimeout(() => {
          router.app.authenticating = false
          console.log('this route is forbidden by a global before hook')
          transition.abort()
        }, 3000)
      } else {
        transition.next()
      }
    })
  }

}
