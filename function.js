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
