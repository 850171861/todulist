<template>
  <div id="app">
<el-container>
  <el-header><todo-header></todo-header></el-header>
  <el-container>
    <el-aside><todo-sidebar></todo-sidebar></el-aside>
    <el-main><router-view/></el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import header from './components/Header'
import sidebar from './components/Sidebar'

export default {
  components:{
    'todo-header' : header,
    'todo-sidebar' : sidebar
    }
}
</script>

<style>
#app{
  height: 100%;
}
.el-aside{
  width: 200px !important;
  height: 100%;
  position: fixed;
  top: 72px;
  left: 28px;
  overflow: hidden !important;
}
.el-main{
  margin-left: 200px;
}
</style>
