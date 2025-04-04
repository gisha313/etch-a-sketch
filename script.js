const grid = document.querySelector(".grid");

function random(n){
    return Math.floor(Math.random() * n);
}

function createGrid(n) {
    grid.innerHTML = '';
    for (let i = 0; i < n*n; i++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");

        let heightPercentage = (1.0 / n * 100).toString() + "%"
        pixel.style.height = heightPercentage;

        pixel.addEventListener("mouseenter", () => {
            colorPixel(pixel, true, true);
        });
        grid.appendChild(pixel);
    }
}

function colorPixel(pixel, rainbow, darkening) {
    if (darkening) {
        if (!pixel.style.backgroundColor){
            if (!rainbow)
                pixel.style.backgroundColor = "rgb(0,0,0,0.1)";
            else {
                let rgb = [random(256).toString(), random(256).toString(), random(256).toString()];
                pixel.style.backgroundColor = `rgb(${rgb.join()},0.1)`;
            }
        }
        else {
            let color = pixel.style.backgroundColor;
            let opacity = Number(color.slice(color.lastIndexOf(",")+1, -1));
            opacity = opacity === 1 ? 1 : opacity + 0.1;
            let colorNoOpacity = color.slice(0, color.lastIndexOf(",")+1);
            let darker_color = colorNoOpacity + opacity.toString() + ")";
            pixel.style.backgroundColor = darker_color;
        }
    }
    else{
        if (!rainbow)
            pixel.style.backgroundColor = "black";
        else {
            let rgb = [random(256).toString(), random(256).toString(), random(256).toString()];
            pixel.style.backgroundColor = `rgb(${rgb.join()})`;
        }
    }
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