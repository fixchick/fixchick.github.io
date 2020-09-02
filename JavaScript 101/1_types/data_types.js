let string = "it's double quoted string";
let string1 = "it's single quoted";
let string2 = `it's
back
tick`;
let number = 2; //integer
let number1 = 1.25; //float
let number2 = 1e308; //exponent
let number3 = NaN;
let number4 = 2_000_000;
let number5 = 0xff;
console.log(number5);
console.log(typeof number3);
let empty = null;
let empty1 = undefined;
let empty2;
console.log(empty === empty1);
console.log(empty1 === empty2);
let bool = true;
let bool1 = false;
let object = {
  name: "File 1",
  size: 128,
};
console.table(object);
console.log(object.name, object.size);
let array = [1, 2, 3, "hello"];
console.log(array.length);
console.log(array);
console.log(array[3]);
