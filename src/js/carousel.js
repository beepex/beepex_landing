/*------------------------------------- Carousel Start -------------------------------------*/

$(function () {
    $("#owl-example").owlCarousel({
        items: 8,
        loop: true,
        margin: 72,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            1000: {
                items: 8
            },
            768: {
                items: 5
            },
            320: {
                items: 3,
                margin: 50
            },
            0: {
                items: 2
            }
        }
    });
});

/*------------------------------------- Carousel End -------------------------------------*/

