export function subtraction() {
  const d = document;
  const $subtractionForm = d.querySelector(".form-subtraction-container");
  const $addendContainer = d.querySelector(".addend-container");
  const $inputSumContainer = d.querySelector(".input-subtraction-container");
  const $subtractionResult = d.getElementById("subtraction-result");
  const $valueColumn = d.getElementById("value-column");
  const $valueRow = d.getElementById("value-row");

  let column = 4;
  let row = 2;
  let subtractionTotal;
  let userSubtractionTotal;
  let listNumbers;

  function resetAddends() {
    $addendContainer.innerHTML = "";
    $inputSumContainer.innerHTML = "";
    listNumbers = [];
    const $minusSing = d.createElement("span");
    $minusSing.classList.add("minus-sign");
    $minusSing.textContent = "-";
    $addendContainer.appendChild($minusSing);
    subtractionTotal = 0;
    for (let i = 0; i < row; i++) {
      listNumbers.push(Math.floor(Math.random() * 9 * Math.pow(10, column-1)) + Math.pow(10, column-1));
    }
    listNumbers.sort((a, b) => b - a);
    subtractionTotal = listNumbers[0] - listNumbers[1];
    listNumbers.forEach((number, index) => {
      const $label = d.createElement("label");
      $label.setAttribute("id", `addend${index}`);
      $label.textContent = number
      $addendContainer.appendChild($label);
    });
    for (let i = 0; i < column; i++) {
      const $input = d.createElement("input");
      $input.setAttribute("type", "number");
      $input.setAttribute("id", `addend${i + 1}`);
      $input.setAttribute("min", `${0}`);
      $input.setAttribute("max", `${9}`);
      $inputSumContainer.appendChild($input);
    }
  }

  function setSubtractionTotal() {
    $subtractionResult.textContent = subtractionTotal;
  }

  function evaluateSum() {
    const inputValues = [];
    const $inputs = $inputSumContainer.querySelectorAll("input[type='number']");;
    $inputs.forEach((input) => {
      if (input.value == "") input.value = 0;
      inputValues.push(input.value);
    });
    userSubtractionTotal = parseInt(inputValues.reduce((acc, val) => acc + val , 0));
    if (userSubtractionTotal === subtractionTotal) {
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

  $subtractionForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches("#btn-subtraction-result")) {
      setSubtractionTotal();
      $subtractionResult.classList.remove("hidden");
      evaluateSum();
      d.getElementById("btn-subtraction-result").disabled = true;
      d.getElementById("btn-subtraction-reset").disabled = false;
    }
    if (e.target.matches("#btn-subtraction-reset") || e.target.matches("#btn-subtraction-reset i")) {
      resetAddends();
      $subtractionResult.classList.add("hidden");
      d.getElementById("btn-subtraction-result").disabled = false;
      d.getElementById("btn-subtraction-reset").disabled = true;
    }
    if (e.target.matches("#btn-subtraction-edit") || e.target.matches("#btn-subtraction-edit i")) {
      d.querySelector(".modal").classList.add("show-modal");
    }
    if (e.target.matches("#btn-subtraction-edit-close")) {
      d.querySelector(".modal").classList.remove("show-modal");
    }
    if (e.target.matches("#btn-increase-colum") || e.target.matches("#btn-increase-colum i")) {
      if ($valueColumn.textContent < 6) {
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
      if ($valueRow.textContent < 6) {
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