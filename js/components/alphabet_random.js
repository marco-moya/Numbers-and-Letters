export function alphabetRandom() {
  const d = document;
  const $letterRandom = document.getElementById("letter-random"),
  $changeLetter = document.getElementById("change-letter"),
  arrAlphabetInitial = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii", "Jj", "Kk", "Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"];

  let arrAlphabet = [...arrAlphabetInitial];
  
  function changeLetter() {
    if (arrAlphabet.length === 1) {
      arrAlphabet = [...arrAlphabetInitial];
    }
    arrAlphabet.splice(indexAlphabet, 1);
    indexAlphabet = Math.floor(Math.random() * arrAlphabet.length);
    $letterRandom.innerText = arrAlphabet[indexAlphabet];
  }
  
  let indexAlphabet = Math.floor(Math.random() * arrAlphabet.length);
  arrAlphabet[indexAlphabet];
  $letterRandom.innerText = arrAlphabet[indexAlphabet];

  d.addEventListener("click", e => {
    if (e.target.matches("#change-letter") || e.target.matches("#change-letter i")) {
      changeLetter();
    }
  });

  d.addEventListener("keyup", e => {
    if (e.keyCode === 32) {
      changeLetter();
    }
  });
}


