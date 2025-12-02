<template>
  <div class="home-page">
    <h1>首页</h1>
    <p>这是首页内容</p>
    
    <div class="navigation-demo">
      <h3>页面跳转演示</h3>
      
      <div class="jump-section">
        <h4>1. 声明式导航 (router-link)</h4>
        <el-button type="primary" @click="$router.push('/about')">跳转到关于页面</el-button>
        <el-button type="success" @click="$router.push('/counter')">跳转到计数器</el-button>
        <el-button type="warning" @click="$router.push('/no-keep-alive')">跳转到无缓存页面</el-button>
      </div>
      
      <div class="jump-section">
        <h4>2. 编程式导航</h4>
        <el-button @click="goToAbout">方法跳转-关于</el-button>
        <el-button @click="goToCounter">方法跳转-计数器</el-button>
        <el-button @click="goBack">返回上一页</el-button>
      </div>
      
      <div class="jump-section">
        <h4>3. 带参数跳转</h4>
        <el-button type="info" @click="goToWithParams">带参数跳转</el-button>
        <el-button type="danger" @click="replaceRoute">替换当前路由</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
    goToCounter() {
      this.$router.push('/counter')
    },
    goBack() {
      this.$router.go(-1)
    },
    goToWithParams() {
      this.$router.push({
        path: '/about',
        query: { from: 'home', time: Date.now() }
      })
    },
    replaceRoute() {
      this.$router.replace('/about')
    }
  }
}
</script>

<style scoped>
.home-page {
  padding: 20px;
}

.navigation-demo {
  margin-top: 30px;
  text-align: left;
}

.jump-section {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
}

.jump-section h4 {
  margin-bottom: 10px;
  color: #409eff;
}

.el-button {
  margin: 5px;
}
</style>