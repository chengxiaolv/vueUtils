<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  html,body{
    height:100%;
    width:100%;
  }


  /* 图片预览组件 */
  .viewer-toolbar, .viewer-navbar {
    display: none;
  }
  .viewer-container {
    img {
      top: 0;
      left: 5%;
      bottom: 0;
      right: 0;
      box-shadow: 0 0 9px 2px #fff;
      border-radius: 10px;
    }
  }
  .viewer-container::after {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 80px;
    margin-left: 5%;
    font-size: 18px;
    color: #A4A4A4;
    content: '滚动鼠标可放大缩小';
  }
</style>
