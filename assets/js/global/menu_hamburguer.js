class MobileNavbar {
	constructor(mobileMenu) {
		this.mobileMenu = document.querySelector(mobileMenu);
		this.activeClass = "active";
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.mobileMenu.classList.toggle(this.activeClass);
	}

	addClickEvent() {
		this.mobileMenu.addEventListener("click", this.handleClick);
	}

	init() {
		if (this.mobileMenu) {
			this.addClickEvent();
		}
		return this;
	}
}

const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-lista");
mobileNavbar.init();

const hamburger = document.querySelector(".cabecalho__nav__menu_hamburguer");
const nav = document.querySelector(".cabecalho__nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));