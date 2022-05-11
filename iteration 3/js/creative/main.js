(function($) {
  "use strict";

  function newsletterPopup() {
    var newsletter = $(".popup-area-section");
    var newsletterClose = $(".close-btn");

    var test = localStorage.input === 'true'? true: false;
    $(".show-message").prop('checked', test || false);

    var localValue = localStorage.getItem("input");

    if(localValue === "true") {
        newsletter.css({
            "display": "none"
        });                
    }

    newsletter.addClass("active-popup");

    newsletterClose.on("click", function(e) {
        newsletter.removeClass("active-popup");
        return false;
    })

    $(".show-message").on('change', function() {
        localStorage.input = $(this).is(':checked');
    });
  }


  (function init() {
      function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
      
      function initializeClock(endtime){
      var timeinterval = setInterval(function(){
        var t = getTimeRemaining(endtime);
        document.querySelector(".days > .value").innerText=t.days;
        document.querySelector(".hours > .value").innerText=t.hours;
        document.querySelector(".minutes > .value").innerText=t.minutes;
        document.querySelector(".seconds > .value").innerText=t.seconds;
        if(t.total<=0){
          clearInterval(timeinterval);
        }
      },1000);
    }
    initializeClock(((new Date()).getFullYear()+1) + "/1/1")
  })()


  // Accordion script
  
  $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

  $('.accordion a').on('click', function(ev) {
      var dropDown = $(this).closest('li').find('p');


      

      $(this).closest('.accordion').find('p').not(dropDown).slideUp();

      if ($(this).hasClass('active')) {
          $(this).removeClass('active');
      } else {
          $(this).closest('.accordion').find('a.active').removeClass('active');
          $(this).addClass('active');
      }

      dropDown.stop(false, true).slideToggle();

      

      var pro1_name = ["butterfly brooch","gold peony lipstick","Lucky deer statue"]

      
      

      for(var i=0 ; i<pro1_name.length ; i++){
        var now_pro = $(this).closest('li').find('a').text();
        if( now_pro == pro1_name[i] ){
          
          $("#proImg1").attr("src", "img/" + now_pro  +  ".png" ); 
          $("#proImg1").toggle();
          $("#proImg1").fadeIn(1000);
          break
        }
      }

      var pro2_name = ["Riches and honour fan","Antique ship tea set","Crabapple handbag"]

      for(var i=0 ; i<pro2_name.length ; i++){
        var now_pro = $(this).closest('li').find('a').text();
        console.log(now_pro);
        if( now_pro == pro2_name[i] ){
          
          $("#proImg2").attr("src", "img/" + now_pro  +  ".png" );
          $("#proImg2").toggle();
          $("#proImg2").fadeToggle();

          break
        }
      }

      
     


      ev.preventDefault();
  });


  $(function() {
      $( "#tabs" ).tabs();
  });
  

  $(window).on('scroll',function() {
    if ($(this).scrollTop() > 500) {
      $('.go-top').fadeIn(500);
    } else {
      $('.go-top').fadeOut(500);
    }
  });
  
  // Animate the scroll to top
  $('.go-top').on('click',function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 300);
  })

  $(window).on('load', function() {

        $('#preloader').addClass('loaded');

        if($(".popup-area-section").length) {

              setTimeout(function() {
                  newsletterPopup();
              },"3000");
          }

    });

  $(document).ready(onDocumentReady);


  /**
   * All functions to be called on $(document).ready() should be in this function
   */
  function onDocumentReady() {
    masonryLayout();
    funFacts();

    // WOW animation initialize plugin
    var wow = new WOW({
      boxClass: "animate-item",
      animateClass: "is-visible",
      mobile: false
    });

    wow.init();

  }

  /**
   * Packery Layout (Masonry)
   */
  function masonryLayout() {
    var grid = $('.masonry-layout'),
      filter = $('.portfolio-filters'),
      filter_li = filter.find('li');

    
    grid.imagesLoaded().progress( function() {

      var items = grid.isotope({
        // options
        layoutMode: 'packery',
        itemSelector: '.masonry-item',
      });

      filter.on('click', 'li', function() {
        var _this = $(this),
          filterValue = $(this).attr('data-filter');

        filter_li.removeClass('active');
        _this.addClass('active');

        items.isotope({ filter: filterValue }); 
      });

    });

  }


  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });


  /**
   * Owl Carousel 
   */

  $('.owl-testimonials').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    margin: 30,
    autoplay: false,
    smartSpeed: 700,
    autoplayTimeout: 6000,
    responsive: {
      0: {
          items: 1,
          margin: 0
      },
      460: {
          items: 1,
          margin: 0
      },
      576: {
          items: 1,
          margin: 20
      },
      992: {
          items: 2,
          margin: 30
      }
    }
  });

  $('.owl-third-testimonials').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    margin: 0,
    autoplay: false,
    smartSpeed: 700,
    autoplayTimeout: 6000,
    responsive: {
      0: {
          items: 1,
          margin: 0
      },
      460: {
          items: 1,
          margin: 0
      },
      576: {
          items: 2,
          margin: 20
      },
      992: {
          items: 3,
          margin: 0
      }
    }
  });

  $('.owl-second-testimonials').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    margin: 30,
    autoplay: false,
    smartSpeed: 700,
    autoplayTimeout: 6000,
    responsive: {
      0: {
          items: 1,
          margin: 0
      },
      460: {
          items: 1,
          margin: 0
      },
      576: {
          items: 2,
          margin: 20
      },
      992: {
          items: 3,
          margin: 30
      }
    }
  });

  $('.owl-projects').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 3,
    margin: 30,
    autoplay: false,
    smartSpeed: 700,
    autoplayTimeout: 6000,
    responsive: {
      0: {
          items: 1,
          margin: 0
      },
      460: {
          items: 1,
          margin: 0
      },
      576: {
          items: 2,
          margin: 20
      },
      992: {
          items: 3,
          margin: 30
      }
    }
  });





  /**
   * Fun Facts
   */
  function funFacts() {
    var counters = $('.count-digit');

    if (counters.length) {
        counters.each(function () {
          var counter = $(this);
          counter.appear(function () {
            counter.parent().css({'opacity': 1});

            //Counter zero type
            var max = parseFloat(counter.text());
            counter.countTo({
                from: 0,
                to: max,
                speed: 1500,
                refreshInterval: 100
            });

        }, {accX: 0, accY: 0});
      });
    }
  }
    


})(jQuery);

(function($) {
  "use strict";

  $(document).ready(onDocumentReady);

  // ------------------------------------------------------------------------
    // Classie Script
    // ------------------------------------------------------------------------
    (function(window) {

        function classReg(className) {
            return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }
        var hasClass, addClass, removeClass;
        if ('classList' in document.documentElement) {
            hasClass = function(elem, c) {
                return elem.classList.contains(c);
            };
            addClass = function(elem, c) {
                elem.classList.add(c);
            };
            removeClass = function(elem, c) {
                elem.classList.remove(c);
            };
        } else {
            hasClass = function(elem, c) {
                return classReg(c).test(elem.className);
            };
            addClass = function(elem, c) {
                if (!hasClass(elem, c)) {
                    elem.className = elem.className + ' ' + c;
                }
            };
            removeClass = function(elem, c) {
                elem.className = elem.className.replace(classReg(c), ' ');
            };
        }

        function toggleClass(elem, c) {
            var fn = hasClass(elem, c) ? removeClass : addClass;
            fn(elem, c);
        }
        var classie = {
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            toggleClass: toggleClass,
            has: hasClass,
            add: addClass,
            remove: removeClass,
            toggle: toggleClass
        };
        if (typeof define === 'function' && define.amd) {
            define(classie);
        } else {
            window.classie = classie;
        }

    })(window);

  /**
   * All functions to be called on $(document).ready() should be in this function
   */

   var animatedFixedHeader = (function() {
        var site = document.documentElement,
            header = document.querySelector('.site-header'),
            isScrolled = false,
            animateHeaderOn = 40;

        function initializeFixedHeader() {
            window.addEventListener('scroll', function(event) {
                if (!isScrolled) {
                    isScrolled = true;
                    setTimeout(pageScroll, 100);
                }
            }, false);
            window.addEventListener('load', function(event) {
                if (!isScrolled) {
                    isScrolled = true;
                    setTimeout(pageScroll, 100);
                }
            }, false);
        }

        function pageScroll() {
            var sy = scrollVertically();
            if (sy >= animateHeaderOn) {
                classie.add(header, 'is-fixed');
            } else {
                classie.remove(header, 'is-fixed');
            }
            isScrolled = false;
        }

        function scrollVertically() {
            return window.pageYOffset || site.scrollTop;
        }
        if ($(header).hasClass( 'fixed-header' )) {
            initializeFixedHeader();
        }
    })();

     // Close menu
    $("#close-menu").on('click', function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Open menu
    $("#menu-toggle, #menu-toggle-sidebar").on('click', function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });


   $(function () {
      $('a[href="#search"]').on('click', function(event) {
          event.preventDefault();
          $('#search').addClass('open');
          $('#search > form > input[type="search"]').focus();
      });
      
      $('#search, #search close').on('click keyup', function(event) {
          if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
              $(this).removeClass('open');
          }
      });
      
      
      //Do not include! This prevents the form from submitting for DEMO purposes only!
      $('form').on('submit', function(event) {
          event.preventDefault();
          return false;
      })
  });

  function onDocumentReady() {
    setTimeout(function() {
      simpleDropDown();
    }, 100);
  }

  function simpleDropDown() {
    var menu_items = $(".header-nav > ul > li");

    menu_items.each(function() {
      var _this = $(this);

      if (_this.find(".sub-menu").length) {
        var dropDownWrapper = _this.find(".sub-menu");

        if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
          _this
            .on("touchstart mouseenter", function() {
              dropDownWrapper.css({
                overflow: "visible",
                visibility: "visible",
                opacity: "1"
              });
            })
            .on("mouseleave", function() {
              dropDownWrapper.css({
                overflow: "hidden",
                visiblity: "hidden",
                opacity: "0"
              });
            });
        } else {
          var config = {
            interval: 0,
            over: function() {
              setTimeout(function() {
                dropDownWrapper.addClass("sub-menu-open");
              }, 150);
            },
            timeout: 150,
            out: function() {
              dropDownWrapper.removeClass("sub-menu-open");
            }
          };

          _this.hoverIntent(config);
        }
      }
    });
  }
})(jQuery);



(function($) {
  "use strict";

  var revapi1,
    tpj = jQuery;

    tpj(document).ready(function() {

        if (tpj("#rev_slider_1_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_1_1");
        } else {
            revapi1 = tpj("#rev_slider_1_1").show().revolution({
                sliderType:"standard",
                jsFileLocation:"scripts/vendors/",
                sliderLayout:"auto",
                dottedOverlay:"none",
                delay:5000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                                mouseScrollReverse:"default",
                    onHoverStop:"off",
                    bullets: {
                        enable:false,
                        hide_onmobile:false,
                        style:"custom-1-light",
                        hide_onleave:false,
                        direction:"horizontal",
                        h_align:"center",
                        v_align:"bottom",
                        h_offset:-18,
                        v_offset:50,
                        space:5,
                        tmp:'<span>'
                    },
                    arrows: {
                        enable:true,
                        style:"arctures",
                        hide_onmobile:true,
                        hide_under:778,
                        left: {
                            h_offset:0,
                            v_offset: -40
                        },
                        right: {
                            h_offset:0,
                            v_offset: -40
                        }
                    }
                },
                viewPort: {
                    enable:true,
                    outof:"wait",
                    visible_area:"99%",
                    presize:false
                },
                responsiveLevels:[1920,1700,1025,480],
                visibilityLevels:[1920,1700,1025,480],
                gridwidth:[1200,1100,600,240],
                gridheight:[720,800,675,500],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                    speedbg:0,
                    speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                    disable_onmobile:"off"
                },
                shadow:0,
                spinner:"off",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }

        if (tpj("#rev_slider_1_2").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_1_2");
        } else {
            revapi1 = tpj("#rev_slider_1_2").show().revolution({
                sliderType:"standard",
                jsFileLocation:"scripts/vendors/",
                sliderLayout:"auto",
                dottedOverlay:"none",
                delay:5000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                                mouseScrollReverse:"default",
                    onHoverStop:"off",
                    bullets: {
                        enable:false,
                        hide_onmobile:false,
                        style:"custom-1-light",
                        hide_onleave:false,
                        direction:"horizontal",
                        h_align:"center",
                        v_align:"bottom",
                        h_offset:-18,
                        v_offset:50,
                        space:5,
                        tmp:'<span>'
                    },
                    arrows: {
                        enable:true,
                        style:"arctures",
                        hide_onmobile:true,
                        hide_under:778,
                        left: {
                            h_offset:0,
                            v_offset: -40
                        },
                        right: {
                            h_offset:0,
                            v_offset: -40
                        }
                    }
                },
                viewPort: {
                    enable:true,
                    outof:"wait",
                    visible_area:"99%",
                    presize:false
                },
                responsiveLevels:[1920,1700,1025,480],
                visibilityLevels:[1920,1700,1025,480],
                gridwidth:[1200,1100,600,240],
                gridheight:[750,700,645,500],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                    speedbg:0,
                    speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                    disable_onmobile:"on"
                },
                shadow:0,
                spinner:"off",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }

        if (tpj("#rev_slider_1_3").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_1_3");
        } else {
            revapi1 = tpj("#rev_slider_1_3").show().revolution({
                sliderType:"standard",
                jsFileLocation:"scripts/vendors/",
                sliderLayout:"auto",
                dottedOverlay:"none",
                delay:5000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                                mouseScrollReverse:"default",
                    onHoverStop:"off",
                    bullets: {
                        enable:false,
                        hide_onmobile:false,
                        style:"custom-1-light",
                        hide_onleave:false,
                        direction:"horizontal",
                        h_align:"center",
                        v_align:"bottom",
                        h_offset:-18,
                        v_offset:50,
                        space:5,
                        tmp:'<span>'
                    },
                    arrows: {
                        enable:true,
                        style:"arctures",
                        hide_onmobile:true,
                        hide_under:778,
                        left: {
                            h_offset:0
                        },
                        right: {
                            h_offset:0
                        }
                    }
                },
                viewPort: {
                    enable:true,
                    outof:"wait",
                    visible_area:"99%",
                    presize:false
                },
                responsiveLevels:[1920,1700,1025,480],
                visibilityLevels:[1920,1700,1025,480],
                gridwidth:[1200,1100,600,240],
                gridheight:[715,650,645,500],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"enterpoint",
                    speed:400,
                    speedbg:0,
                    speedls:0,
                    levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
                    disable_onmobile:"on"
                },
                shadow:0,
                spinner:"off",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }

    });

})(jQuery);