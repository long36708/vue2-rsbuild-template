<script>
import MenuItem from './MenuItem.vue'

export default {
  name: 'MainLayout',
  components: { MenuItem },
  data() {
    return {
      isCollapse: false,
    }
  },
  computed: {
    // 从路由配置自动生成菜单树（取 '/' 下的 children）
    menuList() {
      const rootRoute = this.$router.options.routes.find(r => r.path === '/')
      const children = (rootRoute && rootRoute.children) || []
      return this.buildMenu(children, rootRoute.path)
    },
    // 当前高亮的菜单项
    activeMenu() {
      return this.$route.meta.activeMenu || this.$route.path
    },
    // 面包屑
    breadcrumbs() {
      return this.$route.matched
        .filter(r => r.meta && r.meta.title)
        .map(r => r.meta.title)
    },
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    /**
     * 递归构建菜单数据，解析出完整路径并过滤隐藏项
     * @param {Array} routes 路由数组
     * @param {String} basePath 父级路径
     */
    buildMenu(routes, basePath) {
      return routes
        .filter(route => route.meta && route.meta.title && !route.meta.hidden)
        .map((route) => {
          const fullPath = this.resolvePath(basePath, route.path)
          const menu = {
            path: fullPath,
            title: route.meta.title,
            icon: route.meta.icon,
          }
          if (route.children && route.children.length) {
            menu.children = this.buildMenu(route.children, fullPath)
          }
          return menu
        })
    },
    // 拼接父子路径，处理斜杠
    resolvePath(basePath, path) {
      const joined = `${basePath}/${path}`.replace(/\/+/g, '/')
      return joined.length > 1 ? joined.replace(/\/$/, '') : joined
    },
  },
}
</script>

<template>
  <el-container class="main-layout">
    <!-- 左侧菜单 -->
    <el-aside :width="isCollapse ? '64px' : '220px'" class="layout-aside">
      <div class="logo" @click="toggleCollapse">
        <i :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
        <span v-show="!isCollapse" class="logo-text">管理系统</span>
      </div>
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :collapse-transition="false"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409eff"
        router
        class="layout-menu"
      >
        <MenuItem
          v-for="item in menuList"
          :key="item.path"
          :menu="item"
        />
      </el-menu>
    </el-aside>

    <!-- 右侧内容区 -->
    <el-container>
      <el-header class="layout-header">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="(crumb, index) in breadcrumbs"
            :key="index"
          >
            {{ crumb }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main class="layout-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.main-layout {
  height: 100vh;
}

.layout-aside {
  background-color: #304156;
  transition: width 0.28s;
  overflow: hidden;
}

.logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  background-color: #2b3648;
}

.logo i {
  font-size: 22px;
}

.logo-text {
  margin-left: 10px;
  white-space: nowrap;
}

.layout-menu {
  border-right: none;
}

/* 折叠时菜单宽度跟随 aside */
.layout-menu:not(.el-menu--collapse) {
  width: 100%;
}

.layout-header {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.layout-main {
  background-color: #f0f2f5;
  padding: 20px;
}
</style>
