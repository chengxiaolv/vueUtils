<template>
  <div>
    <!-- <div id="editor">  //最简单demo1
    </div>
    <el-button size="small" style="marginTop:20px" @click="clearContent">清空内容</el-button>
    <el-button size="small" style="marginTop:20px" @click="DisableEditor">禁用编辑器</el-button>
    <el-button size="small" style="marginTop:20px" @click="EnableEditor">启用编辑器</el-button>
    <el-button size="small" style="marginTop:20px" @click="getHtml">获取html</el-button>
    <el-button size="small" style="marginTop:20px" @click="getText">获取text</el-button> -->

    <!-- <div id="div1" class="toolbar">  //demo2 菜单和编辑区域分离
    </div>
    <div style="padding: 5px 0; color: #ccc"></div>
    <div id="div2" class="text"> -->
      <!--可使用 min-height 实现编辑区域自动增加高度-->
      <!-- <p>请输入内容</p>
    </div> -->

    <!-- <div id="div1">  // demo3   通过onchange来实现 textarea 中提交富文本内容。
        <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
    </div>
    <textarea id="text1" style="width:100%; height:200px;"></textarea> -->

    <!-- <div id="div1">  // demo4  获取 JSON 格式的内容
      <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
      <img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png" style="max-width:100%;"/>
    </div>
    <button id="btn1">getJSON</button> -->

    <!-- <div id="div1"> //demo5 自定义菜单
      <p>欢迎使用 wangEditor 富文本编辑器</p>
    </div> -->

    <!-- 配置onchange函数之后，用户操作（鼠标点击、键盘打字等）导致的内容变化之后，会自动触发onchange函数执行。  //demo6 配置 onchange 函数
    但是，用户自己使用 JS 修改了div1的innerHTML，不会自动触发onchange函数，此时你可以通过执行editor.change()来手动触发onchange函数的执行。 -->
    <!-- <div id="div1">
      <p>欢迎使用 wangEditor 富文本编辑器</p>
    </div>
    <p>手动触发 onchange 函数执行</p>
    <button id="btn1">change</button>    -->

    <!-- <div id="div1">  //demo7  可以通过lang配置项配置多语言，其实就是通过该配置项中的配置，将编辑器显示的文字，替换成你需要的文字。
      <p>欢迎使用 wangEditor 富文本编辑器</p>
    </div> -->

    <!-- <div id="div1">  //demo8 粘贴文本
      <p>欢迎使用 wangEditor 富文本编辑器</p>
    </div> -->

    <!-- <div id="div1">  //demo9  插入网络图片的回调
    </div> -->

    <!-- <div id="div1">  //demo10  插入链接时，对文字和链接进行校验。
    </div> -->

    <!-- <div id="div1"> //demo11  配置onfocus函数之后，用户点击富文本区域会触发onfocus函数执行。
      <p>欢迎使用 wangEditor 富文本编辑器</p>
    </div> -->

    <!-- <div id="div1"> //demo12  配置onblur函数之后，如果当前有手动获取焦点的富文本并且鼠标点击富文本以外的区域，则会触发onblur函数执行。
      <p>欢迎使用 wangEditor 富文本编辑器</p>
    </div> -->

    <!-- <div id="div1">  //demo13 自定义配置颜色（字体颜色、背景色）
      <p>欢迎使用 wangEditor 富文本编辑器</p>
    </div> -->

    <div id="div1">
      <p>欢迎使用 wangEditor 富文本编辑器</p>
    </div>
  </div>
</template>
<script>
  import E from 'wangeditor';
  export default {
    data() {
      return {

      }
    },
    mounted() {
      // this.editor = new E('#editor');  //最简单 demo1
      // this.editor.create();
      // this.editor.txt.html('<p>用 JS 设置的内容</p>')   //创建编辑器之后，使用editor.txt.html(...)设置编辑器内容
      // this.editor.txt.clear()   //可使用editor.txt.clear()清空编辑器内容

      // this. editor1 = new E('#div1', '#div2') // 两个参数也可以传入 elem 对象，class 选择器   //demo2   菜单和编辑区域分离
      // editor.customConfig.zIndex = 100  //设置z-index层级。
      // this.editor1.create() 

      // var editor = new E('#div1')   // demo3   通过onchange来实现 textarea 中提交富文本内容。
      // var $text1 = $('#text1')
      // editor.customConfig.onchange = function (html) {
      //     // 监控变化，同步更新到 textarea
      //     $text1.val(html)
      // }
      // editor.create()
      // // 初始化 textarea 的值
      // $text1.val(editor.txt.html())

      // var editor = new E('#div1') // demo4  获取 JSON 格式的内容
      // editor.create()
      // document.getElementById('btn1').addEventListener('click', function () {
      //     var json = editor.txt.getJSON()  // 获取 JSON 格式的内容
      //     var jsonStr = JSON.stringify(json)
      //     console.log(json)
      //     console.log(jsonStr)
      // })

      // var editor = new E('#div1')  //demo5 自定义菜单
      // // 自定义菜单配置
      // editor.customConfig.menus = [
      //     'head',  // 标题
      //     'bold',  // 粗体
      //     'fontSize',  // 字号
      //     'fontName',  // 字体
      //     'italic',  // 斜体
      //     'underline',  // 下划线
      //     'strikeThrough',  // 删除线
      //     'foreColor',  // 文字颜色
      //     'backColor',  // 背景颜色
      //     'link',  // 插入链接
      //     'list',  // 列表
      //     'justify',  // 对齐方式
      //     'quote',  // 引用
      //     'emoticon',  // 表情
      //     'image',  // 插入图片
      //     'table',  // 表格
      //     'video',  // 插入视频
      //     'code',  // 插入代码
      //     'undo',  // 撤销
      //     'redo'  // 反撤销
      // ]
      // editor.create()
 
      // var editor = new E('#div1')    //demo6 配置 onchange 函数
      // // 另外，如果需要修改 onchange 触发的延迟时间（onchange 会在用户无任何操作的 xxx 毫秒之后被触发），可通过如下配置
      // // 自定义 onchange 触发的延迟时间，默认为 200 ms  
      // editor.customConfig.onchangeTimeout = 1000 // 单位 ms
      // editor.customConfig.onchange = function (html) {
      //     // html 即变化之后的内容
      //     console.log(html)
      // }
      // editor.create()
      // document.getElementById('btn1').addEventListener('click', function () {
      //     // 如果未配置 editor.customConfig.onchange，则 editor.change 为 undefined
      //     editor.change && editor.change()
      // })

      // var editor = new E('#div1')  //demo7  可以通过lang配置项配置多语言，其实就是通过该配置项中的配置，将编辑器显示的文字，替换成你需要的文字。
      // editor.customConfig.lang = {
      //     '设置标题': 'title',
      //     '正文': 'p',
      //     '链接文字': 'link text',
      //     '链接': 'link',
      //     '上传图片': 'upload image',
      //     '上传': 'upload',
      //     '创建': 'init'
      //     // 还可自定添加更多
      // }
      // editor.create()

      // var editor = new E('#div1')  //demo8 粘贴文本
      // // 关闭粘贴样式的过滤
      // editor.customConfig.pasteFilterStyle = false
      // // 忽略粘贴内容中的图片
      // editor.customConfig.pasteIgnoreImg = true
      // // 自定义处理粘贴的文本内容
      // editor.customConfig.pasteTextHandle = function (content) {
      //     // content 即粘贴过来的内容（html 或 纯文本），可进行自定义处理然后返回
      //     return content + '<p>在粘贴内容后面追加一行</p>'
      // }
      // editor.create()
      // 注意，以下配置暂时对 IE 无效。IE 暂时使用系统自带的粘贴功能，没有样式过滤！
      // 关闭粘贴样式的过滤
      // 当从其他网页复制文本内容粘贴到编辑器中，编辑器会默认过滤掉复制文本中自带的样式，目的是让粘贴后的文本变得更加简洁和轻量。用户可通过editor.customConfig.pasteFilterStyle = false手动关闭掉粘贴样式的过滤。
      // 忽略粘贴内容中的图片
      // 从其他页面复制过来的内容，除了包含文字还可能包含图片，这些图片一般都是外域的（可能会有盗链）。此时如果想要忽略图片，即只粘贴文字不粘贴图片，可以使用editor.customConfig.pasteIgnoreImg = true来控制。默认是可以粘贴图片的。
      // 自定义处理粘贴的文本内容
      // 使用者可通过editor.customConfig.pasteTextHandle对粘贴的文本内容进行自定义的过滤、处理等操作，然后返回处理之后的文本内容。编辑器最终会粘贴用户处理之后并且返回的的内容。

    // var editor = new E('#div1') //demo9  插入网络图片的回调
    // editor.customConfig.linkImgCallback = function (url) {
    //     // console.log(url) // url 即插入图片的地址
    //     // console.log($("img").attr("src")) // url 即插入图片的地址
    //     // if($("img").attr("src") == url){
          
    //     // }
    //     $("img").each(function(index,item){
    //       if($(this).attr("src") == url){
    //         $(this).css("width","200px")
    //       }
    //     })
    // }
    // editor.create()

    // var editor = new E('#div1')   //demo10  插入链接时，对文字和链接进行校验。
    // editor.customConfig.linkCheck = function (text, link) {
    //     console.log(text) // 插入的文字
    //     console.log(link) // 插入的链接

    //     return true // 返回 true 表示校验成功
    //     // return '验证失败' // 返回字符串，即校验失败的提示信息
    // }
    // editor.create()

    // 第一次点击 输入框的时候触发   当光标还在输入框内时，再次点击，不再触发。
    // var editor = new E('#div1')  //demo11  配置onfocus函数之后，用户点击富文本区域会触发onfocus函数执行。
    // editor.customConfig.onfocus = function () {
    //     console.log("onfocus")
    // }
    // editor.create()

    //当光标再输入框内，离开的时候点击触发
    // var editor = new E('#div1')  //demo12  配置onblur函数之后，如果当前有手动获取焦点的富文本并且鼠标点击富文本以外的区域，则会触发onblur函数执行。
    // editor.customConfig.onblur = function (html) {
    //     // html 即编辑器中的内容
    //     console.log('onblur', html)
    // }
    // editor.create()

    // var editor = new E('#div1')  //demo13 自定义配置颜色（字体颜色、背景色）
    // editor.customConfig.colors = [
    //     '#000000',
    //     '#eeece0',
    //     '#1c487f',
    //     '#4d80bf',
    //     '#c24f4a',
    //     '#8baa4a',
    //     '#7b5ba1',
    //     '#46acc8',
    //     '#f9963b',
    //     '#ffffff',
    // ]
    // editor.create()

    var editor = new E('#div1')
    // 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
    // editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
    // 将图片大小限制为 3M
    editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
    // 限制一次最多上传 5 张图片   默认为 10000 张（即不限制），需要限制可自己配置
    editor.customConfig.uploadImgMaxLength = 5
    editor.customConfig.uploadImgParams = {
      // 如果版本 <=v3.1.0 ，属性值会自动进行 encode ，此处无需 encode
      // 如果版本 >=v3.1.1 ，属性值不会自动 encode ，如有需要自己手动 encode
      token: 'abcdef12345'
    }
    editor.customConfig.uploadImgServer = '/upload'  // 上传图片到服务器  
    // 更多的设置    https://www.kancloud.cn/wangfupeng/wangeditor3/335782
     // 隐藏“网络图片”tab
    // editor.customConfig.showLinkImg = false
    editor.customConfig.linkImgCallback = function (url) {  //
      console.log(url) // url 即插入图片的地址 或者是 base64码
    }
    editor.create()


      // 禁用编辑功能
      // this.editor.$textElem.attr('contenteditable', false)
      // 开启编辑功能
      // this.editor.$textElem.attr('contenteditable', true)
      // 获取html
      // this.editor.txt.html()
      // 获取text
      // this.editor.txt.text()
      //创建编辑器之后，使用editor.txt.html(...)设置编辑器内容
      // this.editor.txt.html('<p>用 JS 设置的内容</p>')   
      //可使用editor.txt.clear()清空编辑器内容
      // this.editor.txt.clear()   
      // 编辑区域的z-index默认为10000，可自定义修改，代码配置如下。需改之后，编辑区域和菜单的z-index会同时生效。
      // editor.customConfig.zIndex = 100
    },
    methods:{
      clearContent(){ //清空富文本的内容
        this.editor.txt.clear();
      },
      DisableEditor(){ //禁用编辑器
        this.editor.$textElem.attr('contenteditable', false)
      },
      EnableEditor(){ //启用编辑器
        this.editor.$textElem.attr('contenteditable', true)
      },
      getHtml(){ //获取html代码
        console.log(this.editor.txt.html())
      },
      getText(){ //获取get代码
        console.log(this.editor.txt.text())
      }
    }
  }
</script>
<style scoped lang="scss">
  // .toolbar {   //demo2
  //   border: 1px solid #ccc;
  // }

  // .text {
  //   border: 1px solid #ccc;
  //   height: 400px;
  // }


</style>
