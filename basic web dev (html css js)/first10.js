//LEC_10 ROCK PAPER SCISSORS

/* LINE-HEIGHT STYLING
line height is used like to make the test centred and on ekdum middle of an element
like jese div ka ek box banaya toh uske sabse upar rehta h text not in middle.....toh middle pe laane ke liye usse style se utni hee line-height dedo jitni height hai.
and text will be centered at the center of element.
*/
/*
object fit is for when image bhot compressed stretched wagerah ho......toh ye lgaao and aaraam karo.
*/
/*
choice wali class ke elements pe hover krne se unki opacity aadhi hogi and pointer aane lg jaayega instead of arrow.
*/

/*
aur agr opacity kam hone wala feauture psnd naa aara ho toh we can also make a dark circle around that image bas just do:
.choice.hover mei se opacity hatake background color maaro #081b31 and .choice ko border radius dedo 50% ka hover mei ek extra portion of desired color ka area milega around the image
and ye bhi hoga ki woh boundary of background color at hovering proportionate naa ho i.e. circle ka bg kahin zyada aara ho kahin kam.
this means images are not placed at the center of the desired div and so isko fix krne ke liye
in  .choice 
display:flex
justifycontent : center
align-items : center
*/
/*
scoreboard class wale div mei display jc and a-i daala toh dono sub divs horizontally arrange ho jaayenge ofcourse.
fir aage poore scoreboard div mei upar margin dedi then font size bada kiya
then dono sub divs mei gap dediya.
*/
/*
in #msg
display:inline actually kr ye rha h isme ki ye jo background color hoga naa iska woh poore div i.e. on division of line mei faila hota h....
usko ye hata ke bas utne mei daal dega jitna text hai. 
agr display:inline hataya toh dekh le ky hota h.
*/

/* 
idk why margin-top in .msgcontainer works diff than margin-top in #msg
*/

// MODULAR WAY OF PROGRAMMING: har ek chote chote kaam ko ek function mei daal dena toh now everything is divided in functions
// coz then these small functions will be REUSABLE IN FUTURE.

let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msgVariable = document.querySelector("#msg");
const userScoreboard = document.querySelector("#userscore");// accessing scoreboard numbers for both comp and user
const compScoreboard = document.querySelector("#compscore");
const genCompChoice = () => { // FUNCTION FOR RANDOMLY GENERATING A VALUE AMONG ROCK PAPERS SCISSORS
    const options = ["rock","paper","scissors"];
    //"Math" ek class hai jisme random naam ka ek function hota h jo 1 se leke 9 ke beech koi bhi ek random value generate krta h.
    // random se whole numbers generate krwaane ka bhi ek tareeka h 
    // HUME 0 1 or 2 MEI SE KOI EK CHAHIYE.
    // koi bhi number jo 0 se 1 ke beech mei aata h agr usse 3 se multiply kr de toh woh 0 se 3 ke beech mei aayega.
    // i.e. 3 se multiply krne pe we'll get 0 point smth or 1 point smth or 2 point smth.
    // and jo decimal places h each random generation mei woh hum hata denge each time a generation occurs by also using a function called "flow" from Math class.
    // Math.floor
    const randomIndex = Math.floor(Math.random()*3);  
    return options[randomIndex];  // toh ab isse hume ek random choice from our options array mil jaayegi.
}
const drawGame = () => {
    console.log("Game was draw"); // yaad rakkh yahan console window mei print krwa rhe h not on actual screen.
    msgVariable.innerText = "Game was draw";
    msgVariable.style.backgroundColor = "#081b31";
    // YE YAHAN DRAW FUNCTION KE ANDAR SAME COLOR SPECIFY KRNA ZAROORI H COZ ITS A NEED TO TELL OUR FUCTION KI:
    // DRAW HONE PE KONSA COLOR LGNA HEE CHAHIYE.
    // WE CANT JUST LEAVE BG HERE THINKING SAME COLOR AS "play your move" HEE TOH HAI TOH GAME DRAW HONE PE WAHI COLOR AUTOMATICALLY WAAPIS AAJAYEGA.
    // NHII AAYEGAAAAA  coz jab bhi ek baar default color change hua uss container to red or to green toh wahi hee rhega until it changes again to green or red.
    //"play your move" wala color waapis nhi aayega.
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){ // if(userWin)   mtlb obv if userWin = true......booleans ke liye direct likkh skte h we know
        console.log("You Win :)");
        userScore++; // accha iss variable ka kaam yahan aayega
        userScoreboard.innerText = userScore; // obv userScoreboard++ nhi kr skte the i.e. variable jisme ek element store h uspe operations perform nhi kr skte the.
        // toh thats the use of userScore jispe perform kiya ++ operation and dediya userScoreboard ko
        msgVariable.innerText = `You Win :) , your ${userChoice} beats ${compChoice}`;
        msgVariable.style.backgroundColor = "green";
    } else{
        console.log("You Lose :(");
        compScore++ ;
        compScoreboard.innerText = compScore;
        msgVariable.innerText = `You Lose :( , ${compChoice} beats your ${userChoice}`;
        msgVariable.style.backgroundColor = "red";
    }
}; 

//game ko khelne ke liye comp ko bhi apni ek random choice generate krni pdegi
const playGame = (userChoice) => {
    console.log("user's choice :", userChoice);
    // now generating computer's choice
    const compChoice = genCompChoice();
    console.log("comp's choice", compChoice); // ab yahan se check kro console window toh on every click we'll get a user's choice and a computer's choice printed in console window.
    if(userChoice === compChoice){
        // draw game condition ofcourse
        drawGame();
    } else{
        // AND OBV AB COMP KI CHOICE BHI PAPER TOH HO NI SKTI COZ WOH CONDITION HUMNE PEHLE HEE HATA DII H 
        // HENCE COMPCHOICE IS EITHER GONNA BE ROCK OR SCISSORS
        let userWin = true; // for tracking whether user is winning or not
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                userWin=false;
            }
            else{
                userWin=true; //jab compchoice sccissors wala case toh obv user would be winning
            }
        }
        else if(userChoice==="paper"){
            if(compChoice==="scissors"){
                userWin=false;
            }
            else{
                userWin=true; //jab compchoice rock wala case toh obv user would be winning
            }
        }
        else if(userChoice==="scissors"){
            if(compChoice==="rock"){
                userWin=false;
            }
            else{
                userWin=true; //jab compchoice paper wala case toh obv user would be winning
            }
        } 
        showWinner(userWin, userChoice, compChoice); // show winner yahan kyu likkha h its obvious. upar wali "if" statement mei draw condition
        // whole winner decider if theres no draw is in this "else" block toh iss block ke end mei daal diya show winner function. 
    }
}

choices.forEach((choice) => { // is for each se basically hum choices variable mei stored saari choice class divs ek ek krke access krenge.
    choice.addEventListener("click", () => { // aur finn choice class divs ko click krne pe hoga ye ki yahan neeche mentioned arrow function execute hoga.
        const userChoice = choice.getAttribute("id"); // unn choice class divs mei images ki id access kri.
        console.log("choice was clicked:", userChoice);
        playGame(userChoice);
    });
});
/* 
AB YAHAN UPAR WALA JITNA BHI CODE HAI USSE BACKEND KA LOGIC POORI TARAH WORK KRRA H.
i.e. ab game khelene jaaoge aur kisi choice pe click kroge toh tumhari choice and comp ki choice dono likkh ke aayenge and whether you won or lost likhh ke aayega.
in console window ofcourse. coz abhi sirf backend mei work krra h code.
FRONTEND MEI KOI CHANGES NI DIKHENGE ABHI.
*/
// ab ye jo msgs "you win" & " you lose" hai ye hume msgs wale paragraph i.e. "Play your move" ki jagah print krwaane h on browser.
// kr diya in showWinner function sab.