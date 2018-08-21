'use strict';



const myArray = [1, 2, 3, 4, 5, 6];


function computeAverage(arr) {

  let total = 0;
  arr.forEach(function(num) {

    total += num;

  });


  return total;
}

console.log(computeAverage(myArray));