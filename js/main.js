import hamburgerMenu from "./menu_hamburguesa.js";
import { numberRandom } from "./number_random.js";
import { multiplicacion } from "./multiply.js";
import { alphabetRandom } from "./alphabet_random.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  // Ejecutar funciones según la página actual
  if (document.getElementById("numbers-page")) {
    numberRandom();
  } else if (document.getElementById("multiply-page")) {
    multiplicacion();
  } else if (document.getElementById("alphabet-page")) {
    alphabetRandom();
  }
})
