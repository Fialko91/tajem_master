$(document).ready(function () {
    $(".bc_top_img, .bc_team_img").slick({
        dots: true,
        autoplay: true,
        speed: 3000

    });

    function wRezise() {
        $(".bc_top_item, .bc_team_img .reviews_container").css("height", $(window).height());
    };
    $(window).resize(function () {
        wRezise()
    });

//   -------------reviews----------

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        // dots: true,
        centerMode: true,
        focusOnSelect: true
    });
//  ---------------mnu---------------

    $(".toolbar_menu_icon").click(function () {
        $(this).toggleClass("on");
        $('.toolbar_items').slideToggle(500);
    });
    //
    $(".toolbar_item").click(function () {
        $(".toolbar_menu_icon").removeClass("on");
        // $('.toolbar_block').slideToggle(500);
    });


    $(".toolbar_item").click(function () {
        $(this).removeClass("on");
        $('.toolbar_items').slideToggle(500);
    });

    // $(window).click(function() {
    //    $(".toolbar_block").removeClass("on");
    // });

    $(window).resize(function() {
        var wid = $(window).width();
        if (wid > 992) {
            $(".toolbar_menu_icon").removeClass('on');
        }
    });



    $(document).ready(function(){
        $(".toolbar_items").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

//---------------------- button top ------------

    $(document).ready(function(){

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    });

});
