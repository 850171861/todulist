import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import _ from 'lodash'
VueRouter.prototype.openPage = function (link, query) {
  this.push({
    path: link,
    query: _.assignIn({
    }, query || {})
  })
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "Done" */ '../views/Add.vue')
  },
  {
    path: '/Done',
    name: 'Done',
    component: () => import(/* webpackChunkName: "Done" */ '../views/Done.vue')
  },
  {
    path: '/Edit/:id',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "Done" */ '../views/Edit.vue')
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes
})

export default router
