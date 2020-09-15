<template>
  <div class="done">
      <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column  
      label="创建日期"
      width="180">
      <template slot-scope="scope" >
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.create }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="已完成任务"
      >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>创建时间: {{ scope.row.create }}</p>
          <p>待办: {{ scope.row.content }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.content }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="180"> 
      <template slot-scope="scope">
        <el-button
          size="mini"
          disabled
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    
   
    
  </div>
</template>

<script>

export default {
  name: 'Done',
  components: {},
   data() {
      return {
        Data: []
      }
    },
    created(){
      this.ShouList()
    },
    methods: {
      ShouList(){
        let list = JSON.parse(localStorage.getItem('list'))
        list.forEach(item => {
          item.create = JSON.stringify(item.create).substring(1,11)
        });
       let tableData = list.filter(item => item.status === 1)
        this.tableData = tableData
      },
      handleDelete(index, row) {
          let list = JSON.parse(localStorage.getItem('list')) 
         list.splice(index,1)
        this.tableData.splice(index,1)
          list = list.filter(item => item.id !== row.id)
        localStorage.setItem('list', JSON.stringify(list)) 
      }
    }
}
</script>

<style scoped>
   
</style>
