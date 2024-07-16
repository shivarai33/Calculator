// Calculator program
let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = ''; // Clear the display by setting its value to an empty string
}

function calculate() {
    try {
        // Evaluate the expression in the display using eval()
        // Note: Using eval() can be potentially unsafe if the input is not controlled.
        // In a real-world application, you might want to use a parser library instead.
        display.value = eval(display.value);
    } catch (error) {
        // Handle errors, such as syntax errors in the expression
        display.value = 'Error';
    }
}
