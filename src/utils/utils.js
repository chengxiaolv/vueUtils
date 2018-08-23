// 获取cookie    getCookie(name)
// 设置cookie    setCookie(c_name, value, expiredays)
// 删除cookie    delCookie(name)
// 获得当前年月格式时间(yyyy-mm / yyyy-mm-dd)    getNowTime()


var util = {
    /**
     * 获取cookie、
     * @param {传入的cookie名} name 
     */
    getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    },
    /**
     * 设置cookie,增加到vue实例方便全局调用
     * @param {cookie名} c_name 
     * @param {cookie值} value 
     * @param {设置时间戳} expiredays 
     */
    setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    },
    /**
     * 删除cookie
     * name  传入cookie的名字即可
     */
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    /**
     * 获得当前年月格式时间 （yyyy-mm）
     * 获得当前年月格式时间 （ yyyy-mm-dd） //放开下面的注释的时候，获取这样的时间格式
     * xx = getNowTime();  //使用方法
     */
    getNowTime() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        // var currentdate = year + seperator1 + month + seperator1 + strDate; // yyyy-mm-dd
        var currentdate = year + seperator1 + month; // yyyy-mm
        return currentdate;
    }
}

export default util;