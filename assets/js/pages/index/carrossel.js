if (window.matchMedia("(max-width: 1024px)").matches) {
	const swiper = new Swiper(".swiper", {
		spaceBetween: 25,
		slidesPerView: 2,
		centeredSlides: true,
		loop: true,
		pagination: {
			clickable: true,
			el: ".swiper-pagination",
			type: "bullets",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
} else {
	const swiper = new Swiper(".swiper", {
		spaceBetween: 25,
		slidesPerView: 2,
		centeredSlides: true,
		loop: true,
		pagination: {
			clickable: true,
			el: ".swiper-pagination",
			type: "bullets",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
}

// const swiper = new Swiper(".swiper", {
// 	spaceBetween: 20,
// 	slidesPerView: 1.5,
// 	centeredSlides: true,
// 	loop: false,
// 	pagination: {
//		clickable: true,
// 		el: ".swiper-pagination",
// 		type: "bullets",
// 	},
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// })