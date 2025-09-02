// var let const============================================
/*Name="jhalak"
  console.log("Name is :" +Name)
 let a=89;
 {
     let a=5;
    a=10;
     console.log(a);//10
     a=34;
 }
 console.log(a);//89
 */
//===========================================================

//Objects===================================================
/*const student={
    Name: "jhalak",
    age: 28,
    cgpa: 8.9
};
console.log(student);
console.log("name is " +student.Name);
student.Name="Avni";
console.log("updated name is " +student.Name);
*/
//===========================================================

//Operatory and conditional statement============================================
/*
let a=6;
let b=9;
console.log("a+b= " +(a+b));
console.log("a+b is",(a+b));
console.log("a++ is 1st print thn increase " +(a++));//6
console.log("now value of a is" +a);//7
console.log("++a is 1st increase thn print " +(++a));//8
console.log("now value of a is" +a);//8
console.log("a++ is 1st print thn increase " +(a++));//8
console.log("++a is 1st increase thn print " +(++a));//10
console.log("now value of a is" +a);//10
*/
//===========================================================


//Comparison Operator============================================
/*
let a=9;
let b="9";
console.log("a==b is" +(a==b));//true--->only check value/data
console.log("a===b is" ,(a===b));//false----> check value/data both
*/
//===========================================================


//conditional statement============================================
//prompt is like alert with input field
/*
let number=prompt("enter any number");
if(number%5===0){
console.log(number ,"is a multiple of 5");
}

else{
    console.log(number ,"is a not a multiple of 5");
}
*/
//===========================================================


//for loop============================================

//print sum of n number
/*
let numbers=prompt("Enter any number");
let sum=0
for(let i=1;i<=numbers;i++){
    sum=sum+i;
}
    console.log("the sum of number " +numbers+ " is " +sum);
*/

//Simple Game Ask user to keep guessing the game number untill the user enters correct number
/*
let gameNum=88;
let userNum=prompt("Please guess the game number");
while(gameNum != userNum){
     userNum=prompt("Oops your guess was wrong. Please keep guess!");
}
console.log("congratulation you have guessed correct number");
*/

//String============================================

//Generate username which start with "@" thn "username" and "length" of username based on the inpout from user.
/*
let userName=prompt("enter Username");
let nameLength=userName.length;//userName="@"+userName+userName.length;
let fullUserName="@"+userName+nameLength;
console.log(fullUserName);
*/

//Array============================================

/*
let marks=[88,98,76,78,95];
console.log(marks);
console.log(marks[3]);//78
marks[3]=88;
console.log(marks[3]);//88 because array is mutable(changable) but this cant be done in String as its immutable(unchangable)
*/

//for-loop in array
/*
let cities=["indore","pune","mumbai","delhi","Banglore"];
for(let i=0 ; i<cities.length ; i++){
    console.log(cities[i]);
}
*/

//for-of loop in array
/*
let cities=["indore","pune","mumbai","delhi","Banglore"];
for(let city of cities){
    console.log(city); //indore pune mumbai delhi Banglore
}
*/
//for-in loop in array(wont prefer in array)
/*
let cities=["indore","pune","mumbai","delhi","Bangloreee"];
for(let city in cities){
    console.log(city);// 0 1 2 3 4
}
*/

//for-loop given array marks of student [85.97,44,37,76,60] find the average amrks of entire class
/*
let studentMarks=[85,97,44,37,76,60];
let average=0;
let avrMarks=0;
//avrMarks=average / studentMarks.length; //0
for(let i=0;i<studentMarks.length;i++){
    average=average+studentMarks[i];
}
avrMarks=average / studentMarks.length;
console.log(average);//399
console.log(studentMarks.length);//6
console.log(avrMarks);//66.5
*/

//for-of given array marks of student [85.97,44,37,76,60] find the average amrks of entire class
/*
let studentMarks=[85,97,44,37,76,60];
let sum=0;
let average=0;
for(let value of studentMarks){
    sum=sum + value;
}
average=sum/studentMarks.length;
console.log(`Average marks of student is ${average}`);
*/

//for-loop given array prices of items [250.645,300,900,50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offers.
/*
let items=[250,645,300,900,50];
let offerItem=[];
for(let i=0;i<items.length;i++){
    offerItem[i]=items[i]-(0.1*(items[i]));
}
console.log(offerItem);
*/

//for-of given array prices of items [250.645,300,900,50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offers.
/*
let items=[250,645,300,900,50];
let offerItem=[];
for(let item of items){
offerItem[items.indexOf(item)]=item-(0.1*item);
}
console.log(offerItem);
*/

//Methods============================================

//Create array to store companies="Bloomberg","Microsoft","Uber","Google","IBM","Netflix".(1. remove 1st company from array  2. Remove Uber and Add Ola in its place  3. Add Amazon at the end )
/*
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// remove the 1st company from array
companies.shift(0);
console.log(companies);

//remove uber and add ola i its place
companies.splice(1,1,"Ola");
console.log(companies);

//add amazon at the end
companies.push("Amazon");
console.log(companies);
*/

//Functions============================================

//Create a fuction using the "function" keyword that takes a Sting as an argument and returns the number of vowels in th string.
/*
let vowelCount=0;
function countOfVowel(myString){
    for(let i=0;i<=myString.length;i++){
        if(myString[i] === "a" || myString[i] === "A" || myString[i] ===  "e" || myString[i] ===  "E" || myString[i] === "i" ||myString[i] ===  "I" || myString[i] === "o" || myString[i] === "O" || myString[i] ===  "u" || myString[i] === "U"){
            vowelCount=vowelCount+1;
        }
    }
   
    return vowelCount;
    }
let vowel=countOfVowel("hello");
console.log(vowelCount);
*/

//function using for-of
/*
let vwlCount=0;
function noOfVowel(anyString){
    for(char of anyString){
        if(char === "a" || char === "A" || char ===  "e" || char ===  "E" || char === "i" || char ===  "I" || char === "o" || char === "O" || char ===  "u" || char === "U")
            {
                vwlCount=vwlCount+1;
            }     
    }
    return vwlCount;
}
let count=noOfVowel("pineapple");
console.log(vwlCount);
*/

//function using arrow ==> function
/*
let vwlCount=0;
const countVowel=(anyWord)=>{
    for(char of anyWord){
        if(char === "a" || char === "A" || char ===  "e" || char ===  "E" || char === "i" || char ===  "I" || char === "o" || char === "O" || char ===  "u" || char === "U")
            {
                vwlCount=vwlCount+1;
            }     
    }
    return vwlCount;
    }
    let count=countVowel("aeiouAEIOU");
    console.log(vwlCount);
    */

    //function using forEach loop in array=====================

    //For a given array [1,2,3,4] of numbers,print square of each value using the forEach loop.
    /*
    let number=[1,2,3,4];
    number.forEach(element => {
        console.log(element*element);
    });
    */ 
   //OR
   /*
   let number=[16,27,36,94];
    let calcSquare=(number) => {
        console.log(number*number);
    };
    number.forEach(calcSquare);
    */

    //Reduce method===================================================

    //we are given array of marks of student.Filter out marks of student that score 90+.
    /*
    let totalMarks=[78,68,45,76,98,57,96,76,83,91,65,89,97];
    let nintyPlus=totalMarks.filter((val)=>{
        return val>90;
    });
    console.log(nintyPlus);
    */

    //Take a number n as input from user. Create an array of number from 1 to n.
    
    // 1. Use reduce method to calculate sum of all number in array.
    /*
    let number=prompt("enter the number to get sum of number");
    let list=[];
    for(let i=0;i<number;i++){
        list[i]=i+1;
    }
    console.log(list);
    let sum=list.reduce((cur,res)=>{
        return cur+res;
    });
    console.log(sum);
    */

    // 2. Use reduce method to calculate product of all number in array.
    /*
    let number=prompt("enter the number to get sum of number");
    let list=[];
    for(let i=0;i<number;i++){
        list[i]=i+1;
    }
    console.log(list);
    let product=list.reduce((cur,res)=>{
        return cur*res;
    });
    console.log(product);
    */

    // DOM Manipulation============================================
   
    //Create H2 heading elements with text="Hello Javascript" append "from Apna college student" to this text using JS.
    /*
    let h2=document.querySelector("h2");
    console.dir(h2.innerText);
    h2.innerText=h2.innerText + " from AC student";
    console.dir(h2.innerText);
    */

    //Create 3 div with common class name "box". Access them and add some unique text to each of them
    /*
    let Box=document.querySelectorAll(".box");
    console.dir(Box);
    console.log(Box);
    // Box[0].innerText="1st updated";
    // Box[1].innerText="2nd updated";
    // Box[2].innerText="3rd updated";
    let i=1;
    for(let div of Box){
        div.innerText = `new value ${i}`;
        i++;
        console.dir(div.innerText);
    }
    */

    //Create a new btn element.Give it a text click me,background-color=red and text-color=white. Insert the button as the first element inside the body tag.
    /*
    let btn=document.createElement("button");
    btn.innerText="click me";
    btn.style.backgroundColor="red";
    btn.style.color="white";
    document.querySelector("body").prepend(btn);
    */

    //Create paragraph tag in html,give it class and some styling. Now create new class in css and try to append this class to the <p> element. Did you notice how u overwrite the class name when you add a new one? Solve this problem using classList
    /*
    let p=document.querySelector("p");
    p.classList.add("newPara");
    */


    // Event Handling============================================
    /*
    let btn=document.querySelector("#btn1");
    btn.onclick=()=>{
        console.log("btn was clicked");
        let a=89;
        a++;
        console.log(a);
    };
    */

    //Create a toggle button that changes the screen to dark-mode when clicked and light-mode when clicked again
    /*
    let btn=document.querySelector(".mode");
    let currentMode="light";
    let body=document.querySelector("body");
    btn.addEventListener("click", ()=>{
        if(currentMode=="light"){
            body.classList.add("darkMode");
            currentMode="dark";
            body.classList.remove("lightMode");
        }
        else{
             body.classList.add("lightMode");
            currentMode="light";
            body.classList.remove("darkMode");
        }
    });
    */

     // Class and Object============================================

     //You are creating a website for your college.Cretae a class User with 2 properties, name and email. It also has methos call viewData() that allow user to view website data.
     /* 
     class User{
        constructor(Uname,Uemail){
            this.Uname=Uname;
            this.Uemail=Uemail;
        }
        viewData(){
            console.log(`view website data}`);
        }
      }
      let user1=new User("hari","hari@gmail.com");
      let user2=new User("ram","ram@gmail.com");
      let user3=new User("shree","shree@gmail.com");
      user1.viewData();
      user2.viewData();
      user3.viewData();
      */

      //Create a new class called Admin which inherits from User.Add a new method called w=editData that allows it to edit website data.
      /*
      class User{
        constructor(Uname,Uemail){
            this.Uname=Uname;
            this.Uemail=Uemail;
        }
        viewData(){
            console.log(`view website data`);
        }
      }
      class Admin extends User{
        constructor(Uname,Uemail){
            super(Uname,Uemail);
            this.Uname=Uemail;
            this.Uname=Uemail;
        }
        editData(){
            console.log("edit data");
        }
      }
      
      let obj=new Admin("admin","admin@gmail.com");
      obj.viewData();
      obj.editData();
*/

// async-await  Promise-chain  callback-hell=============================
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}
// callback-hell===============================
/*
getData(1,()=>{
    console.log("fetching data2");
    getData(2,()=>{
        console.log("fetching data3");
        getData(3,()=>{
            console.log("fetching data4");
                getData(4,()=>{
                console.log("fetching data5");
            });
        });
    });
});
*/
// Promise-chain======================================
/*
getData(1)
    .then((res)=>{
        return getData(2);
    })
        .then((res)=>{
            return getData(3);
        })
            .then((res)=>{
                return getData(4);
            })
            .then((res)=>{
                return getData(5);
            });
*/
// async-await==================================
/* write getAllData() in console we have to call it
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}
*/
//using IFFI we dont need to write getAllData() in console
/*
(async function() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
})();
//OR
(async () => {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
})();
*/

//Fetch data from API https://catfact.ninja/fact
/*
let URL="https://catfact.ninja/facts";
let BREED="https://catfact.ninja/breeds";

let facts=document.querySelector("#cat-facts");
let breeds=document.querySelector("#cat-breeds");
let apidata=document.querySelector("#api-data");


let getCatsFacts= facts.addEventListener("click",async()=>{
    console.log("getting cat facts")
    let response= await fetch(URL);//JSON format
    console.log("data in JSON format=",response);//response is promise
    let catfacts=await response.json();
    apidata.innerText=catfacts.data[1].fact;
    console.log("catfacts in form of JSON Object",catfacts);//json object form or readable form
    console.log("catfacts in form of JSON Object",catfacts.data[0]);//catfacts return the reponse in "object" and "data" is the property of that "object" which is in form of array 
});

let getCatsBreeds= breeds.addEventListener("click",async()=>{
    console.log("getting cat breeds")
    let response= await fetch(BREED);//JSON format
    console.log("data in JSON format=",response);//response is promise
    let catbreeds=await response.json();
    apidata.innerText=catbreeds.data[1].breed;
    console.log("catbreeds in form of JSON Object",catbreeds);//json object form or readable form
    console.log("catbreeds in form of JSON Object",catbreeds.data[0]);//catfacts return the reponse in "object" and "data" is the property of that "object" which is in form of array 
    console.log("catbreeds in form of JSON Object",catbreeds.data[1].breed);
});
*/
//Using Promise chaining
/*
let getCatsFacts=facts.addEventListener("click",()=>{
    fetch(URL)
        .then((respone) =>{
            return respone.json();
        })
        .then((data)=>{
            console.log("catfacts in form of JSON Object",data.data[1].fact);//json object form or readable form
            apidata.innerText=data.data[1].fact;
        })
});
*/

