console.log("SERVER FILE LOADED")
// JavaScript doesnt create the http server. NodeJS gives us HTTP bundle which uses C or C++ for us to create server.
// we just use the an Api on top of JavaScript LANGUAGE to use express. And to access express we need NodeJS.

const express = require("express");
// one small difference bw fs and express is that fs is built in in nodeJS whereas Express ko externally bulaana pdega from internet.

const app = express();  // here we are calling express function which will give an object stored in "app".
// now we've initialised ap as an object toh ab uspe express ke codebase ke multiple functions use kr skte h.
app.use((req,res,next)=>{
    console.log("Request received:", req.method, req.url)
    next()
})
/* 
 This above app.use tells Express:
 "For every request that hits the server, run this function first."
 What app.use() means
 app.use() registers middleware.
 Middleware = a function that runs between the request arriving and the response being sent.
 THis didnt make any change in the result of code tho for now, most backe4nd devs use it for debugging.
*/ 

const port = 3000 // we've created a HTTP server that is listed on port 3000.   
// ***** Ohk so above line didnt create the server, app.listen craetes the server IN MY DEVICE. It tells the machine?browser to look for this code for any request that is send to 3000 port.
// Humne khudke App ko attach kr diya to port and now we can use the APIs at express for the logic of our usecase in our own app.
// And yea agr duusre terminal mei jaake firse node run kroge index,js pe toh itll show address already in use.
// which means ek app ek hee port le skta h and fir uss port pe duusra process run ni kr skte, unless we terminate the initial process ofc.

app.use(express.json());
// this line needed to be added for express to send JSON results too while we are testing on postman.
/*
 app.get is similar to fs.readfile("path", "utf-8", callbackFunc())

 fs ke case mei callbackFunc run hota h WHEN FILE IS READ toh same is......
*/
app.get('/', function(req, res){ // these callbacks will run when someone hits our backend server.
    // req argument is basically what we are calling.....headers, body, query parameter etc.
    // and then yahan kuch kuch code run krega like machine learning model, database calls etc.
    // and then res will be used to give the final output jo hume vaapis bhejna h
    // obviously jo vaapis bhejenge woh written code ka result hoga mostly but here in this example function we are just sending a simple string.
    // we can return html code too. 

  // tho JS is Single threaded, but nodeJS can manage multiple requests at the same time because Database calls/ requests etc. are aynchronous.
  // but hnn agr infinite loop run kr diya toh obv its gonna get stuck as its a synchronous piece of code.
    res.send('Hello World!')  // how will it reach here is actually something that we dont need to know and is done automatically.
    // Jab we run our local port on browser toh "Hello World!" is printed on screen, But why does browser assume that this string was a HTML code ki aise screen pe dera.
    // the thing is ki browser aisi strings ko assume kr leta h ki its in html, idk how it will do if we send a JSOn, i highly doubt ki JSOn ko bhi html code banayega.
    // most prolly not gonna priunt the JSON.
    /*
    res.json({
       name: "harsh",
       age:20
    })
    */
})
// the above code says ki whenever we'll go to "/" backeend will respond with "Hello world. "
// app.post request mei user can send some data along.Like gpt mei kuch type krke bheja and pressed enter.
// ab uske inspect pe jaake payload section mei body kholega toh neeche hee neeche youll find that string messag ewe sent.

// above is the most basic HTTP server code using express.
//APP specific logic if u want, Imagine u are a chatgpt employee then ud write,

app.post('/backend-api/conversation', function(req, res){
    // run a machine learning model.
    res.send(`The user just got the things he wanted in that convo on port ${port}. I hope.`);
})

// Now searching localhost:3000 on browser will open our server ig, Jahan likkha aara hoga "Hello world"

// Everything else is just Work on top of this base code, requests change hoti h, tasks and callback function complex hote h. Machine learning models dalte h.c
// but basic http server yahi h.

// There are things where one is better than other. 

// How do you handle evrything in a post request.
app.post('/conversations', function(req, res){
    console.log("POST /conversations reached")
    console.log(req.headers) // will give an object jisme multiple headers honge
    // and we are printing this in console too (abhi toh terminal mei)
    // headers kuch pehle se the kuch add kiye, like authoristaion.
    // can add for a specific header too., like....
    console.log(req.headers["authorization"])
    // iss line se authorisation ki value alag se bhi print hogi.

    console.log(req.body) // this is the body that the client has send.
    // and server side will be returning the content below.
    res.send({
        msg: "2+2 = 4"
    })
})

app.listen(port, "0.0.0.0",function(){
  console.log(`Example app listening on port ${port}`)
})


// ************* app.listen humesha end mei aayega server code mei *******

// Insight, If we change the port to 3001, then just switch  all the 3000 to 3001 everywhere and restart the server.
// thats it, now app is hosted on port 3001 in our machine. everything else will stay same.

/* Abhi hum ye app apne system ke servers mei host krre h, thats why we call it local ofc.
  Jab hum globally host krna chaahenge so not only ppl on our wifi can access it but the whole world then 
  we use cloud services ofcourse. And the hum wahan se backend requests handle krte h.
*/
// 10.65.21.132
// http://10.65.21.132:3000
// Hostel wifi and warp vpn ki wajah se maybe not running.

// ngrok aka poora account process krke get a URL and run it on the device.


