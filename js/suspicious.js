const referreramrt = document.referrer.toLowerCase();
const urlParamsamrt = new URLSearchParams(window.location.search);

const suspiciousSources = [
  "facebook.com",
  "instagram.com",
  "twitter.com",
  "t.co",
  "x.com",
  "reddit.com",
  "truthsocial.com",
  "tiktok.com",
];

let isSuspicious = false;

if (suspiciousSources.some((source) => referreramrt.includes(source))) {
  isSuspicious = true;
}

if (urlParamsamrt.has("fbclid") || urlParamsamrt.has("igshid")) {
  isSuspicious = true;
}

if (isSuspicious) {
  document.body.innerHTML = "";
  document.body.style.background = "#2c2c2c";

  const alertBox = document.createElement("div");
  alertBox.style.position = "fixed";
  alertBox.style.top = "50%";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translate(-50%, -50%)";
  alertBox.style.background = "#dcdcdc";
  alertBox.style.padding = "20px";
  alertBox.style.border = "2px solid #ab2807";
  alertBox.style.borderRadius = "10px";
  alertBox.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
  alertBox.style.textAlign = "center";
  alertBox.style.zIndex = "9999";

  const cleanUrl = window.location.origin + window.location.pathname;

  let timeLeft = 10;

  alertBox.innerHTML = `
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#ab2807">
        <path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm330.5-51.5Q520-263 520-280t-11.5-28.5Q497-320 480-320t-28.5 11.5Q440-297 440-280t11.5 28.5Q463-240 480-240t28.5-11.5ZM440-360h80v-200h-80v200Zm40-100Z"/>
      </svg>
      <div style="color:#ab2807; font-weight:bold;margin:10px;font-size:16px;">
        Suspicious Referer Detected!
      </div>
      <div id="countdown" style="font-size:14px; color:#333;">
        Closing in ${timeLeft} seconds...
      </div>
    </div>

    <button id="copyBtn" style="
      margin-top:10px;
      padding:8px 12px;
      width:100%;
      border:none;
      background:#ab2807;
      color:#fff;
      cursor:pointer;
      border-radius:5px;">
      Copy Clean Link
    </button>

    <div style='font-size:11px;display:flex;align-items:center;justify-content:center; margin-top:10px; gap:4px;color:#313131;'>
      <a style="color:#313131" href="https://amrit-corp.com/privacy-policy">Privacy Policy</a> · 
      <a style="color:#313131" href="https://amrit-corp.com/terms-of-service">Terms of Service</a> · 
      <a style="color:#313131" href="https://amrit-corp.com">© AMRIT-Corp.com</a>
    </div>
  `;

  document.body.appendChild(alertBox);

  document.getElementById("copyBtn").addEventListener("click", function () {
    navigator.clipboard.writeText(cleanUrl).then(() => {
      this.innerText = "Copied!";
    });
  });

  const countdownEl = document.getElementById("countdown");

  const timer = setInterval(() => {
    timeLeft--;
    countdownEl.innerText = `Closing in ${timeLeft} seconds...`;

    if (timeLeft <= 0) {
      clearInterval(timer);

      window.close();

      window.location.href = "about:blank";
    }
  }, 1000);
}
