canvas = document.getElementById("canvas")
context = canvas.getContext("2d")
width = canvas.width = window.innerWidth
height = canvas.height = window.innerHeight

let centerY = height* 0.5
let centerX  = width * 0.5


let offset = 150
let speed = 0.08
let angle = 0;
let baseRadius = 55

render();

function render(){
    let radius = baseRadius + Math.sin(angle)*offset;
    context.clearRect(0,0,width,height);
    centerY = Math.cos(angle)*offset+height* 0.5
    centerX = Math.sin(angle)*offset+width * 0.5
    context.beginPath();
    context.arc(centerX,centerY,baseRadius,0,Math.PI*2,false);
    context.fill()
    angle+=speed;
    console.log(angle)
    requestAnimationFrame(render)
}