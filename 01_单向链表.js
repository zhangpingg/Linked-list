// 测试方式
// 1) node 01_单向链表
// 2) 放到html中的script中


// Node 节点
function Node(element) {
  this.element = element;   //当前节点的元素
  this.next = null;         //下一个节点链接
}

// Linked-list 链表类
function LList() {
  this.head = new Node('head');       // 用head属性，保存链表的头节点
  this.find = find;                   // 查找节点
  this.insert = insert;               // 插入节点
  this.remove = remove;               // 删除节点
  this.findPrev = findPrev;           // 查找前一个节点
  this.display = display;             // 显示链表
}
// 插入节点
function insert(newElement, item) {
  var newNode = new Node(newElement);   // 将新元素转换为Node节点
  var currNode = this.find(item);       // 找到要插入节点的位置（前驱）
  newNode.next = currNode.next;         // 前驱的next赋值给新节点的next（与后面节点建立联系）
  currNode.next = newNode;              // 新节点赋值给前驱的next（与前面节点建立联系）
}
// 查找给定节点
function find(item) {
  var currNode = this.head;             // 创建一个新节点，将链表的头节点赋给这个新创建的节点
  while (currNode.element != item) {    // 循环，若当前节点的 element 属性和我们要找的信息不符，
    currNode = currNode.next;           // 就将当前节点移动到下一个节点
  }
  return currNode;                      // 若找到，则返回包含该数据的节点，否则，返回null
}
// 显示链表元素
function display() {
  let _result = []
  var currNode = this.head;
  while (!(currNode.next == null)) {
    _result.push(currNode.next.element)
    currNode = currNode.next;
  }
  return _result
}
// 查找带删除节点的前一个节点 (判断下一个节点是否是要找的节点)
function findPrev(item) {
  var currNode = this.head;
  while (!(currNode.next == null) && (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
}
//删除节点
function remove(item) {
  var prevNode = this.findPrev(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}

// 示例
var fruits = new LList();
fruits.insert('Apple', 'head');
fruits.insert('Banana', 'Apple');
fruits.insert('Pear', 'Banana');
fruits.insert('Grape', 'Pear');
fruits.remove('Banana');
console.log(fruits.display())                   // ['Apple', 'Pear', 'Grape']



