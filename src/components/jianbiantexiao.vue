// 参考地址 ：  https://github.com/PygmySlowLoris/vue-ripple-directive

//  安装 : npm install vue-ripple-directive --save

// main.js   种  import Ripple from 'vue-ripple-directive'     Vue.directive('ripple', Ripple);

// 在元素上加上  v-ripple（正常的）    v-ripple.mouseover.200（移入出现）

// import Ripple from 'vue-ripple-directive'   全局设置。
// Ripple.color = 'rgba(255, 255, 255, 0.35)';
// Ripple.zIndex = 55;
// Vue.directive('ripple', Ripple);
<template>
  <div>
    <div v-ripple class="test">This is a button</div>

    <el-button v-ripple.mouseover.200="'#A2C5E1'">默认按钮</el-button>

    <el-button v-ripple="'yellow'">默认按钮</el-button>

    <nianyuexuezheqi @lowerYear='lowerYear' @upperYear ='upperYear'  @ChoiceYue='ChoiceYue' :list='list'></nianyuexuezheqi>

  </div>
</template>

<script>
  import nianyuexuezheqi from './nianyuexuezheqi.vue';
  export default {
    data () {
        return{
          list: []
        }
    },
    methods: {
      lowerYear(val){
        console.log(val);
        this.list = [{
          c : 'a'
        }]
      },
      upperYear(val){
        console.log(val);
        this.list = [{
          b : 'a'
        }]
      },
      ChoiceYue(year,month){
        console.log(year);
        console.log(month);
      },
    },
    components:{
      nianyuexuezheqi
    }
  }
</script>

<style scoped lang="scss">
  .test{
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    width: 100px;
  }
</style>