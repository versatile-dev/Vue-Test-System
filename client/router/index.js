import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Test from '../views/Test.vue'
import Report from '../views/Report.vue'
import Help from '../views/Help.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/report',
      component: Report
    },
    {
      path: '/help',
      component: Help
    }
  ]
})
