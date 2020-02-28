canvas = document.getElementById("canvas")
context = canvas.getContext("2d")
width = canvas.width = window.innerWidth
height = canvas.height = window.innerHeight

let centerY = height* 0.5;
let centerX  = width * 0.5;
let radius = 200;
let speed = 0.01;
let angle = 0;
let x,y;
let numObjects = 19;
let slice = Math.PI*2/numObjects;

render();

function render(){
    context.clearRect(0,0,width,height);
    for (let i = 0; i < numObjects; i++) {
        angle += slice;
        x = centerX+Math.cos(angle)*radius;
        y = centerY+Math.sin(angle)*radius;
        context.beginPath();
        context.arc(x,y,5,0,Math.PI*2,false);
        context.fill()
    }
    angle+=speed;
    requestAnimationFrame(render)
}


