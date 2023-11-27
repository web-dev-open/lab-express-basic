$(document).ready(function() {
    $('.logo-slider').on('scroll', function() {
        $(this).stop().animate({ scrollLeft: $(this).scrollLeft() + 150 }, 2000);
    });
});
