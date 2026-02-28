function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");
//basically parseInt converts a number written in string form to actual number
// like a="42"  and b=parseInt(a);   will give b=42;  NOT b="42" 

// or direct use of parseInt
console.log(parseInt("96"));
console.log(parseInt("56hgjhdgjwhjhgwed"));// number ke aage kuch bhi random shit daal do toh 
console.log(parseInt("6.97"));
// hnn number ke peeche reandom shit daalne pe woh usse string se number mei convert ni kr paayega.
console.log(parseInt("ghgdhhdccj789hbjhd"));
// saare self written parseInts ko console.log mei daalna pda cuz agr ni kiya toh bas evaluate kr deta h and kuch print ni hota h.


//parseFloat w3ill give same results as parseInt******

// Only difference is that it will give result 3.14 in case of 3.14 which was not the case with parseInt.
//parseInt ne 3.14 ka 3 kiya 
// parseFloat lets decimal numbers be themselves ***********
function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
