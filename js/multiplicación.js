const d = document;

export function multiplicacion(operacion, btnResultado, btnCambiar, valorUsuario) {
  const arrayMultiplicando = [],
    arrayMultiplicador = [];
  
  let indexMultiplicando,
    indexMultiplicador,
    resultado,
    $valorUsuario = d.getElementById(valorUsuario);
  
  // Crea dos array uno para el multiplicando y el otro para el multiplicador 
  function crearArray() {
    for (let i = 1; i <= 10; i++) {
      arrayMultiplicando.push(i);
      arrayMultiplicador.push(i);
    }
  }

  // Toma un valor aleatorio de cada array y hace el cálculo de la multiplicación.
  function calculo() {
    indexMultiplicando = Math.floor(Math.random() * arrayMultiplicando.length);
    indexMultiplicador = Math.floor(Math.random() * arrayMultiplicador.length);
    resultado = arrayMultiplicando[indexMultiplicando] * arrayMultiplicador[indexMultiplicador];
    d.getElementById(operacion).innerHTML = `${arrayMultiplicando[indexMultiplicando]} x ${arrayMultiplicador[indexMultiplicador]} = `;
    d.querySelector(btnCambiar).disabled = true;
  }

  // Cambia los valores de cada factor de la multiplicación.
  function cambiarMultiplicacion() {
    $valorUsuario.disabled = false;
    $valorUsuario.value = "";
    if (arrayMultiplicando.length === 1 && arrayMultiplicador.length === 1) {
      crearArray();
    }
    arrayMultiplicando.splice(indexMultiplicando, 1);
    arrayMultiplicador.splice(indexMultiplicador, 1);
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
    console.log(`${$valorUsuario.value} es correcto`);
    $valorUsuario.disabled = true;
  }

  function mostrarResultadoIncorrecto() {
    d.querySelector(".container-false").classList.toggle("is-active");
    setTimeout(() => {
      d.querySelector(".container-false").classList.toggle("is-active")
    }, 800);
    const $alarmIncorrect = d.createElement("audio");
      $alarmIncorrect.src = "../assets/negative_choice.mp3";
      $alarmIncorrect.play();
    console.log(`${$valorUsuario.value} no es correcto`);
    $valorUsuario.disabled = true;
  }
  $valorUsuario.focus();
  crearArray();
  calculo();

  // Eventos de click en los botones
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnResultado)) {
      if (parseFloat($valorUsuario.value) === resultado) {
        mostrarResultadoCorrecto();
      } else {
        mostrarResultadoIncorrecto();
      }
      e.target.disabled = true;
      d.querySelector(btnCambiar).disabled = false;
    }

    if (e.target.matches(btnCambiar)) {
      cambiarMultiplicacion();
      d.querySelector(btnResultado).disabled = false;
      e.target.disabled = true;
    }
  })

  d.addEventListener("keydown", (e) => {
    if (e.target.matches("#valor-usuario")) {
      if (e.keyCode === 13) {
        if (parseFloat($valorUsuario.value) === resultado) {
          mostrarResultadoCorrecto();
        } else {
          mostrarResultadoIncorrecto();
        }
        d.querySelector(btnResultado).disabled = true;
        d.querySelector(btnCambiar).disabled = false;
      }
    }
    if (e.keyCode === 32 && d.querySelector(btnCambiar).disabled === false) {
        cambiarMultiplicacion();
        d.querySelector(btnResultado).disabled = false;
        d.querySelector(btnCambiar).disabled = true;
      }
  })
}
