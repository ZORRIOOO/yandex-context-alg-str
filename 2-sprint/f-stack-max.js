const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
  _inputLines.push(line);
});

process.stdin.on('end', run);

function readNum() {
  const n = Number(_inputLines[_curLine]);

  _curLine++;

  return n;
}

function readStr() {
  const n = String(_inputLines[_curLine]);

  _curLine++;

  return n;
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class StackMax {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value)
  }

  pop() {
    if (this.stack.length === 0) {
      return "error";
    }

    this.stack.pop();

    return "";
  }

  getMax() {
    if (this.stack.length === 0) {
      return "None";
    }

    return Math.max(...this.stack);
  }
}

function getLinkedList(n) {
  const value = readStr();
  let headNode = new Node(value)
  let current = headNode;

  for (let i = 1; i < n; i++) {
    const newValue = readStr();
    const newNode = new Node(newValue);

    current.next = newNode;
    current = newNode;
  }

  return headNode;
}

function getResult(
  node
) {
  const results = [];
  let stask = new StackMax()

  let current = node;

  while (current !== null) {
    if (current.value.includes("push")) {
      const [_command, value] = current.value.split(" ");

      stask.push(Number(value));
    }

    if (current.value.includes("pop")) {
      const value = stask.pop();

      if (value) {
        results.push(value);
      }
    }

    if (current.value.includes("get_max")) {
      const value = stask.getMax();

      results.push(value)
    }

    current = current.next;
  }

  return results;
}

function run() {
  const n = readNum();
  const linkedList = getLinkedList(n);

  const result = getResult(linkedList);

  result.forEach((r) => {
    console.log(r)
  })
}