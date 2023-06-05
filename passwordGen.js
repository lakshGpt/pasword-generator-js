const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_";

// selectors
const passBox = document.querySelector("#pass-box");
const totalChar = document.querySelector("#total-char");
const upperInput = document.querySelector("#upper-case");
const lowerInput = document.querySelector("#lower-case");
const numberInput = document.querySelector("#numbers");
const symbolInput = document.querySelector("#symbols");
const button = document.querySelector("#btn");

// getRandomData(): will give a random upercase, lowercase, number or symbol
const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

// generatePassword() : will generate password using diff char from all dataset
const generatePassword = (password = "") => {
  if (!totalChar.value) {
    // if input length is not defined
    passBox.textContent = "Please give some length !";
    return;
  }
  // condition if none of box have checked
  if (
    !upperInput.checked &&
    !lowerInput.checked &&
    !numberInput.checked &&
    !symbolInput.checked
  ) {
    passBox.textContent = "Please put check on atleast one input !";
    return;
  }
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  /* now we have to implement a logic that passowd length is same as
     that of input char for password*/
  if (password.length < totalChar.value) {
    return generatePassword(password); // recursive calling
  }
  
  // no need for truncate() becoz we always need to find the substring
  password = password.substring(0, totalChar.value);    
  console.log(password, password.length);
  passBox.textContent = password;
};

button.addEventListener("click", (e) => {
  generatePassword();
});

// const truncateString = (str, num) => {
//   if (str.length > num) {
//     let subStr = str.substring(0, num);
//     return subStr;
//   } else {
//     return str;
//   }
// };
