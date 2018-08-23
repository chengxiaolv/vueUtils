<template>
  <div class="vuexContent">  
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first"></el-tab-pane>
      <el-tab-pane label="配置管理" name="second"></el-tab-pane>
      <el-tab-pane label="角色管理" name="third"></el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
    </el-tabs>
    <div class="content">
      <router-view/>
    </div>
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
  .vuexContent{
    height:100%;
  }
  .el-tabs{
    height:60px;
  }
  .content{
    height: calc(100% - 60px);
    width: 100%;
  }
</style>

