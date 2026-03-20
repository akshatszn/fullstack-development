// CALLBACKS PROMISES & ASYNC         //interview important********

//k3b ek kaam kr iss file ko sections mei divide kr and ek baaar mei ek hee section ko run kr for better understanding coz results bhot saare upar neeche honge  &
// will be very hard to understand.

// in this lecture we'll explore asyncronous program 
/*
at the end of lecture we'll arrive at a conclusion ki in general JS mei when we use asyncronous chezeein krne ki koshish krre hote:
async await >> promise chains >> callback hell
*/

/* SYNC in JS

SYNCHRONOUS: means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.
(abhi tak yahi hee krre the jahan tk obviously)
Hum abhi tak mostly jo bhi kaam likkhe h unme se maximum ki functioning instantaneous ho rhi thi shyd toh maybe we didnt notice but...
kabhi kabhi humaare code mei kuch kaam hone mei time le skte h. toh unke liye agle waale instructions ko wait kyu krna pade. Toh we have:
ASYNCHRONOUS: due to synchronous programming, some important instructions get blocked due to some previous instructions, which causes a delay in the UI. 
Asynchronous code execution allows to execute next instructions immediately and doesnt block the flow.
*/
/* 
API ko aisa ek system maanlo jo kisi duusre vyakti ne banaya hua ho
Jisme kuch request kro toh data milega return pe.

Jese weather API mei daalo REQUEST for delhi ka weather and it will give us that. 

backend mei generally koi naa koi API hee hota h to fetch that data. Kuch jo h apna API build krti h while kuch third party API's ko use krti h.

TOH WAHI CHEEZ H WHT IF API SE DATA FETCH HONE MEI THODA TIME LGE AND IT CAN CREATE SOME DELAY. TOH JO AAGE WALA CODE H USSE WAIT THODI NAA KRNA CHAHIYE TO GET THAT DATA 
EVEN THOUGH THAT AAGE KA CODE DOESN'T NEED THAT. 

>>> code1
>>> code2
>>> API ka code  // ispe pohoche aur ye zyada time lera h toh isko hum paralelly run krwaayenge while we can jump to code3 here.
>>> code3
>>> code4
*/

// setTimeout() kisi bhi function ko execute krta h and woh kab execute hoga ye bhi hum decide kr skte h.
function helooo(){
    console.log("HELLO !!")
}

setTimeout(helooo, 2000) // timeout: 2 seconds = 2000 miliseconds

// Ab ye setTimeout function execute toh kraayega hee woh toh hee iska ka kaam ( hence ye ni sochna ab ki function call toh hua ni fir execute kese hua.)
// and ye saath hee saath do second baad execute kraayega.
// 2000 ka 400 kr do toh 4 second baad helooo function execute hoga.

// or we can also just CREATE AN ARROW FUNCTION INSIDE THE setTimeout()

console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("HEY THERE !")
}, 4000);  // 4 second baad execute hoga.

console.log("three");
console.log("four");

// code 49 & 50 toh bilkul affect ni honge setTimeout se
// code 56 and 57 dont depend at all on setTimeout. Toh obv woh 4 second wait thodi krenge for setTimeout to run.

// CALLBACKS : is a function passed as an argument to another function.******

function sum(a, b){
    console.log(a+b);
}

function calculator(a, b, sumCallback){   // sumCallback ek jagah h ofc jahan call back kr skte h 
    sumCallback(a,b);
}

calculator(1, 2, sum); // will give addition of 1 and 2 ofc

// BUT AISA BHI ZAROORI NHI H KI sumCallback KI JAGAH JO FUNCTION DAALA CALLBACK HONE KE LIYE WOH PEHLE SE DEFINED HO.
// WOH FUNCTION THAT NEEDS TO OPERATE WOH DIRECT WAHI APRENTHESIS MEI BHI DAAL SKTE H.
// THO IDK YE DECLARATION OF FUNCTION MEI DAALENGE(line: 68) OR DIRECTLY AT OPERATIONAL LINE(line: 72)

// areyyyyyy sumCallback ki jagah "sum" nhi daalenege in operational line, instead arrow function daalenege

calculator(7, 2, ()=>{
    console.log(7-2);
})

// obviously setTimeout bhi callbacks leta h as input. or as arrow function ofcourse.

/* 
  CALLBACK HELL: nested callbacks stacked below one another forming a pyramid structure.
  Pyramid of doom
  This style of programming becomes difficult to understand and manage.
*/
// nesting mtlb jese if ke andar if ke andar if ke andar ek aur if.
// example of nesting:
for(let i=0; i<5; i++){
    let str = "";
    for(let j=0; j<5; j++){
        str = str + j;
    }
    console.log(i, str);
}

// ALL THESE TOPICS NEED TO BE STUDIED ATLEAST 2-3 TIMES & PRACTICED A LOT TO UNDERSTAND COMPLETELY.
// to know ki konsi particular problem konsi situation mei arise kregi ye experience ke saath aayega.
/*
 suppose ek website h jo ek database se data fetch krti h. And its very time consuming in coding terms ofcourse.
 
*/
function getData(dataId, getNextData){   // maan lete h ye do second leta h to search all the data and give it to them. TOH USKE LIYE:
    setTimeout(
        ()=> {
            console.log("data", dataId);
            if(getNextData){
                getNextData();
            }
        }, 2000
    )
}

getData(74);

// agar hume data 1, data 2, data 3 chahiye. And teenon mei delay ho do second ka ofc.
getData(1); // 2 second ka timer set hua and decided to run aage ka code
getData(2); // 2 second ka timer set hua and decided to run aage ka code
getData(3); // 2 second ka timer set hua and decided to run aage ka code

// iska example ki if we login in our insta and enter username & pass. If code aise likha h ki pehle data base mei woh certain username check hoga 
// and then username hua toh uske liye respective password check krenge.

// TOH YE EK TARAH KA EXAMPLE HO GYA JISME HUME KUCH CHEEZEIN CHAHIYE BUT EK SAATH NHI.EK ORDER MEI INDIVIDUAL DATA CHAHIYE THODE THODE TIME GAPS MEI.
// toh ye krne ke liye hote h callbacks 

/* 
 Toh ye dikhaane ke liye getData ke andar dataId ke alaava ek aur function as an argument daal diya jo ab tab run hoga jab console.log("data", dataId); run ho chuka hoga.
 getNextData daala next function.
*/

getData(17, getData(19));  // getNextData callback jo h usme as a callback getData ko hee daal diya.

// bas ek dikkat ki aise getData(19) likkhne se woh pehle execute ho jaayega.

// CALLBACKS ARE WRITTEN LIKE

getData(17, ()=>{
    getData(19); 
})
// SABSE CRAZY CHEEZ YE H KI BC HUMNE CALLBACK KE ANDAR getData DAALA TOH EK CALLBACK AUR DAAL SKTE H USS CALLBACK WALE getData KE ANDAR.

// ISS HEE LIYE DAALENGE if(getNextData)  TAAKI CALLBACK TBHI CHALE OFCOURSE JAB CALLBACK DAALA HO CUZ ANDAR WALE CALLBACK KE ANDAR CALLBACK NHI DAALA HUMNE.
// like couldve been:

getData(12, ()=>{
    getData(15, ()=>{
        getData(18, ()=>{
            console.log("very very minimal & basic example of callback hell");
        });
    });
})

// saara code iss file mei upar neeche hoga ofcourse coz timeoute lge hue h.

getData(23, ()=>{
    console.log("getting data2")
    getData(25, ()=>{
        console.log("getting data3");
        getData(27, ()=>{
            console.log("very very minimal & basic example of callback hell");
        });
    });
})
// aisa kuch ni h ki we shouldnt use callbacks, its just that agr feel ho callback hell aara h toh just stop using it & try going for better methods.
// callback hell is a problem in JS jisko counter krne aaya PROMISES.

/* PROMISES
 promise is for "eventual" completion of task. It is an object in JS. 
 Amazon se order krna and woh cheez do teen dinn baad deliver hona is a promise. Toh ab hum wait thodi krte h uss promised task ke complete hone ka. Hum toh apne baaki ke
 kaam krne mei lg jaate h. And ab time aane pe uss promise ke do results nikal skte h. Either the promise will be kept and humara order deliver ho jaayegaa as said in the 
 promise. Yaa fir promise will be rejected meaning it will not be delivered due to any circumstance we dont know.
*/
// thats why we say its is for "eventual" completion of task. either the task will be resolved or rejected.

/* syntax:
let promise = new Promise((resolve, reject)=>{....})
*/

let promise0 = new Promise((resolve, reject)=>{
    console.log("I am a promise0");
    resolve("promise resolved 123abc");
})

console.log(promise0);
// toh ye as  a object print hoke aayega and iski properties milengi hume ofc.
// iska ek prototype aayega ofc and ek PromiseState aayegi likhi hui jiska likkha hoga "pending", and ek PromiseResult : undefined
// promise ki teen states hoti h obv: pending, resolved and rejected.
// RESOLVE & REJECT ARE "FUNCTIONS" CREATED BY JS
// toh ye dono mei se atleast koi ek add krenge and usme and woh jab chalega tabhi PromiseState change hoke kuch aur aayegi i,e, resolved or rejected. 
//resolve upar wale promise mei dala and reject neeche daaalenge. 

let promise1 = new Promise((resolve, reject)=>{
    console.log("I am a promise1");
    reject("Some Error 1234abcd"); // ek error create kr diya.
})

// promise0 ki state: resolved and result: promise resolved 123abc
// promise1 ki state: rejected and result: Some Error 1234abcd
/*
 general programming mei hum promise object ko create ni krte. Agr hum kisi API ke paas request bhejte h ki hume ye data chahiye toh woh hume ek promise return krta h.
 Aur fir hum unn rpomises ke saaath deal krte h, unse data nikaalte h, result nikaalte h state check krte h.
 But abhi humne API's yaa kisi duusre system ke saath deal krna start ni kiya toh we are creating our own vrna generally hum bas deal krre hote h unse.
*/
// IN GENERAL HUME API DIRECTLY DATA NI DETA WOH DIRECT PROMISES DETA H WITH resolve & reject

// "resolve" & "reject" are promises provided by javascript itself.

function getData2(dataId2, getNextData2){   
    return new prommise2((resolve, reject)=>{
        setTimeout(
        ()=> {
            console.log("data", dataId2);
            resolve("PROMISE RESOLVED");
            if(getNextData2){
                getNextData2();
            }
        }, 5000);
    });
}

getData2(123); // ye getData2 wale promise ki state jo h woh pending hogi when immediately getData2 runs.
// COZ PAANCH SECOND BAAD PRINT HONA H "data" AS WE KNOW. 
// AUR EK BAAR "data" PRINT HOGYA i.e. RESULT AAGYA TOH FIR promise ki state will be resolved ig

// but abhi bhi promise ki state pending dikhaayega even after all the things. And promiseResult will be undefined 

/*
 AGR API KE DWAARA DIYE GYE PROMISE SE HUM SUCCESSFULLY APNA DATA RETURN KARWA LETE H TOH USKE BAAD HUM APNE PROMISE KO RESOLVE KR LETE HAI.
 zaroori ni h data fetch krna hee can be the only work but i thinks its a general example in usecase.
 And also theres no specification ki resolve function ky krwaayega. Hum toh print krwa rhe h console mei ki "PROMISE RESOLVED"
*/
/* 
 CONSOLE WINDOW MEI LIKKHA AB JAAKE let promise2 = getData2(1987);**********************
 AND THEN 5 SECOND HONE SE PEHLE DAALO NEECHE WALI LINE KA
 ab likkho "promise2" then run, toh promise2 ka kaccha chittha aayega.

 Jisme likkha hoga iska type which will be promise ofcourse.
 and iska state which will be "pending" coz abhi run hua ni h coz 5 second hue ni h.

 jab 5 second ho jaaye and getData2(1987); ka result aajaye toh firse "promise2" likkho jispe fir hume katccha chittha milega
 And here now, promisestate will be "fullfilled"
 and promiseResult will be "PROMISE RESOLVED" 
 
 Yahan toh promise humne banaya but in general hume data fetch krte time milta h. and then unhe resolve reject krte h hum shyd.
 Jese GETTINGDATA store in a PROMISE. #variables ke naam bhot soch ke rakkhe h. Read bw em and follow a pattern.

 A JS object can be:
 * Pending: the result is undefined
 * Resolved: the result is a value(fullfilled)
 * Reject: the result will be an error object 
 
 PROMISE CAN BE USED FOR EX: KI AGR USERNAME AND PAAS DAALA INSTA PE AND SAB SHI HOGYA TOH OBVIOUSLY RESOLVE CAN BE JUMPING TO THE RESPECTIVE USER'S PAGE.
 BUT SIRF YAHI EK CASE POSSIBLE THODI H
 PASSWORD OR USERID CAN BE WRONG JISPE HUM REJECT MAARENGE OBVIOUSLY AND HENCE LOGGING IN TO THE USER'S PAGE WALA PROMISE FULLFILL NHI HOGA.

 resolve(result);
 reject(error wala koi object);
*/

/*
 how are promises ACTUALLLLYYY USED.......

 JAB PROMISE FULFILL HOGA TOH OBV HUME KUCH KAAM KRWANA HOGA. 
 OR JAB REJECT HOGA TAB BHI KUCH KRENGE HEE. 
 TOH USSHEE KE LIYE H RESOLVE REJECT FUNCTIONS.

 promise.then((res) => {.....})     // ye obv bhot zyada use hota h in general
 promise.catch((err) => {....})      // as compared to this one
 
 promise.then ke andar wala function will execute jab promise will be resolved.
 
*/

const getPromise = ()=>{
    return new Promise((resolve, reject)=>{  //"return" keyword before storing a promise in a const is very neccessary ig.
    console.log("I am a promise");
    resolve("Task Successfull");
    reject("Network error, Please try again later");
});
};

let promise2 = getPromise()
// its clealy i the name ki promise2.then krta h ki agr promise2 is resolved THEN wht will be done.
// promise.then ke andar arrow function mei apna kaam likkh skte h JO KRWAANA HAI OFC AFTER FULLFILLMENT.

promise2.then((res) => {
    console.log("Promise Fullfilled", res);
})  

// promise.catch ke andar arrow function mei apna kaam likkh skte h JO KRWAANA HAI OFC AFTER REJECTION
let promise3 = getPromise()

promise3.catch((err)=>{
    console.log("REJECTED", err);
})

/* PROMISESSSSSSSSSSSSSS***********************************
 Toh basically promise ke syntax ke andar kuch likkha humne. KUCH KAAM OBV.
 And uss kaaam ke baad we wrote resolve() and reject() functions. AND INKE ANDAR JAAYEGA KI KAAM EXECUTE HUA TOH KY KRNA H, KAAM EXECUTE NI HUA TOH KY KRNA H RESPECTIVELY.
 ab main part ki resolve hona h yaa reject ye decide krenge us by choosing which function to call.  promise.then   or    promise.catch

 Agr we did promise.then() toh Promise ke syntax ke andar jo likkha h woh execute hoga. And jo promise.then() ke andar likkha woh bhi after promise is executed,
 ofc if promise.then() ke andar kuch likkha otherwise sir promise fullfill hoke chhor dega. For example:
 like .then liya toh console.log("I am a promise0"); execute hoga. and uske execute hone ke baad woh hoga jo promise.then mei likkha.

 Agr we did promise.catch() toh Promise ke syntax ke andar jo likkha woh TAB BHI EXECUTE HOGA BAS ALONG WITH AN ERROR THIS TIME. and promise.catch ke andar jo likkha woh execute hoga along with giving an error shyd.

 now we wonder ki fir resolve and reject ke andar jo likkhte h yaa maarte h woh ky h ??
 they(woh jo resolve reject ke andar lkkhte h) are basically two data that are stored in variables "res" and "err" respectively.
 resolve hone pe promiseResult "res" banta h and reject hone pe promiseResult "err" banta h. mpost prolly.

 And promise.then & promise.catch mei "res" & "err" naam ke variables already declared h. so we can use them directly if we want. and they have the value stored obviously of the data written in
 resolve() & reject() respectively.
 directly daal diye in parenthesis of .then() & .catch()
 And hnn obviously inke curly braces mei use krne se pehle inn variables ko parenthesis mei daalana pdta h.
*/

// PROMISE CHAINING
function asyncFunction(){   // timeout use hua h toh most prolly asynchrounous hoga.
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success data1 giving");
            reject("rejected data1 not giving");
        }, 4000);
    });
}

function asyncFunction2(){   
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("success data2 giving");
            reject("rejected data2 not giving");
        }, 4000);
    });
}

/*
 let p1 = asyncFunction();
 let p2=asyncFunction2();

 console.log("fetching data1.....");
 console.log("fetching data2.....");

 p1.then((res)=>{
    console.log(res);   
 });

 p2.then((res)=>{
    console.log(res);   
 });
*/



// pehle fetching data1...... likkh ke aayega
// fir 4 second jab ho chuke honge toh we"ll get "some data1" , coz humne .then use kiya hence promise resolve hoga ofcourse.
// and after promise being resolved .then ke andar ka samaan execute hoga i.e. console.log(res); 
 
// APIs hume promises dete h jinpe hum .then or .catch lgaate h 

/*
 Upar jo humne likkha usse output will be like:

 fetching data1.....
 fetching data2.....
 some data1
 success data1 giving
 some data2
 success data2 giving

 clearly yahan jab humne aise algos use kiye toh fetching of data1 and data 2 paralelly chalri thi.
 but we want ki pehle dAta1 fetch ho then uske baad data2 fetch ho.....like jese insta ke database mei username mile tabhi password ke liye check kro type logic.

 TOH ISKE LIYE WE CAN DO CHAINING : ek then() ke andar duusra then()
 #upar ka program jispe abhi tk baat krre the usse hata diya obv
*/
console.log("fetching data1.....");
let p1 = asyncFunction();
p1.then(()=>{
    console.log("fetching data2....."); // console.log(res) ki zarroorat ni dono mei leave it for now.
    let p2=asyncFunction2();
    p2.then(()=>{});
});
/*
 pehle fetching data1 likkh ke aayega then chaar second baad asyncfunction1 carryout hoga i.e. data1 mil jaayega.
 then same will happen for data 2

 now result:

 fetching data1....
 data1
 fetching data2....
 data2
*/
//for same result we could have also written:

/*
 console.log("fetching data1.....");
 asyncFunction().then(()=>{
    console.log("fetching data2....."); 
    asyncFunction2().then(()=>{});
 });
*/
// p1 and p2 define ni kiye directly functions pe .then maar diya

function getData3(dataId, getNextData){   
   return new promise((resolve, reject)=>{
     setTimeout(
        ()=> {
            console.log("data3", dataId);
            resolve("success data3 giving");
            if(getNextData){
                getNextData();
            }
        }, 3000)
   })
}

/*
 let p3 = getData3(1512);
 p3.then((res)=>{
    console.log(res);
    getData3(1513).then((res)=>{
        console.log(res);
    })
 })
*/
// pehli baat toh p3 wagerah variables mei daalna neccessary ni h. You can also just write functions name.
// and better way to write is by promise chaining
// PROMISE CHIANING
console.log("getting data1....")
getData3(1512)
.then((res)=>{
    console.log("getting data1513");
    return getData3(1513);
})
.then((res)=>{
    console.log("getting data1514");
    return getData3(1514);
})
.then((res)=>{
    console.log(res);
});

// same result for both programs jo pehle and this.
// but promise chains bhi thodi difficult to understand ho skti h toh we go one step ahead and use async await.

// ASYNC AWAIT  ********* async and await are two keywords in JS that make asynchronous programming easy for us.

// async function ALWAYS RETURNS A PROMISE
/*
   async function functionkaNaam(){......}
*/

// await pauses the execution of its surrounding async function until the promise is settled.

async function helloAsync(){
    console.log("async starts");
};

helloAsync(); // ab ye function toh execute hoga hee but saath mei hume ek promise bhi milega.
//Although humne kahin kuch define ni kiya but still dega woh ek promise compulsory and its state was "fullfilled"
/*
 agr hum kisi function ko call lgaare h and hume pta h uske saath koi promise aane wala h
 aur iss function ke aage fir hum "await" lgaade toh await wait lrega for promise to get settled. i.e. jab tk promise "pending" hai tb tk hum wait hee krte rhenge.
 await ko async function ke andar hee use kr skte h.
*/
// how to use.

function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
        resolve(200); // resolve mei 200 daalna means data from api fetched successfully.
        }, 2000)
    })
}
// ek function h humaare paas jo promise return krta h.
// uske baad hume ek async fuction banana pda to 'await' that function i.e. api() function
async function getWeatherdata(){
    await api();// aaspaas ki functioning ruk jaayegi jab tak api() function ka promise settled naa ho jaaye.
    await api();// aise multiple times bhi call kr skte h. And this api() call will not run until previous one executes completely.
};
// above syntax coding can be used in cases jab hume chahiye ki hum chaahe pehle ek kaam ho then duusra ho then teesra then chautha. EVEN THOUGH UNME setTimeouts lge ho tab bhi.
// and obv zaroori ni h ki sab ek baar api() call krne ke baad firse wahi call kro. duusra bhi kr skte h obv.

function getData4(dataId, getNextData){   
   return new promise((resolve, reject)=>{
     setTimeout(
        ()=> {
            console.log("data3", dataId);
            resolve("success data3 giving");
            if(getNextData){
                getNextData();
            }
        }, 3000)
   })
}

async function getAllData(){
    console.log("getting World War-2 year 1");
    await getData4(1939);
    console.log("getting World War-2 year 2");
    await getData4(1940);
    console.log("getting World War-2 year 3");
    await getData4(1941);
    console.log("getting World War-2 year 4");
    await getData4(1942);
    console.log("getting World War-2 year 5");
    await getData4(1943);
    console.log("getting World War-2 year 6");
    await getData4(1944);
    console.log("getting World War-2 year 7");
    await getData4(1945);
};

getAllData();
// easiest syntax for similar task among the three things we learnt.

// teenon (callback hell, promises and async await) ke codes compare kar and imagine them on a high complicated level for similar task and youll find async await the easiest.

// in programming we either use async await OR .then() .catch() .......... in general async await heee tho.

/*
 promise and callback hell ko use krne ke liye we dont NEED to put that whole bulk inside a function and then call it,
 But in case of async await we need a function jisko call krna pdta h to run the whole bulk.
 like here we called getAllData()
 toh iss choti unneccessary calling of this function se bachne ka bhi tareeka h. 
*/
/*
 IIFE : immediately invoked function expression 
 ye bhi function hee hote h bas unka koi naam ni hota.
 Aur ye bas ek hee baar use hote h. Ek baar likkhe jaate h. Aur jahan likkhe jaate h vahin execute ho jaate h.
 unhe execute krne ke liye alag se call ni krna pdta.
*/
/* #syntax

 (//function ka code//) ();

 poora bulk function ka code wagerah jo bhi h usse ek parenthesis mei enclose kr do and ek parenthesis pair uske baad aur daalke semicolon. thats it.
 bas itna kiya toh function apne aap execute ho jaaayega, we dont need to call it. 
 #use:

 (async function getAllData(){
    console.log("getting World War-2 year 1");
    await getData4(1939);
    console.log("getting World War-2 year 2");
    await getData4(1940);
    console.log("getting World War-2 year 3");
    await getData4(1941);
    console.log("getting World War-2 year 4");
    await getData4(1942);
    console.log("getting World War-2 year 5");
    await getData4(1943);
    console.log("getting World War-2 year 6");
    await getData4(1944);
    console.log("getting World War-2 year 7");
    await getData4(1945);
 };
 )();
 
 ab apne aap execute ho jaata getAllData(), we dont need to call it like we did above. But hnn obv ye ek hee baar run krega aise. Dobaara run krna h toh call krna pdega.
 And honestly idk ki jo function IIFE MEI define hote h woh called back kiye bhi jaa skte h yaa ni.
 Just got to know fir re run ni kra skte.

 IIFE on MDN ********************************** uske advantages disadvantages everything there.
*/
