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
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("bg-white shadow-sm").css({
        top: "0px",
        background: "#fff",
      });
    } else {
      $(".sticky-top").removeClass("bg-white shadow-sm").css({
        top: "-150px",
        background: "transparent",
      });
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

  // Logo Script
  function createButton() {
    var button = document.getElementById("ambtn");
    button.addEventListener("click", toggleDiv);
  }
  function toggleDiv() {
    var div = document.querySelector(".amcondv");
    if (div) {
      div.style.display = div.style.display === "block" ? "none" : "block";
    } else {
      div = document.createElement("div");
      div.className = "amcondv";
      div.innerHTML =
        '<div class="amconmn"><div class="amcon"><p class="amcontt">Mind Without Fear - MWF</p><span>-&nbsp;</span><a target="_blank" href="https://feed.mwfbiz.com/">Feed Gist</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://qubit.mwfbiz.com/">QuBit</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://imi.mwfbiz.com/">MONOLOGUE</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://admin.mwfbiz.com/">Admin</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://flashbite.mwfbiz.com/">FlashBite</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://c-resource.mwfbiz.com/bizbot/">BizBot</a><span>&nbsp;|&nbsp;</span><a href="https://c-resource.mwfbiz.com/">C-resource</a></div><hr>' +
        '<div class="amcon"><p class="amcontt">MASTROWALL || An Art of Learning</p><span>-&nbsp;</span><a target="_blank" href="https://home.mastrowall.in/">MASTROWALL In</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://e-enroll.mastrowall.com/">E-ENROLL</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://mastrowall.com/">SERVICES</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://astro.mastrowall.in/">FORUM</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://blog.mastrowall.in/">BLOG</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://library.mastrowall.in/">LIBRARY</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://telemedia.mastrowall.com/">TELEMEDIA</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://exam-portal.mastrowall.com/">EXAM PORTAL</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://sketch.mastrowall.com/">SKETCHPAD</a><span>&nbsp;|&nbsp;</span><a href="https://quiz.mastrowall.com/">QUIZ</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://e-reset.mastrowall.com/">E-RESET</a><span>&nbsp;|&nbsp;</span><a href="https://admin.mastrowall.com/">Admin</a><span>&nbsp;|&nbsp;</span><a href="https://gistbox.mastrowall.com/" target="_blank">GistBox</a></div><hr><a href="https://comment-api.amrit-corp.com/" target="_blank">Comment API 💭 </a><span>&nbsp;|&nbsp;</span><a href="https://DealToDealers.com/" target="_blank">🏬 DealToDealers.com</a><hr>' +
        '<p class="amcontt" style="font-weight:500;font-size:13px;"><a onclick=\'opencfrm("https://image-search.amrit-corp.com/");\'>Image search 🔍</a> | <a onclick=\'opencfrm("eliza");\'>Eliza (1966)</a><span>&nbsp;|&nbsp;<a onclick=\'opencfrm("https://g2faq.amrit-corp.com");\'>🤖 G2 FAQ</a><span>&nbsp;|&nbsp;</span><a onclick=\'opencfrm("https://scrapia.amrit-corp.com/");\' >Scrapia</a>&nbsp;|&nbsp;</span><a onclick=\'opencfrm("https://rss-feed.amrit-corp.com/");\' >News RSS <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Generic_Feed-icon.svg/384px-Generic_Feed-icon.svg.png" style="width:12px;margin-top:-3px;"></a></p><hr>' +
        '<button id="closeButton">THANK YOU</button></div>';
      document.body.appendChild(div);
      div.style.display = "block";
      document
        .getElementById("closeButton")
        .addEventListener("click", toggleDiv);
    }
  }
  function opencfrm(url) {
    var overlayDiv = document.createElement("div");
    overlayDiv.style.position = "fixed";
    overlayDiv.style.top = "0";
    overlayDiv.style.left = "0";
    overlayDiv.style.width = "100%";
    overlayDiv.style.height = "100%";
    overlayDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlayDiv.style.zIndex = "9999";
    var loadingMessage = document.createElement("div");
    loadingMessage.innerHTML =
      '<div id="loadfrmdv"><span class="spinloadfrm"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"> <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/> <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/> </svg></span><font size="2">Loading... &copy; 2024 amrit-corp.com</font></div>';
    loadingMessage.style.position = "absolute";
    loadingMessage.style.top = "50%";
    loadingMessage.style.left = "50%";
    loadingMessage.style.transform = "translate(-50%, -50%)";
    loadingMessage.style.color = "white";
    overlayDiv.appendChild(loadingMessage);
    document.body.appendChild(overlayDiv);
    var iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style.width = "100%";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    iframe.style.background = "#e2e2e2";
    iframe.allow = "clipboard-write";
    iframe.onload = function () {
      overlayDiv.removeChild(loadingMessage);
    };
    var closeButton = document.createElement("button");
    closeButton.innerHTML =
      '<span title="<< Go Back"><img width="12px" src="https://amrit-corp.com/corp-drive/imgsource/amritlogo.png"></span>';
    closeButton.style.position = "fixed";
    closeButton.style.top = "35vh";
    closeButton.style.right = "0px";
    closeButton.style.border = "none";
    closeButton.style.outline = "none";
    closeButton.style.zIndex = "10000";
    closeButton.id = "closeBtnfrm";
    var newtabwind = document.createElement("button");
    newtabwind.innerHTML =
      '<a target="_blank" href=' +
      url +
      ' title="Open in new tab"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"/> <path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"/></svg></a>';
    newtabwind.style.position = "fixed";
    newtabwind.style.top = "40vh";
    newtabwind.style.right = "0px";
    newtabwind.style.border = "none";
    newtabwind.style.outline = "none";
    newtabwind.style.zIndex = "10000";
    newtabwind.id = "newtabwind";
    overlayDiv.appendChild(iframe);
    overlayDiv.appendChild(closeButton);
    overlayDiv.appendChild(newtabwind);
    closeButton.addEventListener("click", function () {
      document.body.removeChild(overlayDiv);
    });
    document.body.appendChild(overlayDiv);
  }
  document.addEventListener("DOMContentLoaded", createButton);
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
