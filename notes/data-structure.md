# Data-structure

## 1. Stack

栈遵循先进后出（FILO）的原则；

新元素靠近栈顶

旧元素靠近栈底

## 2. 队列和双端队列

队列遵循先进先出(FIFO)的原则;

队列在尾部添加新元素

从顶部移除元素

## 3. 链表

![linked-list](https://gitee.com/zihengheng/img-bed/raw/master/%20images/linked_list.png) 

链表中的每个元素:一个存储元素本身的节点+ 指向下一个元素的引用

访问链表中的元素：从表头开始迭代链表，直到找到所需的元素

##### 实现一个链表

```javascript
export class Node{
	constructor (element){
	     this.element = element;
	     this.next = null;
     }
}
```

**链表方法：**

* Push(element)：push
* Insert(element, position)
* getElementAt(index)
* Remove(element)
* indexOf(element)
* removeAt(position)：从特定位置移除元素
* isEmpty()
* Size()
* toString()

##### 1. 向链表尾部添加元素

场景1:链表为空，添加表头

场景2:链表不为空，追加尾部元素

```javascript
push(element){
  const node = new Node(element);
  let cur;
  if(this.head==null){
    this.head = node;
	}
  else{
    cur = this.head;
    while(cur.next!= null){
      cur = cur.next;
    }
    cur.next = node;
	}
  this.count++;  //链表长度+1
}
```

##### 2. 从链表中移除元素

从特定位置移除元素

```javascript
removeAt(index){
  //检查边界值
  if (index >= 0 && index < this.count){
    let cur = this.head;
    if (index == 0){
      this.head = cur.next;
		}
    else{
      let prev;
      for (let i = 0; i < index; i++){
					prev = cur;
          cur = cur.next;
      }
          prev.next = cur.next;
    }
    this.count--;
    return cur.element;
  }
  return -1;
}
```

##### 3. 迭代链表直到目标位置

```javascript
getElementAt(index){
	if(index >= 0 && index < this.count){
    let cur = this.head;
    for (let i=0; i < index && cur != null ; i++){
      	cur = cur.next;	
		}
    return cur
	}
  return -1
}
```

##### 4. 在任意位置插入元素

```javascript
insert(element,index){
  if(index <= 0 && index < this.count){
    const node = new Node(element);
    if (index==0){
      //head
      let cur = this.head;
      node.next = cur;
      this.head = node;
		}
    else{
      const prev = this.getElementAt(index - 1);
      const cur = prev.next;
      node.next = cur;
      prev.next = node;	
    }
    this.count++;
    return true;
}
  return false;
}
```

## 4. 集合

集合是由一组无序且唯一的项组成的

## 5. 字典和散列表

### 字典

字典以【键，值】的方式来存储元素

### 散列表

* 由数据项的值来确定其存放的位置
* hash table 是一种数据集，其中数据项的存储方式尤其有利于将来快速的查找定位
* 散列表的每一个存储位置成为slot（槽），可以用来保存数据项，有唯一的名称
* **散列函数（hash function）**：实现从数据项到存储名称的转换
  * 接收变量：数据项
  * 返回值：存储名称（slot name）
  * 常用：求余数   54%11 = 10 ---> slot 10 
* **冲突（collision）**  

##### 完美散列函数

* 完美散列函数：能把每一个数据项映射到不同的槽中，对于经常变动的数据项，很难实现
* 好的散列函数的特性：冲突最少、计算难度低、充分分散数据项（节约空间）
* 完美散列函数用于数据一致性校验
* 散列函数设计：
  * 求余法
  * 平方取中法
  * 非数项：每个字符的ASCII码相加 （对所有变位词返回相同的散列值，可以把位置作为权重因子）

##### 冲突解决方案

* 一种方法：为冲突的数据项**再找一个**空槽来保存 --> 开放地址（open addressing）
* **向后**寻找空槽 --> open addressing 中的 linear probing (线性探测)
* Chaining: 槽扩展为容纳数据项集合

## 6. 递归

直接调用自身的方法或函数

每个递归必须有一个**停止点** ，以防止无限递归

##### 1）阶乘

```javascript
//n的阶乘
var factorialFun  = function(n){
    if(n ==1 || n==0){
        return 1;
    }
    else{
        return n*factorialFun(n-1);
    }
}
```

##### 2）斐波那契数列

```javascript
function fibonacci(n){
    if(n==0){
        return 0;
    }
   if (n==1 || n==2){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
```

## 7. 树

### 1）树的结构

![ds-tree](https://gitee.com/zihengheng/img-bed/raw/master/%20images/ds_tree.png)

**节点：node**

**边：edge**

根结点：root

二叉树：二叉树中节点最多只能有两个子节点

### 2）二叉搜索树

二叉搜索树（BST）是二叉树的一种，但是只允许在左侧节点存储（比父节点）小的值，在右侧节点存储（比父节点）大的值。

##### 2.1 实现BinarySearchTree

```javascript
export class Node{
		constructor(key){
				this.key = key;
				this.left = null;
				this.right = null;
		}
}
```

![bst](https://gitee.com/zihengheng/img-bed/raw/master/%20images/bst-tree.png)

##### 2.2 向二叉搜索树中插入一个键

```

```

1. 验证插入的节点是否为根节点
2. 找到插入新节点的位置
