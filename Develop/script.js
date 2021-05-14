// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // references dom

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //calls generatePassword (not defined)
  var passwordText = document.querySelector("#password"); //grabs password element

  passwordText.value = password; //sets the value of generatePassword (change the value)
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var question1 = prompt('Type "yes" if you would like an uppercase letter');
  if (question1 === 'yes') {
    return ("CAPITAL LETTERS");
  } else {
    return ("blank");
  }



}