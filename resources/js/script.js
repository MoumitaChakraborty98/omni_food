$(document).ready(function() {

    /*----- For The Sticky Navigation ----- */

    $('.js--section-features').waypoint(function(direction){
        if(direction == "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px;'
    });


    /*----- Scroll On Buttons ----- */

    $('.js--scroll-to-plan').click(function() {
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });

    $('.js--scroll-to-start').click(function() {
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });


    /* Navigation Scroll */
    $(function(){
        $('a[href*=#]:not([href=#])').click(function() {

        // Replace Hash from URL
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    
            // Get target content
            var target = $(this.hash);
    
            // Check if clicked elment is current content
            // if(target.offset().top != $('.total-content').offset().top){
    
                // Check for target count
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
    
                    // scroll 
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
    
            return false;
            }
        }   
        });
    });

    /* Animations On Scroll */

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
});