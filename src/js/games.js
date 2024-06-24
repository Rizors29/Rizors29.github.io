const text = document.querySelector(".second-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Playing Games"
  }, 0);
  setTimeout(() => {
    text.textContent = "Making Games"
  }, 4000);
}

textLoad();
setInterval(textLoad, 8000);