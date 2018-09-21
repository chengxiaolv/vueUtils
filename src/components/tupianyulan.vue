// tupianyulan说明 文档里面有具体使用方法和说明
// 再app.vue 中有图片预览的css样式
<template>
  <div class="content">

    <!-- 点击图片，直接预览 -->
    <!-- <div v-viewer>    
      <img v-for="(item,index) in images" :src="item" :key="index">
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/> -->

  <!-- 点击图片或者点击按键，预览图片 -->
        <!-- v-viewer属性得可选性   选项： {“inline”：true，“button”：true，“navbar”：true，“title”：true，“toolbar”：true，“tooltip”：true，“movable”：true，“zoomable”：true ，“可旋转”：真实，“可扩展”：真实，“过渡”：真实，“全屏”：真实，“键盘”：真实，“网址”：“数据源”} -->
    <!-- <div class="images" v-viewer="{movable: false}">
      <img v-for="src in images" :src="src" :key="src">
    </div>
    <button type="button" @click="show">Show</button> -->


    <!-- 使用范围插槽自定义图像的显示。 -->
    <!-- <viewer :options="options" :images="images"
            @inited="inited"
            class="viewer" ref="viewer"
    >
      <template slot-scope="scope">
        <img v-for="src in scope.images" :src="src" :key="src">
        {{scope.options}}
      </template>
    </viewer>
    <button type="button" @click="show">Show</button> -->


    <viewer @inited="inited" ref="viewer">
      <template slot-scope="scope">
        <!-- <img :src="previewUrl" style="display: none;"> -->
        <img src="../../static/images/1.jpg" style="display: none;">
      </template>
    </viewer>
    <button type="button" @click="previewClick">Show</button> 
  </div>
</template>
<script>
  export default {
    data(){
      return {
        images: ['../../static/images/1.jpg', '../../static/images/2.jpg']
      }
    },
    methods:{
      // show () {  //点击图片或者点击按键，预览图片得方法
      //   const viewer = this.$el.querySelector('.images').$viewer
      //   viewer.show()
      // }


      // inited (viewer) { //  使用范围插槽自定义图像的显示 的方法
      //   this.$viewer = viewer
      // },
      // show () {
      //   this.$viewer.show()
      // }

    inited (viewer) {
      this.$viewer = viewer;
    },
    previewClick (item) {
      // this.previewUrl = item.annexUrl;
      this.$viewer.show();
    },
    }
  }
</script>
<style scoped lang="scss">
  img{
    width: 300px;
    height: 200px;
  }
</style>

