var str = "Hello World";

// 判断一个字符串是否包含在另一个字符串中
str.indexOf("Hello"); // 0
str.startsWith("Hello"); // true
str.endsWith("!"); // true
str.includes("o"); // true

// 原字符串重复n次
str.repeat(3); // "Hello WorldHello WorldHello World"

// 字符串补全
str.padStart(20, "www.coffeecola.cn"); // "www.coffeHello World"
str.padEnd(20, "www.coffeecola.cn"); // "Hello Worldwww.coffe"

var str = '   abc   '
str.trim() // "abc"
str.trimStart() // "abc   "
str.trimEnd() // "   abc"

// 字符串的正则方法
// match() replacd() search() split()