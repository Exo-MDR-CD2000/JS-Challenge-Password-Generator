// Assignment Code
var generateBtn = document.querySelector("#generate"); // this is the button that will generate the password. no need to change this.



//character sets to be used in the password generator
var charSetLower = "abcdefghijklmnopqrstuvwxyz"; // character set for lowercase letters
var charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // character set for uppercase letters
var charSetNumeric = "0123456789"; // character set for numbers
var charSetSpecial = "!@#$%^&*()_+~`|}{[]\:;?><,./-="; // character set for special characters

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

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
