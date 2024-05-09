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

function readStr() {
  const str = String(_inputLines[_curLine]);

  _curLine++;

  return str;
}

function getInterestGroups(n) {
  const interestGroups = [];

  for (let i = 0; i < n; i++) {
    const interestGroup = readStr();

    if (interestGroup) {
      interestGroups.push(interestGroup);
    }
  }

  return interestGroups;
}

function getListOfInterests(n, array) {
  const map = new Map();

  for (let i = 0; i < n; i++) {
    const value = array[i];
    const hash = value.split("").reduce((sum, a) => sum + a, 0);

    map.set(hash, value);
  }

  return Array.from(map, ([_key, value]) => value);
}

function run() {
  const n = readNum();
  const interestGroups = getInterestGroups(n);

  const interests = getListOfInterests(n, interestGroups);

  interests.forEach((interest) => {
    console.log(interest);
  })
}