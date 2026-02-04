// ==============================
// Smooth scroll para links internos
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// ==============================
// Hamburger mobile
// ==============================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fecha menu ao clicar em algum link
document.querySelectorAll(".nav-links li a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ==============================
// WhatsApp fixo reforçado
// ==============================
const whatsappFloat = document.getElementById("whatsappFloat");
if(whatsappFloat) {
  whatsappFloat.addEventListener("click", () => {
    window.open(whatsappFloat.href, "_blank");
  });
}

console.log("SorrisoOdonto: JS carregado e funcional!");