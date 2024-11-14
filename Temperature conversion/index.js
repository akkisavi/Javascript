const myTemp = document.getElementById("myTemp");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
document.getElementById("myButton").addEventListener('click',function(event){
    
    event.preventDefault()
    
    if(toCelcius.checked){
        temp= Number(myTemp.value);
        temp = (temp -32) * (5/9);
        result.textContent= temp +"°C";
    }
    else if(toFahrenheit.checked){
        temp= Number(myTemp.value);
        temp = (temp*9/5)+32;
        result.textContent= temp +"°F";
    }
    else{
        result.textContent=`Please select an option above`;
    }
})
let temp;





// function convert(){

//     if(toCelcius.checked){
//         temp= Number(myTemp.value);
//         temp = (temp -32) * (5/9);
//         result.textContent= temp +"°C";
//     }
//     else if(toFahrenheit.checked){
//         temp= Number(myTemp.value);
//         temp = (temp*9/5)+32;
//         result.textContent= temp +"°F";
//     }
//     else{
//         result.textContent=`Please select an option above`;
//     }
// }