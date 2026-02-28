function onDone(content){
    console.log(content);
}
/*
 readFile mei as an argument daala onDone function toh ab file read krne ke baad jo bhi data (callin it content here) nikla uske saath ky krna h woh yahan pta chalega
 i.e. jo bhi reading hui h usse nikla data onDone function mei as an argument use hoga.
 basically agr ek baar data nikla toh uska krna ky h woh cheez woh wala fnc decide krega jo as an argument gya h in readFile.
*/
readFile("a2.txt"); // agr server ne bhot zyada time leliya return krne mei data

// OR return kiya hee ni kuch toh upar wali line pe hee stuck reh jaayega apna code.
// neeche wali lines execute ni hongi.

// So for these kind of tasks we can let our JS threads do other things while we jump onto the the aage ka code.

console.log("Hello first.");

// a2 text file might not run for enormous reasons. External source is NOT in our control.

// Put the below codes in LOUPE to understand asynchronation. and how it happens.
/*
let a=1;
console.log(a);

fs.readFile("a2.txt", "utf-8", (err, data) => {
    console.log("Data read from the file is");
    console.log(data);
})

let ans =0;
for(let i=0; i<=100; i++){
    ans = ans + i;
}

console.log(ans);
*/

// and

/*
 console.log("hi");

 setTimeout(function(){
    console.log("Hi there from inside");
 }, 5000)

 let b=0;
 for(let i=0; i<=10; i++){
    b=b+1;
 }

 console.log("after");
*/
//_______________________________

const fs=require("fs");

fs.readFile("a2.txt", "utf-8", function(err, data){
    console.log(err);
    console.log(data);
})

console.log("done");
/* 
 The order of output for the above code will be:
 done 
 null
 hellowwww from a2
*/

// null mtlb no errors ofcourse.


/* ****** hnn async functions ka callback end mei hee hota h. LIke woh execute hogyi hoti h.
 But still woh callback queue mei baithi rehti h until the whole stack is exhausted.
 uske baad baari baari callback wueue se nikalti h.***************
*/  

