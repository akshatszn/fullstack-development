/*
 “Inside a promise we do some task which eventually gives us the result.
 We program such that promise is resolved when we get that result.
 Now the resulted data will be used in some manner by tasks written inside .then()”

 In technical wordings:

 Inside a Promise, we start an async operation.
 When that operation finishes successfully, we call resolve(value).
 That value is stored by the Promise and later passed to all .then() handlers attached to it.

 That’s it. That’s the whole system.
 Multiple .then() can use the same result:

 promise.then(a => console.log(a));
 promise.then(a => console.log(a.toLowerCase()));
 promise.then(a => console.log(a.length));

 A Promise produces a value once; .then() functions react to that value whenever they are attached.
 
 You’re imagining this like a function call:

 getData();   // finishes
 .then();    // too late??


 That would be true if promises were events.
 But promises are NOT events.

 2️⃣ What is ACTUALLY happening ✅

 A promise is a box that stores a result.

 Once the result is inside the box, it stays there forever.**************************
 This right here is the most important point. The result is stored after resolved. And we can use that resilt using multiple .then()
 Whereas callback mei hume baar baar bulaana pdta h. Like agr callback run hogya toh all good vrna 

 So the timeline looks like this:
 Promise created ───► async work ───► resolve("DATA")
                                         ↑
                                  value stored forever

  *************

  Now later:

 .then(handler) ───► JS opens the box ───► gives handler "DATA"
 __________________________

 let p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello");    // this promise will NOT be the one printing "Hello" ofcourse. Its in the second promise.
  }, 1000);
 });

 // attach .then AFTER promise resolved
 setTimeout(() => {
  p.then(msg => console.log(msg));
 }, 3000);
 
 What happens:

 At 1s → promise resolves with "Hello"

 At 3s → .then() is attached

 JS says:
 “Oh, this promise is already fulfilled. Here’s the value.”

 Output:

 Hello


 If you don’t console.log() inside .then(), nothing will be printed.
 The resolved value still exists, but it’s only passed along or used internally.

 The value is not “printed by default”.
 It is only available to .then() handlers.

*/
/* ********************************************************************
 and yea resolve ka naam kuch bhi rakkh sakte h. Its just that promise create hote hee jo sabse pehle function jaata h. uski pehli argument resolve() function hota h. ** >>>>>>>>
 we can call it anything. like onDone()

 And resolve ke jo bhi dega at end woh as argument jaayegi inside the first function of .then()
 example: kaafi chodu example h tho....
  
 function sum(a,b){
    return new Promise(function(resolve){
        resolve(a + b);
    })
 }

 sum(2,3).then(function(ans){     // now here ans is a value coming from what was inside resolve which was sum a+b hence in this case 5.
    console.log(ans);
 })

*/

// basic ass promise 
let orderFood = new Promise((resolve, rejects)=>{
   let foodAvailable = true;
   setTimeout(()=>{
      if(foodAvailable){
      resolve("Pizzaa delivered !");  // yahan humne "Food" naam ka koi data ni liya h abhi toh it automatically assumed ki resolve ke anadar jo likkha wahi data "food" hai.
   } // which in this case a string called "Pizza Delivered"
   else{
      rejects("Restaurant closed")  // And same case here, error naam ka koi actual data provide hua ni h toh it just assumed ki rejects ke andar wali string is data "error".
   } // tabhi console.log(error) mei rejectsw ke andar wali string print hoti h and console.log(Food) mei resolve ke andar wali string print hoti h. 
   }, 2000);
});

orderFood.then((food)=>{       // food shyd woh data h jo nikla aur resolve hua h
   console.log(food);
})
orderFood.then((error)=>{      
   console.log(error);
})
orderFood.finally(()=>{  // finally is the one jo run krega hee after a promise finsishes executing.     
   console.log("Order process finished");    // resolve ho yaa reject dono 
})

// *********** Promises************* 
// It is just a cleaner version.......... under the hood promises get converted to callbacks.

// QUESTION : how would you create your own asynchronous functions?? {abhi tak hum already-made async functions use kr rhe the}

/* In our programming journey whenever we will write our own async functions.
 At the end hum usse kisi already existing  async function ke around hee bana rhe honge. Like wrapping around itr or using them in between somewhere in our whole of self made async function.
 Harkirat ke poore career mei he never needed to write an async of our own.
*/
// *****creating PROMISES********

// 1. Wrapping around an already existing async

function myOwnsetTimeout(fn, duration){
    setTimeout(fn, duration);
}

myOwnsetTimeout(function(){
    console.log("hi there first setTimeout");
}, 1000);
// This approach uses a callback 
// You have created a function where other people can send a callback. This is good, but could lead to callback hell.

// *********CALLBACK********
// write a function 

setTimeout(function(){    // copy this one in loupe too. 
    console.log("just inside second setTimeout");
    setTimeout(function(){
        console.log("indide the second SUB setTimeout")
    }, 2000);

}, 1000);

// but upar nesting hai code mei.

/*
waitFor(1000);
console.log("First line");
waitFor(2000);
console.log("Second line");
waitFor(3000);
console.log("Third line");
*/
// aisa above code likkhna kitna aasaan hota but irl agr above type ka koi code exist krta hota.
// but this kinda looks synchronous obviously. IT IS. 
// like javascript thread will be blocked for 1 second then print.... then blocked for two seconds and print..... then blocked for three seconds and print. 

// ****** promises let u do this. ******
// we'll see how can we write syntax like above without it being synchronous. i.e. we'll make it asynchronous.
// using async await.

// first approach was wrapping around already existing async functions.

//SECOND APPROACH GONNA BE  Promises***

// upar humne myOwnsetTimeout declare krke fir usse call kiya tha in a certain way.

function PromisifymyOwnsetTimeout(duration){
    let p = new Promise(function(resolve){  // POINT1.a promise made should have a callback function like here first.
        // POINT2. and its first argument should be "resolve"
        setTimeout(resolve, duration);
        // after the duration entered, call will be resolved.  resolve is an object from promise class.
    })
    return p;
}

// if i print promise at this point, itll show pending ofcourse.
// i.e. console.log(ans1);  wi;; give pending status wala promise.
const ans1 = PromisifymyOwnsetTimeout(1000);

ans1.then(
    function(){
        console.log("Timeout is done.");
    }
);

// myOwnsetTimeout mei andar ek callback as an argumenet gyi thi whereas promisified version mei theres no callback(.then() se krte h isme.)
// myOwnsetTimeout mei theres nothing to be returned, promisified mei there's a promise returning.

/* ofc we can write:
 
 setTimeout(function9)[
   resolve();
 ], duration);
*/ 
// Instead of what we have written.

// .then() ke andar ofcourse kuch aisa jaata h ki we need to tell them like...... "After promise is resolved/fullfilled please do it."

// woh jo async function operate hota h web api (loupe) mei..... usse browser ka c++ run krra hota h 


// browser and node.js provide different web APIs. Javascript in browser doesnt let us read files. JS in node.js does let us.

// Promises are used further in async await syntax.

// understanding how to call promisified functions is more important... i.e.  .then()  &  async await


/*
 resolve ke andar jo bhi jaata h woh as an argument/input jaata h inside the function which is written in .then()
 resolve(xyz);

 toh ab..

 .then(function(xyz){
    // doing something with xyz  
 })

*/

// Case study: If one async function needs a value from another async function toh ??????????????????????????
/*
 example: async1 needs value from async2 then:

 async2(){
    // isse kuch "result" milega at some moment.

    async1(result){
    }

 }
*/
// for example fs.readFile ke andar fs.writeFile.
// pehle reading hogi aaram se fir uske andar changes krega

// we can use multiple promises at once:
/*
function getPromises(){
    let p1= new Promise();
    let p2= new Promise();
    let p3= new Promise();
    let p4= new Promise();
    // promise ke andar ky daalna h ur choice.
    // each promise will be different ofc.

    return [p1, p2, p3, p4]; //this array is what promise is returning.
}

const x = getPromises();   // toh woh jo array returned h woh x mei stored h.
// now use any RESULT of any promise from that array.
// just do:

x[0].then();
x[3].then(); // and so on.....
*/


// making a promisified setTimeout

console.log("At the top 1");
function promisifiedTimeout(){
    console.log("function called 3")
    return new Promise(function(resolve){
        console.log("inside promise callback 4")
        setTimeout(function(){
            console.log("setTimeout called 5");
            resolve("done baby! I am burnt out.")
        },5000);
    });
}

console.log("In the middle 2");

promisifiedTimeout().then(function(value){   //   .then() ke andar wale function ki pehli argument resolve ke andar wa;i cheez hoti h hence....
    console.log("promisified then 6");    // 'value' will be "done baby! I am burnt out."
    console.log(value);
})


// all statements will be printed as 1 2 3 4 5 6.

// jo async tasks hote h as we said woh chrome krta h with its c++ language on some another thread.
// main synchronous code runs on a single thread. Our browser uses multiple threads and async code wahin jaata run hone.

//********** WHAT IF WE PASS A PROMISIFIWED FUNCTION INSIDE RESOLVE. see 4 it. ********************************