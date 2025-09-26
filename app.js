// SLIDER INIT

$('.slider').slick({
    dots: true,
    prevArrow:'<button type="button" class="my-prev"></button>',
    nextArrow: '<button type="button" class="my-next"></button>'
});


// MOBILE MENU

let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')


burger.addEventListener('click', function() {
    menu.classList.toggle('open')
})