
// function toggleDarkMode() {
//     const body = document.body;
//     body.classList.toggle('dark-mode');
// }







function createWigglyTentacleBackground() {
    const canvas = document.getElementById("background-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const tentacleWidth = 10; // Adjust the width of the tentacles
    const tentacleCount = 20; // Adjust the number of tentacles
    const tentacleSpeed = 0.3; // Adjust the speed of the tentacles
    const tentacleAmplitude = 100; // Adjust the amplitude of the tentacles
    const backgroundColor = "black";

    ctx.imageSmoothingEnabled = true; // Disable smoothing for a pixelated effect

    function drawBackground() {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < tentacleCount; i++) {
            const xPos = (i / tentacleCount) * canvas.width;
            const yPos = canvas.height;
            const yOffset = Math.sin((xPos / canvas.width) * Math.PI * 2 + (Date.now() * 0.001 * tentacleSpeed)) * tentacleAmplitude;
            const wobbleOffset = Math.sin((xPos / canvas.width) * Math.PI * 2 + (Date.now() * 0.001 * tentacleSpeed * 5)) * 10; // Adjust wobble intensity
            const sWiggle = Math.sin((xPos / canvas.width) * Math.PI) * 20; // Adjust S-shaped wiggle intensity
            ctx.fillStyle = "white";
            ctx.fillRect(xPos + wobbleOffset, yPos + sWiggle, tentacleWidth, -yOffset);
        }

        requestAnimationFrame(drawBackground);
    }

    // Start the animation
    drawBackground();
}

// Call the function when the page loads
window.addEventListener("load", createWigglyTentacleBackground);
