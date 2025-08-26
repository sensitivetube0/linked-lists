class node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

function LinkedList() {
  let list = new node();
  console.log(list);
  function append(value) {
    if (list.value === null) {
      list.value = value;
      list.nextNode = new node();
    } else {
      let current = list;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.value = value;
      current.nextNode = new node();
      return list;
    }
  }
  function prepend(value) {
    let currentList = list;
    currentList = new node(value, list);
    console.log(list);
    return list;
  }
  return { append, list, prepend };
}
const listLinked = LinkedList();
listLinked.append("3");
listLinked.prepend("4");
console.log(listLinked);
