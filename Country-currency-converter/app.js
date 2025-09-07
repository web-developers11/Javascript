let BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns=document.querySelectorAll("select");
const btn=document.querySelector("button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");
//  for( code in countryList){
//     console.log(code+":"+countryList[code]);
//     console.log();
// }

//here dynamically add the options from api
let i=0;
for(let select of dropdowns){
    for(let currCode in countryList){//getting countryList from code.js
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        console.log(select.value);
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";//make usd and inr by default selcted
        }
        else if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(event)=>{//wheneverr our select change the change listener will take place for flag
        updateFlag(event.target);//target is basically whenever we make change so where the changes will come that we will pass to our flag
    });
}
const updateFlag = ((element)=>{//element is the target element where the changes will take place like select
    console.log(element);//select
    let currCode=element.value;
    console.log(currCode);
    let countryCode=countryList[currCode];//IR
        console.log(countryCode);
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");//we have to select the imag tag og element(current select tag) to update the img tag as per the currency of element(select tag)
    img.src=newSrc;
    console.log(img.src);

});


btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();//to prevent the automatic work which browser like reloading  
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    console.log(amtVal);//will get the value whatever we enter in input box
    if(amtVal=="" || amtVal < 1){
        amtVal=1;
        amtVal.value="1";
    }

    //create URL from BASE_URL
    console.log(fromCurr.value, toCurr.value)
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;//here we wll be using fetch api
    console.log(URL);
     let response=await fetch(URL);
      console.log(response);
     let data = await response.json();
      console.log(data);
     let rate =data[toCurr.value.toLowerCase()];
     console.log(rate);
     let finalAmount =amtVal * rate;
     msg.innerText= `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});
