$(document).ready(function() {


  //////////////////////navigation.//////////////////////////


  $(".home").find("img").on("click", function() {
    $("body").animate({scrollTop: $(".journey").offset().top}, 1000);
  })
  $(".sequence-text").find("img").on("click", function() {
    $("body").animate({scrollTop: 13000}, 1000);
  })
  $(".goLSDNA").on("click", function() {
    $("body").animate({scrollTop: 2940}, 1000);
  })
  $(".goHome").on("click", function() {
    $("body").animate({scrollTop: 0}, 1000);
  })
  $(".goJourney").on("click", function() {
    $("body").animate({scrollTop: $(".journey").offset().top}, 1000);
  })
  $(".goQuality").on("click", function() {
    $("body").animate({scrollTop: 4160}, 1000);
  })
  $(".goQuietness").on("click", function() {
    $("body").animate({scrollTop: 5830}, 1000);
  })
  $(".goTechnologies").on("click", function() {
    $("body").animate({scrollTop: $(".technologies").offset().top}, 1000);
  })
  $(".goSmoothness").on("click", function() {
    $("body").animate({scrollTop: 8600}, 1000);
  })
  $(".goLS").on("click", function() {
    $("body").animate({scrollTop: 11300}, 1000);
  })
  $(".goGallery").on("click", function() {
    $("body").animate({scrollTop: 13000}, 1000);
  })
  $(".last").on("click", function() {
    $("body").animate({scrollTop: 14500}, 1000);
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


/////////////////fancybox animation ///////////////////////

  var index = 0;

  $(".fancy-box-prev").on("click", function() {
    // $(".fancybox-closed").css({
    //   "animation-name": "rightToZero"
    // })
    // $(".fancybox-opened").css({
    //   "animation-name": "rightToOne"
    // })
    $(".fancybox-wrap:eq(" +index+ ")").removeClass("fancybox-opened").addClass("fancybox-closed");
    $(".fancy-box-next").show();
    index++;
    if (index == 6) $(this).hide();
    $(".fancybox-wrap:eq(" +index+ ")").removeClass("fancybox-closed").addClass("fancybox-opened");
  })


  $(".fancy-box-next").on("click", function() {

    $(".fancybox-wrap:eq(" +index+ ")").removeClass("fancybox-opened").addClass("fancybox-closed");
    $(".fancy-box-prev").show();
    index--;
    if (index == 0) $(".fancy-box-next").hide();
    $(".fancybox-wrap:eq(" +index+ ")").removeClass("fancybox-closed").addClass("fancybox-opened");
  })

  $(".fancy-box-close").on("click", function() {
    $(".fancybox-opened").removeClass("fancybox-opened").addClass("fancybox-closed");
    $(".fancy-box-next").show();
    $(".fancy-box-prev").show();
    $(".fancybox-wrap").css({
      "z-index": "-2"
    })
  })

  $(".fancybox-control").on("click",function(e) {
    e.preventDefault();
    index = $(".fancybox-control").index(this);
    $(".fancybox-wrap").css({
      "z-index": "200"
    })
    if (index == 0) $(".fancy-box-next").hide();
    if (index == 6) $(".fancy-box-prev").hide();
    // $(".features img").addClass("fancybox-pic-hidden");
    // $(".features img:eq(" +index +")").removeClass("fancybox-pic-hidden");
    // $(".fancybox-default").removeClass("fancybox-closed").addClass("fancybox-opened");
    $(".fancybox-wrap:eq(" +index+ ")").removeClass("fancybox-closed").addClass("fancybox-opened");
  })





/////////////////fancybox fancybox-wrap2 animation ///////////////////////

  var index2 = 0;

  $(".fancy-box-prev2").on("click", function() {
    // $(".fancybox-closed").css({
    //   "animation-name": "rightToZero"
    // })
    // $(".fancybox-opened").css({
    //   "animation-name": "rightToOne"
    // })
    $(".fancybox-wrap2:eq(" +index2+ ")").removeClass("fancybox-opened").addClass("fancybox-closed");
    $(".fancy-box-next2").show();
    index2++;
    if (index2 == 4) $(".fancy-box-prev2").hide();
    $(".fancybox-wrap2:eq(" +index2+ ")").removeClass("fancybox-closed").addClass("fancybox-opened");
  })


  $(".fancy-box-next2").on("click", function() {

    $(".fancybox-wrap2:eq(" +index2+ ")").removeClass("fancybox-opened").addClass("fancybox-closed");
    $(".fancy-box-prev2").show();
    index2--;
    if (index2 == 0) $(".fancy-box-next2").hide();
    $(".fancybox-wrap2:eq(" +index2+ ")").removeClass("fancybox-closed").addClass("fancybox-opened");
  })

  $(".fancy-box-close").on("click", function() {
    $(".fancybox-opened").removeClass("fancybox-opened").addClass("fancybox-closed");
    $(".fancy-box-next2").show();
    $(".fancy-box-prev2").show();
    $(".fancybox-wrap2").css({
      "z-index": "-2"
    })
  })

  $(".fancybox-control2").on("click",function(e) {
    e.preventDefault();
    index2 = $(".fancybox-control2").index(this);
    $(".fancybox-wrap2").css({
      "z-index": "200"
    })
    if (index2 == 0) $(".fancy-box-next2").hide();
    if (index2 == 4) $(".fancy-box-prev2").hide();
    // $(".features img").addClass("fancybox-pic-hidden");
    // $(".features img:eq(" +index2 +")").removeClass("fancybox-pic-hidden");
    // $(".fancybox-default").removeClass("fancybox-closed").addClass("fancybox-opened");
    $(".fancybox-wrap2:eq(" +index2+ ")").removeClass("fancybox-closed").addClass("fancybox-opened");
  })


/////////////////////car-components animation////////////////////

  var componentsIndex = 0;
  var componentsTransValue = 0;

  $(".components-control").on("click", function() {
    componentsIndex = $(".components-control").index(this);

    $(".components-opened").removeClass("components-opened").addClass("components-closed");
    $(".car-components div:eq(" +componentsIndex+ ")").removeClass("components-closed").addClass("components-opened");

  })

  $(".flex-next2").on("click", function() {
    $(".flex-prev2").css({
      "display": "inline-block"
    })

    if (componentsTransValue == -1632) {
      componentsTransValue = -1904;
      $(this).hide();
      // $(".slides2").css({
      //   "transform": "translate(-1904px)"
      // })
    }
    else {
      componentsTransValue -= 816;
    }
    $(".slides2").css({
      "transform": "translate(" + componentsTransValue + "px)"
    })
  })

  $(".flex-prev2").on("click", function() {
    $(".flex-next2").css({
      "display": "inline-block"
    })

    if (componentsTransValue == -816) {
      $(this).hide();
      componentsTransValue += 816;
      // $(".slides2").css({
      //   "transform": "translate(-1904px)"
      // })
    }
    else if (componentsTransValue == -1904) {
      componentsTransValue = -1632;
    }
    else {
      componentsTransValue += 816;
    }
    $(".slides2").css({
      "transform": "translate(" + componentsTransValue + "px)"
    })
  })

///////////////////scroll animation//////////////////////////

  var $window = $(window);
  var scrollTime = 1.2;
  var scrollDistance = 170;

  $window.on("mousewheel DOMMouseScroll", function(event){

    event.preventDefault();

    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);

    TweenMax.to($window, scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
        ease: Power1.easeOut,
        overwrite: 5
      });

  });
  // $window.on("beforeunload", function() {
  //   $(".end").css({
  //     "position": "fixed"
  //   })
  // })
  $window.on("load", function() {
    $("body").animate({scrollTop: $(this).scrollTop()+1});
  })

  $window.scroll(function() {
    window.requestAnimationFrame(parallax);

  })


  function parallax() {
    var wScroll = $(this).scrollTop();
    // console.log(wScroll)



    ////////////tire ////////////////
    // tire animation home top value 0, journey top value 797
    if (wScroll >= $(".home").offset().top + 350 && wScroll <= $(".journey").offset().top - 100) {
      $(".tire").css({
        "animation-name": "roll"
      })
      $(".shadow").css({
        "animation-name": "shadowMove"
      })

      $(".timeline-wrapper").css({
        "opacity": (wScroll - 350) / 270 + "",
        "top": 300 + (wScroll - 350) / 270 * 340 + "px"
      })
      $(".flexslider1").css({
        "opacity": (wScroll - 350) / 270 + "",
        "top": 640 - (wScroll - 350) / 270 * 540 + "px"
      })
    }

    if (wScroll < 350) {
      $(".flexslider1").css({
        "opacity": "0"
      })
    }
    if (wScroll > $(".journey").offset().top - 100) {
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

    //set dna chain events, each event last 250
    if (wScroll <= 1190) {
      $(".firsth1").css({
        "opacity": "0"
      })
      $("#mini2").css({
        "opacity": "0"
      })
    }
    if (wScroll > 1190 && wScroll <= 1440) {
      $(".firsth1").css({
        "opacity": (wScroll - 1190)/250 + "",
        "top": 400 - (wScroll - 1190)/250 * 260 + "px"
      })
      $("#mini2").css({
        "opacity": (wScroll - 1190) / 250 + ""
      })
      $(".secondh1").css({
        "opacity": "0"
      })
      $("#mini3").css({
        "opacity": "0"
      })
    }
    if (wScroll => 1440 && wScroll <= thumbnail1Top) {
      $(".dna").css({
        "position": "fixed",
        "top": "-10px",
        "left": "0"
      })
      // $(".active").css({
      //   "position": "fixed"
      // })
      $(".dna-mini").css({
        "opacity": "1",
        "height": (wScroll - 1440) * 0.3 + "px"
      })
      // set 6 different events, each event last 250
      if (wScroll > 1440 && wScroll <= 1690) {
        $(".secondh1").css({
          "left": 450 - (wScroll - 1440) / 250 * 300 + "px",
          "opacity": (wScroll - 1440) / 250 * 0.7 + ""
        })
        $("#mini3").css({
          "opacity": (wScroll - 1440) / 250 + ""
        })
        $(".firstp").css({
          "opacity": "0"
        })
        $("#mini4").css({
          "opacity": "0"
        })
      }
      if (wScroll > 1690 && wScroll <= 1940) {
        $(".secondh1").css({
          "left": 150 - (wScroll - 1690) / 250 * 120 + "px",
          "opacity": (wScroll - 1690) / 250 * 0.3 + 0.7 + ""
        })
        $(".firstp").css({
          "left": 500 - (wScroll - 1690) / 250 * 300 + "px",
          "opacity": (wScroll - 1690) / 250 * 0.7 + ""
        })
        $("#mini4").css({
          "opacity": (wScroll - 1690) / 250 + ""
        })
        $(".secondp").css({
          "opacity": "0"
        })
        $("#mini5").css({
          "opacity": "0"
        })
      }
      if (wScroll > 1940 && wScroll <= 2190) {
        $(".firstp").css({
          "left": 200 - (wScroll - 1940) / 250 * 100 + "px",
          "opacity": (wScroll - 1940) / 250 * 0.3 + 0.7 + ""
        })
        $(".secondp").css({
          "left": 550 - (wScroll - 1940) / 250 * 300 + "px",
          "opacity": (wScroll - 1940) / 250 * 0.7 + ""
        })
        $("#mini5").css({
          "opacity": (wScroll - 1940) / 250 + ""
        })
        $(".thirdp").css({
          "opacity": "0"
        })
        $("#mini6").css({
          "opacity": "0"
        })
      }
      if (wScroll > 2190 && wScroll <= 2440) {
        $(".secondp").css({
          "left": 250 - (wScroll - 2190) / 250 * 100 + "px",
          "opacity": (wScroll - 2190) / 250 * 0.3 + 0.7 + ""
        })
        $(".thirdp").css({
          "left": 550 - (wScroll - 2190) / 250 * 300 + "px",
          "opacity": (wScroll - 2190) / 250 * 0.7 + ""
        })
        $(".forthp").css({
          "opacity": "0"
        })
        $("#mini7").css({
          "opacity": "0"
        })
        $("#mini6").css({
          "opacity": (wScroll - 2190) / 250 + ""
        })
      }
      if (wScroll > 2440 && wScroll <= 2690) {
        $(".thirdp").css({
          "left": 250 - (wScroll - 2440) / 250 * 110 + "px",
          "opacity": (wScroll - 2440) / 250 * 0.3 + 0.7 + ""
        })
        $(".forthp").css({
          "left": 500 - (wScroll - 2440) / 250 * 300 + "px",
          "opacity": (wScroll - 2440) / 250 * 0.7 + ""
        })
        $("#mini8").css({
          "opacity": "0"
        })
        $("#mini7").css({
          "opacity": (wScroll - 2440) / 250 + ""
        })
      }
      if (wScroll > 2690 && wScroll <= 2940) {
        $(".forthp").css({
          "left": 200 - (wScroll - 2690) / 250 * 90 + "px",
          "opacity": (wScroll - 2690) / 250 * 0.3 + 0.7 + ""
        })
        $("#mini8").css({
          "opacity": (wScroll - 2690) / 250 + ""
        })
      }
      if (wScroll > 2940) {
        $("#mini8").css({
          "opacity": "1"
        })
      }

    }





    // 4160 at thumbnail1Top, set dna position back to absolute
    if (wScroll > thumbnail1Top || wScroll < 1440) {
      $(".active").css({
        "position": "absolute",
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
      $(".dna-thumbnail1 h1").css({
        "opacity": (wScroll - 3742) / 418,
        "left": 500 - (wScroll - 3742) / 418 * 440 + "px"
      })
      $(".thumb1p1").css({
        "opacity": (wScroll - 3742) / 418,
        "left": 500 - (wScroll - 3742) / 418 * 440 + "px"
      })
      $(".thumb1p2").css({
        "opacity": (wScroll - 3742) / 418,
        "left": (wScroll - 3742) / 418 * 540 - 480 + "px"
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
        "top": (505 - wScroll + 4160) + "px",
        // "height": "1300px"
      })
      $("#thumbnail1-shadow").css({
        "transform": "matrix(1, "+(0-(wScroll-4160)/996*0.2) +","+(0-(wScroll-4160)/996*0.3)+",1,"+((wScroll-4160)/996*200)+",0)",
        "top": (505 - wScroll + 4160) + "px",
        // "height": "1300px"
      })
      $(".dna-thumbnail2").css({
        "position": "absolute",
        "top": "5164px",
        "height": "100vh"
      })
      $(".dna-thumbnail2 h1").css({
        "top": 800 - (wScroll - 4160) / 996 * 650 + "px"
      })
      $(".thumb2p1").css({
        "opacity": "0"
      })
      $(".dna-thumbnail1").find("*").css({
        "opacity": "1",
        "left": "60px"
      })
    }
    //dna cells stop moving, thumbnail2top value 5164
    //change dna-thumbnail2 position
    if (wScroll >= 5164 && wScroll <= 7000) {
      $(".dna-thumbnail2").css({
        "position": "fixed",
        "top": "0",
        "height": "100vh"
      })
      $("#thumbnail1").css({
        "transform": "matrix(1, "+((wScroll-5164)/1836*0.5-0.2) +","+((wScroll-5164)/1836*0.6-0.3)+",1,100,0)",
        "top": "-500px"
      })
      $("#thumbnail1-shadow").css({
        "transform": "matrix(1, "+((wScroll-5164)/1836*0.5-0.2) +","+((wScroll-5164)/1836*0.6-0.3)+",1,"+(200-(wScroll-5164)/1836*100)+",0)",
        "top": "-500px"
      })
      $(".dna-thumbnail2 h1").css({
        "top": "150px"
      })

      if (wScroll >= 5164 && wScroll < 5497) {
        $(".thumb2p1").css({
          "opacity": (wScroll - 5164) / 333,
          "top": 800 - (wScroll - 5164) / 333 * 550 + "px"
        })
        $(".thumb2p2").css({
          "opacity": "0"
        })
      }

      if (wScroll >= 5497 && wScroll < 5830) {
        $(".thumb2p2").css({
          "opacity": (wScroll - 5497) / 333,
          "top": 800 - (wScroll - 5497) / 333 * 500 + "px"
        })
        $(".thumb2p1").css({
          "opacity": "1",
          "top": "250px"
        })
      }
      if (wScroll >= 5830) {
        $(".thumb2p2").css({
          "top": "300px"
        })
      }

    }



    ////////////////////////////technologies//////////////////////////////////
    // technologies value 7000 , smoothness value 8000
    //top cells2 animation
    if (wScroll >= 6660 && wScroll <= 7000) {
      // $(".dna-thumbnail2").css({
      //   "position": "absolute",
      //   "top": "5164px",
      //   "height": "836px"
      // })
      $(".technologies h1").css({
        "opacity": (wScroll - 6660) / 340,
        "left": 400 - (wScroll - 6660) / 340 * 340 + "px"
      })
      $(".techp1").css({
        "opacity": (wScroll - 6660) / 340,
        "left": 400 - (wScroll - 6660) / 340 * 340 + "px"
      })
      $(".techp2").css({
        "opacity": (wScroll - 6660) / 340,
        "left": (wScroll - 6660) / 340 * 540 - 480 + "px"
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
      $(".techp1").css({
        "opacity": "0"
      })
      $(".techp2").css({
        "opacity": "0"
      })
      $(".technologies h1").css({
        "opacity": "0"
      })
    }
    //dna cells2 move animation, thumbnail2top value 7000
    if (wScroll > 7000 && wScroll < 7740) {
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
        "top": "7682px",
        "height": "918px"
      })
      $(".technologies").find("*").css({
        "left": "60px"
      })
    }

    //dna cells stop moving, thumbnail2top value 5164
    //change dna-thumbnail2 position
    if (wScroll >= 7740 && wScroll <= 9700) {
      $(".smoothness").css({
        "position": "fixed",
        "top": "-168px",
        "height": "calc(100vh + 168px)"
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

    if (wScroll >=7740 && wScroll < 8000) {
      $(".smoothness h1").css({
        "top": 800 - (wScroll - 7740) / 260 * 500 + "px"
      })
    }
    if (wScroll >=8000 && wScroll < 8300) {
      $(".smoothp1").css({
        "opacity": (wScroll - 8000) / 300,
        "top": 800 - (wScroll - 8000) / 300 * 400 + "px"
      })
      $(".smoothp2").css({
        "opacity": "0"
      })
      $(".smoothness h1").css({
        "top": "300px"
      })
    }
    if (wScroll >= 8300 && wScroll < 8600) {
      $(".smoothp2").css({
        "opacity": (wScroll - 8300) / 300,
        "top": 800 - (wScroll - 8300) / 300 * 350 + "px"
      })
      $(".smoothp1").css({
        "opacity": "1",
        "top": "400px"
      })
    }
    if (wScroll >= 8600 && wScroll < 9700) {
      $(".smoothp2").css({
          "opacity": "1",
          "top": "450px"
      })
    }



    // car-sequence////////////////////////////////////
    // change car pics, car-sequencetop value 9700
    if (wScroll > 9700 && wScroll <= 11700) {
      $(".smoothness").css({
        "position": "absolute",
        "top": "7682px",
        "height": "918px"
      })
      $(".car-sequence").css({
        "position": "fixed",
        "top": "0"
      })
      if (wScroll > 9700 && wScroll <= 10100) {
        $("#bg1").css({
          "opacity": (wScroll - 9700) / 400
        })
        $(".detailsh21").css({
          "opacity": "0"
        })
        $(".detailsh22").css({
          "opacity": "0"
        })
      }
      if (wScroll > 10100 && wScroll <= 10500) {
        $("#bg2").css({
          "opacity": (wScroll - 10100) / 400
        })
        $(".detailsh21").css({
          "opacity": (wScroll - 10100) / 400
        })
      }
      if (wScroll > 10500 && wScroll <= 10900) {
        $("#bg3").css({
          "opacity": (wScroll - 10500) / 400
        })
        $(".detailsh22").css({
          "opacity": (wScroll - 10500) / 400
        })
        $(".sequence-text h1").css({
          "opacity": "0"
        })
        $(".sequence-text img").css({
          "opacity": "0"
        })
      }
      if (wScroll > 10900 && wScroll <= 11300) {
        $("#bg4").css({
          "opacity": (wScroll - 10900) / 400
        })
      }
      if (wScroll > 11300 && wScroll <= 11700) {
        $(".black-bg").css({
          "opacity": (wScroll - 11300) / 400
        })
        $(".sequence-text h1").css({
          "opacity": (wScroll - 11300) / 400
        })
        $(".sequence-text img").css({
          "opacity": (wScroll - 11300) / 400
        })
        $(".detailsh22").css({
          "opacity": 1 - (wScroll - 11300) / 400
        })
        $(".detailsh21").css({
          "opacity": 1 - (wScroll - 11300) / 400
        })
      }
    }



    /////car-details top value 11700
    if (wScroll > 11700 && wScroll <= 12500) {
      $(".car-sequence").css({
        "position": "absolute",
        "top": "11700px"
      })
      $(".car-details").css({
        "position": "absolute",
        "top": "12500px"
      })
      $(".flexslider2").css({
        "bottom": "-168px",
        "opacity": "0"
      })
    }

    ///////////////.felxslider2 fade out/////////////////
    if (wScroll > 12500 && wScroll <= 13000) {
      $(".car-details").css({
        "position": "fixed",
        "top": "-5px"
      })
      $(".flexslider2").css({
        "bottom": (wScroll - 12500) / 500 * 168 - 168 + "px",
        "opacity": (wScroll - 12500) / 500
      })
    }

    if ( wScroll > 13000 && wScroll <= 14500) {
      $(".car-details").css({
        "position": "fixed",
        "top": "-5px"
      })
      $(".registration").css({
        "position": "absolute",
        "top": "14500px"
      })
    }

    /////////////////section registration///////////////////////

    if (wScroll > 14500 && wScroll <= 15500) {
      $(".flexslider2").css({
        "opacity": "1",
        "bottom": "0"
      })
      $(".car-details").css({
        "position": "absolute",
        "top": "12500px"
      })
      $(".registration").css({
        "position": "fixed",
        "top": "0"
      })
      $(".country").css({
        "position": "absolute",
        "top": "15500px"
      })

    }



    //////////////////////section country ///////////////////////////
    if (wScroll > 14500 && wScroll < $(".country").offset().top -333)
      $(".cover").css({
        "opacity": "0"
      })

    if (wScroll >= $(".country").offset().top -333 && wScroll < $(".country").offset().top) {
      $(".cover").css({
        "opacity": (wScroll - $(".country").offset().top + 333) / 333 * 0.7 + ""
      })
    }

    if (wScroll >= $(".country").offset().top) {
      $(".country").css({
        "position": "fixed",
        "top": "0"
      })
    }
  }

})
