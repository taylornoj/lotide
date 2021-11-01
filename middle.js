const middle = function (array) {
  let middleNum = [];
  let index = Math.floor(array.length / 2);

  if (array.length < 3) {
    middleNum = [];
  } else if (array.length % 2 !== 0) {
    middleNum = [array[index]];
  } else {
    middleNum = [array[index - 1], array[index]];
  }
  return middleNum;
};

module.exports = middle;

// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   } for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2) === true) {
//     console.log(`✅Assertion Passed: ${array1} === ${array2}`);
//   } else console.log(`❌Assertion Failed: ${array1}} !== ${array2}`);
// };


// console.log(middle([1])); // []
// console.log(middle([1, 2])); // []
// console.log(middle([1, 2, 3])); // [2]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // [3, 4]


// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle(["a", "b", "c"]), ["b"]);
// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);