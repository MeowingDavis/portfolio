function createGlitchyBackground() {
    const canvas = document.getElementById("background-canvas");
    const ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const backgroundColor = "black";
    const pixelSize = 1; // Adjust the size of the pixels
    const maxDisplacement = 3 // Maximum displacement for the glitch effect
    const greyShades = ["#000", "#111", "#222", "#333", "#444"]; // Shades of grey
  
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    function drawGlitch() {
      for (let x = 0; x < canvas.width; x += pixelSize) {
        for (let y = 0; y < canvas.height; y += pixelSize) {
          const xOffset = Math.random() * maxDisplacement;
          const yOffset = Math.random() * maxDisplacement;
          const randomGrey = greyShades[Math.floor(Math.random() * greyShades.length)];
          ctx.fillStyle = randomGrey; // Randomly select a shade of grey
          ctx.fillRect(x + xOffset, y + yOffset, pixelSize, pixelSize);
        }
      }
  
      setTimeout(() => {
        requestAnimationFrame(drawGlitch);
      }, 300); // Adjust the delay for a slower animation
    }
  
    // Start the animation
    drawGlitch();
  }
  
  // Call the function when the page loads
  window.addEventListener("load", createGlitchyBackground);
  