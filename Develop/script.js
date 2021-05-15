// Assignment code here
var upperCase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

var lowerCase = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var numbers = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

var special = [
  '!', '#', '$', '%', '&', '+', '='
]

var passArray = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // references dom

// Write password to the #password input
function writePassword() {
  console.log()
  var password = generatePassword() 
  var passwordText = document.querySelector("#password"); //grabs password element
  
  passwordText.value = password; //sets the value of generatePassword (change the value)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  var charLength = prompt("How long would you like your password? (choose between 8 and 128 characters)");
  
  var confirm1 = confirm ("Press ok for uppercase letters"); 
  if(confirm1) {
    passArray.push(upperCase[Math.floor(Math.random() * upperCase.length - 1)]);
    console.log(passArray)
  } 
  
  var confirm2 = confirm ("Press ok for lowercase letters")
  if(confirm2) {
    passArray.push(lowerCase[Math.floor(Math.random() * lowerCase.length - 1)]);
    console.log(passArray)
  } 
  
  var confirm3 = confirm ("Press ok for numbers")
  if(confirm3) {
    passArray.push(numbers[Math.floor(Math.random() * numbers.length - 1)]);
    console.log(passArray)
  } 
  
  var confirm4 = confirm ("Press ok for special characters")
  if(confirm4) {
    passArray.push(special[Math.floor(Math.random() * special.length - 1)]);
    console.log(passArray)
  } 
  
  
  //generate character length
  //generate length of password based on the length of characterlength
  //generatePassword()

  
  console.log(passArray)
};