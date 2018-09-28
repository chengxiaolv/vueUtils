<template>
  <div class="mock">
    <el-button @click="activeIndex=1">简单mock</el-button>
    <el-button @click="activeIndex=2">默认按钮</el-button>
    <el-button @click="activeIndex=3">默认按钮</el-button>
    <el-button @click="activeIndex=4">默认按钮</el-button>

    <div class="content">
      <mock1 v-if="activeIndex==1"></mock1>
      <mock2 v-if="activeIndex==2"></mock2>
      <mock3 v-if="activeIndex==3"></mock3>
      <mock4 v-if="activeIndex==4"></mock4>
    </div>
  </div>
</template>
<script>
  import mock1 from "./mock1.vue";
  import mock2 from "./mock2.vue";
  import mock3 from "./mock3.vue";
  import mock4 from "./mock4.vue";
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
      mock4
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
</style>


