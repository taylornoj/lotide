const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// will take in 2 objects and return t/f based on perfect match
// return true if both objects have identical keys w/ values - otherwise false
const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1)
  let obj2 = Object.keys(object2)
  if (obj1.length !== obj2.length) { // checking length
    return false;
  } else {
    for (let key of obj1) { 
      if (object1[key] !== object2[key]) { //comparing object values
      } return false;
    }
  } return true;
};





const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba))); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc))); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc))); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2))); // => false
