<template>
  <div>
    <p>数据占位符定义</p>
    {{res}}
  </div>
</template>
<script>
  export default {
    data(){
      return{
        res: {}
      }
    },
    methods:{
      getRandom(){
        this.https.get('mockRandom').then((res)=>{
          this.res = res;
        }).catch((res)=>{
          console.log(res)
        })
      }
    },
    created(){
      this.getRandom();
    }
  }
</script>
<style scoped>
  p{
    margin-bottom: 20px;
  }
</style>


