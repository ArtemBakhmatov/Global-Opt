window.addEventListener('DOMContentLoaded', function() {
    let hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__menu-item');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(function(item) {
        item.addEventListener('click', function() {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    });
});