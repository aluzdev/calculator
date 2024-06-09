const display = document.getElementById("display");

function clearDisplay() {
  display.textContent = "0";
}

function inputValue(value) {
  display.textContent =
    display.textContent === "0" ? value : display.textContent + value;
}

function inputOperation(operation) {
  display.textContent += ` ${operation} `;
}

function calculate() {
  try {
    const result = eval(
      display.textContent.replace("÷", "/").replace("×", "*")
    );
    display.textContent = result;
  } catch {
    display.textContent = "Error";
  }
}
