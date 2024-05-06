class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

function solution(node, idx) {
  if (idx === 0) {
    return node.next;
  }

  let prev = null;
  let current = node;
  let count = 0;

  while (current !== null && count < idx) {
    prev = current;
    current = current.next;
    count++;
  }

  if (current === null) {
    return node;
  }

  prev.next = current.next;

  return node;
}

function test() {
  const node3 = new Node("node3");
  const node2 = new Node("node2", node3);
  const node1 = new Node("node1", node2);
  const node0 = new Node("node0", node1);
  const newHead = solution(node0, 1);
  console.log(newHead.value); // результат должен быть: node0 -> node2 -> node3
}

test();
