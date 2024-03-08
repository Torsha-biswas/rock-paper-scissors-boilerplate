function startGame() {
    let playerName = prompt("Enter your name:");
    if (playerName) {
        localStorage.setItem("playerName", playerName);
        window.location.href = "game.html";
    }
}

window.onload = function() {
    let playerName = localStorage.getItem("playerName");
    if (playerName) {
        document.getElementById("player-name").innerText = playerName;
    }
};
