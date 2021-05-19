# Data-structure

## Stack

栈遵循先进后出（FILO）的原则；

新元素靠近栈顶

旧元素靠近栈底

## 队列和双端队列

队列遵循先进先出(FIFO)的原则;

队列在尾部添加新元素

从顶部移除元素

## 链表

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
      
		}
  }
}
```





