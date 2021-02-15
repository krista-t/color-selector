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
  console.log(rgb);
  writeRgB(rgb);
}

function writeRgB(rgbvalue) {
  console.log(rgbvalue);
  let rgbTxt = document.querySelector(".rgb");
  rgbTxt.innerHTML = `RGB: ${rgbvalue}`;
}
