<template>
  <div class="content">
    1
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      let(){
        // {
        //   let a = 3; //let 会分割作用域，只在 {} 里面有效。
        //   var b = 4; //var 会成为全局变量。
        // };
        // console.log(a)  //报错
        // console.log(b) //打印4


        // let list = [1,2,3,4,6,7,8,9];
        // for(let j;j>list.length;j++){
          
        // }
        // // console.log(j);  //报错。
        // for(var i;i>list.length;i++){
          
        // }
        // console.log(i); // undefined
      },
      arr(){
        // let [a,b,c] = [1,2,3]; //数组的结构赋值。
        // console.log(a)
        // console.log(b)
        // console.log(c)

        // let [ , , a] = [2,3,4];
        // console.log(a);

        // let [a, ...c] = [2,3,4,5,7];
        // console.log(a)
        // console.log(c)
      }
    },
    created(){
      this.let();
      this.arr();
    }
  }
</script>
<style scoped lang="scss">

</style>

