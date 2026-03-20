//LEC_11  CLASSES & OBJECTS
/*
A javascript object is an entity having state and behaviour (properties and methods).
properties mtlb hum apne object mei variables tore kr skte h
methods mtlb fucntions bhi i.e. aa sakte h humaare object ke andar.
*/
const student = {
    fullName : "Shraddha Khapra",
    marks : 94.4,
    printMarks: function(){
        console.log("marks =", this.marks); // writing "this." basically means ki isshee object ke marks variable ki baat hori h.
        //this.marks basically means student.marks
    }
};
// Prototype is a reference to an object.
/*
all the JS objects ever created have a special property called prototype.
Prototype khud mei ek object hai jiske andar various methods functions wagerah sab stored hai which we can use on those objects ig.
console.log(student.toString);  likkhe toh ek function print hoke aayega.
*/
// we know that for JS internally, an array is an object. HENCE ARRAY KE ANDAR ALSO WE HAVE PROTOTYPE.
/*
let fruits = ["apple","orange","mango"];
fruits.push("litchi");
humne toh push naam ka koi function banaya hee ni but ab agr kahin fruits array use hoga toh uske end mei litchi bhi hogi.
*/
const employee = {
    calcTax1() {
        console.log("tax rate is 10%");
    },
    calcTax2 : function(){
        console.log("tax rate is 12%");
    }
    // AS WE CAN SEE ABOVE THAT THERE ARE TWO WAYS TO WRITE A FUNCTION IN A OBJECT 
};
console.log(employee.calcTax1);

const karanArjun = {
    salary: 180000
};
console.log(karanArjun.salary);
// but agr hume kisi aur object ke andar ka koi function kisi aur object ki key pe use krna h toh WE DEFINETELY CAN

karanArjun.__proto__ = employee;  //yahan hum emloyee object ko ek prototype function banre h of karanArjun object
// hence karanArjun ke prototype object mei nayya function/object add hua hoga that is employee
//HENCE NOW WE CAN USE employee OBJECT KE ANDAR DEFINED FUNCTIONS ON OUR karanArjun OBJECT
console.log(karanArjun.calcTax2());

// This for times like ki agr multiple employees like karanArjun ho and humes sabke tax calc krne h toh sab mei toh daalenge ni naa calcTax functions........toh usse better unke prototype bna do employee object ko

const karanArjun2 = {
    salary: 220000
};

const karanArjun3 = {
    salary: 190000
};

const karanArjun4 = {
    salary: 2075000,
    calcTax1(){
        console.log("tax rate is 11%");
    }
};

karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;

/* 
maanlo agr we have an employee jiska tax rate thoda diff hai toh we can create a separate calcTax1 function for him inside his object.
But the thing is ki employee ke andar wala function ka naam bhi calcTax1 hai jo iske andar as a prototype banake daaala h aur abhi jo iske andar naya bnaya uska naam bhi calcTax hai.
TOH karanArjun4 ke andar wale calcTax ko priority milegi.
*/
console.log(karanArjun4.calcTax1);

// abe ye 11% print krke dega not the 10% wala from employee wala calcTax1

// ** therefore, IF OBJECT & PROTOTYPE HAVE SAME METHOD, OBJECT'S METHOD WILL BE USED. ****

/*
CLASSES IN JS*
Class is a program-code template for creating objects.
Those objects will have some state(variables) & some behaviour (functions) inside it.
#syntax:

class classkaNaam{

    constructor(){....}

    myMethod(){.....}   
}
*/    
class toyotacar{ // iss car class ke andar woh saare methods and properties honge jo saari ki saari cars ke upar use honge hee which are made in our factory.
    constructor(){
        console.log("TOYOTA Cars are the future.");
    };
    start(){
        console.log("start");
    }  //class mei hume we dont need 
    stop(){
        console.log("stop");
    }
    // saari gaadiyan start stop toh hoti hee h toh saari cars mei ye dono functions use honge ofc.
    setBrand(brand){
        this.brandName = brand; //as "brand " jo bhi input kiya woh value brandName ke andar jaake store ho jaayegi.
        // "this." basically means each individual object. mtlb jis object ke liye ye call hoga wohi object.
        // its a thing we write  
    }
}

// class basically ek single template hoti h jiske basis pe hum kayi saare objects create kr skte h.
/*
for creating any object using the class.

#syntax:
let objectkaNaam = new classkaNaam();
*/

let fortuner = new toyotacar;  // toh ab fortuner ky h ?
// fortuner ek nayi car ban gyi jo toyota car ki template pe bani hui h.

// code language mei fortuner ek nayi object bana dii humne jiske prototype mei ofc toyotacar class ke functions honge i.e. start stop etc. 
let lexus = new toyotacar;

fortuner.setBrand("FORTUNER");
lexus.setBrand("LEXUS");

//ab inn dono ke kacche chitthe mei ek nayi property added hogi called brandName 

/*k3b 
hum "brandName" ki jagah "brand" bhi likkh skte the

setBrand(brand){
        this.brand = brand;
}
yahan jo this. ke saath likkha hai woh humaare object ki property banaega aur we can say hai.
while duusra "brand" jo parenthesis mei h and asssignment operator ke aage lga h woh ek argument/input hai for setBrand function.

do diff kinds of cheezon ko same name de skte h ofcourse duhhh.
*/
/*
usecase of class and objects

jese kisi bank ke liye hum kuch banare h jisme saare employees ka data save hona hoga. toh we can create class jiske andar saari properties/variables honge already jo 
hume daalne honge each employee object mei. THIS WILL BE LIKE A BLUEPRINT FOR ALL THE OBJECTS THAT WE WILL CREATE FOR EMPLOYEES.
*/ 

/*
 Constructor in JS : a special method in class
 constructor() method is automatically invoked by new.
 like even if we dont add any constructor still there will be automatically created by js.

 and hum apne khudke constructor bhi bana skte h.

 constructor ke andar humne jo bhi daala as a function or property, woh automatically evoke hojata h or work kr deta h as soon as we call call that class using "new"
 EVEN IF WE DONT CALL IT.
 
 like abhi toyotacars class mei ek constructor daala:
 constructor(){
        console.log("TOYOTA Cars are the future.");
    } 
 ye initialisation krta h. i.e. jab bhi toyotacars class ka blueprint use kiya kisi object ke creation ke time toh constructor automatically run krega pehle toh
 like yahan console window mei dono times "TOYOTA Cars are the future." likkh ke aayega when statements : let fortuner = new toyotacar;  and let lexus = new toyotacar;
 would hv been written.


 if we would hv written,

 constructor(brand){
        console.log("TOYOTA Cars are the future.");
        this.brandName = brand;
    };

    // and setbrand fnc hata dete ofc toh:
    hota ye ki ab unn dono "new" wali statements pe "TOYOTA Cars are the future." toh likkh ke aata hee but uske saath saath brandName bhi likkh ke aayega.
    then lkkkhte:

    let fortuner = new toyotacar("FORTUNER");
    now console.log(fortuner); likkha toh do constructors active honge obv.

    // agr parenthesis mei kuch naa daale toh brand: undefined likkh ke aa jaayega thats it.//
    like agr humne likkha....... console.log(lexus);

    [OBV WE ARE CONSIDERING ABOVE KI SETBRAND FNC NHI H]
    toh iske mei toh brand: undefined likkhke aayega.

    and WE CAN UPDATE ITS BRAND.

    lexus.brand ="LEXUS";

    toh agr ab likkha...... console.log(lexus);
    toh itll be printing brand: LEXUS instead of showing brand undefined. 
*/

/*

 constructor(brand, mileage){
        console.log("TOYOTA Cars are the future.");
        this.brandName = brand;
        this.mileage = mileage;
    };

    // aisa ek multiple arguments wala constructor bhi bana skte h.
*/


//________________________________________________________________________

// INHERITANCE IN JS : passing down properties & methods from parent class to child class.

/*
 like agr humne do classes banai: class 1 and class 2
 class 1 mei hai kuch propertyX propertyY methodP methodQ etc....
 AND AB HUM CHAHATE H KI YE SAARI PROPERTIES AND METHODS class 2 KO MIL JAAYE TOH WE'LL INHERIT IT

 #syntax:

 class Parent {
 
 }

 class Child extends Parent{
 
 }

*/ 

// *** IF CHILD & PARENT HAVE SAME METHOD, CHILD'S METHOD WILL BE USED. [method overriding]

/* k^3b

YE JO CONSTRUCTOR INHERITANCE CLASS OF OBJECTS SAB PADDHRE H YE MOSTLY HUM FUNCTIONS METHODS AND PROPERTIES WAGERAH KE LIYE HEE USE KRTE HAI AND IT MAIN MOTIVE IS TO 
REDUCE REPITITION i.e. COPY PASTING OF SAME CODE AGAIN N AGAIN WHICH IS A BAD WAY OF CODING.
HUM CHAAHE TOH MULTIPLE OBJECTS BANA SKTE H AND UNN SAB MEI SAME FUNCTION COPY PASTE KR SKTE H BUT THATS MOR ETIME TAKING INSTEAD ALL THIS REDUCED A HELL LOT OF TIME WHEN UK IT.

*/

class Parent {
    hello(){
        console.log("hello !");
    }
}

class Child extends Parent {}

let obj = new Child();

// and now 

console.log(obj.hello);


class Person{ // func for any person jo h woh ky ky krta h.
    constructor(){
        this.species = "homosapiens";
        console.log("parent constructor starts");
    } // this constructor will also act as a constructor for the inherents of this class.

    eat(){
        console.log("Eat !");
    }

    sleep(){
        console.log("sleep !");
    }

    work(){
        console.log("working !");
    }
};

class Engineer extends Person{ // func for any person jo h woh ky ky krta h. Enginner eat and sleep toh krta hee h.....uske saath work bhi krta h.
    work(){
        console.log("Solve problems / Build something");
    }
};

let aksh = new Engineer();

console.log(aksh.eat); // will work now obv

console.log(aksh.work);
// since engineer and person dono ke andar work naam ka function h toh OBV Engineer WALA CHALEGA HERE.
// COZ CHILD KE FNC KO PRIORITY DII JAATI HAI AGR CHILD AUR PARENT KE PAAS SAME FUNCTION HO.

/*
super Keyword : the super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

#syntax:

super(args)   // call parent's constructor.

super.parentkaMethod(args)
*/

/*
class Doctor extends Person {
    constructor(branch){
        this.branch = branch;
    }
    work(){
        console.log("Saving lives !");
    }
}
*/
// ye upar wale ko code ko run kiya toh error dikhaayega.
// WE NEED TO USE/WRITE "super()" in the first line of child ka constructor to not erupt any error.
// ye "super" ko add krte h to evoke the constructor of parents.

// AND YE super() generally kahin bhi ".this" use krne se pehle daalna hota h.

class Doctor extends Person {
    constructor(branch){
        console.log("child constructor START hua")
        super();  // TO EVOKE PARENT CLASS CONSTRUCTOR.
        this.branch = branch;
        console.log("child constructor KHTM hua")
    }
    work(){
        super.eat(); //parent se eat function bula liya.
        console.log("Saving lives !");
    }
}

let anindita = new Doctor;
console.log(anindita); // toh ab aayega print hoke constructors of both Person & Doctor
/* order:
 child constructor START hua    // pehle iska hee console tha
 parent constructor starts      // fir "super()" tha 
 child constructor KHTM hua     // fir iska console
*/
// super() ke parenthesis mei woh input/arguments jaati h jo chahiye hongi in the constructor function of parent.

/* INTERVIEW QUESTIONS CAN BE ON   
 super() KEYWORD    or
 extends KEYWORD    or
 Inheritance        or
 method overriding   etc. etc..
*/

// PRACTICE QUESTIONS

//QUES_ You are creating a website for your college. Create a class User with 2 properties, name & email. it also has a method called viewData() that allows user to view website.

let DATA = "secret information"

class User {
    constructor(name, email){
        this.name = name;
        this.email= email;
    }
    viewData(){
        console.log("Website data =", DATA);
    }
}

let student1 = new User("Shraddha", "shkh123@gmail.com");
let student2 = new User("Aman", "amndth123@gmail.com");

console.log(student1); // se name and email aajayega print hoke
console.log(student2);

console.log(student1.viewData); // se viewData kr skte h dono students.
console.log(student2.viewData);

//QUES_ create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "some new valew";    // obv real editing acces code would be smth else in its world.
    }
}

let admin1 = new Admin("admin1kanaam", "admin1kaemail");
/* 
 obv "admin1kanaam", "admin1kaemail" ko name and email ki jgah pe bulaana ho without even calling any function and method of class.......i.e chaahe ki khud class bulaaate
 hote hee run hojaaye toh class ke constuctor mei daalenge usse obviously hence name & email arguments constructor mei daali.
 But name and email toh parent ke constructor mei use hue h. TOH CHILD KE CONSTRUCTOR MEI SE PARENT KE CONSTRUCTOR KE LIYE ARGUMENT PASS KR DETE H USING super() KEYWORD.
*/

console.log(admin1); // Admin naam ki class khulegi jisme do values already filled hongi start se wo even calling. THOSE WILL BE THE name & email.

console.log(DATA); // will give "secret information"
// but if we do:
admin1.editData();
console.log(DATA); // NOW THIS WILL GIVE "some new valew" 

// ERROR HANDLING

// try-catch block  : used when hume lage humne koi code likkha and errror aa skta h might be toh we use this.

/* syntax:

try{
    //NORMAL CODE AAYEGA YAHAN JISME HUME LGRA ERROR AA SKTA H
}

catch(err){   // "err" WILL BE AN OBJECT ON KI KY ERROR AAYA
   //HANDLING OF ERRORS HAPPENS HERE.
}

*/

// ALTHOUGH WE ALWAYS WISH KI KABHI KOI ERROR NAA AYE AND HUM DIRECTLY try BLOCK SE catch KE BAAD WALE MEI JUM KR JAAYE WITHOUT GOING IN catch.

// AND ALSO ISS try-catch BLOCK KI WAJAH SE HUMARA CODE KABHI RUKEGA NHI.
//i.e. AGR HUMNE KOI ERROR EXPECTED LINE KA CODE try-catch MEI DAALA AND THE RUN KIYA TOH OVERALL CODE SMOOTHLY HEE CHALEGA.
// OTHERWISE AGR NAA HO try-catch BLOCK MEI LIKKHA HUA TOH USS LINE PE AAKE CODE RUK JAATA.

let p=5;
let q=10;
console.log("a=", a);
console.log("b=",b);
console.log("a+b =", a+b);
try{
    console.log("a+b =", a+c);  // iss line mei shak(hehe) tha ki isme error aayega
} catch(err){
    console.log(err);
}
console.log("a+b =", a+b);
console.log("a+b =", a+b);

//toh ab ye hua hoga ki baaki ka code normally chala hua hoga woh a+c wale ki jagah ky error aaaya woh likkhke aajayega.****