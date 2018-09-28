<template>
  <div class="mockMain">
    {{newsListShow}}
  </div>
</template>
<script>
  export default {
    data() {
      return {
        newsListShow: {}
      }
    },
    methods: {
      setNewsApi: function() {
        this.https.get("/mock/realColumn").then(res => {
          this.newsListShow = res;
        }).catch(res => {
          console.log(res)
        });
      }
    },
    created() {
      this.setNewsApi();
    },
  }
</script>
<style scoped lang="scss">
 
</style>


