console.log("===== Number =====");

var num = 5;

// isInteger()
console.log(Number.isInteger(num)); //=> true

// isNaN()
console.log(Number.isNaN(num)); //=> false
console.log(Number.isNaN(NaN)); //=> true

// toString()
var str = num.toString();
console.log(str); //=> "5"
