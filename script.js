const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("del")) {
      display.textContent = display.textContent.slice(0, -1);
    } else if (button.classList.contains("reset")) {
      display.textContent = "";
    } else if (button.classList.contains("equal")) {
      try {
        const expression = display.textContent.replace(/x/g, "*");
        display.textContent = eval(expression);
      } catch {
        display.textContent = "Error";
      }
    } else {
      display.textContent += value;
    }
  });
});
