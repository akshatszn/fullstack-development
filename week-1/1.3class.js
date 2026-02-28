const dog0={
  name:"doggie",
  legCount:4,
  speaks: "woof woof",
};

console.log("animal " + dog0["name"] + " speaks "+ dog0["speaks"]);

const cat0={
  name:"kitty",
  legCount: 4,
  speaks: "meow meow",
};

console.log("animal " + cat0["name"] + " speaks "+ cat0["speaks"]);

// better to write a function for above similar syntax

function printAnimalSound(animal){
  console.log("animal " + animal["name"] + " speaks "+ animal["speaks"]);
}

printAnimalSound(cat0);
printAnimalSound(dog0);
// ye dono upar wali lines desired string print krwa dengi.

// but if we write......
console.log(printAnimalSound(cat0));
console.log(printAnimalSound(dog0));
// ye dono lines kuch print ni krwayengi all because printAnimalSound function DOESN'T RETURN ANYTHING. I
// IT WOULD PRINT SOMETHING IF THOSE FUNCTION EVALUATED SMTH AND RETURNED IT.
// BUT IT DIDENT. TOH THESE TWO LINES WILL GIVE "undefined".

// jese we made a function for animals ke sounds vese hee we can make one for their legs and one for their hands eyes etc.. etc...\
// but aisi cheezon ke liye different functions banana is still a weird cuz hands legs eyes sound making toh saare animals krte h.

//' Class  gives out a structure of something thats reusable and used in multiple places.
// example ANIMAL
// using class we can define the blueprint of every animal.

class Animal {
  constructor(name, legCount, speaks) {
    this.name = name
    this.legCount = legCount
    this.speaks=speaks;
  }
  // class ke andar jo functions likkhe woh unn saare elements pe applicable honge jo jo uss class ke andar aate h.
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }

  speak(){
    console.log("hi there" + this.speaks);
  }
  // ****8any time the speak function will be called uk what will happen.

  static myType(){
    console.log("I am an Animal");
  }
}
// so from now on if we want to wreite about any animal we dont need to makew whole object of that.
// we already have a blueprint of an animal from ....... class Animal

// so from now on animals are written like.

let dog1 = new Animal("Dog", 4, "woof woof");
let cat1 = new Animal("Cat", 4, "meow meow");

dog1.speak(); //will print......... hi there woof woof.

/*
 dog1 and cat1 are objects of Animal class.
 class ke andar jo bhi functions define hue h woh bas uss class ke objects pe lg skrte h.
 tho. .... sirf uss class ke objects pe....uss class pe ni lga skte.
 example: Animal.speak() will show invalid cuz cuz objects pe lg skta h bas class pe ni.
*/

/* 
 whereas static functions are specifically for classes.
 like static functions likkhe hee issliye jaate h ki direct class ke upar lga skte h
 like Animal.myType();
*/
Animal.myType();
console.log(Animal.myType());
// both will print the same statement.






