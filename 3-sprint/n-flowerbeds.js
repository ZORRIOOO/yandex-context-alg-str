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

function getSegments(n) {
  const segments = [];

  for (let i = 0; i < n; i++) {
    const [start, end] = readArray();

    if (start !== undefined && end !== undefined) {
      segments.push([start, end]);
    }
  }

  return segments;
}

function getCoordinates(n, array) {
  const coordinates = [];
  const sorted = array.sort(([a], [b]) => a - b);

  let [current] = sorted;

  for (let i = 0; i < n; i++) {
    const next = sorted[i];

    if (next[0] <= current[1]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      coordinates.push([...current]);
      current = next;
    }
  }

  coordinates.push([...current]);

  return coordinates;
}

function run() {
  const n = readNum();
  const segments = getSegments(n);

  const coordinates = getCoordinates(n, segments);

  coordinates.forEach(([start, end]) => {
    console.log(start, end);
  })
}