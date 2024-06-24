const text = document.querySelector(".second-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Drawing"
  }, 0);
  setTimeout(() => {
    text.textContent = "Designing"
  }, 4000);
}

textLoad();
setInterval(textLoad, 8000);