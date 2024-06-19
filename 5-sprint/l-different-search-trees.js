const _readline = require('readline');
const _reader = _readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', (line) => _inputLines.push(line));

process.stdin.on('end', run);

function readNum() {
  return  Number(_inputLines[_curLine++]);
}

function getTreeCount(n) {
  let coefficient = 1;

  for (let i = 0; i < n; i++) {
    coefficient = coefficient * (2 * n - i) / (i + 1);
  }

  return coefficient / (n + 1);
}

function run() {
  const n = readNum();

  const result = getTreeCount(n);

  console.log(result);
}