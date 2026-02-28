// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");
// world word is at 6th index position ofc
// agr world word hota hee ni string mei toh result -1 aata which means couldnt find in the string.

findIndexOf("hello world world world", "world"); // toh obv first wale world ki position batayega

// AGR LAST WALE world KA INDEX NIKAALNA H TOH COULDVE USE3D...    .lastIndexOf
// like example str.lastIndexOf("world");
// just replacing str.indexOf(target));  with str.lastIndexOf(target));  couldve done it 

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);
// ******* Sliced part jo aata h usme end index wali value ni hoti ofc. Uske just ek pehle wali value hoti h. *********

getSlice("hellopijjkhh world", 0, 5);  // mtlb given string ka 0th index se leke 5th index tk ka part nikaal ke de dega.

function cutIt(str, startIndex, endIndex){
    let newStr = "";
    for(let i=0; i<str.length; i++){
        if(i>=startIndex && i< endIndex){
            newStr=newStr+str[i];
        }
    }
    return newStr;
}
const value0 = "harkirat singh";
console.log(cutIt(value, 2, 5)); // this will just show "undefined"
// because cutIt function bas perform krega and thats it. its not returning any value.
// so we need to add a return.

// or another direct way...
let ans2 = value.slice(2,5);
console.log(ans2);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");
//or just....
let str = "hello world";
console.log(str.replace("world", "javascript"));


// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");
//     .split  gives an array.***************
 // jo bhi separator liya uske according 

const value1 = "hi.my.name.is.harkirat";
const words = value1.split(".");
// ab yahan . separator liya h which means dot jahan jahan aara h vahan vahan separate kr dega.
console.log(words);


// trim  trims out the extra spaces at the end and the beginning
// NOT the extra spaces in the middle.
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");
const value2="     akshat   singh    ";
console.log(value2); // will only trim out the extra spaces at the end and the beginning. not the middle extra space.

// toUpperCase
function toUpper(str) {   // saare letters ko uppercase kr deta h.
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {   // saare letters ko loweercase kr deta h.
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");
