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

function bubbleSort(array, n) {
  const sortedSteps = [];

  for (let i = 0; i < n - 1; i++) {
    let f = 0;
    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        f = 1;
      }
    }

    if (f === 0) {
      break;
    }

    if (f > 0) {
      sortedSteps.push(array.slice());
    }
  }

  if (sortedSteps.length === 0) {
    sortedSteps.push(array);
  }

  return sortedSteps;
}

function run() {
  const number = readNum();
  const array = readArray();

  const sortedSteps = bubbleSort(array, number);

  sortedSteps.forEach((sortedArray) => {
    console.log(sortedArray.join(" "));
  })
}