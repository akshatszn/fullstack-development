//LEC_1 BASICS VARIABLES OBJECTS

console.log("apna college");
console.log("aksh");
firstName = "harsh";
console.log(firstName);
console.log("firstName");


//SPECIAL VALUES IN JAVA SCRIPT

let n = null;
console.log(n);
//null mtlb jus nothing. null ka mtlb uss variable mei koi value or data nhi h.
//can be used jab abhi koi variable banana h but value usme baad mei assign krni ho.


let m = undefined
console.log(m);
//undefined mtlb ky value h pta nhi. ho skta h kuch ho but defined naa ho we never know.
//null mei confirmed h koi value ni h

var age1 = 20
var age1 = 27
var age1 = 32

console.log(age1);

//var mei redaclaring possible thi and problem with redclaring is ki ab ek hee jese multiple variables defined h.
//picchla wala update nhi hua. ek naya hee age1 banke aaya harr baar.
//toh iske baad jab console.log mei age daalenge to woh sabse latest wale age1 variable ki value dega.

let age2 = 19
age2 = 24
age2 = 30

console.log(age2);

//yahan let se krne pe teen age2 variable nhi banre
//instead same age2 variable update hota h.
//so now age2 ki value 30 dikhayega in codebase ko latest updated value woi h.

//UPDATE IS LIKE SAME GHAR MEI NAYE LOG AAKE RHENGE
//REDECLARATION IS LIKE PURAANA GHAR TODKE NAYA GHAR BANANA WAHAN AND USME FIR KESE BHI LOG AAKE RHE NAYE PURAANE WHO CARES. GHAR TOH NAYA H.

let a;
console.log(a);
//a variable ke andar koi value nhi daali toh undefined.

//BLOCKS ke baahar use nhi ho skta koi variable jo ek certaian block mei define hua h.

{
    let x = 5;
    console.log(x);
}

{
    let x = 17;
    console.log(x);
}

//do diff blocks mei do diff x define hue h and woh dono uss block ke baahar use nhi ho skte.
//and ofc woh unn blocks mei ek aur x reclare nhi kr skte coz ab ek x h uss block mei. obv update kr skte h.

//DATA TYPES

//1) Number type
let age = 19
console.log(typeof age);

//2) string type
let fullName = "JOE GOLDBERG"
console.log(typeof fullName);

//3) boolean type
let isFollow = true 
console.log(typeof isFollow);

//4) undefined type : by default saare variables undefined hote h until we put any value in them.

//5) null type : already done

//6) BigInt type
let x = BigInt("123")
console.log(x); //x print krwaane pe ab 123n likkh ke aayega
console.log(typeof x);

//7) symbol type
let y = Symbol("hello!");
console.log(y); //result mei Symbol(hello!) likha aayega
console.log(typeof y);
//OBJECTSS

const student = {
    fullName : "akshat", //objects ke curly braces ke andar colon : use hota h instead of equal = sign
    age : 19,
    cgpa : 10,
    isPass : true 
};
//yahan upar teen error dikhara h idk why.

console.log(student);
console.log(typeof student); //object as result
//accessing keys of the above object now
console.log(student.fullName);
console.log(student.age);
console.log(student.cgpa);
console.log(student.isPass);

//HOW TO UPDATE VARIABLES OF AN OBEJECT
//OBJECTS KE VARIABLES KO CURLY BRACES MEI UPDATE NI KR SKTE. 
//OBJECTS KE ANDAR KE VARIABLES KO OBJECTS KE BAAHAR UPDATE KRTE H. now ik kese kyu curly braces ke baahar woh toh block ke baahar ho jaayega. BAS OBJECT KE LIYE RELAX.

student.age = student.age + 1 ;
console.log(student.age); //result 20 dikhayega iska
student.fullName = "AKSHAT SINGH PARIHAR";
console.log(student.fullName); // akshat ki jagah ab AKSHAT SINGH PARIHAR ofc
//btw age bhi fullname ki tarah update kr skte the, like    student.age = 20 (shyd)

//students object ko const liya tha tph changes kese ?
//CONST VARIABLES MEI KOI CHANGES NHI KR SKTE BUT CONST OBJECTS KI KEYS MEI CHANGE KR SKTE H

