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


});