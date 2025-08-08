document.addEventListener("DOMContentLoaded", function () {
    new Typed(".typing", {
      strings: ["Full-Stack Developer", "Tech Enthusiast", "Java Programmer"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    });
  });

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".sidebar nav ul li a");

window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
};
