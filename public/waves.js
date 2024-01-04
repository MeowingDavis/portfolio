function createRandomColorTentacleBackground() {
    const canvas = document.getElementById("background-canvas");
    const ctx = canvas.getContext("2d");
  
    // Function to update the canvas dimensions
    function updateCanvasDimensions() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  
    // Initial canvas dimensions
    updateCanvasDimensions();
  
    const tentacleWidth = 100;
    const tentacleCount = 800;
    const tentacleSpeed = 0.5;
    const tentacleAmplitude = 110;
    const modulationFrequency = 0.01; // Adjust the modulation frequency to make it subtle
  
    const backgroundColor = "#202124";
  
    ctx.imageSmoothingEnabled = true;
  
    const colors = [
      "#6C464F",
      "#9E768F", 
      "#9FA4C4", 
      "#B3CDD1", 
      "#C7F0BD", 
      "#FFE548" 
    ];
  
    let currentColorIndex = 0;
  
    function drawBackground() {
      updateCanvasDimensions(); // Update canvas dimensions when drawing
  
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = colors[currentColorIndex];
  
      for (let i = 0; i < tentacleCount; i++) {
        const xPos = (i / tentacleCount) * canvas.width;
        const yPos = canvas.height;
        const yOffset = Math.sin((xPos / canvas.width) * Math.PI * 2 + (Date.now() * 0.001 * tentacleSpeed)) * tentacleAmplitude * Math.sin(Date.now() * 0.03 * modulationFrequency);
        // Apply the sine wave modulation to the tentacleAmplitude
  
        ctx.fillRect(xPos, yPos, tentacleWidth, -yOffset);
      }
  
      requestAnimationFrame(drawBackground);
    }
  
    document.getElementById("color-change-button").addEventListener("click", function () {
      currentColorIndex = (currentColorIndex + 1) % colors.length;
    });
  
    drawBackground();
  }
  
  window.addEventListener("load", createRandomColorTentacleBackground);
  
  // Add a window resize event listener to update canvas size
  window.addEventListener("resize", createRandomColorTentacleBackground);
  