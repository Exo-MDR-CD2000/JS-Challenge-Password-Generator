// Assignment Code

// lines 4-5 are the variables that are calling upon the html file to work. The querySelector is what is calling upon the html file to work. 
var generateBtn = document.querySelector("#generate"); // this is the button that will generate the password. no need to change this.
var passwordText = document.querySelector("#password");


//character sets to be used in the password generator
var charSetLower = "abcdefghijklmnopqrstuvwxyz"; // character set for lowercase letters
var charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // character set for uppercase letters
var charSetNumeric = "0123456789"; // character set for numbers
var charSetSpecial = "!@#$%^&*()_+~`|}{[]\:;?><,./-="; // character set for special characters



// JS prompts to ask user for password criteria. these should actually be inside the generatePassword function and not global vars.
// var includeLowercase = confirm("Do you want to include lowercase letters?"); // these vars use the confirm function to ask the user if they want to include the character set in their password. we are asking the user a yes or no question.
// var includeUppercase = confirm("Do you want to include uppercase letters?");
// var includeNumeric = confirm("Do you want to include numbers?");
// var includeSpecial = confirm("Do you want to include special characters?");



// below will be the function that generates the password. I then need to call upon this function in the writePassword function so that it will display the password in the text box.

function generatePassword() {
  var passwordLength = prompt("How many characters would you like to use for your password? (Use a number between 8 and 128)"); // this is the prompt that asks the user how many characters they want to use for their password. The user will input a number between 8 and 128. The number they input will be stored in the passwordLength variable.
    if passwordLength < 8 || passwordLength > 128 { // this says that if the passwordLength is less than 8 or greater than 128, then the user will get an alert that says "Password length must be between 8 and 128 characters" and then the function will stop running.
    alert("Password length must be between 8 and 128 characters");
    return; // this return is needed to stop the function from running if the user inputs a number less than 8 or greater than 128. That invalid input will not be used to generate the password.
    } // I now need to ask the confirm windows to ask the user for the characters to use
    var includeLowercase = confirm("Do you want to include lowercase letters?"); // these vars use the confirm function to ask the user if they want to include the character set in their password. we are asking the user a yes or no question.
    var includeUppercase = confirm("Do you want to include uppercase letters?");
    var includeNumeric = confirm("Do you want to include numbers?");
    var includeSpecial = confirm("Do you want to include special characters?");
    
    // now lets put a check in to make sure the user selects at least one character set. maybe check to see if all the variables are false. if they are all false, then alert the user that they need to select at least one character set.

    if (includeLowercase )
   

  }






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  

  passwordText.value = password;

}

//the function writePassword calls upon the generatePassword function to generate the password

// //the generate password function is what needs to be completely filled out for the password generator to work.
// //example can be: var generatePassword (){
//   var myGeneratedPassword = "";

//   return myGeneratedPassword;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//the addEventListener is what makes the button work. It is calling upon the writePassword function to generate the password.

// lookup javascript prompts and alerts for the criteria




//the #generate is the id of the button in the html file. The querySelector is what is calling upon the button to work.






















//below is the original code just for clarity sake

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
