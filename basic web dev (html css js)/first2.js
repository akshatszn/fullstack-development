//LEC_2 OPERATORS IN JS

//PB ON 170 & 183 *******************!!!!!!!!!!!!!!

let a = 5
let b = 3
console.log("a+b");
console.log(a + b); //double quote ke andar daala toh obv operation carry out ni kiya

let c = a + b
console.log(c); //same res as above

//- , * , / mean the same as they mean in math

// a % b will give remainder of a/b

// a ** B mean a is to the power b

console.log("a= ", a ," , b = " , b); //commas use honge to separate all four of em
console.log ("a-b =", a-b);
console.log("a*b =", a*b);
console.log("a/b =",a/b);
console.log("a%b =", a%b); //5 divided by 5 ka remainder 2 ofc.
// but agr 'a' chota ho toh ky aayega remainder. tb toh divide possible hee nhi h unless we take decimal which we obv cant. maybe undefined aayega.
console.log("a**b =", a**b); //5 is to the power 3 is obv 125

console.log("a++ =", a++); //a++ mtlb a+1 obv. INCREMENT OPERATOR
console.log("a-- =", a--); //a-- mtlb a-1 obv. DECREMENT OPERATOR
// increment and decrement are obv UNINARY OPERATORS

//PRE AND POST INCREMENT    OR   PRE AND POST DECREEMENT
console.log(" ++a =", ++a); // iska result 6 aayega coz preincreement jab mention hui tbhi increement hojaati haur woh result ready kr deta h use hone ke liye uss hee line se

console.log(" a++ =", a++);  // iska result 6 hee aayega coz postincreement jab mention hota h tb woh increment toh kr dega uss hee line mei but result available next line se hota h. 
// toh isss wale mei a 6 hee reh jaayega but aaage agr fir a print krwaya aage toh woh 7 ho jaaayega


a = a - 2; // ye kiya to make a back to 5 again coz pichhli doo increment se 7 hogya hoga and aage ki problems a 5 leke likkhi thi pehle.

// = is obv used to assign values.

a += 4 ;        // iska mtlb a = a + 4
console.log(a); //res 9

a -= 4 ;           // ISKA MTLB a = a - 4    
console.log(a);   // res 5 coz iss operation se pehle upar wale step mei 'a' ki value 9 ho chuki thi toh ab usme minus 4 gives 5

a *= 4 ; //ISKA MTLB a = a * 4
console.log(a);   //res 20 coz picchle step mei a ki value 5 hui and now 5 times 4 gives 20

a /= 4 ;
console.log(a);   //res 5 coz last step mei a was 20 and 20 divided by 4 gives 5

a %= 4 ;           // ie a = a % 4
console.log(a);  //res 1    coz last step mei a ki values 5 hogyi thi and obv 5 divided by 4 givs remainder 1

a **= 4;          // mtlb a = a is to the power 4
console.log(a);  //res 1 coz previous step mei a ki value 1 hogyi and 1 is to the power 4 ia 1

//COMPARISON OPERATORS
// == mtlb equal to and is used to compare values and returns true or false as result whther they are same or not
console.log("a==b :", a == b);

// != mtlb NOT EQUAL TO 
console.log("a != b is", a != b);

// == bas value dekhta h ky h and agr same h toh equate kr deta h without checking ki konse type ka variable h.
let p = 7
let q = "7"
console.log(p==q);// TRUE dikhayega even though ek string h and ek number type variables.

// for STRICTER comparisons
// we use === or !==
console.log("p!==q :",p!==q);

//similarly there are more comparison operators who also give boolean type result
// like >  >=  <=  <

//LOGICAL OPERATOR ( also gives results in BOOLEANS );

//logical AND &&  this gives TRUE as answer jab SAARI CONDITIONS TRUE HO.
// and obv AGR EK BHI CONDITION AISI HUI KI TRUE NAA HO TOH FALSE DE DEGA.

 let m = 6
 let n = 5
 
 let cond1 = m > n
 let cond2 = m==n

 console.log("cond1 && cond2 :",cond1 && cond2); //false aayega coz bas ek hee cond true h. && se true laane ke liye saari true honi chahiye

//logical OR ||  gives TRUE as answer AGR EK BHI CONDITION TRUE NIKAL GYI AMONG GIVEN CONDITIONS
//obv agr ek bhi true nhi nikli toh false dega

console.log("cond1 || cond2:", cond1 || cond2);

// && TBHI TRUE DETA H JAB SAARI CONDITIONS TRUE HO WHEREAS || TBHI FALSE DETA H JAB SAARI FALSE HO

//logical NOT !  TRUE ko FALSE bana deta h AND FALSE ko TRUE bana deta h
cond3 = m!=n;
console.log(!cond3); //cond3 true h toh usko false dega 
console.log(!cond2); //cond2 false h toh usko true dega

//CONDITIONAL STATEMENTS

// 1. IF STATEMENT
let mode = "Dark Mode";
let color;
if (mode === "Dark Mode") {  //parenthesis ke andar condition jaayegi.
    color = " black";  // agr parenthesis ke andar wali condition true hui toh curly bracket wala program run kr jaayega.
}
// obv if statement is jus a one time thing ye koi loop nhi h koi chutiya bhi bta dega
//ex:
let age = 25;
if (age >= 18){
    console.log("You can apply for a Driver's License");
} //jab age 18 se kam daalenge toh ntg will happen (unless we write a program for that too)
//ek aur if statement bhi likkh skte h for the case of less than 18
//or we can write....

//2. IF ELSE STATEMENT

let ageE = 17;
if( ageE >= 18) {
    console.log("You can apply for a Driver's License");
}
else {
    console.log("You CANNOT apply for a Driver's License");
} //else wala run krega isme ofc

// BETTER WAY TO COMBINE STRING AND NUMBER......USING + SIGN OR , SIGN
// COMMA SE AUTOMATIC SPACE AATI H BROOOOOOOOOOOOOO
let e = 5
if(e%2 == 0) {
    console.log( e + " is even");
};

if(e%2 == 1) {
    console.log( e + " is odd");
}

// 3. ELSE IF STATEMENTS ye if and else ke becch mei jaati h. 
//MULTIPLE IF ELSE DAAL SKTE HAI

let theme = "strawberry"
let backgroundcolor 
if(theme = "dark") {
    backgroundcolor = "black"
}
else if (theme= "strawberry") {
    backgroundcolor = "pink"
    
} else {
    backgroundcolor = "white"   
}

// obv backgroundcolor variable define kre bina bas teenon mei individually console.log(respective color) likkh skte the individually teenon ke curlys mei
// BUT HUME WOH NHI KRNA H NAAAAA......WE NEED TO CHANGE THE COLOR NOT PRINT THE NAME OF COLOR. TOH CONSOLE LOG KA NO USE. 
//HNN IK CHANGE NHI COLOR YE JESE LIKKHA MAINE WOH KRKE BUT FIRST STEP TOWARDS IT

// TRUNARY OPERATOR  format:
// condition ? program to run when cond true : program to run when cond false
// a ? b : c   a ke baad ques mark and 

let ageEE = 22
ageEE>18 ? console.log("adult") : console.log("not an adult");
//or better way to write

let ageEEE = 19
let res = ageEEE>18 ? "adult" : "not an adult"; //jo bhi output hoga woh res variable mei store hojayega and then res print krwa lenge
console.log(res);

////YAHANANN UPAR KUCH PROBBB AARI HAIIIII

let v = prompt("enter the number:");
if(v%5 == 0) {
    console.log( v , "is a multiple of 5")
}
else {
    console.log( v , "is NOT a multiple of 5") //COMMA SE AUTOMATIC SPACE AATI H. AGR SPACE NHI DENI TOH + USE KARO
};
//HAR BAAR REFRESH KRNE PE PROMT AAYEGA

let student = "Joe";
let marks = 98;
if ( marks >= 90){     //// PROBLEM!!! YAHAN JAB 100> marks >= 90 daalo toh marks not defined likhaa aara.
    console.log("Joe got an A grade.");
}

else if (90 > marks >= 80 ) {
    console.log("Joe got a B grade."); 
}
else if (80 > marks >= 70) {
      console.log("Joe got a C grade.");
}
else if (70>marks>=50) {
    console.log("Joe got a D grade.")
}
else if (50>marks){
     console.log("Joe got an E grade.")
}
 else    {
       console.log("marks not defined")
};
//har condition mei poora console.log daalne ki zrurat ni thi
// we couldve jus declared a variable 'grade' and har condition mei we couldve written grade = "A" or "B" etc....
//and saari statements ke end mei likkh dete ki console.log("JOE got grade",grade);
