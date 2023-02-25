const canvas = document.getElementById('jsCanvas')
const ctx = canvas.getContext('2d')


canvas.height = 700;
canvas.width = 700;

ctx.lineWidth = 2.5
ctx.strokeStyle = 'black';

let painting = false;

function stopPainting() {
    painting = false
}

function startPainting(event) {

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

if(canvas) {
    canvas.addEventListener('mousemove',  onMouseMove)
    canvas.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('mouseup', startPainting)
    canvas.addEventListener('mouseleave', stopPainting)
}
































