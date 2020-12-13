$("body").addClass("not-scroll")
$("html").addClass("not-scroll")

texts = ["Hello", "Cześć", "Привет", "Hola", "Bonjour", "Hallo"]
count = 0;
index = 0;
currentText = "";
letter = "";

(function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);
  })();

$(window).on("load", function(){
  setTimeout(function(){
    $(".preloader").css("opacity","0")
    $(".preloader").css("pointer-events","none")
    $(".typing").css("transform","translateY(-300%)")
    $(".loader").css("transform","translateY(300%)")
    $("body").removeClass("not-scroll")
    $("html").removeClass("not-scroll")
  },3000)
})