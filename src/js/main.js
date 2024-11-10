// Mobile Menu Burger
function burgerMenu() {
	const menu = document.querySelector('#mobile-menu')
	const burger = document.querySelector('#burger')
	const body = document.querySelector('body')

	burger.addEventListener('click', () => {
		burger.classList.toggle('active')
		menu.classList.toggle('hidden')
		menu.classList.toggle('flex')
		body.classList.toggle('overflow-hidden')
	})

	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98) {
			menu.classList.add('hidden')
			menu.classList.remove('flex')
			burger.classList.remove('active')
			body.classList.remove('overflow-hidden')
		}
	})
}
burgerMenu()
function toggleSubmenu() {
	const submenuTriggers = document.querySelectorAll('.with-submenu')

	submenuTriggers.forEach((trigger) => {
		trigger.addEventListener('click', (e) => {
			if (e.target.classList.contains('submenu-trigger')) {
				trigger.classList.toggle('active')
			}
		})
	})
}
toggleSubmenu()

// Home Page Scripts
if (document.getElementById('home')) {
	// Testimonials slider
	new Swiper('.swiper__testimonials', {
		loop: true,
		navigation: {
			nextEl: '.testimonials__next',
			prevEl: '.testimonials__prev',
		},
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.2,
				spaceBetween: 16,
			},

			// when window width is >= 640px
			640: {
				slidesPerView: 2,
				spaceBetween: 16,
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
		},
	})
}
