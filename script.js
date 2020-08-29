// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialChar = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
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
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var myArr = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var count = prompt(
    "How long do you want your password? Must be at least 8 charcters in length but not more than 128 charcters."
  );
  var lowerCase = confirm("Do you want LowerCase characters? Click 'Ok' for yes or 'cancel' for no. ");
  var upperCase = confirm("Do you want UpperCase characters? Click 'Ok' for yes or 'cancel' for no.");
  var special = confirm("Do you want special characters? Click 'Ok' for yes or 'cancel' for no.");
  var number = confirm("Do you want to add numbers? Click 'Ok' for yes or 'cancel' for no.");
  let result = "";
  let myArr = [];

  if (lowerCase === true) {
    myArr.push(lower);
  }

  if (upperCase === true) {
    myArr.push(upper);
  }

  if (special === true) {
    myArr.push(specialChar);
  }

  if (number === true) {
    myArr.push(num);
  }

  let newArr = myArr.flat();

  for (let i = 0; i <= count - 1; i++) {
    var arrIdx = Math.floor(Math.random() * newArr.length);
    var arrRand = newArr[arrIdx];
    result += arrRand;
  }

 
  if (newArr.length === 0) {
    alert("You have not chosen any characters to include");
    return "";
  }

  if (count < 8) {
    alert("Your length must have at least 8 characters");
    return "";
  } else if (count > 128) {
    alert("Your length must not excede 128 characters");
    return "";
  } else {
    return result;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
