import hamburgerMenu from "./menu_hamburguesa.js";
import { numeroAleatorio } from "./numero_aleatorio.js";
import { multiplicacion } from "./multiplicación.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  numeroAleatorio(".btn-aleatorio", ".numero-aleatorio");
  multiplicacion("operacion-mult", "producto-mult", "#btn-resultado", "#btn-cambio");
})


/* ************ Números ************ */
const numeros = document.querySelector("#mostrar-numeros");
let inicio = document.querySelector("#inicio");
let fin = document.querySelector("#fin");
let contenedorNumero;
inicio = parseInt(inicio.value);
fin = parseInt(fin.value);
// console.log(inicio, fin);
const arrayNumeros = [];

function crearNumeros() {
  for (let i = 1; i <= 20; i++) {
    arrayNumeros.push(i);
  }
}

crearNumeros();

arrayNumeros.forEach((elemento, index) => {
  contenedorNumero = `<p>${arrayNumeros[index]}</p>`;
  numeros.innerHTML += contenedorNumero;
})

/* ************ Vocales ************ */
const vocalAleatoria = document.getElementById("vocal"),
  refreshVocal = document.getElementById("refresh-vocal"),
  arrayVocales = ["a", "e", "i", "o", "u"];

function cambiarVocal() {
  if (arrayVocales.length === 1) {
    arrayVocales.push("a", "e", "i", "o", "u");
  }
  arrayVocales.splice(indexVocales, 1);
  indexVocales = Math.floor(Math.random() * arrayVocales.length);
  vocalAleatoria.textContent = arrayVocales[indexVocales];
  // console.log(`index: ${indexVocales}`);
  // console.log(`valor: ${arrayVocales[indexVocales]} `);
  // console.log(arrayVocales);
}

let indexVocales = Math.floor(Math.random() * arrayVocales.length);
arrayVocales[indexVocales];
vocalAleatoria.textContent = arrayVocales[indexVocales];
refreshVocal.addEventListener("click", cambiarVocal);
// console.log(`index: ${indexVocales}`);
// console.log(`valor: ${arrayVocales[indexVocales]} `);
// console.log(arrayVocales);