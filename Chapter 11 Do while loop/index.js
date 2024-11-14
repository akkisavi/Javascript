let Loggedin=false;
let username;
let password;

while(!Loggedin){
    username = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");

    if(username==="myUsername" && password==="myPassword")
    {
        Loggedin=true;
        console.log("You have logged in");
    }
    else{
        console.log("Invalid credentials. Please try again!!")
    }
}
