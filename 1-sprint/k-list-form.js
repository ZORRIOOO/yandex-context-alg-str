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

function readNumArray() {
  const arr = _inputLines[_curLine].trim().split(" ").map(num => Number(num));

  _curLine++;

  return arr;
}

function getListForm(
  length,
  list,
  k
) {
  // Преподаватель
  let reversedList = list.reverse();
  let reversedListOfK = String(k).split("").reverse().map(Number);

  let [a, b] = reversedList.length > reversedListOfK.length ? [reversedList, reversedListOfK] : [reversedListOfK, reversedList];

  let carry = 0;
  for (let i = 0; i < a.length; i++) {
    let extra = i < b.length ? b[i] : 0;

    a[i] += extra + carry;
    carry = a[i] >= 10 ? 1 : 0;
    a[i] %= 10;
  }

  if (carry) {
    a.push(carry);
  }

  return a.reverse().join(" ");
  // Мое решение
  // let x = 0;
  //
  // for (let i = 0; i < length; i++) {
  //   x = x * 10 + list[i];
  // }
  //
  // let sum = x + k;
  // const listForm = [];
  //
  // while (sum > 0) {
  //   let digit = sum % 10;
  //
  //   listForm.unshift(digit);
  //   sum = Math.floor(sum / 10);
  // }
  //
  // return listForm.join(" ");
}

function run() {
  const length = readNum();
  const listForm = readNumArray();
  const k = readNum();

  const result = getListForm(length, listForm, k);

  console.log(result);
}