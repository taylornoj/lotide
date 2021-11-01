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


// const middle = function(array) {
//   let middleElement = [];
//   if (array.length < 3) {
//     return middleElement;
//   } else if (array.length % 2 !== 0) {
//     middleElement.push(array[Math.floor(array.length / 2)]);
//   } else if (array.length > 3) {
//     middleElement.push(array[Math.floor((array.length - 1) / 2)]);
//     middleElement.push(array[Math.floor(array.length / 2)]);
//  } return middleElement;
// }

// console.log(middle([1])); // []
// console.log(middle([1, 2])); // []
// console.log(middle([1, 2, 3])); // [2]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5])); // [3, 4]




const round = function(number) {
  return Math.round(number * 100) / 100;
};

const median = function(arr) {
  arr.sort(function(a, b){return a - b});
  let middle = [];
  if (arr.length % 2 !== 0) {
    middle.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
    middle.push((arr.length - 1) - .5);
    //middle.push(arr.length);
  }
  return round(middle);
};




console.log(median([1, 2, 3, 4]));
console.log(median([3, 4, 1, 2]));