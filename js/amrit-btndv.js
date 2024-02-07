"use strict";
function createButton() {
  var button = document.createElement("div");
  button.id = "ambtn";
  button.innerHTML =
    "<img src='https://amrit-corp.com/corp-drive/imgsource/amritlogo.png' style='width:30px;'>";
  document.body.appendChild(button);
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
      '<div class="amconmn"><div class="amcon"><p class="amcontt">Mind Without Fear - MWF</p><span>-&nbsp;</span><a target="_blank" href="https://feed.mwfbiz.com/">Feed Gist</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://qubit.mwfbiz.com/">QuBit</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://imi.mwfbiz.com/">MONOLOGUE</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://admin.mwfbiz.com/">Admin</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://c-resource.mwfbiz.com/bizbot/">BizBot</a><span>&nbsp;|&nbsp;</span><a href="https://c-resource.mwfbiz.com/">C-resource</a></div><hr>' +
      '<div class="amcon"><p class="amcontt">M A S T R O W A L L || An Art of Learning</p><span>-&nbsp;</span><a target="_blank" href="https://home.mastrowall.in/">MASTRO | HOME</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://e-enroll.mastrowall.com/">E-ENROLL</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://mastrowall.com/">SERVICES</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://astro.mastrowall.in/">FORUM</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://blog.mastrowall.in/">BLOG</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://library.mastrowall.in/">LIBRARY</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://telemedia.mastrowall.com/">TELEMEDIA</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://tods.mastrowall.com/">TODS</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://educator.mastrowall.com/">EDUCATOR</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://student.mastrowall.com/">STUDENT</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://e-reset.mastrowall.com/">E-RESET</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://exam-portal.mastrowall.com/">EXAM PORTAL</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://sketch.mastrowall.com/">SKETCHPAD</a><span>&nbsp;|&nbsp;</span><a href="https://quiz.mastrowall.com/">QUIZ</a><span>&nbsp;|&nbsp;</span><a href="https://admin.mastrowall.com/">Admin</a></div><hr>' +
      '<p class="amcontt"><a target="_blank" href="https://scrapia.amrit-corp.com/">Scrapia</a><span>&nbsp;|&nbsp;</span><a target="_blank" href="https://rss-feed.amrit-corp.com/">News RSS</a></p><hr>' +
      '<button id="closeButton">Close</button></div>';
    document.body.appendChild(div);
    div.style.display = "block";
    document.getElementById("closeButton").addEventListener("click", toggleDiv);
  }
}
document.addEventListener("DOMContentLoaded", createButton);
