/*
 * @Description:
 * @Author: zhaocheng.zhai
 * @Date: 2021-02-21 17:21:01
 * @LastEditTime: 2021-04-07 19:44:07
 * @LastEditors: zhaocheng.zhai
 */
import { RouteRecordRaw } from 'vue-router'

export const constantRouterMap: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/layouts/index.vue'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "tabbar" */ '@/views/tabBar/home/index.vue'),
        meta: { title: '首页', keepAlive: false, showTab: true }
      },
      {
        path: '/demo',
        name: 'Dome',
        component: () => import(/* webpackChunkName: "tabbar" */ '@/views/tabBar/dome/index.vue'),
        meta: { title: '案例', keepAlive: false, showTab: true }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "tabbar" */ '@/views/tabBar/about/index.vue'),
        meta: { title: '关于我', keepAlive: false, showTab: true }
      }
    ]
  },
  {
    path: '/rem',
    name: 'Rem',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Rem.vue'),
    meta: { title: 'Rem', keepAlive: false, showTab: true }
  },
  {
    path: '/scssConfig',
    name: 'ScssConfig',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ScssConfig.vue'),
    meta: { title: 'ScssConfig', keepAlive: false, showTab: true }
  },
  {
    path: '/storage',
    name: 'Storage',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Storage/index.vue'),
    meta: { title: 'Storage使用', keepAlive: false, showTab: true }
  }
]
