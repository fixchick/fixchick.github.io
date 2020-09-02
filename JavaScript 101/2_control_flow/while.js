let i = 1;
while (i <= 15) {
  if (!(i % 3)) console.log(i);
  ++i;
}

const atempts = ["1234", "9999", "0000", "4321", "9999"];
const PIN = "9999";
let count = 3;
let j = 0;

do {
  if (atempts[j] == PIN) {
    console.log("Take your money!");
    break;
  } else {
    console.log("Wrong Pin code! Try one more time");
  }
  j++;
} while (--count);
