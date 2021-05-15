// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // references dom

// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password"); //grabs password element
  
  passwordText.value = password; //sets the value of generatePassword (change the value)
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  // ARRAY FOR CRITERIA
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

  //ARRAYS FOR STORAGE
  var passArray = [];
  var promptResults = [];

  // PROMPTS FOR USER
  var charLength = prompt("How long would you like your password? (choose between 8 and 128 characters)");
  
  var confirm1 = confirm ("Press ok for uppercase letters"); 

  var confirm2 = confirm ("Press ok for lowercase letters")
  
  var confirm3 = confirm ("Press ok for numbers")
  
  var confirm4 = confirm ("Press ok for special characters")

  // IF CONDITIONS
  if (confirm1) {
    promptResults = promptResults.concat(upperCase);
  }

  if (confirm2) {
    promptResults = promptResults.concat(lowerCase);
  }

  if (confirm3) {
    promptResults = promptResults.concat(numbers);
  }

  if (confirm4) {
    promptResults = promptResults.concat(special);
  }

  console.log(promptResults)

  for (var i = 0; i < charLength; i++) {
      
    passArray.push (promptResults[Math.floor(Math.random() * promptResults.length)]); 
  }

    return passArray.join("") ;

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}






  
};