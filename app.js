const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
const colors = document.getElementsByClassName('jsColor')
const range = document.getElementById('jsRange')
const mode = document.getElementById('jsMode')
const InitialColor = 'black';
const canvasSize = 700;


canvas.height = canvasSize;
canvas.width = canvasSize;

ctx.lineWidth = 2.5
ctx.strokeStyle = InitialColor;
ctx.fillStyle = InitialColor;

let filling = false;

let painting = false;


function stopPainting() {
    painting = false
}

function startPainting() {
    painting = true
}


function onMouseMove(event) {
    x = event.offsetX;
    y = event.offsetY;
    if(!painting) {
        ctx.beginPath()
        ctx.moveTo(x, y)
    } else {
        ctx.lineTo(x, y)
        ctx.stroke()
    }
}

function onMouseDown(event){
painting = true
}


function HandleColorClick (event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color
    // console.log(event.target.style)
}

function handleRangeChange(event) {
    const rangeValue = event.target.value
    ctx.lineWidth = rangeValue
    // console.log(event.target.value)
}

function handelModeClick() {
    if(filling === true){
        filling = false;
        mode.innerText = 'pouring'
    } else{
        filling = true
        mode.innerText = ' painting'
    }
}

function handleCanvasClick() {
    if (filling){
        ctx.fillRect(0, 0, canvasSize, canvasSize)
    } 
}

if(canvas) {
    canvas.addEventListener('mousemove',  onMouseMove)
    canvas.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('mouseup', stopPainting)
    canvas.addEventListener('mouseleave', stopPainting)
    canvas.addEventListener('click', handleCanvasClick)
}


Array.from(colors).forEach(color => color.addEventListener('click', HandleColorClick ))


if(range) {
    range.addEventListener('input', handleRangeChange)
}

if(mode) {
    mode.addEventListener('click', handelModeClick)
}
























