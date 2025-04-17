/* Author: Aldin Moreno */

const container = document.querySelector(".container");

for (let i = 1; i <= 16; i++) {
   for (let j = 1; j <= 16; j++) {
      const div = document.createElement("div");
      div.setAttribute("class", "gridbox");
      container.appendChild(div);
   }
}
const gridCells = document.querySelectorAll(".gridbox");
gridCells.forEach(cell => cell.addEventListener("mouseenter", changebgcolor));


function changebgcolor() {
   this.style.backgroundColor = "#5C40BC";
}