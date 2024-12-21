const styleInput = document.querySelector("#style");
const styleLabel = document.querySelector("#style-label");

styleInput.addEventListener("change", e => {
  const isChecked = e.target.checked;
  isChecked ? styleLabel.textContent = "Claro" : styleLabel.textContent = "Escuro";
});

