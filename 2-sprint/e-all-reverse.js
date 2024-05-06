class Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

function solution(node) {
  let temp = null;
  let current = node;

  while (current !== null) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev;
  }

  if (temp != null) {
    node = temp.prev;
  }

  return node;
}

function test() {
  const node3 = new Node("node3");
  const node2 = new Node("node2", node3);
  const node1 = new Node("node1", node2);
  const node0 = new Node("node0", node1);
  node1.prev = node0;
  node2.prev = node1;
  node3.prev = node2;
  const newHead = solution(node0);

  console.log(newHead)
  /*
  result is newHead === node3
  node0.prev === node1
  node1.next === node0
  node1.prev === node2
  node2.next === node1
  node2.prev === node3
  node3.next === node2
  */
}