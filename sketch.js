document.addEventListener("DOMContentLoaded", function () {
  const heartsContainer = document.getElementById("heartsContainer");
  const surpriseButton = document.getElementById("surpriseButton");
  const surpriseContainer = document.getElementById("surpriseContainer");
  const message = document.getElementById("message");
  const heart = document.getElementById("heart");

  // Add floating hearts in the background
  const heartCount = Math.floor(Math.random() * 6) + 15;
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart-floating");

    const heartImg = document.createElement("img");
    heartImg.src = "heart.gif"; // Path to your heart GIF
    heartImg.alt = "Heart";
    heartImg.style.width = Math.random() * 40 + 30 + "px"; // Random size

    heart.appendChild(heartImg);

    // Random position and animation
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "+" + Math.random() * 1000 + "px"; // Start off-screen
    heart.style.animationDuration = Math.random() * 1 + 3 + "s";

    heartsContainer.appendChild(heart);
  }

  // Surprise button click event
  surpriseButton.addEventListener("click", function () {
    // Show the surprise container
    surpriseContainer.classList.remove("hidden");

    // Hide the surprise button after clicking
    surpriseButton.style.display = "none";
    matchmakingButton.style.display = "none";
  });



  
  matchmakingButton.addEventListener("click", function () {
    
    surpriseButton.style.display = "none";
    matchmakingButton.style.display = "none";
  });

  // Function to show the secret message on clicking the heart
  heart.addEventListener("click", function () {

    message.classList.remove("hidden");
    message.style.opacity = "1";
    // You can add more behavior like playing a sound or animation here
  });

  // Handle audio autoplay issues
  const backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic
    .play()
    .catch((error) => console.log("Autoplay blocked:", error));
});
