console.log("======TryCatch======");

let v = "";
try {
  if (v == "") throw "The value is empty";
} catch (err) {
  console.log(`Message: ${err}`); //=> Message: The value is empty
} finally {
  console.log("Everything is done!"); //=> Everything is done!
}
