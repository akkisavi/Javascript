const passswordLength = 12;
const includelowerChar =  true;
const includeupperChar = true;
const includenumbers = true;
const includesymbols = true;
const result = document.getElementById('result');

function passGenerator(passswordLength, includelowerChar, includeupperChar, includenumbers, includesymbols){
    
    const lowerCaseChar =  `abcdefghijklmnopqrstuvwxyz`;
    const upperCaseChar = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numbers = `1234567890`;
    const symbols = `!@#$%^&*()`;

    let allowedChars='';
    let password='';

    allowedChars += includelowerChar? lowerCaseChar:"";
    allowedChars += includeupperChar? upperCaseChar:"";
    allowedChars += includenumbers? numbers:"";
    allowedChars += includesymbols? symbols:"";

    if(passswordLength<=0){
        console.log("Password length must be 1")
    }

    for(let i=0; i<passswordLength;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length)
        password += allowedChars[randomIndex]; 
    }
    result.textContent= (password);

}


const password = passGenerator(passswordLength, includelowerChar, includeupperChar, includenumbers, includesymbols)