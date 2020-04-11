/* @type {CanvasRenderingContext} */
const canvas = $("#canvas")[0];
console.log(canvas);
const context = canvas.getContext("2d");
context.beginPath();
context.moveTo(0,0);
context.lineTo(200,100);
context.stroke();
context.closePath();