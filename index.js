const display = document.getElementById("display");


document.addEventListener("keydown", function(event) {
    keyboard(event.key);
});

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function keyboard(key) {
    switch (key.toLowerCase()) {
        case "+":
        case "-":
        case "*":
        case "/":
        case ".":
            appendToDisplay(key);
            break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            appendToDisplay(key);
            break;
        case "enter":
        case "=":
            calculate();
            break;
        case "c":
            clearDisplay();
            break;
        default:
            break;
    }
}