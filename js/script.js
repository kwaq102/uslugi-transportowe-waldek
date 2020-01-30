$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    // nawigacja
    const $nav = $('nav');

    // pobranie i określenie wysokości elementu z klasą 'about'
    const $about = $('.about');
    const aboutFromTop = $about.offset().top;
    const aboutHeight = $about.outerHeight();

    // pobranie i określenie wysokości elementu z klasą 'offer'
    const $offer = $('.offer');
    const offerFromTop = $offer.offset().top;
    const offerHeight = $offer.outerHeight();

    // elementy które mają dostać klasę active
    const $textAbout = $('.text');
    const $imgAbout = $('.about img');

    // .offer p ; .offer img
    const $textOffer = $('.offer p');
    const $imgOffer = $('.offer img');

    // why-me
    const $catalog = $('.catalog1');
    const catalogHeight = $catalog.outerHeight();
    const catalogFromTop = $catalog.offset().top;


    if (scrollValue > aboutFromTop + aboutHeight / 2 - windowHeight) {
        $textAbout.addClass('active');
        $imgAbout.addClass('active');
    }

    if (scrollValue > offerFromTop + offerHeight / 2 - windowHeight) {
        $textOffer.addClass('active');
        $imgOffer.addClass('active');
    }

    if (scrollValue > windowHeight / 2) {
        // console.log('arrow')
        $('.arrow').addClass('arrow-active');
    } else {
        $('.arrow').removeClass('arrow-active');
    }

    if (scrollValue > windowHeight / 8) {
        // console.log('w porządku');
        $nav.addClass('hidden');
    } else {
        $nav.removeClass('hidden');
    }

    if (scrollValue > catalogFromTop + catalogHeight - windowHeight) {
        $catalog.addClass('active-catalog');
    }



})



// burger

const hamburger = document.querySelector(".hamburger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const navHamburger = document.querySelector("div.nav");
const navHamburgerA = document.querySelectorAll("div.nav a");

// const column = document.querySelector("aside");

hamburger.addEventListener("click", function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    navHamburger.classList.toggle("show");

    // navHamburgerA.console.log("działa");
})