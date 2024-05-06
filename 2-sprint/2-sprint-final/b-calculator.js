// Комментарий:
/*
-- ПРИНЦИП РАБОТЫ --
Мое решение производит вычисление выражений в обратной польской записи с помощью стека.
Выражение разбивается на токены (числа и операторы), которые последовательно обрабатываются.
Если токен является числом, он добавляется в стек. Если токен — оператор, из стека извлекаются два числа,
над которыми выполняется операция, результат помещается обратно в стек. После обработки всех токенов в стеке остается
одно число. Это будет итоговый результат вычисления всех выражений.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Корректность работы алгоритма следует принципу обратной польской записи: порядок операций определяется явно,
что исключает недостоверность и гарантирует верность вычислений. Последовательность операций обрабатывается
в том порядке, в котором они расположены в записи. Таким образом, результат каждого выражения совпадает с результатом,
полученным при использовании стандартного порядка математических операций.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Временная сложность алгоритма зависит от количества токенов в выражении. Каждый токен обрабатывается за постоянное время,
исходя из его типа (число или оператор). Поскольку каждый токен обрабатывается за O(1),
общая временная сложность алгоритма составляет O(N), где N — количество токенов в выражении.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Пространственная сложность зависит от количества токенов и размера стека.
Поскольку в стеке хранятся числа и результаты операций, пространственная сложность составляет O(N),
где N — количество токенов в выражении.
*/

// Отчет: https://contest.yandex.ru/contest/22781/run-report/111954558/

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

class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.stack.length === 0) {
      throw new Error("Stack is empty!");
    }

    return this.stack.pop();
  }
}

function getResultByToken(token, a, b) {
  switch (token) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return Math.floor(a / b);
  }
}

function getExpressionResult(expression) {
  const stack = new Stack();
  const tokens = expression.split(' ');

  for (const token of tokens) {
    const number = Number(token);

    if (isNaN(number)) {
      const second = stack.pop();
      const first = stack.pop();

      const result = getResultByToken(token, first, second);

      stack.push(result);
    } else {
      stack.push(number);
    }
  }

  return stack.pop();
}

function run() {
  const expression = readStr();

  const result = getExpressionResult(expression);

  console.log(result);
}
