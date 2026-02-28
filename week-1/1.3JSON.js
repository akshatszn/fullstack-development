const user0 = {
  fullName: "harsh simgh",
  age: 19,
  gender: "male"
}

console.log(user0["fullName"]); // thik h we can print this all 
// BUT WHT IF I NEED TO TRANSFER THIS DATA.

const user1 = `{"fullName": "harkirat", "age": 21, "gender": "male"}`;
//AISI STRING LIKKHTE TIME VALUES KE SAATH KEYS KO BH DOBLE QUOTE MEI DAALTE H.*********

// this object is converted to a string now. 
// aur ab isse kahin bhi bhej skte h and they may figure out what to do with it or maybe not.
// but we cant access it like an object now. 
// like  console.log(user1["fullName"]); will not give harkirat

console.log(user1[0]); // ye toh { dedega ofc.
console.log(user1[1]); // and ye 'f' print krega ofcourse.

// WE CONVERTED OBJECT TO A STRING CUZ WE CANT SEND ANJ OBJECT IJN JAVASCRIPT FOR SOME FUCKING REASON.
// so converted to string and then sending
// MANY TIMES WE'LL NEED TO CHANGE BETWEEN JAVASCRIPT OBJECT AND JAVASCRIPT STRING. for which we have JSON()

// has two functions...... JSON.parse   &  JSON.stringify  ***********

// parse converts a string to an object.
// converting user1 string to a new object user3
const user3 = JSON.parse(user1);
// NOW WE CAN USE user1 as an object i.e now we can write...
console.log(user3["fullName"]); // toh harkirat print kr dega ab

// stringify converts an object to a string 
// converting user0 object to a new string user2
const user2= JSON.stringify(user0);

console.log(user2); // will give a string
console.log(user3); // will give an object

/* this interchanging bw string hppns cuz...
 sometimes we might get api server data in forms of a string which is convertible to an object so we'll obv convert it to an object to use it in a better way. Obviously using JSON for conversion.

 And sometimes its also a thing ki we need to send data somewhere which is in the form of objects. TOH WE NEED TO CONVERT IT TO STRINGS TO SEND IT BECOZ MANY TIMES IT CAN HAPPEN THAT THE OTHER PARTY IS NOT ABLE TO UNDERSTAND WHT AN object IS BUT 99.9% CHANCE THAT THEY'LL KNOW WHT A STRING IS.
*/



function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);
