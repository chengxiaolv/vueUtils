<template>
  <div>
    <!-- 下载下面两种文件的话，不用其他操作，直接href到相应地址即可。 -->
    <a href="../../static/testDownLoad/123.xlsx">下载.xlsx文件</a>
    <a href="../../static/testDownLoad/345.docx">下载.docx文件</a>


    <!-- 下载txt文件时，必须在后面加上download -->
    <a href="../../static/testDownLoad/234.txt" download>下载.txt文件</a>
    <!-- 下载图片文件时，必须在后面加上download -->
    <a href="../../static/testDownLoad/1.jpg" download>下载图片文件</a> 
    
  </div>
</template>

<script>
  export default {
    data () {
      return{
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang='scss'>
  a{
    display: inline-block;
    width: 100px;
    height: 50px;
    background-color: aliceblue;
    color: red;
    line-height: 50px;
    text-align: center;
  }
</style>