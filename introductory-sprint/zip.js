const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
  _inputLines.push(line);
});

process.stdin.on('end', solve);

function zip(a, b, n) {
  const result = [];

  for (let i = 0; i <= n * 2; i++) {
    const first = a[i];
    const second = b[i];

    result.push(first, second);
  }

  return result;
}

function solve() {
  const n = readInt();
  const a = readArray();
  const b = readArray();

  process.stdout.write(`${zip(a, b, n).join(' ')}`);
}

function readInt() {
  const n = Number(_inputLines[_curLine]);

  _curLine++;

  return n;
}

function readArray() {
  const arr = _inputLines[_curLine].trim().split(" ").map(num => Number(num));

  _curLine++;

  return arr;
}