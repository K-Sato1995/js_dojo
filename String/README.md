# split()

Splits a string into an array of substrings.

```JS
let s1 = string.split("");
console.log(s1); //=> ["s", "t", "r", "i", "n", "g"]
```

# slice()

Extracts a part of a string and returns a new string.

```JS
let s2 = string.slice(0, 3); ///=> str
console.log(s2);
```

# concat()

Joins two or more strings, and returns a new joined strings.

```JS
let s3 = string.concat("string");
console.log(s3); //=> stringstring
```

# includes()

Checks whether a string contains the specified string/characters.

```JS
console.log(string.includes("s")); //=> true
```

# match()

Searches a string for a match against a regular expression, and returns the matches.

```JS
const regex = /\w/g;
let s4 = string.match(regex);
console.log(s4); //=> ["s", "t", "r", "i", "n", "g"]
```

# replace()

Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

```JS
let s5 = string.replace(/s/, "S");
console.log(s5); //=> String
```

# toLowerCase()

Converts a string to lowercase letters.

```JS
let s6 = "STRING".toLowerCase();
console.log(s6); //=> "string"
```

# toUpperCase()

Converts a string to uppercase letters.

```JS
let s7 = string.toUpperCase();
console.log(s7); //=> "STRING"
```

# trim()

Removes whitespace from both ends of a string.

```JS
let s8 = " strn g   ".trim();
console.log(s8); //=> strn g

let s9 = "  string  ".trimLeft();
console.log(s9); //=> "string  "

let s10 = "  string    ".trimRight();
console.log(s10); //=> "  string"

```

# References

- [w3schools.com](https://www.w3schools.com/jsref/jsref_obj_string.asp)
