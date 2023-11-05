let isDrowing = false;
let x = 0;
let y = 0;

const paintArea = document.getElementById("paintArea");
const context = paintArea.getContext("2d");

paintArea.addEventListener("pointerdown", (e) => {
    x = e.offsetX;
    y = e.offsetY;
    isDrowing = true;
});

window.addEventListener("pointermove", (e) => {
    if (isDrowing) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    };
});

window.addEventListener("pointerup", (e) => {
    if (isDrowing) {
        drawLine(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        isDrowing = false;
    }
});

//colors input from color picker
let colorInput = document.getElementById("colorPicker");

//colors input from base colors buttons
const colorBlack = document.getElementById("colorBlack").title;
const colorWhite = document.getElementById("colorBlack").title;
const colorBlue = document.getElementById("colorBlack").title;
const colorRed = document.getElementById("colorBlack").title;
const colorYellow = document.getElementById("colorBlack").title;
const colorPink = document.getElementById("colorBlack").title;
const colorGreen = document.getElementById("colorBlack").title;
const colorOrange = document.getElementById("colorBlack").title;



//brush sizes
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const counterLabel = document.getElementById("counterLabel");
let brushSize = 1;

increaseBtn.onclick = function () {
    brushSize++;
    if (brushSize > 99) {
        brushSize = 99;
    }
    counterLabel.textContent = brushSize;
}

decreaseBtn.onclick = function () {
    brushSize--;
    if (brushSize < 1) {
        brushSize = 1;
    }
    counterLabel.textContent = brushSize;
}

//line setup
function drawLine(context, x, y) {
    context.beginPath();
    context.strokeStyle = colorInput.value;
    context.lineWidth = brushSize;
    context.lineTo(x, y);
    context.stroke();
    context.lineCap = 'round';
    context.closePath();
};

//clear paint
document.getElementById("clearBtn").addEventListener("click", function () {
    context.clearRect(x, y, paintArea.width, paintArea.height);
});