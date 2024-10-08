class CNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getHeight(root) {
  if (root === null) {
    return 0;
  }

  const leftHeight = getHeight(root.left);

  if (leftHeight === -1) {
    return -1;
  }

  const rightHeight = getHeight(root.right);

  if (rightHeight === -1) {
    return -1;
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}

function solution(root) {
  if (root === null) {
    return true;
  }

  let leftHeight = getHeight(root.left)
  let rightHeight = getHeight(root.right)

  return !!(Math.abs(leftHeight - rightHeight) <= 1 &&
    solution(root.left) === true && solution(root.right) === true);
}

function test() {
  var node1 = new CNode(1);
  var node2 = new CNode(-5);
  var node3 = new CNode(3);
  node3.left = node1;
  node3.right = node2;
  var node4 = new CNode(10);
  var node5 = new CNode(2);
  node5.left = node3;
  node5.right = node4;
  console.assert(solution(node5));
}

test();