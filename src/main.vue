<template>
  <div class="main">
    <sidebar></sidebar>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import sidebar from './sidebar';
  export default{
    data(){
      return {

      }
    },
    methods:{

    },
    components:{
      sidebar
    }
  }
</script>
<style scoped lang="scss">
  .main{
    height: 100%;
    width: 100%;
    min-width: 1000px;
    display: flex;
    background-color: #eee;
  }
  .content{
    flex: 1;
    overflow-y: auto;
    margin: 20px;
    background-color: #fff;
    padding:10px;
  }
</style>

