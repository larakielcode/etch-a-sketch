/* Author: Aldin Moreno */

const container = document.querySelector(".container");
const button = document.querySelector("#gridButton");

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
      //gridDiv.style.backgroundColor = "#59e47c";
      gridDiv.style.backgroundColor = "white";
      gridDiv.style.borderCollapse = "collapse";
      gridSize--;
   }

   const gridCells = document.querySelectorAll(".gridbox");
   gridCells.forEach(cell => cell.addEventListener("mouseenter", changebgcolor));
}



function changebgcolor() {
   this.style.backgroundColor = "#6A9FE6";
}

function clearGrid() {
   const howManyGrid = prompt("Enter how many squares per side");
   console.log(howManyGrid);

   if (howManyGrid >= 1 && howManyGrid <= 100) {
      while (container.hasChildNodes()) {
         container.removeChild(container.lastChild);
      }
      generateDiv(howManyGrid);
   } else {
      alert("Choose a number between 1-100");
      clearGrid();
   }
}

button.addEventListener("click", clearGrid);
generateDiv(16);