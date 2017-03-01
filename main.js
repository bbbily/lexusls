$(document).ready(function() {


  function parallax() {
    var wScroll = $(this).scrollTop();
    console.log(wScroll)

    ////////////tire ////////////////
    // tire animation home top value 0, journey top value 720
    if (wScroll > $(".home").offset().top + 350 && wScroll < $(".journey").offset().top) {
      $(".tire").css({
        "animation-name": "roll"
      })
      $(".shadow").css({
        "animation-name": "shadowMove"
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
    if (wScroll >= 4160 && wScroll <= 7000) {
      $("#thumbnail1").css({
        "opacity": 1
      })
      $("#thumbnail1-shadow").css({
        "opacity": 1
      })
    }
    if (wScroll < 3742 || wScroll > 7000) {
      $("#thumbnail1").css({
        "opacity": 0
      })
      $("#thumbnail1-shadow").css({
        "opacity": 0
      })
    }
    //dna cells move animation, thumbnail1top value 4160
    if (wScroll >= 4160 && wScroll < 5164) {
      $("#thumbnail1").css({
        "transform": "matrix(1, "+(0-(wScroll-4160)/836*0.2) +","+(0-(wScroll-4160)/836*0.3)+",1,"+((wScroll-4160)/836*100)+",0)",
        "top": (505 - wScroll + 4160) + "px"
      })
      $("#thumbnail1-shadow").css({
        "transform": "matrix(1, "+(0-(wScroll-4160)/836*0.2) +","+(0-(wScroll-4160)/836*0.3)+",1,"+((wScroll-4160)/836*200)+",0)",
        "top": (505 - wScroll + 4160) + "px"
      })
      $(".dna-thumbnail2").css({
        "position": "absolute",
        "top": "5164px"
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
    if (wScroll > 7000 && wScroll <= 8860) {
      $("#thumbnail2").css({
        "opacity": 1
      })
      $("#thumbnail2-shadow").css({
        "opacity": 1
      })
    }
    if (wScroll < 6660 || wScroll > 8860) {
      $("#thumbnail2").css({
        "opacity": 0
      })
      $("#thumbnail2-shadow").css({
        "opacity": 0
      })
    }
    //dna cells move animation, thumbnail1top value 7000
    if (wScroll >= 7000 && wScroll < 8000) {
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
    }
  }
  $(window).scroll(function() {
    window.requestAnimationFrame(parallax);

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
