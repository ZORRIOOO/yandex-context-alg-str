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

function readStr() {
  const n = String(_inputLines[_curLine]);

  _curLine++;

  return n;
}

function getBinarySum(
  first,
  second
) {
  const dividedFirst = first.split("");
  const dividedSecond = second.split("");

  let binary = '';
  let carry = 0;

  let i = dividedFirst.length - 1;
  let j = dividedSecond.length - 1;
  while (i >= 0 || j >= 0) {
    const bitA = i >= 0 ? parseInt(first[i]) : 0;
    const bitB = j >= 0 ? parseInt(second[j]) : 0;
    const sum = bitA + bitB + carry;

    binary = (sum % 2) + binary;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  if (carry > 0) {
    binary = carry + binary;
  }

  return binary;
}

function run() {
  const first = readStr();
  const second = readStr();

  const binarySum = getBinarySum(first, second);

  console.log(binarySum);
}