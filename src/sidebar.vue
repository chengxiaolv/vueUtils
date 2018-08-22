<template>
  <div class="sidebar">  
    <ul>
      <li v-for="(item,index) in lis" :key="index" @click="liChoose(item,index)" :class="{active: item.show}">
				<span>{{item.name}}</span>
			</li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        lis:[
          {
            name:"html截屏图片",
            show: true,
						router: '/'
          },
           {
            name:"测试",
            show: false,
						router: '/ceshi'
          }
        ]
      }
    },
    methods:{
      liChoose (item,index) {
				this.lis.forEach((item) => {
					item.show = false
				})
				item.show = true
				this.$router.push(item.router)
			},
    }
  }
</script>
<style scoped lang="scss">
  .sidebar{
    width: 200px;
		min-width: 200px;
		background: #165370;
    height: 100%;
    overflow-y: auto;
  }
  li{
    color:#fff;
    text-align: center;
    height:40px;
    line-height: 40px;
    font-size: 17px;
    &:hover{
      background-color: #2F6B88;
    }
  }
  .active{
		background: #23749A !important;
	}
</style>

