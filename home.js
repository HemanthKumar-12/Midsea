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
// ENQUIRY POPUP SCRIPT
document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('enquiryPopup');
  const closePopup = document.getElementById('closePopup');
  const enquireBtns = document.querySelectorAll('.enquire-btn');

  enquireBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      popup.style.display = 'flex';
    });
  });

  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});
