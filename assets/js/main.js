$(window).on('load', function () {
    var $container = $('.portfolio-grid');
    $container.isotope({
        filter: '*',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.grid-sizer'
        },
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.filter button').click(function () {
        $('.filter .current').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
});