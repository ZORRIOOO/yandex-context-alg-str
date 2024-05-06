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

function isFourPower(
  number
) {
  if (number < 1) {
    return "False";
  }

  while (number % 4 === 0) {
    number = number / 4;
  }

  return number === 1 ? "True" : "False";
}

function run() {
  const number = readNum();

  const result = isFourPower(number);

  console.log(result);
}