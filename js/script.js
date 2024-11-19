// Canvas Animation: Balloons
const canvas = document.getElementById("birthdayCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balloons = [];

function createBalloon() {
  const x = Math.random() * canvas.width;
  const y = canvas.height + 20;
  const size = Math.random() * 30 + 20;
  const speed = Math.random() * 2 + 1;
  const color = `hsl(${Math.random() * 360}, 70%, 70%)`;

  balloons.push({ x, y, size, speed, color });
}

function updateBalloons() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  balloons.forEach((balloon, index) => {
    balloon.y -= balloon.speed;
    ctx.beginPath();
    ctx.arc(balloon.x, balloon.y, balloon.size, 0, Math.PI * 2);
    ctx.fillStyle = balloon.color;
    ctx.fill();

    if (balloon.y + balloon.size < 0) {
      balloons.splice(index, 1);
    }
  });

  requestAnimationFrame(updateBalloons);
}

setInterval(createBalloon, 200);
updateBalloons();

// Slideshow and Modal
const modal = document.getElementById("slideshowModal");
const surpriseButton = document.getElementById("surpriseButton");
const closeButton = document.querySelector(".close-button");
const slides = document.querySelectorAll(".slide");
const music = document.getElementById("birthdayMusic");

let currentSlide = 0;

surpriseButton.addEventListener("click", () => {
  modal.style.display = "flex";
  slides[currentSlide].classList.add("active");
  music.play();
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  slides[currentSlide].classList.remove("active");
  currentSlide = 0;
  music.pause();
});

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 3000);
