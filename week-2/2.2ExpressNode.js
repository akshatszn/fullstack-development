// NODE.JS AND ITS RUNTIME**********
//  Ecmascript, Javascript, Node.js and bun are all different things.
// mainly shyd backend h ye

/* ECMASCRIPT is the scripting language specification on which Javascript is based.
 It is a documentation / website that tells ki how javascript wi;ll be written etc.
 These guys are the owners of the jkavascript standard.**** Basically ek rulebook likhi h for JS.
 BASICALLY THIS RULEBOOK SAYS KI IF YOU ARE MAKING A COMPILER OR SOFTWARE TO RUN JS THEN PLEAS FOLLO THESE RULES.
 AND SHOULD BE UP TO DATE TOO WITH THE ECMASCRIPT STANDARD.

 JAVASCRIPT is a scripting language conforming these rules.
 JS is the most known and wildly used implementation of ECMAscript.
 JS also includes things like DOM(Document object model) which are not specified by ECMAscript.
 The browsers give us many things on top for better code flow. (Yahi woh cheezein h jo extra h other than ECMA)
 Like for example seTimeout, fs.readfile  etc......

 Some popular JS compilers: V8 in chrome, SpiderMonkey in firefox. (Takes the JS code and converts to zeros and ones)
 // jAB BHI ECMASCRIPT STANDARD UPGRADE HOGI TOH OBV INHE APNE COMPILER IN BROWSER KO BAND KR DIJIYEGA.

 THO INTERVIEWS MEI PUCHTE H KI IF JS CAN BE COMPILED, TOH USKA ANSWER NO. BY WRITING COMPILERS ABOVE I MEAN THINGS THAT CONVERT JS CODE TO ZERO AND ONE CODE FOR MACHINE LANGUAGE. 

 Browsers include extra things for better code experience.
*/

/*
  WHAT IS HTTP *********
  so basically,
 Frontend code we write in HTML, CSS, JavaScript

 Backend code we write using NodeJS. 
 Backedn is the section where all the rquests go.
 LIke frontend mei ek button jo click krke google ke data center mei request fetch krke laayega woh backend se laara h.

 And HTTP does the job of connecting the frontend to the backend to give immediate results.  *********
 HTTP is the protocol that lets your frontend and backend talk.

*/ 

//Today's Goal is to write an HTTP server in node.js ******************
// (Once we write this code, we can run it in a datacenter. We can deploy it in a datacenter in USA)  
// We'll also learn how to communicate with it later in the class.

/* Use cases of Node.js
 Create Clis
 Create a Video Player
 Create a game
 Create an HTTP server
*/

// frontend talks to backends through WIRES & ROUTERS. Layed down all over the globe ofcourse.
// Process is click on some button "search" and then a request is sent to the main data center (Of most tech companies located in USA)
// and then a response comes back.
// All this happens without the interaction of humans, just through code. OBV.

// All the above four lines are being done using HTTP protocol.

/* HTTP protocol (HTTP servers fight HTTP protocol)
 In the end, its the client throwing some information at a server. Server doing something with that information. Server responding back with the final result.

 Think of them as functions where 
 1. Arguments are something the client sends. (Takes input from someone on the internet.)
 2. Rather than calling a function using its name, the client uses a URL.
 3. Rather than the function body, the server does something with the request.
 4. Rather than the function returning a value, the server responds with some data.
 

 */

/* Now what is HTTP server. 
 The thing that exposes the machine learning model to the world.
 Some code that is able to follow the HTTP protocol and is able to communicate with clients (browsers/mobile apps)

 Think of this to be similar to the call app in your phone which lets you communicate with your friends
*/
// Maybe calling as a process is HTTP protocol and all the caller apps that let us call another person are 
// Can someone in rajasthan hit my http server that i just created?? OFcourse not.
// We need Public IPs. Its a big process basically. 
// But yea I can ask my friend who might be on the same wi-fi to hit my server up.
// Proper deploying process has a lot more to it.
// HTTP server is like a function, 

// HTTPS is just a secure version of http server.

/* In HTTP server,
  
 THings a client needs to worry about:
 1. Protocol (HTT/ HTTPS)
 2. ADDRess
 3. Route
 4. Headers, body, Query Params
 5. Method

 Things he server side needs to worry about:
 Response headers
 Response body
 Status codes.
*/

/* Example : https//chatopenai.com/backend-api/conversation
   https protocol ka naam h isme.
   chatopenai.com is the URL
   backend-api/conversation is for Route

   In header u send an authentication information. Like yea this person is logged in. Cookiesss bolte.
   
  
*/