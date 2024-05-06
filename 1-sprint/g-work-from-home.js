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

function readInt() {
  const n = Number(_inputLines[_curLine]);

  _curLine++;

  return n;
}

function getBinaryNumber(
  decimal
) {
  let binary = '';

  if (!!decimal) {
    while (decimal > 0) {
      binary = (decimal % 2) + binary;

      decimal = Math.floor(decimal / 2);
    }
  } else {
    return String(decimal);
  }

  return binary;
}

function run() {
  const decimalNumber = readInt();

  const binaryNumber = getBinaryNumber(decimalNumber);

  console.log(binaryNumber);
}