$(function(){
    $('.main-title').typoShadow();

    //===========workの説明文の切り替え=====================

    $('.work-icon').click(function(event) {
        event.preventDefault();

        if ($(this).hasClass('picked')) {
            returun;
        }

        $('.picked').removeClass('picked');
        $(this).addClass('picked');

        $('.work-description').hide();
        $($(this).children().attr('href')).show();
    });


    //===========メインコンテンツの場所までスライド=====================

    $('.content').click(function(event) {
        event.preventDefault();

        $("html,body").animate({scrollTop:$($(this).children().attr('href')).offset().top});

    });

    //==========スティッキーヘッダー================================

    $(window).scroll(function() {
        if ($(window).scrollTop() > 599) {
            $('.sticky-header').fadeIn(500);      
        } else {
            $('.sticky-header').fadeOut(300);
        }
    });

    $(window).trigger('scroll');

    $('.sticky-header').click(function() {
        $("html,body").animate({scrollTop:0});
    });


});