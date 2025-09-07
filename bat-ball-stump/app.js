let button=document.querySelectorAll(".game-object");
let msg=document.querySelector("#result-message");
let Gdiv=document.querySelectorAll(".game-div");
let userScore=0;
let compScore=0;


for(let btn of button){
    btn.addEventListener("click",()=>{
        let userChoice=btn.getAttribute("id");
        // Gdiv.forEach(div => {
        //     div.style.backgroundColor = "transparent";
        // });
        // btn.style.backgroundColor = "black";
        playGame(userChoice);

    })

}
function getCompChoice(){
    let options=["bat","ball","stump"];
    let compIdx=Math.floor(Math.random()*3);
    return options[compIdx];
}

function playGame(userChoice){
    let compChoice=getCompChoice();
    if(userChoice===compChoice){
        drawGame(); 
    }
    else if(userChoice==="bat" && compChoice==="ball" || userChoice==="ball" && compChoice==="stump" || userChoice==="stump" && compChoice==="bat"){
        userScore++;
        showWinner(userChoice,compChoice);
    }
    else{
        compScore++;
        showWinner(userChoice,compChoice);
    }
}

function drawGame(){
    msg.innerText="Game was Draw. Play again.";
    // msg.style.backgroundColor="#081b31";
}
function showWinner(userChoice,compChoice){
    msg.innerText=`You chose ${userChoice} and Computer chose ${compChoice}`;
    document.querySelector("#uscore").innerText=userScore;
    document.querySelector("#cscore").innerText=compScore;

}