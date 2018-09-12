<template>
  <div>
    <div id="form_print">
      <div class="container">
          <h3>物料出库成本核算表</h3>
          <div class="text">
              <div class="left">
                  <label>
            供应商：<span>海康</span>
          </label>
                  <label>
            使用部门：<span>深圳办事处</span>
          </label>
                  <label>
            使用项目：<span>中海物业-深圳-电梯维保-2018</span>
          </label>
              </div>
              <div class="right">
                  <label>
            出库核算表号：<span>RK-20180413-02923海康</span>
          </label>
                  <label>
            制表日期：<span>2018-04-13</span>
          </label>
              </div>
          </div>
          <table border="1" cellspacing="0" cellpadding="0">
              <thead>
                  <tr>
                      <th>序号</th>
                      <th>物料名称</th>
                      <th>规格型号</th>
                      <th>品牌</th>
                      <th>采购单价</th>
                      <th>数量</th>
                      <th>单个成本</th>
                      <th>单个可抵扣税金</th>
                      <th>合计</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>网络红外枪球摄像机</td>
                      <td>DS-2CD2T26VD-I5(6mm)</td>
                      <td>海康</td>
                      <td>350.0</td>
                      <td>1.00</td>
                      <td>299.15</td>
                      <td>50.85</td>
                      <td>299.15</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>网络红外枪球摄像机</td>
                      <td>DS-2CD2T26VD-I5(4mm)</td>
                      <td>海康</td>
                      <td>350.0</td>
                      <td>1.00</td>
                      <td>299.15</td>
                      <td>50.85</td>
                      <td>299.15</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>电源适配器</td>
                      <td>DS-2FA1220-DW-CH</td>
                      <td>海康</td>
                      <td>25.00</td>
                      <td>2.00</td>
                      <td>21.37</td>
                      <td>3.63</td>
                      <td>42.74</td>
                  </tr>
                  <tr>
                      <td colspan="8">合计:</td>
                      <td>10000</td>
                  </tr>
              </tbody>
          </table>
          <div class="footer">
              <div class="left">
                  <label>制表：
            <span>林林林</span>
          </label>
              </div>
              <div class="right">
                  <label>审核：
            <span>林林林</span>
          </label>
              </div>
          </div>
      </div>
    </div>
    <button id="btn" @click="print">打印</button>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    },
    methods:{
      print(){
        var form_print = document.getElementById('form_print')
        var newStr = form_print.innerHTML
        var oldStr = document.body.innerHTML
        document.body.innerHTML = newStr
        window.print()
        window.location.reload()  //刷新页面，否则所有的按键功能都没有用了
        document.body.innerHTML = oldStr
        return false
      }
    }
  }
</script>

<style lang="scss" scoped>
  #form_print {
      text-align: center;
      margin: 20px 80px;
      border: 1px solid #BBBBBB;
      background-color: red;
  }
        
  .container {
      display: inline-block;
  }
  
  h3 {
      margin-bottom: 30px;
  }
  
  table {
      margin: 10px 0 30px;
      border-collapse: collapse;
  }
  
  thead {
      font-size: 14px;
  }
  
  tbody {
      font-size: 12px;
  }
  
  th,
  td {
      max-width: 90px;
      min-width: 70px;
      padding: 5px;
  }
  
  td {
      word-wrap: break-word;
  }
  
  .text {
      display: flex;
      padding: 0 20px;
  }
  
  .left,
  .right {
      flex: 1;
  }
  
  .text .right {
      margin-left: 40px;
  }
  
  label {
      text-align: left;
      display: block;
      margin-bottom: 10px;
  }
  
  .footer {
      display: flex;
  }
  
  .footer label {
      text-align: center;
  }
  
  .btn {
      width: 100%;
      text-align: center;
  }
  
</style>

<style>
    @page {
        size: auto;
        margin: 3mm;
    }
    
    @media print {
        #form_print {
            width: 100px;
            height: 100px;
            color: red;
        }
    }
</style>


