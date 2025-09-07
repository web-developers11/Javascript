let addBtn=document.querySelector("#add-btn");
let userInput=document.querySelector("#todo-text");
let todoDate=document.querySelector("#todo-date");
let outputDiv=document.querySelector(".output-div");
let todoitemInput=document.querySelector("#todo-item");
let tododateInput=document.querySelector("#todo-item-date");
//let deleteItem=document.querySelector("#delete-btn");
let toDoList=[{
    item:"",
    date:""
}];

function notEmpty(){
    let itemdata=userInput.value;
    let itemdate=todoDate.value;
    if(itemdata === "" || itemdate === ""){
        alert("Please fill in both fields.");
        return false;
    }
    return true;
}

addBtn.addEventListener("click", ()=>{
   if(notEmpty()== true){
         let itemdata=userInput.value;
         let itemdate=todoDate.value;
         console.log(itemdata);
         console.log(itemdate);
         //toDoList.unshift(itemdata);
         toDoList.push({
             item: itemdata,
             date: itemdate
         });
         //console.log(finalOutput);
         //itemdata=" ";
         userInput.value="";//to make the input field empty once we click on add
         todoDate.value="";
          displayOutput();
        }
             
});
// deleteItem.addEventListener("click", ()=>{
//          tododateInput.innerHTML=" ";
//          todoitemInput.innerHTML=" " ;
//          userInput.innerText=" ";
//          todoDate.innerText=" " ;
//          deleteItem.style.display="none";
//     });

    function displayOutput(){
        let containerElement=document.querySelector(".output-div");
        let newHtml=``;
        //todoitemInput.innerText=" ";
        for(i=1;i<toDoList.length;i++){
            console.log(toDoList.length);
            
           newHtml+= 
           `
           <span class="output-data">${toDoList[i].item}</span>
           <span  class="output-data">${toDoList[i].date}</span> 
           <button id="delete-btn" class="output-data" onclick="toDoList.splice(${i},1); displayOutput();">Delete</button>
           `;
           //console.log(newHtml);
           
        }
        containerElement.innerHTML=newHtml;
    }

