// LEC6 DOM     line 225**********

// window object ke andar jitni bhi cheezein hum use kr skte h coding ke liye woh pdi hoti h
console.log("hello");
window.console.log("hello");

/* ek document object banta h automatically jab we create an html file and uss document object mei saare html elements store hote h 
ye object obviously window ke andar aata h. window object mei already jo code featuress exist krte h woh toh h hee but jese hee html file create hui toh ye document 
object bhi create ho jata h inside window object and it stores all the html code.
AND JAB ISS DOCUMENT OBJECT KO BASICALLY EK TREE KE FORM MEI REPRESENT KRE BASICALLY SAARE HTML ELEMENTS REPRESENTING THEMSELVES IN THE FORM OF TREES IS CALLED "DOM"
i.e. DOCUMENT OBJECT MODEL
*/

console.log(document);
//or
console.log(window.document);    // ye dono statements hume html code print krke de dengi rather than document object in object form.......SO WE USE

console.dir(document);
// or console.dir(window.document);   same thing ofcourse

//if we write...
console.log(document.body); // poora body tag ke andar ka code print krke de dega
console.dir(document.body); // will give all the kaccha chittha of all the elements inside the body tag

// BY DOING ALL THIS WE ARE INDIRECTLY ACCESING HTML ELEMENTS **

//~ Childnodes.... kisi bhi node ke subnodes ko childnodes kehte h 
console.dir(document.body.childNodes[0]);
console.dir(document.body.childNodes[1]);
console.dir(document.body.childNodes[2]);
console.dir(document.body.childNodes[3]);   // YAADDD RAKKHNA HTML KE COMMENTS BHI CHILDNOTES MEI AATE H ***

/* childNodes includes all nodes, not just elements. That means:

 Text nodes (like spaces, newlines, indentation) are also counted.
 So your childNodes[0] might not be <h1>, but actually a #text node (the line break before <h1>).
 That <!-- ... --> is also considered a node in the DOM.

 So childNodes will give you this sequence: #imp#
 document.body.childNodes

Index → Node type

0 → #text (newline/indent before first comment)
1 → #comment (<!-- <style src="style6.css"><style> -->)
2 → #text (whitespace/newline)
3 → #comment (<!-- ye upar jese ... -->)
4 → #text (whitespace/newline)
5 → <h1> element
6 → #text
7 → <h4> element
8 → #text
9 → <p> element
10 → #text
11 → <button> element
12 → #text
13 → <script> element
14 → #text (final newline before </body>)

👉 Total = 15 child nodes
 That’s why your second child node appears as a comment node etc
*/

/* AGR SIRF ELEMENTS ACCESS KRNE H TOH WE NEED USE CHILDREN INSTEAD OF CHILDNODES......children comments aur white spaces ko skip kr deta h !!!!
 document.body.children

Index → Element only

0 → <h1>
1 → <h4>
2 → <p>
3 → <button>
4 → <script>

👉 Total = 5 children elements

*/
document.body.style.backgroundColor = "beige"; //isse background colour changed to purple from pink

document.body.children[2] = "Done and Busted"; // isse element ke andar ka text change nhi hoga

// we use .innerText to CHANGE TEXT INSIDE OF AN ELEMENT
document.body.children[2].innerText = "Done and Busted";  //now changed

// WAYS OF SELECTING OUR ELEMENTS 

//1. SELECTING WITH ID    #syntax:   document.getElementById("id ka jo bhi naam h ofc")
document.getElementById("headingo").innerText = "kuch bhi 1"; // h1 ka innertext changed
document.getElementById("headingo"); //this line will not do anything obv but just RETURN h1 which means do ntg obv......return ka mtlb pat hee h 

//  document.getElementById("headingo") = "kuch bhi 1";   and this line will give error

let high = document.getElementById("headingo");
console.log(high);
console.dir(high);

// we can address html elements using id in style css file also......like instead of h1 just write #headingo there

//2. SELECTING BY CLASS NAME

let high2=document.getElementsByClassName("webdev");
console.log(high2);
console.dir(high2);

// id ko bulaane ke liye uske peeche '#' lgaate h......vese hee....
// id ko bulaane ke liye uske peeche '.' lgaate h like .webdev{ changes in css or anywhere else }

//3. SELECTING BY TAGS used when poore codebase ke koi certain type of tag mei change laana ho

// like poore codebase mei <p> tag aur <h1> or <h3> ke saare tags mei koi cahnge le aana

let parachange = document.getElementsByTagName("p")
console.log(parachange);
console.dir(parachange);
//yahan innertext se kuch kiya toh obviously poore codebase ke saare p tags ka text banjaayega woh

//4. selecting by querySelector    syntax:  document.querySelector(id ka naam / class ka naam / tag)

// but ye bhi h ki ye bas pehla element dega uss class ka or uss tag ka.
// like p daala toh bas pehle paragraph tag ka element dega [id mei toh ek hee element milega humesha ofc no shi]
//agr saare elements chahiye sirf pehla nhi toh we use same syntax bas end mei "All" lga dete h

let firstElement = document.querySelector("p");  // sirf pehla p tag
console.log(firstElement);   
console.dir(firstElement);

let allElements = document.querySelector("p"); // saare p tags
console.log(allElements);   
console.dir(allElements);
// query selector jo list banata h usse nodelist bolte h............jese baaki functions se bani hui list ko html collection bolte h

// PROPERTIESSS

//1.  .tagname   isse element konse tag ka h ye pta chalta h example :

let firstHead = document.querySelector("#headingo");   //  ***  '#' daalna is imp ofc jab is mention krre ho *******
console.log(firstHead);
// obv firstHead mei heading pehli wali stored h toh if we write
console.log(firstHead.tagName); 
//similarly
let butt = document.querySelector("#switch");
console.log(butt);
console.log(butt.tagName);
console.dir(butt.tagName);

/* parent node ke just neeche jo nodes aari hoti h unhe uss parent node ki child nodes kahenge......btw remember sirf just neeche wali ko childnodes kahenge uss element ki
and sibling nodes woh jo same level pe ho or we can say jinke parent nodes same ho.
 Toh aise hee inn childnodes ki properties hoti h like firstChild or lastChild ......name gives the ans
*/
console.log(document.body.firstChild);
console.dir(document.body.firstChild);

console.log(document.body.lastChild);
console.dir(document.body.lastChild);

// firstChild mei yahan #text diya coz its taking empty space as first element inside body.......agr body tag start hone ke just baad se likkhe 'h1' toh 'h1' ko as first element dera h

console.log(document.querySelector("body").children);
console.dir(document.querySelector("body").children);
// or another way to write same thing

console.log(document.body.children);
console.dir(document.body.children);

// KISI BHI ELEMENT KE CHILDREN SIRF KOI ELEMENTS HHEEE HONGE OFC UNKE KE ANDAR KA KOI AUR CONTENT NHI......JESE AGR KOI DIV h and uske andar likkha "abcd" 
// and uss hee same div ke andar ek div aur ek p aur ek h3 tag daala
//TOH USS MAIN PARENT DIV KE TEEN BACCHE HONGE that div p and h3......."abcd" nhi hoga koi child.........HTML collection of lenth 3 milega with last elements position being 2 duhh.

//ALL THESE PROPERTIES ARE USED FOR NAVIGATION LIKE FROM GOING FROM ONE LEVEL TO ANOTHERR. SURFING AND ACCESSING THE ELEMENTS.


//2.  .innerText   RETURNS THE TEXT CONTENT OF THE ELEMENT AND ALL KINDS OF ITS CHILDREN....mtlb grandchildren , great grand children duur duur tak sab children 

// USS TAG KE ANDAR WITHIN JITNA TEXT LIKKHA GYA HOGA SAB PRINT KRWA DEGA

let divText = document.querySelector("div");  // yahan hume sirf 'div' daalke desired div milra coz queryselector uss group ka pehla element deta h and humara desired div hee pehla div h......by luck vrna chud jaata poorA PROGRAM
console.log(divText.innerText);
console.dir(divText.innerText);  //dono same result denge

//3.  .innerHTML    ye bbi uss element ke andar ka saara text content duur duur tak jo ho return kr deta h BUT ALSO ALONG WITH ALL THE TAGS 

// thats the only diff bw innerText and innerHTML

let divHTML = document.querySelector("div");
console.log(divHTML.innerHTML);
console.dir(divHTML.innerHTML);    //same result idhar bhi dono mei

//ALL THIS CAN BE USED FOR MODIFICATIONS IN THE CODE

divText.innerText = "abcd"; //poora fruits aur uski list wagerah will be replaced by 'abcd'

// AGR CHANGES KRTE TIME TAGS BHI ADD KRNE H TOH WE USE .innerHTML
divHTML.innerHTML="<i>abcdeflmnopqrst</i>";

//4.  .textContent    use to view the invisible text.........innertext bas invisible text nhi paddh sakta jiske liye ye mahashaye h 
let hiddenHeading = document.querySelector("#hidhead");

console.log(hiddenHeading.innerText); // kuch nhi dega

console.log(hiddenHeading.textContent);  // ye dedega woh heading

//QUES1_  create a h2 heading element with text "hello javascript" append "from apna college students" to this text using JS
// (append mtlb hello java script ke end mei from apna cllg studnets add krna h)
let ques1= document.querySelector("#ques1");
console.log(ques1.innerText);

ques1.innerText = ques1.innerText + " by apna college students" ;

console.log(ques1.innerText);

//QUES2_ create 3 divs with common class name "box" access them and add some unique text to them

let ques2 = document.querySelectorAll(".box");   // query selector ALL use krna pdega if we want all divs otherwise class ka sirf pehla div milega ofc
console.log(ques2);

//to access individual divs
console.log(ques2[0]);
console.log(ques2[1]);
console.log(ques2[2]);

ques2[0].innerText = "flip" ;
ques2[1].innerText = "match" ;
ques2[2].innerText = "switch" ;

// better method neeche wala......... coz abhi toh sirf teen divs the but if we hv to many then we cant use above method.......unless majburi ho ki we need a unique value
// in each box then idk some idiot wants that work done
let i= 0;
for(divs of ques2){
    console.log(`the new value for div ${i}`);
    i++ ;
} // isse print toh ho jaayega but unn box divs mei koi change thodi hoga
// for change....

/* WRONG CODE:

for(divs of ques2){
    ques2[i].innerText = `better text ${i}` ;
    i++ ;
} 


for(divs of ques2){
    divs[i].innerText = `better text ${i}` ;
    i++ ;
};

this wrong too.
*/
for(divs of ques2){
    divs.innerText = `better text ${i}` ;
    i++ ;
}; //i valuues dega 3 4 and 5 coz picchle block code mei change ho gyi thi i ki values ofc

// divs mei already value store hogyi hongi saari and baari baari automatically le lega woh. We dont need to write [i] infront of it.

/*4.  .getAttribute(attribute ka naam)     used to get ki attribute mei ky value pdi h

for exam: kisi tag mei class attribute hai toh get attribute ke bracket mei class daalenge and result mei hume class ke "" mei ky likkha h woh milega ****
And obv .getAttribute mei dot se pehle woh variable aayega jisme tag ko store kiya h.
*/

let divAttribute = document.querySelector("#boxka1");  // box class ke pehle div mei vese id daalne ki need nhi thi to acces it....directly ".box" likkhte toh bhi woh pehla div heede ta naa automatically.
// coz .queryselector return only first element of anything.............  .querySelectorAll likhna for all
console.log(divAttribute);

console.log(divAttribute.getAttribute("class"));

//OR

let divkaName = divAttribute.getAttribute("name");
console.log(divkaName);

//5.   .setAttribute(attribute ka naam , nayi value jo daalni ho)     obv used to changed the value inside the attribute.

let newdivName = divAttribute.setAttribute("name" , "JSdiv2.0" );
console.log(divAttribute);

//6.    .style   kisi bhi element ka style tag access krne ke liye ofc

console.log(divAttribute.style);

// toh ye upar wale act se hume ek CSS collection milega of all the properties ever existing and unme values jo humne daali hongi
// usme background color wala section empty hoga like rest of em.....but kyu...color toh h humare uss div mei.
//THE REASON IS KI YE COLLECTION USS ELEMENT KI 'inline CSS' KA DATA DETA H.....WHEREAS HUMNE USSKA COLOR CHANGE STYLE FILE MEI KIYA THA



//let boxdiv1Style = document.querySelector("class");  // will obv give 
//console.log(boxdiv1Style); 
// ***** YE JUST UPAR WALI DO LINE KY HEE CHUTIYA LINES OF CODE H......KRNA KY CHAAH RHA THA BE

//can also change styling of an element using  .style

divAttribute.style.backgroundColor= "pink" ;

divAttribute.style.fontSize = "25px";

//  divAttribute.style.visibility = "hidden" ;   isss line of code se box ka pehla div gaayab ho jaayega.
//hence bina html ki file se permanent remove kiye we can use JS to  dissapear elements temporarily
// aage fir visibility hidden se change krke visible kr do

//INSERTING OR CREATING NEW ELEMENTS : two STEPS to do it........pehle create kro woh element yahin using JS

let newButton = document.createElement("button");
newButton.innerText = "Log in" ;
newButton.style.backgroundColor = "blue";
newButton.style.padding= "5px";

// bana dii ek basic button.......but abhi bas ye created pdi h.......webpage pe nhi dikhayegi obv.

console.log(newButton);   // ye bhi kuch nhi krega bas console window mei newButton code dedega
console.dir(newButton);   // same gonna do none

//NOW ADDING THE ELEMENT [ 4 tareeke ]

//1.  node.append(created element jo abhi add krna h)     ADDS AT THE END OF NODE INSIDE i.e. jo node daala uske andar end mei jaake judd jaayega.

// adding the created element AT THE END & INSIDE of papadiv
let papaDiv=document.querySelector("#papadiv");

papaDiv.append(newButton); //papadiv ke end mei ek nayi button aagyi login wali

//2.   node.prepend(created element jo bhi add krna h)     ADD AT THE START OF NODE INSIDE

papaDiv.prepend(newButton);

// AND OBV YE newButton CREATED ELEMENT KAHIN EK HEE JAGAH ADD HO SAKTA H....DO TEEN JAGAH NHI
//TOH PAPADIV KE END SE AB START PE AAGYA. YE NHI HOTA OBV KI DONO JAGAH RHEGA COZ H TOH EKE HEE SPECIFIC ELEMENT
//JAHAN LAST DAALA VAHAN RHEGA

//3.   node.before(created element jo abhi add krna h)     ADDS JUST BEFORE THE NODE OUTSIDE

papaDiv.before(newButton);  // ab new button papadiv ke baahar and just pehle

//4.   node.after(created element jo abhi add krna h)     ADDS JUST AFTER THE NODE OUTSIDE

papaDiv.after(newButton);   // ab new button papadiv ke baahar and just baad mei

// maine abhi papadiv mei add kra bg and padding and color to hel understand placing of login button in diff 4 cases above.......toh koi prob hogyi ho uski wajah se toh dekh lena.

//REMOVING THE ELEMENT 

//   node.remove()  

//papaDiv.remove();  //isse papadiv hatt gye AND THEnewButton still stayed ofc.

//coz upar uski position signify kr chuke h already ab agr kuch remove add hota h toh hota reh woh aage peeche hoyegi agr uske agal bagal se hua kuch

// papadiv ka remove code comment out kr diya coz obv usse kaafi kuch padha h toh hatana shi ni hoga.


