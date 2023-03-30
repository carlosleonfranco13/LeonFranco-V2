const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const toggleIcon = document.querySelector(".toggle-icon");
let overlayColorOrig = 'var(--color-1)';
let bodyColorOrig = '#fff';
const navBarA = document.querySelectorAll('.navbar a');
let navbarAColOrig = '#fff';

toggleIcon.addEventListener("click", () => {
  toggleIcon.classList.toggle("bx-sun");
  if (toggleIcon.classList.contains("bx-sun")) {
    body.style.background = "#030A15";
    overlay.style.borderTopColor = "white";
    overlay.style.borderLeftColor = "white";
    overlay.style.borderBottomColor = "white";
    navBarA.forEach((element) => {
        style.color = '#030A15';
    });
  } else {
    overlay.style.borderTopColor = overlayColorOrig;
    overlay.style.borderLeftColor = overlayColorOrig;
    overlay.style.borderBottomColor = overlayColorOrig;
    body.style.background = bodyColorOrig;
    navBarA.style.color = navbarAColOrig;
  }
});
