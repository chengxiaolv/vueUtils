<template>
  <div class="content">
    <div class="one">
      <p>单个上下排序</p>
      <ul id="items">
        <li v-for="(item,index) in list" :key="index" :drag-id="index">
          {{item.name}}
        </li>
      </ul>
    </div>

    <div class="tow">
      <p>两个相互和上下排序</p>
      <ul id="foo">
        <li v-for="(item,index) in list1" :key="index" :drag-id="JSON.stringify(item)">
          {{item.name}}
        </li>
      </ul>

      <ul id="bar">
        <li v-for="(item,index) in list2" :key="index" :drag-id="JSON.stringify(item)">
          {{item.name}}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
        return{
          list: [
            {
              name: '世界'
            },{
              name: '测试'
            },{
              name: '魔鬼'
            },{
              name: '世界'
            },{
              name: '测试'
            },{
              name: '魔鬼'
            }
          ],
          showList: [],


          list1: [
            {
              name: '电影',
              flag: 1
            },
            {
              name: '动漫',
              flag: 2
            },
            {
              name: '电视剧',
              flag: 3
            },
            {
              name: '综艺',
              flag: 4
            }
          ],
          list2: [
            {
              name: '电影2',
              flag: 6
            },
            {
              name: '动漫2',
              flag: 7
            },
            {
              name: '电视剧2',
              flag: 8
            },
            {
              name: '综艺2',
              flag: 9
            }
          ],
        }
    },
    methods: {
    },
    mounted(){
      
      var el = document.getElementById('items');
      // let _this = this;
      var that = this;
      var sortable = Sortable.create(el,{
        animation: 150, //动画参数
        onAdd: function (evt){ //拖拽时候添加有新的节点的时候发生该事件
          
        },
        onUpdate: function (evt){ //拖拽更新节点位置发生该事件

        },
        onRemove: function (evt){ //删除拖拽节点的时候促发该事件

        },
        onStart:function(evt){ //开始拖拽出发该函数

        },
        onSort:function(evt){ //发生排序发生该事件

        },
        onEnd: function(evt){ //拖拽完毕之后发生该事件
          // 一种方法
          that.list.splice(evt.newIndex, 0, that.list.splice(evt.oldIndex, 1)[0]);
          var newArray = that.list.slice(0);
          that.list = [];
          that.$nextTick(function () {
            that.list = newArray;
          });
          console.log(newArray);

          // 另一种方法
          // console.log(_this.list);
          // console.log('onEnd.foo:', [evt.item, evt.from]);
          // var id_arr=''
          // for(var i=0, len=evt.from.children.length; i<len; i++){
          //   id_arr+=','+ evt.from.children[i].getAttribute('drag-id');
          // }
          // id_arr=id_arr.substr(1).split(',');
          // //然后请求后台ajax 这样就完成了拖拽排序
          // console.log(id_arr);

          // _this.list.forEach((item,index)=>{
          //   _this.showList[index] = _this.list[id_arr[index]];
          // })
          // console.log( _this.showList);
        }
      });




        var that = this;
        Sortable.create(document.getElementById('foo'), {
          group:"words",
          animation: 150, //动画参数
          onAdd: function (evt){ //拖拽时候添加有新的节点的时候发生该事件
         
          },
          onUpdate: function (evt){ //拖拽更新节点位置发生该事件
            
          },
          onRemove: function (evt){ //删除拖拽节点的时候促发该事件
            
          },
          onStart:function(evt){ //开始拖拽出发该函数
           
          },
          onSort:function(evt){ //发生排序发生该事件
          
          },
          onEnd: function(evt){ //拖拽完毕之后发生该事件
            // 一种方法
            // let arr = [];
            // let arr3 = [];
            // for(let i=0, len=evt.from.children.length; i<len; i++){
            //   arr3.push(JSON.parse(evt.from.children[i].getAttribute('drag-id')));
            //   arr.push(evt.from.children[i].getAttribute('drag-id'));
            // }
            // let totalArr = [];
            // totalArr = that.list1.concat(that.list2);
            // let arr2 = []
            // totalArr.forEach((item,index)=>{{
            //   if(!arr.includes(JSON.stringify(item))){
            //     arr2.push(item)
            //   }
            // }})
            // console.log(arr2);
            // console.log(arr3);


            // jquery 的方法  可以获取有序的排列
            let arr = [];
            let arr2 = [];
            $("#foo li").each(function(){
                arr.push(JSON.parse($(this).attr('drag-id')));
            });
            $("#bar li").each(function(){
                arr2.push(JSON.parse($(this).attr('drag-id')));
            });
            console.log(arr);
            console.log(arr2);
          }
        });
        
        
        Sortable.create(document.getElementById('bar'), {
          group:"words",
          animation: 150, //动画参数
          onAdd: function (evt){ //拖拽时候添加有新的节点的时候发生该事件
         
          },
          onUpdate: function (evt){ //拖拽更新节点位置发生该事件

          },
          onRemove: function (evt){ //删除拖拽节点的时候促发该事件
            
          },
          onStart:function(evt){ //开始拖拽出发该函数
           
          },
          onSort:function(evt){ //发生排序发生该事件
          
          },
          onEnd: function(evt){ //拖拽完毕之后发生该事件
            // 一种方法
            // let arr = [];
            // let arr3 = [];
            // for(let i=0, len=evt.from.children.length; i<len; i++){
            //   arr3.push(JSON.parse(evt.from.children[i].getAttribute('drag-id')));
            //   arr.push(evt.from.children[i].getAttribute('drag-id'));
            // }
            // let totalArr = [];
            // totalArr = that.list1.concat(that.list2);
            // let arr2 = []
            // totalArr.forEach((item,index)=>{{
            //   if(!arr.includes(JSON.stringify(item))){
            //     arr2.push(item)
            //   }
            // }})
            // console.log(arr2);
            // console.log(arr3);


            // jquery 的方法  可以获取有序的排列
            let arr = [];
            let arr2 = [];
            $("#foo li").each(function(){
                arr.push(JSON.parse($(this).attr('drag-id')));
            });
            $("#bar li").each(function(){
                arr2.push(JSON.parse($(this).attr('drag-id')));
            });
            console.log(arr);
            console.log(arr2);
          }
        });
    }
  }
</script>

<style scoped lang="scss">

  .content{
    display: flex;
    .one{
      margin-right: 200px;
      p{
        text-align: center;
        margin-bottom: 30px;
        font-size: 24px;
      }
      #items{
        border: solid 1px #E4E7ED;
        width: 200px;
        li{
          width: 200px;
          height: 60px;
          cursor: pointer;
          text-align: center;
          line-height: 60px;
          border-bottom: solid 1px #E4E7ED;
          &:hover{
            background-color: #2F6B88;
            color: #fff;
          }
        }
        li:last-child{
          border: none;
        }
      }
    }
    .tow{
      p{
        text-align: center;
        margin-bottom: 30px;
        font-size: 24px;
      }
      ul{
        border: solid 1px #E4E7ED;
        width: 200px;
        float: left;
        margin-right: 50px;
        li{
          width: 200px;
          height: 60px;
          cursor: pointer;
          text-align: center;
          line-height: 60px;
          border-bottom: solid 1px #E4E7ED;
          &:hover{
            background-color: #2F6B88;
            color: #fff;
          }
        }
        li:last-child{
          border: none;
        }
      }
    }
  }

</style>