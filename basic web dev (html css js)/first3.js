//LEC_3 LOOOOOPPPSSSSSS

// IMP QUES FROM 144 -

//1. FOR LOOP
for(let i =1 ; i<=5 ; i++) {
    console.log("aksh this side");
} 
/* let i = 1 initialisation statement hai. HERE WE ARE DECLARING THE VARIABLE i.*/

// i<=5 stopping statement h. jab tk stopping statement true h utni baar curly bracket ka code run krega.

// i++ is the updation statement which shows ki update kese hogi i ki value. Each time stopping condition is true, curly braces wala code run krega 
/*Each time stopping condition is true, curly braces wala code run krega, with new value of i each time ofc coz each time curly braces ka code run hone ke baad
  i ki value update hogi and nayi updated value se stopping cond check hogi. OFCOURSEEEEE. */

/* let n = 1;  //INITIALISATION 1 SE KRRE HAI.  sum of n numbers starting from 1. yahan n 18 hai ofc. BUT INITIALISATION TOH n KA 1 SE HEE HOGAA.
for( ; n<=18 ; n++ ) {
    let res = n++ ;
    console.log(res);
}
POORA CODE HEE CRAPPY THA BC YE UPAR TEEN CHAAR LINE.    */

// JISS VARIABLE PE KAAM HONA HOTA H AUR FOR LOOP KE PARENTHESIS KE ANDAR JO i AATA H UNN DONO KO DIFF RAKKHA KR ***************************************
//CHUTIYE KI TARAH UPAR n PE KAAM HONA THA AUR USSE HEE PARENTHESIS KE ANDAR BHI LELIYA. ALTHO AUR BHI MISTAKES H UPAR WALE MEI ***********************
// ACTUALLY YE KRNA ZRURI NHI H JO UPAR LIKKHA H  BUT STILL ITS ADVISED THAT AND HNN ISS PROGRAM MEI ZRURI THA MAYBE COZ THEN HOWD YOU DEFINE THE CALCULATION OF SUM OF n NUMBERS WE DK.
//NHI PTA AGR n HEE BAAHAR DECLARE KRKE USSHEE KO USE KRKE STOPPIN CONDITION LGAAYE THEN CURLY BRACES MEI FIR KUY LIKKHNA HOGA WE DONT KNOW

let sum1 = 1
for(let i=1 ; i<=18 ; i++ ){
  sum1 = sum1 + i ;
}
console.log(sum1);


let sum2 = 0
for(let i=1 ; i<=18; i++){  
  sum2 = sum2 + i;
}
console.log(sum2);


let sum3 = 1
for(let i=0 ; i<=18 ; i++ ){
  sum3 = sum3 + i ;
}
console.log(sum3);

let sum4 = 0
for(let i=0 ; i<=18 ; i++ ){
  sum4 = sum4 + i ;
}
console.log(sum4);

// SUM1 & SUM3 WILL GIVE SAME RESULT. SUM2 AND SUM4 SAME

//ABHI TOH SIRF i  & sum MEI CHANGES KIYE BUT CHAHATE TOH STOPPING CONDITION MEI BHI CHNAGES KR SKTE THE.
// LIKE i<18 or i<=17 in diff combinations with all 4 cases above.

// i humesha bas loops ke blockspace mei hee rehta h uske baar usse use ni kr skte ofc.
// and also obv agr i ko let ki jagah var use krke define krte toh fir kahin bhi use kr skte the coz var se declared variables poore codebase mei kahin bhi use ho skte h ofc

//2. INFINITE LOOPS JAB STOPPING CONDITION ALWAYSSSS TRUE HOTI H

/*3. WHILE LOOP   yahan parenthesis mei sirf stopping condition aayegi
initialisation while loop ke pehle hee likkh dete h
and updation curly braces mei work to be done ke saath aata h */

let i1 = 1
while(i1<=5){
  console.log("i1 =",i1);
  i1++
} //iss loop ka res is obv paancho numbers print baari baari

console.log(i1); //yahan hum i use kr paare outside of loop coz i is defined outside of blockspace of while loop

/*4. DO WHILE LOOP  same as while loop jus reversed format 
    yahan ek baar code run zrur hoga i.e. yahan pehle work hota h then condition check hoti h to see ki irse work krna h yaa ni */

let i2 = 10
do{
  console.log("i2 =",i2);
  i2++
}
while(i2<=5);

//clearly i1 is greater than 5 always but still ek baar hoga curly braces wala code run hoga coz work pehle then cond check here obv.

/* 5. FOR OF LOOP  used on some special data types like agr STRING, OBJECTS OR ARRAY WAGERAH PE LOOP LGANA H TOH WE'LL ALWAYS USE THIS ONE. */

let str = "Apna College"
for(let i of str){    //i KI INITIALISATION STATEMENT HOTI H BAS
  console.log(i);
}
//YAHAN STOPPING CONDITION NHI HOGI OFC COZ for of loop POORI STRING OR ARRAY KO COVER KREGA AND UNKE SAARE CHARACTER i MEI STORE KREGA
//AND UPDATION CONDITION BHI NHI H COZ WOH SIMULTANEOUSLY KHUD SE EK CHARACTER SE USKE BAAD WALE PE JUMP KREGA (maybe we can hv updation here jum on characters in specific order but idk it yet)

//TO CALCULATE NUMBER OF CHARACTERS IN A STRING
let fullName = "AKSHAT SINGH PARIHAR"
let size = 0
for(let i of fullName){
  console.log(i);
  size++
} // each time i mei ek value save hogi utni hee baar sum ki value +1 hogi toh 0 se jitne characters in fullName

console.log("string size =", size);
// spaces ko bhi size mei joda js ne

//FOR OBJECTS *******'FOR OF' NHIIII 'FOR IN' USE HOTA HAIIII OBJECTS & ARRAYS KE LIYE
let student = {
  pooranaam : "tom hardy",
  umar : 19,
  marks : 9.9,
  isPass : true ,
};

for(let key in student){     // AB OBV HUM LOG KEY KI JAGAH KUCH AUR BHI LE SKTE THE YAHAN BEFORE 'of'   LIKE i OR SMTH
  console.log("keys of student object =",key)
}
//YAAD RAKKH JESE STRING KE SAARE CHAARACTERS AAKE STORE HOTE H for KE PEHLE WALE VARIABLE MEI VESE HEE......
//OBJECT KE KEYS KE NAAM STORE HOTE HAI for KE PEHLE WALE VARIABLE MEI.
// UNN KEYS MEI KY VALUE STORED H WOH ALAG SE ACCESS KRNI PDTI H

let student1 = {
  shubhnaam : "Tyler Durden",
  years : 19,
  percentage : 98,
  isQualified : true,
};

for(let i in student1){
  console.log("Key :",i,", key ke andar value :",student[i])
}

//printing all even numbers from zero to 100
for(let i=0 ; i<=100 ; i++){
  if(i%2 == 0){
    console.log(i);
  }
}

// *******************QUESTION****************
//create a game where we start any random number and ask the user to keep guessing the game number until the user enters correct value

/*
let gameNum = 99 ;
let userGuess = prompt("User's Guess");
for(let i=0 ; i == gameNum ; i++ ){
  if(i==gameNum){
    console.log("Congrats You Guesssed the Right Number.")
  }
  else{
    userGuess = prompt("User's Guess");
  }
}
*/  //above prog mine. result nhi dera kuch.....doesnt matter right guess kiya or wrong

/*
let gameNum = 99;
let userGuess ; //userguess bas yahan declare kr diya h but prompt mei entry loop start hone ke baad hee lenge COZ entry ke baad jo krwana h woh toh loop ke andar likkha h naa.
for(i=0 ; i<=100 ; i++){
  userGuess = prompt("User's Guess");
  if(gameNum == userGuess){
    console.log("CONGRATS ! Your guess was right.")
  }
  else{
    console.log("Alas ! Your guess was wrong. TRY AGAIN !")
  }
}
*/ // YE UPAR WALA CODE BHI THIK H BUT ISME KUCH PROBLEMS:

// 1. bas 100 chances h user ke pass to guess the right number
// 2. saala 100 baar guess krne ko bolega and agr right ans de bhi diya toh bhi 100 tk le jaayega ofc. coz right ans aane pe ruk jaaiyo kahin bola toh nhi aur naa hee bol skte h.
// issheeliye comment out kiya upar wale vrna 100 baar daalna pdta umber tb koi code run hota.

// WHILE LOOP WILLL BE USEDDD
 
let gameNum = 99;
let userGuess = prompt("User's Guess");
while(gameNum != userGuess){     // saala jb !== likkre the toh humari entry match ni hori thi.....but != likkhne pe hori h
  userGuess = prompt("Alas ! Your guess was wrong. Try again my friend !");
}

console.log("Congratulations ! You guessed the right number.")

// !== se match ni krra tha apni 99 wali entry coz prompt humesha input as a string store krta h. (tbhi keypad side se number enter nhi hore the bas keypad side se hore the)
// hence humara 99 entry in prompt is string and gamenum toh number value h
// hence !== match nhi krta coz gamenum number h and userguess string
// therefore != used

// properties of STRINGS 

// 1. string length : used to find the number of characters in a string (hence ek poora program nhi likkhna pdega har baar to find length of a string)

let str1 = "Andrew Neiman" 
console.log(str1.length);   // space is also counted as a character

// 2. ACCESSING INDIVIDUAL CHARACTERS OF STRINGS  each character ko ek position assign hoti h
// Those positions start from 0 i.e. ZEROOOOOOOOOOOOO

console.log(str1[2]); //2 position mtlb third character of string str1 i.e. 'd'

// KY space KO BHI POSITION ASSIGN HOTI H ? COZ USSE CHARACTER TOH CONSIDER KRTE H HENCE USKI POSITION BHI HONI CHAHIYE. lets se........

console.log(str1[6]);

// nothing is printed isse hence hnn 6th position assign hogyi hogi space ko

// TEMPLATE string in js ; WOH WALI STRINGS JINME VARIABLES BHI DAAL SKTE H WITH $ SIGN

let obj = {
  item : "pen",
  cost : 10 ,
}
console.log("The cost of", obj.item , "is", obj.cost);
//ORRRR

console.log('The cost of ${obj.item} is ${obj.cost} '); 

// TEMPLATE LITERAL WAS NOT WORKING IN ABOVE STATEMENT AND AS IT IS PRINT KRE DERA COZ INSTEAD OF BACKTICKS: ` WE USED SINGLE QUOTES: '
//TEMPLATE LITERAL MEI BACKTICKS USE HOTE H

// actually using template literal

console.log(`The cost of ${obj.item} is ${obj.cost} rupees. `);

// curly braces of template literal mei koi expression bhi daal skte h jo solve hoke hume final string result mei milega

console.log(`This is a template literal ${1 + 2 + 3}`);

// USE OF TEMPLATE LITERAL IS THAT JAB NORMALLY STRING & NUMBER ATTACH KARO TOH USME NUMBER HIGHLIGHTED AATA H OR WE CAN SAY VARIABLE SE JO PART AAYA WOH HIGHLIGHTED HOTA H.
// TEMPLATE LITERAL SE SAB SAME DIKHAI DEGA

// escape characters (\n \t): used to give spaces but COUNTED AS A SINGLE CHARACTER JAB .length METHOD lgaayenge

let ac = "apna\ncollege";   //  \n ek poore division ki space deta h
console.log(ac);

let jg = "joe\t\t\tgoldberg"; //      \t gives ek tab space
console.log(jg);

console.log(ac.length);   //IN BOTH THESE CASES BESIDE ME \n and \t WILL BE COUNTED AS A SINGLE CHARACTER
console.log(jg.length);   // DOESN'T MATTER WOH KITNI SPACE DERE H.
//  teen \t will be counted as three characters ofc.

// string METHODSSSS in js [ A METHOD IS LIKE A BLOCK OF CODE ALREADY EXISTING SO WE CAN USE IT ]

// kisi bhi string pe agr koi METHODDD lgaaya toh woh ek completely nayi value deta h. WITHOUT CHANGING THE ORIGINAL STRING

// 1:  .toUpperCase()    :    ofc converts the whole string to uppercase

console.log(ac.toUpperCase());  // yahan ac uppercase mei ofc
console.log(ac); // yahan ac ki original value hee milegi wo any change

ac = ac.toUpperCase(); // ab isse ac ki value update kr dii humne.....ab usme nayi value stored h
console.log(ac); 

// METHOD USE KRNE KE LIYE  .method()  likkhna pdta h. i.e, END MEI EK PARENTHESIS PAIR AATA H

//2: .toLowerCase()  

let cm = "CILLIAN MURphY";
console.log(cm.toLowerCase());

//3:   .trim()       REMOVES ALL SPACES AT START AND END OF STRING IF THERE IS ANY

let mgsc = "     my   goat    steph  curry  "; //END KI AUR LAST KI SPACES UDA DEGA
console.log(mgsc);
console.log(mgsc.trim());


//4:  .slice( start , end)           cuts out a part from in bw somewhere AND GIVES IT TO US or anywhere JUST GIVE IT START POSITION AND END POSITION OF THE PART THAT NEEDS TO BE CUT OUT

let numStr = "123456789"; // maanle 3 se 7 WALA PART CHAHIYE HUME i.e. 2nd POSITION SE 6th POSITION TK HATANA HAI
console.log(numStr.slice(2,6));

// agr ending position nhi daali sirf start daali toh end tk poora kaat dega AUR KATA HUA PART DEDEGA
console.log(numStr.slice(3)); // 3rd POSITION SE END TAK KAAT KE DEDEGA

//5:  string1.concat(string2) joins string 1 to string 2
console.log(cm.concat(numStr));
console.log(cm.concat(mgsc));
console.log(mgsc.concat(numStr));
console.log(numStr.concat(cm));
//etc........
//AGARR
let normalNum = 123;    
console.log(cm.concat(normalNum)); // number datatype variable ko string mei jodne ke liye concat jo h woh number ko pehle string mei convert krega then jod dega

//6:  .replace(value to be replaced , new value)   koi bhi ek value or combination of value ko hatana h kahin beech se aur vahan kuch naya daalna h toh this used
let alpha = "abcdefghj";
console.log(alpha.replace("ef" , 123)); 
// obv jo replace hona h woh ek certain aprt hona chahiye as a whole. 
// agr aisa krna h ki 'b' ki jgah 1 Aaye and e ki jagah 2 and h ki jagah 3 toh teen diff concat likkhni pdegi as a e and h are all far apart.

//AGR KOI CHARACTER REPEAT HORA HO TOH JO PEHLE AAYA WOH REPLACE HOGAAA  ex.....
let alpha1 = "abcdefefghefijkef";
console.log(alpha1.replace("ef", "97yt")); //sirf pehla "ef" replace hoga

//7: .replaceAll(....)            AUR AGR SAARE "ef" REPLACE KRWAANE H toh we use this
console.log(alpha1.replaceAll("ef", 69));

//8:  .charAt(indexposition)     used to find a character at a certain index position in a string
console.log(alpha.charAt(7));
console.log(alpha.charAt(4));
console.log(alpha.charAt(1));

//IMP:  HUM LOG STRING KE ANDAR KA KOI BHI CHARACTER KABHI UPDATEEEE NHI KR SKTE. YAA TOH POORI STRING KO UPDATE MAAR AUR CHANGE KR DE
//      YAA FIR .replace use kr or whateve example.....

// alpha[0] = v;         ye likkhenge toh error dikhayega coz aise string ke characters update krna possible nhi h.


// PRACTICE QUESTION : prompt the user to enter their full name. generate a username for them based on the input
// Start username with @ . followed by their fullname and ending with fullnamelength

let userId = prompt("Enter full name without space :"); 
console.log("@" + userId.toLowerCase() + userId.length); // aisa program likkh diya ki name mei capital letter daale toh bhi small aayenge username wale result mei

// METHODS PARENTHESIS PAIR SE END HOTA H TBHI WORK KRTA H.