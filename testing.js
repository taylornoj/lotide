const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failes: ${actual} !== ${expected}`)
  }
}

const eqArrays = function (arrOne, arrTwo) {
  let ans = arrOne.length === arrTwo.length &&
    arrOne.every(function (element, index) {
      return element === arrTwo[index];
    })
  return ans;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back false!
const eqObjects = function (object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let elem of arr1) {
    if (Array.isArray(object1[elem]) && Array.isArray(object2[elem])) {
      return eqArrays(object1[elem], object2[elem]);
    }
    if (object1[elem] !== object2[elem]) {
      return false;
    }
  }
  return true;
};

//test code


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false)
