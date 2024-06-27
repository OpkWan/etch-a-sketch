document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const button = document.getElementById("resize-button");

    function createGrid(size) {
        container.innerHTML = "";
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.style.width = `${960 / size}px`;
            gridItem.style.height = `${960 / size}px`;
            gridItem.dataset.lightness = 1.0; // Start with full lightness (100%)
            gridItem.addEventListener("mouseover", changeColor);
            container.appendChild(gridItem);
        }
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    function changeColor(e) {
        const item = e.target;
        if (!item.dataset.color) {
            item.dataset.color = getRandomColor();
        }
        let lightness = item.dataset.lightness;
        lightness -= 0.1;
        if (lightness < 0) lightness = 0;
        const color = item.dataset.color;
        const rgbValues = color.match(/\d+/g);
        const r = Math.floor(rgbValues[0] * lightness);
        const g = Math.floor(rgbValues[1] * lightness);
        const b = Math.floor(rgbValues[2] * lightness);
        item.style.backgroundColor = `rgb(${r},${g},${b})`;
        item.dataset.lightness = lightness;
    }

    button.addEventListener("click", () => {
        let size = parseInt(prompt("Enter the number of squares per side (maximum 100):"));
        if (size && size > 0 && size <= 100) {
            createGrid(size);
        } else {
            alert("Invalid size. Please enter a number between 1 and 100.");
        }
    });

    createGrid(16); // Initial grid size
});
