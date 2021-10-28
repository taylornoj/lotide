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
    return console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else
    return console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);


const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);