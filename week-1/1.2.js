/* Important pointer section
 JS is a dynamic language i.e a variable can  be changed from numeric to string etc. Unlike in C++
 JS is an interpreted language i.e. can run partially and error wali line pe aake ruk jaayega but in compiled languages like c++ code thoda bhi ni chalega agr thoda bhi error h.

 */

// QUES_ write a program that prints all even numbers in an array
let person1 = "harkirat";
let person2 = "kiran";
let person3 = "harman";
//or another way of writing
let personArray0 = ["harkirat", "kiran", "harman"];

const ages = [21, 22, 23, 34, 35];
for(let i=0; i<ages.length; i++){
    if(ages[i] % 2 == 0){
        console.log(ages[i]);
    }
}

// write a program to print the biggest number in an array.
const num = [32, 21, 23, 45, 69, 58];
let biggestNum = num[0];
for(let i=0; i<num.length; i++){
    if(biggestNum<num[i]){
        biggestNum = num[i];
    }
}
console.log(biggestNum); //done

// write a program that prints all the male people's first names given in a complex object. 

let person4 ="harkirat";
let gender1="male";
let person5="raman"
let gender2="male";
let person6="riya"
let gender3="female";
// having above 6 lines of data in array is much more helful to solve this question.
const personArray1 = ["harkirat", "raman", "riya"];
const genderArray = ["male", "male", "female"];

for(i=0; i<genderArray.length; i++){
    if(genderArray[i] == "male"){
        console.log(genderArray[i]);
    }
}
 
// instead of having multiple arrays we cxan also have multiple objects.
/*
 const user1 = {
    firstName : "harkirat",
    gender:"male"
 }
 const user2 = {
    firstName : "riya",
    gender:"female"
 }
*/    
//BUT STILL MULTIPLE VARIABLE H TOH BEST IS TO CREATE MULTIPLE OBJECTS INSIDE A SINGLE ARRAY.

// we can also make arrays of objects. not just of strings of numbers.
const allUsers = [
    {
        firstName:"harkirat",
        gender:"male"
    },
    {
        firstName:"raman",
        gender:"male"
    },
    {
        firstName:"riya",
        gender:"female",
        metadata:{
            age: 21,
            address:"something"
        }
    }
]

for(i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"]); // agr gender male h toh uska firstName print kr do.
    }
}
// ***** OBJECT KI KEYS HUMESHA SQUARE BRACKET MEI DOUBLE QUOTES KE ANDAR AATI HAI. ["key"]
// can make even webbbed and complex like:
//  console.log(allUsers[i]["metadata"]["age"]);

// FUNCTIONS CAN TAKE OTHER FUNCTIONS AS INPUT OFC.
const add = function findSum(a,b){
    return a+b; // returned value sum variable mei store hogi.
}

/* chatgpt can be imagined as a function

 function chatgpt(prompt entered by user){
    // heavy machine working to get the desired output
 }
*/
// whenever js compiler sees a funcytion, it skips it obv and remembers to go there when that fuction is called.
function sum(a,b){
    let result = a+b;
    return result;  // or couldve written just return a+b ..........both ways are right
}
 const sumation1 = sum(1,2);
 const sumation2 = sum(7,5);

console.log(sumation1);
console.log(sumation2);

// Functions can take other fuctions as input (CALLBACKS)
 
function displayResult(data){
    console.log("Result of the sum is : " + data);
}
function displayResultPassive(data){
    console.log("Sum's result is : " + data);
}

// Q) we are only alloweed to call one function after this to display the result of a sum.

let ans = displayResult(sum(9,7));
let ansPassive = displayResultPassive(sum(2,6));

console.log(ans);
console.log(ansPassive);  // idk why these two are showing "undefined"

// inn dono ke mei undefined kyu aara h ************
/*
 displayResult & displayREsultPassive both are NOT returning any value toh ans & ansPassive mei koi value store ni hori. hence console.log is NOT printing anything.
*/
// another way of directly integrating a display function inside a sum function.

function sum2(a, b, fncCallback){  //fncCallback is an argument ofcourse
    let result = a+b;
    fncCallback(result);
}

let ans2 = sum2(4,16, displayResult);

function calculateArithmetic(a, b, operator){
    if(operator=="add"){
        return a+b;
    }
    if(operator=="sub"){
        return a-b;
    }
}

let value0 = calculateArithmetic(8,8,"add");
console.log(value0);
// OR ANOTHER WAY OF WRITING calculateArithmetic function

function calculateArithmetic2(a,b,operator){
   if(operator=="add"){
     const value =sum(a,b);
     return value;
    }
    if(operator == "sub"){
        const value=sub(a,b);
        return value;
    }
}
function sub(a,b){  // sum function was alreaqdy declared previously.
    return a-b;
}

// or another way
function calculateArithmetic3(a,b,arithmeticFunction){
    let ans = arithmeticFunction(a,b);
    return ans;
}
const value1 = calculateArithmetic3(44,6,sum);
console.log(value1);

//SETTIMEOUT

function greet(){
    console.log("hello coders")
}
setTimeout(greet, 3 * 1000) 
// in setTimeout, first argument is a function itself and second argument tells ki how many milliseconds ke baad that function which is entered as argument will run.

// setInterval(greet, 2*1000);    setInterval FUNCTION

//this function will run greet function every two seconds.

// ques_ create a counter in java script that counts down from 30 to 0

function rough0(){
   console.log("Timerrrrr !!!");
} 
setInterval(rough0, 1*1000)
// isse lekin 30 pe rukega ni. Yaa fir ulta bhi ni chgalega 30 se 0 etc.

function rough1(){
    let i=30;
    console.log(i);
    i--;
}
setInterval(rough1, 1*1000)
// iss wale mei ye problem aari ki 30 hee print krta rhega continously infinite times

// actual ans
let count0 = 30;

function countdown() {
    document.getElementById("counter0").textContent = count0;

    if (count0 >= 0) {
      count0--;
      setTimeout(countdown, 1000);
    }
}

countdown();

//OR


let count1 = 30;

const timer = setInterval(() => {
    document.getElementById("counter1").textContent = count1;
    count1--;

    if (count1 < 0) {
      clearInterval(timer);
    }
}, 1000);

// K3B****** IMP*
/*
setTimeout(calculateSum, 1*1000);    Right way to put a function as argument
setTimeout(calculateSum(), 1*1000);  wrong way to put a function as argument
*/

//K3B How to access
const user3 = {
    name:"harkirat",
    age:24,
    address: {
        houseNumber: "11",
        street:1
    }
}
//way1
console.log(user3["address"]["houseNumber"]);

//way2
const address = user3["address"];
const houseNumber = address["houseNumber"];
console.log(houseNumber);
// hence two ways of printing house numkber

// Ques_  create a terminal clock (HH : MM : SS)






