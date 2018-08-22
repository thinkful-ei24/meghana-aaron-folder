'use strict';

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();  // This is where we were stuck when we started this problem, this is the correct way to call the function
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

