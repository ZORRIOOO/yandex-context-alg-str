class CNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function isBSTUtil(node, min, max) {
  if (node === null) {
    return true;
  }

  if (node.value <= min || node.value >= max) {
    return false;
  }

  return isBSTUtil(node.left, min, node.value) && isBSTUtil(node.right, node.value, max);
}

function isBinaryTreeSearch(node) {
  return isBSTUtil(node, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function solution(root) {
  return isBinaryTreeSearch(root);
}

function test() {
  var node1 = new CNode(1, null, null);
  var node2 = new CNode(4, null, null);
  var node3 = new CNode(3, node1, node2);
  var node4 = new CNode(8, null, null);
  var node5 = new CNode(5, node3, node4);

  if (solution(node5))
    console.log("Is BST");
  else
    console.log("Not a BST");

  node4.value = 5;

  if (solution(node5))
    console.log("Is BST");
  else
    console.log("Not a BST");
}

test();