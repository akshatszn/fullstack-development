//LEC_7  (poora code lec6 mei cover kr diya.........only practice questions of lec7 here)

//QUES_  create a new button element. Give it a text "click me", background color of red and text color white
// insert the button as the first element in the body tag

// sab cheezein obv yahi se krni h main first7.html khaali pdi h

let myButton = document.createElement("button");
myButton.innerText = "Click Me !!" ;
myButton.style.backgroundColor = "red";
myButton.style.color = "white";  // created the desired button

// body tag ko bhi acces krke pehle kisi variable mei store krna pdega to use in prepend ofcoursee

let bodyTag = document.querySelector("body");

bodyTag.prepend(myButton);

// QUES_  create a p tag in HTML, give it a class and some styling.
// Now create a new class in CSS and try to append this class to the p element

//did you notice how you overwrite the class name when you add a new one? Solve this problem using class list

/* solN:  mtlb css file mei ek nayi class create krni h and uss class ko p tag mei daalna h and APPEND likkha h mtlb obv puraani class toh rehni hee chahiye upar se ye bhi append krni h
and HNNNN EK HEE ELEMENT MEI EK SE ZYADA CLASS DAAL SKTE H obv. */ 

let myPara = document.querySelector(".paraclass");  //accessing the p tag ofc coz OBV.

//now nayi class bana dii in css but uske attributes kahin apply nhi honge obv coz woh class kisi element ko assigned ni h ofc

/* para.setAttribute("class","newparaClass");   iss code line se newparaClass assign ho jaayegi p tag in class but fir old wali hatt jaayegi ofc.
yahi likkha tha question mei ki we will overwrite the class in doing so
toh we need to use: classList. */

// classList mei kisi bhi element ki saari classes ki list store hoti h.
console.log(myPara.classList);  // collection mei sirf pehli wali class hogi ofc.....nayi wali ni.

myPara.classList.add("newparaClass"); //simple syntax

// kisi class list remove krne ke liye ofc    classList.remove("class ka naam")

/* 
ek class color change kr ri thi ek background.
BUT WHAT IF DONO CLASSES CSS FILE MEI BACKGROUND COLOUR HEE CHANGE KR RHI HO TOH KONSI CLASS KI SUNI JAAYEGI.......YAA FIR ERROR DEGA  ??
the answer is simple ki nayi jo class daali uske basis pe dega background color. JO CLASS JITNI END MEI UTNI USKI ZYADA SUNI JAAYEGI.
*/



