export function numberRandom() {
  const d = document,
    arrayNumberRandom = [];
  
  let index,
    inputInitial = d.querySelector("#initial-value"),
    inputFinal = d.querySelector("#final-value"),
    valueInitial = parseFloat(inputInitial.value),
    valueFinal = parseFloat(inputFinal.value);
  
  function createArray() {
    for (let i = valueInitial; i <= valueFinal; i++) {
      arrayNumberRandom.push(i);
    }
  }

  function reduceArray() {
    arrayNumberRandom.splice(index, 1);
  }
  
  function showNumber() {
    index = Math.floor(Math.random() * arrayNumberRandom.length);
    d.querySelector(".number_random").textContent = arrayNumberRandom[index];
  }

  createArray();
  showNumber();
  reduceArray();

  inputInitial.addEventListener("change", () => {
    arrayNumberRandom.splice(0, arrayNumberRandom.length);
    valueInitial = parseInt(inputInitial.value);
    createArray();
  });
  
  inputFinal.addEventListener("change", () => {
    arrayNumberRandom.splice(0, arrayNumberRandom.length);
    valueFinal = parseInt(inputFinal.value);
    createArray();
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches("#btn-random") || e.target.matches("#btn-random i")) {
      showNumber();
      reduceArray();
      if (arrayNumberRandom.length === 0) {
        createArray();
        return;
      }
    }
  })

  d.addEventListener("keyup", (e) => {
    if (e.keyCode === 32) {
      showNumber();
      reduceArray();
    }
    if (arrayNumberRandom.length === 0) {
      createArray();
      return;
    }
  })
}