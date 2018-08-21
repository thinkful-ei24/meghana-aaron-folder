'use strict';

// Filter method (although I didn't do it right)

const myArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let newArray = [];

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i][0] >= 0 && myArray[i][1] >= 0) {
    newArray.push(myArray[i]);
  }
}

const filtered = newArray.filter(function (item) {

  return item;
});
console.log(filtered);





// Map method (yay, I did it!)


const mapArray = myArray.map(num => num[0] + num[1]);

console.log(mapArray);



// forEach method


const ohHey = myArray.forEach((item) => console.log((Math.abs(item[0]) + Math.abs(item[1]))));

