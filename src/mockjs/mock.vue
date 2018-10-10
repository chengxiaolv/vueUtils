<template>
  <div class="mock">
    <el-button @click="activeIndex=1" :class="{isChecked:activeIndex==1?true:false}">简单mock</el-button>
    <el-button @click="activeIndex=2" :class="{isChecked:activeIndex==2?true:false}">数据模板定义</el-button>
    <el-button @click="activeIndex=3" :class="{isChecked:activeIndex==3?true:false}">数据占位符定义</el-button>

    <div class="content">
      <mock1 v-if="activeIndex==1"></mock1>
      <mock2 v-if="activeIndex==2"></mock2>
      <mock3 v-if="activeIndex==3"></mock3>
    </div>
  </div>
</template>
<script>
  import mock1 from "./mock1.vue";
  import mock2 from "./mock2.vue";
  import mock3 from "./mock3.vue";
  export default {
    data() {
      return {
        activeIndex : 1,
      };
    },
    components:{
      mock1,
      mock2,
      mock3,
    }
  };
</script>
<style scoped lang="scss">
  .mock{
    height: 100%;
  }
  .content{
    margin-top: 20px;
    height: calc(100% - 80px);
    background-color: #f2f2f2;
    padding:10px;
    overflow-y: auto;
  }
  .isChecked{
    color: #409EFF;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
</style>


