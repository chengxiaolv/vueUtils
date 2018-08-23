// 全局注册filters参考地址   https://blog.csdn.net/qq_33207292/article/details/78562314
// 使用方法  {{xxx  |  过滤器名称}}
// 首字母大写 uppercase


// 首字母大写 uppercase
export function firstOneUppercase(value) {
    if (!value) {
        return '';
    }
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
}