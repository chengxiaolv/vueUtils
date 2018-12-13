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
						router: '/main'
          },
           {
            name:"百度地图",
            show: false,
						router: '/baiduditu'
          },
          {
            name:"vuex",
            show: false,
						router: '/vuex'
          },
          {
            name:"es6",
            show: false,
						router: '/es6'
          },
          {
            name:"打印",
            show: false,
						router: '/dayin'
          },
          {
            name:"图片预览",
            show: false,
						router: '/tupianyulan'
          },
          {
            name:"封装axios",
            show: false,
						router: '/axios'
          },
          {
            name:"富文本编辑器",
            show: false,
						router: '/fuwenben'
          },
          {
            name:"mockjs模拟请求",
            show: false,
						router: '/mock'
          },
          {
            name:"有彩打印",
            show: false,
						router: '/youcaidayin'
          },
          {
            name:"下载本地文件",
            show: false,
						router: '/bendixiazai'
          }, {
            name:"将excel表格渲染",
            show: false,
						router: '/xlsx-to-json'
          },{
            name:"拖拽功能",
            show: false,
						router: '/tuozhuai'
          },{
            name:"日期选择器",
            show: false,
						router: '/time'
          },
        ]
      }
    },
    methods:{
      liChoose (item,index) {
				this.lis.forEach((item) => {
					item.show = false
				});
				item.show = true
        this.$router.push(item.router);
        sessionStorage.setItem("activeIndex",index);  //记录当刷新的时候，记录当前侧边栏点击状态。
			},
    },
    created(){
      var activeIndex = sessionStorage.getItem("activeIndex");   //记录当刷新的时候，得到当前侧边栏点击状态。
			if(!activeIndex){
				this.lis[0].show = true;
				return;
			}
			this.lis.forEach((item) => {
					item.show = false
			})
			this.lis[activeIndex].show = true;
		},
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
      cursor: pointer;
      background-color: #2F6B88;
    }
  }
  .active{
		background: #23749A !important;
	}
</style>

