console.log("===== String =====");

var string = "string";

// split()
let s1 = string.split("");
console.log(s1); //=> ["s", "t", "r", "i", "n", "g"]

// slice()
let s2 = string.slice(0, 3); ///=> str
console.log(s2);

// concat()
let s3 = string.concat("string");
console.log(s3); //=> stringstring

// includes()
console.log(string.includes("s")); //=> true

// match
const regex = /\w/g;
let s4 = string.match(regex);
console.log(s4); //=> ["s", "t", "r", "i", "n", "g"]

// replace
let s5 = string.replace(/s/, "S");
console.log(s5); //=> String

// toLowerCase()
let s6 = "STRING".toLowerCase();
console.log(s6); //=> "string"

// toUpperCase()
let s7 = string.toUpperCase();
console.log(s7); //=> "STRING"

// trim
let s8 = " strn g   ".trim();
console.log(s8); //=> strn g
let s9 = "  string  ".trimLeft();
console.log(s9); //=> "string  "
let s10 = "  string    ".trimRight();
console.log(s10); //=> "  string"
