/* Author: Aldin Moreno */

const container = document.querySelector(".container");
const button = document.querySelector("#gridButton");
const cbutton = document.querySelector("#clearButton");
const randButton = document.querySelector("#randomize");
const resetButton = document.querySelector("#resetGrid");
let bgcolor = "rgb(102,102,102)";
let counter = 1;

function generateDiv(divCount) {
   const gridCellSize = ((600 / divCount) - 2).toFixed(2);
   let gridSize = Math.pow(divCount, 2);
   console.log(gridCellSize);
   console.log(gridSize);

   // Create the div
   while (gridSize > 0) {
      const gridDiv = document.createElement("div");
      container.appendChild(gridDiv);
      gridDiv.setAttribute("class", "gridbox");
      gridDiv.style.width = gridCellSize + "px";
      gridDiv.style.height = gridCellSize + "px";
      gridDiv.style.border = "1px solid white";
      gridDiv.style.backgroundColor = "white";
      gridDiv.style.borderCollapse = "collapse";
      gridSize--;
   }

   const gridCells = document.querySelectorAll(".gridbox");
   gridCells.forEach(cell => cell.addEventListener("mouseenter", changebgcolor));
}

cbutton.addEventListener("click", clearTiles);

function clearTiles() {
   const tiles = document.querySelectorAll(".gridbox");
   tiles.forEach(cell => {
      cell.style.backgroundColor = "white";
   });
}

randButton.addEventListener("click", () => {
   counter++;
   console.log(counter);
   checkActiveButton();
   /* let r = Math.round((Math.random() * 255 - 1) + 1);
   let g = Math.round((Math.random() * 255 - 1) + 1);
   let b = Math.round((Math.random() * 255 - 1) + 1);
   bgcolor = "rgb(" + r + "," + g + "," + b + ")"; */
});

function checkActiveButton() {
   if (counter % 2 === 0) {
      randButton.style.backgroundColor = "blue";
   } else {
      randButton.style.backgroundColor = "yellow";
   }
}

function randomizeRGB() {
   let r = Math.round((Math.random() * 255 - 1) + 1);
   let g = Math.round((Math.random() * 255 - 1) + 1);
   let b = Math.round((Math.random() * 255 - 1) + 1);
   return "rgb(" + r + "," + g + "," + b + ")";
}

function changebgcolor() {
   if (counter % 2 === 0) {
      this.style.backgroundColor = randomizeRGB();
   } else {
      this.style.backgroundColor = bgcolor;
   }

}

function clearGrid(howManyGrid) {
   /* const howManyGrid = prompt("Enter how many squares per side");
   console.log(howManyGrid); */

   if (howManyGrid >= 1 && howManyGrid <= 100) {
      while (container.hasChildNodes()) {
         container.removeChild(container.lastChild);
      }
      generateDiv(howManyGrid);
   } else {
      alert("Choose a number between 1-100");
      clearGrid(getUserPrompt());
   }
}

function getUserPrompt() {
   const howManyGrid = prompt("Enter how many squares per side");
   return howManyGrid;
   //console.log(howManyGrid);
}
button.addEventListener("click", () => {
   clearGrid(getUserPrompt());
});

resetButton.addEventListener("click", () => {
   clearGrid(16);
});

generateDiv(16);