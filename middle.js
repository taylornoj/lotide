const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅Assertion Passed: ${array1} === ${array2}`);
  } else console.log(`❌Assertion Failed: ${array1}} !== ${array2}`);
};


const middle = function(array) {
  let middleElement = [];
  if (array.length < 3) {
    return middleElement;
  } else if (array.length % 2 !== 0) {
    middleElement.push(array[Math.floor(array.length / 2)]);
  } else if (array.length > 3) {
    middleElement.push(array[Math.floor((array.length - 1) / 2)]);
    middleElement.push(array[Math.floor(array.length / 2)]);
 } return middleElement;
}

console.log(middle([1])); // []
console.log(middle([1, 2])); // []
console.log(middle([1, 2, 3])); // [2]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5])); // [3, 4]