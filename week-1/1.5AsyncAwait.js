// async await is just cleaner version of .then() we do in promises.

/* “.then() vs async await difference”

Your conclusion:

maybe there is no difference, they both do the same thing

✅ Mostly correct

Both do the same job.

They are just two ways of writing asynchronous code.

🔥 Real Difference (Simple)
.then() style
fetch(url)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));

This becomes nested when complex.

async/await
async function getData(){
   try{
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
   }catch(err){
      console.log(err);
   }
}

Looks like synchronous code, easier to read.

⚡ Important Practical Differences
1️⃣ Readability

.then() → chain style
async/await → sequential style

2️⃣ Error Handling

.then()

fetch(url)
.then(res => res.json())
.catch(err => console.log(err));

async/await

try{
   let res = await fetch(url);
}catch(err){
   console.log(err);
}
3️⃣ Debugging

async/await is easier.

🧠 One Line Summary

.then() and async/await both handle Promises.

The difference is only syntax and readability, not behavior.

⭐ Clean Correct Version of Your Note



Difference Between .then() and async/await

Promises are created by asynchronous operations in JavaScript such as fetch(), setTimeout(), database calls, etc.
To handle the result of these promises, JavaScript provides two approaches:

.then() chaining

async/await

Both are used to handle Promises, but they differ mainly in syntax and readability.

1. Using .then()

When we use .then(), we attach a callback function that runs after the promise is fulfilled.

Example:

fetch(url)
.then(response => response.json())
.then(data => {
   console.log(data);
})
.catch(error => {
   console.log(error);
});

Here:

fetch() returns a Promise object.

.then() executes only after the promise resolves.

If multiple asynchronous steps exist, .then() chains can become long and harder to read.

2. Using async/await

async/await is a modern syntax built on top of Promises that makes asynchronous code look more like synchronous code.

Example:

async function getData() {
   try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
   } catch (error) {
      console.log(error);
   }
}

Here:

fetch() still returns a Promise.

await pauses the execution of the async function until the promise resolves.

After the promise resolves, the rest of the code continues executing.

3. Key Differences
Feature	.then()	async/await
Syntax	Promise chaining	Sequential style
Readability	Can become nested	Cleaner and easier to read
Debugging	Harder	Easier
Error handling	.catch()	try...catch
4. Important Point

Both .then() and async/await work with Promises and behave the same internally.
async/await is mainly used because it makes code cleaner and easier to understand.

✅ One-line summary:

.then() and async/await both handle Promises in JavaScript, but async/await provides a cleaner and more readable way to write asynchronous code.
*/




// eVERYTHING ABOUT ASYNC AWAIT AND .then() IS COVERED ABOVE.
function kiratAsyncFunction(){
   let p = new Promise(function(resolve){
      resolve("hi async await");
   });
   return p;  
}

function main(){
    kiratAsyncFunction().then(function(value){  // jo bhi resolve hua h promise mei woh .then ke andar wale fuction mei as an input jaayegi. i.e. 'value' variable mei resolved data store hoga aake. Simple.
        console.log(value);
    })
}

main();

// will return just "hi async await" printed as result.


// **********************************************************

function main2(){
    let value=kiratAsyncFunction();
    console.log(value);
}

main2();
// will return "Promise('hi async await')" printed as result. 
// Cuz ab "value" variable mei ek function stored h which is returning a promise toh "value" mei ek promise store hua and printing "value" printed that promise.

// *******************************************


function kiratAsyncFunction2(){
   let p = new Promise(function(resolve){
      setTimeout(function(){
        resolve("hi async await 2");
      }, 3000)
   });
   return p;  
}

function main3(){
    let value=kiratAsyncFunction2();
    console.log(value);
}

main3();
// ye bas "Promise{ <pending> }" print kwaayega.

// main2 and main3 dono hi there async await wagerah kuch ni print krwa rhe. Dono bas promise states print krwa rhe h.
// main2 turant resolve ho jata h toh uska promise status "Promise { 'hi async await' }" dikhata h 
// and main3 mei setTimeout h toh uska promise status "Promise { <pending> }" dikhata h
// Agr kiratAsyncFunction2() mei setTimeout naa hota toh main3() fir "Promise { 'hi async await 2' }" print krwaaata.

// but if we create.

async function main4(){
    let value = await kiratAsyncFunction2();  // ye await wali line pe code kind of hung ho jaata h.
    console.log("await ke just baad wali line");
    console.log(value);
}                       

// .then() jesi hee cheez jus with different syntax. We used to get our promise resolved then we used .then()  
// Yahan pe bhi same. Gonna "await" until our promise runs. Then aage ka code run hoga which is console.log("await ke just baad wali line") >console.log(value);

main4();

// ab iska ek promise{<pending>} nhi aaqyega cuz iska bhi promise late resolve hota h but humne yahan await lga diya. Ki wait for promise to resolve.

// ek Promise {<pending>} aara hoga woh pehle kisi ka h check it urself.

// using await is the concious decision of a developer ki hnn i want to wait here and see async function run completrely and then move forward.

// again, it is just syntactical sugar. still uses callbacks/promises under the hoodJust makes code more readable than callbacks and promises

// usually used on the caller side. not on the side where you define an async function.
// mtlb jahan promise h vahan ni daalenge keywords async await.
// we can only await inside an async function. 

/* all three mostly do the same thing.
 * callbacks
 * promises(.then)
 * async await
 Just becomes more manageable as we move to the bottom in list.
*/
