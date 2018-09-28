// 引入mockjs
import Mock from 'mockjs';
// 获取 mock.Random 对象
const Random = Mock.Random;


// mock一组数据
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(2, 5), //  Random.csentence( min, max )  随机生成2到5个文字。
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            // date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
            date: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
    return {
        articles: articles
    }
};
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);



// mock组件使用
// Mock.mock( url, post/get , 返回的数据)；  这里没有定义是 post 还是 get   所以调用的时候，get或者post调用都是可以的。
Mock.mock('/mock/realColumn', {
    "string|1-10": "★", // 'name|min-max': string    通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max。
    "string2|3": "★★★", //'name|num': string        通过重复 string2 生成一个字符串，重复次数等于 count。

    "number|1-100": 100, // 'name|min-max': number    生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。(id|1-100": 100  可以这样用，用来随机生成id)
    "number2|+1": 202, // 'name|+1': number            属性值自动加 1，初始值为 number。（通常配合数组使用）
    "number3|1-100.1-10": 1, //'name|min-max.dmin-dmax': number    生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位。
    'number3_1|123.1-10': 1, //保留  1到10位小数
    "number3_2|123.3": 1, //保留  3位小数

    "boolean|1": true, //'name|1': boolean
    "boolean2|1-2": true, //随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。 
    "boolean3|1-8": true, //随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。  为true的看你性为 1/9 

    "object|2": { //'name|count': object   从属性值 object 中随机选取 count 个属性。
        "310000": "上海市",
        "320000": "江苏省",
        "330000": "浙江省",
        "340000": "安徽省"
    },
    "object2|2-4": { //从属性值 object 中随机选取 min 到 max 个属性。
        "110000": "北京市",
        "120000": "天津市",
        "130000": "河北省",
        "140000": "山西省"
    },

    "array|1": [ //'name|1': array  从属性值 array 中随机选取 1 个元素，作为最终值。
        "AMD",
        "CMD",
        "UMD"
    ],
    "array2|+1": [ //从属性值 array 中顺序选取 1 个元素，作为最终值。
        "AMD",
        "CMD",
        "UMD"
    ],
    "array3|1-10": [{ //通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max。
        "name|+1": [
            "Hello",
            "Mock.js",
            "!"
        ]
    }],
    "array4|1-10": [ //通过重复属性值 array 生成一个新数组，重复次数为 （最少min 最多max）。
        "Mock.js"
    ],
    "array5|1-10": [ //通过重复属性值 array 生成一个新数组，重复次数为 （最少min 最多max）。
        "Hello",
        "Mock.js",
        "!"
    ],
    "array6|3": [ //通过重复属性值 array 生成一个新数组，重复次数为 count。  与array1的区别，注意。
        "Hello",
        "Mock.js",
        "!"
    ],

    'foo': 'Syntax Demo',
    'name': function() { //执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。
        return this.foo
    },

    "foo": "Hello", //Absolute Path  绝对路径
    "nested": {
        "a": {
            "b": {
                "c": "Mock.js"
            }
        }
    },
    "absolutePath": "@/foo @/nested/a/b/c",

    "foo": "Hello", //Relative Path  相对路径
    "nested": {
        "a": {
            "b": {
                "c": "Mock.js"
            }
        }
    },
    "relativePath": {
        "a": {
            "b": {
                "c": "@../../../foo @../../../nested/a/b/c"
            }
        }
    }
});


// mock一组数据
const mockRandom = function() {
    return {
        boolean: Random.boolean(), //随机生成一个 boolean 值。
        boolean2: Random.boolean(1, 9, true), //Random.boolean( min?, max?, current? )   1/9之可能是 true

        natural: Random.natural(), //随机生成16位自然数。
        natural2: Random.natural(10000),
        natural3: Random.natural(60, 100), //随机生成 最小min 最大max 的一个数。

        integer: Random.integer(), //随机生成16位正负数。
        integer1: Random.integer(10000),
        integer2: Random.integer(60, 100), //随机生成 最小min 最大max 的一个数。

        float: Random.float(), //随机生成 数值（整数，浮点数，正数 、负数）
        float1: Random.float(0),
        float2: Random.float(60, 100), //随机生成 最小min 到 最大max 的浮点数（浮点个数随机）。
        float3: Random.float(60, 100, 3), //随机生成 最小min 到 最大max 的浮点数（最少n个浮点数）。
        float4: Random.float(60, 100, 3, 5), //随机生成 最小min 到 最大max 的浮点数（最少n个,最多m个 浮点数）。

        character: Random.character(), //Random.character( pool? )   随机生成一个字符
        character1: Random.character('lower'), //随机生成一个小写字母
        character2: Random.character('upper'), //随机生成一个大写字母
        character3: Random.character('number'), // 随机生成一个数值
        character4: Random.character('symbol'), //随机生成一个特殊符号

        string: Random.string(), //随机生成随机个字符的字符串
        string1: Random.string(5), //随机生成5个字符的字符串
        string2: Random.string('lower', 5), //随机生成5个小写字母的字符串
        string3: Random.string('upper', 5), //随机生成5个大写字母的字符串
        string4: Random.string('number', 5), //随机生成5个数值的字符串
        string5: Random.string('symbol', 5), //随机生成5个特殊的字符串
        string6: Random.string('aeiou', 5),
        string7: Random.string(7, 10), //随机生成min到max个字符的字符串
        // Random.string('lower', 1, 3) 以上可以同理可得 随机生成n到m个相应得字符。
        // Random.string('upper', 1, 3)
        // Random.string('number', 1, 3)
        // Random.string('symbol', 1, 3)
        // Random.string('aeiou', 1, 3)

        range: Random.range(10), // Random.range(start?, stop, step?)     生成 [0,1,2,3,4,5,6,7,8,9]
        range1: Random.range(3, 7), // 截取 从3开始截取到6结束  [3,4,5,6]
        range2: Random.range(1, 10, 2), // 从1开始截取 到9结束   以n步跳着截取。  [1,3,5,7,9]
        range3: Random.range(1, 10, 3), // 从1开始截取 到9结束   以n步跳着截取。  [1,4,7]



    }
};
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('mockRandom', 'get', mockRandom);