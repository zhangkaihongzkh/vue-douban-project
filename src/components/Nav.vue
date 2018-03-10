<template>
  <div class="dNav">
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#409EFF"
  text-color="#fff"
  active-text-color="#ffd04b">
    <el-menu-item index="1" :class="isActive"><a href="">正在热映</a></el-menu-item>
    <el-menu-item index="2"><a href="">即将上映</a></el-menu-item>
    <el-menu-item index="3"><a href="" >TOP250</a></el-menu-item>
    <el-menu-item :class="right"><el-form ref="form" :model="form" label-width="80px"><el-input
    placeholder="Search..."
    prefix-icon="el-icon-search"
    v-model="input21">
  </el-input></el-form></el-menu-item>

  </el-menu>

  </div>
</template>

<script>

  export default{
    data(){
      return{

      }
    }
  }
</script>

