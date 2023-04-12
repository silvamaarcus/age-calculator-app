export default function checkInput() {
  let active = 'active';

  function validateDay() {
    let dayInput = document.getElementById("day");
    let day = dayInput.value;
    let inputTitle = document.querySelector("label[for='day']");

    // Verificar se o valor é menor que 1 ou maior que 31.
    if (day < 1 || day > 31) {
      document.getElementById("day-validation-msg").textContent = "Must be a valid day";
      dayInput.classList.add(active);
      inputTitle.style.color = 'red';
    } else {
      document.getElementById("day-validation-msg").textContent = ""; // Limpar a mensagem de validação.
      dayInput.classList.remove(active);
      inputTitle.style.color = 'black';
    }
  }
  // Adiciona um listener para o evento "input" no campo "day"
  document.getElementById("day").addEventListener("input", validateDay);

  function validateMonth() {
    let monthInput = document.getElementById("month");
    let month = monthInput.value;
    let inputTitle = document.querySelector("label[for='month']");

    if (month < 1 || month > 12) {
      document.getElementById("month-validation-msg").textContent = "Must be a valid month";
      monthInput.classList.add(active);
      inputTitle.style.color = 'red';
    } else {
      document.getElementById("month-validation-msg").textContent = ""; // Limpar a mensagem de validação.
      monthInput.classList.remove(active);
      inputTitle.style.color = 'black';
    }
  }
  document.getElementById("month").addEventListener("input", validateMonth);

  function validateYear() {
    let yearInput = document.getElementById("year");
    let year = yearInput.value;
    let inputTitle = document.querySelector("label[for='year']");
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    if (year > currentYear) {
      document.getElementById("year-validation-msg").textContent = "Must be in the past";
      yearInput.classList.add(active);
      inputTitle.style.color = 'red';
    } else {
      document.getElementById("year-validation-msg").textContent = ""; // Limpar a mensagem de validação.
      yearInput.classList.remove(active);
      inputTitle.style.color = 'black';
    }
  }
  document.getElementById("year").addEventListener("input", validateYear);
}