"use strict";
start();

function start() {
  const input = document.querySelector("input");
  input.addEventListener("input", selectColor);
}

function selectColor() {
  let hexValue = document.querySelector("input").value;
  console.log(hexValue);
  writeHex(hexValue);
}

function writeHex(value) {
  console.log(value);
  let hexTxt = document.querySelector(".hex");
  hexTxt.innerHTML = `HEX: ${value}`;
  convertToRgb(value);
}

function convertToRgb(hex) {
  let red = hex.substring(1, 3);
  let green = hex.substring(3, 5);
  let blue = hex.substring(5, 7);

  let r = parseInt(red, 16);
  let g = parseInt(green, 16);
  let b = parseInt(blue, 16);
  const rgb = `${r} ${g} ${b}`;
  writeRgB(rgb);
  convertToHsl(r, g, b);
}

function writeRgB(rgbvalue) {
  console.log(rgbvalue);
  let rgbTxt = document.querySelector(".rgb");
  rgbTxt.innerHTML = `RGB: ${rgbvalue}`;
}

function convertToHsl(r, g, b) {
  console.log(r, g, b);
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl(%f,%f%,%f%)", h, s, l);

  h = Math.floor(h);
  s = Math.floor(s);
  l = Math.floor(l);

  console.log(h, s, l);

  writeHsl(h, s, l);
}

function writeHsl(hvalue, svalue, lvalue) {
  console.log(hvalue, svalue, lvalue);
  let hslTxt = document.querySelector(".hsl");
  hslTxt.innerHTML = `HSL: ${hvalue} ${svalue} ${lvalue} `;
}
