const _readline = require('readline');

const _reader = _readline.createInterface({
  input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
  _inputLines.push(line);
});

process.stdin.on('end', run);

function getResult(numbers) {
  let evenCount = 0;
  let oddCount = 0;

  for (const number of numbers) {
    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  return numbers.length === evenCount || numbers.length === oddCount ? "WIN" : "FAIL";
}

function run() {
  const numbers = _inputLines[0].trim().split(" ").map(num => Number(num));

  const result = getResult(numbers);

  console.log(result);
}