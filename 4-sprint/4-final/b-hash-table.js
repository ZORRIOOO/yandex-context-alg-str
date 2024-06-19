// Комментарий:
/*
-- ПРИНЦИП РАБОТЫ --
В своем решении я реализовал структуру данных "Хэш-Таблица" с возможностью добавления, получения и удаления элементов.
Она использует самописную хэш-функцию для определения индекса каждого ключа в таблице,
а затем решает коллизии с использованием метода цепочек.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Алгоритм использует хэш-функцию для определения индекса элемента, что обеспечивает быстрый доступ к данным.
Коллизии решаются с помощью цепочек, гарантируя корректное добавление, получение и удаление элементов.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Хэш-функция имеет временную сложность O(1) для вычисления индекса.
Добавление, получение и удаление элементов в хэш-таблице имеют в среднем временную сложность O(1),
но в худшем случае может быть O(n), где n - количество элементов в таблице.
Общая временная сложность моего алгоритма для обработки всех входных данных будет O(N) + O(N) + O(N) = O(N),
где каждый из трех шагов это операции на чтение (get), создание (put) и удаление (delete),
а все вместе они имеют сложность O(n) в худшем случае.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Хэш-таблица использует дополнительную память для хранения элементов и цепочек коллизий.
Пространственная сложность зависит от размера таблицы, и для данной реализации она составляет O(S),
где S - размер таблицы.
При этом для хранения результатов операций и промежуточных данных используются небольшие переменные,
что ограничивает пространственную сложность на O(1), делая алгоритм относительно эффективным
с точки зрения использования памяти.
Если все операции с хэш-таблицей будут добавлением (put), то в худшем случае она будет
использовать O(N) памяти, где N - количество операций.
*/

// Отчет: https://contest.yandex.ru/contest/24414/run-report/113850057/

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

_reader.on('close', run);

function readNum() {
  return Number(_inputLines[_curLine++]);
}

function readArray() {
  return _inputLines[_curLine++].trim().split(" ").map(num => String(num));
}

function getRequests(n) {
  const requests = [];
  for (let i = 0; i < n; i++) {
    const [type, key, value] = readArray();
    const request = { type, key };
    if (value) {
      request.value = value;
    }
    requests.push(request);
  }
  return requests;
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  static EMPTY_MESSAGE = 'None';

  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) + hash + key.charCodeAt(i);
      hash = hash & hash;
      hash = Math.abs(hash);
    }
    return hash % this.size;
  }

  put(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = new Node(key, value);
    } else {
      let current = this.table[index];
      while (current.next !== null && current.key !== key) {
        current = current.next;
      }
      if (current.key === key) {
        current.value = value;
      } else {
        current.next = new Node(key, value);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    let current = this.table[index];
    while (current !== null) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return HashTable.EMPTY_MESSAGE;
  }

  delete(key) {
    const index = this.hash(key);
    let current = this.table[index];
    let prev = null;
    while (current !== null) {
      if (current.key === key) {
        if (prev === null) {
          this.table[index] = current.next;
        } else {
          prev.next = current.next;
        }
        return current.value;
      }
      prev = current;
      current = current.next;
    }
    return HashTable.EMPTY_MESSAGE;
  }
}

function getResults(n, requests) {
  const size = 1000;
  const hashTable = new HashTable(size);
  const results = [];
  for (let i = 0; i < n; i++) {
    const { type, key, value } = requests[i];
    switch (type) {
      case "put":
        hashTable.put(key, value);
        break;
      case "get":
        results.push(hashTable.get(key));
        break;
      case "delete":
        results.push(hashTable.delete(key));
        break;
    }
  }
  return results;
}

function run() {
  const n = readNum();
  const requests = getRequests(n);
  const results = getResults(n, requests);
  results.forEach((result) => console.log(result));
}
