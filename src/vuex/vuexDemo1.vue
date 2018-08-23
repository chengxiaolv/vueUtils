<template>
  <div>
    <el-input-number v-model="num1" @change="handleChange" :min="0" :max="100" label="描述文字"></el-input-number>
  </div>
</template>
<script>  
  export default{
    data(){
      return {
        num1: 0
      }
    },
    methods:{
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
<style scoped lang="scss">
  
</style>
