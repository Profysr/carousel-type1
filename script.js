let prevBtn = document.querySelector(".prevBtn"),
  nextBtn = document.querySelector(".nextBtn"),
  slider = document.querySelector(".slider"),
  timeBar = document.querySelector(".time"),
  slides = document.querySelectorAll(".slide");

runTimeBar();

nextBtn.addEventListener("click", function () {
  slides = document.querySelectorAll(".slide");
  slider.appendChild(slides[0]);
  runTimeBar();
});
prevBtn.addEventListener("click", function () {
  slides = document.querySelectorAll(".slide");
  slider.prepend(slides[slides.length - 1]);
  runTimeBar();
});

function runTimeBar() {
  timeBar.classList.add("active");
  timeout = setTimeout(() => {
    timeBar.classList.remove("active");
  }, 3000);
}
