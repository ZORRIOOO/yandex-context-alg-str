const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
  _inputLines.push(line);
});

console.log(_inputLines)

process.stdin.on('end', solve);

function readNumber() {
  return Number(_inputLines[_curLine++]);
}

function getSum(a, b) {
  return a + b;
}

function solve() {
  const a = readNumber();
  const b = readNumber();

  console.log(a, b)

  const answer = getSum(a, b);

  console.log(answer);
}