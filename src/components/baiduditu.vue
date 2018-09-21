<template>
  <div id="container">
  </div>
</template>
<script>
export default {
  data: function() {
    return {
    }
  },
  mounted(){
    var map = new BMap.Map("container");          // 创建地图实例  
    var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  用来缩放地图
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放   地图的鼠标滚轮缩放默认是关闭的，需要配置开启。
  }
}
</script>
<style scoped lang="scss">
  html {
    height: 100%
  }

  body {
    height: 100%;
    margin: 0px;
    padding: 0px
  }

  #container {
    height: 100%
  }
</style>

