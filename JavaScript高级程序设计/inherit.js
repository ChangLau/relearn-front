// 寄生组合式继承
function Parent(name, age) {
  this.name = name;
  this.age = age;
}

Parent.prototype.show = function() {
  console.log(this.name, this.age);
};

Parent.prototype.type = "Parent";

function Son(name, age, sex) {
  Parent.call(this, name, age);
  this.sex = sex;
}

var Super = function() {};
Super.prototype = Parent.prototype;
Son.prototype = new Super();

var son = new Son("liuchang", 26, "Man");
