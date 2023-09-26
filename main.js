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

let uppercase = false;
let lowercase = false;
let numbers = false;
let symbols = false;

let contador = 0;
let strength = [uppercase, lowercase, numbers, symbols];

let generate = document.getElementById("create-password");

generate.addEventListener("click", createPassword);
characterSlider.addEventListener("input", showLength);

checkedOne.addEventListener("click", isChecked);
checkedTwo.addEventListener("click", isCheckedTwo);
checkedThree.addEventListener("click", isCheckedThree);
checkedFour.addEventListener("click", isCheckedFour);

function isChecked(){
    if(checkedOne.checked){
        uppercase = true;
        contador+=1;
    }else{
        uppercase = false;
        contador-=1
    }
    changeStrength();
}

function isCheckedTwo(){
    if(checkedTwo.checked){
        lowercase = true;
        contador+=1;
    }else{
        lowercase = false;
        contador-=1;
    }
    changeStrength();
}
 
function isCheckedThree(){
    if(checkedThree.checked){
        numbers = true;
        contador+=1;
    }else{
        numbers = false;
        contador-=1;
    }
    changeStrength();
}
    
function isCheckedFour(){
   if(checkedFour.checked){
        symbols = true;
        contador+=1;
    }else{
        symbols = false;
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
    console.log(strength);
}

function showLength() {
    let currentValue = characterSlider.value;
    passwordLength.textContent = currentValue;
    return currentValue;
};




