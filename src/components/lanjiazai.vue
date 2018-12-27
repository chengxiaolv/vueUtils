//  https://github.com/hilongjw/vue-lazyload#demo  参考地址。
<template>
  <div v-lazy-container="{ selector: 'img' }">
    <img data-src="http://img.pptjia.com/image/20180117/f4b76385a3ccdbac48893cc6418806d5.jpg" data-error="http://pic35.photophoto.cn/20150402/0011024033183316_b.jpg">
    <img data-src="http://pic9.photophoto.cn/20081229/0034034829945374_b.jpg" data-loading="http://pic35.photophoto.cn/20150402/0011024033183316_b.jpg">
    <img data-src="http://pic9.photophoto.cn/20081229/0034034885643767_b.jpg" data-loading="http://pic35.photophoto.cn/20150402/0011024033183316_b.jpg">
    <img data-src="http://pic5.photophoto.cn/20071027/0034034409450565_b.jpg" data-loading="http://pic35.photophoto.cn/20150402/0011024033183316_b.jpg">
    <img data-src="http://photo.16pic.com/00/11/69/16pic_1169706_b.jpg" data-loading="http://pic35.photophoto.cn/20150402/0011024033183316_b.jpg">
    <img data-src="http://pic20.photophoto.cn/20110920/0020032825361672_b.jpg" data-loading="http://pic35.photophoto.cn/20150402/0011024033183316_b.jpg">
    <img data-src="http://pic30.photophoto.cn/20140324/0034034401728510_b.jpg" data-loading="http://pic35.photophoto.cn/20150402/0011024033183316_b.jpg">
    <img data-src="http://pic11.photophoto.cn/20090529/0034034842265664_b.jpg" data-loading="http://pic35.photophoto.cn/20150402/0011024033183316_b.jpg">
    <img data-src="http://pic17.nipic.com/20111010/7664308_121431274109_2.jpg" data-loading="http://pic35.photophoto.cn/20150402/0011024033183316_b.jpg">
    <img data-src="http://pic41.nipic.com/20140601/18681759_143805185000_2.jpg">  
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

<style scoped lang="scss">
  img{
    width: 500px;
    height: 1200px;
    display: block;
  }
</style>