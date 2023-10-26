$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        center: true,
        nav: true,
        navText: ["<div class='nav-button owl-prev'><i class='fa-solid fa-chevron-left'></i></div>", "<div class='nav-button owl-next'><i class='fa-solid fa-chevron-right'></i></div>"],
        dots: false
    });        
});