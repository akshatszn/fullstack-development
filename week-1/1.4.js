// calculating sum from 0 to 100
let sum =0;
for(let i=0; i<=100; i++){
    sum = sum + i;
}
console.log(sum);

function findSum(n){  // a function to find sum of n natural numbers.
    let sum=0;
    for(let i=0; i<=n ; i++){
        sum = sum + i;
    }
    console.log(sum);
}
findSum(12); // will print the sum from 0 to 12

// agr "return sum;"  likkhte toh we would need to store findSum value in a variable and then log that variable to make it visisble on our console window.

// CALLBACK FUNCTIONS
 
function square(n){
    return n*n;
} 

function findSquareSum(a,b){
    let p = square(a);
    let q = square(b);
    return p+q;
}

findSquareSum(3,6);  

function cube(n){
    return n*n*n;
}

// agr cube bhi nikaalna ho toh we would need to write another function for sum of cubes.

// We should always follow the DRY rule. Dont repeat yourself.**** 
function sumOfAnything(a, b, fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}
// ek hee function se do kaam.

sumOfAnything(2, 5, square);
sumOfAnything(3, 4, cube);
// we need to print both above values because sumOfAnything just returns a value.
// usko print bhi toh krwana pdega.

console.log(sumOfAnything(2, 5, square));
console.log(sumOfAnything(3, 4, cube));
// anonymous function woh hota h jo directly as an input daal diya without definetion without predefining it.
// example..
console.log(sumOfAnything(1,4 , function(n){  // function(n) is an anonymous function cuz koi naam ni h obviously. And anonymous functions are written like this hee.
    return n*n;   // yahin hee function define kiya and iska naam wagerah dene ki koi zaroorat ni padi.
}))


 
