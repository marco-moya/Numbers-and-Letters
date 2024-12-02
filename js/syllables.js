const d = document;

export function syllablesRandom() {
  const $consonantsContent = d.getElementById("consonants"),
    $template = d.getElementById("template").content,
    $fragment = d.createDocumentFragment(),
    $selectAllRadio = d.getElementById('selectAll'),
    $deselectAllRadio = d.getElementById('deselectAll');

  const vowels = ['a', 'e', 'i', 'o', 'u'],
    consonantsArray = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  
  let indexSyllables,
    consonants = [],
    syllables = [];
  
    consonantsArray.forEach(el => {
      $template.querySelector("label").setAttribute("for", el);
      $template.querySelector("label").innerText = el;
      $template.querySelector("input").setAttribute("name", el);
      $template.querySelector("input").setAttribute("id", el);
      let clone = $template.cloneNode(true);
      $fragment.appendChild(clone);
    })
  
    $consonantsContent.appendChild($fragment);
    const $checkboxes = d.querySelectorAll(".consonant");

  // Función para crear el array de silabas
  function createSyllables() {
    syllables = []; // Limpia el array antes de generar nuevas combinaciones
    for (let i = 0; i < consonants.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
        syllables.push(consonants[i] + vowels[j]);
      }
    }
    showResult();
  }
  
  // Función para mostrar el resultado
  function showResult() {
    if (consonants.length === 0) return d.getElementById("error-message").innerText = "Marca una opción";
    if (consonants.length !== 0) d.getElementById("error-message").innerText = "";
    indexSyllables = Math.floor(Math.random() * syllables.length);
    d.getElementById("syllable-random").innerText = syllables[indexSyllables];
    console.log(`Result: ${syllables[indexSyllables]}`);
    console.log(syllables);
  }

  // Función para reducir el array vowell
  function reduceSyllables() {
    syllables.splice(indexSyllables, 1);
  }

  // Función para cambiar de silaba
  function changeSyllable() {
    if (syllables.length === 1) {
      createSyllables();
    } else {
      reduceSyllables();
      showResult();
    }
  }

  // Función para seleccionar o desmarcar todos los checkboxes
  function toggleCheckboxes(select) {
    consonants = []; // Reinicia el array de consonantes
    $checkboxes.forEach(checkbox => {
      checkbox.checked = select;
      if (checkbox.checked) {
        consonants.push(checkbox.name);
        console.log(consonants);
      } else {
        consonants = [];
        console.log(`silabas vacías`, consonants);
      }
    });
    if (consonants.length > 0) createSyllables();
    //if (select) createSyllables();
  }
  // Función para seleccionar o desmarcar un checkbox
  function checkboxes() {
    //consonants = [];
    if ($selectAllRadio.checked) {
      consonants = [];
      toggleCheckboxes(true); // Marcar todos al recargar la página
    }
    $checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", () => {
        let index = consonants.indexOf(checkbox.name); // Encuentra la posición de la consonante en el array
        if (checkbox.checked) {
          if (index === -1) consonants.push(checkbox.name); // Si no está en el array, la agrega
          $deselectAllRadio.checked = false;
        } else {
          if (index !== -1) consonants.splice(index, 1); // Si está en el array, la elimina
          $selectAllRadio.checked = false;
        }
        createSyllables(); // Regenera las sílabas con el array actualizado
      });
    });
  }

  console.log($checkboxes);
  checkboxes();

  $selectAllRadio.addEventListener('change', () => {
    if ($selectAllRadio.checked) {
      consonants = [];
      toggleCheckboxes(true); // Marcar todos
    }
  });

  $deselectAllRadio.addEventListener('change', () => {
    if ($deselectAllRadio.checked) {
      toggleCheckboxes(false); // Desmarcar todos
    }
  });

  d.addEventListener("click", e => {
    if (e.target.matches("#change-syllable") || e.target.matches("#change-syllable img")) {
      changeSyllable();
    }
  });

  d.addEventListener("keyup", e => {
    if (e.keyCode === 32) {
      changeSyllable();
    }
  });

}