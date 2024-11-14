const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum)+minNum);

let attempt=0;
let guess;
let running=true; //To keep the game running


while(running){
    guess = window.prompt   (`Please guess a number between ${minNum} - ${maxNum}`)
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number!")
    }
    else if(guess>maxNum || guess<minNum){
        window.alert("Please enter a number in given range")
    }
    else{
        attempt++;
        if(guess<answer){
            window.alert("Guess is too Low!!Try again!!")
        }
        else if(guess>answer){
            window.alert("Guess is too High!!Try again!!")
        }
        else{ 
            window.alert(`Your guess was correct. The number is ${answer}. It took you ${attempt} attempts`)
            running=false;
        }
    }
}