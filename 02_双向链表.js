// Node 节点类
function Node(element) {
  this.element = element;   // 当前节点的元素
  this.next = null;         // 下一个节点链接
  this.previous = null;     // 上一个节点链接
}

// Linked-list 链表类
function LList() {
  this.head = new Node('head');       // 用head属性，保存链表的头节点
  this.find = find;                   // 查找节点
  this.findLast = findLast;           // 查找最后一个元素
  this.insert = insert;               // 插入节点
  this.remove = remove;               // 删除节点
  this.display = display;             // 显示链表
  this.dispReverse = dispReverse;     // 反向显示链表
}
// 查找给定节点
function find(item) {
  var currNode = this.head;             // 创建一个新节点，将链表的头节点赋给这个新创建的节点
  while (currNode.element != item) {    // 循环，若当前节点的 element 属性和我们要找的信息不符，
    currNode = currNode.next;           // 就将当前节点移动到下一个节点
  }
  return currNode;                      // 若找到，则返回包含该数据的节点，否则，返回null
}
//查找最后一个元素
function findLast () {
  var currNode = this.head;
  while ( !( currNode.next == null )){
      currNode = currNode.next;
  }
  return currNode;
}
// 插入节点
function insert(newElement, item) {
  var newNode = new Node(newElement);   // 将新元素转换为Node节点
  var currNode = this.find(item);       // 找到要插入节点的位置（前驱）
  newNode.next = currNode.next;         // 前驱的next赋值给新节点的next（与后面节点建立联系）
  newNode.previous = currNode;          // 设置新节点的 previous
  currNode.next = newNode;              // 新节点赋值给前驱的next（与前面节点建立联系）
}
// 删除节点
function remove(item) {
  var currNode = this.find(item);
  if (!(currNode.next == null)) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
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
// 反向显示链表元素
function dispReverse () {
  let _result = []
  var currNode = this.findLast();
  while ( !( currNode.previous == null )){
      _result.push(currNode.element)
      currNode = currNode.previous;
  }
  return _result
}


// 示例
var fruits = new LList();
fruits.insert('水果1', 'head');
fruits.insert('水果2', '水果1');
fruits.insert('水果3', '水果2');
fruits.insert('水果4', '水果3');
fruits.remove('水果2');
console.log(fruits.display())                   // [ '水果1', '水果3', '水果4' ]
console.log(fruits.dispReverse())               // [ '水果4', '水果3', '水果1' ]



