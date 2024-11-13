const d = document;

export function multiplicacion() {
  const arrayMultiplication = [],
    arrayMultiplier = [],
    $btnChange = d.querySelector("#btn-change"),
    $btnResult = d.querySelector("#btn-result");
  
  let indexMultiplying,
    indexMultiplier,
    result,
    $valueUser = d.getElementById("value-user");
  
  // Crea dos array uno para el multiplicando y el otro para el multiplicador 
  function createArray() {
    for (let i = 1; i <= 10; i++) {
      arrayMultiplication.push(i);
      arrayMultiplier.push(i);
    }
  }

  // Toma un valor aleatorio de cada array y hace el cálculo de la multiplicación.
  function calculo() {
    indexMultiplying = Math.floor(Math.random() * arrayMultiplication.length);
    indexMultiplier = Math.floor(Math.random() * arrayMultiplier.length);
    result = arrayMultiplication[indexMultiplying] * arrayMultiplier[indexMultiplier];
    d.getElementById("operation-mult").innerHTML = `${arrayMultiplication[indexMultiplying]} x ${arrayMultiplier[indexMultiplier]} = `;
    $btnChange.disabled = true;
  }

  // Cambia los valores de cada factor de la multiplicación.
  function cambiarMultiplicacion() {
    $valueUser.disabled = false;
    $valueUser.value = "";
    if (arrayMultiplication.length === 1 && arrayMultiplier.length === 1) {
      createArray();
    }
    arrayMultiplication.splice(indexMultiplying, 1);
    arrayMultiplier.splice(indexMultiplier, 1);
    calculo();
  }
  
  // Muestra el resultado de la multiplicación en pantalla
  function mostrarResultadoCorrecto() {
    d.querySelector(".container-true").classList.toggle("is-active");
    setTimeout(() => {
      d.querySelector(".container-true").classList.toggle("is-active")
    }, 800);
    const $alarmCorrect = d.createElement("audio");
      $alarmCorrect.src = "../assets/correct_choice.mp3";
      $alarmCorrect.play();
    console.log(`${$valueUser.value} es correcto`);
    $valueUser.disabled = true;
  }

  function mostrarResultadoIncorrecto() {
    d.querySelector(".container-false").classList.toggle("is-active");
    setTimeout(() => {
      d.querySelector(".container-false").classList.toggle("is-active")
    }, 800);
    const $alarmIncorrect = d.createElement("audio");
      $alarmIncorrect.src = "../assets/negative_choice.mp3";
      $alarmIncorrect.play();
    console.log(`${$valueUser.value} no es correcto`);
    $valueUser.disabled = true;
  }
  $valueUser.focus();
  createArray();
  calculo();

  // Eventos de click en los botones
  d.addEventListener("click", (e) => {
    if (e.target.matches("#btn-result")) {
      if (parseFloat($valueUser.value) === result) {
        mostrarResultadoCorrecto();
      } else {
        mostrarResultadoIncorrecto();
      }
      e.target.disabled = true;
      $btnChange.disabled = false;
    }

    if (e.target.matches("#btn-change") || e.target.matches("#btn-change img")) {
      cambiarMultiplicacion();
      $valueUser.focus();
      $btnResult.disabled = false;
      e.target.disabled = true;
    }
  })

  // Eventos de keydown en los botones
  d.addEventListener("keydown", (e) => {
    if (e.target.matches("#value-user")) {
      if (e.keyCode === 13) {
        if (parseFloat($valueUser.value) === result) {
          mostrarResultadoCorrecto();
        } else {
          mostrarResultadoIncorrecto();
        }
        $btnChange.disabled = false;
        $btnResult.disabled = true;
      }
    }
    if (e.keyCode === 32 && d.querySelector("#btn-change").disabled === false) {
        cambiarMultiplicacion();
        $valueUser.focus();
        $btnChange.disabled = true;
        $btnResult.disabled = false;
      }
  })
}
