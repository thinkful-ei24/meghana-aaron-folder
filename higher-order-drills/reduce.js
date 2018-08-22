'use strict';

let myString = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let arr = myString.split(' ');


function reduceIt(arr) {

  let message = '';

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].length === 3) {
      message += ' ';
    }

    else {
      message += (arr[i][arr[i].length - 1]);
    }

  }

  return message;
}

console.log(reduceIt(arr));





const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const decoded = input
  .split(' ')  // This is splitting the string 'input' into an array
  .reduce((decodedString, word) => {     //  This is setting up the reduce function. It will run for as long as there is a word
    if (word.length === 3) return decodedString + ' ';  // decodedString is like a running count of what we have so far
    // decodedString stores what he have. So when you return decodedString + a space, it just adds a space to what was there
    return decodedString + word[word.length - 1].toUpperCase();  //  this is adding the last letter of the words to our string
  }, '');  //  You need the '' so that the string is empty to begin with. It will break without this
console.log(decoded);


// This is the same things as above, just longer notation
const hello = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const solution = hello.split(' ');

const solved = solution.reduce(function (solutionString, word) {

  if (word.length === 3) {
    return solutionString + ' ';
  }
  else {
    return solutionString + word[word.length - 1].toUpperCase();
  }
}, '');
console.log(solved);