let btn=document.querySelector(".mode");
let currentMode="light";
let body=document.querySelector("body");
btn.addEventListener("click", (evnt)=>{
    if(currentMode=="light"){
        body.style.backgroundColor="black";
        currentMode="dark";
    }
    else{
        body.style.backgroundColor="white";
                currentMode="light";

    }
});