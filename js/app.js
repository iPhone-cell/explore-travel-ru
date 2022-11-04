// Burger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__right");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))

// Slider
let slider = $('#reviewsSlider');

slider.slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
});