const d = document;

export function multiplicacion(operacion, producto, btnResultado, btnCambiar) {
  const arrayMultiplicando = [],
    arrayMultiplicador = [];
  
  let indexMultiplicando,
    indexMultiplicador,
    resultado,
    valorUsuario;
  
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
    d.getElementById(operacion).innerHTML = `${arrayMultiplicando[indexMultiplicando]} x ${arrayMultiplicador[indexMultiplicador]} = <input type="number" id="valor-usuario" placeholder="Ingresa un número">`;
  }

  // Cambia los valores de cada factor de la multiplicación.
  function cambiarMultiplicacion() {
    d.getElementById(producto).innerHTML = "";
    if (arrayMultiplicando.length === 1 && arrayMultiplicador.length === 1) {
      crearArray();
    }
    arrayMultiplicando.splice(indexMultiplicando, 1);
    arrayMultiplicador.splice(indexMultiplicador, 1);
    calculo();
  }
  
  // Muestra el resultado de la multiplicación en pantalla
  function mostrarResultado () {
    d.getElementById(producto).innerHTML = `${resultado}`;
  }
  
  crearArray();
  calculo();

  // Eventos de click en los botones
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnResultado)) {
      valorUsuario = d.getElementById("valor-usuario");
      if (parseFloat(valorUsuario.value) === resultado) {
          mostrarResultado();
          console.log(`${valorUsuario.value} es correcto`);
        } else {
          console.log(`${valorUsuario.value} no es el resultado`);
        }
    }

    if (e.target.matches(btnCambiar)) {
      cambiarMultiplicacion();
    }
  })

  d.addEventListener("keydown", (e) => {
    if (e.target.matches("#valor-usuario")) {
      if (e.keyCode === 13) {
        valorUsuario = d.getElementById("valor-usuario");
        if (parseFloat(valorUsuario.value) === resultado) {
          mostrarResultado();
          console.log(`${valorUsuario.value} es correcto`);
        } else {
          console.log(`${valorUsuario.value} no es el resultado`);
        }
      }
    }
  })
}
