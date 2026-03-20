// base code is the same server.
console.log("SERVER FILE LOADED")

const express = require("express");
const bodyParser = require("body-parser"); // now what is this
// one of the reasons express does not handle bodies cuz not all requests have bodies.
/*actually express jo h woh body handle nhi krta h, Toh body handling ke liye ek nayi library uthayi called body-parser.
Express does not parse raw request streams into usable data automatically.
4. What body-parser does

Body-parser (or express.json() now) is middleware that reads the request stream and converts it into a JS object.

Flow becomes:

Incoming request
       ↓
body-parser middleware
       ↓
parse raw JSON string
       ↓
convert to JS object
       ↓
attach to req.body

Example:

Raw incoming body:

{"username":"harsh","password":"123"}

After parsing:

req.body = {
  username: "harsh",
  password: "123"
}

(ofc we can use libraries other than body-parser too)
*/
const app = express();

app.use((req,res,next)=>{
    console.log("Request received:", req.method, req.url)
    next()
})

// req and res are two arguments/variables.req has all the requested data.
// and res has all the responding data.

const port = 3001

// middleware

app.use(bodyParser.json())
// ye ab koi bhi body aayegi aur usme json hoga toh woh bodyParser will extract it and save it to "body"
// toh now agr req.body kabhi hua toh now we know what that "body" keyword gonna have .

app.use(express.json());
// "body" is basically the payload. Like chatgpt mei  kuch text bheja chat mei toh jo bhi bheja woh "body" hogi. The ques(the string) we are asking the backend which is ai machine learning model here.
//like below 
app.post('/something', (req,res)=>{
  const message = req.body;
  // kuch toh machine learning thingy
  console.log(message);
  // ye above line woh print krri h jo postman se hum body send krre h.
  res.json({
    output: "69+96= 165"  
  })
  // res.send('Kuch toh output aayega after machine learning kalakaandi.'); // ye nhi dikhega obv browser pe cuz this is NOT a GET request
  // and also above line code hataya cuz EK HEE res.send kr skte h usse zyada nhi h.
})

app.post('/', function(req, res){   // ye get req thi pehle. 
  console.log(req.body);  // to check the body ofcourse.
  res.send('Hello World!') // "hello world html assumed hoti h so it shows on screen. upar wali line console mei ;ogged h ofc. jus statin the difference."
})
//toh ab localhost3001 kuch nhi dega browser pe, why is that because browsers automatically sends a GET reuest and humne yahan GET ko change krke POST kr diya. and also koi aur bhi GET req nhi h 
// toh lets write a GET request for this so we can see something on screen when we run in browser.
// and woh screen pe dikhega obviously cuz HTML assume kr leta h woh data woh when not specified.
app.get('/', function(req,res){
  res.send('Hanjiiiii');
})
app.post('/backend-api/conversation', function(req, res){
    res.send(`The user just got the things he wanted in that convo on port ${port}. I hope.`);
})

app.post('/conversations', function(req, res){
    console.log("POST /conversations reached")
    console.log(req.headers)
    console.log(req.headers["authorization"])
    console.log(req.body)
    // obv also console shit prints in the terminal. Now it depends konsi request ko mangaaya h
    // " /conversation" ki hoti toh chaar cheezein print krwa skte the in terminal
    res.send({
        msg: "2+2 = 4"
    })
})

app.listen(port, "0.0.0.0",function(){
  console.log(`Example app listening on port ${port}`)
})

// fetch is a web api like setTimeout. Fetch helps to fetch data.
// java script mei use hota h. we can put out an onclick handler on a button or element for fetching and it will fwtch out data for us.

// Toh aise hee endpoint URLs ke liye code likkhenge hum code thats what we do. 

