let display = document.getElementById("display");

function appendToDisplay(value){		
    display.value += value; 
}

function calculateResult(){
    display.value = eval(display.value) == Infinity ? "Division by zero is not allowed" : eval(display.value)
}

function clearDisplay(){
    display.value = "";
}