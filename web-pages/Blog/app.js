$(window).on("load", function () {
    setTimeout(function(){
        $(".preloader").css("animation","preloadEnd 1.5s ease forwards")
        $(".loader").css("opacity","0")
        $(".loader").css("pointer-events","none")
        $("#chielikiPreloader").css("animation","chelikiShow 0.7s ease forwards 1.5s")
        $("#chielikiPreloader").on("animationend", function(){
            $(".preloader").css("display","none")
            $("nav").css("animation","showNav 0.5s ease forwards")
        })
    }, 2000)
})