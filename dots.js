var canvas = document.getElementById("dotcanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#ff0000";
lastcoos = null;
canvas.addEventListener("click", function(e) {
    if(lastcoos === null) {
        lastcoos = [e.pageX, e.pageY];
    }
    ctx.beginPath();
    ctx.moveTo(lastcoos[0], lastcoos[1]);
    ctx.lineTo(e.pageX, e.pageY);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(e.pageX, e.pageY, 25, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    lastcoos = [e.pageX, e.pageY];
});
                     
var clearBut = document.getElementById("clear");
clearBut.addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    lastcoos = null;
});
