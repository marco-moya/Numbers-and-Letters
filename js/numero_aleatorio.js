export function numeroAleatorio(btnAleatorio) {
  const d = document,
    arrayNumeroAleatorio = [];
  let index;

  function crearArray() {
    for (let i = 1; i <= 20; i++) {
      arrayNumeroAleatorio.push(i);
    }
  }
  
  crearArray();
  index = Math.floor(Math.random() * arrayNumeroAleatorio.length);
  d.querySelector(".numero-aleatorio").textContent = arrayNumeroAleatorio[index];

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnAleatorio)) {
      if (arrayNumeroAleatorio.length === 1) {
       crearArray();
      }
      arrayNumeroAleatorio.splice(index, 1);
      index = Math.floor(Math.random() * arrayNumeroAleatorio.length);
      d.querySelector(".numero-aleatorio").textContent = arrayNumeroAleatorio[index];
    }  
  })
}







