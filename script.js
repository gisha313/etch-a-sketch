const grid = document.querySelector(".grid");

function random(n){
    return Math.floor(Math.random() * n);
}

function createGrid(n) {
    for (let i = 0; i < n*n; i++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");

        let heightPercentage = (1.0 / n * 100).toString() + "%"
        pixel.style.height = heightPercentage;

        pixel.addEventListener("mouseenter", () => {
            colorPixel(pixel, rainbowToggle, darkenToggle);
        });
        grid.appendChild(pixel);
    }
}

function restartGrid(n) {
    grid.innerHTML = '';
    createGrid(n);
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
let gridSize = 16;
resetBtn.addEventListener("click", () => {
    restartGrid(gridSize);
});

createGrid(16);

const blackBtn = document.querySelector(".black-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");
const darkenBtn = document.querySelector(".darken-btn");

let rainbowToggle = false;
let darkenToggle = false;

blackBtn.addEventListener("click", () => {
    if (rainbowToggle) {
        rainbowToggle = false;
        rainbowBtn.classList.remove("active-btn");
        blackBtn.classList.add("active-btn");
    }
});

rainbowBtn.addEventListener("click", () => {
    if (!rainbowToggle) {
        rainbowToggle = true;
        rainbowBtn.classList.add("active-btn");
        blackBtn.classList.remove("active-btn");
    }
});

darkenBtn.addEventListener("click", () => {
    restartGrid(gridSize)
    if (!darkenToggle) {
        darkenToggle = true;
        darkenBtn.classList.add("active-btn");
    }
    else {
        darkenToggle = false;
        darkenBtn.classList.remove("active-btn");
    }
});

const gridSizeRange = document.querySelector("#range");
gridSizeRange.addEventListener("input", () => {
    gridSize = Number(gridSizeRange.value);
});