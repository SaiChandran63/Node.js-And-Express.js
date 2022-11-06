const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const posNumbers = remNeg(myNumbers, (x) => x >= 0);

console.log(posNumbers);

function remNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}


let arr = ["sai", 1, 3, 29, "hey", true, "677.9"];

// let text = "";
/* Printing the index of the array. */
for(const x in arr) {
    console.log(arr[x]);
}

for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}