"use strict";
start();
//just for listener
function start() {
  const input = document.querySelector("input");
  input.addEventListener("input", changeColor);
}

//delegator function
function changeColor() {
  const hexValue = document.querySelector("input").value;
  //call colorBox func
  colorBox(hexValue);
  //call  writeHex
  writeHex(hexValue);
  //convert rgb to hex
  const rgb = convertToRgb(hexValue);
  //call writeTgB
  writeRgB(rgb.r, rgb.g, rgb.b);
  //convert rgb to hsl function call
  const hsl = convertToHsl(rgb.r, rgb.g, rgb.b);
  //write hsl
  writeHsl(hsl.h, hsl.s, hsl.l);
}

function colorBox(colorValue) {
  const colorBox = document.querySelector(".colorbox");
  colorBox.style.background = colorValue;
}

function writeHex(value) {
  let hexTxt = document.querySelector(".hex");
  hexTxt.innerHTML = `HEX: ${value}`;
}
function convertToRgb(hex) {
  let red = hex.substring(1, 3);
  let green = hex.substring(3, 5);
  let blue = hex.substring(5, 7);

  let r = parseInt(red, 16);
  let g = parseInt(green, 16);
  let b = parseInt(blue, 16);
  return { r, g, b };
}

function writeRgB(red, blue, green) {
  // console.log(red, blue, green);
  let rgbTxt = document.querySelector(".rgb");
  rgbTxt.innerHTML = `RGB: ${red}, ${blue}, ${green}`;
}

function convertToHsl(r, g, b) {
  // console.log(r, g, b);
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

  return { h, s, l };
}

function writeHsl(hvalue, svalue, lvalue) {
  console.log(hvalue, svalue, lvalue);
  let hslTxt = document.querySelector(".hsl");
  hslTxt.innerHTML = `HSL: ${hvalue} ${svalue}% ${lvalue}% `;
}
