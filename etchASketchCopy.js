const displayContainer = document.getElementById('displayContainer');
const display = document.getElementById('display');
const ctx = display.getContext('2d');

function resizeDisplay() {
    display.width = (displayContainer.clientWidth * 0.96);
    display.height = (displayContainer.clientHeight * 0.96);
}

window.addEventListener("resize", resizeDisplay, false);

resizeDisplay();

function createGrid(rows,cols) {
    if (rows>cols) {
        let height = ((display.height)/rows);
        let widthRemainder = ((display.width)-(height*rows));
        for (let i=0; i<rows; i++) {
            for (let j=0; j<cols; j++) {
                ctx.fillStyle = '#f0e9d3';
                ctx.fillRect(((i*height)+(widthRemainder*0.022)),(j*height),(height),(height));
                ctx.strokeStyle = 'rgba(128, 124, 115, 0.3)';
                ctx.strokeRect(((i*height)+(widthRemainder*0.022)),(j*height),(height),(height));
            }
        }
        /* resizeDisplayContainer(widthRemainder); */
    } else {
        let height = ((display.height)/rows);
        let widthRemainder = ((display.width)-(height*cols));
        for (let i=0; i<cols; i++) {
            for (let j=0; j<rows; j++) {
                ctx.fillStyle = '#f0e9d3';
                ctx.fillRect(((i*height)+(widthRemainder*0.022)),(j*height),(height),(height));
                ctx.strokeStyle = 'rgba(128, 124, 115, 0.3)';
                ctx.strokeRect(((i*height)+(widthRemainder*0.022)),(j*height),(height),(height));
            }
        }
        /* resizeDisplayContainer(widthRemainder); */
    }
}

/* function resizeDisplayContainer(widthRemainder) {
    displayContainer.style.width = `${(display.width)-((widthRemainder)*0.9)}`;
    displayContainer.style.height = `${(display.height)+10}`;
} */
/* function createGrid(rows,cols) {
    //initially clear the grid
    display.innerHTML = "";
    //loop for creating rows
    for (let i=0; i<rows; ++i) {
        let row = display.appendChild(document.createElement("div"));
        for(let j=0; j<cols; ++j){
            let cell = row.appendChild(document.createElement("div"));
            cell.classList.add('cell')
        }
    }
    
    
    /* My attempt
        for (let i = 0; i<(rows * cols); i++ ) {
        let cell = document.createElement('div');
        display.style.gridTemplateRows = rows;
        display.style.gridTemplateColumns = cols;
        cell.setAttribute('id',`cell${i}`);
        cell.setAttribute('class','cell');
        cell.style.padding = '1px';
        display.appendChild(cell);
    } 
}*/

createGrid(16,16); 



