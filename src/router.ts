/*
 * @Author: @yzcheng
 * @Date: 2020-04-22 15:20:36
 * @Version: 1.0
 * @LastEditors: @yzcheng
 * @Description:
 * @LastEditTime: 2020-04-26 15:05:38
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(Router)

/*
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    hidden: true                 if true, this route will not show in the sidebar (default is false)
  }
*/

export default new Router({
  // mode: 'history',  // Enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
      meta: { title: '登陆', hidden: true }
    },
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/error/404.vue'),
      meta: { hidden: true }
    },
    {
      path: '/401',
      component: () => import(/* webpackChunkName: "404" */ '@/views/error/401.vue'),
      meta: { hidden: true }
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
          meta: {
            title: '首页',
            icon: 'dashboard'
          }
        }
      ]
    },
    {
      path: '/system',
      meta: {
        title: '系统管理',
        icon: 'system',
        hidden: false
      },
      component: Layout,
      children: [
        {
          path: 'user',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/system/user/index.vue'),
          meta: { title: '用户管理',
            icon: 'user' }
        },
        {
          path: 'role',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/system/role/index.vue'),
          meta: {
            title: '角色管理',
            icon: 'peoples'
          }
        },
        {
          path: 'menu',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/system/menu/index.vue'),
          meta: {
            title: '菜单管理',
            icon: 'list'
          }
        },
        {
          path: 'dept',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/system/dept/index.vue'),
          meta: {
            title: '部门管理',
            icon: 'tree'
          }
        },
        {
          path: 'post',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/system/post/index.vue'),
          meta: {
            title: '岗位管理',
            icon: 'nested'
          }
        },
        {
          path: 'dict',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/system/dict/index.vue'),
          meta: {
            title: '字典管理',
            icon: 'documentation'
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/404',
      meta: { hidden: true }
    }
  ]
})
