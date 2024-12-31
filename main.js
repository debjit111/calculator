let displayValue = '';

function appendValue(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch {
    displayValue = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}