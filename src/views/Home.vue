<template>
  <div class="home-page">
    <h1>首页</h1>
    <p>这是首页内容</p>

    <div class="navigation-demo">
      <h3>页面跳转演示</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {}
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
