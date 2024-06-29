// Game constants
const GRID_SIZE = 20;
const CELL_SIZE = 20;
const CANVAS_BORDER_COLOR = 'black';
const CANVAS_BACKGROUND_COLOR = 'white';

// Initialize canvas
const canvas = document.createElement('canvas');
canvas.width = GRID_SIZE * CELL_SIZE;
canvas.height = GRID_SIZE * CELL_SIZE;
canvas.style.border = `2px solid ${CANVAS_BORDER_COLOR}`;
canvas.style.backgroundColor = CANVAS_BACKGROUND_COLOR;
document.getElementById('gameArea').appendChild(canvas);
const ctx = canvas.getContext('2d');

// Snake initial position
let snake = [{
    x: 10,
    y: 10
}];
let dx = 1; // Direction of movement
let dy = 0;

// Game loop
function main() {
    setTimeout(function onTick() {
        clearCanvas();
        moveSnake();
        drawSnake();
        // Call main again
        main();
    }, 100); // Adjust speed here (lower is faster)
}

function clearCanvas() {
    ctx.fillStyle = CANVAS_BACKGROUND_COLOR;
    ctx.strokeStyle = CANVAS_BORDER_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function moveSnake() {
    const head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    };
    snake.unshift(head);
    snake.pop();
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}

function drawSnakePart(snakePart) {
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'darkgreen';
    ctx.fillRect(snakePart.x * CELL_SIZE, snakePart.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    ctx.strokeRect(snakePart.x * CELL_SIZE, snakePart.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

// Start the game
main();

