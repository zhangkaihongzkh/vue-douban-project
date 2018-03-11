<template>
  <div id="app">
    <!--导航栏头部 -->

      <el-container>
        <el-header>
          <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"

          background-color="#409EFF"
          text-color="#fff"
          active-text-color="#ffd04b">

             <el-menu-item index="1"><router-link to="/Hot/1">正在热映</router-link></el-menu-item>
             <el-menu-item index="2"><router-link to="/Soon/1">即将上映</router-link></el-menu-item>
             <el-menu-item index="3"><router-link to="/TOP250/1" >TOP250</router-link></el-menu-item>
             <el-menu-item ><el-form ref="form"  label-width="80px"><el-input
            placeholder="Search..."
            prefix-icon="el-icon-search"
            >
          </el-input></el-form></el-menu-item>
          </el-menu>
        </el-header>

        <el-container>
          <el-aside width="200px">
              <SideBar></SideBar>
          </el-aside>

          <el-main>
            <!-- 展示内容区域 -->


            <router-view></router-view>

          </el-main>
        </el-container>
      </el-container>

  </div>
</template>


<script>
//导入模块

import Nav from './components/Nav.vue'

import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods:{

  },
  components:{


    Nav,
    SideBar
  }
}
</script>


<style scoped>
.el-header li {float: right;}




</style>






<style>
  body {
  font-family: "Helvetica Neue", Helvetica, Microsoft Yahei, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
  font-size: 14px;
  overflow-x: hidden;
}
body,
ul,
ol,
li,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
table,
td,
img,
div,
dl,
dt,
dd,
input {
  margin: 0;
  padding: 0;
  border: 0;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>

<style scoped>

  .el-header{
    padding: 0;
  }
</style>
