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

function getFactors(
  number
) {
  const factors = [];

  while (number % 2 === 0) {
    factors.push(2);

    number = number / 2;
  }

  for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
    while (number % i === 0) {
      factors.push(i);

      number = number / i;
    }
  }

  if (number > 2) {
    factors.push(number);
  }

  return factors.join(" ");
}

function run() {
  const number = readNum();

  const factors = getFactors(number);

  console.log(factors);
}