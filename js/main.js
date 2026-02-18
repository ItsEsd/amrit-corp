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
  const navbarCollapse = new bootstrap.Collapse("#navbarCollapse", {
    toggle: false,
  });
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
  const clickOnCollps = document.getElementById("navbarCollapse");
  document.addEventListener("click", (e) => {
    if (!clickOnCollps.classList.contains("show")) return;
    const clickInsideCollapse = clickOnCollps.contains(e.target);

    if (!clickInsideCollapse) {
      navbarCollapse.hide();
      toggleBtn.setAttribute("aria-expanded", "false");
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

  /* -------------------------------------------------
   7️⃣  JavaScript – open / close logic
---------------------------------------------------- */
  const btn = document.getElementById("float-btn");
  const overlay = document.getElementById("chat-overlay");
  const modal = document.getElementById("chat-modal");
  const closeBtn = modal.querySelector(".chat-close-btn");

  /* Open the overlay */
  btn.addEventListener("click", () => {
    overlay.classList.add("active");
  });

  /* Close via the X button */
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  /* Optional: close with Escape key for better UX */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      overlay.classList.remove("active");
    }
  });

  /* --------------------------------------------------------------
     Helper – pull the integer that precedes “new message(s)”
     -------------------------------------------------------------- */
  function getMessageCountFromTitle(txt) {
    const re = /(\d+)\s*new\s*messages?/i;
    const m = txt.match(re);
    return m ? parseInt(m[1], 10) : null;
  }

  const badge = document.getElementById("nummsg");
  if (!badge) {
    return;
  }

  function updateBadge(count) {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = "flex";
    } else {
      badge.textContent = "";
      badge.style.display = "none";
    }
  }

  const titleEl = document.querySelector("title");
  if (!titleEl) {
    return;
  }

  const observer = new MutationObserver(() => {
    const newTitle = document.title;
    const cnt = getMessageCountFromTitle(newTitle);
    updateBadge(cnt !== null ? cnt : 0);
  });

  observer.observe(titleEl, {
    childList: true,
    characterData: true,
    subtree: true,
  });

  const initialCount = getMessageCountFromTitle(document.title);
  updateBadge(initialCount !== null ? initialCount : 0);

  const loca = window.location.hostname;
  if (loca.endsWith("amrit-corp.com")) {
    document.body.style.display = "block";
  } else {
    document.body.innerHTML = window.atob(
      "PGRpdiBzdHlsZT0nZm9udC1zaXplOjE1cHg7Y29sb3I6IzY2NjtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7aGVpZ2h0OjEwMHZoO2JhY2tncm91bmQ6I2ZmZjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Jz48aW1nIHNyYz0naHR0cHM6Ly9hbXJpdC1jb3JwLmNvbS9jb3JwLWRyaXZlL2ltZ3NvdXJjZS9wYWdlLW5vdC1hdmFpbGFibGUuc3ZnJyBzdHlsZT0nd2lkdGg6OTAlO21heC13aWR0aDo0MDBweDsnPjxwcmUgc3R5bGU9ImNvbG9yOiM2NjY7Ij4mIzE2OTsgQU1SSVQtY29ycC5jb208L3ByZT48L2Rpdj4=",
    );
  }
  setInterval(function () {
    console.clear();
  }, 100);
})(jQuery);
