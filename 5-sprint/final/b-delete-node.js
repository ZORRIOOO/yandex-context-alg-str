class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function remove(node, key) {
  if (!node) {
    return null;
  }

  if (node.value === key) {
    if (node.left === null && node.right === null) {
      return null;
    }

    if (node.left === null) {
      return node.right;
    }

    if (node.right === null) {
      return node.left;
    }

    let temporary = node.right;

    while (!temporary && temporary.left === null) {
      temporary = temporary.left;
    }

    node.value = temporary.value;
    node.right = remove(node.right, temporary.value);
  } else if (node.value > key) {
    node.left = remove(node.left, key);

    return node;
  } else {
    node.right = remove(node.right, key);

    return node;
  }

  return remove(node, key);
}

function test() {
  var node1 = new Node(2, null, null);
  var node2 = new Node(3, node1, null);
  var node3 = new Node(1, null, node2);
  var node4 = new Node(6, null, null);
  var node5 = new Node(8, node4, null);
  var node6 = new Node(10, node5, null);
  var node7 = new Node(5, node3, node6);
  var newHead = remove(node7, 10);
  console.assert(newHead.value === 5);
  console.assert(newHead.right === node5);
  console.assert(newHead.right.value === 8);
}

test();