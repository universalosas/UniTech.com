
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.onscroll-js-text', { delay: 500, origin: 'left'});
    ScrollReveal().reveal('.js-scrool-animate-head-section', { delay: 200, origin: 'left'});
    ScrollReveal().reveal('.grid-image-and-text-box', { delay: 500, origin: 'right'});
    ScrollReveal().reveal('.scrool-box-animate', { delay: 500, origin: 'left'});
    ScrollReveal().reveal('.image-list-offers', { delay: 500, origin: 'left'});
    ScrollReveal().reveal('.nested-list-container', { delay: 500, origin: 'right'});
    ScrollReveal().reveal('.space-js-container-floating-id-234', { delay: 500, origin: 'top'});
    ScrollReveal().reveal('.space-js-container-floating-id-256', { delay: 500, origin: 'bottom'});
    ScrollReveal().reveal('.space-js-container-floating-id-269', { delay: 500, origin: 'top'});
    ScrollReveal().reveal('.nested-container-stands', { delay: 500, origin: 'left'});
    ScrollReveal().reveal('.nested-shaded-container-stands', { delay: 500, origin: 'bottom'});
    ScrollReveal().reveal('.discription-text-skills', { delay: 500, origin: 'right'});
    ScrollReveal().reveal('.office-management-parent-container', { delay: 500, origin: 'top'});
    ScrollReveal().reveal('.link-footer-bar', { delay: 500, origin: 'left'});
    ScrollReveal().reveal('.social-image-icon', { delay: 500, origin: 'bottom', interval: 200});
    ScrollReveal().reveal('.Abulm-name-heading', { delay: 500, origin: 'left'});
    ScrollReveal().reveal('.quotation', { delay: 500, origin: 'left'});
    ScrollReveal().reveal('.Profile-info', { delay: 500, origin: 'right'});
    ScrollReveal().reveal('.head-text-company-info', { delay: 500, origin: 'left', interval: 200});
    ScrollReveal().reveal('.text-discription-about', { delay: 500, origin: 'top'});
    ScrollReveal().reveal('.about-company-image', { delay: 500, origin: 'bottom'});
    ScrollReveal().reveal('.web-development-image', { delay: 500, origin: 'left'});
    ScrollReveal().reveal('.development-text-container', { delay: 500, origin: 'bottom'});
    ScrollReveal().reveal('.field-intranet-image', { delay: 500, origin: 'left'});
    ScrollReveal().reveal('.web-field-intranet', { delay: 500, origin: 'right'});
    ScrollReveal().reveal('.text-web-development', { delay: 500, origin: 'right'});
    ScrollReveal().reveal('.webs2btn, .websp2image', { delay: 500, origin: 'bottom'});
    ScrollReveal().reveal('.graphic-text-container', { delay: 500, origin: 'left'});
    ScrollReveal().reveal('.js-item1234', { delay: 500, origin: 'top'});
    ScrollReveal().reveal('.js-item125934', { delay: 500, origin: 'bottom'});







const intranetDropdownBtn = document.getElementById('js-dropdown-development-btn')

const dropDownParagraph = document.getElementById('js-intranet-dropdown-paragraph')

intranetDropdownBtn.addEventListener('click', () => {
    dropDownParagraph.style.display = 
    dropDownParagraph.style.display === 'none' ? 'block' : 'none';
});

