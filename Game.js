// game.js

const gameScreen = document.getElementById("game-screen");

// Estado inicial del jugador
let player = {
    x: 5,
    y: 5,
    icon: "@", // Representación del jugador
    inventory: [],
};

// Estado del mapa
let map = [
    "####################",
    "#                  #",
    "#                  #",
    "#        O         #",
    "#                  #",
    "#                  #",
    "#       ♥♥♥        #",
    "#                  #",
    "#                  #",
    "####################",
];

// Dibuja el mapa y el jugador
function drawGame() {
    let output = "";
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            if (row === player.y && col === player.x) {
                output += player.icon;
            } else {
                output += map[row][col];
            }
        }
        output += "\n";
    }
    gameScreen.textContent = output;
}

// Mover al jugador
function movePlayer(dx, dy) {
    const newX = player.x + dx;
    const newY = player.y + dy;
    
    // Verificar que el nuevo lugar no sea una pared
    if (map[newY][newX] !== "#") {
        player.x = newX;
        player.y = newY;
    }
    
    drawGame();
}

// Escuchar las teclas de flecha para mover al jugador
window.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "ArrowUp":
            movePlayer(0, -1);
            break;
        case "ArrowDown":
            movePlayer(0, 1);
            break;
        case "ArrowLeft":
            movePlayer(-1, 0);
            break;
        case "ArrowRight":
            movePlayer(1, 0);
            break;
    }
});

// Iniciar el juego dibujando el mapa
drawGame();
