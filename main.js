$(document).ready(function() {

  $(".home").find("img").on("click", function() {
    $("body").animate({scrollTop: 720}, 1000);
  })



///////////////section journey ///////////////////////


///////////slides1 imgage animation///////////////////
  var transValue = 0;

  $(".flex-next").on("click", function() {
    $(".tire").slideUp(500, function() {})
    $(".shadow").hide();
    $(".flex-prev").show();

    if (transValue == -4800)
      $("body").animate({scrollTop: 1440}, 1000);
    else {
    transValue -= 800;
      $(".slides").css({
        "transform": "translateX(" + transValue + "px)",
        "transition": "0.6s"
      })
    }

    $("#timeline-bar-current").css({
      "width": 68 * transValue / (-800) + 14 + "px"
    })

    // $(".slides").find("img:eq(" + (transValue/800 * (-1) - 1) + ")").css({
    //   "top": "80px",
    //   "right": "-616px",
    //   "opacity": "0",
    //   "transition": "0s"
    // })
    $(".slides img").css({
      "top": "80px",
      "right": "-616px",
      "opacity": "0",
      "transition": "0s"
    })

    setTimeout(function() {
      $(".slides").find("img:eq(" + (transValue/800 * (-1) - 1) + ")").css({
        "top": "140px",
        "right": "0",
        "opacity": "1",
        "transition": "1s"
      })
    }, 500)
  })


  $(".flex-prev").on("click", function() {
    if (transValue == -800) {
      $(".tire").slideDown(500, function() {
      })
      $(".shadow").show();
      $(this).hide();
    }

    transValue += 800;
    $(".slides").css({
      "transform": "translateX(" + transValue + "px)",
      "transition": "0.6s"
    })

    if (transValue != 0)
      $("#timeline-bar-current").css({
          "width": 68 * transValue / (-800) + 14 + "px"
      })
    else
      $("#timeline-bar-current").css({
          "width": "41px"
      })
    $(".slides img").css({
      "top": "80px",
      "right": "-616px",
      "opacity": "0",
      "transition": "0s"
    })
    // $(".slides").find("img:eq(" + (transValue/800 * (-1) - 1) + ")").css({
    //   "top": "80px",
    //   "right": "-616px",
    //   "opacity": "0",
    //   "transition": "0s"
    // })

    setTimeout(function() {
      $(".slides").find("img:eq(" + (transValue/800 * (-1) - 1) + ")").css({
        "top": "140px",
        "right": "0",
        "opacity": "1",
        "transition": "1s"
      })
    }, 500)
  })



////////////////timeline controll////////////////////
  $(".y").on("click", function() {
    transValue = ($(".y").index(this)+1) * (-800);
    $("#timeline-bar-current").css({
      "width": 68 * ($(".y").index(this)+1) + 14 + "px"
    })

    $(".tire").slideUp(500, function() {})
    $(".shadow").hide();
    $(".flex-prev").show();

    $(".slides").css({
      "transform": "translateX(" + transValue + "px)",
      "transition": "0.6s"
    })
    $(".slides img").css({
      "top": "80px",
      "right": "-616px",
      "opacity": "0",
      "transition": "0s"
    })
    // $(".slides").find("img:eq(" + $(".y").index(this) + ")").css({
    //   "top": "80px",
    //   "right": "-616px",
    //   "opacity": "0",
    //   "transition": "0s"
    // })

    setTimeout(function() {
      $(".slides").find("img:eq(" + (transValue/800 * (-1) - 1) + ")").css({
        "top": "140px",
        "right": "0",
        "opacity": "1",
        "transition": "1s"
      })
    }, 500)
  })

  $(window).scroll(function() {
    window.requestAnimationFrame(parallax);

  })


  function parallax() {
    var wScroll = $(this).scrollTop();
    console.log(wScroll)



    ////////////tire ////////////////
    // tire animation home top value 0, journey top value 720
    if (wScroll >= $(".home").offset().top + 350 && wScroll <= $(".journey").offset().top) {
      $(".tire").css({
        "animation-name": "roll"
      })
      $(".shadow").css({
        "animation-name": "shadowMove"
      })

      $(".timeline-wrapper").css({
        "opacity": (wScroll - 350) / 370 + ""
      })
      $(".flexslider1").css({
        "opacity": (wScroll - 350) / 370 + "",
        "top": 640 - (wScroll - 350) / 370 * 640 + 100 + "px"
      })
    }

    if (wScroll < 350) {
      $(".flexslider1").css({
        "opacity": "0"
      })
    }
    if (wScroll > $(".journey").offset().top) {
      $(".flexslider1").css({
        "opacity": "1",
        "top": "100px"
      })
      $(".timeline-wrapper").css({
        "opacity": "1",
        "top": "640px"
      })
    }

    if (wScroll > 1440 || wScroll == 0) {
      $(".tire").css({
        "animation-name": "none"
      })
      $(".shadow").css({
        "animation-name": "none"
      })
    }



    /////////////////dna /////////////////////
    // get the position of dnaTop, dnatop value 1440, thumbnail1Top = 1440 + 720 + 2000 = 4160
    var dnaTop = $(".dna").offset().top
    var thumbnail1Top = $(".dna-thumbnail1").offset().top
    // dna fixed animation
    if (wScroll => 1440 && wScroll <= thumbnail1Top) {
      $(".dna").css({
        "position": "fixed",
        "top": "-72px",
        "left": "0"
      })
      $(".active").css({
        "position": "fixed"
      })
      $(".dna-mini").css({
        "opacity": "1",
        "height": (wScroll - 1440) * 0.3 + "px"
      })
      // set 8 different events, each event last 250
      if (wScroll > 1440 && wScroll <= 1690) {
        $(".firsth1").css({
          "opacity": 0.5 / 250 * (wScroll - 1440) + "",
          "left": 250 - (wScroll - 1440) + 42 + "px"
        })
        $("#mini5").css({
          "opacity": (wScroll - 1440) / 250 + ""
        })
      }
    }
    // 4160 at thumbnail1Top, set dna position back to absolute
    if (wScroll > thumbnail1Top || wScroll < 1440) {
      $(".active").css({
        "position": "absolute",
      })
      $(".active").find("*").css({
        "opacity": "0"
      })
      $(".dna").css({
        "position": "absolute",
        "top": "1440px"
      })
    }



    //////////////////////dna cells //////////////////////
    //dna cells top 3 animation, thumbnai1top heigth 836. 4160 - 836/2 = 3324+418 = 3742
    if (wScroll >= 3742 && wScroll < 4160) {
      $("#thumbnail1").css({
        "opacity": (wScroll - 3742) / 418,
        "top": "505px",
        "transform": "matrix(1, 0,"+(0.3-(wScroll-3742)/418*0.3)+",1,"+(200-(wScroll-3742)/418*200)+",0)"
      })
      $("#thumbnail1-shadow").css({
        "opacity": (wScroll - 3742) / 418,
        "top": "505px",
        "transform": "matrix(1, 0,"+(0.3-(wScroll-3742)/418*0.3)+",1,"+(200-(wScroll-3742)/418*200)+",0)"
      })
    }
    /////////dna cells visible and invisible
    if (wScroll >= 3742 && wScroll <= 7000) {
      $("#thumbnail1").css({
        "display": "block"
      })
      $("#thumbnail1-shadow").css({
        "display": "block"
      })
    }
    if (wScroll < 3742 || wScroll > 7000) {
      $("#thumbnail1").css({
        "display": "none"
      })
      $("#thumbnail1-shadow").css({
        "display": "none"
      })
    }
    //dna cells move animation, thumbnail1top value 4160
    if (wScroll >= 4160 && wScroll < 5164) {
      $("#thumbnail1").css({
        "transform": "matrix(1, "+(0-(wScroll-4160)/996*0.2) +","+(0-(wScroll-4160)/996*0.3)+",1,"+((wScroll-4160)/996*100)+",0)",
        "top": (505 - wScroll + 4160) + "px"
      })
      $("#thumbnail1-shadow").css({
        "transform": "matrix(1, "+(0-(wScroll-4160)/996*0.2) +","+(0-(wScroll-4160)/996*0.3)+",1,"+((wScroll-4160)/996*200)+",0)",
        "top": (505 - wScroll + 4160) + "px"
      })
      $(".dna-thumbnail2").css({
        "position": "absolute",
        "top": "5164px",

      })
    }
    //dna cells stop moving, thumbnail2top value 5164
    //change dna-thumbnail2 position
    if (wScroll >= 5164 && wScroll <= 7000) {
      $(".dna-thumbnail2").css({
        "position": "fixed",
        "top": "0"
      })
      $("#thumbnail1").css({
        "transform": "matrix(1, "+((wScroll-5164)/1836*0.5-0.2) +","+((wScroll-5164)/1836*0.6-0.3)+",1,100,0)",
        "top": "-500px"
      })
      $("#thumbnail1-shadow").css({
        "transform": "matrix(1, "+((wScroll-5164)/1836*0.5-0.2) +","+((wScroll-5164)/1836*0.6-0.3)+",1,"+(200-(wScroll-5164)/1836*100)+",0)",
        "top": "-500px"
      })
    }



    ////////////////////////////technologies//////////////////////////////////
    // technologies value 7000 , smoothness value 8000
    //top cells animation
    if (wScroll >= 6660 && wScroll <= 7000) {
      $(".dna-thumbnail2").css({
        "position": "absolute",
        "top": "5164px"
      })
      $("#thumbnail2").css({
        "opacity": (wScroll - 6660) / 340,
        "top": "505px",
        "transform": "matrix(1, 0,"+(0.3-(wScroll-6660)/340*0.3)+",1,"+(200-(wScroll-6660)/340*200)+",0)"
      })
      $("#thumbnail2-shadow").css({
        "opacity": (wScroll - 6660) / 340,
        "top": "505px",
        "transform": "matrix(1, 0,"+(0.3-(wScroll-6660)/340*0.3)+",1,"+(200-(wScroll-6660)/340*200)+",0)"
      })
    }
    //cells visible and invisible
    if (wScroll >= 6660 && wScroll <= 9700) {
      $("#thumbnail2").css({
        "display": "block"
      })
      $("#thumbnail2-shadow").css({
        "display": "block"
      })
    }
    if (wScroll < 6660 || wScroll > 9700) {
      $("#thumbnail2").css({
        "display": "none"
      })
      $("#thumbnail2-shadow").css({
        "display": "none"
      })
    }
    //dna cells move animation, thumbnail2top value 7000
    if (wScroll >= 7000 && wScroll < 7850) {
      $("#thumbnail2").css({
        "transform": "matrix(1, "+(0-(wScroll-7000)/1000*0.2) +","+(0-(wScroll-7000)/1000*0.3)+",1,"+((wScroll-7000)/1000*100)+",0)",
        "top": (505 - wScroll + 7000) + "px"
      })
      $("#thumbnail2-shadow").css({
        "transform": "matrix(1, "+(0-(wScroll-7000)/1000*0.2) +","+(0-(wScroll-7000)/1000*0.3)+",1,"+((wScroll-7000)/1000*200)+",0)",
        "top": (505 - wScroll + 7000) + "px"
      })
      $(".dna-thumbnail2").css({
        "position": "absolute",
        "top": "5164px"
      })
      $(".smoothness").css({
        "position": "absolute",
        "top": "7682px"
      })
    }
    //dna cells stop moving, thumbnail2top value 5164
    //change dna-thumbnail2 position
    if (wScroll >= 7850 && wScroll <= 9700) {
      $(".smoothness").css({
        "position": "fixed",
        "top": "-168px"
      })
      $("#thumbnail2").css({
        "transform": "matrix(1, "+((wScroll-7850)/1850*0.5-0.2) +","+((wScroll-7850)/1850*0.6-0.3)+",1,100,0)",
        "top": "-400px"
      })
      $("#thumbnail2-shadow").css({
        "transform": "matrix(1, "+((wScroll-7850)/1850*0.5-0.2) +","+((wScroll-7850)/1850*0.6-0.3)+",1,"+(200-(wScroll-7850)/1836*100)+",0)",
        "top": "-400px"
      })
      $(".car-sequence").css({
        "position": "absolute",
        "top": "9700px"
      })
      $(".car-pics").find("img").css({
        "opacity": "0"
      })
    }



    // car-sequence////////////////////////////////////
    // change car pics, car-sequencetop value 9700
    if (wScroll > 9700 && wScroll <= 11700) {
      $(".smoothness").css({
        "position": "absolute",
        "top": "7682px"
      })
      $(".car-sequence").css({
        "position": "fixed",
        "top": "0"
      })
      if (wScroll > 9700 && wScroll <= 10100)
        $("#bg1").css({
          "opacity": (wScroll - 9700) / 400
        })
      if (wScroll > 10100 && wScroll <= 10500)
        $("#bg2").css({
          "opacity": (wScroll - 10100) / 400
        })
      if (wScroll > 10500 && wScroll <= 10900)
        $("#bg3").css({
          "opacity": (wScroll - 10500) / 400
        })
      if (wScroll > 10900 && wScroll <= 11300)
        $("#bg4").css({
          "opacity": (wScroll - 10900) / 400
        })
      if (wScroll > 11300 && wScroll <= 11700)
        $(".black-bg").css({
          "opacity": (wScroll - 11300) / 400
        })
    }



    /////car-details top value 11700
    if (wScroll > 11700 && wScroll <= 13000) {
      $(".car-sequence").css({
        "position": "absolute",
        "top": "11700px"
      })
    }
    if (wScroll > 13000) {
    }
  }
})
