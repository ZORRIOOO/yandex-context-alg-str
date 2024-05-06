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

function readArray() {
  const arr = _inputLines[_curLine].trim().split(" ").map(num => Number(num));

  _curLine++;

  return arr;
}

function getHappyChildren(n, children, m, sizes) {
  let happyChildren = 0;
  let index = 0;

  children.sort((a, b) => a - b);
  sizes.sort((a, b) => a - b);

  for (let i = 0; i < n && index < m; i++) {
    while (index < m && children[i] > sizes[index]) {
      index++;
    }

    if (index < m) {
      happyChildren++;
      index++;
    }
  }

  return happyChildren;
}

function run() {
  const n = readNum();
  const children = readArray();
  const m = readNum();
  const sizes = readArray();

  const happyChildren = getHappyChildren(n, children, m, sizes);

  console.log(happyChildren)
}