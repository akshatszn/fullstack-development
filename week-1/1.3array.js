// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);
   //   .push adds at the end of array *************
  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);
   //   .pop rewmoves from the end of array. *************
  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift()
function shiftExample(arr) {
  console.log("Original Array:", arr);
  //    .shift   removes from the start of array. ***********
  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift()
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);
  //   .unshift adds at the start of array. ***************
  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);   // WILL MERGE ARRAY 1 AND ARRAY2 **************
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// DOING W/O CONCART
/*
 let arr1 = [1,2,3];
 let arr2=[4,5,6];
 for(let i=0; i<arr2.length; i++){
  let newArr = arr1.push(arr2[i]);
  console.log(newArr);
 }
*/
// ABOVE METHOD FAILED CUZ BAS FAILED.

let arr1 = [7,8,9];
let arr2 = [3,6,8];

for (let i = 0; i < arr2.length; i++) {
  arr1.push(arr2[i]);
}
console.log(arr1);

// forEach()   
function forEachExample(arr) {
  console.log("Original Array:", arr);
  //    .forEach() is used to access all index elements of 
  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);
 
const initialArr = [12,24,36];
console.log(initialArr);

function logThing(str){
  console.log(str + "is a string now.");
}
initialArr.forEach(logThing);    // logThing is used as a callback in forEach() function. 

//forEach ne initialArr ke saari index values pe logThing wala function lgwa diya. logThing function ke inputs honge saari values jo forEach ne nikalwayi i.e. values at each position in initialArr.

// map()
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function(item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
