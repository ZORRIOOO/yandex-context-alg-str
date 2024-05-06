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

// Если ответ существует, верните список из двух элементов
// Если нет - то верните пустой список
function twoSum(array, targetSum) {
  const result = [];

  // 1.
  for (let i = 0; i < array.length; i++) {
    const firstValue = array[i];

    for (let j = i + 1; j <= array.length; j++) {
      const secondValue = array[j];
      const sum = firstValue + secondValue;

      if (sum === targetSum) {
        result.push(firstValue, secondValue);

        return result;
      }
    }
  }

  return [];
}

function solve() {
  const n = readInt();
  const array = readArray();
  const targetSum = readInt();
  const ans = twoSum(array, targetSum);

  if (ans.length === 0) {
    console.log("None")
  } else {
    process.stdout.write(`${ans.join(' ')}`);
  }
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