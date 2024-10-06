class CarrinhoBotao {
	constructor(CarrinhoFiltro) {
		this.CarrinhoFiltro = document.querySelector(CarrinhoFiltro);
		this.activeClass = "active";
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.CarrinhoFiltro.classList.toggle(this.activeClass);
	}

	addClickEvent() {
		this.CarrinhoFiltro.addEventListener("click", this.handleClick);
	}

	init() {
		if (this.CarrinhoFiltro) {
			this.addClickEvent();
		}
		return this;
	}
}

const carrinhoBotao = new CarrinhoBotao(".botoes__carrinho", ".lista__carrinho");
carrinhoBotao.init();

const carrinho = document.querySelector(".cabecalho__nav__carrinho");
const botaoCarrinho = document.querySelector(".botao__carrinho");

carrinho.addEventListener("click", () => botaoCarrinho.classList.toggle("active"));

// document.addEventListener('DOMContentLoaded', function() {
//     const cartItems = document.querySelectorAll('.cart-item');

//     cartItems.forEach(function(cartItem) {
//         const minusBtn = cartItem.querySelector('.minus-btn');
//         const plusBtn = cartItem.querySelector('.plus-btn');
//         const quantitySpan = cartItem.querySelector('.item-quantity');

//         minusBtn.addEventListener('click', function() {
//             let currentQuantity = parseInt(quantitySpan.textContent);
//             if (currentQuantity > 1) {
//                 quantitySpan.textContent = currentQuantity - 1;
//             }
//         });

//         plusBtn.addEventListener('click', function() {
//             let currentQuantity = parseInt(quantitySpan.textContent);
//             if (currentQuantity < 9) {
//                 quantitySpan.textContent = currentQuantity + 1;
//             }
//         });
//     });
// });