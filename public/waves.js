function createRandomColorTentacleBackground() {
    const canvas = document.getElementById("background-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const tentacleWidth = 100; // Adjust the width of the tentacles
    const tentacleCount = 800; // Adjust the number of tentacles
    const tentacleSpeed = 0.2; // Adjust the speed of the tentacles (slower)
    const tentacleAmplitude = 100; // Adjust the amplitude of the tentacles
    const backgroundColor = "black";

    ctx.imageSmoothingEnabled = true; // Disable smoothing for a pixelated effect

    let currentColor = getRandomRGBAColor(); // Initialize with a random color

    function drawBackground() {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = currentColor; // Set the fill color to the current color

        for (let i = 0; i < tentacleCount; i++) {
            const xPos = (i / tentacleCount) * canvas.width;
            const yPos = canvas.height;
            const yOffset = Math.sin((xPos / canvas.width) * Math.PI * 2 + (Date.now() * 0.001 * tentacleSpeed)) * tentacleAmplitude;

            ctx.fillRect(xPos, yPos, tentacleWidth, -yOffset);
        }

        requestAnimationFrame(drawBackground);
    }

    // Function to generate a random RGBA color
    function getRandomRGBAColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const a = Math.random(); // Random alpha (transparency) value between 0 and 1
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    // Change the color when the button is clicked
    document.getElementById("color-change-button").addEventListener("click", function () {
        currentColor = getRandomRGBAColor();
    });

    // Start the animation
    drawBackground();
}

// Call the function when the page loads
window.addEventListener("load", createRandomColorTentacleBackground);
