// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declares main generatePassword function
function generatePassword () {
//Declares all possible password characters through arrays
  var lowercaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var numericChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialChar = [' ', '&', '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.', '>', '<'];
  //Created an array that will house the user's chosen character type arrays
  var chosenChars = [];
  //The user is asked to select an appropriate password length
  passwordLength = prompt("Pick a number between 8 and 128. This determines the length of your password.");
    if (passwordLength >= 8 && passwordLength <= 128) {
      window.alert("You will now be presented a series of prompts regarding your preferred password criteria starting with lowercase letters.\n\nPlease note that if you do not add at least one criterion, the password input area will display an error.");
      askLowercase(); 
    } else {
      //The user starts the password generating process over if unfavorable password length is picked
      window.alert("You must enter a number between 8 and 128.");
      generatePassword();
    }

    //Declares sub-functions for all character types

  function askLowercase () {
    //The user is asked to say yes or no by clicking either OK or Cancel respectively
    var answerLowercase = confirm('Do you wish to include lowercase letters in your password? Click "OK" to add or click "Cancel" to omit.');
    if (answerLowercase) {
      //Concatenates chosenChars array with appropriate character type array if user clicks OK
      chosenChars = chosenChars.concat(lowercaseChar);
      //Also introduces next criteria option   
      window.alert("Next, uppercase letters.");
      //And executes function regarding that next option
      askUppercase();
    } else {
      //Skips concatenation if user clicks Cancel
      window.alert("Next, uppercase letters.");
      askUppercase();
    }
  } 

  function askUppercase () {
    var answerUppercase = confirm('Do you wish to include uppercase letters in your password? Click "OK" to add or click "Cancel" to omit.');
    if (answerUppercase) {
        chosenChars = chosenChars.concat(uppercaseChar);
        window.alert("Next, numbers.");
        askNumbers();
      } else {
        window.alert("Next, numbers.");
        askNumbers();
      }
    }

    function askNumbers () {
      var answerNumbers = confirm('Do you wish to include numbers in your password? Click "OK" to add or click "Cancel" to omit.');
      if (answerNumbers) {
        chosenChars = chosenChars.concat(numericChar);
        window.alert("Last, special characters.");
        askSpecial();
      } else {
        window.alert("Last, special characters.");
        askSpecial();
      }
    }

    function askSpecial () {
      var answerSpecial = confirm('Do you wish to include special characters in your password? Click "OK" to add or click "Cancel" to omit.');
      if (answerSpecial) {
        chosenChars = chosenChars.concat(specialChar);
        //This is the last criteria option so the user is informed their password is ready after making their choice
        window.alert("Your new password has been generated.");
      } else {
        window.alert("Your new password has been generated.");
      }
    }

    //Declares final password outcome that will show up in the #password input
    var passwordFinal = "";
    for (var i = 0; i < passwordLength; i++) {
      //Created a variable that selects random characters out of every type the user chose  
      charMix = [Math.floor(Math.random() * chosenChars.length)];
      passwordFinal = passwordFinal + chosenChars[charMix];
    }
   return passwordFinal;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);