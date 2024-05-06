class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

function solution(node) {
  const valueNode = node.value;

  if (valueNode) {
    console.log(node.value)
  }

  const nextNode = node.next;

  if (nextNode) {
    solution(nextNode);
  }
}

function run() {
  const node = new Node();

  solution(node);
}

run();