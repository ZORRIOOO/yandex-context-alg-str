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

function generateLetterCombinations(combinations, numbers, combination = "", index = 0) {
  const keyboardMap = new Map()
    .set("2", "abc")
    .set("3", "def")
    .set("4", "ghi")
    .set("5", "jkl")
    .set("6", "mno")
    .set("7", "pqrs")
    .set("8", "tuv")
    .set("9", "wxyz");

  if (index === numbers.length) {
    combinations.push(combination);

    return;
  }

  const number = numbers[index];

  for (const letter of keyboardMap.get(number)) {
    generateLetterCombinations(combinations, numbers, combination + letter, index + 1);
  }

  return combinations;
}

function getLetterCombinations(n) {
  const numbers = n.split("");
  const combinations = [];

  return generateLetterCombinations(combinations, numbers);
}

function run() {
  const n = readStr();

  const combinations = getLetterCombinations(n);

  console.log(combinations.join(" "));
}