// Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword(){
  //check true statements
  //loop for length of password
  //generate final password and return
  var length;

  length = prompt("The length of the password");
  
  if(length < 8){
  
  prompt("Please type in a length between 8 and 128.")
  
  }
  else if(length > 128 ){
  prompt("Please type in a length between 8 and 128.")
  }
  else {
  alert("Valid")
  }
  var uppercase = confirm("Uppercase in password?")
  var lowercase = confirm("Lowercase in password?")
  var number = confirm("Number in password? ")
  var symbol = confirm("Symbol in password")

  var generatedPw = '';
  // for(let i = 0; i < randoLen; i ++){
  //   if(uppercase === true){
  //     var uppercaseLetter = randomUpper();
  //     generatedPw = generatedPw + uppercaseLetter;
  //   }

  // }
  
  // for(let i = 0; i < randoLen; i ++){
  //   if(lowercase === true){
  //     var lowercaseLetter = randomLower();
  //     generatedPw = generatedPw + lowercaseLetter;
  //   }
  // }

  var possibleChar = [];

  for(let i = 0; i < length; i ++){
    possibleChar.push(randomUpper())
    possibleChar.push(randomLower()) 

  }

  console.log(possibleChar)
  for(let i = 0; i < length; i ++){
    var randoLen = Math.floor(Math.random() * length);
    generatedPw = generatedPw + possibleChar[randoLen] 
    
  }
  
  
  

  return generatedPw
}

//Generators code

 
function randomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)

}
console.log(randomUpper())

function randomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
} 

console.log(randomLower())

function randomNumber(){
  return Math.floor(Math.random()*10);
}


function randomSymbol(){
  var symbols = "!@#$%^&*()"
  return symbols= Math.floor(Math.random() * symbols.length)
}


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

