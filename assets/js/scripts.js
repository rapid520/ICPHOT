jQuery(document).ready(function() {

    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");

    $('#top-navbar-1').on('shown.bs.collapse', function() {
        $.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function() {
        $.backstretch("resize");
    });

    /*
	    Contact form
	*/
    $('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function() {
        $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
    });
    $('.contact-form form').submit(function(e) {
        e.preventDefault();
        $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('input-error');
        var postdata = $('.contact-form form').serialize();
        $.ajax({
            type: 'POST',
            url: 'http://124.223.105.144/tougao.htm',
            data: postdata,
            dataType: 'json',
            success: function(json) {
                if (json) {
                    alert("We have received your message and will check it as soon as possible")
                    $("form")[0].reset();
                }
            }
        });
    });


});