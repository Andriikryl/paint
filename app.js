const canvas = document.getElementById('jsCanvas')

let painting = false;


function onMouseMove(event) {
    x = event.offsetX
    y = event.offsetY
    console.log(x, y)
}

function onMouseDown(event){

}

function onMouseUp(event) {
    
}

if(canvas) {
    canvas.addEventListener('mousemove',  onMouseMove)
    canvas.addEventListener('mousedown', onMouseDown)
    canvas.addEventListener('mouseup', onMouseUp)
}





























