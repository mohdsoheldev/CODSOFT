const display = document.getElementById("display");

// Add value to display
function append(value) {

    // Prevent multiple operators together
    const operators = ['+', '-', '*', '/', '%'];
    const lastChar = display.value.slice(-1);

    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }

    display.value += value;
}

// Clear everything
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {

    if (display.value === "") return;

    try {

        let expression = display.value;

        // Replace % with /100
        expression = expression.replace(/(\d+)%/g, "($1/100)");

        display.value = eval(expression);

    } catch {

        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        }, 1200);

    }
}

// Keyboard Support
document.addEventListener("keydown", function (e) {

    const allowed = "0123456789+-*/.%";

    if (allowed.includes(e.key)) {
        append(e.key);
    }

    if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    }

    if (e.key === "Backspace") {
        deleteLast();
    }

    if (e.key === "Escape") {
        clearDisplay();
    }

});