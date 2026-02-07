// object understanding
const student = {
  fullName: "RaghurajSingh", // key : "value" pair
  age: "19",
  marks: 8.5,
  isPass: true,
};

let output = `The Age of Studentis ${student.age}, The marks are ${student.marks}`;
console.log(output);

student["marks"] = student["marks"] + 1; // vaule changing in object

// logical opertor
let a = 5;
let b = 2;
let cond1 = a > b;
let cond2 = a == 4;
console.log("cond1&&cond2 =", cond1 && cond2);
console.log("cond1||cond2 =", cond1 || cond2);
console.log("cond1&&cond2 =", (cond1 && cond2));

// Conditional Statements
let number = 10;
if (number % 2 == 0) {
  console.log(number, "The number is even");
} else if (number % 2 != 0) {
  console.log(number, "The number is odd");
} else {
  console.log("Enter the valid number ");
}

// Loops and srtings
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log("Sum is :", sum);

// let i = 1;
// while (i <= 5) {
//   console.log("i is=", i);
//   i++;
// }
// for-in loop
for (let key in student) {
  console.log("Key is = ", key, "value=", student[key]);
}

// Strings

let str = "Apna College";
console.log("theString is =", str);
console.log(str[0]);
console.log(str[7]);
console.log(str.length);

//Array

let cities = ["delhi", "mumbai", "hisar", "kolkata"];
cities.push("haryana", "punjab");
for (let city of cities) {
  console.log(city);
}

// console.log(cities.toString());
console.log(cities.slice(1, 3));
console.log(cities.splice(2, 0, "dubai"));
