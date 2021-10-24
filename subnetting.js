let userInput = document.getElementById("subnetting__input");
let assignmentText = document.getElementById("subnetting__address");
let checkButton = document.getElementById("subnetting__checkbutton");
let alerts = document.getElementById("subnetting__alerts");
let attemptsDisplay = document.getElementById("subnetting__notications--attempts");
let scoreDisplay = document.getElementById("subnetting__notications--score");

let netmaskArray = [
    0,
    128,
    192,
    224,
    240,
    248,
    252,
    254,
    255
];

let prefix;
let attempts = 0;
let score = 0;
let prefixOutput;
let addressOutput;
let netmask;
let userInputReading;

function generateAssignment(){
    octetOne = Math.round(Math.random() * 255);
    octetTwo = Math.round(Math.random() * 255);
    octetThree = Math.round(Math.random() * 255);
    octetFour = Math.round(Math.random() * 255);
    prefix = Math.round(Math.random() * 6); // class C addresses.
    prefixOutput = prefix + 24;
    
    addressOutput = octetOne + "." + octetTwo + "." + octetThree + "." + octetFour + "/" + prefixOutput;
    assignmentText.innerText = addressOutput;
}

function gradeAnswer(){
    userInputReading = userInput.value;
    if (prefixOutput >= 24) {
        netmask = "255.255.255." + netmaskArray[prefix];
    }
    if (userInputReading == netmask){
        attempts++;
        score++;
        return true;
    } else {
        attempts++;
        return false;
    }
}

function checkAnswer(){
    if (gradeAnswer()){
        generateAssignment();
        displayCorrect();
        userInput.value = "";
    } else {
        displayError();
    }
    attemptsDisplay.innerText = attempts;
    scoreDisplay.innerText = score;
}

function displayCorrect(){
    userInput.classList.add("correct");
    setTimeout(() => {
        userInput.classList.remove("correct");
    }, 150);
}

function displayError(){
    userInput.classList.add("error");
    setTimeout(() => {
        userInput.classList.remove("error");
    }, 1000);
}

generateAssignment();

checkButton.addEventListener('click', ()=>{
    checkAnswer();
});

window.addEventListener('keydown', (event)=>{
    if (event.key == "Enter"){
        checkAnswer();
    }
})
