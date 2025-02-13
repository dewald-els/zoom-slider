import "./style.css";

const leftButton = document.querySelector(".left")!;
const rightButton = document.querySelector(".right")!;
const slideContainer = document.querySelector(".slides")!;

leftButton.addEventListener("click", () => {
  const slides = document.querySelectorAll(".slide");
  slideContainer.appendChild(slides[0]);
});

rightButton.addEventListener("click", () => {
  const slides = document.querySelectorAll(".slide");
  slideContainer.prepend(slides[slides.length - 1]);
});
