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

function readStr() {
  const n = String(_inputLines[_curLine]);

  _curLine++;

  return n;
}

function getResult(
  l,
  text
) {
  const words = text.split(" ");
  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

function run() {
  const length = readInt();
  const words = readStr();

  const result = getResult(
    length,
    words
  );

  console.log(result);
  console.log(result.length);
}