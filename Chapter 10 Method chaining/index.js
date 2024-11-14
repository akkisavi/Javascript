let username= window.prompt("Enter your Username: ");

// ----------No Method Chaining--------------

// username = username.trim();
// let firstchar = username.charAt(0);
// firstchar = firstchar.toUpperCase();

// let extras = username.slice(1);
// extras = extras.toLowerCase();
// username = firstchar + extras;

// console.log(username);

//-----------Method Chaining-----------------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);