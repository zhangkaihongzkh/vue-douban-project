<template>
  <div id="app">
    <!--导航栏头部 -->
    <Nav></Nav>
    <Content></Content>
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
