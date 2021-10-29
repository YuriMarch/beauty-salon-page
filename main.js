const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
	element.addEventListener("click", function () {
		nav.classList.toggle("show");
	});
}

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
	link.addEventListener("click", function () {
		nav.classList.remove("show");
	});
}

function changeHeaderWhenScroll() {
	const header = document.querySelector("#header");
	const navHeight = header.offsetHeight;
	if (window.scrollY >= navHeight) {
		header.classList.add("scroll");
	} else {
		header.classList.remove("scroll");
	}
}

// CAROUSEL //

const swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	pagination: {
		el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
	breakpoints: {
		768: {
			slidesPerView: 2,
			setWrapperSize: true,
		},
	},
});

// Scroll Reveal shows the elements when scrolling the page

const scrollReveal = ScrollReveal({
	origin: "top",
	distance: "30px",
	duration: 700,
	reset: true,
});

scrollReveal.reveal(
	`#home .image, #home .text, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links, footer .bradn, footer .social`,
	{ interval: 100 }
);

// Back to top Button

function backToTop() {
	const backToTopButton = document.querySelector(".back-to-top");
	const backToTopHeight = home.offsetHeight;

	if (window.scrollY >= backToTopHeight) {
		backToTopButton.classList.add("show");
	} else {
		backToTopButton.classList.remove("show");
	}
}

window.addEventListener("scroll", function () {
	changeHeaderWhenScroll();
	backToTop();
});
