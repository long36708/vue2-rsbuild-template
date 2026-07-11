<script>
export default {
  name: 'AboutPage',
}
</script>

<template>
  <div class="about-page">
    <el-card>
      <h1>关于</h1>
      <p>这是一个示例页面，用于演示左侧菜单 + 右侧内容的通用布局模板。</p>
      <p>新增页面步骤：</p>
      <ol>
        <li>在 <code>src/views/</code> 下新建一个 <code>.vue</code> 页面组件。</li>
        <li>在 <code>src/router/index.js</code> 的 children 中加一条路由，并配置 meta.title / meta.icon。</li>
        <li>左侧菜单会自动出现该项，点击即可访问，无需改动布局代码。</li>
      </ol>
    </el-card>
  </div>
</template>

<style scoped>
.about-page {
  text-align: left;
}
</style>
