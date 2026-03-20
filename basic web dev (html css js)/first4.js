//LEC_4 ARRAYSSS  : js mei jo SAME TYPE KI INFORMATION or RELATED INFORMATION hoti h unhe hum arrays mei store krte h

//practically arrays are used to store bhot saara dat in badi badi sites
// arrays mei keys nhi likkhni pdti for any value......arrays mei key ki jagah position matter krti h.
// objects mei unki keys mei value store hoti thi and arrays mei uski index position mei
let heroes = ["Ironman", "Deadpool", "Spiderman", "Batman","Moon Knight", "Daredevil"];

// heroes mei ELEMENTS 6 HAI and last wale ki POSITION 5 HAI OFCOURSEE

// array ke andar diff type ki information bhi store kr skte h like.....
let smth = ["rahul", 19, "Delhi"];
//BUT THIS IS NOT ADVISED FOR ARRAYS. STORE IN ARRAYS JAB SIMILAR INFORMATION HO

let marks = [96 , 23 , 45 , 87 , 90 , 78];
console.log(marks);
// ofcourse length of array is no. of elements in the array
console.log(heroes.length);

//SHYD HUM ARRAYS TAB BANATE H JAB HUME EK COLLECTION OF SIMILAR ELEMENTS BANANA HO AND SBKO SAME NAAM DENA HO

console.log(heroes[5]);
console.log(smth[2]);

marks[1] = 32; // BAS ITNA HEE KRKE KISI BHI ARRAY KE ANDAR KI KISI BHI INDEX POSITION KI VALUE CHANGE KR SKTE HAI

// IK IK YE STRINGS MEI NI KR SKTE THE BUT YAHAN KR SKTE H

// printing all elements of array
// console.log(array ka naam) se print nhi honge saare elements. ISSE EK TOGGLE LIST KE FORM MEI AATE H WOH NI CHAHIYE. SABKE NAME PRINT KRWAANE H
// SO WE'LL USE LOOOOOOPPPSSSSSSS
for(i=0 ; i<heroes.length ; i++){    //yahan obv < use kiya instead of <= coz length is plus one of final position haina ofc
    console.log(heroes[i]);    
} //soch khud itta kuch ni h bc

// AGR BAKCHODI KRNI H TOH

for(i=1 ; i<=heroes.length ; i++){   // same result bas more complicated program likkha ((jus three changes kiye))
    console.log(heroes[i-1]);
}

//or we dont even need to use FOR LOOP to print all elements of array FOR OF LOOP or FOR IN LOOP directly woh kr dete h
for(let hero of heroes){
    console.log(hero);  // hero  MEI AAKE SAARI VALUES OF ARRAY STORE HO JAAYENGI AND JAB hero PRINT KRWAAYENGE TOH SAARI VALUE PRINT HOJAAYENGI SIMPLE AF
}
// AGR SAARE HEROES UPPERCASE MEI PRINT KRWAANE HAI
for(let hero of heroes){
    console.log(hero.toUpperCase);
}


// QUES_  finding avg of marks array  //I DIDDDDDD ITTTTTTTTTT ONNN MYYYYYYY OWNNNNNN SAB PRACTICE SE HOGA LOGIC LIKKH KE KOI FAAYDA NI COZ IF YOU FORGET IT MTLB YOU LET URSELF RUST

let sum = 0 ;
for(let i=0 ; i<marks.length ; i++){
    sum = marks[i] + sum ;
}
console.log(sum);    

// marks array ke according sum 419 aana chahiye but 428 dera h coz humne beech mei abhi 23 ko change krke 32 kiya......hence extra nine in the sum 
//but sum thodi chahiye sirf.......avg nikaalna tha soooo......
let avgMarks = sum/marks.length;  // YAHAN YAAD RAKKH KI .length METHOD NUMBER OF ELEMENTS IN ARRAY HEE DETA H. USME +1 KRNE KI NEED NHI TO MAKE IT EQUAL TO NUMBER OF ELEMENTS IN ARRAY.
console.log(avgMarks);

/* QUES_ for a given array with prices of 5 items........all the items have an offer 10% OFF on them.
change the array to store final price after applying offer*/

let items = [250 , 645 , 300 , 900 , 50];
for(let i = 0 ; i<items.length ; i++){
    items[i] = items[i] / 10 ;
  //  console.log(items);  YE CONSOLE CURLY BRACES KE ANDAR NHI DAALI COZ FIR EACH TIME EK ARRAY ITEM KA PRICE CHANGE HONE PE POORA ARRAY PRINT HOGA UNTIL IT REACHES ALL 5 CHANGES
                           // PEHLE EK ITEM CHANGE AUR BAAKI ARRAY SAME THEN DO ITEM CHANGE BAAKI ARRAY SAME UNTIL POORA ARRAY CHANGE
}
console.log(items);  //ISLIYE END MEI LOOP KE BAAHAR BAS EK BAAR POORA CHANGE PRINT KRWA LIYA

// but ek dikkt hai........humne discounts print krwa diye h new prices nhi !!!!!!!!!!
// toh doing again

let price;
let items1 = [250 , 645 , 300 , 900 , 50];
for(let i = 0 ; i<items.length ; i++){
    price = items1[i] / 10 ;
    items1[i] = items1[i] - price ;
}
console.log(items1);   //KHUDDDD SE KIYAAAAAAAAAAAAAAAAAAAAAAAAAAA HEHHEHEHEEHHEHE

// ARRAY METHODS : do type ke array methods
// EK JO EXISTING ARRAY MEI CHANGE KRKE DETE H 
// EK JO NAYA HEE ARRAY BANAKE DETE H       ( strings mei toh koi bhi method lgaao ek nayi string hee milti thi.....arrays ke cae mei aisa ni)

//1  .Push()    used to add smth at the end  //ORIGINAL ARRAY MEI CHANGE KRTA H INSTEAD OF GIVING A NEW ONE
console.log(heroes.push('Punisher'));
// can add multiple too if you want
console.log(items1.push(669 , 735 , 425));

//INND DONO UPAR WALI LINE SE KUCH PRINT NHI HUA BUT  .Pop() DEF MADE CHANGES COZ AAGE WALE OCNSOLES SE CHANGE KE SAATH PRINT HOKE AARA 

console.log(heroes);
console.log(items1);


//2  .Pop()      deletes from END and returns the leftover array
smth.pop() ;
console.log(smth);

// HENCE POP & PUSH DONO original array mei changes laate h 

//3  .toString()     converts the array to string
heroes.toString() 
console.log(heroes); // koi change nhi milega yahan abhi coz ye method orginal array mei koi chnage nhi krta. it just
/*hence we need to write */ console.log(heroes.toString()); // to actually print it in a string form

//4 .concat()  joins two or multiple arrays and gives result
console.log(heroes.concat(items1));
//joining multiple arrays
console.log(items1.concat(heroes , items , smth));

// AND OFCOURSE THERES NO CHANGE IN ANY OF THE ORIGINAL ARRAY COZ THIS METHOD GIVES ATOTALLY NEW ARRAY
console.log(heroes);
console.log(items1);
console.log(items); // SAB MEI NO CHANGE

//5  .shift()   ADDS AT THE THE START OF ARRAY
console.log(heroes.unshift("Loki")); // isse 8 print hoke aara h for sum fucking reason

console.log(heroes);  // AB ADD HOGYAAA.........HENCE unshift bhi pop and push ki tarah original mei change krta h

//6   .shift()     deletes from the start and gives THE DELETED VALUE

console.log(heroes.shift()); // Loki milega as result iska
// AND YE ORIGINAL ARRAY MEI DEF CHANGE KREGA i.e. Loki nikal chuka hoga array se ************* OR MAYBE IT DOESNT MAKE ANY CHANGE IDK

//7   .slice( start index , end index )       used to cut out a part of string and give THE DELETED PART TO US
console.log(heroes.slice(1 , 4));
//YAAADD RAKKHNA END INDEX NON INCLUSIVE HOGA, i.e. end index wala element include nhi hoga
// therefore here deleted part hoga 1 2 and 3 element.......4 nhi judega
// toh here result mei 1 se 3 wale elements milenge ofc coz deleted part deta h AND YE EK COMPLTELY NEW ARRAY HOGI
//AND AGR END INDEX NHI DAALA TOH SIMPLY MEANS KI START INDEX SE LEKE EK DUM END TAK

console.log(heroes); // no change here due to slice ()

//8   .splice(start index , delCount , newElement 1 , newElement2 , newElement3.........)      OFCOURSE WE CAN DO MULTIPLE THINGS WITH SPLICE

// START INDEX KI POSITION SE HEE DELETION START HOTA H YAAD RAKHNA. aur agr delCount 0 ho toh 
// pehla element humesha start index lega woh and duusra humesha del count

let spray = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7];
// YE ORIGINAL ARRAY MEI CHANGE KRTA H 

spray.splice(3 , 2 , 101 , 102);
console.log(spray);
// 3 and 4 ki jagah 101 and 102 aajayenge

// agr kuch delete naa krwana ho toh delCount 0 lenege......delCount likkhna zaroori
let spray1 = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7];
spray1.splice(3 , 0 , 101 , 102);
console.log(spray1);

// agr SIRF START INDEX DAALE TOH STARTING INDEX SE LEKE END TK SAB UDA DEGA
let spray2 = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7];

console.log(spray2.splice(3)); // YE RESULT MEI DELETED PART OF ARRAY DEGA
console.log(spray2);          // AND YE BACHA HUA ARRAY DEGA JO ORIGINAL MEI REH GYA HOGA
//splice wala console obv pehle likkha taaki change toh ho sake BC

//can also be used to replace elements like....
let spray3 = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7];
spray3.splice(4 , 1 , 62); //yahan 4 hee 4 index element haiiii ofcourseeeee
console.log(spray3);

//QUES_ 
let comp = ["Bloomberg","Google","Amazon","Uber","Netflix"];

//a) remove the first company from the array

console.log(comp.shift()); // ye bloomberg dega as result
console.log(comp);         // AND YE BLOOMBERG HATAKE ARRAY DEGA 

//b) remove uber and add ola at its place

comp.splice(2 , 1 , "Ola"); //uber is now on 2 position after upar jo deletion perform kiya
console.log(comp);

//c) add apple at the end
comp.push("Apple");
console.log(comp); // added Apple
