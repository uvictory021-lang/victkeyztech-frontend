const hambBtn = document.getElementById('hambBtn');
const closeBtn = document.getElementById('closeBtn');
const menuOverlay = document.getElementById('menuOverlay');
const menuPanel = document.getElementById('menuPanel');

hambBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('hidden');
  setTimeout(() => {
    menuPanel.classList.remove('translate-x-full');
  }, 50);
});

closeBtn.addEventListener('click', () => {
  menuPanel.classList.add('translate-x-full');
  setTimeout(() => {
    menuOverlay.classList.add('hidden');
  }, 500);
});

menuOverlay.addEventListener('click', (e) => {
  if (e.target === menuOverlay) {
    menuPanel.classList.add('translate-x-full');
    setTimeout(() => {
      menuOverlay.classList.add('hidden');
    }, 500);
  }
});
// script.js
const elements = document.querySelectorAll("[data-animate]");
window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if(rect < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
});

// Animate on scroll
const element = document.querySelectorAll("[data-animate]");
window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
});

const music = document.getElementById('bg-music');
const btn = document.getElementById('musicBtn');

btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    btn.classList.add('playing');
  } else {
    music.pause();
    btn.classList.remove('playing');
  }
});

// Optional: start muted for autoplay safety
music.muted = true;
music.play().catch(() => {
  // Autoplay blocked, user must click
});

const music =
document.getElementById('bg-music');
const button =

document.getElementById('musicBtn');
btn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});