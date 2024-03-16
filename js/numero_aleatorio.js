export function numeroAleatorio() {
  const d = document,
    arrayNumeroAleatorio = [];
  
  d.addEventListener("click", (e) => {
    let index,
      inputInicial = d.querySelector("#valor-inicial").value,
      inputFinal = d.querySelector("#valor-final").value,
      valorInicial,
      valorFinal;
      valorInicial = parseFloat(inputInicial);
      valorFinal = parseFloat(inputFinal);
    
    index = Math.floor(Math.random() * arrayNumeroAleatorio.length);
    console.log(index);

    function crearArray() {
      for (let i = valorInicial; i <= valorFinal; i++) {
        arrayNumeroAleatorio.push(i);
      }
    }
    
    if (e.target.matches(".btn-aleatorio") || e.target.matches(".icon-refresh")) {
      
      if (arrayNumeroAleatorio.length === 0) {
        crearArray();
        console.log(arrayNumeroAleatorio);
        console.log("valor:", arrayNumeroAleatorio[index],"Index:", index);
        return d.querySelector(".numero-aleatorio").textContent = arrayNumeroAleatorio[index];
      }
      
      console.log(arrayNumeroAleatorio);
      console.log("valor:", arrayNumeroAleatorio[index], "Index:", index);
      
      // else {
      //   arrayNumeroAleatorio.splice(index, 1);
      //   d.querySelector(".numero-aleatorio").textContent = arrayNumeroAleatorio[index];
      //   console.log(arrayNumeroAleatorio);
      //   console.log("valor:", arrayNumeroAleatorio[index], "Index:", index);
      // }
    }  
  })
}







