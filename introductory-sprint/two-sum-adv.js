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
function twoSum(n, array, targetSum) {
  const result = [];

  // 1.
  // const sorted = array.sort((a, b) => a - b);
  //
  // let left = 0
  // let right = n - 1;
  //
  // while (left < right) {
  //   const firstValue = sorted[left];
  //   const secondValue = sorted[right];
  //   const currentSum = firstValue + secondValue;
  //
  //   if (currentSum === targetSum) {
  //     result.push(firstValue, secondValue);
  //
  //     return result;
  //   } else if (currentSum < targetSum) {
  //     left += 1;
  //   } else {
  //     right -= 1;
  //   }
  // }

  // 2.

  const previous = new Set();

  for (const item of array) {
    const value = targetSum - item;

    if (previous.has(value)) {
      result.push(item, value);

      return result;
    } else {
      previous.add(item)
    }
  }

  return result;
}

function solve() {
  const n = readInt();
  const array = readArray();
  const targetSum = readInt();

  const ans = twoSum(n, array, targetSum);

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