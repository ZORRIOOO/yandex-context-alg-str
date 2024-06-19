class CNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findResult(result, root, a) {
  const n = result.length;

  if (root === null) {
    return;
  }

  if (a === n) {
    result.push(root.value);
  } else {
    result[a] =  Math.max(result[a], root.value);
  }

  findResult(result, root.left, a + 1);
  findResult(result, root.right, a + 1);
}

function solution(root) {
  const result = [];

  findResult(result, root, 0);

  return Math.max(...result);
}

function test() {
  let node1 = new CNode(1);
  let node2 = new CNode(-5);
  let node3 = new CNode(3);
  node3.left = node1;
  node3.right = node2;
  let node4 = new CNode(2);
  node4.left = node3;

  console.assert(solution(node4) === 3);
}

test();