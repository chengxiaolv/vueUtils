<template>
  <div>  
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first"></el-tab-pane>
      <el-tab-pane label="配置管理" name="second"></el-tab-pane>
      <el-tab-pane label="角色管理" name="third"></el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
    </el-tabs>
    <router-view/>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        activeName:'first'
      }
    },
    methods:{
      handleClick(tab, event) {
        if(tab.name == 'first'){
          this.$router.push('/vuex');
        }
        if(tab.name == 'second'){
          this.$router.push('/vuexDemo2');
        }
        if(tab.name == 'third'){
          this.$router.push('/vuexDemo3');
        }
        if(tab.name == 'fourth'){
          this.$router.push('/vuexDemo4');
        }
      }
    }
  }
</script>
<style scoped lang="scss">

</style>

