{ /* <el-input v-model="item.data.rangeLowerBound" placeholder="暂无"  @keyup.native="ruleNumber()"></el-input> */ }
// 在vue中监听键盘事件来限制 input输入框的输入值。

function ruleNumber(newValue, index) {
    var oldValue = newValue.replace(/[^\d]/g, ''); //设置输入限制 值允许为正整数。
    var oldValue = newValue.replace(/[^\-?\d.]/g, ''); //设置输入限制 值允许为整数和负数和浮点数
    this.$set(this.data3[index].data, 'default', oldValue); //设置对象属性的时候，用$set来设置。
}