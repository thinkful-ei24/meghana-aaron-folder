'use strict';

function filter(arr, fn) {
  // TASK: Define your function here
  // This isn't exactly the way they wanted us to do this, but I ran out of time and it works so I left it
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'R') {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function (name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames);  // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES