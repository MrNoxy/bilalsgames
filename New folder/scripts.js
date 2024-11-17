function startFlappyBird() {
    showGame("games/flappy/index.html");
}

function startMario() {
    showGame("games/mario/index.html");
}

function startSnake() {
    showGame("games/snake/index.html");
}

function showGame(gameUrl) {
    const gameArea = document.getElementById("game-area");
    const gameFrame = document.getElementById("game-frame");
    gameFrame.src = gameUrl;
    gameArea.style.display = "flex";
}

function closeGame() {
    const gameArea = document.getElementById("game-area");
    const gameFrame = document.getElementById("game-frame");
    gameFrame.src = "";
    gameArea.style.display = "none";
}
