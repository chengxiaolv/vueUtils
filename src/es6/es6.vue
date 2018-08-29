<template>
  <div class="vuexContent">  
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="es6_1" name="first"></el-tab-pane>
      <el-tab-pane label="es6_2" name="second"></el-tab-pane>
      <el-tab-pane label="es6_3" name="third"></el-tab-pane>
      <el-tab-pane label="es6_4" name="fourth"></el-tab-pane>
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
          this.$router.push('/es6');
        }
        if(tab.name == 'second'){
          this.$router.push('/es6_2');
        }
        if(tab.name == 'third'){
          this.$router.push('/es6_3');
        }
        if(tab.name == 'fourth'){
          this.$router.push('/es6_4');
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

