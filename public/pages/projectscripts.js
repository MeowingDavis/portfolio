const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');
const pixelSize = 5; // Size of each pixel

// Update canvas dimensions when the window is resized
function updateCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Call the updateCanvasSize function when the window is resized
window.addEventListener('resize', updateCanvasSize);

// Set initial canvas size when the script is first run
updateCanvasSize();

let lastTime = 0;
const frameDelay = 100; // Delay between frames in milliseconds
const fadeSpeed = 0.02; // Speed of fade-in effect

// Create an array to store the opacity of each pixel
const pixelOpacity = [];

for (let x = 0; x < canvas.width; x += pixelSize) {
  for (let y = 0; y < canvas.height; y += pixelSize) {
    pixelOpacity.push(0); // Initialize the opacity of each pixel to 0
  }
}

function generateNoise() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let x = 0, i = 0; x < canvas.width; x += pixelSize) {
    for (let y = 0; y < canvas.height; y += pixelSize, i++) {
      // Gradually increase the opacity of each pixel
      if (pixelOpacity[i] < 1) {
        pixelOpacity[i] += fadeSpeed;
      }

      const greyValue = Math.floor(Math.random() * 51); // Darker shades of grey
      ctx.fillStyle = `rgba(${greyValue}, ${greyValue}, ${greyValue}, ${pixelOpacity[i]})`;
      ctx.fillRect(x, y, pixelSize, pixelSize);
    }
  }
}

function updateNoise(timestamp) {
  if (!lastTime) lastTime = timestamp;

  const elapsed = timestamp - lastTime;

  if (elapsed > frameDelay) {
    generateNoise();
    lastTime = timestamp;
  }

  requestAnimationFrame(updateNoise);
}

// Start the animation
updateNoise(0);
