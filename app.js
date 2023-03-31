//-- ACTIVACIÓN DEL "SCROLL-BG-HEADER" index.html --// 
const bgHeader = document.querySelector('.header');

const headerHeight = bgHeader.offsetHeight;

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if(scrollPos > headerHeight) {
        bgHeader.classList.add('active');
        bgHeader.classList.remove('transparent');
    } else {
        bgHeader.classList.remove('active');
        bgHeader.classList.add('transparent');
    }
});
//-- "SCROLL-BG-HEADER" index.html - END --// 
