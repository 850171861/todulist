<template>
  <div class="add">
  <el-input
  type="textarea"
  :rows="8"
  placeholder="请输入需要完成的任务"
  v-model="textarea">
</el-input>
<el-button size="plain" type="primary" @click="Edit()">修改任务</el-button>
    
   
    
  </div>
</template>

<script>

export default {
  name: 'Add',
  data() {
    return {
      textarea: '',
      id:this.$route.params.id
    }
  },
  created(){
    this.show()
  },
  methods:{
      show(){
          let list = JSON.parse(localStorage.getItem('list'))
          list = list.filter(item => {
             return item.id == this.id
          })
          this.textarea = list[0].content
      },
       Edit(){
        let list = JSON.parse(localStorage.getItem('list'))
        let EditDate = list.find(item => item.id == this.id)
         EditDate.content = this.textarea
         localStorage.setItem('list',JSON.stringify(list)) 
         this.$router.push('/')
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
