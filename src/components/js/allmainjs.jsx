import $ from 'jquery';

export function AllMainJS() {
    //Navbar Active
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();  
        if (scroll >= 50) {
            $(".primary-navbar").addClass("navbar-active");
        } else {
            $(".primary-navbar").removeClass("navbar-active");
        }
    });
    if ($(".header").offset() != undefined) {
      $(window).bind("scroll", function () {
        if ($(window).scrollTop() > 40) {
          $(".header").addClass("header-fix");
        } else {
          $(".header").removeClass("header-fix");
        }
      });
    }
    //resize effects
    $(window).on("resize", function () {
        $("body").removeClass("body-active");
  
        // offcanvas nav
        setTimeout(function () {
          $(".offcanvas-menu").removeClass("show-offcanvas-menu");
        }, 900);
        $(".offcanvas-menu-wrapper").addClass("nav-fade-active");
        $(".navbar-sub-menu").slideUp(300);
        $(".navbar-dropdown-label").removeClass("navbar-item-active");
    });
    let device_width = window.innerWidth;
    let initialScroll = $(window).scrollTop();
    $(document).ready(function () {
        //OffcanvasNavOpen
        $(".offcanvas-menu-wrapper").addClass("nav-fade-active");
        $(".open-offcanvas-nav").on("click", function() {
            $(".nav-fade").each(function(i) {
                $(this).css("animation-delay", 1.8 + 0.2 * 1 * i + "s");
            });

            $(".offcanvas-menu").addClass("show-offcanvas-menu");
            $(".offcanvas-menu-wrapper").removeClass("nav-fade-active");
            $("body").addClass("body-active");
        });

        $(".close-offcanvas-menu").on("click", function() {
            setTimeout(function() {
                $(".offcanvas-menu").removeClass("show-offcanvas-menu");
            }, 900);
            $(".offcanvas-menu-wrapper").addClass("nav-fade-active");
            $("body").removeClass("body-active");
            $(".navbar-sub-menu").slideUp(300);
            $(".navbar-dropdown-label").removeClass("navbar-item-active");
        });

        if ($(".offcanvas-nav").length) {
            $(".offcanvas-menu .navbar-dropdown-label").on("click", function() {
                $(this).parent().siblings().find(".navbar-sub-menu").slideUp(300);
                $(this)
                    .parent()
                    .siblings()
                    .find(".navbar-dropdown-label")
                    .removeClass("navbar-item-active");
                $(this).siblings(".navbar-sub-menu").slideToggle(300);
                $(this).toggleClass("navbar-item-active");
            });
        }
    });
    //custom cursor
    if ($(".mouseCursor").length > 0) {
        function CursorOuter() {
          var myCursor = $(".mouseCursor");
          if (myCursor.length) {
            if ($("body")) {
              const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
              let n,
                i = 0,
                o = !1;
              (window.onmousemove = function (s) {
                o ||
                  (t.style.transform =
                    "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                  (e.style.transform =
                    "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                  (n = s.clientY),
                  (i = s.clientX);
              }),
                $("body").on(
                  "mouseenter",
                  "button, a, .cursor-pointer",
                  function () {
                    e.classList.add("cursor-hover"),
                      t.classList.add("cursor-hover");
                  }
                ),
                $("body").on(
                  "mouseleave",
                  "button, a, .cursor-pointer",
                  function () {
                    ($(this).is("a", "button") &&
                      $(this).closest(".cursor-pointer").length) ||
                      (e.classList.remove("cursor-hover"),
                      t.classList.remove("cursor-hover"));
                  }
                ),
                (e.style.visibility = "visible"),
                (t.style.visibility = "visible");
            }
          }
        }
        CursorOuter();
      }
  
      $("h1, h2, h3, h4, h5, h6, .cursor-effect").on("mouseenter", function () {
        $(".mouseCursor").addClass("cursor-big");
      });
  
      $("h1, h2, h3, h4, h5, h6, .cursor-effect").on("mouseleave", function () {
        $(".mouseCursor").removeClass("cursor-big");
      });

      //following cursor animated button
        if ($(".btn-animated").length > 0) {
            const ELEMENTS = $(".btn-animated");

            ELEMENTS.each(function () {
            const element = $(this);

            element.on("mouseenter", function (e) {
                const span = element.find("span");
                span.css({
                left: e.pageX - element.offset().left + "px",
                top: e.pageY - element.offset().top + "px",
                });
            });

            element.on("mouseleave", function (e) {
                const span = element.find("span");
                span.css({
                left: e.pageX - element.offset().left + "px",
                top: e.pageY - element.offset().top + "px",
                });
            });
            });
        }
        //PageProgress
    if ($(".progress-wrap").length > 0) {
        var progressPath = document.querySelector(".progress-wrap path");
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition =
          "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition =
          "stroke-dashoffset 10ms linear";
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength) / height;
          progressPath.style.strokeDashoffset = progress;
        };
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 1500;
        $(window).on("scroll", function () {
          if ($(this).scrollTop() > offset) {
            $(".progress-wrap").addClass("active-progress");
          } else {
            $(".progress-wrap").removeClass("active-progress");
          }
        });
        $(".progress-wrap").on("click", function (event) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: 0,
            },
            duration
          );
          return false;
        });
  
        if (initialScroll >= 50) {
          $(".progress-wrap").addClass("active-progress");
        }
      }
}
