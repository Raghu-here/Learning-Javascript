console.log("Learning Function");
function myfunction() {
  console.log("Hello By Raghuraj");
  console.log("Bye");
}
myfunction();

const arrowsum = (a, b) => {
  console.log(a + b);
};

arrowsum(3, 4);

// Count The vowels
function countvowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

// For each in function
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printval(val) {
//   console.log(val * val);
// });

// map method
let Newarr = arr.map((val) => {
  return val * 2;
});
console.log(Newarr);
// filter method
let Newarr2 = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(Newarr2);
