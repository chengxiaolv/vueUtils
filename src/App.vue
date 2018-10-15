<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  html,body{
    height:100%;
    width:100%;
  }


  /* 图片预览组件 */ 
  // 打开下面的css   就可以放开 图片预览的更多功能，
  // .viewer-toolbar, .viewer-navbar {
  //   display: none;
  // }
  // .viewer-container {
  //   img {
  //     top: 0;
  //     left: 5%;
  //     bottom: 0;
  //     right: 0;
  //     box-shadow: 0 0 9px 2px #fff;
  //     border-radius: 10px;
  //   }
  // }
  // .viewer-container::after {
  //   position: absolute;
  //   width: 100%;
  //   text-align: center;
  //   top: 80px;
  //   margin-left: 5%;
  //   font-size: 18px;
  //   color: #A4A4A4;
  //   content: '滚动鼠标可放大缩小';
  // }

  //YC凭证样式
  .credential-particulars-wrapper {
    .el-date-editor {
      text-align: center;
    }
    .el-date-editor .el-input__prefix {
      left: 10px;
      transition: all .3s;
    }
    .el-date-editor .el-input__inner{
      width: 200px !important;
      height: 30px !important;
      line-height: 30px !important;
    }
    .tabel-content .el-table tr {
      height: 30px !important;
    }
    .el-dialog__body {
      padding-top: 0 !important;
    }
    .el-table thead.is-group th {
      background: #fff;
    }
    .tabel-content .el-table th.gutter{
      display: table-cell !important;
    }
    .tabel-content .el-table th,td {
      padding: 0 !important;
      height: 30px;
      line-height: 30px;
    }
    .tabel-content .el-table .cell{
      padding-left: 5px !important;
      font-weight: normal;
      font-family: 'PingFangSC,微软雅黑';
      font-size: 13px;
      color: #274253 !important;
      letter-spacing: 0;
    }
    .tabel-content .el-table--border td,.el-table--border th, .el-table--border, .el-table--group{
      border-color: #708D9F !important;
    }
    .tabel-content .el-table tr td, .el-table tr th {
      border-right-color: #D8D8D8 !important;
    }
    .tabel-content .el-table tr:nth-child(1) th{
      border-right-color: #708D9F !important;
      background: #D6E5EF;
    }
    .tabel-content .el-table tr:nth-child(2) th:nth-child(3){
      border-right-color: #A4D8EC !important;
    }
    .tabel-content .el-table tr:nth-child(2) th:nth-child(6){
      border-right-color: #AFCEF0 !important;
    }
    .tabel-content .el-table tr:nth-child(2) th:nth-child(9){
      border-right-color: #F2BABA !important;
    }
    .tabel-content .el-table tr:nth-child(2) th:nth-child(11){
      border-right-color: #708D9F !important;
    }
    .tabel-content .el-table tr:nth-child(2) th:nth-child(14){
      border-right-color: #A4D8EC !important;
    }
    .tabel-content .el-table tr:nth-child(2) th:nth-child(17){
      border-right-color: #AFCEF0 !important;
    }
    .tabel-content .el-table tr:nth-child(2) th:nth-child(20){
      border-right-color: #F2BABA !important;
    }
    .tabel-content .el-table tr:nth-child(2) th:nth-child(22){
      border-right-color: #708D9F !important;
    }
    .tabel-content .el-table tr td:nth-child(1){
      border-right-color: #708D9F !important;
    }
    .tabel-content .el-table tr td:nth-child(2) {
      border-right-color: #708D9F !important;
    }
    .tabel-content .el-table tr td:nth-child(5) {
      border-right-color: #A4D8EC !important;
    }
    .tabel-content .el-table tr td:nth-child(8) {
      border-right-color: #AFCEF0 !important;
    }
    .tabel-content .el-table tr td:nth-child(11) {
      border-right-color: #F2BABA !important;
    }
    .tabel-content .el-table tr td:nth-child(13) {
      border-right-color: #708D9F !important;
    }
    .tabel-content .el-table tr td:nth-child(16) {
      border-right-color: #A4D8EC !important;
    }
    .tabel-content .el-table tr td:nth-child(19) {
      border-right-color: #AFCEF0 !important;
    }
    .tabel-content .el-table tr td:nth-child(22) {
      border-right-color: #F2BABA !important;
    }
    .tabel-content .el-table tr td:nth-child(24) {
      border-right-color: #708D9F !important;
    }
    // .tabel-content .el-table tr:nth-child(6) td:nth-child(1) {
    //   border-right: none !important;
    // }
    .tabel-content .el-table tr:last-child td:nth-child(1) {
      border-right: none !important;
    }
    .tabel-content .el-table::before {
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0px;
    }
    .el-table--border::after, .el-table--group::after {
      top: 0;
      right: 0;
      width: 0px;
      height: 100%;
    }
  }
</style>
