const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')
const colors = document.getElementsByClassName('jsColor')
const range = document.getElementById('jsRange')



canvas.height = 700;
canvas.width = 700;

ctx.lineWidth = 2.5
ctx.strokeStyle = 'black';

let painting = false;


function stopPainting() {
    painting = false
}

function startPainting(event) {
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
    // console.log(event.target.style)
}

function handleRangeChange(event) {
    const rangeValue = event.target.value
    ctx.lineWidth = rangeValue
    // console.log(event.target.value)
}

if(canvas) {
    canvas.addEventListener('mousemove',  onMouseMove)
    canvas.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('mouseup', stopPainting)
    canvas.addEventListener('mouseleave', stopPainting)
}


Array.from(colors).forEach(color => color.addEventListener('click', HandleColorClick ))


if(range) {
    range.addEventListener('input', handleRangeChange)
}


























