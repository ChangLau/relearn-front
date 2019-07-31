// y修饰符

// 都是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。g修饰符只要剩余位置中存在匹配即可，y修饰符必须确保从剩余的第一个位置开始。

var s = "aaa_aa_a";
var r1 = /a+/g;
var r2 = /a+/y;

console.log(r1.exec(s)); // ["aaa", index: 0, input: "aaa_aa_a", groups: undefined]
console.log(r2.exec(s)); // ["aaa", index: 0, input: "aaa_aa_a", groups: undefined]

console.log(r1.exec(s)); // ["aa", index: 4, input: "aaa_aa_a", groups: undefined]
console.log(r2.exec(s)); // null
