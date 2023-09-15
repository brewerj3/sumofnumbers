const testnum = [1, 2, 3, 4];
function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let length = 0;
  length = list.length;
  while (length !== 0) {
    sum += list[length - 1];
    length--;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; });
}
console.log(sumFor(testnum));
console.log(sumWhile(testnum));
console.log(sumRecursion(testnum));
console.log(sumTheSimpleWay(testnum));