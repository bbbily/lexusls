$(document).ready(function() {
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    // console.log(wScroll);
    // console.log($(".home").offset().top)
    if (wScroll > $(".home").offset().top && wScroll < $(".journey").offset().top) {

      $(".tire").css({
        // "left": 100 -  (wScroll - $(".home").offset().top) / 7.2  + "%",
        // "transform": "rotate(" + (360 - (wScroll-$(".home").offset().top) / 2) + "deg)"
        "animation-name": "roll"
      })
      $(".shadow").css({
        "animation-name": "shadowMove"
      })
    }
    if (wScroll - 68 >= $(".dna").offset().top && wScroll < 10000) {
      // alert("c")
      $(".dna").css({
        "position": "fixed",
        "top": "-68px",
        "left": "0"
      })
      $(".active").css({
        "position": "fixed"
      })
      $(".dna-mini").css({
        "height": "700px"
      })
      // $(".triangle").css({
      //   "display": "none"
      // })
    }
  })
  var transValue = 0;
  $(".flex-next").on("click", function() {
    transValue -= 800;
    $(".slides").css({
      "transform": "translateX(" + transValue + "px)",
      "transition": "0.6s"
    })
  })
  $(".flex-prev").on("click", function() {
    transValue += 800;
    $(".slides").css({
      "transform": "translateX(" + transValue + "px)",
      "transition": "0.6s"
    })

  })

})
