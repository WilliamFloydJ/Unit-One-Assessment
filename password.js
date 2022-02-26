const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("Hello and welcome to the Password Validator Tool")

reader.question("Please enter a password to be validated." , function(input){
    var UpperC = false;
    var SpecialC = true;
    var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var specialChar = ["!","@","#","$","%","^","&","*","(", ")"]
    for(let x of alphabet){
        if(input.includes(x)){
            UpperC = true
        }
    }
    for(let x of specialChar){
        if(input.includes(x)){
            SpecialC = false
        }
    }
        if(input.length >= 10 && SpecialC && UpperC){
            console.log("It Worked! Your password has now been set to "+ input)
           
        
        }
        else{
            console.log("Sorry, your password did not meet our requirements. Your password must be at least 10 characters long one of which must be uppercase. It also can not contain spaces or special characters '&,@,$'.")
        }

        reader.close()

});