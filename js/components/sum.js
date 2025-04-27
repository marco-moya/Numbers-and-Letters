export function sum() {
  const d = document;
  const sumForm = d.querySelector(".form-sum-container");
  const $addendContainer = d.querySelector(".addend-container");
  const $inputSumContainer = d.querySelector(".input-sum-container");
  const $sumResult = d.getElementById("sum-result");
  const $valueColumn = d.getElementById("value-column");
  const $valueRow = d.getElementById("value-row");

  let column = 4;
  let row = 2;
  let sumTotal;
  let userSumTotal;

  function adjustSize(elemento) {
    const $contenedor = document.querySelector(elemento);
    const fontSizeInicial = 48; // Tamaño de fuente inicial
    const $inputs = $inputSumContainer.querySelectorAll("input[type='number']");
    let fontSize = parseInt(window.getComputedStyle($contenedor).fontSize);
    
    // Ajustar el tamaño del Gap según el número de columnas
    if (column === 8) {
      $inputSumContainer.style.columnGap = "0.5rem";
      $inputSumContainer.style.rowGap = "0.5rem";
    } else if (column === 9) {
      $inputSumContainer.style.columnGap = "0.6rem";
      $inputSumContainer.style.rowGap = "0.6rem";
    } else {
      $inputSumContainer.style.columnGap = "0.3rem";
      $inputSumContainer.style.rowGap = "0.3rem";
    }
    
    // Reducir el tamaño de fuente si el contenido desborda
    while (($contenedor.scrollHeight > $contenedor.clientHeight || $contenedor.scrollWidth > $contenedor.clientWidth) && fontSize > 32) {
      fontSize--;
      $contenedor.style.fontSize = fontSize + "px";
      $sumResult.style.fontSize = fontSize + "px";
    }
    
    // Incrementar el tamaño de fuente si el contenido no desborda y no ha alcanzado el tamaño inicial
    while (($contenedor.scrollHeight <= $contenedor.clientHeight && $contenedor.scrollWidth <= $contenedor.clientWidth) && fontSize < fontSizeInicial) {
      fontSize++;
      $contenedor.style.fontSize = fontSize + "px";
      $sumResult.style.fontSize = fontSize + "px";
    }

    // Ajustar el tamaño de los inputs
    $inputs.forEach(input => {
      input.style.fontSize = `${fontSize}px`;
      input.style.width = `${parseFloat(fontSize) }px`;
      input.style.height = `${parseFloat(fontSize) }px`;
    });
  }

  function resetAddends() {
    $addendContainer.innerHTML = "";
    $inputSumContainer.innerHTML = "";
    const $span = d.createElement("span");
    $span.classList.add("plus-sign");
    $span.textContent = "+";
    $addendContainer.appendChild($span);
    sumTotal = 0;
    for (let i = 0; i < row; i++) {
      const $label = d.createElement("label");
      $label.setAttribute("id", `addend${i + 1}`);
      $label.textContent = Math.floor(Math.random() * 9 * Math.pow(10, column-1)) + Math.pow(10, column-1);
      $addendContainer.appendChild($label);
      sumTotal += parseInt($label.textContent);
    }
    for (let i = 0; i <= column; i++) {
      const $input = d.createElement("input");
      $input.setAttribute("type", "number");
      $input.setAttribute("id", `addend${i + 1}`);
      $input.setAttribute("min", `${0}`);
      $input.setAttribute("max", `${9}`);
      $inputSumContainer.appendChild($input);
    }
    adjustSize(".addend-container");
  }

  function sumAddends() {
    $sumResult.textContent = sumTotal;
  }

  function evaluateSum() {
    const inputValues = [];
    const $inputs = $inputSumContainer.querySelectorAll("input[type='number']");;
    $inputs.forEach((input) => {
      if (input.value == "") input.value = 0;
      inputValues.push(input.value);
    });
    userSumTotal = parseInt(inputValues.reduce((acc, val) => acc + val , 0));
    if (userSumTotal === sumTotal) {
      showCorrectResult();
    } else {
      showIncorrectResult();
    }
  }

  function showCorrectResult() {
    d.querySelector(".container-true").classList.toggle("is-active");
    setTimeout(() => {
      d.querySelector(".container-true").classList.toggle("is-active")
    }, 800);
    const $alarmCorrect = d.createElement("audio");
    $alarmCorrect.src = "../../assets/audio/correct_choice.mp3";
    $alarmCorrect.play();
  }

  function showIncorrectResult() {
    d.querySelector(".container-false").classList.toggle("is-active");
    setTimeout(() => {
      d.querySelector(".container-false").classList.toggle("is-active")
    }, 800);
    const $alarmIncorrect = d.createElement("audio");
    $alarmIncorrect.src = "../../assets/audio/negative_choice.mp3";
    $alarmIncorrect.play();
  }
  
  $valueColumn.textContent = column;
  $valueRow.textContent = row;
  resetAddends();

  $inputSumContainer.addEventListener("input", (e) => {
    if (e.target.matches("input[type='number']")) {
      const value = e.target.value;
      e.target.value = value.slice(-1);
    }
  });

  sumForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches("#btn-sum-result")) {
      sumAddends();
      $sumResult.classList.remove("hidden");
      evaluateSum();
      d.getElementById("btn-sum-result").disabled = true;
      d.getElementById("btn-sum-reset").disabled = false;
    }
    if (e.target.matches("#btn-sum-reset") || e.target.matches("#btn-sum-reset i")) {
      resetAddends();
      $sumResult.classList.add("hidden");
      d.getElementById("btn-sum-result").disabled = false;
      d.getElementById("btn-sum-reset").disabled = true;
    }
    if (e.target.matches("#btn-sum-edit") || e.target.matches("#btn-sum-edit i")) {
      d.querySelector(".modal").classList.add("show-modal");
    }
    if (e.target.matches("#btn-sum-edit-close")) {
      d.querySelector(".modal").classList.remove("show-modal");
    }
    if (e.target.matches("#btn-increase-colum") || e.target.matches("#btn-increase-colum i")) {
      if ($valueColumn.textContent < 9) {
        column++;
        $valueColumn.textContent = column;
        resetAddends();
      }
    }
    if (e.target.matches("#btn-decrease-colum") || e.target.matches("#btn-decrease-colum i")) {
      if ($valueColumn.textContent > 1) {
        column--;
        $valueColumn.textContent = column;
        resetAddends();
      }
    }
    if (e.target.matches("#btn-increase-row") || e.target.matches("#btn-increase-row i")) {
      if ($valueRow.textContent < 9) {
        row++;
        $valueRow.textContent = row;
        resetAddends();
      }
    }
    if (e.target.matches("#btn-decrease-row") || e.target.matches("#btn-decrease-row i")) {
      if ($valueRow.textContent > 2) {
        row--;
        $valueRow.textContent = row;
        resetAddends();
      }
    }
  });

}