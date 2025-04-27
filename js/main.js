import hamburgerMenu from "./components/menu_hamburguesa.js";
import { numberRandom } from "./components/number_random.js";
import { sum } from "./components/sum.js";
import { subtraction } from "./components/subtraction.js";
import { multiplicacion } from "./components/multiply.js";
import { alphabetRandom } from "./components/alphabet_random.js";
import { syllablesRandom } from "./components/syllables.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  // Ejecutar funciones según la página actual
  if (document.getElementById("numbers-page")) {
    numberRandom();
  } else if (document.getElementById("multiply-page")) {
    multiplicacion();
  } else if (document.getElementById("sum-page")) {
    sum();
  } else if (document.getElementById("subtraction-page")) {
    subtraction();
  } else if (document.getElementById("alphabet-page")) {
    alphabetRandom();
  } else if (document.getElementById("syllables-page")) {
    syllablesRandom();
  }
})

console.log("Página cargada correctamente.");
