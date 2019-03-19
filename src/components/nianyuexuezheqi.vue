<template>
  <div>
    <el-popover
      placement="bottom-start"
      width="320"
      height="280"
      trigger="click"
      v-model="visible"
      >
        <div class="dateContent">
          <div class="year">
            <span class="el-icon-d-arrow-left fl" @click="upperYear"></span>
            <span>{{year}}年</span>
            <span class="el-icon-d-arrow-right fr" @click="lowerYear" :class="{disabledYear : disabledYear}"></span>
          </div>
          <div class="yueList">
            <span v-for="(item, index) in yueList" :key="index" class="yueContent">
              <i :class="{disabledYue : item.disabled , ChoiceYue: item.Selection}" @click="ChoiceYue(item)">{{item.name}}</i>
              <i class="el-icon-circle-check-outline" v-if="item.icon "></i>
            </span>
          </div>
        </div>
        <el-input
        slot="reference"
        size="small"
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        :readonly='true'
        v-model="YearMonth">
    </el-input>
  </el-popover>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        YearMonth: "",
        yueList: [
          {
            name: "一月",
            disabled: true,
            icon: false,
            Selection: false,
            number: 1
          },
          {
            name: "二月",
            disabled: false,
            icon: true,
            Selection: false,
            number: 2
          },
          {
            name: "三月",
            disabled: false,
            icon: false,
            Selection: false,
            number: 3
          },
          {
            name: "四月",
            disabled: false,
            icon: false,
            Selection: false,
            number: 4
          },
          {
            name: "五月",
            disabled: false,
            icon: false,
            Selection: false,
            number: 5
          },
          {
            name: "六月",
            disabled: false,
            icon: false,
            Selection: false,
            number: 6
          },
          {
            name: "七月",
            disabled: false,
            icon: false,
            Selection: false,
            number: 7
          },
          {
            name: "八月",
            disabled: false,
            icon: false,
            Selection: false,
            number: 8
          },
          {
            name: "九月",
            disabled: false,
            icon: false,
            Selection: false,
            number: 9
          },
          {
            name: "十月",
            disabled: false,
            icon: false,
            Selection: false,
            number: 10
          },
          {
            name: "十一月",
            disabled: false,
            icon: false,
            Selection: false,
            number: 11
          },
          {
            name: "十二月",
            disabled: false,
            icon: true,
            Selection: false,
            number: 12
          }
        ],
        year: "",
        disabledYear: true,
        saveNowYear: "",
        visible: false
      };
    },
    props: ["list"],
    methods: {
      ChoiceYue(val) {
        // 改变月份
        if (val.disabled) {
          return;
        }
        this.yueList.forEach(item => {
          item.Selection = false;
        });
        val.Selection = true;
        this.visible = false;
        this.YearMonth = this.year + "年" + val.number + "月";
        this.$emit('ChoiceYue', this.year, val.number);
      },
      upperYear() {
        //上一年
        this.disabledYear = false;
        this.year--;
        this.$emit('upperYear',this.year);
      },
      lowerYear() {
        //下一年
        if (this.year == this.saveNowYear) {
          this.disabledYear = true;
          return;
        }
        this.year++;
        this.$emit('lowerYear',this.year);
      }
    },
    created() {
      this.year = new Date().getFullYear();
      this.saveNowYear = new Date().getFullYear();
    },
    watch: {
      year(newVal, oldVal) {
        if (newVal == this.saveNowYear) {
          this.disabledYear = true;
        } else {
          this.disabledYear = false;
        }
      },
      list(newVal) {
        console.log(newVal);
      },
    }
  };
</script>

<style scoped lang="scss">
  .el-input {
    width: 200px;
  }
  .dateContent {
    padding: 0px 8px;
    .year {
      height: 40px;
      line-height: 31px;
      border-bottom: solid 1px #ebeef5;
      text-align: center;
      font-size: 16px;
      font-weight: 500;
      padding: 0 5px;
      text-align: center;
      color: #606266;
      .el-icon-d-arrow-left,
      .el-icon-d-arrow-right {
        margin-top: 6px;
      }
      span:hover {
        cursor: pointer;
        color: #409eff;
      }
    }
    .yueList {
      .yueContent {
        display: inline-block;
        text-align: center;
        width: 75px;
        height: 66px;
        line-height: 33px;
        padding-top: 12px;
        position: relative;
        .el-icon-circle-check-outline {
          position: absolute;
          right: 2px;
          top: 25px;
          font-size: 12px;
          color: #00adff;
        }
      }
      i:hover {
        color: #409eff;
        cursor: pointer;
      }
    }
    .disabledYue {
      display: inline-block;
      width: 48px;
      height: 32px;
      background-color: #f5f7fa;
      color: #c0c4cc !important;
      &:hover {
        background-color: #f5f7fa;
        color: #c0c4cc;
        cursor: not-allowed !important;
      }
    }
  }
  .ChoiceYue {
    color: #409eff !important;
  }

  .disabledYear {
    color: #c0c4cc;
    cursor: not-allowed !important;
  }
</style>