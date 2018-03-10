<template>
  <div id="app">
    <!--导航栏头部 -->
      <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#409EFF"
    text-color="#fff"
    active-text-color="#ffd04b">
      <el-menu-item index="1" :class="isActive"><router-link to="/Hot">正在热映</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/Soon">即将上映</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/TOP250" >TOP250</router-link></el-menu-item>
      <el-menu-item :class="right"><el-form ref="form" :model="form" label-width="80px"><el-input
      placeholder="Search..."
      prefix-icon="el-icon-search"
      v-model="input21">
    </el-input></el-form></el-menu-item>

    </el-menu>
    <div>
      <!--展示路由内容区域-->
        <router-view></router-view>
    </div>
    <Footer></Footer>



  </div>
</template>

<script>
//导入模块
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'
import Content from './components/Content.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Home,
    Footer,
    Content,
    Nav
  }
}
</script>

<!-- 默认样式
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
-->
