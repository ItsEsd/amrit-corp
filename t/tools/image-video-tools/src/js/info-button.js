// Function to create and append the info button and message elements
function createInfoButton() {
  // Create the button element
  const button = document.createElement("div");
  button.className = "info-button";
  button.innerHTML = `<button><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg></button>`;

  // Create the info message element
  const infoMessage = document.createElement("div");
  infoMessage.id = "info-message";
  infoMessage.className = "info-message";
  infoMessage.innerHTML = `
        <div class="info-about-content">
           Welcome to the Image & Video Tools application! Created by Son Nguyen in 2024, its goal is to provide you with a comprehensive suite of tools for manipulating images and videos directly in your browser. Whether you need to resize an image, apply filters, convert file formats, generate thumbnails, or remove audio from a video, our tools make it easy to perform these tasks quickly and efficiently.

            Each tool is designed with user-friendliness in mind, offering intuitive interfaces and seamless functionality. Please feel free to contact us <a target="_blank" href="mailto:contact@amrit-corp.com">contact@amrit-corp.com</a>. 

            <br><br>
            <strong>Special Thanks:</strong> This application utilizes code created by <a target="_blank" href="https://github.com/hoangsonww">Son Nguyen</a>. His contributions have been instrumental in making these tools effective and user-friendly.
            
            <br><br>
            
    </div>
`;

  // Create the close button element
  const closeButton = document.createElement("button");
  closeButton.className = "close-info-button";
  closeButton.textContent = "Close";

  // Add an event listener to the info button
  button.addEventListener("click", function () {
    infoMessage.style.display = "block";
  });

  // Add an event listener to the close button
  closeButton.addEventListener("click", function () {
    infoMessage.style.display = "none";
  });

  // Append the close button to the info message
  infoMessage.appendChild(closeButton);

  // Append the button and info message to the container
  const container = document.body;
  container.appendChild(button);
  container.appendChild(infoMessage);
}

// Call the function to create the button and message when the page loads
window.onload = createInfoButton;
