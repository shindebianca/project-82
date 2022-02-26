var mouseevent="empty";
var last_x, last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    currentx=e.clientX - canvas.offsetLeft;
    currenty=e.clientY - canvas.offsetTop;
    
    if (mouseevent="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle="blue";
        ctx.line_width=4;
        //ctx.moveTo(last_x, last_y);
        //ctx.lineTo(currentx, currenty);
        ctx.arc(currentx, currenty, 40, 0, 2*Math.PI);
        ctx.stroke();
    }
    last_x=currentx;
    last_y=currenty;
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}
