<template>
  <div class="mockMain">
    <div class="item" v-for="(item,index) in newsListShow" :key="index">
      <img :src="item.thumbnail_pic_s" alt="">
      <p>
        <span>姓名：</span>
        <span>{{item.author_name}}</span>
      </p>
      <p>
        <span>描叙：</span>
        <span style="text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:50px;">{{item.title}}</span>
      </p>
      <p>
        <span>创建时间：</span>
        <span style="text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:50px;">{{item.date}}</span>
      </p>
    </div>
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
        this.https.post("/news/index").then(res => {
          this.newsListShow = res.articles;
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
  .item{
    background-color: #fff;
    width: 180px;
    padding:10px;
    padding-bottom:3px;
    float: left;
    margin-left: 19px;
    margin-bottom: 19px;
    &:hover{
      cursor: pointer;
      box-shadow: 0 2px 2px 0 rgba(158, 29, 29, 0.5);
    }
    img{
      width: 180px; 
      height: 200px;
      margin-bottom: 8px;
    }
    p{
      height: 22px;
    }
  }
</style>


