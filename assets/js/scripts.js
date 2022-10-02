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
            url: 'https://124.223.105.144/tougao.htm',
            data: postdata,
            dataType: 'text',
            success: function(res) {
                if (res) {
                    alert(res)
                    $("form")[0].reset();
                }
            }
        });
    });


});