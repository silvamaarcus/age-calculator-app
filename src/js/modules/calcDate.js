export default function calcDate() {
  const btn = document.getElementById('btn-js');
  const inputs = document.querySelectorAll('input'); // Setando os inputs, para zerá-los, se necessário.
  const screenSize = window.innerWidth; // Obeter largura da págin p/ aplicar responsividade na font.

  btn.addEventListener('click', () => {
    let dayInput = document.getElementById('day').value;
    let monthInput = document.getElementById('month').value - 1;
    let yearInput = document.getElementById('year').value;

    if (dayInput > 0 && monthInput > 0 && yearInput > 0) {
      // Validando a data fornecida no input.
      if (dayInput > 31 || monthInput > 12) {
        alert('INVALID DATE!!!');
        // Zerando inputs.
        inputs.forEach((input) => {
          input.value = '';
        });
        return
      }

      // Criar um novo objeto Date com a data atual pelo JS.
      let currentDate = new Date();
      // Criar um novo objeto Date com a data fornecida no input.
      let inputDate = new Date(yearInput, monthInput, dayInput);
      // Diferença entre as duas datas (Objetos).
      let timeDifference = currentDate - inputDate; // Data em milissegundos.

      // Conversão de valores em milissegundos para número inteiro.
      let yearsDifference = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
      let monthsDifference = Math.floor((timeDifference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
      let daysDifference = Math.floor((timeDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

      //Inserir resultado no HTML através do DOM.
      document.querySelector('.result-years span').innerText = yearsDifference;
      document.querySelector('.result-months span').innerText = monthsDifference;
      document.querySelector('.result-days span').innerText = daysDifference;

      if (screenSize > 400) {
        // Versão Desktop
        document.querySelector('.result-years span').style.fontSize = 100 + 'px';
        document.querySelector('.result-months span').style.fontSize = 100 + 'px';
        document.querySelector('.result-days span').style.fontSize = 100 + 'px';
      }
      else if (screenSize <= 400) {
        // Versão Mobile
        document.querySelector('.result-years span').style.fontSize = 40 + 'px';
        document.querySelector('.result-months span').style.fontSize = 40 + 'px';
        document.querySelector('.result-days span').style.fontSize = 40 + 'px';
      }
    } else {
      alert('INSERT THE DATE!')
    }
  });
}