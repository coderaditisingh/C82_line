var color ="black";
var width = "5";
var current_Y_axis="",last_P_Y="";
var current_X_axis="",last_P_X="";
MouseEvent="";

var canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown",mouse_down_now);
function mouse_down_now(e){
color=document.getElementById("color").value;
width=document.getElementById("width_l").value;
MouseEvent="mousedown";
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    MouseEvent="mouse leave";
    }

    canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    MouseEvent="mouse up ";
    }

    canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
    current_X_axis=e.clientX-canvas.offsetLeft;
    current_Y_axis=e.clientY-canvas.offsetTop;
        MouseEvent="mouse move";
    
        if (MouseEvent=="mousedown"){
            ctx.beginPath();
            ctx.strokeStyle= color;
            ctx.lineWidth = width;
            console.log("last Pos Y="+ last_P_Y+ "last Pos X="+last_P_X);
            ctx.moveTo(last_P_X,last_P_Y);
            console.log(" cur pos Y="+ current_Y_axis+ "cur pos X="+current_X_axis);
            ctx.lineTo(current_X_axis,current_Y_axis);
            ctx.stroke();
        }
        last_P_Y=current_Y_axis;
        last_P_X=current_X_axis;
            
    }

    function cleararea()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}