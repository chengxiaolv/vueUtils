//  参考地址 :  https://vue-particles.netlify.com/     https://www.jianshu.com/p/53199b842d25
//  github地址 ：  https://github.com/creotip/vue-particles

// color: String类型。默认'#dedede'。粒子颜色。

// particleOpacity: Number类型。默认0.7。粒子透明度。

// particlesNumber: Number类型。默认80。粒子数量。

// shapeType: String类型。默认'circle'。可用的粒子外观类型有："circle","edge","triangle", "polygon","star"。

// particleSize: Number类型。默认80。单个粒子大小。

// linesColor: String类型。默认'#dedede'。线条颜色。

// linesWidth: Number类型。默认1。线条宽度。

// lineLinked: 布尔类型。默认true。连接线是否可用。

// lineOpacity: Number类型。默认0.4。线条透明度。

// linesDistance: Number类型。默认150。线条距离。

// moveSpeed: Number类型。默认3。粒子运动速度。

// hoverEffect: 布尔类型。默认true。是否有hover特效。

// hoverMode: String类型。默认true。可用的hover模式有: "grab", "repulse", "bubble"。

// clickEffect: 布尔类型。默认true。是否有click特效。

// clickMode: String类型。默认true。可用的click模式有: "push", "remove", "repulse", "bubble"。
<template>
  <div class="login">
     <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
    </vue-particles>

    <div class="content">
      <div class="info">
        <span>晓绿的项目</span>
      </div>
      <div class="name">
        <el-row :gutter="20">
          <el-col :span="7"><span>用户名：</span></el-col>
            <el-col :span="17">
              <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              size="small"
              v-model="name">
            </el-input>
          </el-col>
        </el-row>
      </div>
      <div class="possword">
        <el-row :gutter="20">
          <el-col :span="7"><span>密码：</span></el-col>
            <el-col :span="17">
              <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              size="small"
              v-model="possword">
            </el-input>
          </el-col>
        </el-row>
      </div>

      <el-button type="primary" size="small" round @click="login">登陆</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        possword: ''
      }
    },
    created() {

    },
    methods: {
      login(){
        if(this.name !=='admin'){
          this.$message({
            message: '用户名错误',
            type: 'error',
            center: true,
            duration: 1000,
            showClose: false
          });
          return
        }else if(this.possword !=='admin'){
          this.$message({
            message: '密码错误',
            type: 'error',
            center: true,
            duration: 1000,
            showClose: false
          });
          return
        }
        this.https.post("/news/index").then(res => {
          if(res.articles){
            this.$message({
              message: '登陆成功',
              type: 'success',
              center: true,
              duration: 500,
              showClose: false
            });
            setTimeout(() => {
              this.$router.push('/main');
            }, 800);
          }
        }).catch(res => {
          console.log(res)
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  .login{
    width: 100%;
    height: 100%;
  }
  #particles-js {
    background: url('../../static/images/3.jpg') no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .content{
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 220px;
    background-color: #fff;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    .info{
      font-size: 20px;
      text-align: center;
      padding: 20px 0px;
      background-color: #DADADA;
    }
    .name{
      padding: 14px 20px;
      span{
        display: inline-block;
        margin-top: 9px;
        font-size: 15px;
      }
    }
    .possword{
      padding: 0px 20px;
      span{
        display: inline-block;
        margin-top: 9px;
        margin-left: 16px;
        font-size: 15px;
      }
      margin-bottom: 20px;
    }
    .el-button{
      width: 80%;
      margin-left: 30px;
      font-size: 13px;
    }
  }
</style>