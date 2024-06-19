class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Центрированный метод обхода
function print_LMR(vertex) {
  if (vertex.left !== null) {
    print_LMR(vertex.left);
  }

  console.log(vertex.value);

  if (vertex.right !== null) {
    print_LMR(vertex.right);
  }
}

function searchRange(node, left, right, range) {
  if (!node) {
    return;
  }

  if (left <= node.value && node.value <= right) {
    range.push(node.value);
  }

  if (left < node.value) {
    searchRange(node.left, left, right, range);
  }

  if (node.value < right) {
    searchRange(node.right, left, right, range);
  }
}

function printRange(root, left, right) {
  function inOrderTraversal(node) {
    if (node === null) {
      return;
    }

    inOrderTraversal(node.left);

    if (node.value >= left && node.value <= right) {
      console.log(node.value);
    }

    inOrderTraversal(node.right);
  }

  inOrderTraversal(root);
}

function test() {
  var node1 = new Node(2, null, null);
  var node2 = new Node(1, null, node1);
  var node3 = new Node(8, null, null);
  var node4 = new Node(8, null, node3);
  var node5 = new Node(9, node4, null);
  var node6 = new Node(10, node5, null);
  var node7 = new Node(5, node2, node6);
  printRange(node7, 2, 8);
  // expected output: 2 5 8 8
}

test();