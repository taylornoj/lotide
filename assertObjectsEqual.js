
// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2) === true) {
//     console.log(`✅Assertion Passed: ${array1} === ${array2}`);
//   } else console.log(`❌Assertion Failed: ${array1}} !== ${array2}`);
// };
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
  if (eqObjects(actual, expected)) {
    return console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else
  return console.log(`❌Assertion Failed: ${actual}} !== ${expected}`);
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);
      
    
