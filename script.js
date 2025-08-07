// Typing Animation
var typed = new Typed('#typed', {
  strings: ["Data Scientist @ Morgan Stanley", "Machine Learning Engineer", "AI Innovator"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
