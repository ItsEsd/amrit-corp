document.addEventListener("DOMContentLoaded", () => {
  const upload = document.getElementById("upload");
  const removeBgBtn = document.getElementById("remove-bg-btn");
  const downloadBtn = document.getElementById("download-btn");
  const preview = document.getElementById("preview");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const message = document.getElementById("message");

  const loader = document.createElement("div");
  loader.id = "loader";
  loader.textContent = "Removing background...";
  loader.style.display = "none";
  removeBgBtn.parentNode.insertBefore(loader, removeBgBtn.nextSibling);

  let currentImage = null;
  let imageUrl = "";
  let processedImageUrl = "";

  function updateImagePreview(src, container) {
    container.innerHTML = "";
    const header = document.createElement("h3");
    header.textContent = "Preview";
    const img = new Image();
    img.onload = function () {
      const aspectRatio = img.width / img.height;
      img.width = container.offsetWidth;
      img.height = container.offsetWidth / aspectRatio;
      container.appendChild(header);
      container.appendChild(img);
    };
    img.src = src;
  }

  upload.addEventListener("change", () => {
    const file = upload.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imageUrl = e.target.result;
        updateImagePreview(imageUrl, preview);

        if (currentImage) {
          preview.removeChild(currentImage);
        }

        const newImage = preview.querySelector("img");
        currentImage = newImage;

        removeBgBtn.disabled = false;
        message.style.display = "none";
      };
      reader.readAsDataURL(file);
    }
  });

  removeBgBtn.addEventListener("click", () => {
    removeBgBtn.disabled = true;
    loader.style.display = "block";
    loader.style.marginTop = "10px";

    const file = upload.files[0];
    if (!file) {
      alert("Please upload an image first.");
      removeBgBtn.disabled = false;
      loader.style.display = "none";
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];

        if (r > 200 && g > 200 && b > 200) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      const processedImageUrl = canvas.toDataURL("image/png");
      updateImagePreview(processedImageUrl, preview);

      downloadBtn.dataset.url = processedImageUrl;

      downloadBtn.disabled = false;

      loader.style.display = "none";
      removeBgBtn.disabled = false;
    };

    img.onerror = () => {
      alert("Error loading the image. Please try a different file.");
      removeBgBtn.disabled = false;
      loader.style.display = "none";
    };
  });

  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = downloadBtn.dataset.url;
    link.download = "no-bg-image.png";
    link.click();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
});

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}
