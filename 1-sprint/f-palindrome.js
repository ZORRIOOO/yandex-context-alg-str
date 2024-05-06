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

function getResult(
  text
) {
  const regex = /[^A-Za-z0-9]+/g
  const letters = text.split(" ").map((word) => word.trim().replace(regex, "").toLowerCase()).join("");
  const reversed = letters.split("").reverse().join("");

  return letters === reversed ? "True" : "False";
}

function run() {
  const text = readStr();

  const result = getResult(text);

  console.log(result);
}