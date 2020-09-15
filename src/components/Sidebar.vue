<template>
    <div class="sidebar">
        <ul>
            <router-link tag="li" :to="{name: 'Home'}">待办任务</router-link>
            <router-link tag="li" :to="{name: 'Add'}">新增任务</router-link>
            <router-link tag="li" :to="{name: 'Done'}">已经完成任务</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .sidebar{
        width:100%;
        height: 100%;
        background-color: #3B3B3B;
    }
    .sidebar ul li{
        list-style: none;
        color: #eee;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
    }
   .sidebar .active{
       color: #FAEFAC;
   }
</style>