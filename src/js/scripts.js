const text = document.querySelector(".second-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Front-End"
  }, 0);
  setTimeout(() => {
    text.textContent = "Game Dev"
  }, 4000);
  setTimeout(() => {
    text.textContent = "Designer"
  }, 8000);
}

textLoad();
setInterval(textLoad, 12000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));