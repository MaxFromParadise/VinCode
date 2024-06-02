const menuButton = document.querySelector('.header__burger'),
	menu = document.querySelector('.header__list');
let isMenuOpen = false;
menuButton.addEventListener('click', () => {
	isMenuOpen = !isMenuOpen;
	if (isMenuOpen) {
		menu.style.left = '0';
	} else {
		menu.style.left = '-200%';
	}
});
