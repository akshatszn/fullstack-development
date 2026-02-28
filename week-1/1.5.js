// async functions vs sync functions
/* 
 synchronous means Together, one after the other, sequential. Only one thing is happeneing at a time.

 Asynchronous is opposite of synchronous. Happens in parts. Somehow things are happening paralelly.
 Multiple things are context switching with each other.

 **** building some intution********

 Human brain and body is single threaded. i.e we can focus on only one thing at a time.
 * we can do only one thing at a time.
 * But we can switch b/w tasks, or we can deligate tasks to other people. 
 * switch b/w tasks like sabzi kaati thodi fir beech mei jaake doodh le aaye fir thodi aur kaati etc.
 * deligation mtlb kisi aur ko de diya task ki tu paani ubaal jab tk mai sabzi kaat rha . Isse do task saath mei ho rhe h.
*/

// 4 tasks. how would you do sync or async
/* 
 * boil water
 * cut vegies
 * cut maggie packet
 * get ketchup from the shop nearby
 
 doing it synchronously:
 * boiling water and staring at it until it boils. WEIRDDD AND TIME WASTE   // 5 mins
 * after water is boiled sarted cutting veggies    // 5 mins
 * then uske baad maggie ka packet cut kiya.   // 1 min
 * then went to shop to buy ketchup  // 15 mins
 
 doing it asynchronously 
 * puts the water to boil and leaves it there
 * starts cutting veggies. // switched to a new task while its executing.
 * asks his friend to bring ketchup (saves a lot of time)  *** deligation****
 * cuts the packet
 * HENCE SAVED A LOT OF TIME. 
*/
    
// when we have sync functions, we hv to wait for it to complete to get to next.

// in async functions.. we can switch bw tasks... deligate and everything which makes it faster.

// ALL THE FUNCTIONS WE STUDIED TILL NOW WERE SYNCHRONOUS

// JS CAN DELIGATE AND CONTEXT SWITCH BW TASKS USING ASYNCRONOUS FUNCTIONS

/* example of a synchronous function
 
 function findSum(n){
 let ans = 0;
 for(let i=0 ; i<n ; i++){
  ans += i;
  }
  return ans;
 }

 console.log(findSum(99));
*/

// introducing an async function  
function findSum(n){
 let ans = 0;
 for(let i=0 ; i<n ; i++){
  ans += i;
 }
  return ans;
}

function findSumTill100(){
   console.log(findSum(100));
}

setTimeout(findSumTill100, 1000)
console.log("hello world");

// setTimeout is an async function given to us by javascript.
// a premade function to run a specific function after some time.

// how is setTimeout an async function

/* ***** It is an async function as woh rukta ni h for 1000 milliseconds or whatever time is inserted in it(setTimeout)
 to run the aage ke functions like console.log("hello world"); 
 aage ke code pe skip kr jaayega execution instead of waiting for the time period given in the setTimeout function.
 Hence setTimeout is an async function. **************
*/

/* if we would hv just written findSumTill100();  ***********
 Toh obviously pehle ye run hota fir console.log("hello world"); run hota 
 cuz synchronous hoti fir proggramming. One by One.
 setTimeOut() toh chala ni h toh asynchronous hui ni h
*/

/* Some common async functions.....
 * setTimeout()  

 * fs.readFile    to read a file from your filesystem
  humari javascript file can read anotherv text files, mp4 files, JSOn files etc.
  Ye jo file hogi it might take some time to read, toh by that time the code can skip and execute other things asynchronously
  And reading ke baad we can do whatever we want with it with a callback.
 
  * fetch()  to fetch some data from an API endpoint
*/

const fs = require("fs");

// here we are requiring an exterenal library called fs which is basically called file system
// It is a node js library that lets you do a few things like reading from a file etc...


fs.readFile("a.txt", "utf-8", function(err, data){
  console.log(data);
});
/*
 When something goes wrong:
 * err → contains an error object
 * data → is undefined

 When everything goes right:
 * err → is null
 * data → contains the result
*/
console.log("hi there");

/*  ***imp****
 "hi there" got printed first first and "hey there from a.txt" got printed lated cuz fs.readFile is an asynchronous function
 jese he fs.readFile pe pahuche woh text file se data collect krne chala gya and code aage execution pe skip kr gya ki data aata rhega hum run krte h aage.
 hence asyncronous running hori thi.
*/

let a=0;
for(let i=0; i<=10000000; i++){
  a++;   // random loop which will take very long.    **** bc itne zeroes daal diye the run hee ni hora tha.*****
}
console.log(a);

console.log("hey there 2");

/* working
 Toh imp cheez ye h ki JS thread hota h ek jo saari lines of code ko run krta h one at a time.
 jab ye thread fs.readfile pe pahucha toh dekha time lgega and fs.readfile async h toh ise aage jump klrna allowed h. Hence ye aage jump krta h.
 hi there print kiya then ye uss ghane lambe loop pe pahucha and woh looprender hona start hua.

 Toh the thing is ki jab iss bade loop ki rendering start hone ke baad at any moment agr fs.readfile apna kaam kr bhi chuka ho, 
 Tab bhi pehle iss loop ki rendering khtm hogi then fs.readfile ke result pe jaayega.

 and then at the end hey there 2 print hoga.
*/

/*
 actually hey there 2 is also printed then uske baad fetch kr paaya text file se text.
 Because JS pending call backs pe end mei jaata h harkirat said. He means woh single thread agr skip kr gya aage toh aage wale jkaam pehle krega then pending async callback ke result pe jaayega.
 [ which is kind pof weird idk cuz agr bhot bada code h toh saara excecute hone ke baad callback pe aayega.]

 *** but baat ye bhi h ki bc saara code run hone mei time hee kitna lgta h.***
 its not that much of a time difference.
*/

// **** kamla didi sauce leke aa jaayengi but woh khadi rhengi ek callback queue meiand we will ignore her and focus on what we are doing and she will be called when bhaiya will be done with doing whatever he was doing. i.e when he will be free tab didi ka sauce(output) lenge.****


/* 
 console.log("hey there");
 setTimeout(function(){
    console.log("from inside async function");
 }, 20000);

 let a=0;
 for(let i=0; i<10; i++){
    a=a+1;
 }
 console.log(a);
*/

// *******latentflip loupe ki khaas baat ye h ki woh line by line dheere dheere run krta h toh let uk whts happening.******

/* setTimeout async h toh uske liye usko sklip krenge uski 20 sec ki loading chalegi wep apis section mei
 and idhar baaki ka code run hora hoga apna i.e loop 
 async function uss side khtm kr lega but tab bhi hum uske result pe jump ni krenge.
 Woh async callback queue mei jaake baith jaayega.
 And jab JS thread free hoga baaki ki cheezein krke toh woh fir dekhega callback queue mei kon baitha h and then unko run krega.
*/

/* *****yahan wale mei do async aake baithenge callback queue mei while loop will be running****
 

 console.log("hey there");
 setTimeout(function(){
    console.log("from inside async function 1");
 }, 20000);

 setTimeout(function(){
    console.log("from inside async function 2");
 }, 10000);

 let a=0;
 for(let i=0; i<10; i++){
    a=a+1;
 }
 console.log(a);
*/

// 10 seconds wala callback queue mei aage rhega. and unn dono asyncs mei it will be first to give the result***8

// heres where the the concept of callbacks is really needed and used. IN ASYNC FUNCTIONS
// like synchronous wali square cube & sum of something mei toh callback use krre the but uske bina bhi hum kr skte the.
// HERE IN THE CASE OF ASYNC FUNCTIONS. A CALLBACK IS A NEED/DESIRE/ZAROORAT.
// TOH YES

// call stack kehte h usse jahan execution chalra hota h. Jab tak call stack khaali naa ho tab tk woh callback queue mei wait krte h.

/* 
 fs.readFile("a2.txt", "utf-8", function(err, dat){
 
   // jo bhi data handling krni data ko acces krke woh yahi hee krni pdegi baahar ni kr skte. 
   // i.e data itne hee section mei accesssible hai. 
   // hnn ofcourse yahan baahar ke functions access kr skte h
   // like koi function Z tha jo baahardefined h and sume data as argument bhejna is one of the things toh we can call it here.

 })

 */
/* 
 const fs = require("fs");

 fs.readFile("a1.txt", "utf-8", function(err, data){
   
   data = data + "harkirat was here";
   fs.writeFile(); // idk how to use this.
   
 })
