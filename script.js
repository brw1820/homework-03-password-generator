// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = randomize();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(lowercase);
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialchar = [
  "!",
  "#",
  "$",
  ",",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var password = [];
var passLength;

// Create prompt "Please choose between 8 and 128 characters for your password"
function setPasswordLength() {
  var passLength = prompt(
    "Please choose between 8 and 128 characters for your password"
  );
  if (isNaN(passLength)) {
    alert("Needs to be a number between 8 and 128 characters");
    setPasswordLength();
  } else if (passLength < 8 || passLength > 128) {
    alert("Please choose between 8 and 128 characters for your password");
    setPasswordLength();
  }
  return passLength;
}

// setPasswordLength();

var randomize= function() {
var pLength = setPasswordLength();
// Create prompt "would you like lowercase letters in your password?"
var lowercases = confirm("Would you like lowercase letters in your password?");

// Create prompt "would you like uppercase letters in your password?"
var uppercases = confirm("Would you like uppercase letters in your password?");
// Create prompt "would you like special characters in your password"
var specialchars = confirm(
  "Would you like special characters in your password?"
);
// Create prompt "would you like numeric characters in your password?"
var numerics = confirm("Would you like numeric characters in your password?");
// Validate that at least one type of character has been selected

var passResult = [];
// var charactersConfirmed = [];
if (specialchars) {
  passResult = passResult.concat(specialchar);
}

if (numerics) {
  passResult = passResult.concat(numeric);
}
if (lowercases) {
  passResult = passResult.concat(lowercase);
}

if (uppercases) {
  passResult = passResult.concat(uppercase);
}
console.log(passResult);
var finalPass="";
   for (let i = 0; i < pLength; i++)  { 
     finalPass += passResult[Math.floor(Math.random() * passResult.length)];
 console.log(passResult[Math.floor(Math.random() * passResult.length)])
  }
  //  console.log(finalPass.join(""));
   return finalPass;
}

// console.log(randomize());
// randomize();
// Math.random().toString(36).replace('0.', '')

//if (lowercases)  {
//  var finalPass = password.concat(lowercase);
//  console.log(finalPass)
//}
//if (uppercases)  {
//  var finalPass = password.concat(finalPass,uppercase);
//  console.log(finalPass)
//}
//if (specialchars) {
//  var finalPass = password.concat(finalPass, specialchar)
//  console.log(finalPass)
//}
//if (numerics) {
//  var finalPass = password.concat(finalPass,numeric);
//} console.log(finalPass)

// When prompts are answered, create password on selected criteria

// Display generated password in an alert or written on the page

// // random number generation testing
//function randomNumber(max){
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//return Math.floor(Math.random() * Math.floor(max));
//}
//console.log(randomNumber());
