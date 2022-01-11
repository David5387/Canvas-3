var position_of_X, position_of_Y;
color = "black";
widthofline = 2;

canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");

var width1 = screen.width;

newwidth = screen.width - 1;
newheight = screen.height - 1;

if(width1<992){
document.getElementById("canvas1").width = newwidth;
document.getElementById("canvas1").height = newheight;
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){
color = document.getElementById("input1").value;
width = document.getElementById("input2").value;
position_of_X = e.touches[0].clientX - canvas.offsetLeft;
position_of_Y = e.touches[0].clientY - canvas.offsetTop;
console.log("my_touchstart");
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){ 
currentposition_of_X = e.touches[0].clientX - canvas.offsetLeft;
currentposition_of_Y = e.touches[0].clientY - canvas.offsetTop;
console.log("my_touchmove");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = widthofline;
ctx.lineTo(currentposition_of_X, currentposition_of_Y);
ctx.stroke();
ctx.moveTo(position_of_X, position_of_Y);
position_of_X = currentposition_of_X;
position_of_Y = currentposition_of_Y;
}