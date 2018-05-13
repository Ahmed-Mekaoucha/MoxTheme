$(document).ready(function () {
    'use strict';
    /*----------------------------------------------------------*/
    //                         Variables                        //
    /*----------------------------------------------------------*/
    var divHeight = 0;

    /*----------------------------------------------------------*/
    // Make The Position of the div in the center of the slider //
    /*----------------------------------------------------------*/
    $('.fa-search').on('click', function () {
        $('.search-form').slideToggle(300);
    });
    /*----------------------------------------------------------*/
    // Make The Position of the div in the center of the slider //
    /*----------------------------------------------------------*/
    $(window).resize(function () {
        $('.slider > div > div').css({
            marginTop: - $('.slider > div > div').height() / 2,
            marginLeft: - $('.slider > div > div').width() / 2
        });
        $('.slider > div > ul').css({
            marginLeft: - $('.slider > div > ul').width() / 2
        });
    });
    $('.slider > div > div').css({
        marginTop: - $('.slider > div > div').height() / 2,
        marginLeft: - $('.slider > div > div').width() / 2
    });
    $('.slider > div > ul').css({
        marginLeft: - $('.slider > div > ul').width() / 2
    });
    /*----------------------------------------------------------*/
    //                  Simple slider images                    //
    /*----------------------------------------------------------*/
    $('.slider > div > ul li').each(function () {
        $(this).on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.slider > div > img').attr('src', $(this).data('src'));
        });
    });

    /*---------------------------------------------------------------*/
    //Make The Height O f The Products Container div the same height //
    /*---------------------------------------------------------------*/
    $('.lpa .container > div').each(function () {
        if ($(this).height() > divHeight) {
            divHeight = $(this).height();
        }
    });
    $('.lpa .container > div').css({
      minHeight: divHeight
    });
});
