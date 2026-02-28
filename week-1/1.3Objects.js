// Object Methods Explanation
// HERE obj is an object jispe saare methods aur functions lgaare

function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  // isse 'obj' object ke saari keys "keys" naam ke variable mei store ho jaayengi and we can print it ofc.
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  // does the same but for values instaead of keys
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  // This will give a big array jiska har element khud ek array hoga consisting of key value pairs.
  // see 4 urself.
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);
  /* let obj ={
    fullName: "harkirat"
   }
   console.log(obj.hasOwnProperty("fullName"));  // WILL GIVE TRUE CUZ OBJECT MEI fullName naam ki property h.
   console.log(obj.hasOwnProperty("age"));  WILL GIVE FALSE CUZ obj OBJECT MEI KOI age naam ki property ni h.
  */

  // ****imp*****
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });  //syntax for Object.assign
  console.log("After Object.assign():", newObj);

}

// Example Usage for Object Methods
const sampleObject = {  // a simple object
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
