var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var maxWindowWidth = 768;
if (windowWidth >= maxWindowWidth) {

    document.querySelector('#nav-toggle').addEventListener('change', function () {
    const content = document.querySelector('.main-container');
    content.style.transition = 'width 0.5s';
    if (this.checked) {
        content.style.width = 'calc(100% - 120px)';
        content.style.left = '120px';
    } else {
        content.style.width = 'calc(100% - 306px)';
        content.style.left = '306px';
    }
    });
}

$(document).ready(function() {
    $('.main-container').magnificPopup({
        delegate: 'img',
        type: 'image'
      });
});

const menu = document.querySelector('.content-submenu');
const menuLinks = document.querySelectorAll('.content-submenu a[href^="#"]')

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry =>{
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.content-submenu a[href="#${id}"]`);
        if(entry.isIntersecting){
            document.querySelector('.content-submenu .active').classList.remove('active');
            menuLink.classList.add('active');
        }
    });
}, {rootMargin: "-30% 0px -70% 0px"})

menuLinks.forEach(menuLink =>{
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash)
    if(target){
        observer.observe(target);
    }
})