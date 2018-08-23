// 全局注册filters参考地址   https://blog.csdn.net/qq_33207292/article/details/78562314
// 使用方法  {{xxx  |  过滤器名称}}
// 首字母大写 uppercase
// 转化为 12,345,345.845金钱的格式   TransformationNumber


// 首字母大写 uppercase
export function firstOneUppercase(value) {
    if (!value) {
        return '';
    }
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
}

// 转化为 12,345,345.845  金钱的格式。
export function TransformationNumber(vaule) {
    vaule = vaule.toString();
    var num = vaule;
    num = num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    return num;
}