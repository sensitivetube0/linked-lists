class node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

function LinkedList() {
  let list = new node();
  function append(value) {
    if (list.value === null) {
      list.head = value;
      list.value = value;
      list.nextNode = new node();
    } else {
      let current = list;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.value = value;
      current.nextNode = new node();
    }
  }
  function prepend(value) {
    if (list.value === null) {
      list.head = value;
      list.value = value;
      list.nextNode = new node();
    } else {
      list = new node(value, list);
      delete list.nextNode.head;
      list.head = value;
    }
  }

  let count = 0;
  function size(node = list) {
    if (node.nextNode === null) {
      return count;
    }
    if (node.head === node.value) {
      count = 0;
    }
    count++;
    return size(node.nextNode);
  }
  function head() {
    if (list.value === null) {
      return list;
    }
    let headOfList = {
      head: list.head,
      value: list.value,
    };
    return headOfList;
  }
  function tail() {
    if (list.value === null) {
      return list;
    }
    let currentT = list;
    while (currentT.nextNode.nextNode !== null) {
      currentT = currentT.nextNode;
    }
    return currentT;
  }
  function at(value) {
    let currentA = list;
    for (let i = 1; i <= value; i++) {
      if (!currentA.nextNode) {
        return "not that many items in list!";
      }
      currentA = currentA.nextNode;
    }
    return currentA;
  }
  function pop() {
    if (list.value === null) {
      return "cant pop an empty list";
    }
    let currentP = list;
    while (currentP.nextNode.nextNode.nextNode !== null) {
      currentP = currentP.nextNode;
    }
    currentP.nextNode = new node();
  }
  function getList() {
    return list;
  }
  function contains(value, link = list) {
    if (link.value === value) {
      return true;
    } else if (link.nextNode === null) {
      return false;
    }
    return contains(value, link.nextNode);
  }
  let countF = 0;
  function find(value, lick = list) {
    countF++;
    if (lick.value === value) {
      return countF;
    } else if (lick.nextNode === null) {
      return "No entered value in linked list";
    }
    return find(value, lick.nextNode);
  }

  let striarr = [];
  function toString(lic = list) {
    if (lic.value === null) {
      striarr.push("null");
      return striarr.join(") -> (");
    }
    striarr.push(lic.value);
    lic = lic.nextNode;
    return toString(lic);
  }
  function removeAt(index) {
    let currentR = list;
    if (index === 0) {
      return "can`t remove the head!";
    } else if (index === 1) {
      //do nothing
    } else {
      for (let i = 2; i <= index; i++) {
        currentR = currentR.nextNode;
        if (currentR.value === null) {
          return "cant remove the null object";
        }
      }
    }
    console.log(currentR);
    currentR.nextNode = currentR.nextNode.nextNode;
  }
  return {
    append,
    prepend,
    size,
    getList,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    removeAt,
  };
}
const listLinked = LinkedList();
listLinked.prepend("0");
listLinked.append("1");
listLinked.append("2");
listLinked.append("3");

console.log(listLinked.getList());
listLinked.removeAt(2);
console.log(listLinked.toString());
