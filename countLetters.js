const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const finalObj = {};
  string = string.replace(/ /g,'');
  for (const str of string) {
    if (finalObj[str]) {
      finalObj[str] += 1;
    } else {
      finalObj[str] = 1;
    }
  } return finalObj; 
} 

console.log(countLetters("lighthouse in the house") );