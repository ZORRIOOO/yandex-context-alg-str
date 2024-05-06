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

function compare(a, b) {
  const first = a.toString() + b.toString();
  const second = b.toString() + a.toString();

  return Number(second) - Number(first);
}

function getBiggestNumber(n, array) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (compare(array[j], array[j + 1]) > 0) {
        const item = array[j];

        array[j] = array[j + 1];
        array[j + 1] = item;
      }
    }
  }

  return array.join("");
}

function run() {
  const n = readNum();
  const numbers = readArray();

  const biggestNumber = getBiggestNumber(n, numbers);

  console.log(biggestNumber);
}