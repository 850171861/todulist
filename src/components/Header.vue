<template>
    <div class="header">
<el-row class="top">
  <el-col :span="12"><div class="top_left">办事项列表</div></el-col>
  <el-col :span="12"><div class="top_right"><el-input v-model="nowInput"  placeholder="请输入内容"></el-input></div>
  <div class="results">
      <li
          class="item"
          v-for="(target, index) in getResoutItem"
          :key="index"
          @click="go()"
        >{{ target.content}}</li>
      </div></el-col>
</el-row>
    </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            resout: [],
            nowInput: ""
        }
    },
    created(){
        let list = JSON.parse(localStorage.getItem('list'))
        list = list.filter(item => {
            return item.status == 0
        })
       this.resout = list
    },
    methods:{
        go(){
            this.$router.openPage('/')
            this.nowInput = ''
        }
    },
    computed: {
    getResoutItem(){
      let callback = []
      if(this.nowInput == ''){
        return callback
      }
      for(let i = 0; i<this.resout.length; i++){
        if(this.resout[i].content.toLowerCase().indexOf(this.nowInput.toLowerCase()) != -1){
          callback.push(this.resout[i])
        }
      }
      return callback
    }
  }
}
</script>

<style  scoped>
.header{
    width: 100%;
    height: 60px;
    background-color:#3B3B3B;
}
.top{
    
}
.top .top_left{
    color: #fff;
    font-size:20px;
    font-weight: 600;
    line-height: 60px;
    margin: 0 5%;
}
.top .top_right{
    float:right;
    margin-right: 30%;
    line-height: 60px;
}
.results{
    position: absolute;
    top: 60px;
    right: 15%;
    z-index: 999;
    width: 200px;
    height: 300px;
}
.top .results li{
   list-style: none;
   background: rgb(245, 245, 245);
   font-size: 16px;
   height: 30px;
   line-height: 30px;
   border-bottom: 1px solid #000;
}
</style>