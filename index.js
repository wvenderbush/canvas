var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#0000ff";
canvas.addEventListener("click", function(e) {
    ctx.fillRect(e.pageX - 50, e.pageY - 50, e.pageX + 50, e.pageY + 50);
});
                     
  
