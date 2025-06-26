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
document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("enquiry.php", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(data => {
      if (data.trim() === "success") {
        document.getElementById("successMessage").style.display = "block"; // ✅ show the success message
        this.reset(); // Optional: clear the form
        setTimeout(() => {
          document.getElementById("enquiryPopup").style.display = "none";
          document.getElementById("successMessage").style.display = "none";
        }, 3000); // Close popup after 3 seconds
      } else {
        alert("Something went wrong: " + data);
      }
    })
    .catch(error => {
      alert("Error: " + error);
    });
});

