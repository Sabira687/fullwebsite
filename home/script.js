$(document).ready(function () {
    $('.stats-box').css('opacity', 0);

    $(window).on('scroll', function () {
        const boxTop = $('.stats-box').offset().top;
        const winTop = $(window).scrollTop();
        const winHeight = $(window).height();

        if (boxTop < winTop + winHeight - 100) {
            $('.stats-box').animate({ opacity: 1 }, 1000);
        }
    });
});