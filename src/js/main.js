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

// Shared Scripts
// Tabs
if (document.getElementById('tabs')) {
	document.addEventListener('DOMContentLoaded', function () {
		const tabButtons = document.querySelectorAll('.tab-button')
		const tabContents = document.querySelectorAll('.tab-content')
		const dropdownButton = document.getElementById('dropdownButton')
		const dropdownIcon = document.getElementById('dropdownIcon')
		const dropdownText = document.getElementById('dropdownText')
		const dropdownMenu = document.getElementById('dropdownMenu')
		const dropdownItems = dropdownMenu.querySelectorAll('li')

		function hideAllTabs() {
			tabContents.forEach((content) => content.classList.add('hidden'))
		}

		function showTab(id) {
			document.getElementById(id).classList.remove('hidden')
		}

		function deactivateAllButtons() {
			tabButtons.forEach((button) => button.classList.remove('active'))
		}

		tabButtons.forEach((button) => {
			button.addEventListener('click', function () {
				hideAllTabs()
				showTab(this.dataset.target)
				deactivateAllButtons()
				this.classList.add('active')
			})
		})

		dropdownButton.addEventListener('click', function () {
			dropdownMenu.classList.toggle('hidden')
			dropdownIcon.classList.toggle('rotate-180')
		})

		dropdownItems.forEach((item) => {
			item.addEventListener('click', function () {
				hideAllTabs()
				showTab(this.dataset.target)
				dropdownText.textContent = item.textContent // Update button text
				dropdownMenu.classList.add('hidden')
				dropdownIcon.classList.toggle('rotate-180')
				deactivateAllButtons()
				// Here this line should activate the corresponding desktop tab button if needed
				document
					.querySelector(`.tab-button[data-target="${this.dataset.target}"]`)
					.classList.add('active-tab')
			})
		})

		// Initial load
		hideAllTabs()
		showTab(dropdownItems[0].dataset.target)
		dropdownText.textContent = dropdownItems[0].textContent
		document
			.querySelector(
				`.tab-button[data-target="${dropdownItems[0].dataset.target}"]`,
			)
			.classList.add('active-tab')
	})
}
// Accordion
if (document.getElementById('accordion')) {
	function accordion() {
		const items = document.querySelectorAll('.accordion-item')
		const triggers = document.querySelectorAll('.accordion-trigger')
		const contents = document.querySelectorAll('.accordion-content')
		triggers.forEach((trigger) => {
			if (items[0].classList.contains('active')) {
				contents[0].classList.add('active')
			}
			trigger.addEventListener('click', () => {
				const parent = trigger.parentNode
				if (!parent.classList.contains('active')) {
					// If you want only one to be open at a time, and others to close - UNCOMMENT the code below.
					// items.forEach((item, i) => {
					// 	if (i !== idx && item.classList.contains('active')) {
					// 		item.classList.remove('active')
					// 	}
					// })
					// Open the current accordion item

					parent.classList.add('active')
				} else {
					// Close the current accordion item
					parent.classList.remove('active')
				}
			})
		})
	}
	accordion()
}

// Home Page Scripts Only
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

	// Price Tab SLider 1
	new Swiper('.tab-swiper-1', {
		// Optional parameters
		spaceBetween: 20,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	})
	// Price Tab SLider 2
	new Swiper('.tab-swiper-2', {
		// Optional parameters
		spaceBetween: 20,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	})
	// Price Tab SLider 3
	new Swiper('.tab-swiper-3', {
		// Optional parameters
		spaceBetween: 20,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	})
	// Price Tab SLider 4
	new Swiper('.tab-swiper-4', {
		// Optional parameters
		spaceBetween: 20,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	})
}

// Service Manicure Scripts Only
if (document.getElementById('service-manicure')) {
	// Price SLider
	new Swiper('.tab-swiper-manicure', {
		// Optional parameters
		spaceBetween: 20,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	})

	// Technique SLider
	new Swiper('.manicure-technique-slider', {
		// Optional parameters
		spaceBetween: 20,
		slidesPerView: 1.1,
		breakpoints: {
			440: {
				slidesPerView: 1.5,
			},
			768: {
				slidesPerView: 5,
			},
		},
	})
}
