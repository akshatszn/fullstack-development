// LEC_8  EVENTS  the chnage in the state of something is known as event.
// Events are fired to notify code of "interesting changes" that may affect code execution.
/*
- MOUSE EVENTS : click, double click etc.
- Keyboard events : keypress , key , keydown etc.
- Form Events : submit etc.
- Print event and many more.....
*/

// EK EVENT KE OCCUR HONE KE BAAD HUM USSE KUCH BHI KRWA SKTE H. Like koi button click krne wala event h toh uske baad ky hoga woh hum bta denge.

// every action jo hota h is a event. kuch events environment conditions se bhi hote h like low brightness hojaana automatic when battery is low.
//READ EVENTS ON MDN

//K3B jab baahar double qoute ho toh uske andar strings single qoute mei jaati h. like did in first button
// pehli dono buttons ki command hume text console window mei print krke dengi ofc. 

// ab hum chahate h agr ki jab hum apan mouse div ke upar laaye or hover kraaye uspe toh kuch print hoke aaye
// toh we use onmouseover

//ON MDN WE CAN LITERALLY GET TO KNOW ABOUT SO MANY TYPES OF EVENTS..........JUST TYPE MOUSE EVENTS ON IT AND MOUSE WALE SAARE EVENTS AAJAYENGE AND SAME WITH OTHERS

// ab jitni baar apna mouse hum uss box ke upar leke jaayenge webpage pe.......utni baar console window mei "you are inside the div" print hoke aayega.

//ABHI TAK HUM IN-LINE EVENT HANDLING KRRE THE......NOT REALLY A GOOD WAY TO INSERT EVENTS COZ ABHI TOH EK HEE LINE KA CODE RUN KRWA RHE FOR AN EVENT LIKE PRINTING SMTH
// WITH CONSOLE......but agr event koi heavy line of code hua toh tb ky krenge.

//EVENT HANDLING IN JS
/*

node.event = () => {

}

*/
// 'node' will be konse element pe event daalna h
// 'event' will be konsa event daalna h uss node pe
//  and curly braces mei woh jaayega jo krwana h event ke occur hone pe

let firstbtn= document.querySelector("#firstButton");
firstbtn.ondblclick = () => {
    console.log("first button was clicked two times");
    let a= 5 ;
    a++ ;
    console.log(a);
}


// AGAR KISI EK ELEMENT PE INLINE WALA EVENT MAARA AND USS HEE ELEMENT PE KOI DUUSRA EVENT MAARA USING JS THEN......
// js wale event ko priority milegi **

// AND also agr kisi element pe koi ek event daala toh wohi same event with some diff occuring daaloge toh woh nayi occuring ko consider krega .
// like firstbutton pe firse 'ondblclick' daalke koi nayi occuring daali toh fir uss nayi occuring ko consider kiya jaayega.

// EVENT OBJECT  ek aisi special object jo kis event ki saari info store krta h

// ALL EVENT HANDLERS HAVE ACCESS TO THE EVENT OBJECT'S PROPERTIES AND METHODS.

/*
  node.event= (e) => {
    //handling here
  }

*/

firstbtn.ondblclick = (e) => {   // reperesents event object of that specific event......EVENT KA KACCHA CHITTHA MILEGA.
  console.log(e);
  console.log(e.type);
  console.log(e.target);  // target ke andar ye btayega ki event khaan occur kiya like button pe kiya uski id then etc etc..
  console.log(e.clientX, e.clientY); // positioning wagerah related (imp)
};
/*
  When you attach an event handler (like onclick, onchange, onkeydown, etc.), the browser automatically passes an Event object as the first argument to your function.
  So e (or event, or any name you give it) represents that Event object.
  e = the event object
  e.type = event type ("click")
  e.target = the element that fired the event
  in short:
 👉 e in your function is just a parameter name. It stands for the event object created by the browser when the event happens.
  The parentheses hold the parameter(s) that your function receives when the event happens.

  By default, the browser passes one argument → the Event object.
  So we usually write:
  e (short for event)
  event (more descriptive)
  Any name you want (since it’s just a parameter variable)

  What usually goes inside parenthesis:
  1. event object → Almost always the first (and usually only) thing
  2. Extra parameters → Only if you pass them yourself (not automatic)
*/
//  I NEED TO KNOW THAT THERE ARE TOO MANYY LIKEE TOOOOOO FCKING MANY THINGS THAT I CAN DO HERE BUT WONT KNOW ABOUT.
//  WOH KESE PTA CHALEGI KR KRKE. THATS IT NO WAY ELSEEE.
// hence we can get additional info about our event using event object.
 
/* abhi tak do event handling methods dekhe.......ek inline wali (iska drawback ye h ki iss method se humara html code bhot zyada bulky hojata h.)
  and duusra JS mei node.event= () => {  }  krke......but iss wale ka drawback ye h ki ek baar mei ek hee fuction likkh skte h.
*/
/* inn dono se better method will be EVENT LISTENERS: aise functions jo event ko sunnte rehte h ki kab aayega kab aayega and aate hee carry out kr dete h apna kaam.

 node.addEventListener (event jo occur krega , fuction jo execute krega event ke hone pe)   // callback ko hee handler bolte h. 
 
 node.removeEventListener(event, callback) *******************************************
*/
// jo kaam upar kiya tha first button pe woh firse kr skte h but in a better way.
firstbtn.addEventListener("click" , () => {
     console.log("button 1 was clicked - HANDLER1")
} )       // double quote mei event jaayega, and callback function ki jagah ek arrow fumction daala. KOI FUNCTION KA DEFINED NAME BHI DAAL SKTE OFC.
// AB BUTTON 1 CLICK KRNE SE "button 1 was clicked."  in console window.
// writing again

firstbtn.addEventListener("click", (e) => {
  console.log("button 1 was clicked - HANDLER2");
  console.log(e);
  console.log(e.type);  // YE AND UPAR WALE DONO COMBINE HOKE RESULT DENGE
}); 
//  node.removeEventListener(event, callback)   // koi event jo lgaya h kisi node mei and remove krna h usse or temporarily disable krna h toh use this.

firstbtn.removeEventListener("click",() => {         // .removeEventListener mei event likkhte h because we need to specify naa ki konse event ke hone pe hum task rokna chaah re h (ek element pe kayi event ho skte h ofcourse). 
     console.log("button 1 was clicked - HANDLER1")
} )
// BUT ISS ABOVE WALI REMOVE STATEMENT SE REMOVE NI HUA COZ callback mei yahan bas ek similar fuction daal diya.
//  JUST BECAUSE THEY BOTH LOOK SAME DOESNT MEAN JS WILL TAKE BOTH AS SAME AS ARROW FUNCTIONS 

// TOH YE EK NAYI BUTTON PE TRY KRENGE FOR CLARITY
let secbtn = document.querySelector("#secondbutton");

function handler1(){
  console.log("BUTTON 2 WAS CLICKED handler1");
}

const handler2 = () =>{
  console.log("BUTTON 2 WAS CLICKED handler2");   // do diff tareeke se fucntion describe kiya.
}

secbtn.addEventListener("click", handler1);   // function name double quote mei nhi jaayega
secbtn.addEventListener("click", handler2);
//k3b  AGR EK HEE ELEMENT PE EK HEE TRAH KE EVENT SE KAYI ADDEVENTLISTENER DAAL DIYE TOH OFC USS ELEMENT PE JAB WOH SPECIFIC EVENT OCCUR HOGA TOH OBV WOH SAARE ADDEVENTLISTENERS KE FUNCTIONS/WORK CARRY OUT HONGE 
// (ofc unless kisi eventlistener ko remove naa kiya ho toh hee)

secbtn.removeEventListener("click", handler1);
// ab second button click krne pe sirf handler 2 carry out krega not handler 1
// handler 1 bhi carry out krwana h on second button toh remove the .removeEventListener on secbtn wali code line (141 ofc).

// QUES_1 CREATE A TOGGLE BUTTON THAT CHANGES THE SCREEN TO DARk MODE WHEN CLICKED AND LIGHT WHEN CLICKED AGAIN.

let body = document.querySelector("body");

let themebtn = document.querySelector("#theme");

let theme = "light";

themebtn.addEventListener("click", () => {
  if(theme == "light"){  // DO EQUAL SIGN DAALENEGE COZ WE NEED IT COMPARISON NOT ASSIGNMENT OFCOURSE.
    theme = "dark"  
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
  else {
    theme = "light";
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
  console.log(theme);// ye statement theme color print kregi console window mei.
} );


// ANOTHER WAY WRITING THE SAME ABOVE CODE

/*  write in CSS file*********

.dark{
  background-color : black;
  color : white;
}

.light {
  background-color : white ;
  color: black;
}
*/

/* and write in JS file... ******

themebtn.addEventListener("click", () => {
  if(theme == "light"){  
    theme = "dark" ;
    body.classList.add("dark") ;
  }
  else {
    theme = "light";
    body.classList.add("light") ;
  }
  console.log(theme);

*/
 