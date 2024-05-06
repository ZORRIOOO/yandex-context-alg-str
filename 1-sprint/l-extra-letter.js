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

function getExtraLetter(
  s,
  t
) {
  const charCountS = {};
  const charCountT = {};

  for (let char of s) {
    charCountS[char] = (charCountS[char] || 0) + 1;
  }

  for (let char of t) {
    charCountT[char] = (charCountT[char] || 0) + 1;
  }

  for (let char in charCountT) {
    if (charCountT[char] > (charCountS[char] || 0)) {
      return char;
    }
  }

  return "";
  // let result = 0;
  //
  // for (const char of s + t) {
  //   result = result ^ char.charCodeAt(0) ;
  // }
  //
  // return String.fromCharCode(result);
}

function run() {
  const s = readStr();
  const t = readStr();

  const result = getExtraLetter(s, t);

  console.log(result);
}