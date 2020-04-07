const Canvas = require('canvas');
var convolve = require('convolve');
module.exports = {
  gray: function (ctx) {
    let imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    let pixels = imgData.data;
    for (var i = 0; i < pixels.length; i += 4) {
      let lightness = parseInt((pixels[i] + pixels[i + 1] + pixels[i + 2])/3);
      pixels[i] = lightness; 
      pixels[i + 1] = lightness; 
      pixels[i + 2] = lightness; 
    }
    ctx.putImageData(imgData, 0, 0);
    return ctx
  },
  lit: function (ctx,adjustment) {
    let imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var pixels = imgData.data;
    for (var i=0; i<pixels.length; i+=4) {
      pixels[i] += adjustment;
      pixels[i+1] += adjustment;
      pixels[i+2] += adjustment;
    }
    ctx.putImageData(imgData, 0, 0);
    return ctx
  },
  tresh: function (ctx,threshold) {
    let imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    var pixels = imgData.data;
    for (var i=0; i<pixels.length; i+=4) {
      var r = pixels[i];
      var g = pixels[i+1];
      var b = pixels[i+2];
      var v = (0.2126*r + 0.7152*g + 0.0722*b >= threshold) ? 255 : 0;
      pixels[i] = pixels[i+1] = pixels[i+2] = v
    }
    ctx.putImageData(imgData, 0, 0);
    return ctx
  },
  text: async function (ctx, text,canvas) {
    ctx.font = 'bold 100px sans-serif';
    ctx.font = applyText(canvas, text);
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'black';
    ctx.fillText(text, canvas.width / 11, canvas.height / 1.05);
    ctx.strokeText(text, canvas.width / 11, canvas.height / 1.05);
    ctx.fill();
    ctx.stroke();
    return ctx;
  },
  edges: async function (ctx, text,canvas) {
    var edges = [
    [0, -1,  0],
    [-1, 4, -1],
    [0, -1,  0]
    ];
    convolve(edges)
    .factor(1 / 7)
    .canvas(canvas);
    return ctx;
  },
  blur: async function (ctx, text,canvas) {
    var motionBlur = [
    [1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1]
    ];
    convolve(motionBlur)
    .factor(1 / 7)
    .canvas(canvas);
    return ctx;
  },
  shar: async function (ctx, text,canvas) {
    var sharpen = [
    [-1, -1, -1],
    [-1,  9, -1],
    [-1, -1, -1]
    ];
    convolve(sharpen)
    .canvas(canvas);
    return ctx;
  },
  hor: async function (ctx, text,canvas) {
    var horizontal = [
    [-1, -2, -1],
    [0,   0,  0],
    [1,   2,  1]
    ];
    convolve(horizontal)
    .canvas(canvas);
    return ctx;
  },
  ver: async function (ctx, text,canvas) {
    var vertical = [
  [ -1, 0, 1],
   [ -2, 0, 2],
   [ -1, 0, 1 ]];
    convolve(vertical)
    .canvas(canvas);
    return ctx;
  },
  ns: async function (ctx, text,canvas) {
    var ns = [
   [ 1, 1,  1],
   [ 1, 0.7, -1],
   [ -1, -1, -1]];
    convolve(ns)
    .canvas(canvas);
    return ctx;
  }, 
  try: async function (ctx, text,canvas) {
    var trry = [
    [ -1, -1, -1],
   [ -1, 8, -1],
   [ -1, -1, -1]];
    convolve(trry)
    .canvas(canvas);
    return ctx;
  }, 
  random: async function (ctx, text,canvas) {
    var rand = [
   [ Math.floor((Math.random() * 10)-5), Math.floor((Math.random() * 10)-3), Math.floor((Math.random() * 10)-5)],
   [ Math.floor((Math.random() * 10)-5), Math.floor((Math.random() * 10)-3), Math.floor((Math.random() * 10)-5)],
   [ Math.floor((Math.random() * 10)-5), Math.floor((Math.random() * 10)-3), Math.floor((Math.random() * 10)-5)]];
    convolve(rand)
    .canvas(canvas);
    return ctx;
  }, 
}
const applyText = (canvas, text) => {
  const ctx = canvas.getContext('2d');
  // Declare a base size of the font
  let fontSize = 300;
  do {
    // Assign the font to the context and decrement it so it can be measured again
    ctx.font = `bold ${fontSize -= 0.5}px sans-serif`;
    // Compare pixel width of the text to the canvas minus the approximate avatar size
  } while (ctx.measureText(text).width > canvas.width - 100);
  // Return the result to use in the actual canvas
  return ctx.font;
};