const grid = document.querySelector(".grid");

function createGrid(n) {
    for (let i = 0; i < n*n; i++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        let heightPercentage = (1.0 / n * 100).toFixed(2).toString() + "%"
        console.log(heightPercentage)
        pixel.style.height = heightPercentage;
        grid.appendChild(pixel);
    }
}

createGrid(100);