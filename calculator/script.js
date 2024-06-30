var firstValue = 0;
var operator = "";

const display = document.querySelector(".display");

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    display.textContent = display.textContent + number.value;
    display.classList.remove("error");
  });
});

const functions = document.querySelectorAll(".func");

functions.forEach((func) => {
  func.addEventListener("click", () => {
    switch (func.value) {
      case "AC":
        display.textContent = "";
        break;

      case "DE":
        display.textContent = display.textContent.slice(0, -1);
        break;

      case ".":
        display.textContent = display.textContent + ".";
        break;

      case "%":
        if (display.textContent == "") {
          display.textContent = 0;
        } else {
          display.textContent = (
            parseFloat(display.textContent) / 100
          ).toString();
        }
        break;

      case "/":
      case "*":
      case "+":
      case "-":
        if (display.textContent === "") {
          display.textContent = "Invalid Operator";
          display.classList.add("error");
          setTimeout(() => {
            display.textContent = "";
            display.classList.remove("error");
          }, 200);
        } else {
          firstValue = parseFloat(display.textContent);
          display.textContent = "";
          operator = func.value;
        }
        break;

      case "=":
        if (firstValue === 0 && operator === "") {
          display.textContent = "Invalid Operator";
          display.classList.add("error");
          setTimeout(() => {
            display.textContent = "";
            display.classList.remove("error");
          }, 200);
        } else {
          let secondValue = parseFloat(display.textContent);
          let result;
          switch (operator) {
            case "/":
              result = (firstValue / secondValue).toFixed(10);
              break;
            case "*":
              result = (firstValue * secondValue).toFixed(10);
              break;
            case "+":
              result = (firstValue + secondValue).toFixed(10);
              break;
            case "-":
              result = (firstValue - secondValue).toFixed(10);
              break;
            default:
              result = display.textContent.toFixed(10);
              break;
          }
          display.textContent = parseFloat(result).toString();
          firstValue = 0;
          operator = "";
        }
        break;

      default:
        break;
    }
  });
});
