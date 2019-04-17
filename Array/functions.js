console.log("===== Array =====");

var arr = [1, 2, 3, 4, 5];

// concat()
let a1 = arr.concat([6, 7]);
console.log(a1); //=> [1, 2, 3, 4, 5, 6, 7]

// filter()
let a2 = arr.filter(num => num > 3);
console.log(a2); //=> [4, 5]

// find()/findIndex()
console.log(arr.find(num => num > 2)); //=> 3
console.log(arr.findIndex(num => num > 2)); //=> 2

// forEach()
function repeat(ele) {
  console.log(ele);
}
arr.forEach(repeat); //=> 1 2 3 4 5

// includes()
console.log(arr.includes(2)); //=> true

// map()
let a3 = arr.map(ele => ele - 1);
console.log(a3); //=> [0, 1, 2, 3, 4]

// pop()/push()
arr.push(6);
console.log(arr); //=> [1, 2, 3, 4, 5, 6]

arr.pop();
console.log(arr); //=>  [1, 2, 3, 4, 5]

// shift()/unshift()
arr.unshift(0);
console.log(arr); //=> [0, 1, 2, 3, 4, 5]

arr.shift();
console.log(arr); //=>  [1, 2, 3, 4, 5]

// slice()
let a4 = arr.slice(0, 3);
console.log(a4); //=>  [1, 2, 3]

// sort()
let array = [4, 2, 3, 4, 5, 6, 7];
console.log(array.sort()); //=> [2, 3, 4, 4, 5, 6, 7]

// splice()
var months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, "May");
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
