const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function resize(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

let mouse = {
x: canvas.width/2,
y: canvas.height/2
};

window.addEventListener("mousemove",e=>{
mouse.x=e.clientX;
mouse.y=e.clientY;
});

window.addEventListener("touchmove",e=>{
mouse.x=e.touches[0].clientX;
mouse.y=e.touches[0].clientY;
});

function drawFly(){

ctx.font="42px serif";
ctx.fillText("🪰",mouse.x,mouse.y);

}

function drawPlant(){

let x=canvas.width/2;
let y=canvas.height-180;

ctx.beginPath();
ctx.strokeStyle="#267326";
ctx.lineWidth=12;
ctx.moveTo(x,y+120);
ctx.lineTo(x,y);
ctx.stroke();

ctx.font="110px serif";
ctx.fillText("🌿",x-55,y+40);

}

function loop(){

ctx.clearRect(0,0,canvas.width,canvas.height);

drawPlant();
drawFly();

requestAnimationFrame(loop);

}

loop();
