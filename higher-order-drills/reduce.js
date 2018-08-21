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
  .split(' ')
  .reduce((decodedString, word) => {
    if (word.length === 3) return decodedString + ' ';

    return decodedString + word[word.length - 1].toUpperCase();
  }, '');
console.log(decoded);


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