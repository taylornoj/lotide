
// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2) === true) {
//     console.log(`✅Assertion Passed: ${array1} === ${array2}`);
//   } else console.log(`❌Assertion Failed: ${array1}} !== ${array2}`);
// };

const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) { // checking length
    return false;
  }
  for (let key of obj1) {
    if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) {
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) { //comparing object values
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // Implement me!
};
console.log(`Example label: ${inspect(actual)}`);

      console.log(`✅Assertion Passed: ${actual} === ${expected}`);
      console.log(`❌Assertion Failed: ${actual}} !== ${expected}`);
