// html2canvas  这个插件实现转化图片功能。
// npm  install html2canvas   下载 html2canvas
// 用到技术  --> vue  html2canvas
<template>
  <div>
    <el-button type="primary" @click="jieping">截屏</el-button>
    <div id="poster">
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
      <p>测试风格反对反对反对对方是个v的风格发的地方梵蒂冈的发表</p>
    </div>
  </div>
</template>
<script>
  import html2canvas from 'html2canvas';
  export default{
    data(){
      return{

      }
    },
    methods:{
      jieping(){
        let content_html = document.getElementById('poster');  //要转化的div
        let width = content_html.scrollWidth;  //这里scrollWidth很重要   因为当页不够显示的时候  scrollWidth可以实现打印全页了。
        let height = content_html.scrollHeight; //scrollHeight   因为当页不够显示的时候  scrollWidth可以实现打印全页了。
        let offsetTop = content_html.offsetTop;
        let canvas = document.createElement("canvas");
        let context = canvas.getContext('2d');
        let scaleBy = Math.ceil(window.devicePixelRatio);
        canvas.width = width*scaleBy;
        canvas.height = (height+offsetTop)*scaleBy;
        context.scale(scaleBy,scaleBy);
        var opts = {
         allowTaint:true,//允许加载跨域的图片
         tainttest:true, //检测每张图片都已经加载完成
         scale:scaleBy, // 添加的scale 参数
         canvas:canvas, //自定义 canvas
         logging: false, //日志开关，发布的时候记得改成false
         width:width, //dom 原始宽度
         height:height //dom 原始高度
        };
        html2canvas(content_html,opts).then(function (canvas) {
         canvas.style.width = width+"px";
         canvas.style.height = height+"px";
        var image = new Image();
        var imgUri = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream"); // 获取生成的图片的url 

          // 生成一个a元素
          var a = document.createElement('a')
          // 创建一个单击事件
          var event = new MouseEvent('click')
          a.download = '问卷.jpg' || '下载图片名称.jpg'
          // 将生成的URL设置为a.href属性
          a.href = imgUri
          // 触发a的单击事件
          a.dispatchEvent(event)
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  p{
    height: 30px;
  }
  .el-button{
    margin-bottom:20px;
  }
</style>


