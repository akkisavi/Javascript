const mySubmit= document.getElementById("mySubmit")
const myInput= document.getElementById("myInput")
const result= document.getElementById("result")
let age;

mySubmit.onclick=function(){

    age=myInput.value;
    age=Number(age);

    if(age>=100){
       result.textContent= `You are at century.  You are too Old`;
    }

    else if(age>=18){
        result.textContent= `You are can enter this site`;
    }

    else if(age<0){
        result.textContent= `Your age cannot be below zero`;
    }

    else if(age==0){
        result.textContent= `You cannot enter since you are just born`;
    }

    else{
        result.textContent= `You must be 18+`;
    }
}