$(document).ready(function () {
    /************************************************
    HOME
    ************************************************/
    $('.pantaportfolio').hide();
    $('.pantaabout').hide();
    $('.pantacontact').hide();
    $('.pantaskills').hide();
    $('.titulos').addClass('animated fadeInUp');
    setTimeout(function () {
        $('.about').css('opacity', '1');
        $('.about').addClass('animated fadeInRight');
    }, 500);
    setTimeout(function () {
        $('.skills').css('opacity', '1');
        $('.skills').addClass('animated fadeInRight');
    }, 600);
    setTimeout(function () {
        $('.portfo').css('opacity', '1');
        $('.portfo').addClass('animated fadeInRight');
        $('.homep').removeClass('fadeInRight').addClass('animated fadeInLeft');
        $('.homea').addClass('animated fadeInLeft');
        $('.homec').addClass('animated fadeInLeft');
        $('.homes').addClass('animated fadeInLeft');
    }, 700);
    setTimeout(function () {
        $('.contact').css('opacity', '1');
        $('.contact').addClass('animated fadeInRight');
    }, 800);
	setTimeout(function () {
        $('.newlink').css('opacity', '1');
        $('.newlink').addClass('animated fadeInRight');
    }, 900);


    $('.about').on('click', function () {
        $(".mail").animate({
            opacity: "0",
        }, 300);
        $("body").animate({
            backgroundColor: "#FEDCDF",
        }, 500);

        $('#home').fadeOut('fast', function () {
            $('.pantaabout').fadeIn('fast');

        });
    });


    $('.skills').on('click', function () {
        $(".mail").animate({
            opacity: "0",
        }, 300);
        $("body").animate({
            backgroundColor: "#577590",
        }, 500);

        $('#home').fadeOut('fast', function () {
            $('.pantaskills').fadeIn('fast');

        });
    });



    $('.portfo').on('click', function () {
        $(".mail").animate({
            opacity: "0",
        }, 300);
        $("body").animate({
            backgroundColor: "#087F8C",
        }, 500);

        $('#home').fadeOut('fast', function () {
            $('.pantaportfolio').fadeIn('fast');

        });
    });
	
	
	$('.newsite').on('click', function () {
    });



    $('.contact').on('click', function () {

        $(".mail").animate({
            opacity: "1",
        }, 500);
    });

    /************************************************
    SKILLS
    ************************************************/
    $('.homes').on('click', function () {
        $("body").animate({
            backgroundColor: "#132398",
        }, 500);

        $('.pantaskills').fadeOut('fast', function () {
            $('#home').fadeIn('fast');
        });
    });

    $(".skicon").on('click',function () {
        $(this).next().fadeIn("fast");
        $(this).next().css("display", "flex");
    });
    $(".skdata").on('click',function () {
        $(this).fadeOut("fast");
    });
    
    /************************************************
    PORTFOLIO
    ************************************************/

    var wndWidth = $(window).width();
    if (wndWidth > 414) {
        $(".tbox").mouseover(function () {
            $(this).find('div').fadeIn("fast");
        });
        $(".tbox").mouseleave(function () {
            $(this).find('div').fadeOut("fast");
        });
    }

    $('.homep').on('click', function () {
        $("body").animate({
            backgroundColor: "#132398",
        }, 500);

        $('.pantaportfolio').fadeOut('fast', function () {
            $('#home').fadeIn('fast');
        });
    });

    /************************************************
    ABOUT
    ************************************************/
    $('.homea').on('click', function () {
        $("body").animate({
            backgroundColor: "#132398",
        }, 500);

        $('.pantaabout').fadeOut('fast', function () {
            $('#home').fadeIn('fast');
        });
    });


});