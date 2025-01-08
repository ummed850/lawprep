$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 6,
            center: true,
        },
    }
})


AOS.init();