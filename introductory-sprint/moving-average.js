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

process.stdin.on('end', solve);

function movingAverage(n, array, windowSize) {
  const result = [];

  // 1.
  // for (let start = 0; start <= array.length - windowSize; start++) {
  //   const end = start + windowSize;
  //   let current = 0;
  //
  //   for (const v of array.slice(start, end)) {
  //     current += v;
  //   }
  //
  //   const currentAvg = current / windowSize;
  //
  //   result.push(currentAvg);
  // }

  // 2.
  let currentSum = array.slice(0, windowSize).reduce((a, b) => {
    return a + b;
  }, 0);

  result.push(currentSum / windowSize);

  for (let i = 0; i < array.length - windowSize; i++) {
    currentSum -= array[i];
    currentSum += array[i + windowSize];

    const currentAvg = currentSum / windowSize;

    result.push(currentAvg)
  }

  return result;
}

function solve() {
  const n = readInt();
  const arr = readArray();
  const windowSize = readInt();

  process.stdout.write(`${movingAverage(n, arr, windowSize).join(' ')}`);
}

function readInt() {
  const n = Number(_inputLines[_curLine]);

  _curLine++;

  return n;
}

function readArray() {
  const arr = _inputLines[_curLine].trim(" ").split(" ").map(num => Number(num));

  _curLine++;

  return arr;
}