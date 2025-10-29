(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    const isCollapsedOpen = $("#navbarCollapse").hasClass("show");
    const scrollTop = $(this).scrollTop();

    if (scrollTop > 300) {
      $(".sticky-top").addClass("bg-white shadow-sm").css({
        top: "0px",
        background: "#fff",
      });
    } else {
      if (!isCollapsedOpen) {
        $(".sticky-top").removeClass("bg-white shadow-sm").css({
          top: "-150px",
          background: "transparent",
        });
      }
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    dots: true,
    items: 1,
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    dots: true,
    loop: true,
    nav: false,
  });

  document
    .querySelector(".navbar-toggler")
    .addEventListener("click", function () {
      const stickyNav = document.querySelector(".sticky-top");
      stickyNav.classList.toggle("bg-white");
      stickyNav.classList.toggle("shadow-sm");
    });

  const loca = window.location.hostname;
  if (loca.endsWith("amrit-corp.com")) {
    document.body.style.display = "block";
  } else {
    document.body.innerHTML = "";
  }
  setInterval(function () {
    console.clear();
  }, 100);
})(jQuery);
