$("body").addClass("not-scroll")
$("html").addClass("not-scroll")

$(window).on("load", function(){
    ytBlock = $(".yt-block")
    ytTitle = $(".preloader h1")
    loader = $(".loader")
    arrowRight = $(".arrow-right")

    setTimeout(function(){
        loader.css("animation","load4 1.3s infinite linear, 0.5s ease hide_element forwards")
        ytBlock.css("animation","1.5s ease make_it_small forwards")
        ytBlock.on("animationend",function(){
            ytTitle.css("animation","0.5s ease text_move_right forwards")
            arrowRight.css("animation","0.5s ease show_element forwards")
            console.log("HELLO");
            setTimeout(function(){
                    $(".yt-navbar").css("transform","translateY(0%)")
                    $(".side-bar").css("transform","translateX(0%)")
                    $(".preloader").css("transform","translateX(100%)")
                    $(".videos").css("opacity","1")
                    $("body").removeClass("not-scroll")
                    $("html").removeClass("not-scroll")
            },800)
        })
    },1500)
})