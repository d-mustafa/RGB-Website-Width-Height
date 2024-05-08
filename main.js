// RGB Colors

// Variables to store html elements
let displayWindow = document.getElementById("displaywindow");
let widthIn = document.getElementById("PreWidth");
let heightIn = document.getElementById("PreHeight");
let previewBtn = document.getElementById("previewbutton");
let r = document.getElementById("redinput");
let g = document.getElementById("greeninput");
let b = document.getElementById("blueinput");

r.value = `255`;
g.value = `255`;
b.value = `0`;
previewBtn.style.color = `rgb(255, 255, 0)`;
widthIn.value = `400`;
heightIn.value = `200`;

// Preview Button Event Listener
r.addEventListener("input", changeBgToColor);
g.addEventListener("input", changeBgToColor);
b.addEventListener("input", changeBgToColor);

function changeBgToColor() {
  // Input
  r = +document.getElementById("redinput").value;
  g = +document.getElementById("greeninput").value;
  b = +document.getElementById("blueinput").value;
  rIn = document.getElementById("redinput");
  gIn = document.getElementById("greeninput");
  bIn = document.getElementById("blueinput");

  // Process
  let rgbOutput = document.getElementById("rgboutput");

  // Validate Colors (Contrain colors betweem 0 - 255)
  // Check Red Value
  if (r > 255) {
    r = 255;
    rIn.value = `255`;
  } else if (r < 0) {
    r = 0;
    rIn.value = `0`;
  }
  // Check Green Value
  if (g > 255) {
    g = 255;
    gIn.value = `255`;
  } else if (g < 0) {
    g = 0;
    gIn.value = `0`;
  }
  // Check Blue Value
  if (b > 255) {
    b = 255;
    bIn.value = `255`;
  } else if (b < 0) {
    b = 0;
    bIn.value = `0`;
  }

  // Output
  displayWindow.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  rgbOutput.innerHTML = `rgb(${r}, ${g}, ${b})`;
  previewBtn.style.color = `rgb(${r}, ${g}, ${b})`;
}

// Black Button Event Listener
let blackBtn = document.getElementById("blackbutton");
blackBtn.addEventListener("click", changeBgToBlack);

function changeBgToBlack() {
  // Input
  // Process
  let rgbOutput = document.getElementById("rgboutput");
  r = document.getElementById("redinput");
  g = document.getElementById("greeninput");
  b = document.getElementById("blueinput");

  // Output
  displayWindow.style.backgroundColor = `rgb(0, 0, 0)`;
  rgbOutput.innerHTML = `rgb(0, 0, 0)`;
  r.value = `0`;
  g.value = `0`;
  b.value = `0`;
  previewBtn.style.color = `rgb(0, 0, 0)`;
}

// White Button Event Listener
let whiteBtn = document.getElementById("whitebutton");
whiteBtn.addEventListener("click", changeBgToWhite);

function changeBgToWhite() {
  // Input
  // Process
  let rgbOutput = document.getElementById("rgboutput");
  r = document.getElementById("redinput");
  g = document.getElementById("greeninput");
  b = document.getElementById("blueinput");

  // Output
  displayWindow.style.backgroundColor = `rgb(255, 255, 255)`;
  rgbOutput.innerHTML = `rgb(255, 255, 255)`;
  r.value = `255`;
  g.value = `255`;
  b.value = `255`;
  previewBtn.style.color = `rgb(255, 255, 255)`;
}

// Random Button Event Listener
let randomBtn = document.getElementById("randombutton");
randomBtn.addEventListener("click", randomBg);

function randomBg() {
  // Input
  // Process
  let rgbOutput = document.getElementById("rgboutput");
  r = Math.floor(Math.random() * 256);
  g = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  rInput = document.getElementById("redinput");
  gInput = document.getElementById("greeninput");
  bInput = document.getElementById("blueinput");

  // Output
  displayWindow.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  rgbOutput.innerHTML = `rgb(${r}, ${g}, ${b})`;
  previewBtn.style.color = `rgb(${r}, ${g}, ${b})`;
  randomBtn.style.color = `rgb(${r}, ${g}, ${b})`;
  randomBtn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  rInput.value = `${r}`;
  gInput.value = `${g}`;
  bInput.value = `${b}`;

  // Instances
  if (r === `255` && g === `0` && b === `0`) {
    alert("Red!");
  } else if (r === `0` && g === `255` && b === `0`) {
    alert("Green!");
  } else if (r === `0` && g === `0` && b === `255`) {
    alert("Blue!");
  }
}

// Width & Height Event Listener
widthIn.addEventListener("change", changeSize);
heightIn.addEventListener("change", changeSize);

function changeSize() {
  // Input
  let previewWidth = +widthIn.value;
  let previewHeight = +heightIn.value;

  // Validate Sizes
  // Check Width Value (Contrain Width betweem 50 - 400)
  if (previewWidth > 400) {
    previewWidth = 400;
    widthIn.value = `400`;
  } else if (previewWidth < 50) {
    previewWidth = 50;
    widthIn.value = `50`;
  }
  // Check Green Value (Contrain Height betweem 50 - 200)
  if (previewHeight > 200) {
    previewHeight = 200;
    heightIn.value = `200`;
  } else if (previewHeight < 50) {
    previewHeight = 50;
    heightIn.value = `50`;
  }

  // Output
  displayWindow.style.width = `${previewWidth}px`;
  displayWindow.style.height = `${previewHeight}px`;
}
