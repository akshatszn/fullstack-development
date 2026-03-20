// LEC_5  FUNCTIONS AND METHODS  /imp.... line 160 forEach LOOP FOR ARRAY***************


// line 184 , 188 ,258(for each , reduce method and some imp shi)*********************8

// functions are a code that performs a specific task...... CAN BE CALLLED WHENEVER NEEDED........ek baar create krte h and the call em whenev needed
//console.log toUpperCasr etc. are all examples of cunctions as they are all called to perform a specific function or work

// functions ke saath humesha parenthesis zaroor jaate h whenev we are  calling them or whatev****

// creating our own functions and calling them
//WE CREATE THEM / DEFINE THEM AND CALL THEM WHENEV NEEDED BY SIMPLY WRITING THEIR NAME WITH PARENTHESIS


// declaring a fuction WE WRITE....." function functionkaNaam()  { }  "    curly braces mei work jaata h 
function akshunction(){
    console.log("aksh this is side");
    console.log(" i'm always trying to one up u in everything");
} 
//function hogya declare
//curly braces mei jo kuch bhi work likkha h woh carry out hoga WHENEVER WE WILL CALL THIS FUNCTION......BINA CALLING KUCH WORK NHI HOGA
// CALLING A FUNCTION
//jus write...... "  functionkaNaam();  "
akshunction();
akshunction();  // do baar call kiya mtlb curly braces wala program do baar run krega

// functions save us from redundacy i.e repitition se bchate h when we need to perform a same task many times the jus convert it into a fucntion then call it when needed

// Parenthesis mei input jaata h or we call it parameter

function messenger(message){
    console.log(message);
}
// now callin
messenger("Apna College"); // toh isse apna cllg print hoke aajayega
//agr yahan upar sirf messenger() likkh kr chhor dete toh error dikhata THIS FUNC NEEDS INPUT PARAMETER TOO

// multiple inputs bhi daal skte h 

function func0(message,n){
    console.log(message * n); 
}

// now calling this function
func0("I love coding",100);   //isse naN likkha aayega which means not a Number hence an error

func0(97,7); // ye solve hogya coz message and n dono number hone chahiye for em to be multiplied

function func1(msg,n){
    console.log(msg,n); // ab iss func mei woh pehla wala input daal skte h and error nhi dikhaayega coz comma h iss time
}

func1("I love coding",100);  //co

// creating a fnction to calculate sum of two numbers
function addition(a,b){
    console.log(a+b);
}
addition(75,39);

// return word likkhne se we know value solve hoke store ho jaati h bas print nhi hoti 

function subtraction(a,b){
    diff = a-b;
    return diff
}
// subtraction(10,7);          ye likkhne se solve hoke store hogyi value but print ni hui ofc.......isko ek variable mei daalan pdega then variable print krwao.
let difference = subtraction(10,6);
console.log(difference);  //unneccesary method

//ques_  creating a fucntion that counts and gives us the number of vowels in the string

function vowelcounter(inputstring){
    let count=0;
    for(let char of inputstring){
        if(char == 'a'){
            count++ ;
        }
        else if(char == 'e'){
            count++ ;
        }
        else if(char == 'i'){
            count++ ;
        }
        else if(char == 'o'){
            count++ ;
        }
        else if(char == 'u'){
            count++ ;
        } // YAHAN ISS LINE MEI NHI DAALA console.log(count) BECAUSE FOR LOOP KE BAAHAR DAALNA THA VRNA HAR BAAR ek vowel check krke woh count ki value print krta 
        // atleast thats what I think ki count ki value baar baar print hoti toh better ki baahar daala
    }
    console.log(count);
}

vowelcounter("aksh this side my love"); // KHUD SE LIKHAAAAAAAAAAAA PANCHOOOO
vowelcounter("aeiouuuu");

//ARROW FUNCTION *****   format:

// const functionName = ( parameter 1 , parameter 2.....) => work needed to be done 

// agr bhot specific type ki working h toh curly braces mei daalte h work otherwise we can leave it like

const arrowSum =(a,b) => a + b ; // jab bina curly braces ke likkhte h toh return nhi likkhna pdta or idk what the fck is the significance of that

arrowSum(5,3); //value calculate hogyi hogi but print krwaani h not like this writing
console.log(arrowSum(10,9));

const arrowSum1 =(a,b) => {
    console.log(a+b);
}
arrowSum1(12,24); // ye direct result dedega coz iss function mei humne console.log daala tha

console.log(arrowSum);
console.log(arrowSum1);  //ye dono statements likkhne se function ki definetions print hoke aajaati h humare paas

// arrow function hnn iss cheez mei zaroor standout krte h ki normal functions ek function hote h but arrow functions ek function ke saath variable jesa bhi behave  
// krte h jinke andar function ki poori definetion stored h.
//all becoz arrow functions are defined by const toh woh variable bhi h kinda tbhi console.log ke andar daalo toh apne andar stored info bhi print krdete h 
//function se defined functions ke saath ye krna possible h but fir woh function likkh ka 'f likkh ke dega uske pehle.
console.log(addition); 

// arrowfunction bhot si jagah acche se use hoga jab usse hum kahin variable ki tarah use krna hoga there are a lot of tasks tbh jo easy aur convenient ho jaayenge
// if we get a whole function in variable form.

// like agr arrow function ko 'const' ki jagah 'let' se define kra toh we can update the function anytime later too. (variable perks)

// Ques_  vowel counter using arrow function [ isme diff logic use krenge same pehle wala ni otherwise whats the point ] 
let arrowVowelcounter = (string) => {
    let count=0
    for(let char of string){
        if(char=='a' || char=='e' || char=='i' || char=='o'|| char=='u'){
            count++ ;
        }
    }
    console.log(count); // for loop ke baahar daalenge console.log(count) ofc coz we dont want count to be printed everytime loop runs
}

arrowVowelcounter("Better call Saul");  //mine was betteerrrrrrr

// jab hum kisi function ko kisi cheez ke saath associate kr dete h toh woh uska method ban jaata h
// jese .toUpperCase strings pe lgta h i.e. usse associated h toh we call it a string method.......ek hee function kayi cheezon ka method ho skta h ofc SHYD
// .toUpperCase bas strings pe lgta h.........kisi array pe lgaaoge toh error dikhayega

// similarly, FOR EACH LOOP IS A METHOD FOR ARRAYS

// JS ke kuch functions mei functions can also be passed on as parameters or arguments inside a function. THIS IS CALLED A CALLBACK FUNCTIONN
//example.....

function abc() {
    console.log("hello");
}

//now calling abc as a calling function.....i.e. putting abc function as a parameter or input in some another fucntion

function myFunc(abc){   // abc function is passed as a parameter here toh technically abc is a callback function
    return abc ;
}      
// format of for each loop....   array.forEach(callback function)

let array = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7];
//two ways....either callback function pehle describe kr do and then parenthesis mei uska naam daaldo Or parenthesis mei hee poora function daal do 
function printvalue(val){
    console.log(val);
}

array.forEach(printvalue);  // actualy ho ky raha hoga ye firse likkh ke seekhenge jab direct parenthesis mei daalenge function

array.forEach(function printVal(val){
    console.log(val);
}); // ****** yahan ab ho ye rha h ki array naam ke array ke saare elements 'val' mei store hore h and curly braces mei val print krwaya
// toh array Array ke saare elements aake post ho jaayenge*********

//forEach obv apne andar wale saare function wagerah sab khud hee run krdeta h banate hee.
// inko callback krne ki zaroorat ni pdti
// forEach ka callback function most of the time ARROW FUNCTION KE FORM MEI DAALTE H 
array.forEach((val) => {
    console.log(val); //YAHAN DEKH ARROW FUNCTION DIRECT PARENTHESIS SE START HORA HAI. i.e. describe vescribe wagerah kuc krne ki need nhi h 
});

let array0 = ["Delhi","Bengaluru","Pune","Gurugram","Mumbai","Hyedrabad"];
array0.forEach((city =>{
    console.log(city.toUpperCase());
}))  ;  //yahan city variable mei saari cities ke naam aake store ho jaayenge and curly braces wala work as stated unhe print krwaayega in uppercase

// for each mei as a parameter teen tarah ke input jaa skte h (values , index , array)
//mtlb jo bhi pehla variable loge usme saare variables ki values ki values 
//jo bhi second variable usme saari index position store hongi
// and teesra wale mei array store hoga

// toh agr ye teenon print krwaaye 
array0.forEach((values , index , array) => {
    console.log(values,index,array);
})// for each value or position execute hoga toh ofc ek city uski position and array print hua
// then second city and uski postion print hui saath mei array bhi
// third city uski position and saath mei array bhi print hoga ofc......and so on

//QUES_ for a given array of numbers print the square of each value using for each loop
// .array' ARRAY defined h pehle se toh uss hee pe kr lete h 
array.forEach((val) => {
    let squares = val * val ;
    console.log(squares);
}); //aagye saare squares print hoke

//ORRR
let calcSquare = (val) => {
    console.log(val*val);
};
array.forEach(calcSquare);

// some ARRAY METHODS 

//1 map ..... creates a new array with the help of some operation. the value its callback returns is used to form the new array.
  
//similar to forEach ye bhi each value pe jaake koi operation perform krta h bas difference ye h ki ye results ka rray banake deta h
//SYNTAX BHI SAME H 

array.map(calcSquare); //ye wale se exact previous two functions jesa hee result milega coz humne calc square func mei specify kra hua h ki console.log this shi

// so we need to write 'return val'  **********

array.map((val) => { // isse toh desired chhoro koi bhi output nhi aayega
    return val;
});  // ye jo itna likkha ise kisi variable mei store karo fir uss variable ko print krwana pdega *********

let squareArray = array.map((val) => {
    return val;
});  // aayega ofc isse bhi kuch ni but 'random' ko console mei daal skte h to print the returned array
console.log(squareArray);
// isse mil jaayega array 
//AND YE NEW ARRAY HAI COMPLETELY.....ORIGINAL ARRAY MEI KOI CAHNGE NHI H 

//2 filter ..... ye array ke saare elements pe jaake koi operation perform krta h and then UNN SAARI NIKALI HUI VALUES KA EK NEW ARRAY BANAKE DETA H 

array.filter((val) => {
    if(val%2 == 0){
        return val ;
    }
});   
// ye bhi obviously even numbers ka array return nhi krega coz iss poore ko bhi ek variable mei store krna pdega pehle then usse print krwaao

let filteredArray = array.filter((val) => {
    if(val%2 == 0){
        return val ;
    }
});
console.log(filteredArray);

//for odd values
let filteredArray2 = array.filter((val) => {
    if(val%2 != 0){
        return val ;
    }
});  // now obv for printing this code we need to put it in a variable.
console.log(filteredArray2);

/* 3 reduce .... array ke saare elements pe ek kuch operation krega and single value dega.
            jab poore array pe kuch krke koi single value nikalwani ho tab ye use krte h.
           like AVERAGE OR SUM ETC.
*/
array.reduce((result , currentvalue) => {   // obv iss method ko kisi variable mei daalne ki need nhi coz ye toh single value hee return krta h
        let sum = result + currentvalue ;   // aur aingle value console.log se toh print ho hee jaayegi ofcourse
        console.log(sum);
});

//*** YEH BASICALLY WAHI WAY H JO HUM KRTE H ARRAY KA SUM NIKAALNE KE LIYE BUT DIRECT DIYA HUA H YAHAN KI DO VALUES DAALO....result and current value
// and dono variables solve hoke sum dedenge if we instruct them

//for avg
array.reduce((result , currentvalue) => {   
    let sum = result + currentvalue ;   
    console.log(sum/array.length);
});

// NEED MORE WORK ON ARRAY'S KA "reduce" method

//a program to find the largest number in an array
array.reduce((previousVal,currentVal) => {// ye function krega ye ki ye start se leke end tk simultanously ek ko prevval and ek ko currentval banake compare krta jaayega end t
    if (previousVal > currentVal){         // and jo end mei bachi value woh highest hogi as per prograam. hence we'll get our ans
        return previousVal;
    }
    else{
        return currentVal;
    }
});

// AB HNN YAHAN WALE KO DAALNA PDEGA IN A VARIABLE TBHI KUCH OUTPUT DE PAAYEGA OTHERWISE THERES NO WAY

let reducedArray = array.reduce((previousVal,currentVal) => { 
    if (previousVal > currentVal){
        return previousVal;
    }
    else{
        return currentVal;
    }
}); //now printing this variable

console.log(reducedArray); 

//trying to enter array ka reduce code in OF SUM & AVERAGE in some random variables 
let randomvam = array.reduce((result , currentvalue) => {   
        let sum = result + currentvalue ;  
        console.log(sum);
});

let randomvam2 = array.reduce((result , currentvalue) => {   
    let sum = result + currentvalue ;   
    console.log(sum/array.length);
});
console.log(randomvam);
console.log(randomvam2); // shows undefined dont know why**************

//QUES_  we are given array of marks of students. filter out the ones scoring 90+

let marks = [97 , 64 , 32 , 49 , 99 , 96 , 86];
marks.filter((val) => {
    if(val>=90){
        return val;
    }
});    // nothing returned ofc with here coz iss poore ko ek variable mei store krke woh variable print krwaana pdega

let toppersList = marks.filter((val) => {
    if(val>=90){
        return val;
    }
}); // ab iss variable ko print krwayyenge (HUMESHA BHOOLTA HU YE STEP)

console.log(toppersList);

//QUES_ (part-1)  take an input n from user and then create an array from 1 to n

let n = prompt("Enter the number n:"); // map ek array banata h but woh lgta bhi shyd sirf arrays pe h

let arr = []; // EK ARRAY SCRATCH SE BANANA H TOH EK DECLARE HEE KRLO NAA THEN USME ELEMENTS FILL KRWALO  loi method use ni hora yahan
for(let i=1 ; i <= n ; i++){
    arr[i-1] = i ;
};
console.log(arr);

// (part-2)  use reduce method to calculate sum of all numbers in the above array formed

let sum = 0 ;
let sumofArray = arr.reduce((previousValue , currentValue )=> {   // ye poora function ab ek variable mei stored h
    sum = previousValue + currentValue ;
    return sum ; 
});
// FUNCTION RUN KRAANE KE LIYE YE VARIABLE PRINT KRWA LENGE OFCOURSEEEEE

console.log(sumofArray);

//  pq: reversing a string given by user

function reverseString(str){
    for(let i = 0; i<str.length ; i++){
        str[i] = str[str.length - i - 1];
    }
    console.log(str);
};

reverseString("yash"); // THIS FUNCTION DOESNT DO ANYTHING 