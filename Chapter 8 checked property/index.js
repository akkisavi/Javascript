const mySubmit= document.getElementById("mySubmit");
const checkbox= document.getElementById("checkbox");
const visaBtn= document.getElementById("visaBtn");
const masterBtn= document.getElementById("masterBtn");
const paypalBtn= document.getElementById("paypalBtn");
const subResult= document.getElementById("subResult");
const payResult= document.getElementById("payResult");

mySubmit.onclick=function(){
    if(checkbox.checked)
    {
        subResult.textContent="You are subscribed"
    }
    else{
        subResult.textContent="You are not subscribed. You must subscribe first"
    }

    if(visaBtn.checked)
    {
        payResult.textContent="Your payment method is Visa"
    }
    else if(masterBtn.checked)
    {
        payResult.textContent="Your payment method is Mastercard"
    }
    else if(paypalBtn.checked)
    {
        payResult.textContent="Your payment method is Paypal"
    }
    else
    {
        payResult.textContent="Please select a payment method"
    }

}
