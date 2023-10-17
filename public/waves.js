function createGradientTentacleBackground() {
    const canvas = document.getElementById("background-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const tentacleWidth = 10; // Adjust the width of the tentacles
    const tentacleCount = 20; // Adjust the number of tentacles
    const tentacleSpeed = 0.2; // Adjust the speed of the tentacles (slower)
    const tentacleAmplitude = 100; // Adjust the amplitude of the tentacles
    const backgroundColor = "black";

    ctx.imageSmoothingEnabled = false; // Disable smoothing for a pixelated effect

    function drawBackground() {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < tentacleCount; i++) {
            const xPos = (i / tentacleCount) * canvas.width;
            const yPos = canvas.height;
            const yOffset = Math.sin((xPos / canvas.width) * Math.PI * 2 + (Date.now() * 0.001 * tentacleSpeed)) * tentacleAmplitude;
            const gradient = ctx.createLinearGradient(xPos, 0, xPos, canvas.height);
            gradient.addColorStop(0, "grey"); // Start with grey
            gradient.addColorStop(1, "white"); // Gradually change to white
            ctx.fillStyle = gradient;
            ctx.fillRect(xPos, yPos, tentacleWidth, -yOffset);
        }

        requestAnimationFrame(drawBackground);
    }

    // Start the animation
    drawBackground();
}

// Call the function when the page loads
window.addEventListener("load", createGradientTentacleBackground);
