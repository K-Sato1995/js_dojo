# Number functions

Assume the code below was declared at the top level of in the following examples.

```JS
var num = 5;
```

## isInteger()

Checks whether a value is an integer.

```JS
console.log(Number.isInteger(num)); //=> true
```

## isNaN()

Checks whether a value is Number.NaN.

```JS
console.log(Number.isNaN(num)); //=> false
console.log(Number.isNaN(NaN)); //=> true
```

## toString()

Converts a number to a string.

```JS
var str = num.toString();
console.log(str); //=> "5"
```
