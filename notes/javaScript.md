# javaScript

## 语言基础

### 2. 变量

### 3. 数据类型

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
* **isPrototypeOf(*Object)* :** 
