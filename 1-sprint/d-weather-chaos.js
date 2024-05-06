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

function readArray() {
  const arr = _inputLines[_curLine].trim().split(" ").map(num => Number(num));

  _curLine++;

  return arr;
}


function getResult(
  n,
  array
) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (n === 1) {
      count ++;
    }

    if (i === 0 && array[i + 1] < array[0]) {
      count++;
    }

    if (i === n - 1 && array[i - 1] < array[n - 1]) {
      count++;
    }

    if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
      count++;
    }
  }

  return count;
}

function run() {
  const days = readInt();
  const temperatures = readArray();

  const result = getResult(
    days,
    temperatures
  );

  console.log(result);
}