<template>
  <div>
    <input type="file" @change="importf()"/>
    <div class="table" v-if="showTable">
      <el-table
        :data="showTableList"
        border
        style="width: 100%">
        <el-table-column v-for="(item,index) in titleList" :key="index" align="center" :label="item" :prop="item">
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import XLSX from '../utils/xlsx.full.min.js'
  let wb,
      rABS = false;
  export default {
    data () {
        return{
          tableData: [],
          showTableList: [],
          titleList: [],
          showTable: false,
          height: '',
          currentPage: 1,
          total: 0,
          page: 1
        }
    },
    methods: {
      importf() { //导入
        let _this = this;
        let obj = event.currentTarget;
        console.log();
        if(obj.files[0].name.slice(obj.files[0].name.length-4) != '.xls'){
          this.$message({
              message: '请上次.xls格式文件',
              type: 'error',
              center: true,
              duration: 2000,
              showClose: false
            });
          return 
        }
        this.tableData = [];
        this.titleList = [];
        if (!obj.files) {
            return;
        }
        var f = obj.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {
            if (rABS) {
                wb = XLSX.read(btoa(fixdata(e.target.result)), { //手动转化
                    type: 'base64'
                });
            } else {
                wb = XLSX.read(e.target.result, {
                    type: 'binary'
                });
            }
            var data = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
            for(let item in data[0]){
              _this.titleList.push(item)
            }
            _this.showTable = true;
            _this.total = data.length;
            _this.tableData = data;
            if(data.length < 10){
              _this.showTableList = _this.tableData.slice(0,_this.tableData.length);
            }else{
              _this.showTableList = _this.tableData.slice(0,10);
            }
        }
        if (rABS) {
            reader.readAsArrayBuffer(f);
        } else {
            reader.readAsBinaryString(f);
        }
      },
      fixdata(data) { //文件流转BinaryStrings
        var o = "",
            l = 0,
            w = 10240;
        jsArry = [];
        for (; l < data.byteLength / w; ++l) jsArry.push(String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w))));
        return jsArry;
      },
      handleCurrentChange(val) {
        this.page = val;
        this.showTableList = this.tableData.slice((val-1)*10,val*10);
      }
    },
    mounted(){
      this.height = window.innerHeight -220;
    }
  }
</script>

<style scoped>
  .table{
    width: 95%;
    height: 70%;
    margin-left: 2%;
    margin-top: 40px;
  }
  .page{
    margin-top: 40px;
    text-align: right;
    margin-right: 58px;
  }
</style>