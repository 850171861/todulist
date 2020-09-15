<template>
  <div class="add">
  <el-input
  type="textarea"
  :rows="8"
  placeholder="请输入需要完成的任务"
  v-model="textarea">
</el-input>
<el-button size="plain" type="primary" @click="add">添加任务</el-button>
    
   
    
  </div>
</template>

<script>

export default {
  name: 'Add',
  data() {
    return {
      textarea: '',
      lists:[]
    }
  },
  methods:{
    add(){
      if(this.textarea === '') return
      let obj = {id:Date.now(),create:new Date(),content:this.textarea,status:0}
      let list = JSON.parse(localStorage.getItem('list'))
       if(list === null ){
      this.lists.push(obj)
      this.lists.forEach(item => {
        item.create = JSON.stringify(item.create).substring(1,11)
      })
      localStorage.setItem('list',JSON.stringify(this.lists))
      }else{
         list.push(obj)
         list.forEach(item => {
        item.create = JSON.stringify(item.create).substring(1,11)
      })
         localStorage.setItem('list',JSON.stringify(list))
      } 
      
      this.textarea = ''
    }
  }
}
</script>

<style scoped>
   .add{
     padding: 20px;
   }
   .add .el-button--primary{
     float:right;
     margin: 10px 20px;
   }
</style>
