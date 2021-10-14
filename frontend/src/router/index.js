import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
import apps from './routes/apps'
import dashboard from './routes/dashboard'
import uiElements from './routes/ui-elements/index'
import pages from './routes/pages'
import chartsMaps from './routes/charts-maps'
import formsTable from './routes/forms-tables'
import others from './routes/others'
import docsRoutes from './routes/docs-routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    // { path: '/', redirect: { name: 'dashboard-ecommerce' } },
    { path: '/', redirect: { name: 'docs' } },
    ...docsRoutes,
    // ...apps,
    // ...dashboard,
    // ...pages,
    // ...chartsMaps,
    // ...formsTable,
    // ...uiElements,
    // ...others,
    { path: '*', redirect: 'error-404', },
  ],
})

router.beforeEach((to, _, next) => {
  //   console.log("beforeEach")
  //
  // const isLoggedIn = isUserLoggedIn()
  //
  // if (!canNavigate(to)) {
  //     console.log("!canNavigate") ///t
  //   // Redirect to login if not logged in
  //     if (isLoggedIn) {console.log("isLoggedIn = true") } else console.log("isLoggedIn = false")///t
  //
  //   if (!isLoggedIn) return next({ name: 'auth-login' })
  //
  //   // If logged in => not authorized
  //   return next({ name: 'misc-not-authorized' })
  // }
  //
  // // Redirect if logged in
  // if (to.meta.redirectIfLoggedIn && isLoggedIn) {
  //     console.log("to.meta.redirectIfLoggedIn && isLoggedIn")///t
  //   const userData = getUserData()
  //   next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  // }
  //
  // console.log("return next()")///t

  return next()
  //   const userData = getUserData() ///t
  //   console.log(userData)
  //   //next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  //   return next('/')
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
    console.log("afterEach")

  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
