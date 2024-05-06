function sum(data) {
  let mas = data.toString().split(' ');

  return +mas[0] + +mas[1];
}

let res;

process.stdin.on('data', data => {
  res = sum(data);

  if (res) {
    process.stdout.write(String(res).trim());
  }
  process.exit();
});