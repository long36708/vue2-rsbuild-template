import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

Vue.use(VueRouter)

/**
 * 路由配置说明（后续新增页面只需在此处添加）：
 * 1. 在 MainLayout 的 children 中新增一条路由即可，侧边栏菜单会自动生成。
 * 2. meta 字段用于控制菜单展示：
 *    - title:   菜单显示的文字（必填，缺省则不在菜单中展示）
 *    - icon:    菜单图标（可选，使用 Element UI 图标类名，如 'el-icon-s-home'）
 *    - hidden:  设为 true 则不在菜单中显示该页面（可选）
 * 3. 需要多级菜单时，给某个路由再添加 children 即可（支持无限级）。
 */
const routes = [
  {
    path: '/',
    component: MainLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: { title: '首页', icon: 'el-icon-s-home' },
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta: { title: '关于', icon: 'el-icon-info' },
      },
      // ===== 多级菜单示例（如不需要可删除）=====
      // {
      //   path: 'system',
      //   meta: { title: '系统管理', icon: 'el-icon-setting' },
      //   children: [
      //     {
      //       path: 'user',
      //       name: 'SystemUser',
      //       component: () => import('../views/system/User.vue'),
      //       meta: { title: '用户管理' },
      //     },
      //   ],
      // },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
