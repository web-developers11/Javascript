let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#play");
let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");

let userCount=0;
let compCount=0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice=()=>{
    let options=["rock" , "paper" ,"scissor"];
    let compIdx=Math.floor(Math.random()*3);
    return options[compIdx];
};
const playGame = (userChoice)=>{
    let userWin = true;
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        if(userChoice==="rock"){
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissor" ? false : true;
        }
        else{
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
const drawGame=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";
};
const showWinner = (userWin, userChoice, genCompChoice) => {
    if(userWin){
         msg.innerText=`You win! Your ${userChoice} beats ${genCompChoice}`;
         msg.style.backgroundColor="green";
         userCount++;
         userScore.innerText=userCount;
    }
    else{
        msg.innerText=`You lost!  ${genCompChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
        compCount++;
        compScore.innerText=compCount;
    }  
}