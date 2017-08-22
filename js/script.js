$(document).ready(function() {

    var playCount = 0;
    $('.play-btn').click(function(e) {
        e.preventDefault();
        playCount++;
        if (playCount % 2 == 1) {
            $('.play-action').text('Click to close the video');
        } else {
            $('.play-action').text('Click to play the video');
        }
        $('.youtube-video').toggle('slow');
        $(this).find('.icon').toggleClass('icon-music-play-button');
        $(this).find('.icon').toggleClass('icon-arrows-circle-remove');


    })

    $('.smooth-scroll a, a.smooth-scroll').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });

    $('.active-scroll').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: ':not(.external)'
    });

    // Owl carousel
    $('.owl-carousel').owlCarousel({
        // autoWidth:true,
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
    });

    $('.more').on('click', function (event) {
        event.preventDefault();

        var href = $(this).attr('href') + ' .single-project',
            portfolioList = $('#portfolio-list'),
            content = $('#loaded-content');

        portfolioList.animate({
            'marginLeft': '-120%'
        }, {
            duration: 400,
            queue: false
        });
        portfolioList.fadeOut(400);
        setTimeout(function () {
            content.load(href, function () {
                $('#loaded-content meta').remove();
                content.fadeIn(600);
                $('#back-button').fadeIn(600).css({
                    display: 'block',
                    margin: '100px auto',
                });
                $('#portfolio .container').css('min-height','1000px');
            });
        }, 800);

    });

    $('#back-button').on('click', function (event) {
        event.preventDefault();

        var portfolioList = $('#portfolio-list')
        content = $('#loaded-content');

        content.fadeOut(400);
        $('#back-button').fadeOut(400);
        setTimeout(function () {
            portfolioList.animate({
                'marginLeft': '0'
            }, {
                duration: 400,
                queue: false
            });
            portfolioList.fadeIn(600);
            $('#portfolio .container').css('min-height','1385px');
        }, 800);
    });

});