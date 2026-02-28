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

*/

// basic ass promise 
let orderFood = new Promise((resolve, rejects)=>{
   let foodAvailable = true;
   setTimeout(()=>{
      if(foodAvailable){
      resolve("Pizzaa delivered !");
   }
   else{
      rejects("Restaurant closed")
   }
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


/***************************PROMISES**************************************** */

/* PRMISES ARE SYNTACTICAL SUGAR THAT MAKE THE CODE SLIGHTLY MORE READABLE.
  syntactical sugar mtlb just the prettier way
  Under the hood it will still use callback queues, callstack, eventloops etc.
*/

//* Until now we've only studied the asynchronous functions that were already created.
//* How can we create our own asynchronous functions

const fs = require('fs');
const { resolve } = require("path");


// writing my own asynchronous function

/*
 function akshsReadFile(cb){
   fs.readFile("a.txt", "utf-8", function(err, data){
      cb(data);
   });
 }


 akshsReadFile(onDone);
*/

// what we've created is we have just created a basic function on top of fs.readFile which is already an asynchronous function.
// toh kaayde se we just created a wrapper on top of another already existing asynchronous function calling it ours.

// commented the above out cuz ion want collision of similar results*****88 BAS onDone() function ko baahar kr liya ofcourse cus we need it in the next one.

// callback function to call
function onDone(data){
   console.log("before printing of data in onDone function");
   console.log(data);
} 


function akshsReadFile2(){   // yahan cb function ko as input nhi daalna pda to call it back or anything.
   console.log("inside aksh 2 read file")
   return new Promise(function(resolve){
      console.log("inside promise")
      fs.readFile("a.txt", "utf-8", function(err, data){
         console.log("before resolve");
      resolve(data);
   });
   })
}

// akshsReadFile2().then(onDone);
// just above statement can be written in a below way and it too obviously gives the same result.
let fckit = akshsReadFile2();
fckit.then(onDone);

// we wrote it like that to store it in a variable and then log it...
console.log(fckit);
/* 
 this line is giving extra  Promise { <pending> }   *** and that too somewhere in the middle.
 And ye "before resolve" line ke bhi pehle aara h hence tab tk promise resolve ni hua tha issliye pending likkh ke aara promise ka status

// return new promise likkhte h iska mtlb a promise will be returned to that function.
// and how initiate that return is by writing akshsReadFile2 etc....

/* agr promise wale function mei resolve(data) likkha toh. 
  .then(some function) likkhne pe jo bhi cheez h "data" woh as input chali jaayegi in "some function"
  let it in. breatheeeee.
*/

/*  *********IMPORTANT********************
 Why console.log(fckit) prints Promise { <pending> }***************
 Even though you write console.log(fckit) after calling akshsReadFile2(), the promise does NOT resolve instantly.
 It resolves later, because fs.readFile is asynchronous.
 JavaScript does NOT pause the program waiting for the promise to resolve.
 It continues immediately.

 So:

 📌 Timeline
 Step 1 — call akshsReadFile2()

 Promise is created

 fs.readFile starts reading file asynchronously

 Promise is still pending

 Step 2 — main code continues

 console.log(fckit) runs immediately → prints:

 Promise { <pending> }

 Step 3 — file read finishes later

 Now Node.js resolves the promise:

 resolve(data)


 Then .then(onDone) finally runs:

 inside aksh 2 read file
 inside promise
 before resolve
 <your file data>

 🔥 Why doesn't JS wait for the promise to resolve?

 Because JavaScript is single-threaded, and async operations use the event loop.

 Your synchronous code runs first.

 Async things (fs.readFile, setTimeout, network calls) happen later.

 Their callbacks go to the event queue.

 The event loop handles them after the main code finishes.

 So console.log(fckit) must run before the callback of fs.readFile.
*/

/* 
 pehle inside aksh2 read file ke andar gye. toh it printed
 then inside promise gye toh it printed.
 then "before resolve" print nhi hua cuz fs.readFile ke andar nhi gye abhi tak.
 Woh async function h issliye toh while its reading we jump on another code.
 (beech mei ondata function ka bhi kuch print nhi hoga cuz it isnt called anw now too.)
 Toh we jumped to console.log(akshReadFile2()); and it printed pending promise.
 then fir callback queues pe gye.
*/ 

// a promise is immediately made saying ki i may or may not resolve it. But hnn I made a promise definetely.

// and a .then is made ki if promise gets resolved toh where to send the resolved data.
// which was in this case the onDone() function.

/* What even is a promise ?
 
 It is a class. Cus 'new' keyword is always used to initialise a class.

 The thing about promises is that the first argument you need to give it should be a function and uss function ke andar first input should be a resolve function.
 Just got to know ki resolve function ka naam kuch aur bhi rakkh skte h.
 promise ke andar jop function as first argument gya h uss function ka pehla input woh fucntion hoga jo resolve hone pe chalega and second input woh function hoga jo reject hone pe chalega.
 We use resolve and reject respectively as conventions to make it easier.

 jab tk resolve ni hota tb tk promise status pending rehta.
 Jab resolve ho jaayega toh status resolved dikhaayega.
 agr reject hogya toh rejected dikhaayega.
 
 .then(somefunction) likkhne pe 'somefunction' ke andar data tb jaata h jab resolve ho jaata h promise obv.

 it will shopw promise(undefined) when printing that promise if we have not written anything inside resolve()
 humne btaya hee ni what to do when getting resolved.

*/
let d = new Promise(function(resolve){   // naa promise ke andar wale function ko koi naam diya
   setTimeout(function(){          // naa heee setTimeout ke andar wale function ko koi naam diya 
      resolve("foo foo");  // COZ WE SIMPLY DONT NEED TO GIVE THESE FUNCTIONS ANY NAME. THEY GONNA RUN ANYWAY DOESNT MATTER IF WE NAME EM OR NOT. 
   }, 3000);
})

function callback(){
   console.log(d);
}

console.log(d);

d.then(callback);

// abhi yahan tk ka code run krega toh do promise{<pending>}  likkhe aayenge. Ek wohi pehle wala aur ek abhi promise 'd' ka.
// cuz promise 'd' resolve hone mei time leta h cuz we v put a setTimeout on it. and uss time mei hee uska status printing wali line execute ho jaati h.



// example of a promise that gets resolved immediately:
let pImmediate = new Promise(function(resolve){
   resolve("hi there immediate promise");
})

pImmediate.then(function(){  // pehle se koi function ni likkha.  Direct .then ke andar likkh diya function.
   console.log(pImmediate);
})

// the above promise gets directly resolved cuz it doesnt need any async functioning or time consuming thing.

// .then() ke andar jo function aata h. What we are trying to say basically is ki resolve hoke data aagya h. Ab .then ke andar wala jo function h woh jo mann kre kre uss data ke saath.

function kiratAsyncFunction(){
   let p = new Promise(function(resolve){
      setTimeout(resolve, 2000)
   });
   return p;  // why we have written "return p;"
}
// return p likkha cuz yahan humne ek promise banaya h ek function KE ANADARRR.
// Whereas upar pImmediate kisi function ke andar ni bana tha Woh chalat firta main code ke anadar exist krta hua promise hai.

const value = kiratAsyncFunction();
value.then(function(){
   console.log("rough ending promise");
})
