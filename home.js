document.addEventListener('DOMContentLoaded', function () {
  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById('closeMenu');
  const mobileNav = document.getElementById('mobileNav');

  openMenu.addEventListener('click', () => {
    mobileNav.classList.add('open');
  });

  closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('open');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.project-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // optional: animate only once
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000, // 5 seconds
    disableOnInteraction: false, // allows autoplay to continue after interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
