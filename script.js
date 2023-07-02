// Assignment Code

// lines 4-5 are the variables that are calling upon the html file to work. The querySelector is what is calling upon the html file to work. 
var generateBtn = document.querySelector("#generate"); // this is the button that will generate the password. no need to change this.
// var passwordText = document.querySelector("#password");


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
    if (passwordLength < 8 || passwordLength > 128) { // this says that if the passwordLength is less than 8 or greater than 128, then the user will get an alert that says "Password length must be between 8 and 128 characters" and then the function will stop running.
    alert("Password length must be between 8 and 128 characters");
    return; // this return is needed to stop the function from running if the user inputs a number less than 8 or greater than 128. That invalid input will not be used to generate the password.
    } // I now need to ask the confirm windows to ask the user for the characters to use
    var includeLowercase = confirm("Do you want to include lowercase letters?"); // these vars use the confirm function to ask the user if they want to include the character set in their password. we are asking the user a yes or no question.
    var includeUppercase = confirm("Do you want to include uppercase letters?");
    var includeNumeric = confirm("Do you want to include numbers?");
    var includeSpecial = confirm("Do you want to include special characters?");
    
    // now lets put a check in to make sure the user selects at least one character set. maybe check to see if all the variables are false. if they are all false, then alert the user that they need to select at least one character set.

    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) { // this seems a bit wrong. they way it is written now, if a user does not select any of the character sets, then the function will still carry on and generate a password.
      // I need to look at the logic again to make sure that the function will not run if the user does not select at least one character set.
      alert("You must select at least one character set to use in your password"); // the alert is a shorthand for window.alert. the window is implied.
      return; // put the return here to stop the function from running if the user does not select at least one character set.
    }

// now make a placeholder variable for characters to use in the password. this will be an empty string that will be filled with the characters the user selects to use in their password.

var charPool = ""; // this is the placeholder variable that will be filled with the characters the user selects to use in their password.

// add logic to add the character sets to the charSet variable if the user selects them. this will be a series of if statements that will check to see if the user selected the character set. if they did, then add that character set to the charSet variable.

if (includeLowercase) {
  charPool += charSetLower; // this is saying that if the user selects the lowercase character set, then add that character set to the charPool variable. If the user did not select the lowercase character set, then do not add it to the charPool variable.

} if (includeUppercase) {
  charPool += charSetUpper;

} if (includeNumeric) {
  charPool += charSetNumeric;

} if (includeSpecial) {
  charPool = charPool + charSetSpecial; // this is just to show the long way to write it. the shorthand is charPool += charSetSpecial; += is bascially saying x = x + y. 

  }

  // the charPool is now filled with characters that the user selects. now I need to generate the password using the characters in the charPool variable.
  // I need to create a for loop that will loop through the charPool variable and randomly select characters from the charPool variable to generate the password.

  var password = ""; // this is the placeholder variable that will be filled with the randomly selected characters from the charPool variable after JS loops through the charPool variable.

  for (var i = 0; i < passwordLength; i++) { // the i < passwordLength is saying that the for loop will run as many times as the passwordLength variable. The passwordLength variable is the number of characters the user wants to use in their password. The for loop will run as many times as the user wants characters in their password.
    var randomIndex = Math.floor(Math.random() * charPool.length); // this is where the random characters are selected from the charPool variable. The Math.random() function will select a random number between 0 and 1. The Math.floor() function will round the random number down to the nearest whole number. The Math.random() function will select a random number between 0 and the length of the charPool variable.
    var randomChar = charPool[randomIndex]; // this is where the random characters are selected from the charPool var. //  By using brackets with randomIndex inside, we are accessing the character at the index specified by randomIndex in the charPool array.
    password += randomChar;
    //password = password + randomChar; // this is the long version more of the right way to  write this like in class. The shorthand of this is password += randomChar on ine 73.
    // randomChar =+ password; // this is where the random characters are added to the password variable. //THIS IS SAYING randomChar = randomChar + password!!!! It assigns 0 to randomChar and then adds password to randomChar. This is not what I want. I want to add randomChar to password. The operator is also typed wrong as well. It should be += not =+.
  }

  // console.log (password) // just testing to see if the password is being generated.


  return password; // now the password is being returned to the writePassword function
}



//TODO 7-1-2023: I just realized that I am not returning the generated password at all. The password is being made, but it is not being sent anywhere.


//TODO: It seems as if the password is not being geneerated? put some console logs to check the issue. I am literraly almost done except that there is something not working with the code. The password is not being displayed in the text box. I need to check the console logs to see what is going on.


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
generateBtn.addEventListener("click", writePassword); // needed to make the "generate button" work. The generateBtn is the id of the button in the html file. The addEventListener is what makes the button work. It is calling upon the writePassword function to generate the password.


// lookup javascript prompts and alerts for the criteria




//the #generate is the id of the button in the html file. The querySelector is what is calling upon the button to work.


