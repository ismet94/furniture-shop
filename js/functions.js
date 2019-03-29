// Back To Top Function

jQuery(document).ready(function() {
    var counter = 230;
    var fading = 520;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > counter) {
            jQuery('.ToTop').fadeIn(fading);
        } else {
            jQuery('.ToTop').fadeOut(fading);
        }
    });

    jQuery('.ToTop').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, fading);
        return false;
    })
});

