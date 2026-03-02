const express = require("express");
// one small difference bw fs and express is that fs is built in in nodeJS whereas Express ko externally bulaana pdega from internet.

const app = express();
// now we've initialised ap as an object toh ab uspe express ke codebase ke multiple functions use kr skte h.
const port = 3000 // we've created a HTTP server that is listed on port 3000.   
// Humne khudke App ko attach kr diya to port and now we can use the APIs at express for the logic of our usecase in our own app.

/*
 app.get is similar to fs.readfile("path", "utf-8", callbackFunc())

 fs ke case mei callbackFunc run hota h WHEN FILE IS READ toh same is......
*/
app.get('/', function(req, res){ // these callbacks will run when someone hits our backend server.
  res.send('Hello World!')  // how will it reach here is actually something that we dont need to know and is done automatically.
})
// the above code says ki whenever we'll go to "/" backeend will respond with "Hello world. "
app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})
// above is the most basic HTTP server code using express.
//APP specific logic if u want, Imagine u are a chatgpt employee then ud write,

app.post('/backend-api/conversation', function(req, res){
    // run a machine learning model.
    res.send(`The user just got the things he wanted in that convo on port ${port}. I hope.`);
})

// Now searching localhost:3000 on browser will open our server ig, Jahan likkha aara hoga "Hello world"

// Everything else is just Work on top of this base code, requests change hoti h, tasks and callback function complex hote h. Machine learning models dalte h.c
// but basic http server yahi h.