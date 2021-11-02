# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @taylornoj/lotide`

**Require it:**

`const _ = require('@taylornoj/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Compares actual and expected arrays, returns assertion pass or fail
* `assertEqual`: Compares expected and actual values
* `eqArrays`: Compares two arrays and returns a boolean if the arrays are the same or different
* `head`: Returns the first element of an array
* `middle`: Returns the middle value (if odd) or values (if even) in an array longer than two elements
* `tail`: Removes the first element in an array and returns the remaining elements in a new array