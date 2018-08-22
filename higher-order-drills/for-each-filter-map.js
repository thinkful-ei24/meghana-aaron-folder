'use strict';

let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];




// Filter Method
const filterMethod = movements.filter(movement => movement[0] >= 0 && movement[1] >= 0);
console.log(filterMethod);
// movements.filter is accessing the above array, and then putting it through a filter function
// movement => movement[0] >= 0 && movement[1] >= 0   This is only returning the individual arrays that are both not negative
// the terms within can be anything, they don't have to be movement. As long as the 3 of them are consistent.
// This logs => [[0, 0], [0, 5], [3, 2]]



// Map method (yay, I did it!)
const mapArray = movements.map(num => num[0] + num[1]);
console.log(mapArray);
// movements.map is, you guessed it, accessing the above array, but this time using a map function
// num => num[0] + num[1] is turning each individual array into just a number, which is the sum of the two elements in the array
// This logs => [0, 5, -4, -2, -2, 5]



// forEach method
const ohHey = movements.forEach((item) => console.log((Math.abs(item[0]) + Math.abs(item[1]))));
// Same as above, this is calling the movements array into a function, this time a forEach
// forEach needs a paramater, so that's why item is there. 
// the equation within the console.log is just adding the absolute value of each entry together, so it ignores negative values
// forEach functions don't return an array, so the end result looks a little different
// This logs => 0 5 4 4 6 5   However, it appears vertically instead of horizontally