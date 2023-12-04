let grid = document.getElementById('gridContainer');
let maxWidth = grid.clientWidth;

createGrid = (cells) => {
    for (let i = 0; i < cells; i++) {
        let div = document.createElement('div');
        
        let width = maxWidth /cells;
        div.style.width = width + "px";
        div.style.height = width + "px";

        console.log(width);
        grid.appendChild(div);
    }
};

createGrid(16);