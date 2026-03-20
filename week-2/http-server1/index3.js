// in some plqaces instead of const port = 3000
//we'll see....
const express=require('express');
const bodyParser=require("body-parser");
const app=express();
// now "app" will be a bhot bada object and uske andar bhot saare methods and functions honge which we can use in requests.

const port = process.env.PORT || 3002
// this is basically saying ki environment mei koi port specify hua h toh use that port
//otherwise use port 3002
// use....    set PORT=XXXX  in command prompt to specify a port.

app.use((req,res,next)=>{
    console.log("Request received:", req.method, req.url)
    next()
})
// this is a way of inviting an environment variable
// env variables are independent of what engine u use....... node, golang etc. whatever.
// whther uve set em up or injected em in ur engines while starting them.
// we can us those env variables 
// in node we do ikt by writig code line like above.

app.use(bodyParser.json())
app.use(express.json());

app.post('/something', (req,res)=>{
  const message = req.body;
  console.log(message);
  res.json({
    output: "69+96= 165"  
  })
})

app.post('/', function(req, res){
  console.log(req.body);
  res.send('Hello World!')
})

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
    res.send({
        msg: "2+2 = 4"
    })
})

app.listen(port, "0.0.0.0",function(){
  console.log(`Example app listening on port ${port}`)
})
// app.listen means ki bhai im occupying this port. Now all the requests that will be send from this code will be handled on port XXXX.

// if we know express syntax, how to build a http server, handle all requests in postman, and access ur server on ur wifi phone toh all set.
