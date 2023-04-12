export default function checkButton() {
  const dayInput = document.getElementById('day');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');
  const btn = document.querySelector('#btn-js img');
  
  dayInput.addEventListener('input', checkInputs);
  monthInput.addEventListener('input', checkInputs);
  yearInput.addEventListener('input', checkInputs);
  
  function checkInputs() {
    if (dayInput.value && monthInput.value && yearInput.value) {
      btn.src = './src/image/button.png'; // Atualizar o src da imagem do botão.
    } else {
      btn.src = './src/image/button-black.png'; // Restaurar o src da imagem do botão.
    }
  }
}