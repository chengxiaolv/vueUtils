<template>
  <div>
    <el-button type="success" @click="login">登陆</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      this.https.post("/news/index", {})
        .then(
          response =>  {
            this.$notify({
              title: '成功',
              message: '登陆成功',
              type: 'success'
            });
          }
        )
        .catch(response => {
          console.log(response)
        });

      // 封装的完整案例
      // this.https.post("/service", {
      //   data: JSON.stringify({
      //     command: "login",
      //     platform: "web",
      //     loginName: 1,
      //     psd: 123456,
      //     type: "managerSystem"
      //   })
      // })
      //   .then(
      //     response =>  {
      //       if(response.statusCode == '10001'){
      //         console.log(response)
      //       }else{
      //         console.log(response)
      //       }
      //     }
      //   )
      //   .catch(response => {
      //     console.log(response)
      //   });
    }
  }
};
</script>
<style scoped lang="scss">
</style>


