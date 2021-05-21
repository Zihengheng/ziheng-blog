# javaScript

## 语言基础

### 3. 变量

### 4. 数据类型

**6**种简单数据类型：Undefined, Null, Boolean, Number, String, Symbol

**1**种复杂数据类型：Object

#### 3.1 typeof()

返回：

- Undefined --> 为定义
- Boolean -->布尔值
- string -->字符串
- Number -->数值
- object -->对象（而不是函数）或null
- Function -->函数
- Symbol -->符号

#### 3.2 Undefined

使用var/let 声明了变量但没有初始化时，就相当于给变量赋值了undefined

Undefined 不等于 未定义变量

#### 3.3 Null

逻辑上，null表示一个空对象的指针

null和undefined表面上相等

#### 3.4 Boolean

两个字面值：true，false

Boolean（）转型函数

#### 3.5 Number

NaN --> 不是数值

isNaN() --> NaN 返回true，可以转换为数值--> false

##### 数值转换：

非数值-->数值：

* Number()
  * 可用于任何数值类型
* parseInt()
  * 字符串转数值
* parseFloat()
  * 字符串转数值

#### 3.6 String

##### 1）转换为字符串：

* toString()
* String()
  * 如果值有toString方法，则调用该方法并返回结果
  * 值是null， 返回null
  * 值是undefined, 返回undefined

##### 2）模版字面量

保留换行字符

```java
let pageHTML = `
<div>
  <a href="#">
    <span>Jake</span>
  </a>
</div>`
```

##### 3）字符串插值

```java
let value = 5;
let component = 'second';
let a = `${ value } to the ${ exponent } power is ${ value * value }`
```

##### 4）模版字面量标签函数

##### 5）原始字符串

#### 3.7 Symbol()

Symbol()是原始值，且符号实例是唯一的、不可变的。

Symbol（）的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。

```javascript
let sym = symbol();
```

Symbol()没有字面量语法

##### 1）全局符号注册表

在全局符号注册表中创建并复用：

```javascript
let fooGlobalSym = Symbol.for("foo");
```

查询全局注册表：Symbol.keyFor()

```javascript
let s = Symbol.for("foo");
let rst = Symbol.keyFor(s);
//s = foo;
```

##### 2）符号作为属性

##### 3）常用内置符号

#### 3.8 Object类型

创建对象:

```javascript
let o = new Object();
```

每个Object实例的属性和方法：

* **Constructor:**用于创建当前对象的函数
* **hasOwnProperty(*propertyName*):**用于判断当前的实例（Object）上是否存在给定的属性。要检查的属性必须是字符串或符号
* **isPrototypeOf(*Object)* :** 判断当前对象是否为另一个对象的原型
* propertyIsEnumerable(propertyName)
* toLocaleString():
* toString()
* valueOf()

### 5. 操作符

#### 条件操作符

```javascript
 variable = boolean_expression ? true_value : false_value;
//excp
let max = (num1 > num2) ? num1: num2;
```

##### 逗号操作符

一条语句中执行多个操作

```javascript
let num1=1, num2 = 2, num3 = 9;
```

### 6. 语句

#### 1）if

if (confition) statement1 else statement2

#### 2）do-while

do{	statement	}

While (expression);

#### 3）while

```javascript
let i = 0 ;
while (i < 10){
  i += 2;
}
```

#### 4）for

```javascript
let count = 10;
for (let i = 0; i < count; i++){
	console.log(i);
}
```

#### 5）for in

for (property in expression ) statement

枚举对象中的非符号键属性

#### 6） for of

遍历可迭代对象的元素：

for (property of expression ) statement

#### 7）标签语句

#### 8）brek & continue

#### 9）with

#### 10）switch

```javascript
switch (i){
	case 25:
	   //pass
	case 35:
	  console.log("25 or 35");
    break;
  default:
    console.log("other");
}
```



### 7. function

## 变量，作用域与内存

### 1）原始值与引用值

**原始值：**

* Undefined, null, Boolean, Number, String, Symbol

* visit by value
* **执行赋值操作**时，原始值会被复制到新变量的位置。复制后两个值可以独立使用，互不干扰。

**引用值：**

* visit by reference

* 保存在内存中的对象

* 拥有动态属性

  ```javascript
  let person = new Object();
  person.name = "Tom";
  console.log(person.name)  //Tom
  ```

* **执行赋值**操作时，复制的是引用变量的指针；复制后两个变量实际指向的是同一个对象，因此一个对象上的变化会在另一个对象上反映出来

**传递参数**  

* 原始值同原始值复制
* 引用值同引用值复制

**确定类型**

instanceof 可以用来确定对象的类型（Arrary, RegExp.etc）

result = variable instanceof constructor

### 3）执行上下文与作用域

## 基本引用类型

## 集合引用类型

### 4. Map

使用new关键字和map构造函数可以创造一个空映射：

```javascript
const m = new map();
//创建的同时初始化
const m1 = new map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"]
]);
```

初始化之后，可以使用set()方法添加键值对；

可以使用get()和has()进行查询；

可以通过size属性获取映射中键值对的数量；

可以使用delete() 和 clear() 删除值；

