// LEC_9  TIC TAC TOE

/*
9 boxes  numbering krenge jinki 012345678
do symbols cross and o .......do players khelenge........dono ko ek ek sign assignedjisse woh khelenge.
alternate chances aayengi.......kisi bhi KHAALI box mei apna sign maar skte h.
Teen winning orientations hoti h......horizontal vertical & diagnal 
winning patterns will be :
012 , 345 , 678   //horizontal patterns
036 , 147 , 258   // vertical patterns
048 , 246  //diagnal patterns 
total 8 patterns jinme se ek bhi bana diya ek player ne toh they won.

humaare paas 9 individual game boxes hone chahiye jinpe click kr sake obv

pehle designing krke....."COOLORS" website gives acche coor pallettes.

height: 70vh;    mtlb 70% of view port height i.e jitna bhi humara page visible hoga uska 70% part humesha humaare container ke paas hoga,
fir chaahe hum kitne hee bada CODE likkh de.

60vmin represents 60% of viewport's smaller dimension i.e. agr viewport ki height kam toh vmin will be vh
and agr viewport ki width kam h toh vmin will be vw. OBV VIEWPORT KI HEIGHT KAM H TOH THIS WILL ALSO BE vh LIKE CONTAINER KI HEIGHT
hence 70% of viewport humesha container ke paas rhega ab and 60% to game

Game div ki height 60 vmin daali aur hume ek 9 boces daalne h.
ek row mei teen box chahiye Toh technically uss game div ki height ko teen parts mei divide krenge coz teen rows daalni h soch ke dekh
hence 20vh rakkhde bcz height toh 9 boxes teen parts mei divide ho jaaye shyd ye logic h
18 vh rakkhre to leave some space.

in  .game
* display flex se saare boxes ek single line mei aagye apne dimensions thode tod modh ke
* flex-wrap does ki agar jagah ni h toh next line mei aajao
* center mei leke aane ke liye justifycontent and also align items
* gap to put some gap bw our boxes
*/

let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let playagainbtn=document.querySelector("#playagainbtn");
let msg = document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

// we need to track also ki kiski turn h.....x player yaa o player.
// Alternate turns hoti h ofc

let turnO = true;  //20:00  aage likhunga shi se

// now storing winning patterns

//MAKING 1D AND 2D ARRAYS..........1d wahi h jo abhi tak paddhre the
// 2d array mtlb array ke andar array
/*
let arr1 = ["apple" , "banana" , "litchi"];
let arr2 = [["apple" , "banana" , "litchi"], ["potato" , "tomato" , "pumpkin" , "ginger"] , ["frooti" , "milk"] ];

console.log(arr2[0]);         // ISSE arr1 PRINT HOKE AAJAYEGA
console.log(arr2[0][0]);      // apple print hoke aayega
console.log(arr2[0][1]);      // banana print hoke aayega
console.log(arr2[0][2]);      // litchi print hoke aayega
console.log(arr2[1][2]);      // pumpkin print hoke aayega

012 , 345 , 678   //horizontal patterns
036 , 147 , 258   // vertical patterns
048 , 246

THIS WILL BE A BETTER WAY TO STORE OUR WINNING PATTERNS.
*/
let winPattterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// we know we want something to happen at the click on our boxes

boxes.forEach((box) => {  //saare ke saare box class ke boxes pe ye event add krre h naa.
    box.addEventListener("click", () => {
        console.log("box was clicked.");
        //box.innerText = "aksh";  // toh ab click hone pe "abcd" likkh ke aayega box mei // but ye thodi krna h.
        if(turnO){   // parenthesis mei sirf "turnO" likho yaa "turnO === true"
            // agr O ki turn hogi toh text change hoke "O" hogi and then O ki turn false ho jaayegi
            box.innerText = "O";
            turnO = false ;
        }
        else{ // agr X ki turn hogi toh box ka innertext change hoke "X" ho jaayega. And ofc then turnO true ho jaayegi after this.
            box.innerText = "X";
            turnO = true ;
        }
        // TOH BASIC LOGIC YE USE HORA KI EVERYTIME ANY .box IS CLICKED TOH THIS FUNCTION WILL GET CARRIED OUT.
        // AGAR turnO true hua uss click ke time toh O aajaayega box mei likkh ke coz "if" ka work carry out krega and false ho jaayega ab turnO toh...
        // NEXT KOI .box CLICK HONE PE turnO false HOGA AFTER PREVIOUS CLICK TOH AB "else" WALA WORK CARRY OUT KREGA AND TRUE HO JAAYEGAturnO AGAIN
        
        // BUT AB EK PROBLEM AARI H KI AGR DOUBLE CLICK KIYA TOH SIGN FIR CHANGE HO JAAYEGA. LIKE CLICK KIYA "X" HUA....VAAPIS CLICK KIYA TOH "O" HOGYA AND CONTINUES FOREVER.
        // TOH ISS LIYE HAR CLISCK KE BAAD USS BUTTON KO DISABLE BHI KRNA PADEGA
        box.disabled = true;
        // ab ek button ek hee baar click hogi.
        // and since button disable ho jayegi toh unn buttons ke click hone pe unme webpage ka hee colour chaddh jaayega peeche.
        // COZ HUMNE UNME KOI COLOR TOH DAALA NHI THA BACKGROUND KA TOH DISABLE HOTE HEE KOI COLOR BACHA NI, HENCE HUM BG COLOR DAALENGE 

        //ab check krnenge whether anyone WON or not

        checkWinner();  // function bana diya check krne ke liye
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;  // alll box buttons getting vaapis disabled.
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;  // alll box buttons getting Enabled.
        box.innerText = "";
    }
}

const showWinner=(winner) => {
    msg.innerText = `Congaratulations, winner is ${winner} `;  // msg wale div ka text change isse
    msgContainer.classList.remove("hide"); // making msg container visible again COZ WE REMOVED THE "hide" CLASS.
    // OR msgContainer ke css attributes accesss krke display ko "hide" se hatake "visible" kr skte the using DOM manipulation.
    // actually hume later firse hide class add krni h msgContainer mei toh it was good method above.
    disableBoxes()
}

const checkWinner = () => {
    for(let patterns of winPattterns){
        //console.log(patterns[0], patterns[1], patterns[2]);   // agar sirf console.log(patterns) likkhte toh saare arrays jo winPatterns mei stored hoke milte.
        //isse aur better result milega. JO CHAHIYE. SOCH KE DEKH.

        // BUT ISSE BHI BETTER COULD BE
        /*
        console.log(
            boxes[patterns[0]].innerText, // represents postion one of one of the winning pattern
            boxes[patterns[1]].innerText, // represents postion two of one of the winning pattern
            boxes[patterns[2]].innerText  // represents postion three of one of the winning pattern
        );
        */
        // ab sird 012 345 etc likkh ke ni aara hoga balki uske saath uss button mei likkha ky h andar woh bhi aara hoga.
        //(agr  .innerText naa likkhte bas and rest as it is toh wahi individual arrays likkhe aate and unn buttons ka code aata)
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){  // agr winning condition check krni toh sabse pehle winning triplets ke teenon box bhare bhi toh hone chahiye hence yahan se start krenge.
            if(pos1Val === pos2Val && pos2Val === pos3Val){   // fir check krega ki agr koi winning triplet mei teenon value same aari h ky. AGR AAGYI TOH OBV WINNER.
                console.log("WINNER IS ", pos1Val)
                // but abhi ek problm h bas ki EVEN AFTER DECLARING THE WINNER GAME CONTINUES AND BY CHANCE EK AUR KOI WINNING PATTERN BANGYA OPPONENT KA TOH USSE BHI WINNER DECLARE KR DEGA.
                // the above line has been taken care of in showWinner function.
                showWinner(pos1Val);
            }
        }
    }
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide"); // hide class vaapis add kr dii
}

playagainbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame); 
//done.

// AND JO EXTRA CHEEZEIN PRINT WAGERAH KRWA RHE THE HUM CONSOLE WINDOW WAGERAH MEI ALL THROUGH THE GAME, UNHE HATANA HO TOH HATA DE.
// msg container mei kuch extra cheezein add ki jo obv sab hidden rhengi from start until msgContainer appears.


// HWWWWW PROBLEMMMMMMMMMMMM