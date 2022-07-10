const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lower = "qwertyuiopasdfghjklzxcvbnm";
const num = "1234567890";
const specials = "!@#$%^&*()";

const writePassword = function() {
  // 1. gather user input - true/false
  const passLength = parseInt(prompt("How long should the password be?"));

  const wantUppers = confirm("Do you want upper case letters?");
  const wantLowers = confirm("Do you want lower case letters?");
  const wantNumbers = confirm("Do you want numbers?");
  const wantSpecials = confirm("Do you want specials?");

  // 2. create possbilities
  let possibilities = "";

  if (wantUppers) {
    possibilities += upper
  }

  if (wantLowers) {
    possibilities += lower
  }

  if (wantNumbers) {
    possibilities += num
  }

  if (wantSpecials) {
    possibilities += specials
  }

  // 3. pick randomly from possbilities n amount of time
  console.log("possibilities: ", possibilities); //"QWERTYUIOPASDFGHJKLZXCVBNM1234567890"

  let password = "";
  for (let i = 0; i < passLength; i++) {
    const rand = Math.floor(Math.random() * possibilities.length);
    const randChar = possibilities[rand];
    password += randChar;
  }

  // 4. write the password
  document.querySelector("#password").textContent = password;
};

document.querySelector("#generate").addEventListener("click", writePassword);