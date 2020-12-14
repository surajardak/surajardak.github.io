$(document).ready(function(){

    let nav_top_offset =$('.header_area').height()+50;

    function navbarFixed(){
        if($('.header_area').length){
            $(window).scroll(function(){
                let scroll= $(window).scrollTop();
                if(scroll>=nav_top_offset){
                    $('.header_area .main-menu').addClass('navbar_fixed');
                }else{
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }


navbarFixed();


$('.num').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

});



