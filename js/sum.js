const d = document;

export function sum() {
  const sumForm = d.querySelector(".form-sum-container");
  const $addend1 = d.getElementById("addend1");
  const $addend2 = d.getElementById("addend2");
  const $sumResult = d.getElementById("sum-result");
  const $btnSumResult = d.getElementById("btn-sum-result");

  let addend1;
  let addend2;
  function resetAddends() {
    addend1 = Math.floor(Math.random() * 9000) + 1000;
    addend2 = Math.floor(Math.random() * 9000) + 1000;
    console.log(addend1, addend2);
    $addend1.textContent = addend1;
    $addend2.textContent = addend2;
  }

  function sumAddends() {
    $sumResult.textContent = addend1 + addend2;
    console.log(addend1 + addend2);
  }
  
  resetAddends();

  sumForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches("#btn-sum-result") || e.target.matches("#btn-sum-result i")) {
      sumAddends();
      $sumResult.classList.remove("hidden");
    }
    if (e.target.matches("#btn-reset-sum") || e.target.matches("#btn-reset-sum i")) {
      resetAddends();
      $sumResult.classList.add("hidden");
    }
  });

}