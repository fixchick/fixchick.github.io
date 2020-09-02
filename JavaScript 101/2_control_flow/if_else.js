let a = 0;

if (++a == 0) {
  console.log("верно!");
} else {
  console.log("неправильно!");
}

let yearOfBirth = 2000;
let currentYear = 2020;

if (currentYear - yearOfBirth < 18) {
  console.log("Проваливай, щенок");
} else if (currentYear - yearOfBirth >= 18 && currentYear - yearOfBirth < 21) {
  console.log("Тебе повезло, что мы не в США");
} else {
  console.log("Пей!Пей!Пей!Пей!Пей!");
}

let name = "Anna";
if (!name) {
  console.log("Вы забыли представиться!");
} else {
  console.log(`Привет, ${name}`);
}
