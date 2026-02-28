// Date is a class that has been pre-made for us.

// currentDate is just a variable we used TO STORE THE CURRENT DATE AND EVERYTHING RELATED TO IT.


function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1. Mtln jan h toh zero dikhaayega. and dec h toh 11.
  console.log("weird year :", currentDate.getFullYear()); 
  // this weirdo function year() gives an integer representing current year minus 1900.
  console.log("Year:", currentDate.getFullYear()); // this one gives exact year.
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);// isse ab currentdate hee print hogi JUST WITH YEAR CHANGE.i.e. sab same bas year 2022 likkha aara hoga.

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);
  // idk why but setFullyear pe hee change hogya tha month bhi to "june"

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());
  //getTime() gives the total milliseconds passed since 1970. God knows why.

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();

// we can use getTime() to check how much time it took for a function to run.

function calculateSum(){
  let a=0;
  for(let i=0; i<=100000; i++){
    a=a+i;
  }
  return a;
}
const beforeFunctionRun = new Date();
// date class mei new object add kiya beforefunctionrun so now we can use Date class ke methods and functions on this.
// like getTime()
const beforeTimeinMilli = beforeFunctionRun.getTime();

calculateSum();

const afterFunctionRun = new Date();
// new object added to class Date and same things can be done with this too.
const afterTimeinMilli = afterFunctionRun.getTime();

// humne do variables mei getTime lgaaya. ek mei function run hone ke baad ek mei function run hone ke pehle.\
// toh dono ke times ka difference nikaal lenge toh we can get How much time it took for that function to run.
console.log(afterTimeinMilli - beforeTimeinMilli);

// it shows 2......tho harkirat ke mei it showed zero.

// one way to create a stopwatch. 

function currentTimePrint(){
  console.log(new Date().getTime());
}
setInterval(currentTimePrint, 1000);
// will be a very ugly stopwatch.
