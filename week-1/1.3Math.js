console.log(Math.random()); // gives a random number ofcourse

console.log(Math.floor(2.3)); // will give the smallest integer lesser than this. i.e. 2
console.log(Math.ceil(2.3));  // will give the biggest integer greater than this. i.e. 3


function mathMethods(value) {
  console.log("Original Value:", value);

  let rounded = Math.round(value);
  console.log("After round():", rounded);

  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  let randomValue = Math.random();
  console.log("After random():", randomValue);

  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);
  // pow(input) gives the square of the input

  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
  // sqrt(input) gives the square root of input.
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);
