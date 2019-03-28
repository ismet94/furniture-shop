// Back To Top Function

Top(document).ready(function() {
    var counter = 230;
    var fading = 520;
    Top(window).scroll(function() {
        if (Top(this).scrollTop() > counter) {
            Top('.ToTop').fadeIn(fading);
        } else {
            Top('.ToTop').fadeOut(fading);
        }
    });

    Top('.ToTop').click(function(event) {
        event.preventDefault();
        Top('html, body').animate({scrollTop: 0}, fading);
        return false;
    })
});

