class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

function solution(node, elem) {
  let prev = null;
  let current = node;
  let index = 0;

  while (current !== null) {
    prev = current;

    if (current && current.value === elem) {
      return index;
    }

    current = current.next;
    index++;
  }

  return -1;
}

function test() {
  const node3 = new Node("node3");
  const node2 = new Node("node2", node3);
  const node1 = new Node("node1", node2);
  const node0 = new Node("node0", node1);
  const idx = solution(node0, "node6");

  console.log(idx)
}

test();