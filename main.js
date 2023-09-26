let characterSlider = document.getElementById("myRange");
let passwordLength = document.getElementById("password-length");

let checkedOne = document.getElementById("uppercase");
let checkedTwo = document.getElementById("lowercase");
let checkedThree = document.getElementById("numbers");
let checkedFour = document.getElementById("symbols");
let colorStrength = document.getElementById("p-strength");

let boxOne = document.getElementById("measure-one");
let boxTwo = document.getElementById("measure-two");
let boxThree = document.getElementById("measure-three");
let boxFour = document.getElementById("measure-four");

let generatedPassword = document.getElementById("generated-password");

let toCopy = document.getElementById("to-copy");

let uppercase = false;
let lowercase = false;
let numbers = false;
let symbols = false;

let contador = 0;
let strength = [];




let generate = document.getElementById("create-password");


characterSlider.addEventListener("input", showLength);
generate.addEventListener("click", createPassword);
checkedOne.addEventListener("click", isChecked);
checkedTwo.addEventListener("click", isCheckedTwo);
checkedThree.addEventListener("click", isCheckedThree);
checkedFour.addEventListener("click", isCheckedFour);

function isChecked(){
    if(checkedOne.checked){
        strength.uppercase = true;
        contador+=1;
    }else{
        strength.uppercase = false;
        contador-=1
    }
    changeStrength();
}

function isCheckedTwo(){
    if(checkedTwo.checked){
        strength.lowercase = true;
        contador+=1;
    }else{
        strength.lowercase = false;
        contador-=1;
    }
    changeStrength();
}
 
function isCheckedThree(){
    if(checkedThree.checked){
        strength.numbers = true;
        contador+=1;
    }else{
        strength.numbers = false;
        contador-=1;
    }
    changeStrength();
}
    
function isCheckedFour(){
   if(checkedFour.checked){
        strength.symbols = true;
        contador+=1;
    }else{
        strength.symbols = false;
        contador-=1;
    }
    changeStrength();
}

function changeStrength(){
    if(contador === 0){
    boxOne.style.backgroundColor = "rgba(36,52,71)";
    colorStrength.innerHTML = "<p></p>"
    }else if(contador === 1){
    colorStrength.innerHTML = "<p>Low</p>"
    boxOne.style.backgroundColor = "red";
    boxTwo.style.backgroundColor = "rgba(36,52,71)"
    boxThree.style.backgroundColor ="rgba(36,52,71)"
    boxFour.style.backgroundColor = "rgba(36,52,71)"
   }else if(contador === 2){
    colorStrength.innerHTML = "<p>Medium</p>"
    boxOne.style.backgroundColor = "orange";
    boxTwo.style.backgroundColor = "orange";
    boxThree.style.backgroundColor ="rgba(36,52,71)"
    boxFour.style.backgroundColor = "rgba(36,52,71)"
   }else if(contador === 3){
    colorStrength.innerHTML = "<p>High</p>"
    boxOne.style.backgroundColor = "yellow";
    boxTwo.style.backgroundColor = "yellow";
    boxThree.style.backgroundColor ="yellow"
    boxFour.style.backgroundColor = "rgba(36,52,71)"
   }else if(contador === 4){
    colorStrength.innerHTML = "<p>Secure</p>"
    boxOne.style.backgroundColor = "green";
    boxTwo.style.backgroundColor = "green";
    boxThree.style.backgroundColor ="green"
    boxFour.style.backgroundColor = "green"
   }
}

function createPassword(){
    let characters = '';
   const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
   const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   const numberChars = '0123456789';
   const symbolChars = '!@#$%^&*()_-+={}[]|:;"<>,.?/~';
    if(contador === 0){
        alert("Please select at least one option")
    }else{
        if (strength.lowercase === true) {
            characters += lowercaseChars;
          }
          if (strength.uppercase === true) {
            characters += uppercaseChars;
          }
          if (strength.numbers === true) {
            characters += numberChars;
          }
          if (strength.symbols === true) {
            characters += symbolChars;
          }
          let password = '';
  for (let i = 0; i < showLength(); i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
   generatedPassword.innerHTML = password;
    }
}

function showLength() {
    let currentValue = characterSlider.value;
    passwordLength.textContent = currentValue;
    return currentValue;
};




