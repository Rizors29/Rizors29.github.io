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

document.getElementById('about-link').addEventListener('click', function (event) {
  event.preventDefault();
  const aboutSection = document.getElementById('about');
  const offsetTop = aboutSection.getBoundingClientRect().top + window.pageYOffset - document.querySelector('.navbar').offsetHeight;
  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
});

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