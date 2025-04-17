export default function hamburgerMenu(panelBtn, panel, menuLink) {
  const d = document;

  d.querySelectorAll(".off-canvas-link").forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(`${panelBtn} span:nth-child(2)`).classList.toggle("is-active");
      d.querySelector(`${panelBtn} span:nth-child(1)`).classList.toggle("is-active");
    }
    
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(`${panelBtn} span:nth-child(2)`).classList.toggle("is-active");
      d.querySelector(`${panelBtn} span:nth-child(1)`).classList.toggle("is-active");
    }
  });
}