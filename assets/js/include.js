
jQuery(document).ready(function($){
    $(".btn-menu").click(function () {
        $(".menu-wrap").toggleClass("active");
    });

    $(".download-else a").on("click", function(e){
        e.preventDefault();
        $(".download-else-icon").css({
            '-webkit-transform' : 'rotate(180deg)',
            '-moz-transform' : 'rotate(180deg)',
            '-ms-transform' : 'rotate(180deg)',
            '-o-transform' : 'rotate(180deg)',
            'transform' : 'rotate(180deg)',
            'zoom' : 1
        });
    });

//bx slider init
    $(".play-stop-button").on("click",function(){
        $(".play-stop-button").addClass("active");
        $(".bx-start").trigger("click");

        if($(this).hasClass("active")){
            $(".bxslider").hover(function(){
                $(".bx-stop").trigger("click");
            },function(){
                $(".bx-start").trigger("click")
            });
        }
    });

    $('.bxslider').bxSlider({
        autoStart: false,
        autoHover: true,
        auto: true,
        autoControls: true,
        controls: false,
        nextText: false,
        prevText: false,
        adaptiveHeightSpeed: 200
    });
});

