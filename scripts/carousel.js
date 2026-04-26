const images = [
  "assets/bg-carousel/1.jpg",
  "assets/bg-carousel/2.jpg",
  "assets/bg-carousel/3.jpg",
  "assets/bg-carousel/4.jpg",
  "assets/bg-carousel/5.jpg"
];

const carousel = document.getElementById("carousel");

images.forEach((img, index) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");

  if (index === 0) slide.classList.add("active");

  slide.style.backgroundImage = `url('${img}')`;

  carousel.appendChild(slide);
});

let slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(() => {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
  i = (i + 1) % slides.length;
}, 4000);