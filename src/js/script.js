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

    let btnGo = document.querySelectorAll('.delivery__item_btn'),
        btnBack = document.querySelectorAll('.delivery__item_btn-list'),
        itemContent = document.querySelector('.delivery__item_content'),
        list = document.querySelector('.delivery__item_list');

    btnGo.forEach(function(item){
        item.addEventListener('click', function() {
            itemContent.classList.toggle('delivery__item_content-active');
            list.classList.toggle('delivery__item_list-active');
        });
    });

    btnBack.forEach(function(item){
        item.addEventListener('click', function() {
            itemContent.classList.toggle('delivery__item_content-active');
            list.classList.toggle('delivery__item_list-active');
        });
    });

    // btnGo.forEach(function(item){
    //     item.addEventListener('click', function() {
    //         itemContent.forEach(function(i){
    //             i.classList.toggle('delivery__item_content-active');
    //         });
    //         list.forEach(function(i){
    //             i.classList.toggle('delivery__item_list-active');
    //         });
    //     });
    // });

    // btnBack.forEach(function(item){
    //     item.addEventListener('click', function() {
    //         itemContent.forEach(function(i){
    //             i.classList.toggle('delivery__item_content-active');
    //         });
    //         list.forEach(function(i){
    //             i.classList.toggle('delivery__item_list-active');
    //         });
    //     });
    // });
});