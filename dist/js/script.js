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

// Jquery
$(document).ready(function(){
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.delivery__item_content').eq(i).toggleClass('delivery__item_content-active');
                $('.delivery__item_list').eq(i).toggleClass('delivery__item_list-active');
            })
        });
    };

    toggleSlide('.delivery__item_btn');
    toggleSlide('.delivery__item_btn-list');

// Слайдер
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/right.svg" alt="right"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/left.svg" alt="left"></button>',
    }); 
    
    $('input[name=phone]').mask("+7 (999) 999-9999");
});