let button=document.querySelectorAll(".btn");
let inputField=document.querySelector("#input-field");
   let currentValue="";
   let result="";
for(let btn of button){
    btn.addEventListener(("click"),()=>{
        if(btn.value=="clear"){
            currentValue="";
            inputField.value="";
        }
        else if(btn.value=="equals"){
         currentValue=currentValue;

        result=eval(currentValue);
        console.log(currentValue);
        console.log(result);
        inputField.value=result;
        console.log(inputField.value);
        }
        else{
            currentValue=currentValue + btn.value;
            inputField.value=currentValue;
        }
    });
}