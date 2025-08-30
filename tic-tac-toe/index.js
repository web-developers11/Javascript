let boxes = document.querySelectorAll(".btn");
let playerX = true; //playerX, playerO
let reset=document.querySelector(".reset-btn");
let newGame=document.querySelector(".new-game-btn");
let count=0;
console.log(boxes);
console.dir(boxes);

// button.onclick=()=>{
//     for(let btn of button ){
//         console.dir(btn);
//     }
// }
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((btn) => {
    console.log(btn);
  btn.addEventListener("click", () => {
    console.log(btn);
    if (playerX) {
      btn.innerText = "X";
      playerX = false;
    } else {
      btn.innerText = "O";
      playerX = true;
    }
    btn.disabled = true;
    let isWinner = checkWinner();
  });
});
const disableBoxes=() =>{
    //let boxes=document.querySelectorAll(".btn");
    for(let box of boxes){
        console.log("inside");
        box.disabled=true;
    }
}
const showWinner = (winner) => {
    let msg=document.querySelector(".winner-content");
    msg.classList.add("show-msg");
    let msgVal=document.querySelector(".msgVal");
    msgVal.innerText=`Congratulation to the winner ${winner}`;
}
const resetGame=()=>{
    let msg=document.querySelector(".winner-content");
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msg.classList.remove("show-msg");
}
// const drawGame = () =>{
//     let isWinner=checkWinner();
//     let msg=document.querySelector(".winner-content");
//     let msgVal=document.querySelector(".msgVal");
//     if (count===9 && !isWinner){
//         msg.classList.add("show-msg");
        
//     }
// }
const checkWinner = () => {
  for (let pattern of winPatterns) {
        console.log(pattern);
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    console.log(pos1Val);
    console.log(pos2Val);
    console.log(pos3Val);
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        disableBoxes();
      }
    //   else{
    //     count++;
    //   }
    //   drawGame();
    }
  }
};
reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);

