document.addEventListener("DOMContentLoaded", () => {
  // Toggle Mobile Menu
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Slideshow
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 4000);
  }

  // GET INVOLVED SECTION ROTATOR
  const images = ["grow.jpg", "serve.jpg", "change.jpg"];
  const titles = ["Grow Together", "Serve One Another", "Change the World"];
  const texts = [
    "Grow in community and support one another in Christ.",
    "Use your gifts to serve others and reflect God’s love.",
    "Impact the world through Christ-centered living."
  ];

  let current = 0;

  function updateInvolvedContent() {
    const imageEl = document.getElementById("involvedImage");
    const titleEl = document.getElementById("involvedTitle");
    const textEl = document.getElementById("involvedText");
    const circleTextEl = document.getElementById("circleText");

    if (imageEl && titleEl && textEl && circleTextEl) {
      imageEl.src = images[current];
      titleEl.innerText = "Get Involved";
      textEl.innerText = texts[current];
      circleTextEl.innerText = titles[current];
      current = (current + 1) % images.length;
    }
  }

  updateInvolvedContent(); // show first content immediately
  setInterval(updateInvolvedContent, 4000);

  // --- Countdown Timer ---
  function getNextSunday() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
    const daysUntilSunday = (7 - dayOfWeek) % 7;
    const nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + daysUntilSunday);
    nextSunday.setHours(9, 0, 0, 0); // Set to 9:00 AM on Sunday
    return nextSunday;
  }

  function updateCountdown() {
    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return; // If countdown element not on page, skip

    const now = new Date();
    const targetDate = getNextSunday();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
      countdownEl.innerText = "Service is happening now!";
      return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  // Run timer
  setInterval(updateCountdown, 1000);
  updateCountdown();
});

  
  