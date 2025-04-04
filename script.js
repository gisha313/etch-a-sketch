const grid = document.querySelector(".grid");

function createGrid(n) {
    for (let i = 0; i < n*n; i++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");

        let heightPercentage = (1.0 / n * 100).toFixed(2).toString() + "%"
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

createGrid(100);