<script>
// 递归菜单组件，支持无限级菜单
export default {
  name: 'MenuItem',
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <!-- 有子菜单：渲染 submenu 并递归 -->
  <el-submenu v-if="menu.children && menu.children.length" :index="menu.path">
    <template slot="title">
      <i v-if="menu.icon" :class="menu.icon"></i>
      <span>{{ menu.title }}</span>
    </template>
    <menu-item
      v-for="child in menu.children"
      :key="child.path"
      :menu="child"
    />
  </el-submenu>

  <!-- 无子菜单：渲染可点击的菜单项，index 即路由路径（配合 el-menu 的 router 模式跳转） -->
  <el-menu-item v-else :index="menu.path">
    <i v-if="menu.icon" :class="menu.icon"></i>
    <span slot="title">{{ menu.title }}</span>
  </el-menu-item>
</template>
