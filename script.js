const grid = document.querySelector(".grid");

function createGrid(n) {
    grid.innerHTML = '';
    for (let i = 0; i < n*n; i++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");

        let heightPercentage = (1.0 / n * 100).toString() + "%"
        pixel.style.height = heightPercentage;

        pixel.addEventListener("mouseenter", () => {
            colorPixel(pixel);
        });
        grid.appendChild(pixel);
    }
}

function colorPixel(pixel) {
    pixel.style.backgroundColor = "black";
}

const resetBtn = document.querySelector("#reset-btn");
console.log(resetBtn);
resetBtn.addEventListener("click", () => {
    let gridSize = Number(prompt("Enter grid size (1-100): "));
    
    while (!gridSize || gridSize > 100 || gridSize < 0) {
        gridSize = Number(prompt("Please enter a number beween 1 and 100: "));
    }

    createGrid(gridSize);
});

createGrid(16);