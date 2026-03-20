// LEC_13**************
//how to call api endpoints and take data from them. API : application programming interface.

/* 
 API ek system server or similar thing hoti jispe hum request send krte h.
 maan le jese ek koi API h jo bhot saari dishes ki recipes stored hai.
 Toh humne isme request bheji pizza ki. Toh pizza banane ki recipe mil jaayegi.
*/

/* fetch API  ......for API calls
 The fetch API provides an interface for fetching (sending/recieving) resources.
 recieving mtlb obviously getting the data response that we asked or requested.
 and sending can be sending some data or set of instructions to the API. It is also highly possible.
 It uses request and response objects.***** 
 The fetch() method is used to fetch a resource (data).
 Aur woh jo data mangwaaya woh kahan kese kisse hoke aara h that is NOT imp to us.

 free APIs available on internet: public APIs on internet koi bhi lele.
 for example food api: generally APIs jo hote h unki documentation hoti h. Uske andar likkha hota h hum uss API ko kese use kr skte h.
 
 Its more like jese humne youtube.com browser pe likkha toh humaare browser ne youtube ke server ko request bheji jisne hume fir youtube laake de diya.
*/

/* going with cat-facts API .........gives numerous facts about cats.
 likkha hoga "base URL for all end points which means'...koi toh link....' " jiska basically mtlb ki saare ke saare links iss hee se shuru honge. *******8
 and endpoints bhi likkhe honge ki ye specific end point use krne pe hume ky milega.
 like base url ke end mei "/facts" lgaane se facts about cats milenge.

 toh on browser if we write "baseURLlinkofcatsAPI/facts" toh fir hume ek black screen pe bhot saara data milega. 
 Ye toh browser ne khud se kr diya humaare liye.
 Ab hum seekhre honge hum yahi same cheez i.e. data fetch krna kese kr skte h using JS.
 

*/

const URL = "https://cat-fact.herokuapp.com/facts";
// ye upar wala URL thoda chuda hua hai. kabhi kabhi work ni krta.
// a more stable one is https://catfact.ninja/fact but ispe operate krne ka tareeka alag h. ye wala ek array return ni krega when used.

/* syntax:

 let promise = fetch(url , [options])
 
 Ye likkhne se fetch() method entered url pe request bhejega and hume usse ek promise return hoga jo hum ek variable mei store kr skte h. (Here we called this variable "promise")
 [options] bi hote h jinhe aage pddhte h.

*/

/*
let promiseForFetch = fetch(URL); // URL mei cat-facts API ka base url link stored h ofcourse.
console.log(promiseForFetch);
*/

/* jese hee print krwaya:
 sabse pehle toh hume promiseForFetch milega as a promise ofcourse. hence promise mila ofc as expected.
 starting mei uske saath likkha hua "pending" dikhaayega then jese hee cat-facts api se data fetch hua promiseState fullfilled dikhaayegi.
 Aur bhi bhot saara data milega bout that promise and the data fetched.
 ' status : 200 ' mtlb hota h SUCCESSFUL REQUEST.
 and wagerah wagerah...
*/
// now we know multiple ways to handle promises and get data from them. Like promise chaining or async await. We'll be using async await
let fact1 = document.querySelector("#fact1");
let btn = document.querySelector("#btn");

// btn.addEventListener("click", getCatFacts);
// ye event yahan define ni kr skte coz getCatFacts defined ni h abhi. Issliye 

const getCatFacts = async ()=> {
    console.log("getting cat-facts data......");
    let response = await fetch(URL); // iss variable ko promise0 bhi name kr skte the. but we generally call variables who fetch us datas from APIs as "response".
    // just above wala kaam i.e. fetching data from API might take time issliye we listed it as "await".
    // and jese hee data fetch hoga vese hee ye neeche wali statement execute hojaayegi.
    console.log(response);
    console.log("cat-facts data fetched");
    console.log(response.status);
    let data = await response.json();
    // await lgaaya coz response.json() ek object hee return krenge.
    console.log(data[0].text);
    fact1.innerText = data[0].text; //isse toh screen pe directly print hoga ab fact1.
}

btn.addEventListener("click", getCatFacts);

getCatFacts();
/* result:
 getting cat-facts data......
 >promise  (<pending>)
 > response   ........// ye jo "response" h ye ek object hai jiske andar multiple cheezein h ofc.
 cat-facts data fetched 
 200
*/
// hence API calls work on reuest response objects.

/* 
 Jab bhi hum apne fetch() method ko url ke saath options[] ni dete h toh fetch() ek particular type ki request generate krta h.
 called GET request. Bhot saari different type ki requests hoti h. 
 Jo keval aur keval data mangaane ke liye use hoti h they are GET requests.
 Upar jo use ki woh GET request hee thi. B y default mostly hum yhi use krte h.
*/
/*
 and now the biggest doubt ki why the data that we wanted is NOT how we expected it to be or wht we expected it to be..
 like browser pe jab cat-facts ka base url daala toh woh bhi GET request hee send krra h but usko status wagerah ke alaava aur bhi bhot si cheezein milri.
 coz ye jo data hume mila h woh ek alag format mei h which we cant read.
*/ 
// payment methods multiple ho skte h. cash online cheque. Paise toh utne hee jaare honge. 
/*
 AJAX is asynchronous JS & XML
 before we had our modern java script data ke liye jo network requests hoti thi woh XML files ke form mei aati jaati thi.
*/

/*
 nowadays its mostly in the format JSON(JavaScript Object Notation)
 i.e. jo data aaya hoga javascript object jesa hoga.
 tabhi console.log(response) ek object return krta h. 
 It returns in a format that we as js developers can easily handle.
 Bas uski tarah dikhaayi deta h actually uss format mei ni aata. Again, for easy handling for us.
 Coz we obviously cant handle XML.
 
 response hume JSON format mei milega jisko JS object mei convert krna pdega.
 to convert we use json() 
 
 json() method retrns a second promise that resolves with the result of parsing the response body text as JSON.
 (Input is JSON, output is JS object)********
 And JS object is what will be our usable data.
 toh adding....

 let data = await response.json();
 console.log(data);

 in getFacts();
*/
/*
 toh ab result mei ek toh response naam ka object aayega which will obv be not usable
 And uske saath uske neeche usable data milega.
 And usable data mei ek array hogi jiske har ek index pe jaake hum data print krwa skte h.
 yahan wali array jo milegi woh length:5 ki hogi.
 toh agr likkha

 console.log(data[0]);  // toh 0th index wala data print ho jaayega.

 but hume poora data bhi nhi chahiye bas text chahiye uska.Toh we write....

 console.log(data[0].text);

 ek button bhi add kr diii with event jisko click krne pe ab aayega fact1
*/
// if doing the same task with promise chaining.....
/*
 const getCatfacts2 = () =>{
 fetch(URL).then((response)=>{
    return response.json();      // changing the format of data.
    })
    .then((data)=>{
        console.log(data);
        fact1.innerText = data[2].text;
    });
 }
    // idk "data" kab define hua for this

 // its because.....

 let jsonResult = await response.json();  // if you used async/await
 is equivalent to:
 .then((data) => { ... })
 where "data" is just the name you gave that result.
 
 .then((response) => response.json())

 The response parameter is declared here.

 It represents the object returned by fetch.

 response.json() also returns a Promise that resolves to the parsed JSON data.

 Second .then((data) => {...})

 The function you passed gets called when the JSON is ready.

 The result of response.json() is automatically passed as the argument to this function.

 That’s why you see (data) => { ... }.

 So here, data is a variable representing the parsed JSON returned by the API.
 
 👉 You didn’t have to declare data yourself — JavaScript does it automatically when calling your arrow function with the resolved value of the Promise.
*/ 
// learning more bout some topics in detail.

/* REQUEST & RESPONSES
 jo humaari requests bhejte h woh generally hum http(hyper text transfer protocol), protocol certainly means rules obv.
 http mei kuch verbs hote h jo btate h hum kis type ki request bhejre h.
 <can read on MDN>
*/
 
// error 500-599 mei se kuch dikhaara h mtlb server/API ke side se hee h problem. Humaare end se thik h.
// mera 503 aara h. Toh good for me
// response status code we already know.

/* HTTP headers also contain details about the responses such as content type, HTTP status code etc.
 header is a category under response object jisme details hongi uski.
*/
// *******HOMEWORK: post request krke dikha.

// BUILDING A CURRENCY CONVERTER.

//  flagsAPI ke link mei .com ke baad country ke initials likkhte h jese US & IN for whichever country ka flag u want.

// abhi humaare code mei flag dynamically change ni hora hoga like changing of flag as we change the option. Utna adavance we havent reached yet.
//ABHI BAS HUM USD TO INR CONVERTER BANARE.  Extra options dropdown mei bas aise hee daal diye.

// exchange rate button daali jo submit button ki tarah act kregi. Coz form ke andar any button will act like submit button.

// DONE WITH CSS. NOW HUME TEEN CHEEZEIN KRNI HAI.

/* Now using JS we need to do two three things: ***********
 
 * Dropdown mei ek nhi multiple countries aaye. LIK=ike 160 or smth.
 * Flag needs to change with every move when we choose country.
 * And exchange button pe click krne pe conversion hona chahiye ofc.

*/

const currencyApi = new CurrencyAPI('YOUR-API-KEY');

currencyApi.latest({
        base_currency: 'USD',
        currencies: 'EUR'
    }).then(response => {
        console.log(response);
    });

const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";
// ye link ab kaam ni krra toh just in case should know.
// but atleast can learn how to operate with code.

const dropdowns = document.querySelectorAll(".dropdown select");

//kaafi bada object below copied from github
const countryList = {  AED: "AE",  AFN: "AF",  XCD: "AG",  ALL: "AL",  AMD: "AM",  ANG: "AN",  AOA: "AO",  AQD: "AQ",  ARS: "AR",  AUD: "AU",  AZN: "AZ",  BAM: "BA",  BBD: "BB",  BDT: "BD",  XOF: "BE",  BGN: "BG",  BHD: "BH",  BIF: "BI",  BMD: "BM",  BND: "BN",  BOB: "BO",  BRL: "BR",  BSD: "BS",  NOK: "BV",  BWP: "BW",  BYR: "BY",  BZD: "BZ",  CAD: "CA",  CDF: "CD",  XAF: "CF",  CHF: "CH",  CLP: "CL",  CNY: "CN",  COP: "CO",  CRC: "CR",  CUP: "CU",  CVE: "CV",  CYP: "CY",  CZK: "CZ",  DJF: "DJ",  DKK: "DK",  DOP: "DO",  DZD: "DZ",  ECS: "EC",  EEK: "EE",  EGP: "EG",  ETB: "ET",  EUR: "FR",  FJD: "FJ",  FKP: "FK",  GBP: "GB",  GEL: "GE",  GGP: "GG",  GHS: "GH",  GIP: "GI",  GMD: "GM",  GNF: "GN",  GTQ: "GT",  GYD: "GY",  HKD: "HK",  HNL: "HN",  HRK: "HR",  HTG: "HT",  HUF: "HU",  IDR: "ID",  ILS: "IL",  INR: "IN",  IQD: "IQ",  IRR: "IR",  ISK: "IS",  JMD: "JM",  JOD: "JO",  JPY: "JP",  KES: "KE",  KGS: "KG",  KHR: "KH",  KMF: "KM",  KPW: "KP",  KRW: "KR",  KWD: "KW",  KYD: "KY",  KZT: "KZ",  LAK: "LA",  LBP: "LB",  LKR: "LK",  LRD: "LR",  LSL: "LS",  LTL: "LT",  LVL: "LV",  LYD: "LY",  MAD: "MA",  MDL: "MD",  MGA: "MG",  MKD: "MK",  MMK: "MM",  MNT: "MN",  MOP: "MO",  MRO: "MR",  MTL: "MT",  MUR: "MU",  MVR: "MV",  MWK: "MW",  MXN: "MX",  MYR: "MY",  MZN: "MZ",  NAD: "NA",  XPF: "NC",  NGN: "NG",  NIO: "NI",  NPR: "NP",  NZD: "NZ",  OMR: "OM",  PAB: "PA",  PEN: "PE",  PGK: "PG",  PHP: "PH",  PKR: "PK",  PLN: "PL",  PYG: "PY",  QAR: "QA",  RON: "RO",  RSD: "RS",  RUB: "RU",  RWF: "RW",  SAR: "SA",  SBD: "SB",  SCR: "SC",  SDG: "SD",  SEK: "SE",  SGD: "SG",  SKK: "SK",  SLL: "SL",  SOS: "SO",  SRD: "SR",  STD: "ST",  SVC: "SV",  SYP: "SY",  SZL: "SZ",  THB: "TH",  TJS: "TJ",  TMT: "TM",  TND: "TN",  TOP: "TO",  TRY: "TR",  TTD: "TT",  TWD: "TW",  TZS: "TZ",  UAH: "UA",  UGX: "UG",  USD: "US",  UYU: "UY",  UZS: "UZ",  VEF: "VE",  VND: "VN",  VUV: "VU",  YER: "YE",  ZAR: "ZA",  ZMK: "ZM",  ZWD: "ZW",};
/* in countrylist.....
 keys are country currency codes &
 value stored in the keys are country codes.
*/

for(let select of dropdowns){
    for(currCode in countryList){  // parenthesis ke andar humne jo likkha usse saari 'keys' store ho gyi hongi in 'code' naam ke variable mei.
     console.log(code, countryList[code]); 
     // "code" symbolises country currency code and "countryList[code]" symbolises country code.
     // INR is indian currency code and IN is country code.
     let newOption = document.createElement("option");
     newOption.innerText = currCode; //newOption ka innerText will be now the whole list of currency codes of different countries.
     newOption.value = currCode;
     // ab hum chahate h left mei US ho and right mei india
     if (select.name === "from" && currCode === "USD"){
        newOption.selected = "selected"; // isse ab "USD" selected hoga "to" wale dropdown mei
     }
     else if (select.name === "to" && currCode === "INR"){
        newOption.selected = "selected"; // isse ab "INR" selected hoga "to" wale dropdown mei
     }
    }
}
//also we want ki counrtry currency code ke saath flag bhi change ho.

select.addEventListener("change", (evt) => {
    updateFlag(evt.target);

})
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    console.log(element);

    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}